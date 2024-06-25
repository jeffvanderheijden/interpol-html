import React, { useState, useRef } from "react";
import Layout from "../helpers/Layout";
import LocalStorage from "../helpers/LocalStorage";
import painting from "../helpers/images/painting.png";
import puzzle from "../helpers/images/puzzle.png";

const Opdracht2Page = () => {
    const frameRef = useRef(null);
    const stepOneRef = useRef(null);
    const stepTwoRef = useRef(null);
    const stepThreeRef = useRef(null);

    const [stepOne, setStepOne] = useState(false);
    const [stepTwo, setStepTwo] = useState(false);
    const [stepThree, setStepThree] = useState(false);
    const [stepsComplete, setStepsComplete] = useState(false);
    const [successScreen, setSuccessScreen] = useState(false);

    const nextPage = "/vraag-9"; 
    const allowedEditors = ['html', 'css'];
    const cssState = `/* CSS */
.painting {
    width: 300px;
}

.puzzle {
    width: 149px;
}`;
    const jsState = `// JavaScript`;
    const htmlState = `<!-- HTML -->
<img class="painting" src="${painting}" alt="Painting by Da Vinci" />
<img class="puzzle" src="${puzzle}" alt="Puzzle piece" />`;

    const validate = () => {
        const CSSToCheck = frameRef.current.contentWindow.document.getElementsByTagName('style')[0].innerHTML;
        const checkOneOne = CSSToCheck.includes('position');
        const checkOneTwo = CSSToCheck.includes('absolute');
        const checkOne = (checkOneOne && checkOneTwo);
        const checkTwoOne = CSSToCheck.includes('left');
        const checkTwoTwo = CSSToCheck.includes('78px');
        const checkTwo = (checkTwoOne && checkTwoTwo);
        const checkThreeOne = CSSToCheck.includes('top');
        const checkThreeTwo = CSSToCheck.includes('69px');
        const checkThree = (checkThreeOne && checkThreeTwo);
       
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

    const explanation = () => (
        <>
            <p>Gebruik wat je hebt geleerd over positioning om het puzzelstuk hiernaast perfect over de rest van het schilderij te plaatsen.</p><br />            
        </>
    )

    const assignment = () => (
        <>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepOneRef} checked={stepOne} />
                <p>In het CSS gedeelte, maak gebruik van de juiste position.</p>
            </div>   
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepTwoRef} checked={stepTwo} />
                <p>Zorg ervoor dat het puzzelstuk de juiste pixel afstand heeft van links.</p>
            </div>  
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepThreeRef} checked={stepThree} />
                <p>Zorg ervoor dat het puzzelstuk de juiste pixel afstand heeft van boven.</p>
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
                explanationTitle={"Opdracht 2"}
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

export default Opdracht2Page

export const Head = () => <title>Opdracht 2</title>
