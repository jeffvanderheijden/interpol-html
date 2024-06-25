import React, { useState, useRef } from "react";
import Layout from "../helpers/Layout";
import Editor from '../components/Editor/Editor';
import LocalStorage from "../helpers/LocalStorage";

const Vraag8Page = () => {
    const frameRef = useRef(null);
    const stepOneRef = useRef(null);
    const stepTwoRef = useRef(null);

    const [stepOne, setStepOne] = useState(false);
    const [stepTwo, setStepTwo] = useState(false);
    const [stepsComplete, setStepsComplete] = useState(false);
    const [successScreen, setSuccessScreen] = useState(false);

    const nextPage = "/opdracht-2"; 
    const allowedEditors = ['html', 'css'];
    const cssState = `/* CSS */
div {
    width: 150px;
    height: 150px;
    line-height: 150px;
    text-align: center;
    background-color: red;
    color: white;
}`;
    const jsState = `// JavaScript`;
    const htmlState = `<!-- HTML -->
<div>Positioneer mij!</div>`;

    const validate = () => {
        const CSSToCheck = frameRef.current.contentWindow.document.getElementsByTagName('style')[0].innerHTML;
        const checkOneOne = CSSToCheck.includes('div {');
        const checkOneTwo = CSSToCheck.includes('position: absolute;');
        const checkOne = (checkOneOne && checkOneTwo);
        const checkTwoOne = CSSToCheck.includes('left: 100px;');
        const checkTwoTwo = CSSToCheck.includes('top: 100px;');
        const checkTwo = (checkTwoOne && checkTwoTwo);

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
            <p>Wanneer je een website bouwt dan krijg je een ontwerp aangeleverd van de vormgever (of je ontwerpt het zelf). Hierin staan afbeeldingen naast tekst of staat de tekst zelfs over een afbeelding heen, elementen kunnen openen en sluiten vanuit de zijkant van het scherm informatie staat precies op de plek waar de ontwerper het wil. Je zult dan aan de HTML pagina moeten aangeven waar zo'n afbeelding of een paragraaf moet staan. Dit doe je met positioning. En positioning doe je in het CSS bestand.</p><br /><br />
            <h3>Absolute</h3><br />
            <p>Één manier van positioneren heet "absolute" positionering. Hiermee houd het absoluut geposioneerde element geen rekening meer met de andere elementen.</p><br />            
            <Editor
                type={'assignment'}
                language="css"
                readOnly={true}
                lineWrapping={true}
                value={`p {
    position: absolute;
}`}
            /><br /><br />
            <h3>Relative</h3><br />
            <p>Het tegenovergestelde van de "absolute" positie is "relative". Dit verteld het element dat het juist wel rekening moet houden met andere elementen op de pagina.</p><br />
            <Editor
                type={'assignment'}
                language="css"
                readOnly={true}
                lineWrapping={true}
                value={`body {
    position: relative;
}`}
            />
        </>
    )

    const assignment = () => (
        <>
            <p>We gaan nu een element positioneren door gebruik te maken van de <code>position: absolute;</code> CSS attribuut.</p>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepOneRef} checked={stepOne} />
                <p>Pas de styling aan zodat het <code>&lt;div&gt;</code> element een absolute positie krijgt.</p>
            </div>   
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepTwoRef} checked={stepTwo} />
                <p>Plaats het element 100px van de zijkant, en 100px van de bovenkant. Je gebruikt hiervoor de <code>left</code> & <code>top</code> attributen.</p>
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
                validateHTML={validate}
                validateCSS={validate}
                validateJS={validate}
                explanationTopBar={"Leren"}
                explanationSubtitle={"Introductie CSS"}
                explanationTitle={"Positionering"}
                explanationTime={"5 min"}
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

export default Vraag8Page

export const Head = () => <title>Vraag 8</title>
