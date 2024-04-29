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
    randomizeNumbers()
}

function Lasku() {
    let result = Calculate(operator, num1, num2);
    let input = parseInt(document.getElementById("answer").value)

    if (Number(input) === result) {
        alert("Oikein!")
        correctCount++
        document.getElementById("oikeatvastaukset").textContent = correctCount
        randomizeNumbers()
        document.getElementById("answer").value = ""

        if (correctCount === 10) {
            Pelipiste()
        }


    } else {
        alert("Väärin!")
        incorrectCount++
        document.getElementById("väärätvastaukset").textContent = incorrectCount;

        if (incorrectCount === 10) {
            Pelipiste()
        }

        randomizeNumbers()
        document.getElementById("answer").value = ""
    }
}

function Pelipiste() {
    if (incorrectCount >= 5) {
        Vastaukset("Hävisit pelin.")
    } else {
        Vastaukset("Voitit pelin!")
    }
}

function Vastaukset(viesti) {
    document.getElementById("laskut").style.display = "none"
    document.getElementById("number").style.display = "none"
    document.getElementById("taulukko").style.display = "block"
    document.getElementById("tulos").textContent = viesti
    document.getElementById("oikeat").textContent = correctCount
    document.getElementById("väärät").textContent = incorrectCount

    let pisteet = correctCount - incorrectCount
    document.getElementById("pisteet").textContent = pisteet

}

document.getElementById("submit").addEventListener("click", Lasku);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault()
        Lasku()
    }
})

document.getElementById("start").addEventListener("click", function () {
    document.getElementById("peli").style.display = "none"
    document.getElementById("game").style.display = "block"
    correctCount = 0
    incorrectCount = 0
    document.getElementById("oikeatvastaukset").textContent = correctCount;
    document.getElementById("väärätvastaukset").textContent = incorrectCount;
    startGame()
})