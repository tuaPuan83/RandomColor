const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const simpleColors = ["red", "green", "blue", "#f15025"];

const btnChangeMode = document.querySelector('.btn__change')
const btnGenerate = document.querySelector('.btn__gen')
const colorBox = document.querySelectorAll('.color-box')
const colorCode = document.querySelectorAll('.color-code')

let isHexMode = true

btnChangeMode.addEventListener('click', function () { 
    isHexMode = !isHexMode
    btnGenerate.textContent = isHexMode ? 'Generate Hex' : 'Generate Simple'
})

btnGenerate.addEventListener('click', function () { 
    if (isHexMode) {
        colorBox.forEach((box, index) => {
            const hexBoxColor = getHexRandomColor()
            box.style.backgroundColor = hexBoxColor
            colorCode[index].textContent = hexBoxColor
        })
        
    } else {
        colorBox.forEach((box, index) => {
            const simpleBoxColor = getsimpleRandomColor()
            box.style.backgroundColor = simpleBoxColor
            colorCode[index].textContent = simpleBoxColor
        })
    }
})

function getsimpleRandomColor() {
    const simpleColor = simpleColors[Math.floor(Math.random() * simpleColors.length)]
    return simpleColor
}

function getHexRandomColor() {
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)]
    }
    console.log(hexColor)
    return hexColor
}

window.onload = function() {
    colorBox.forEach((box, index) => {
        const hexColor = getHexRandomColor();
        box.style.backgroundColor = hexColor;
        colorCode[index].textContent = hexColor;
    });
};

