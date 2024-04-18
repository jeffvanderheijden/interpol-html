import React, { useState, useRef } from "react";
import Layout from "../helpers/Layout";
import Editor from '../components/Editor/Editor';
import img1 from "./../helpers/images/html-explained.png";

const Vraag2Page = () => {
    const frameRef = useRef(null);
    const stepOneRef = useRef(null);
    const stepTwoRef = useRef(null);

    const [stepOne, setStepOne] = useState(false);
    const [stepTwo, setStepTwo] = useState(false);
    const [stepsComplete, setStepsComplete] = useState(false);
    const [successScreen, setSuccessScreen] = useState(false);

    const nextPage = "/vraag-2"; 
    const allowedEditors = ['html'];
    const cssState = `/* CSS */`;
    const jsState = `// JavaScript`;
    const htmlState = `<!-- HTML -->`;

    const validateHTML = () => {
        const codeToCheck = frameRef.current.contentWindow.document.body.innerHTML;
        const checkOne = codeToCheck.includes('<h1>') && codeToCheck.includes('</h1>');
        const checkTwo = codeToCheck.includes('<p>"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."</p>');
        // Here we validate the output of the iframe
        checkOne ? setStepOne(true) : setStepOne(false);
        checkTwo ? setStepTwo(true) : setStepTwo(false);
        if (checkOne && checkTwo) {
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
    const validateCSS = () => {
        return null;
    }
    const validateJS = () => {
        return null;
    }

    const explanation = () => (
        <>
            <p>HTML is opgebouwd uit elementen. Deze elementen structureren de webpagina en definiëren de inhoud ervan. Laten we eens kijken hoe ze zijn geschreven.</p><br />
            <p>Het diagram hieronder toont een HTML-paragraafelement. Zoals we kunnen zien, bestaat het paragraafelement uit:</p>
            <img src={img1} alt="HTML explained" />
            <ul>
                <li>Een openingstag <code>&lt;p&gt;</code></li>
                <li>De inhoud <code>“Hello World!”</code> tekst</li>
                <li>Een afsluitende tag <code>&lt;/p&gt;</code></li>
                <li>Een tag en de inhoud daartussen wordt een HTML-element genoemd. Er zijn veel tags die we kunnen gebruiken om tekst en andere soorten inhoud, zoals afbeeldingen, te ordenen en weer te geven.</li>
            </ul>
            <p>Laten we snel elk onderdeel van het afgebeelde element bekijken:</p><br />
            <ul>
                <li>HTML-element (of eenvoudigweg element) — een inhoudseenheid in een HTML-document, gevormd door HTML-tags en de tekst of media die het bevat.</li>
                <li>HTML-tag — de elementnaam, omgeven door een openings- <code>&lt;</code> en sluitings- <code>&gt;</code> hoekhaakje.</li>
                <li>Openingstag — de eerste HTML-tag die wordt gebruikt om een ​​HTML-element te starten. Het tagtype wordt omgeven door punthaken voor openen en sluiten.</li>
                <li>Inhoud — De informatie (tekst of andere elementen) tussen de openings- en sluitingstags van een HTML-element.</li>
                <li>Sluitingstag — de tweede HTML-tag die wordt gebruikt om een ​​HTML-element te beëindigen. Sluittags hebben een schuine streep <code>/</code> aan de binnenkant, direct na de linker hoekbeugel.</li>
            </ul>
        </> 
    )

    const assignment = () => (
        <>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepOneRef} checked={stepOne} />
                <p>Voeg een <code>&lt;h1&gt;</code> element toe aan de pagina. Zet hierin jouw naam.</p>
            </div>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepTwoRef} checked={stepTwo} />
                <p>Voeg nu onder het <code>&lt;h1&gt;</code> element de volgende code toe:</p>
            </div>
            <Editor
                type={'assignment'}
                language="xml"
                readOnly={true}
                value={'<p>"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."</p>'}
            />
        </>
    )

    return (
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
            explanationTitle={"HTML Anatomie"}
            explanationTime={"2 min"}
            explanation={explanation}
            assignment={assignment}
            allowedEditors={allowedEditors}
            stepsComplete={stepsComplete}
            successScreen={successScreen}
            nextPage={nextPage}
        />
  )
}

export default Vraag2Page

export const Head = () => <title>Vraag 2</title>
