import React, { useState, useRef } from "react";
import Layout from "../helpers/Layout";
import opdracht1Logo from "./../helpers/images/opdracht1-logo.png";
import opdracht1 from "./../helpers/images/opdracht1.png";
import { useGlitch } from 'react-powerglitch'

const Opdracht2Page = () => {
    const virtualDomRef = useRef(null);
    const frameRef = useRef(null);
    const stepOneRef = useRef(null);
    const stepTwoRef = useRef(null);
    const stepThreeRef = useRef(null);
    const stepFourRef = useRef(null);
    const stepFiveRef = useRef(null);
    const stepSixRef = useRef(null);

    const [stepOne, setStepOne] = useState(false);
    const [stepTwo, setStepTwo] = useState(false);
    const [stepThree, setStepThree] = useState(false);
    const [stepFour, setStepFour] = useState(false);
    const [stepFive, setStepFive] = useState(false);
    const [stepSix, setStepSix] = useState(false);
    const [stepsComplete, setStepsComplete] = useState(false);
    const [successScreen, setSuccessScreen] = useState(false);

    const nextPage = "/vraag-6"; 
    const allowedEditors = ['html'];
    const cssState = `/* CSS */
/* post-af */
html{
    background-color:#e9ebee;
    font-family: "Helvetica Neue";
    font-size:12px;
    line-height:18px;
    color:#1c1c1c;
}
.container{
    margin:0 auto;
    background-color:#FFF;
    border: 1px #dddfe2 solid;
    border-radius: 5px;
    padding:13px;
    margin-bottom: 120px;
}
.wrapper{
    margin: 0 auto;
    border: 1px #dddfe2 solid;
    border-radius: 5px;
}
header, section{
    margin:20px;
}
.logo{
    width:43px;
    height:auto;
    float:left;
}
.make-img{
    width: 100%;
    height: auto;
    border-top:1px solid #dddfe2;
    border-bottom:1px solid #dddfe2;
}
.sub{
    color:#616770;
    margin-left: 60px;
    font-size:80%;
    margin-top:5px;
}
h1{
    font-size:100%;
}
h2{
    color:#395996;
    margin:0 0 0 60px;
    padding-top:10px;
    line-height:12px;
    font-size:100%;
}
p{
    line-height:150%;
}
figure{
    background-color: #f2f3f5;
    width:100%;
    margin:0;
}
figcaption{
    padding:10px 20px;
}
figcaption>span{
    color:#616770;
}`;
    const jsState = `// JavaScript`;
    const htmlState = `<!-- HTML -->
<div class="container">
    <h1>Berichten</h1>
    <div class="wrapper">
    <article>
        <header>
            <img src="${opdracht1Logo}" class="logo" />
            <h2>Grafisch Lyceum failliet</h2>
            <p class="sub">24 september om 13:24</p>
        </header>
        <section class="bericht">
            <p>
                Wij zijn failliet, het GLR sluit in december
                de deuren. Minister Arie Slob heeft maandag aan
                de Tweede Kamer laten weten een reddingsplan niet
                te steunen. De minister noemt het een “ingrijpend besluit” 
                maar verzekert dat de leerlingen terecht kunnen op andere 	
                scholen. De scholengemeenschap, waar de leerlingen vooral 	
                agrarisch onderwijs volgen, kampt met een teruglopend 
                leerlingenaantal vanwege de bevolkingskrimp 
                in de regio. Hierdoor was de scholengemeenschap 
                in de financiële problemen gekomen en door de Inspectie 
                van het Onderwijs onder financieel toezicht geplaatst.
            </p>
        </section>
        <figure>
            <!-- Bericht van de hacker: deze afbeelding krijg je nooit meer terug. HAHAHA! -->
            <img src="${opdracht1}" alt="You have been hacked" class="make-img">
            <figcaption>
                <strong>Parkeergarage</strong><br />
                <span>De garage zal voorzien in 3000 parkeerplekken</span>
            </figcaption>
        </figure>

    </article>
    </div>
</div>`;

    const validateHTML = () => {
        const codeToCheck = frameRef.current.contentWindow.document.body.innerHTML;
        virtualDomRef.current.innerHTML = '';
        virtualDomRef.current.insertAdjacentHTML('beforeend', codeToCheck);
        const checkOne = virtualDomRef.current.getElementsByTagName('h2')[0].innerHTML === 'Grafisch Lyceum Rotterdam';
        const checkTwo = virtualDomRef.current.getElementsByTagName('p')[1].innerHTML.trim().substring(0, 26) === "Studenten van de opleiding";
        const checkThree = virtualDomRef.current.getElementsByTagName('img')[0].src.includes('make-a-thon.jpg');
        const checkFourOne = virtualDomRef.current.getElementsByTagName('strong')[0].innerHTML.includes('RTV Rijnmond op bezoek');
        const checkFourTwo = virtualDomRef.current.getElementsByTagName('span')[0].innerHTML.includes('<a href="https://bit.ly/2Gf7awb">');
        const checkFourThree = virtualDomRef.current.getElementsByTagName('span')[0].innerHTML.includes('target="_blank"');
        const checkFour = checkFourOne && checkFourTwo && checkFourThree;
        const checkFive = virtualDomRef.current.getElementsByTagName('h2')[0].innerHTML.includes('<a href="https://www.glr.nl">');
        const checkSix = [...virtualDomRef.current.getElementsByTagName('figure')[0].children].map(child => child.tagName).includes('A');

        // Here we validate the output of the iframe
        checkOne ? setStepOne(true) : setStepOne(false);
        checkTwo ? setStepTwo(true) : setStepTwo(false);
        checkThree ? setStepThree(true) : setStepThree(false);
        checkFour ? setStepFour(true) : setStepFour(false);
        checkFive ? setStepFive(true) : setStepFive(false);
        checkSix ? setStepSix(true) : setStepSix(false);
        if (checkOne && checkTwo && checkThree && checkFour && checkFive && checkSix) {
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
            <p>Een Facebook post van het GLR is gehackt. Er staat nu nepnieuws op. In het bericht wordt gemeld dat het GLR de deuren sluit in december. Dit is natuurlijk niet waar. Dit bericht mag zo niet op Facebook terecht komen!</p><br />
            <p>Nu is aan jouw de vraag als beginnende creative software developer om de post weer netjes te zetten zodat deze gepubliceerd kan worden.</p><br />
        </>
    )

    const assignment = () => (
        <>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepOneRef} checked={stepOne} />
                <p>De juiste teksten moeten geplaatst worden: het kopje "Grafisch Lyceum failliet" moet vervangen worden door de tekst "Grafisch Lyceum Rotterdam".</p>
            </div>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepTwoRef} checked={stepTwo} />
                <p>De paragraaf tekst moet de juiste tekst bevatten over de make-a-thon: <code>Studenten van de opleiding Mediatechnologie zijn van 5 tot en met 7 juni bezig geweest met de Make-A-Thon. Zij maakten in teams binnen 72 uur een app, website of game. Vrijdagmiddag hebben alle 6 teams de kans gekregen om in een 10 minuten pitch te laten zien wat ze gemaakt hadden. Uiteindelijk heeft team “De Brownies” gewonnen met een game welke gestreamd wordt naar Twitch waarbij de kijker invloed kan uitoefenen op de game. Nadat de jury bekend had gemaakt wie gewonnen had kon het winnende team zich nogmaals opmaken voor een pitch. Hierbij moest er een winnaar gekozen tussen het GLR, MBO Utrecht en het TechNova College uit Ede. Nadat alle pitches besproken waren maakte de jury bekend dat het GLR gewonnen had!</code></p>
            </div>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepThreeRef} checked={stepThree} />
                <p>De afbeelding moet vervangen worden door de aangeleverde afbeelding: make-a-thon.jpg.</p>
            </div>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepFourRef} checked={stepFour} />
                <p>Vervang de tekst "Parkeergarage.." met: <code>RTV Rijnmond op bezoek. Lees hier meer: https://bit.ly/2Gf7awb</code> Deze link moet openen in een nieuw venster.</p>
            </div>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepFiveRef} checked={stepFive} />
                <p>Zorg dat de titel bovenaan het bericht (de heading 2) ook een linkje wordt. Dit linkje moet naar <code>https://www.glr.nl</code> gaan. Deze link moet openen in hetzelfde venster als de Facebook post.</p>
            </div>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepSixRef} checked={stepSix} />
                <p>Zorg ervoor dat de afbeelding ook een link is. Deze moet ook koppelen met het bericht van RTV Rijnmond: <code>https://bit.ly/2Gf7awb</code></p>
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
                validateHTML={validateHTML}
                validateCSS={validateCSS}
                validateJS={validateJS}
                explanationTopBar={"Leren"}
                explanationSubtitle={"Introductie HTML"}
                explanationTitle={"Je eerste opdracht.."}
                explanationTime={"15 min"}
                explanation={explanation}
                assignment={assignment}
                allowedEditors={allowedEditors}
                stepsComplete={stepsComplete}
                successScreen={successScreen}
                nextPage={nextPage}
            />
            <div ref={virtualDomRef} id="virtualDom" />
        </>
  )
}

export default Opdracht2Page

export const Head = () => <title>Opdracht 2</title>
