import React, { useState, useRef } from "react";
import Layout from "../helpers/Layout";
import Editor from '../components/Editor/Editor';
import LocalStorage from "../helpers/LocalStorage";

const Vraag7Page = () => {
    const frameRef = useRef(null);
    const stepOneRef = useRef(null);
    const stepTwoRef = useRef(null);
    const stepThreeRef = useRef(null);
    const stepFourRef = useRef(null);
    const stepFiveRef = useRef(null);

    const [stepOne, setStepOne] = useState(false);
    const [stepTwo, setStepTwo] = useState(false);
    const [stepThree, setStepThree] = useState(false);
    const [stepFour, setStepFour] = useState(false);
    const [stepFive, setStepFive] = useState(false);
    const [stepsComplete, setStepsComplete] = useState(false);
    const [successScreen, setSuccessScreen] = useState(false);

    const nextPage = "/vraag-8"; 
    const allowedEditors = ['html', 'css'];
    const cssState = `/* CSS */
* {
    color: transparent;
}`;
    const jsState = `// JavaScript`;
    const htmlState = `<!-- HTML -->
<h1>Crypto hacker op GLR</h1>
<h2>Studenten zitten hem op de hielen</h2>
<p>De hacker is laatst gezien op de 5e verdieping van het GLR. Er wordt vermoed dat een leraar de dader is.</p>`;

    const validate = () => {
        const CSSToCheck = frameRef.current.contentWindow.document.getElementsByTagName('style')[0].innerHTML;
        const checkOneOne = CSSToCheck.includes('body {') || CSSToCheck.includes('body{');
        const checkOneTwo = CSSToCheck.includes('background') || CSSToCheck.includes('background-color');
        const checkOneThree = CSSToCheck.includes('#333333') || CSSToCheck.includes('#333');
        const checkOne = (checkOneOne && checkOneTwo && checkOneThree);
        const checkTwoOne = CSSToCheck.includes('h1 {') || CSSToCheck.includes('h1{');
        const checkTwoTwo = CSSToCheck.includes('color');
        const checkTwoThree = CSSToCheck.includes('white') || CSSToCheck.includes('#FFFFFF') || CSSToCheck.includes('#FFF') || CSSToCheck.includes('rgb(255,255,255)');
        const checkTwo = (checkTwoOne && checkTwoTwo && checkTwoThree);
        const checkThreeOne = CSSToCheck.includes('h2 {') || CSSToCheck.includes('h2{');
        const checkThreeTwo = CSSToCheck.includes('#E6E2DD');
        const checkThree = (checkThreeOne && checkThreeTwo);
        const checkFour = CSSToCheck.includes('#33CD4B');
        const checkFiveOne = CSSToCheck.includes('p {') || CSSToCheck.includes('p{');
        const checkFiveTwo = CSSToCheck.includes('#D4D4D4');
        const checkFive = (checkFiveOne && checkFiveTwo);

        // Here we validate the output of the iframe
        checkOne ? setStepOne(true) : setStepOne(false);
        checkTwo ? setStepTwo(true) : setStepTwo(false);
        checkThree ? setStepThree(true) : setStepThree(false);
        checkFour ? setStepFour(true) : setStepFour(false);
        checkFive ? setStepFive(true) : setStepFive(false);
        if (checkOne && checkTwo && checkThree && checkFour && checkFive) {
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
            <p>Om je pagina wat te verfraaien, kun je kleuren toevoegen. Je kunt de tekstkleur aanpassen maar ook de achtergrondkleur. Dit doe je allemaal in CSS.</p><br /><br />
            <h3>Tekstkleur</h3><br />
            <p>Om tekstkleur te wijzigen, selecteren we eerst het HTML element waarop we de kleur willen toepassen. (In dit geval een <code>&lt;p&gt;</code> element). Daarna defineren we de color property zoals:</p><br />            
            <Editor
                type={'assignment'}
                language="css"
                readOnly={true}
                lineWrapping={true}
                value={`p {
    color: #0000ff;
}`}
            /><br /><br />
            <h3>Achtergrondkleur</h3><br />
            <p>Om een element een achtergrondkleur te geven, (in dit voorbeeld het <code>&lt;body&gt;</code> element) gebruiken we de background-color property:</p><br />
            <Editor
                type={'assignment'}
                language="css"
                readOnly={true}
                lineWrapping={true}
                value={`body {
    background-color: #00ff00;
}`}
            /><br /><br />
            <h3>Kleuren defineren in CSS</h3><br />
            <p>Je kunt kleuren op 3 manieren schrijven.</p><br />
            <ul> 
                <li>gewoon als Engelstalige tekst (white)</li>
                <li>In HEX-code (hexadecimaal: #FFFFFF)</li>
                <li>In RGB-code (rood-groen-blauw waarde: (255,255,255))</li>
            </ul>
            <p>Voor wit kun je bijvoorbeeld schrijven:</p><br />
            <Editor
                type={'assignment'}
                language="css"
                readOnly={true}
                lineWrapping={true}
                value={`p {
    color: white;
}

p {
    color: #FFFFFF;
}

p {
    color: rgb(255,255,255);
}`} /><br />
            <p>Dit betekent in alle drie de gevallen dat de kleur wit moet zijn. Je zult ze alledrie tegen komen tijdens je werk als developer.</p><br />
        </> 
    )

    const assignment = () => (
        <>
            <p>Open het styles.css in je editor en wijzig een aantal eigenschappen in dit document:</p>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepOneRef} checked={stepOne} />
                <p>De achtergrondkleur van de hele pagina (de body) moet #333333 worden.</p>
            </div>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepTwoRef} checked={stepTwo} />
                <p>De tekstkleur van heading 1 moet wit worden.</p>
            </div>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepThreeRef} checked={stepThree} />
                <p>De achtergrondkleur van heading 2 moet #E6E2DD worden.</p>
            </div>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepFourRef} checked={stepFour} />
                <p>De tekstkleur van heading 2 moet #33CD4B worden.</p>
            </div>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepFiveRef} checked={stepFive} />
                <p>De tekstkleur van de paragrafen moet #D4D4D4 worden.</p>
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
                explanationTitle={"Kleur & achtergrondkleur"}
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

export default Vraag7Page

export const Head = () => <title>Vraag 7</title>
