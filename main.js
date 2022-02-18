const numbersButton = document.querySelectorAll('.inputScore')
const mathActions = document.querySelectorAll('button.action')
let mathAction

for (let numbers of numbersButton) {
    numbers.addEventListener('click', numberEntry)
}

for (let mathActionElement of mathActions) {
    mathActionElement.addEventListener('click', mathematicAction)
}

backspace.addEventListener('click', backspaceScore)

result.addEventListener('click', getResult)

reset.addEventListener('click', resetScore)


function numberEntry() {
    const text = scoreboard.textContent

    if (text[0] === '0' && text.length === 1) {
        scoreboard.textContent = null
    } else if (mathAction && firstOperand && !secondOperand) {
        secondOperand = this.textContent
        return scoreboard.textContent = secondOperand
    }
    scoreboard.textContent += this.textContent
}

let firstOperand

function mathematicAction() {
    firstOperand = scoreboard.textContent
    mathAction = this.textContent
}


function backspaceScore() {
    const lengthScore = scoreboard.textContent.length
    if (lengthScore === 1 || (+res < 0 && lengthScore === 2)) {
        scoreboard.textContent = '0'
    } else {
        scoreboard.textContent = scoreboard.textContent.slice(0, lengthScore - 1)
    }
}

function resetScore() {
    scoreboard.textContent = '0'
}

let res
let secondOperand

function getResult() {
    secondOperand = scoreboard.textContent

    switch (mathAction) {
        case '+':
            res = +firstOperand + +secondOperand;
            break;
        case '–':
            res = +firstOperand - +secondOperand;
            break;
        case '×':
            res = +firstOperand * +secondOperand;
            break;
        case '÷':
            res = +firstOperand / +secondOperand;
            break;
    }
    scoreboard.textContent = res
    mathAction = null
    secondOperand = null
    firstOperand = res
}