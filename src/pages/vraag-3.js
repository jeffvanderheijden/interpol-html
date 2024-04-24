import React, { useState, useRef } from "react";
import Layout from "../helpers/Layout";
import Editor from '../components/Editor/Editor';

const Vraag3Page = () => {
    const frameRef = useRef(null);
    const virtualDomRef = useRef(null);
    const stepOneRef = useRef(null);
    const stepTwoRef = useRef(null);
    const stepThreeRef = useRef(null);

    const [stepOne, setStepOne] = useState(false);
    const [stepTwo, setStepTwo] = useState(false);
    const [stepThree, setStepThree] = useState(false);
    const [stepsComplete, setStepsComplete] = useState(false);
    const [successScreen, setSuccessScreen] = useState(false);

    const nextPage = "/vraag-4"; 
    const allowedEditors = ['html'];
    const cssState = `/* CSS */`;
    const jsState = `// JavaScript`;
    const htmlState = `<!-- HTML -->`;

    const validateHTML = () => {
        const codeToCheck = frameRef.current.contentWindow.document.body.innerHTML;
        virtualDomRef.current.innerHTML = '';
        virtualDomRef.current.insertAdjacentHTML('beforeend', codeToCheck);
        const checkOne = [...virtualDomRef.current.children].map(child => child.tagName).includes('SECTION');
        const checkTwo = [...virtualDomRef.current.children].map(child => [...child.children].map(grandChild => grandChild.tagName)).flat().includes('H1');
        const checkThreeOne = [...virtualDomRef.current.children].map(child => [...child.children].map(grandChild => grandChild.tagName)).flat().includes('P');
        const checkThreeTwo = [...virtualDomRef.current.children].map(child => [...child.children].map(grandChild => grandChild.innerHTML.toLowerCase())).flat().includes('child');
        const checkThreeThree = [...virtualDomRef.current.children].map(child => [...child.children].map(grandChild => grandChild.innerHTML.toLowerCase())).flat().includes('kind');
        const checkThree = checkThreeOne && (checkThreeTwo || checkThreeThree);

        // Here we validate the output of the iframe
        checkOne ? setStepOne(true) : setStepOne(false);
        checkTwo ? setStepTwo(true) : setStepTwo(false);
        checkThree ? setStepThree(true) : setStepThree(false);
        if (checkOne && checkTwo && checkThree) {
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
            <p>HTML is georganiseerd als een verzameling stamboomrelaties. Zoals je in de laatste oefening hebt gezien, hebben we <code>&lt;h1&gt;</code>-tags binnen <code>&lt;body&gt;</code>-tags geplaatst. Wanneer een element zich in een ander element bevindt, wordt het beschouwd als het kind <i>(child)</i> van dat element. Er wordt gezegd dat het onderliggende element binnen het ouderlijke <i>(parent)</i> element is "genest".</p><br />
            <Editor
                type={'assignment'}
                language="xml"
                readOnly={true}
                lineWrapping={true}
                value={`<body>
    <p>Deze paragraaf is een kind (child) van het body element.</p>
</body>`}
            /><br />
            <p>In het bovenstaande voorbeeld is het <code>&lt;p&gt;</code>-element genest in het <code>&lt;body&gt;</code>-element. Het  <code>&lt;p&gt;</code>-element wordt beschouwd als een onderliggend element van het  <code>&lt;body&gt;</code>-element, en het  <code>&lt;body&gt;</code>-element wordt beschouwd als het bovenliggende element. Je kunt ook zien dat we twee inspringingen hebben toegevoegd (met behulp van de spatiebalk) voor een betere leesbaarheid.</p><br />
            <p>Omdat er meerdere nestniveaus kunnen zijn, kan deze analogie worden uitgebreid naar kleinkinderen, achterkleinkinderen en daarbuiten. De relatie tussen elementen en hun voorouder- en afstammelingen staat bekend als hiërarchie.</p><br />
            <p>Laten we een ingewikkelder voorbeeld bekijken waarin enkele nieuwe tags worden gebruikt:</p><br />
            <Editor
                type={'assignment'}
                language="xml"
                readOnly={true}
                lineWrapping={true}
                value={`<body>
    <div>
        <h1>Broer van p, maar ook kleinkind van body</h1>
        <p> Broer van h1, maar ook kleinkind van body</p>
    </div>
</body>`}
            /><br />
            <p>In dit voorbeeld is het <code>&lt;body&gt;</code>-element de ouder van het <code>&lt;div&gt;</code>-element. Zowel de <code>&lt;h1&gt;</code>- als de <code>&lt;p&gt;</code>-elementen zijn onderliggende elementen van het <code>&lt;div&gt;</code>-element. Omdat de <code>&lt;h1&gt;</code>- en <code>&lt;p&gt;</code>-elementen zich op hetzelfde niveau bevinden, worden ze beschouwd als broers en zussen en zijn ze beide kleinkinderen van het <code>&lt;body&gt;</code>-element.</p><br />
            <p>Het begrijpen van de HTML-hiërarchie is belangrijk omdat onderliggende elementen gedrag en stijl kunnen overnemen van hun bovenliggende element. Je leert meer over de hiërarchie van webpagina’s wanneer je jezelf gaat verdiepen in CSS.</p>
        </> 
    )

    const assignment = () => (
        <>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepOneRef} checked={stepOne} />
                <p>Creëer een <code>&lt;section&gt;</code> element.</p>
            </div>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepTwoRef} checked={stepTwo} />
                <p>Voeg in dit <code>&lt;section&gt;</code> element een <code>&lt;h1&gt;</code> element toe. Vul hier je favoriete eten in als tekst.</p>
            </div>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepThreeRef} checked={stepThree} />
                <p>Maak nu een <code>&lt;p&gt;</code> element aan binnen de section en beantwoord daarin de volgende vraag: "Het h1 element is een ... van het section element.</p>
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
                explanationTitle={"HTML Structuur"}
                explanationTime={"5 min"}
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

export default Vraag3Page

export const Head = () => <title>Vraag 3</title>
