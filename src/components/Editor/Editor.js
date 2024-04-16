import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/theme/dracula.css';
import { Controlled as ControlledEditorComponent } from 'react-codemirror2';


const Editor = ({ 
    language, 
    value, 
    setEditorState,
    validate,
    viewSolution
}) => {
    const handleChange = (editor, data, value) => {
        setEditorState(value);
    }

    return (
        <div className="editorInner">
            <ControlledEditorComponent
                onBeforeChange={handleChange}
                value={value}
                className="codeMirrorWrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: "dracula",
                }}
            />
            <div id="editorActions">
                <button id="validate" onClick={() => { validate() }}>Run</button>
                <button id="solution" onClick={() => { viewSolution() }}>View solution</button>
            </div>
        </div>
    )
}
export default Editor