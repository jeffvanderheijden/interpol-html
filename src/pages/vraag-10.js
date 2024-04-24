import React, { useState, useRef } from "react";
import Layout from "../helpers/Layout";
import lettersBlue from '../helpers/images/lettersblauw.png';
import lettersGreen from '../helpers/images/lettersgroen.png';
import lettersRed from '../helpers/images/lettersrood.png';
import lettersWhite from '../helpers/images/letterswit.png';

const Vraag10Page = () => {
    const frameRef = useRef(null);
    const stepOneRef = useRef(null);

    const [stepOne, setStepOne] = useState(false);
    const [stepsComplete, setStepsComplete] = useState(false);
    const [successScreen, setSuccessScreen] = useState(false);

    const nextPage = "/vraag-10"; 
    const allowedEditors = ['html', 'css'];
    const cssState = `/* CSS */`;
    const jsState = `// JavaScript`;
    const htmlState = `<!-- HTML -->
<img src="${lettersBlue}" alt="Blauwe letters" />
<img src="${lettersGreen}" alt="Groene letters" />
<img src="${lettersRed}" alt="Rode letters" />
<img src="${lettersWhite}" alt="Witte letters" />`;

    const validate = () => {
        const CSSToCheck = frameRef.current.contentWindow.document.getElementsByTagName('style')[0].innerHTML;
        const checkOne = CSSToCheck.includes('position: absolute');

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
            <p>We gaan nu alles wat we geleerd hebben in de praktijk brengen. Je ziet hier dat er een aantal afbeeldingen zijn ingeladen met tekst. Het is de bedoeling dat je deze afbeeldingen over elkaar heen positioneerd zodat het gedicht leesbaar wordt. (Let op: sommige letters zijn wit. Hoe maak je die zichtbaar?)</p><br /><br />
            <p>Voor bonuspunten: fix dit met 2 regels CSS!</p><br />
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
                explanationSubtitle={"Introductie CSS"}
                explanationTitle={"Alles combineren"}
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

export default Vraag10Page

export const Head = () => <title>Vraag 10</title>
