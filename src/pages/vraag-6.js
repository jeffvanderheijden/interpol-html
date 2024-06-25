import React, { useState, useRef } from "react";
import Layout from "../helpers/Layout";
import Editor from '../components/Editor/Editor';
import LocalStorage from "../helpers/LocalStorage";

const Vraag6Page = () => {
    const frameRef = useRef(null);
    const stepOneRef = useRef(null);
    const stepTwoRef = useRef(null);

    const [stepOne, setStepOne] = useState(false);
    const [stepTwo, setStepTwo] = useState(false);
    const [stepsComplete, setStepsComplete] = useState(false);
    const [successScreen, setSuccessScreen] = useState(false);

    const nextPage = "/vraag-7"; 
    const allowedEditors = ['html', 'css'];
    const cssState = `/* CSS */`;
    const jsState = `// JavaScript`;
    const htmlState = `<!-- HTML -->`;

    let checkOne = false;
    let checkTwo = false;

    const validate = () => {
        const codeToCheck = frameRef.current.contentWindow.document.body.innerHTML;
        checkOne = codeToCheck.includes('<h1>') ? true : false;
        const CSSToCheck = frameRef.current.contentWindow.document.getElementsByTagName('style')[0].innerHTML;
        const checkTwoOne = CSSToCheck.includes('h1 {');
        const checkTwoTwo = CSSToCheck.includes('color:');
        const checkTwoThree = CSSToCheck.includes('font-size:');
        checkTwo = (checkTwoOne && checkTwoTwo && checkTwoThree);

        // Here we validate the output of the iframe
        checkOne ? setStepOne(true) : setStepOne(false);
        checkTwo ? setStepTwo(true) : setStepTwo(false);
        if (checkOne && checkTwo) {
            setStepsComplete(true);
            setSuccessScreen(true);
            LocalStorage.set('currentPage', nextPage);
            setTimeout(() => {
                setSuccessScreen(false);
            }, 2000);
        } else {
            setStepsComplete(false);
            setSuccessScreen(false);
        }
    }

    const explanation = () => (
        <>
            <p>CSS staat voor Cascading Style Sheets. Het is een opmaaktaal die wordt gebruikt om de presentatie en het uiterlijk van een HTML-document te definiëren. Met CSS kunnen ontwikkelaars verschillende stijlen, zoals kleuren, lettertypen, marges, enzovoort, toepassen op HTML-elementen. Bekijk de video hieronder voor een gedetaileerde uitleg over CSS.</p><br /><br />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/wRNinF7YQqQ?si=1AN2mvrM3puEGUWj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><br /><br /><br />
            <p>CSS werkt door stijlregels toe te passen op specifieke HTML-elementen. Deze stijlregels worden gedefinieerd in een apart CSS-bestand of binnen het HTML-document zelf, tussen <code>&lt;style&gt;</code> tags in de <code>&lt;head&gt;</code> sectie. Elke stijlregel bestaat uit een selector en een set stijlregels die de gewenste opmaak specificeren:</p><br />
            <Editor
                type={'assignment'}
                language="css"
                readOnly={true}
                lineWrapping={true}
                value={`h1 {
    color: blue;
    font-size: 24px;
}`}
            /><br />
            <p>In deze regel is h1 de selector die alle <code>&lt;h1&gt;</code> elementen in het HTML-document target. De stijlregels binnen de accolades geven aan dat alle <code>&lt;h1&gt;</code> elementen blauwe tekstkleur en een lettergrootte van 24 pixels moeten hebben.</p><br />
            <p>We hebben boven de index.html nu ook een styles.css tabje toegevoegd. Hierin kun je CSS toevoegen.</p>
        </> 
    )

    const assignment = () => (
        <>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepOneRef} checked={stepOne} />
                <p>Creëer een <code>&lt;h1&gt;</code>-element met een waarde.</p>
            </div>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepTwoRef} checked={stepTwo} />
                <p>Voeg in het styles.css tabje styling toe om de h1 een kleur te geven, en een lettertype grootte</p>
            </div>
            <p>Voeg meerdere h1 elementen toe met andere tekst om te zien wat er gebeurt.</p>
        </>
    )

    return (
        <>
            <Layout
                cssState={cssState}
                jsState={jsState}
                htmlState={htmlState}
                frameRef={frameRef}
                validateHTML={validate}
                validateCSS={validate}
                validateJS={validate}
                explanationTopBar={"Leren"}
                explanationSubtitle={"Introductie CSS"}
                explanationTitle={"Wat is CSS?"}
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

export default Vraag6Page

export const Head = () => <title>Vraag 6</title>
