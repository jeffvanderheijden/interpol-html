import React, { useState, useRef } from "react";
import Layout from "../helpers/Layout";
import html1 from "./../helpers/images/html1.png";

const IndexPage = () => {
    const frameRef = useRef(null);
    const stepOneRef = useRef(null);

    const [stepOne, setStepOne] = useState(false);
    const [stepsComplete, setStepsComplete] = useState(false);
    const [successScreen, setSuccessScreen] = useState(false);

    const nextPage = "/vraag-2"; 
    const allowedEditors = ['html'];
    const cssState = `/* CSS */`;
    const jsState = `// JavaScript`;
    const htmlState = `<!-- HTML -->
<h1>Jouw naam</h1>`;

    const validateHTML = () => {
        const codeToCheck = frameRef.current.contentWindow.document.body.innerHTML;
        // Here we validate the output of the iframe
        if (codeToCheck.includes('<h1>') && codeToCheck.includes('</h1>') && !codeToCheck.includes('Jouw naam')) {
            setStepOne(true);
            setStepsComplete(true);
            setSuccessScreen(true);
            setTimeout(() => {
                setSuccessScreen(false);
            }, 2000);
        } else {
            setStepOne(false);
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
            <p>
                Welkom in de wereld van code! Iedereen die leert programmeren is waarschijnlijk begonnen met HTML. Waarom? HTML is het skelet van alle webpagina's. Het is vaak de eerste taal die ontwikkelaars, marketeers en ontwerpers leren en vormt de kern van front-end development.
                <br /><br />
                Dus wat is HTML precies? HTML biedt structuur aan de inhoud die op een website verschijnt, zoals afbeeldingen, tekst of video's. Klik met de rechtermuisknop op een willekeurige pagina op internet, kies 'Inspecteren' en je ziet HTML in een paneel van uw scherm.
                <br /><br />
                HTML staat voor HyperText Markup Language:
                <br /><br />
                HTML, of HyperText Markup Language, is de standaard opmaaktaal die wordt gebruikt om webpagina's te maken en te ontwerpen. Het biedt de structuur en inhoud van een webpagina door een systeem van tags en attributen te gebruiken om verschillende elementen te definiëren.
                <br /><br />
                Een HTML-document bestaat uit verschillende belangrijke componenten:
                <img src={html1} alt="HTML page" />
            </p>            
            <ul>
                <li><code>&lt;!DOCTYPE html&gt;</code>: Geeft het documenttype en de gebruikte HTML-versie aan.</li>
                <li><code>&lt;html&gt;</code>: Het hoofdelement van het HTML-document, dat alle andere elementen bevat.</li>
                <li><code>&lt;head&gt;</code>: Bevat meta-informatie over het document, zoals de titel en tekencodering.</li>
                <li><code>&lt;meta&gt;</code>: Biedt metagegevens over het HTML-document.</li>
                <li><code>&lt;title&gt;</code>: Stelt de titel van de webpagina in.</li>
                <li><code>&lt;body&gt;</code>: Bevat de inhoud van de webpagina die aan gebruikers wordt weergegeven.</li>
                <li><code>&lt;!-- ... --&gt;</code>: HTML-opmerkingen gebruikt voor documentatie of notities in de code.</li>
            </ul>
            <p>Maar laten we eenvoudiger beginnen met een titel, ook wel heading genoemd..</p>
        </>
    )

    const assignment = () => (
        <div className="step">
            <input type="checkbox" disabled={true} ref={stepOneRef} checked={stepOne} />
            <p>Vervang de tekst in het <code>&lt;h1&gt;</code> element met jouw naam.</p>
        </div>
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
            explanationTitle={"Introductie HTML"}
            explanationTime={"4 min"}
            explanation={explanation}
            assignment={assignment}
            allowedEditors={allowedEditors}
            stepsComplete={stepsComplete}
            successScreen={successScreen}
            nextPage={nextPage}
        />
  )
}

export default IndexPage

export const Head = () => <title>Vraag 1</title>
