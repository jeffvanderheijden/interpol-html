import React, { useState, useRef } from "react";
import Layout from "../helpers/Layout";
import Editor from '../components/Editor/Editor';

const Vraag4Page = () => {
    const frameRef = useRef(null);
    const stepOneRef = useRef(null);
    const stepTwoRef = useRef(null);

    const [stepOne, setStepOne] = useState(false);
    const [stepTwo, setStepTwo] = useState(false);
    const [stepsComplete, setStepsComplete] = useState(false);
    const [successScreen, setSuccessScreen] = useState(false);

    const nextPage = "/vraag-5"; 
    const allowedEditors = ['html'];
    const cssState = `/* CSS */ img { width: 100%; height: auto; }`;
    const jsState = `// JavaScript`;
    const htmlState = `<!-- HTML -->`;

    const validateHTML = () => {
        const codeToCheck = frameRef.current.contentWindow.document.body.innerHTML;
        const checkOne = codeToCheck.includes('<img');
        const checkTwo = codeToCheck.includes('<img src="https://opleiding.com/wp-content/uploads/opleider/grafisch-lyceum-rotterdam-900x0-c-default.png"');

        // Here we validate the output of the iframe
        checkOne ? setStepOne(true) : setStepOne(false);
        checkTwo ? setStepTwo(true) : setStepTwo(false);
        if (checkOne && checkTwo) {
            setStepsComplete(true);
            setSuccessScreen(true);
            setTimeout(() => {
                setSuccessScreen(false);
            }, 2000);
        } else {
            setStepsComplete(false);
            setSuccessScreen(false);
        }
    }
    const validateCSS = () => {
        return null;
    }
    const validateJS = () => {
        return null;
    }

    const explanation = () => (
        <>
            <p>Afbeeldingen zijn een essentieel onderdeel van webontwerp en kunnen worden ingevoegd in HTML-documenten met behulp van het img element.</p><br />
            <p>Het <code>&lt;img&gt;</code>-element wordt gebruikt om afbeeldingen in een HTML-document in te voegen. Hier is een voorbeeld van hoe je het gebruikt:</p><br />
            <Editor
                type={'assignment'}
                language="xml"
                readOnly={true}
                lineWrapping={true}
                value={`<img src="pad/naar/afbeelding.jpg" alt="Beschrijving van de afbeelding">`}
            /><br />
            <ul>
                <li>src: Dit attribuut geeft het bronpad naar de afbeelding aan. Dit kan een URL zijn naar een externe afbeelding of het pad naar een afbeelding op je lokale bestandssysteem.</li>
                <li>alt: Dit attribuut biedt een tekstuele beschrijving van de afbeelding. Het wordt gebruikt door browsers voor toegankelijkheid en wordt weergegeven als de afbeelding niet kan worden geladen.</li>
            </ul>
        </> 
    )

    const assignment = () => (
        <>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepOneRef} checked={stepOne} />
                <p>Creëer een <code>&lt;img&gt;</code>-element</p>
            </div>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepTwoRef} checked={stepTwo} />
                <p>Voeg daarin de volgende link in het src attribuut: https://opleiding.com/wp-content/uploads/opleider/grafisch-lyceum-rotterdam-900x0-c-default.png</p>
            </div>
            
        </>
    )

    return (
        <>
            <Layout
                cssState={cssState}
                jsState={jsState}
                htmlState={htmlState}
                frameRef={frameRef}
                validateHTML={validateHTML}
                validateCSS={validateCSS}
                validateJS={validateJS}
                explanationTopBar={"Leren"}
                explanationSubtitle={"Introductie HTML"}
                explanationTitle={"Afbeeldingen in HTML"}
                explanationTime={"4 min"}
                explanation={explanation}
                assignment={assignment}
                allowedEditors={allowedEditors}
                stepsComplete={stepsComplete}
                successScreen={successScreen}
                nextPage={nextPage}
            />
        </>
  )
}

export default Vraag4Page

export const Head = () => <title>Vraag 4</title>
