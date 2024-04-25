import React, { useState, useRef } from "react";
import Layout from "../helpers/Layout";

const Vraag11Page = () => {
    const frameRef = useRef(null);
    const stepOneRef = useRef(null);

    const [stepOne, setStepOne] = useState(false);
    const [stepsComplete, setStepsComplete] = useState(false);
    const [successScreen, setSuccessScreen] = useState(false);

    const nextPage = "/vraag-12"; 
    const allowedEditors = ['html', 'css'];
    const cssState = `/* CSS */`;
    const jsState = `// JavaScript`;
    const htmlState = `<!-- HTML -->`;

    const validate = () => {
        const CSSToCheck = frameRef.current.contentWindow.document.getElementsByTagName('style')[0].innerHTML;
        // const checkOne = CSSToCheck.includes('position: absolute');
        const checkOne = true;

        // Here we validate the output of the iframe
        checkOne ? setStepOne(true) : setStepOne(false);
        if (checkOne) {
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

    const explanation = () => (
        <>
            <p>Lorem ipsum</p><br />
        </>
    )

    const assignment = () => (
        <>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepOneRef} checked={stepOne} />
                <p>Positioneer de afbeeldingen over elkaar heen zodat het gedicht leesbaar wordt.</p>
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
                explanationSubtitle={"HTML/CSS"}
                explanationTitle={"Eindopdracht"}
                explanationTime={"15 min"}
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

export default Vraag11Page

export const Head = () => <title>Vraag 11</title>
