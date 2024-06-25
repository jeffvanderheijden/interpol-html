import React, { useRef, useEffect } from "react";

const HackedScreen = () => {
    const outputConsoleRef = useRef(null);

    /* fake console stuff */
    const commandStart = [
        'Performing DNS Lookups for', 
        'Searching ', 
        'Analyzing ', 
        'Estimating Approximate Location of ', 
        'Compressing ', 
        'Requesting Authorization From : ', 
        'wget -a -t ', 
        'tar -xzf ', 
        'Entering Location ', 
        'Compilation Started of ',
        'Downloading '
    ];

    const commandParts = [
        'Data Structure', 
        'http://wwjd.com?au&2', 
        'Texture', 
        'TPS Reports', 
        ' .... Searching ... ', 
        'http://zanb.se/?23&88&far=2', 
        'http://ab.ret45-33/?timing=1ww'
    ];

    const commandResponses = [
        'Authorizing ', 
        'Authorized...', 
        'Access Granted..', 
        'Going Deeper....', 
        'Compression Complete.', 
        'Compilation of Data Structures Complete..', 
        'Entering Security Console...', 
        'Encryption Unsuccesful Attempting Retry...', 
        'Waiting for response...', 
        '....Searching....', 
        'Calculating Space Requirements '
    ];

    let isProcessing = false;
    let processTime = 0;
    let lastProcess = 0;

    const consoleOutput = () => {
        let textEl = document.createElement('p');
        
        if (isProcessing){
            textEl = document.createElement('span');
            textEl.textContent += Math.random() + " ";
            if(Date.now() > lastProcess + processTime) {
                isProcessing = false;
            }
        } else {
            const commandType = ~~(Math.random() * 4);
            switch (commandType) {
                case 0:
                    textEl.textContent = commandStart[~~(Math.random()*commandStart.length)] + commandParts[~~(Math.random()*commandParts.length)];
                    break;
                case 3: 
                    isProcessing = true;
                    processTime = ~~(Math.random()*5000);
                    lastProcess = Date.now();
                    break;
                default:
                    textEl.textContent = commandResponses[~~(Math.random()*commandResponses.length)];
                    break;
            }
        }
    
        if (outputConsoleRef.current && outputConsoleRef.current.scrollHeight) {
            outputConsoleRef.current.scrollTop = outputConsoleRef.current.scrollHeight;
            outputConsoleRef.current.appendChild(textEl);
        
            if (outputConsoleRef.current.scrollHeight > window.innerHeight) {
                const removeNodes = outputConsoleRef.current.querySelectorAll('*');
                for (var n = 0; n < ~~(removeNodes.length / 3); n++) {
                        outputConsoleRef.current.removeChild(removeNodes[n]);
                    }
                }
                setTimeout(consoleOutput, ~~(Math.random()*200));
            }
    }

    useEffect(() => {
        consoleOutput();
    }, []);

    return (
        <div className="outputConsole" ref={outputConsoleRef} />
    )
}

export default HackedScreen;
