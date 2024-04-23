const Peruskysymykset = [ 
    {
      question: "Mikä on 3 + 5?", 
      options: ["7", "8", "6", "9"], 
      correctAnswerIndex: 1, 
    }, 
    { 
      question: "Mikä on 12 - 4?", 
      options: ["6", "7", "8", "9"], 
      correctAnswerIndex: 2, 
    }, 
    { 
      question: "Mikä on 7 * 3?", 
      options: ["21", "24", "18", "27"], 
      correctAnswerIndex: 0, 
    }, 
    { 
      question: "Mikä on 20 / 4?", 
      options: ["4", "6", "5", "7"], 
      correctAnswerIndex: 2, 
    }, 
    { 
      question: "Mikä on 2 + 2 * 3?", 
      options: ["8", "6", "10", "9"], 
      correctAnswerIndex: 0, 
    }, 
  ]; 
  let OlevakysymysIndex = 0; 
  let selectedAnswerIndex = -1; 
  let score = 0; 

  function initializeQuiz() { 
    OlevakysymysIndex = 0; 
    selectedAnswerIndex = -1; 
    score = 0; 

    loadQuestion(); 
  } 
  function loadQuestion() { 
    const currentQuestion = Peruskysymykset[OlevakysymysIndex]; 
    const kysymysLaatikko = document.getElementById("kysymyslaatikko"); 
    const vastausLaatikko = document.getElementById("vastauslaatikko"); 
    const pisteLaatikko = document.getElementById("pistelaatikko");
   
    kysymysLaatikko.innerHTML = currentQuestion.question; 

    for (let i = 1; i <= 4; i++) { 
      const button = document.getElementById(`v${i}`).querySelector("button"); 
      button.innerHTML = currentQuestion.options[i - 1]; 
      button.onclick = () => { 
        selectedAnswerIndex = i - 1; 
        resetAnswerSelection(); 
        button.style.backgroundColor = "white"; 
      }; 
    }  
    vastausLaatikko.querySelector("button").onclick = () => { 
        if (selectedAnswerIndex === -1) { 
          alert("Valitse vastaus ensin."); 
        } else { 
          checkAnswer(); 
        } 
      }; 
    resetAnswerSelection();  
} 
function checkAnswer() { 
    const Olevakysymys = Peruskysymykset[OlevakysymysIndex]; 
    if (selectedAnswerIndex === Olevakysymys.correctAnswerIndex) { 
      score++;  
    } 
    OlevakysymysIndex++;  
    if (OlevakysymysIndex < Peruskysymykset.length) { 
      loadQuestion();  
    } else { 
      const pisteLaatikko = document.getElementById("pistelaatikko"); 
      pisteLaatikko.innerHTML = `Sait ${score} / ${Peruskysymykset.length} oikein.`; 

      const vastausButton = document.getElementById("vastauslaatikko").querySelector("button"); 
      vastausButton.innerHTML = "Aloita uudelleen";  
      vastausButton.onclick = initializeQuiz;  
    } 
    selectedAnswerIndex = -1; 
  } 
  function resetAnswerSelection() { 
    for (let i = 1; i <= 4; i++) { 
      const button = document.getElementById(`v${i}`).querySelector("button"); 
      button.style.backgroundColor = "";  
    } 
  } 
  initializeQuiz(); 