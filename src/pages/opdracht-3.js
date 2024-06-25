import React, { useState, useRef } from "react";
import { navigate } from "gatsby";
import { useGlitch } from 'react-powerglitch';
import Layout from "../helpers/Layout";
import opdracht2 from "./../helpers/images/opdracht2.png";
import hacker from "./../helpers/images/hacker.png";
import HackedScreen from "../components/HackedScreen/HackedScreen";
import LocalStorage from "../helpers/LocalStorage";

const Opdracht3Page = () => {
    const glitch2 = useGlitch();
    const frameRef = useRef(null);
    const stepOneRef = useRef(null);

    const [stepOne, setStepOne] = useState(false);
    const [stepsComplete, setStepsComplete] = useState(false);
    const [successScreen, setSuccessScreen] = useState(false);
    const [hackedScreen, setHackedScreen] = useState(false);

    const nextPage = "/vraag-11"; 
    const allowedEditors = ['html', 'css'];
    const cssState = `/* CSS */`;
    const jsState = `// JavaScript`;
    const htmlState = `<!-- HTML -->`;

    const validateHTML = () => {
        const codeToCheck = frameRef.current.contentWindow.document.body.innerHTML;
        const checkOne = codeToCheck.includes('<input type="password"');
        checkOne ? setStepOne(true) : setStepOne(false);

        if (checkOne) {
            setStepsComplete(true);
            setSuccessScreen(true);
            LocalStorage.set('currentPage', '/vraag-11');
            setTimeout(() => {
                setSuccessScreen(false);
            }, 10000);
            // show hacking screen
            setTimeout(() => {
                setHackedScreen(true);
            }, 10000);
            setTimeout(() => {
                navigate('/vraag-11');
            }, 15000);
        } else {
            setStepsComplete(false);
            setSuccessScreen(false);
            setHackedScreen(false);
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
            <p>Maak nu met alle HTML/CSS kennis die jullie hebben opgedaan een inlog scherm zoals hieronder afgebeeld. Probeer het zo echt mogelijk te laten lijken!</p><br />
            <img src={opdracht2} alt="Opdracht 2" />
            <p>Voor het wachtwoord veld kun je het volgende element gebruiken: <code>&lt;input type="password" /&gt;</code></p><br />
        </>
    )

    const assignment = () => (
        <>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepOneRef} checked={stepOne} />
                <p>Maak een "fake" inlogscherm met behulp van HTML en CSS.</p>
            </div>
        </>
    )

    return (
        <div>
            <Layout
                cssState={cssState}
                jsState={jsState}
                htmlState={htmlState}
                frameRef={frameRef}
                validateHTML={validateHTML}
                validateCSS={validateCSS}
                validateJS={validateJS}
                explanationTopBar={"Leren"}
                explanationSubtitle={"HTML/CSS"}
                explanationTitle={"Nog een opdracht.."}
                explanationTime={"15 min"}
                explanation={explanation}
                assignment={assignment}
                allowedEditors={allowedEditors}
                stepsComplete={stepsComplete}
                successScreen={successScreen}   
                nextPage={nextPage}
            />

            {successScreen && (
                <div className="hackerScreen">
                    <img src={hacker} alt="H@ck3D" ref={glitch2.ref} />
                    <div className="hackerMessage">
                        <h1>Hahahaha bedankt!</h1>
                        <p>Deze code kan ik goed gebruiken om docenten te laten denken dat ze op de schoolsystemen inloggen. Maar eigenlijk steel ik hun wachtwoorden!</p>
                    </div>
                </div>
            )}

            {hackedScreen && (
                <HackedScreen />
            )}
        </div>
  )
}

export default Opdracht3Page

export const Head = () => <title>Opdracht 3</title>
