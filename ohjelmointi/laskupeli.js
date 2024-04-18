let correctCount = 0
let incorrectCount = 0
let num1, num2, operator

const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function RandomOperator() {
    let operators = ["+", "-", "*"]
    let randomIndex = Math.floor(Math.random() * operators.length)
    return operators[randomIndex]
}

function Calculate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2
        case "*":
            return num1 * num2
        default:
            return NaN
    }
}

const randomizeNumbers = () => {
    num1 = getRandomIntNumberInRange(1, 11)
    num2 = getRandomIntNumberInRange(1, 11)
    operator = RandomOperator()
    document.querySelector("#num1").textContent = num1
    document.querySelector("#num2").textContent = num2
    document.getElementById("operator").textContent = operator
}

function startGame() {
    document.getElementById("answer").value = "";
    randomizeNumbers()
}

function Lasku() {
    let result = Calculate(operator, num1, num2);
    let input = parseInt(document.getElementById("answer").value)

    if (Number(input) === result) {
        alert("Oikein!")
        correctCount++
        document.getElementById("oikeatvastaukset").textContent = correctCount;
    } else {
        alert("Väärin!")
        incorrectCount++
        document.getElementById("väärätvastaukset").textContent = incorrectCount;
    }

startGame()
}

document.getElementById("submit").addEventListener("click", Lasku);
window.onload = startGame