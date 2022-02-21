import {numbersButton, mathActions} from "./view.js";

const defaultValue = '0'
let mathAction
let firstOperand
let secondOperand
let result

for (let numbers of numbersButton) {
    numbers.addEventListener('click', numberEntry)
}

for (let mathActionElement of mathActions) {
    mathActionElement.addEventListener('click', mathematicAction)
}

backspace.addEventListener('click', backspaceScore)

equals.addEventListener('click', getResult)

reset.addEventListener('click', resetScore)


function numberEntry() {
    const text = scoreboard.textContent

    if (text[0] === defaultValue && text.length === 1) {
        scoreboard.textContent = null
    } else if (mathAction && firstOperand && !secondOperand) {
        secondOperand = this.textContent
        return scoreboard.textContent = secondOperand
    }
    scoreboard.textContent += this.textContent
}


function mathematicAction() {
    firstOperand = scoreboard.textContent
    mathAction = this.textContent
}


function backspaceScore() {
    const lengthScore = scoreboard.textContent.length

    if ((lengthScore === 1) || (Number(result) < 0 && lengthScore === 2)) {
        scoreboard.textContent = defaultValue
    } else {
        scoreboard.textContent = scoreboard.textContent.slice(0, lengthScore - 1)
    }
}

function resetScore() {
    scoreboard.textContent = defaultValue
}

function getResult() {
    secondOperand = scoreboard.textContent
    console.log(secondOperand)
    const isNotValid = (firstOperand === defaultValue) || !secondOperand || !mathAction
    if (isNotValid) return

    switch (mathAction) {
        case '+':
            result = +firstOperand + +secondOperand;
            break;
        case '–':
            result = +firstOperand - +secondOperand;
            break;
        case '×':
            result = +firstOperand * +secondOperand;
            break;
        case '÷':
            result = +firstOperand / +secondOperand;
            break;
        default:
            scoreboard.textContent = defaultValue
    }

    scoreboard.textContent = result
    mathAction = null
    secondOperand = null
    firstOperand = result
}