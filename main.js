const numbersButton = document.querySelectorAll('.inputScore')
const scoreBoard = document.getElementById('scoreBoard')
const mathActions = document.querySelectorAll('button.action')

for (let buttonsElement of numbersButton) {
    buttonsElement.addEventListener('click', numberEntry)
}

function numberEntry() {
    const text = scoreBoard.textContent
    if (text[0] === '0' && text.length === 1) {
        scoreBoard.textContent = null
    }
    scoreBoard.textContent += this.textContent
}


C.addEventListener('click', () => scoreBoard.textContent = '0')

backspace.addEventListener('click', backspaceScore)

function backspaceScore() {
    const lengthScore = scoreBoard.textContent.length

    if (lengthScore === 1) {
        scoreBoard.textContent = '0'
    } else {
        scoreBoard.textContent = scoreBoard.textContent.slice(0, lengthScore - 1)
    }
}

for (let mathActionElement of mathActions) {
    mathActionElement.addEventListener('click', action)
}

result.addEventListener('click', actionResult)

let mathAction

function action() {
    mathAction = this.textContent
    scoreBoard.textContent += mathAction
}


function actionResult() {
    const str = scoreBoard.textContent
    let splitStr = str.split(mathAction)
    if (!mathAction) {
        scoreBoard.textContent = 'Error'
    }
    //todo: checking for the presence of operands
    switch (mathAction) {
        case '+':
            scoreBoard.textContent = +splitStr[0] + +splitStr[1];
            break;
        case '–':
            scoreBoard.textContent = +splitStr[0] - +splitStr[1];
            break;
        case '×':
            scoreBoard.textContent = +splitStr[0] * +splitStr[1];
            break;
        case '÷':
            scoreBoard.textContent = +splitStr[0] / +splitStr[1];
            break;
    }
}