document.addEventListener('DOMContentLoaded', function () {
    // Collapsible sections
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }

    // Quiz options
    var quizOptions = document.getElementsByClassName('quiz-option');
    for (var i = 0; i < quizOptions.length; i++) {
        quizOptions[i].addEventListener('click', function() {
            var selected = this;
            var parent = selected.parentElement;
            var options = parent.getElementsByClassName('quiz-option');
            for (var j = 0; j < options.length; j++) {
                options[j].style.pointerEvents = 'none';
                if (options[j].dataset.correct === "true") {
                    options[j].classList.add('correct');
                } else {
                    options[j].classList.add('incorrect');
                }
            }
            var isCorrect = selected.dataset.correct === "true";
            showQuizPopup(isCorrect, selected.dataset.explanation);
        });
    }

    // Show the welcome popup when the page loads
    showWelcomePopup();
});

function showWelcomePopup() {
    var welcomePopup = document.getElementById('welcome-popup');
    welcomePopup.style.display = 'block';
    document.body.classList.add('popup-active');
}

function closeWelcomePopup() {
    var welcomePopup = document.getElementById('welcome-popup');
    welcomePopup.style.display = 'none';
    document.body.classList.remove('popup-active');
}

function showQuizPopup(isCorrect, explanation) {
    var popup = document.getElementById('popup');
    var popupText = document.getElementById('popup-text');
    var popupExplanation = document.getElementById('popup-explanation');
    popup.className = isCorrect ? 'popup correct' : 'popup incorrect';
    popupText.textContent = isCorrect ? 'Correct!' : 'Incorrect.';
    popupExplanation.textContent = explanation;
    popup.style.display = 'block';
    document.body.classList.add('popup-active');
}

function closeQuizPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
    document.body.classList.remove('popup-active');
}
