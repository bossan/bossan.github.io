const border = document.getElementById('console-outer-border');
const resulutionError = document.getElementById('resolution-error');
const terminal = document.getElementById('terminal');
const timeScale = 0.1;

// Screen 44 char x 31 char
// 1364 char in total
const frameBuffer = new Array(1364);


const clearBuffer = () => {
    frameBuffer = new Array(1364);
}

const readBuffer = (x, y) => {
    return frameBuffer[44 * y + x];
}

const writeBuffer = () => {   
    terminal.innerHTML = "";
    for (let y = 0; y < 31; y++) {
        for (let x = 0; x < 44; x++) {
            terminal.innerHTML += readBuffer(x, y) ?? '&nbsp;';
        }
        terminal.innerHTML += "\n";
    }
}

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const writeText = async (text, newLine = true) => {
    
}

const checkResolution = () => {
    if (window.innerWidth < 800 || window.innerHeight < 600) {
        border.style.display = "none";
        resulutionError.style.display = "block";
        throw new Error("Display resolution not supported.");
    }
}

const main = async () => {
    checkResolution();
    setInterval(writeBuffer, 33 / timeScale);
    frameBuffer[1320] = "Y";
}

main();
