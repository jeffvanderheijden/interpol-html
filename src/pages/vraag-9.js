import React, { useState, useRef } from "react";
import Layout from "../helpers/Layout";
import Editor from '../components/Editor/Editor';
import LocalStorage from "../helpers/LocalStorage";

const Vraag9Page = () => {
    const frameRef = useRef(null);
    const stepOneRef = useRef(null);
    const stepTwoRef = useRef(null);
    const stepThreeRef = useRef(null);
    const stepFourRef = useRef(null);

    const [stepOne, setStepOne] = useState(false);
    const [stepTwo, setStepTwo] = useState(false);
    const [stepThree, setStepThree] = useState(false);
    const [stepFour, setStepFour] = useState(false);
    const [stepsComplete, setStepsComplete] = useState(false);
    const [successScreen, setSuccessScreen] = useState(false);

    const nextPage = "/vraag-10"; 
    const allowedEditors = ['html', 'css'];
    const cssState = `/* CSS */`;
    const jsState = `// JavaScript`;
    const htmlState = `<!-- HTML -->`;

    const validate = () => {
        const codeToCheck = frameRef.current.contentWindow.document.body.innerHTML;
        const checkOne = codeToCheck.includes('<div id="uniqueDiv">') ? true : false;
        const CSSToCheck = frameRef.current.contentWindow.document.getElementsByTagName('style')[0].innerHTML;
        const checkTwoOne = CSSToCheck.includes('#uniqueDiv');
        const checkTwoTwo = CSSToCheck.includes('background-color: red;');
        const checkTwo = (checkTwoOne && checkTwoTwo);
        const checkThree = codeToCheck.includes('<div class="notUnique">') ? true : false;
        const checkFourOne = CSSToCheck.includes('.notUnique');
        const checkFourTwo = CSSToCheck.includes('color: blue;');
        const checkFour = (checkFourOne && checkFourTwo);

        // Here we validate the output of the iframe
        checkOne ? setStepOne(true) : setStepOne(false);
        checkTwo ? setStepTwo(true) : setStepTwo(false);
        checkThree ? setStepThree(true) : setStepThree(false);
        checkFour ? setStepFour(true) : setStepFour(false);
        if (checkOne && checkTwo && checkThree && checkFour) {
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
            <p>We hebben tot nu toe CSS geschreven die iedere keer elk element styling gaf. (Bijvoorbeeld alle h1 elementen. Of alle p elementen). Maar wat nou als we slechts 1 van die elementen willen stylen?</p><br /><br />
            <h3>ID's</h3><br />
            <p>Om een specifiek element te kunnen stylen, moeten we deze kunnen "identificeren". Hiervoor wordt het "id" attribuut gebruikt. </p><br />            
            <Editor
                type={'assignment'}
                language="xml"
                readOnly={true}
                lineWrapping={true}
                value={`<div id="mijnId">Dit is een div met een id "mijnId"</div>`}
            /><br />
            <p>Let op! Een id mag maar 1x per document voorkomen. Je kunt dus niet meerdere elementen hetzelfde id meegeven. Daarvoor gebruiken we iets anders, namelijk...</p><br /><br />
            <h3>Classes</h3><br />
            <p>Classes zijn in tegenstelling tot id's juist bedoeld om aan meerdere elementen mee te geven. Door een class te stylen kun je meerdere elementen tegerlijkertijd stylen.</p><br />
            <Editor
                type={'assignment'}
                language="xml"
                readOnly={true}
                lineWrapping={true}
                value={`<div class="mijnClass">Dit is een div met een class "mijnClass" </div>`}
            /><br /><br />
            <h3>Styling toepassen</h3><br />
            <p>Om de elementen met een id aan te roepen in onze CSS gebruiken we de <code>#</code></p><br />
            <Editor
                type={'assignment'}
                language="css"
                readOnly={true}
                lineWrapping={true}
                value={`#mijnDiv {
    background-color: red;
}`}
            /><br />
            <p>Om de elementen met een class aan te roepen in onze CSS gebruiken we de <code>.</code></p><br />
            <Editor
                type={'assignment'}
                language="css"
                readOnly={true}
                lineWrapping={true}
                value={`.mijnClass {
    background-color: green;
}`}
            /><br />
        </>
    )

    const assignment = () => (
        <>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepOneRef} checked={stepOne} />
                <p>Maak een <code>&lt;div&gt;</code> element aan met een id attribuut "uniqueDiv".</p>
            </div>   
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepTwoRef} checked={stepTwo} />
                <p>Maak de achtergrondkleur van het element met id uniqueDiv rood.</p>
            </div>  
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepThreeRef} checked={stepThree} />
                <p>Maak nu 3 <code>&lt;div&gt;</code> elementen aan, geef de eerste twee een class attribuut "notUnique".</p>
            </div>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepFourRef} checked={stepFour} />
                <p>Maak de kleur van de elementen met class notUnique blauw.</p>
            </div>
            <p>Hier zie je dat de kleur van elk element met de class notUnique veranderd, maar niet dezelfde div elementen die de class niet hebben.</p>      
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
                explanationTitle={"ID's & Classes"}
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

export default Vraag9Page

export const Head = () => <title>Vraag 9</title>
