import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby"
import "./../helpers/styling/reset.css";
import "./../helpers/styling/App.css";
import Explanation from './../components/Explanation/Explanation';
import Button from './../components/Button/Button';
import Editor from './../components/Editor/Editor';
import Assignment from './../components/Explanation/Assignment';

const Vraag2 = () => {
  const frameRef = useRef(null);
  const stepOneRef = useRef(null);
  const stepTwoRef = useRef(null);

  const [stepOne, setStepOne] = useState(false);
  const [stepTwo, setStepTwo] = useState(false);

  const [openedEditor, setOpenedEditor] = useState('html');
  const [srcDoc, setSrcDoc] = useState(` `);
  const [html, setHtml] = useState('<!-- HTML -->');
  const [css, setCss] = useState('/* CSS */');
  const [js, setJs] = useState('// JavaScript');

  const onTabClick = (editorName) => {
    setOpenedEditor(editorName);
  };

  const validate = () => {
    const codeToCheck = frameRef.current.contentWindow.document.body.innerHTML;
    // Here we validate the output of the iframe
    if (codeToCheck.includes('<h1>') && codeToCheck.includes('</h1>')) {
      setStepOne(true);
    } else {
      setStepOne(false);
    }
    if (codeToCheck.includes('<p>"Life is very short and what we have to do must be done in the now." - Audre Lorde</p>')) {
      setStepTwo(true);
    } else {
      setStepTwo(false);
    }
  }

  const viewSolution = () => {
    console.log('View solution');
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `
          <html>
            <head>
              <meta charset="UTF-8">
              <meta name="description" content="GLR - intro weken">
              <meta name="keywords" content="HTML, CSS, JavaScript">
              <meta name="author" content="Jeff van der Heijden">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <link rel="preconnect" href="https://fonts.googleapis.com">
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
              <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
              <style>${css}</style>
              <script>${js}</script>
              <style>
                * {
                  font-family: "Roboto", sans-serif;
                }
              </style>
            </head>
            <body>${html}</body>            
          </html>
        `
      )
    }, 250);
    return () => clearTimeout(timeOut)
  }, [html, css, js]);

  return (    
    <div id="App">    
      <div id="instructions">
        <div className="topBar">Leren</div>
        <Explanation 
          subtitle="HTML"
          title="Introductie HTML"
          time="4 min"
        >
          <p>
            Welkom in de wereld van code! Vorig jaar zijn miljoenen leerlingen uit onze gemeenschap begonnen met HTML. Waarom? HTML is het skelet van alle webpagina's. Het is vaak de eerste taal die ontwikkelaars, marketeers en ontwerpers leren en vormt de kern van front-end ontwikkelingswerk. Als dit de eerste keer is dat u code aanraakt, zijn we benieuwd naar wat u gaat maken.
            <br /><br />
            Dus wat is HTML precies? HTML biedt structuur aan de inhoud die op een website verschijnt, zoals afbeeldingen, tekst of video's. Klik met de rechtermuisknop op een willekeurige pagina op internet, kies 'Inspecteren' en u ziet HTML in een paneel van uw scherm.
            <br /><br />
            HTML staat voor HyperText Markup Language:
            <br /><br />
          </p>
          <ul>
            <li>Een opmaaktaal is een computertaal die de structuur en presentatie van onbewerkte tekst definieert.</li>
            <li>In HTML kan de computer onbewerkte tekst interpreteren die is verpakt in HTML-elementen.</li>
            <li>HyperText is tekst die wordt weergegeven op een computer of apparaat dat toegang biedt tot andere tekst via links, ook wel hyperlinks genoemd. Waarschijnlijk heb je op een aantal hyperlinks geklikt op weg naar deze Codecademy-cursus.</li>
            <li>Het leren van HTML is de eerste stap bij het maken van websites, maar zelfs een beetje kennis kan u helpen codefragmenten in nieuwsbrief-, blog- of websitesjablonen te injecteren. Terwijl u doorgaat met leren, kunt u HTML combineren met CSS en JavaScript om visueel aantrekkelijke en dynamische websites te maken. Maar voor nu gaan we ons concentreren op het toevoegen en wijzigen van basisinhoud op een pagina, zoals tekst, afbeeldingen en video's. Maak je geen zorgen als de websites er lelijk uitzien: we zijn nog maar net begonnen</li>
          </ul>
          <Assignment>
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
              value={'<p>"Life is very short and what we have to do must be done in the now." - Audre Lorde</p>'}
            />
          </Assignment>
        </Explanation>
      </div>

      <div id="editor">
        {/* Switch through the different editors */}
        <ul id="editorSwitch">
          <li>
            <Button title="index.html" onClick={() => { onTabClick('html') }} />
          </li>
          <li>
            <Button title="styles.css" onClick={() => { onTabClick('css') }} />
          </li>
          <li>
            <Button title="scripts.js" onClick={() => { onTabClick('js') }} />
          </li>
        </ul>
        {/* Editors for HTML / CSS / JS */}
        <div id="editorContainer">
          { openedEditor === 'html' ? (
            <Editor
              language="xml"
              readOnly={false}
              value={html}
              setEditorState={setHtml}
              validate={validate}
              viewSolution={viewSolution}
            />
          ) : openedEditor === 'css' ? (
            <Editor
              language="css"
              readOnly={false}
              value={css}
              setEditorState={setCss}
              validate={validate}
              viewSolution={viewSolution}
            />
          ) : (
            <Editor
              language="javascript"
              readOnly={false}
              value={js}
              setEditorState={setJs}
              validate={validate}
              viewSolution={viewSolution}
            />
          )}
        </div>
      </div>

      <div id="liveView">
        {/* Output */}
        <div className="topBar" style={{ backgroundColor: "black", color: "#eff2ff" }}>Output</div>
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts allow-modals allow-same-origin"
          width="100%"
          height="100%"
          ref={frameRef}
        />
        {/* if all steps are completed show the UI to go to next question */}
        {stepOne && stepTwo && (
          <div id="nextBar">
            <Link to="/vraag-2">Volgende vraag</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Vraag2

export const Head = () => <title>Vraag 2</title>
