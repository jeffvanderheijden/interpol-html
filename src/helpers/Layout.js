import React, { useState, useEffect } from "react";
import { Link } from "gatsby"
import "./../helpers/styling/reset.css";
import "./../helpers/styling/App.css";
import Explanation from './../components/Explanation/Explanation';
import Button from './../components/Button/Button';
import Editor from './../components/Editor/Editor';
import Assignment from './../components/Explanation/Assignment';
import SuccessScreen from "../components/SuccessScreen/SuccessScreen";
// import ErrorScreen from "../components/ErrorScreen/ErrorScreen";

const Layout = ({
    cssState,
    jsState,
    htmlState,
    frameRef,
    validateHTML,
    validateCSS,
    validateJS,
    explanationTopBar,
    explanationSubtitle,
    explanationTitle,
    explanationTime,
    explanation,
    assignment,
    allowedEditors,
    stepsComplete,
    successScreen,
    nextPage
}) => {
  const [openedEditor, setOpenedEditor] = useState('html');
  const [srcDoc, setSrcDoc] = useState(` `);
  const [css, setCss] = useState(cssState);
  const [js, setJs] = useState(jsState);
  const [html, setHtml] = useState(htmlState);

  const onTabClick = (editorName) => {
    setOpenedEditor(editorName);
  };

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
    <>
      <div id="App">    
        <div id="instructions">
          <div className="topBar">{explanationTopBar}</div>
          <Explanation 
            subtitle={explanationSubtitle}
            title={explanationTitle}
            time={explanationTime}
          >
            { explanation() }
            <Assignment>
              { assignment() }
            </Assignment>
          </Explanation>
        </div>

        <div id="editor">
          {/* Switch through the different editors */}
          <ul id="editorSwitch">
            {allowedEditors.includes('html') && (
                <li>                
                    <Button title="index.html" onClick={() => { onTabClick('html') }} />                
                </li>
            )}
            {allowedEditors.includes('css') && (
                <li>                
                    <Button title="styles.css" onClick={() => { onTabClick('css') }} />                
                </li>
            )}
            {allowedEditors.includes('js') && (
                <li>                
                    <Button title="scripts.js" onClick={() => { onTabClick('js') }} />                
                </li>
            )}
          </ul>
          {/* Editors for HTML / CSS / JS */}
          <div id="editorContainer">
            { openedEditor === 'html' ? (
              <Editor
                language="xml"
                readOnly={false}
                value={html}
                setEditorState={setHtml}
                validate={validateHTML}
              />
            ) : openedEditor === 'css' ? (
                <Editor
                    language="css"
                    readOnly={false}
                    value={css}
                    setEditorState={setCss}
                    validate={validateCSS}
                />
            ) : openedEditor === 'js' (
                <Editor
                    language="javascript"
                    readOnly={false}
                    value={js}
                    setEditorState={setJs}
                    validate={validateJS}
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
          <div id="nextBar"> 
            {stepsComplete ? (
              <Link to={nextPage}>Volgende vraag</Link>
            ) : (
              <button disabled>Volgende vraag</button>
            )}
          </div>
        </div>      
      </div>
      
      {successScreen && (
        <SuccessScreen />
      )}
    </>
  )
}

export default Layout
