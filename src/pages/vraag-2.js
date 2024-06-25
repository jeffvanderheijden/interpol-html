import React, { useState, useRef, useEffect } from "react";
import { navigate } from "gatsby";
import Layout from "../helpers/Layout";
import Editor from '../components/Editor/Editor';
import img1 from "./../helpers/images/html-explained.png";
import LocalStorage from "./../helpers/LocalStorage";

const Vraag2Page = () => {    
    const virtualDomRef = useRef(null);
    const frameRef = useRef(null);
    const stepOneRef = useRef(null);
    const stepTwoRef = useRef(null);
    const stepThreeRef = useRef(null);

    const [stepOne, setStepOne] = useState(false);
    const [stepTwo, setStepTwo] = useState(false);
    const [stepThree, setStepThree] = useState(false);
    const [stepsComplete, setStepsComplete] = useState(false);
    const [successScreen, setSuccessScreen] = useState(false);

    const nextPage = "/vraag-3"; 
    const allowedEditors = ['html', 'css'];
    const cssState = `/* CSS */
.copied {
    color: blue;
    font-size: 12px;
}`;
    const jsState = `// JavaScript`;
    const htmlState = `<!-- HTML -->
<body>
</body>`;

    useEffect(() => {
        const currentPage = LocalStorage.get('currentPage');
        if (!currentPage || currentPage !== '/vraag-2') {
            if (currentPage) {
                navigate(currentPage);
            } else {
                navigate('/');
            }
        }
    }, []);

    const validateHTML = () => {
        const codeToCheck = frameRef.current.contentWindow.document.body.innerHTML;
        virtualDomRef.current.innerHTML = '';
        virtualDomRef.current.insertAdjacentHTML('beforeend', codeToCheck);
        const checkOne = codeToCheck.includes('<h1>') && codeToCheck.includes('</h1>');
        const checkTwo = [...virtualDomRef.current.children].map(child => child.tagName).includes('P');
        const checkThree = codeToCheck.includes('class="copied"');
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
            <p>Een HTML element kan ook één of meerdere attributen hebben. Deze attributen hebben dan elk weer een waarde. Maar hierover later meer.</p>
        </> 
    )

    const assignment = () => (
        <>
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepOneRef} checked={stepOne} />
                <p>Voeg een <code>&lt;h1&gt;</code> element toe binnen het <code>&lt;body&gt;</code> element. Zet hierin jouw naam.</p>
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
            <div className="step">
                <input type="checkbox" disabled={true} ref={stepThreeRef} checked={stepThree} />
                <p>Voeg nu een attribute "class" toe aan het <code>&lt;p&gt;</code> element met de waarde: "copied"</p>
            </div>
            <p>Je ziet dat door het toevoegen van een class attribute het uiterlijk van de tekst veranderd. Dit komt door CSS. Hierover later meer.</p>
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
                explanationTitle={"HTML Anatomie"}
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

export default Vraag2Page

export const Head = () => <title>Vraag 2</title>
