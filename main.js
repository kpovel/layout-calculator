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
    console.log(text[0])
    if (text[0] === '0' && text.length === 1) {
        scoreboard.textContent = null
    }
    scoreboard.textContent += this.textContent
}


function mathematicAction() {
    mathAction = this.textContent
    scoreboard.textContent += mathAction
}


function backspaceScore() {
    const lengthScore = scoreboard.textContent.length

    if (lengthScore === 1) {
        scoreboard.textContent = '0'
    } else {
        scoreboard.textContent = scoreboard.textContent.slice(0, lengthScore - 1)
    }
}

function resetScore() {
    scoreboard.textContent = '0'
}


function getResult() {
    const str = scoreboard.textContent
    let splitStr = str.split(mathAction)
    if (splitStr[1] === '') {
        scoreboard.textContent = splitStr[0]
    }else if (scoreboard.textContent === 'Infinity'){
        return
    }
    console.log(splitStr)
    //todo: checking for the presence of operands
    switch (mathAction) {
        case '+':
            scoreboard.textContent = +splitStr[0] + +splitStr[1];
            break;
        case '–':
            scoreboard.textContent = +splitStr[0] - +splitStr[1];
            break;
        case '×':
            scoreboard.textContent = +splitStr[0] * +splitStr[1];
            break;
        case '÷':
            scoreboard.textContent = +splitStr[0] / +splitStr[1];
            break;
    }
    mathAction = null
}