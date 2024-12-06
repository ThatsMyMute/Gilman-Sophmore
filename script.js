// Sample questions pool
const questionPool = [
  {
      question: "What is Boyle’s Law?",
      answers: ["P1V1 = P2V2", "V1/T1 = V2/T2", "Ptotal = P1 + P2", "None of the above"],
      correct: 0,
  },
  {
      question: "What does Dalton’s Law of Partial Pressures state?",
      answers: [
          "Gases have the same volume at STP.",
          "Total pressure equals the sum of partial pressures.",
          "Pressure and volume are inversely proportional.",
          "None of the above",
      ],
      correct: 1,
  },
  {
      question: "What is the molar mass of CO2?",
      answers: ["12 g/mol", "44 g/mol", "32 g/mol", "28 g/mol"],
      correct: 1,
  },
  {
      question: "How many moles are in 18g of H2O?",
      answers: ["1 mole", "0.5 moles", "2 moles", "None of the above"],
      correct: 0,
  },
  {
      question: "Which gas law relates pressure and temperature?",
      answers: [
          "Boyle’s Law",
          "Charles’s Law",
          "Gay-Lussac’s Law",
          "Avogadro’s Law",
      ],
      correct: 2,
  },
  {
      question: "What is the value of the gas constant R in PV=nRT?",
      answers: ["8.314 J/mol·K", "0.0821 L·atm/mol·K", "Both are correct", "None are correct"],
      correct: 2,
  },
];

// State variables
let selectedQuestions = [];
let userAnswers = [];

// Function to start the quiz
function startQuiz() {
  const numQuestions = parseInt(document.getElementById("num-questions").value);

  // Dynamically generate questions
  selectedQuestions = getRandomQuestions(numQuestions);
  userAnswers = Array(numQuestions).fill(null);

  displayQuiz();
  document.getElementById("quiz-setup").classList.add("hidden");
  document.getElementById("quiz-section").classList.remove("hidden");
}

// Function to display the quiz
function displayQuiz() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = ""; // Clear any existing content

  selectedQuestions.forEach((q, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("quiz-question");
      questionDiv.innerHTML = `
          <p>${index + 1}. ${q.question}</p>
          ${q.answers
              .map(
                  (answer, i) => `
              <label>
                  <input type="radio" name="question-${index}" value="${i}" onchange="saveAnswer(${index}, ${i})">
                  ${answer}
              </label>
          `
              )
              .join("")}
      `;
      quizContainer.appendChild(questionDiv);
  });
}

// Function to save the user's answer
function saveAnswer(questionIndex, answerIndex) {
  userAnswers[questionIndex] = answerIndex;
}

// Function to submit the quiz and provide detailed feedback
function submitQuiz() {
  let correctCount = 0;
  const feedbackContainer = document.createElement("div"); // Create a container for feedback
  feedbackContainer.innerHTML = `<h3>Review Your Answers:</h3>`;
  
  selectedQuestions.forEach((q, index) => {
      const userAnswer = userAnswers[index];
      const isCorrect = userAnswer === q.correct;

      // Track correct answers
      if (isCorrect) {
          correctCount++;
      }

      // Create feedback for each question
      const questionFeedback = document.createElement("div");
      questionFeedback.classList.add("feedback-item");
      questionFeedback.innerHTML = `
          <p><strong>Q${index + 1}:</strong> ${q.question}</p>
          <p>Your Answer: ${
              userAnswer !== null ? q.answers[userAnswer] : "No Answer"
          }</p>
          <p style="color: ${isCorrect ? "green" : "red"}">
              ${isCorrect ? "Correct!" : `Incorrect. Correct Answer: ${q.answers[q.correct]}`}
          </p>
          <hr>
      `;

      feedbackContainer.appendChild(questionFeedback);
  });

  // Display overall results
  document.getElementById("quiz-section").classList.add("hidden");
  document.getElementById("results-section").classList.remove("hidden");

  const resultsText = document.getElementById("results-text");
  resultsText.textContent = `You got ${correctCount} out of ${selectedQuestions.length} correct!`;

  // Append detailed feedback
  document.getElementById("results-section").appendChild(feedbackContainer);
}


// Function to display results
function displayResults(correctCount) {
  document.getElementById("quiz-section").classList.add("hidden");
  document.getElementById("results-section").classList.remove("hidden");

  const resultsText = document.getElementById("results-text");
  resultsText.textContent = `You got ${correctCount} out of ${selectedQuestions.length} correct!`;
}

// Function to restart the quiz
function restartQuiz() {
  document.getElementById("results-section").classList.add("hidden");
  document.getElementById("quiz-setup").classList.remove("hidden");
}

// Function to get random questions from the pool
function getRandomQuestions(num) {
  const shuffled = questionPool.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}
