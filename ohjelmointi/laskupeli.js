let correctCount = 0
let incorrectCount = 0

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

function startGame() {
    document.getElementById("answer").value = "";
    let num1 = getRandomIntNumberInRange(1, 11)
    let num2 = getRandomIntNumberInRange(1, 11)
    let operator = RandomOperator()
    document.getElementById("num1").textContent = num1
    document.getElementById("num2").textContent = num2
    document.getElementById("operator").textContent = operator

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
}

document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    startGame();
});