// script.js

// Function to fetch a generated question from the server
async function fetchGeneratedQuestion(topic) {
    try {
        const response = await fetch('http://localhost:5000/generate-question', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ topic }),
        });

        const questionData = await response.json();
        return questionData;
    } catch (error) {
        console.error('Error fetching generated question:', error);
    }
}

// Function to generate practice problems using generated questions
async function generatePracticeProblems() {
    // Get the container where the questions will be displayed
    const container = document.getElementById('practice-problems-container');
    container.innerHTML = ''; // Clear any existing content

    // Define how many questions you want to display
    const numberOfQuestions = 5; // You can change this number

    // Define the topic for question generation
    const topic = 'chemistry basics'; // You can make this dynamic based on user input

    for (let i = 0; i < numberOfQuestions; i++) {
        const q = await fetchGeneratedQuestion(topic);

        // Check if question data was retrieved successfully
        if (!q) continue;

        // Create the question div
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';

        // Create the question text
        const questionP = document.createElement('p');
        questionP.innerHTML = `<strong>${i + 1}.</strong> ${q.question}`;
        questionDiv.appendChild(questionP);

        // Create the options
        const optionsDiv = document.createElement('div');

        q.options.forEach(function (option, index) {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'quiz-option';
            optionDiv.textContent = option;
            optionDiv.dataset.correct = index === q.correctOption ? 'true' : 'false';
            optionDiv.dataset.explanation = q.explanation;

            // Add event listener for each option
            optionDiv.addEventListener('click', function () {
                const selected = this;
                const parent = selected.parentElement;
                const options = parent.getElementsByClassName('quiz-option');
                for (let j = 0; j < options.length; j++) {
                    options[j].style.pointerEvents = 'none';
                    if (options[j].dataset.correct === 'true') {
                        options[j].classList.add('correct');
                    } else {
                        options[j].classList.add('incorrect');
                    }
                }
                const isCorrect = selected.dataset.correct === 'true';
                showQuizPopup(isCorrect, selected.dataset.explanation);
            });

            optionsDiv.appendChild(optionDiv);
        });

        questionDiv.appendChild(optionsDiv);
        container.appendChild(questionDiv);
    }
}

// Functions for popups
function showWelcomePopup() {
    const welcomePopup = document.getElementById('welcome-popup');
    welcomePopup.style.display = 'block';
    document.body.classList.add('popup-active');
}

function closeWelcomePopup() {
    const welcomePopup = document.getElementById('welcome-popup');
    welcomePopup.style.display = 'none';
    document.body.classList.remove('popup-active');
}

function showQuizPopup(isCorrect, explanation) {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');
    const popupExplanation = document.getElementById('popup-explanation');
    popup.className = 'popup'; // Reset classes
    popup.classList.add(isCorrect ? 'correct' : 'incorrect');
    popupText.textContent = isCorrect ? 'Correct!' : 'Incorrect.';
    popupExplanation.textContent = explanation;
    popup.style.display = 'block';
    document.body.classList.add('popup-active');
}

function closeQuizPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    document.body.classList.remove('popup-active');

    // Remove selected classes from options for the next set of questions
    const options = document.getElementsByClassName('quiz-option');
    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove('correct', 'incorrect');
        options[i].style.pointerEvents = 'auto';
    }
}

// Event listeners and initial setup
document.addEventListener('DOMContentLoaded', function () {
    // Collapsible sections
    const coll = document.getElementsByClassName('collapsible');
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener('click', function () {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    }

    // Add event listener to the 'Generate New Questions' button
    const generateButton = document.getElementById('generate-questions-button');
    if (generateButton) {
        generateButton.addEventListener('click', generatePracticeProblems);
    }

    // Show the welcome popup when the page loads
    showWelcomePopup();

    // Generate practice problems on page load
    generatePracticeProblems();
});
