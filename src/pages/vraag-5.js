import React, { useState, useRef } from "react";
import Layout from "../helpers/Layout";
import Editor from '../components/Editor/Editor';
import LocalStorage from "../helpers/LocalStorage";

const Vraag5Page = () => {
    const frameRef = useRef(null);
    const stepOneRef = useRef(null);
    const stepTwoRef = useRef(null);
    const stepThreeRef = useRef(null);

    const [stepOne, setStepOne] = useState(false);
    const [stepTwo, setStepTwo] = useState(false);
    const [stepThree, setStepThree] = useState(false);
    const [stepsComplete, setStepsComplete] = useState(false);
    const [successScreen, setSuccessScreen] = useState(false);

    const nextPage = "/opdracht-1"; 
    const allowedEditors = ['html'];
    const cssState = `/* CSS */`;
    const jsState = `// JavaScript`;
    const htmlState = `<!-- HTML -->`;

    const validateHTML = () => {
        const codeToCheck = frameRef.current.contentWindow.document.body.innerHTML;
        const checkOne = codeToCheck.includes('<a');
        const checkTwo = codeToCheck.includes('<a href="https://www.glr.nl"');
        const checkThree = codeToCheck.includes('target="_blank"');

        // Here we validate the output of the iframe
        checkOne ? setStepOne(true) : setStepOne(false);
        checkTwo ? setStepTwo(true) : setStepTwo(false);
        checkThree ? setStepThree(true) : setStepThree(false);
        if (checkOne && checkTwo && checkThree) {
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
    const validateCSS = () => {
        return null;
    }
    const validateJS = () => {
        return null;
    }

    const explanation = () => (
        <>
            <p>Anker-elementen, vaak aangeduid als hyperlinks, worden gebruikt om klikbare links naar andere webpagina's, documenten of bronnen in een HTML-document te maken. Ze werken bijna hetzelfde als afbeeldingen.</p><br />
            <p>Het <code>&lt;a&gt;</code>-element wordt gebruikt om ankers te maken. Hier is een voorbeeld van hoe je het gebruikt:</p><br />
            <Editor
                type={'assignment'}
                language="xml"
                readOnly={true}
                lineWrapping={true}
                value={`<a href="https://www.example.com" target="_self">Klik hier om naar voorbeeld.com te gaan</a>`}
            /><br />
            <ul>
                <li>href: Dit attribuut geeft de URL van de doelpagina aan waarnaar de link leidt.</li>
                <li>target: Het target attribuut biedt controle over hoe gekoppelde pagina's worden geopend, waardoor ontwikkelaars de gebruikerservaring kunnen verbeteren door te bepalen of de gekoppelde inhoud in hetzelfde venster of in een nieuw venster/tabblad wordt geopend.</li>
                <li>Tekstinvoer tussen de opening en sluiting van het <code>&lt;a&gt;</code>-element wordt de zichtbare linktekst op de webpagina.</li>
            </ul>
            <p>Het <code>&lt;a&gt;</code>-element is essentieel voor het maken van klikbare links in HTML-documenten, waardoor gebruikers gemakkelijk kunnen navigeren tussen verschillende webpagina's en bronnen op het internet.</p>
        </> 
    )

    const assignment = () => (
        <>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepOneRef} checked={stepOne} />
                <p>Creëer een <code>&lt;a&gt;</code>-element</p>
            </div>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepTwoRef} checked={stepTwo} />
                <p>Voeg daarin de volgende link in het href attribuut: https://www.glr.nl</p>
            </div>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepThreeRef} checked={stepThree} />
                <p>Voeg tevens hetvolgende toe in een target attribuut: "_blank"</p>
            </div>
            <p>Klik nu op de link om te zien wat er gebeurt.</p>
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
                explanationTitle={"(Hyper)links in HTML"}
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

export default Vraag5Page

export const Head = () => <title>Vraag 5</title>
