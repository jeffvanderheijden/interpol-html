import React, { useState, useRef, useEffect } from "react";
import Layout from "../helpers/Layout";
import hacker from "./../helpers/images/hacker.png";
import { useGlitch } from 'react-powerglitch';
import LocalStorage from "../helpers/LocalStorage";

const Vraag12Page = () => {
    const frameRef = useRef(null);
    const stepOneRef = useRef(null);
    const instructionRef = useRef(null);
    const glitch = useGlitch();

    const [stepOne, setStepOne] = useState(false);
    const [stepsComplete, setStepsComplete] = useState(false);
    const [successScreen, setSuccessScreen] = useState(false);

    const nextPage = "/vraag-12"; 
    const allowedEditors = ['html'];
    const cssState = `/* CSS */`;
    const jsState = `// JavaScript`;
    const htmlState = `<!-- HTML -->`;

    const validate = () => {
        const codeToCheck = frameRef.current.contentWindow.document.body.innerHTML;
        const checkOneOne = codeToCheck.includes('admin');
        const checkOneTwo = codeToCheck.includes('verySecurePassword1234');
        const checkOne = checkOneOne && checkOneTwo;

        // Here we validate the output of the iframe
        checkOne ? setStepOne(true) : setStepOne(false);
        if (checkOne) {
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
            <div className="hackerWrapper">
                <img className="hacker" src={hacker} alt="H@ck3D" ref={glitch.ref} />
            </div>
            <p ref={instructionRef}></p>
        </>
    )

    const assignment = () => (
        <>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepOneRef} checked={stepOne} />
                <p><a href="/static/downloads/inlogsysteem.zip" style={{ color: "#FFF" }} download>Download deze bestanden.</a> Open ze in een code editor zoals Visual Studio Code. Zodra je de gebruikersnaam en wachtwoord hebt gevonden vul je die hiernaast in.</p>
            </div>
        </>
    )

    let i = 0;
    let txt = "De gegevens stonden in een .js bestand verstopt? Wat een slechte beveiliging! JavaScript wordt gebruikt om websites interactief te maken. Het is een programmeertaal die in de browser draait. Met JavaScript kun je bijvoorbeeld formulieren valideren, elementen toevoegen en verwijderen en nog veel meer. Het is niet bedoeld om wachtwoorden in op te slaan!"; 
    let speed = 50; 

    const typingEffect = () => {
        if (i < txt.length) {
            instructionRef.current.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typingEffect, speed);
        }
    }

    useEffect(() => {
        typingEffect();
    }, []);

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
                explanationTopBar={""}
                explanationSubtitle={""}
                explanationTitle={""}
                explanationTime={""}
                explanation={explanation}
                assignment={assignment}
                allowedEditors={allowedEditors}
                stepsComplete={stepsComplete}
                successScreen={successScreen}
                nextPage={nextPage}
                hacked={true}
            />
        </>
  )
}

export default Vraag12Page

export const Head = () => <title>Vraag 12</title>
