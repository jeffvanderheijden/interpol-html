import React, { useState, useRef } from "react";
import Layout from "../helpers/Layout";

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
                Welkom in de wereld van code! Iedereen die leert programmeren is waarschijnlijk begonnen met HTML. Waarom? HTML is het skelet van alle webpagina's. Het is vaak de eerste taal die ontwikkelaars, marketeers en ontwerpers leren en vormt de kern van front-end development. Als dit de eerste keer is dat je code aanraakt, zijn we benieuwd naar wat je gaat maken.
                <br /><br />
                Dus wat is HTML precies? HTML biedt structuur aan de inhoud die op een website verschijnt, zoals afbeeldingen, tekst of video's. Klik met de rechtermuisknop op een willekeurige pagina op internet, kies 'Inspecteren' en je ziet HTML in een paneel van uw scherm.
                <br /><br />
                HTML staat voor HyperText Markup Language:
                <br /><br />
            </p>
            <ul>
                <li>Een opmaaktaal is een computertaal die de structuur en presentatie van onbewerkte tekst definieert.</li>
                <li>In HTML kan de computer onbewerkte tekst interpreteren die is verpakt in HTML-elementen.</li>
                <li>HyperText is tekst die wordt weergegeven op een computer of apparaat dat toegang biedt tot andere tekst via links, ook wel hyperlinks genoemd. </li>
                <li>Het leren van HTML is de eerste stap bij het maken van websites, maar zelfs een beetje kennis kan je helpen codefragmenten in nieuwsbrief-, blog- of websitesjablonen te injecteren. Terwijl je doorgaat met leren, kun je HTML combineren met CSS en JavaScript om visueel aantrekkelijke en dynamische websites te maken. Maar voor nu gaan we ons concentreren op het toevoegen en wijzigen van basisinhoud op een pagina, zoals tekst, afbeeldingen en video's. Maak je geen zorgen als de websites er lelijk uitzien: we zijn nog maar net begonnen.</li>
            </ul>
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
