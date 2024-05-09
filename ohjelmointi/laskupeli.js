let correctCount = 0
let incorrectCount = 0
let num1, num2, operator

const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

if (localStorage.getItem('laskupeliCorrect') !== null) {
    correctCount = parseInt(localStorage.getItem('laskupeliCorrect'))
    document.getElementById('oikeatvastaukset').innerHTML = correctCount
}

if (localStorage.getItem('laskupeliIncorrect') !== null) {
    incorrectCount = parseInt(localStorage.getItem('laskupeliIncorrect'))
    document.getElementById('väärätvastaukset').innerHTML = incorrectCount
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
    randomizeNumbers();
}

function updateResults() {
    localStorage.setItem("laskupeliCorrect", correctCount)
    localStorage.setItem('laskupeliIncorrect', incorrectCount)
}

function Lasku() {
    let result = Calculate(operator, num1, num2)
    randomizeNumbers()
    let input = parseInt(document.getElementById("answer").value)

    if (Number(input) === result) {
        alert("Oikein!")
        correctCount++
        document.getElementById("oikeatvastaukset").textContent = correctCount
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

        document.getElementById("answer").value = ""
    }

    updateResults()
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
    document.getElementById("peli").style.display = "none"
    document.getElementById("number").style.display = "none"
    document.getElementById("taulukko").style.display = "block"
    document.getElementById("tulos").textContent = viesti
    document.getElementById("oikeat").textContent = correctCount
    document.getElementById("väärät").textContent = incorrectCount

    let pisteet = correctCount - incorrectCount
    document.getElementById("pisteet").textContent = pisteet

}

document.getElementById("start").addEventListener("click", function () {
    startGame()
})

document.getElementById("submit").addEventListener("click", function () {
    Lasku()
})

document.getElementById("clear").addEventListener("click", function () {
    tyhjennä()
})



document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault()
        Lasku()
    }
})


function tyhjennä() {
    localStorage.removeItem("laskupeliCorrect")
    localStorage.removeItem("laskupeliIncorrect")
    location.reload()
}