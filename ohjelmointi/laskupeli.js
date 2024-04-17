let num1 = 0
let num2 = 0
let correctCount = 0
let incorrectCount = 0

const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function RandomOperator() {
    let operators = ["+", "-", "*", "x"]
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
        case "x":
            return num1 * num2
        default:
            return NaN
    }
}

function startGame() {
    let num1 = getRandomIntNumberInRange(1, 11)
    let num2 = getRandomIntNumberInRange(1, 11)
    let operator = RandomOperator()
    document.getElementById("num1").textContent = num1
    document.getElementById("num2").textContent = num2
    document.getElementById("operator").textContent = operator

    let result = Calculate(operator, num1, num2)
    let input = document.getElementById("answer").value

    if (Number(input) === result) {
        alert("Oikein!")
        correctCount++
        document.getElementById("oikeatvastaukset").textContent = correctCount;
    } else {
        alert("Väärin!")
        incorrectCount++
        document.getElementById("väärätvastaukset").textContent = incorrectCount;
    }
}
document.addEventListener("DOMContentLoaded", startGame);
