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
    type,
    setEditorState,
    validate,
    readOnly
}) => {
    const handleChange = (editor, data, value) => {
        setEditorState(value);
    }

    return (
        <div className={type && type === 'assignment' ? "" : "editorInner"}>
            <ControlledEditorComponent
                onBeforeChange={handleChange}
                value={value}
                className="codeMirrorWrapper"
                options={{
                    readOnly: readOnly,
                    lineWrapping: false,
                    lint: true,
                    mode: language,
                    lineNumbers: type !== 'assignment' ? true : false,
                    theme: "dracula"
                }}
            />
            {type !== 'assignment' && (
                <div id="editorActions">
                    <button id="validate" onClick={() => { validate() }}>Uitvoeren</button>
                </div>
            )}
        </div>
    )
}
export default Editor