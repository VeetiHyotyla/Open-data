const nextBtn = document.getElementById('nextBtn');
const questionNumber = document.getElementById('questionNumber');
const answers = document.querySelectorAll('.answer');
const tryAgainBtn = document.getElementById('tryAgainBtn');
const resultDisplay = document.getElementById('resultDisplay');
const resultContainer = document.getElementById('results');

let questionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

nextBtn.addEventListener('click', goToNextQuestion);
tryAgainBtn.addEventListener('click', restartQuiz);

const questions = [
    {
        question: "What is 15 - 7?",
        options: ["6", "7", "8", "9"],
        correctAnswer: 2
    },
    {
        question: "What is 4 * 6?",
        options: ["20", "22", "24", "26"],
        correctAnswer: 2
    },
    {
        question: "What is 25 / 5?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 2
    },
    {
        question: "What is 12 + 9?",
        options: ["19", "20", "21", "22"],
        correctAnswer: 2
    },
    {
        question: "What is 30 - 12?",
        options: ["15", "16", "17", "18"],
        correctAnswer: 3
    },
    {
        question: "What is 7 * 8?",
        options: ["54", "55", "56", "57"],
        correctAnswer: 2
    },
    {
        question: "What is 48 / 6?",
        options: ["6", "7", "8", "9"],
        correctAnswer: 0
    },
    {
        question: "What is 20 + 14?",
        options: ["30", "34", "38", "42"],
        correctAnswer: 1
    },
    {
        question: "What is 10 - 3?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 2
    },
    {
        question: "What is 9 * 4?",
        options: ["32", "33", "34", "36"],
        correctAnswer: 3
    },
    {
        question: "What is 18 / 3?",
        options: ["4", "5", "6", "7"],
        correctAnswer: 1
    },
    {
        question: "What is 25 - 13?",
        options: ["10", "11", "12", "13"],
        correctAnswer: 1
    },
    {
        question: "What is 6 * 9?",
        options: ["48", "49", "50", "51"],
        correctAnswer: 0
    },
    {
        question: "What is 16 + 7?",
        options: ["21", "22", "23", "24"],
        correctAnswer: 0
    },
    {
        question: "What is 35 - 19?",
        options: ["15", "16", "17", "18"],
        correctAnswer: 2
    },
    {
        question: "What is 12 * 3?",
        options: ["34", "35", "36", "37"],
        correctAnswer: 2
    },
    {
        question: "What is 50 / 5?",
        options: ["8", "9", "10", "11"],
        correctAnswer: 2
    },
    {
        question: "What is 29 - 14?",
        options: ["14", "15", "16", "17"],
        correctAnswer: 1
    },
    {
        question: "What is 8 * 7?",
        options: ["50", "51", "52", "56"],
        correctAnswer: 3
    },
    {
        question: "What is 18 / 2?",
        options: ["8", "9", "10", "11"],
        correctAnswer: 1
    }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayQuestion() {
    const currentQuestion = questions[questionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    questionNumber.textContent = `Question ${questionIndex + 1} of ${questions.length}`;
    
    currentQuestion.options.forEach((option, index) => {
        answers[index].textContent = option;
        answers[index].classList.remove('selected');
        answers[index].disabled = false;
    });
}

function goToNextQuestion() {
    const selectedAnswer = document.querySelector('.answer.selected');
    if (selectedAnswer) {
        const currentQuestion = questions[questionIndex];
        if (selectedAnswer.textContent === currentQuestion.options[currentQuestion.correctAnswer]) {
            correctAnswers++;
        } else {
            wrongAnswers++;
        }
        questionIndex++;
        if (questionIndex < questions.length) {
            displayQuestion();
        } else {
            showResults();
        }
    }
}

function showResults() {
    const accuracy = (correctAnswers / questions.length) * 100;
    resultContainer.textContent = `You got ${correctAnswers} questions right and ${wrongAnswers} questions wrong. Accuracy: ${accuracy.toFixed(2)}%`;
    resultContainer.style.display = 'block';
    nextBtn.style.display = 'none';
    tryAgainBtn.style.display = 'block';
    resultDisplay.textContent += ` ${correctAnswers}/${questions.length} (${accuracy.toFixed(2)}%)`;
}

function restartQuiz() {
    questionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    resultContainer.style.display = 'none';
    nextBtn.style.display = 'block';
    tryAgainBtn.style.display = 'none';
    resultDisplay.textContent = 'Results:';
    shuffle(questions);
    displayQuestion();
}

// Initial display
shuffle(questions);
displayQuestion();
// Check the selected answer
answers.forEach((answer, index) => {
    answer.addEventListener('click', () => {
        if (!answer.classList.contains('selected')) {
            answers.forEach((ans) => ans.classList.remove('selected'));
            answer.classList.add('selected');
        }
    });
});



