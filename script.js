// script.js

// Question bank
var questionBank = [
  // I. States of Matter
  {
      section: "I. States of Matter",
      question: "Which state of matter has a definite volume but takes the shape of its container?",
      options: [
          { text: "A) Solid", isCorrect: false, explanation: "Solids have a definite shape and volume." },
          { text: "B) Liquid", isCorrect: true, explanation: "Liquids have a definite volume but take the shape of their container." },
          { text: "C) Gas", isCorrect: false, explanation: "Gases have neither definite shape nor volume." },
          { text: "D) Plasma", isCorrect: false, explanation: "Plasma behaves like gas but is ionized." }
      ]
  },
  {
      section: "I. States of Matter",
      question: "Which state of matter is characterized by particles that are tightly packed and only vibrate in place?",
      options: [
          { text: "A) Solid", isCorrect: true, explanation: "In solids, particles are tightly packed and only vibrate in place." },
          { text: "B) Liquid", isCorrect: false, explanation: "Liquids have particles that can move past each other." },
          { text: "C) Gas", isCorrect: false, explanation: "Gases have particles that move freely and are far apart." },
          { text: "D) Plasma", isCorrect: false, explanation: "Plasma consists of ionized particles." }
      ]
  },
  {
      section: "I. States of Matter",
      question: "In which state are particles far apart and move freely at high speeds?",
      options: [
          { text: "A) Solid", isCorrect: false, explanation: "Particles in solids are tightly packed." },
          { text: "B) Liquid", isCorrect: false, explanation: "Particles in liquids are close but can slide past each other." },
          { text: "C) Gas", isCorrect: true, explanation: "Gases have particles that are far apart and move freely." },
          { text: "D) Bose-Einstein Condensate", isCorrect: false, explanation: "Bose-Einstein condensates occur at near absolute zero temperatures." }
      ]
  },

  // II. Physical and Chemical Changes
  {
      section: "II. Physical and Chemical Changes",
      question: "Which of the following is a physical change?",
      options: [
          { text: "A) Boiling water", isCorrect: true, explanation: "Boiling water is a physical change as it changes state but not composition." },
          { text: "B) Burning wood", isCorrect: false, explanation: "Burning wood is a chemical change." },
          { text: "C) Rusting iron", isCorrect: false, explanation: "Rusting iron is a chemical change." },
          { text: "D) Baking bread", isCorrect: false, explanation: "Baking bread is a chemical change." }
      ]
  },
  {
      section: "II. Physical and Chemical Changes",
      question: "Which of the following indicates a chemical change has occurred?",
      options: [
          { text: "A) Change in shape", isCorrect: false, explanation: "Change in shape is a physical change." },
          { text: "B) Change in size", isCorrect: false, explanation: "Change in size is a physical change." },
          { text: "C) Formation of gas bubbles without heating", isCorrect: true, explanation: "Formation of gas bubbles without heating indicates a chemical change." },
          { text: "D) Change from solid to liquid", isCorrect: false, explanation: "Change from solid to liquid is a physical change." }
      ]
  },

  // III. Classification of Matter by Composition
  {
      section: "III. Classification of Matter by Composition",
      question: "Which of the following is a compound?",
      options: [
          { text: "A) Oxygen gas (O₂)", isCorrect: false, explanation: "Oxygen gas (O₂) is an element." },
          { text: "B) Water (H₂O)", isCorrect: true, explanation: "Water (H₂O) is a compound made of hydrogen and oxygen." },
          { text: "C) Gold (Au)", isCorrect: false, explanation: "Gold (Au) is an element." },
          { text: "D) Air", isCorrect: false, explanation: "Air is a mixture." }
      ]
  },
  {
      section: "III. Classification of Matter by Composition",
      question: "Saltwater is an example of a:",
      options: [
          { text: "A) Homogeneous mixture", isCorrect: true, explanation: "Saltwater is a homogeneous mixture (solution)." },
          { text: "B) Heterogeneous mixture", isCorrect: false, explanation: "It's not a heterogeneous mixture." },
          { text: "C) Compound", isCorrect: false, explanation: "It's not a compound." },
          { text: "D) Pure substance", isCorrect: false, explanation: "It's not a pure substance." }
      ]
  },

  // IV. Theories of Heat
  {
      section: "IV. Theories of Heat",
      question: "According to the caloric theory, heat is considered to be:",
      options: [
          { text: "A) A weightless fluid that flows from hot to cold objects", isCorrect: true, explanation: "The caloric theory posits that heat is a weightless fluid called caloric." },
          { text: "B) The kinetic energy of particles", isCorrect: false, explanation: "Heat as kinetic energy of particles is part of the kinetic theory, not the caloric theory." },
          { text: "C) The result of chemical reactions", isCorrect: false, explanation: "Heat as a result of chemical reactions is not the basis of the caloric theory." },
          { text: "D) A form of electromagnetic radiation", isCorrect: false, explanation: "Heat as electromagnetic radiation is not related to the caloric theory." }
      ]
  },
  {
      section: "IV. Theories of Heat",
      question: "Which phenomenon could the caloric theory NOT adequately explain?",
      options: [
          { text: "A) Heat conduction between metals", isCorrect: false, explanation: "Conduction was explained by the flow of caloric fluid." },
          { text: "B) Generation of heat through friction", isCorrect: true, explanation: "The caloric theory could not explain the generation of heat through friction." },
          { text: "C) Temperature changes in substances", isCorrect: false, explanation: "Temperature changes were explained by the amount of caloric present." },
          { text: "D) Phase changes like melting and boiling", isCorrect: false, explanation: "Phase changes were thought to involve absorption or release of caloric." }
      ]
  },
  {
      section: "IV. Theories of Heat",
      question: "The kinetic theory of heat proposes that:",
      options: [
          { text: "A) Heat is a fluid that can be transferred", isCorrect: false, explanation: "Heat as a fluid is the concept from the caloric theory." },
          { text: "B) Heat is the energy associated with the motion of particles", isCorrect: true, explanation: "The kinetic theory states that heat is due to the motion of particles." },
          { text: "C) Heat is stored as chemical potential energy", isCorrect: false, explanation: "Chemical potential energy relates to chemical bonds, not heat directly." },
          { text: "D) Heat results from mass being converted to energy", isCorrect: false, explanation: "Heat as mass converted to energy is a concept from nuclear reactions, not kinetic theory." }
      ]
  },

  // V. Element Symbols
  {
      section: "V. Element Symbols",
      question: "Which element is represented by the symbol 'Fe'?",
      options: [
          { text: "A) Iron", isCorrect: true, explanation: "Fe is the symbol for iron, derived from its Latin name 'ferrum'." },
          { text: "B) Fluorine", isCorrect: false, explanation: "Fluorine is represented by 'F'." },
          { text: "C) Tin", isCorrect: false, explanation: "Tin is represented by 'Sn'." },
          { text: "D) Lead", isCorrect: false, explanation: "Lead is represented by 'Pb'." }
      ]
  },
  {
      section: "V. Element Symbols",
      question: "'Ag' is the chemical symbol for which element?",
      options: [
          { text: "A) Gold", isCorrect: false, explanation: "Gold is represented by 'Au'." },
          { text: "B) Silver", isCorrect: true, explanation: "Ag is the symbol for silver, from the Latin 'argentum'." },
          { text: "C) Mercury", isCorrect: false, explanation: "Mercury is represented by 'Hg'." },
          { text: "D) Aluminum", isCorrect: false, explanation: "Aluminum is represented by 'Al'." }
      ]
  },
  {
      section: "V. Element Symbols",
      question: "The symbol 'Na' stands for which element?",
      options: [
          { text: "A) Neon", isCorrect: false, explanation: "'Ne' is the symbol for neon." },
          { text: "B) Nitrogen", isCorrect: false, explanation: "'N' is the symbol for nitrogen." },
          { text: "C) Sodium", isCorrect: true, explanation: "Na is the symbol for sodium, from the Latin 'natrium'." },
          { text: "D) Nickel", isCorrect: false, explanation: "'Ni' is the symbol for nickel." }
      ]
  },

  // VI. Periodic Families
  {
      section: "VI. Periodic Families",
      question: "Elements in the halogen family are known for being:",
      options: [
          { text: "A) Highly reactive metals", isCorrect: false, explanation: "Alkali metals are highly reactive metals." },
          { text: "B) Highly reactive non-metals", isCorrect: true, explanation: "Halogens are highly reactive non-metals with seven valence electrons." },
          { text: "C) Inert gases", isCorrect: false, explanation: "Noble gases are inert under standard conditions." },
          { text: "D) Metals with variable oxidation states", isCorrect: false, explanation: "Transition metals have variable oxidation states." }
      ]
  },
  {
      section: "VI. Periodic Families",
      question: "Which group contains elements with two valence electrons?",
      options: [
          { text: "A) Group 1 (Alkali Metals)", isCorrect: false, explanation: "Group 1 elements have one valence electron." },
          { text: "B) Group 2 (Alkaline Earth Metals)", isCorrect: true, explanation: "Group 2 elements are the Alkaline Earth Metals with two valence electrons." },
          { text: "C) Group 17 (Halogens)", isCorrect: false, explanation: "Group 17 elements have seven valence electrons." },
          { text: "D) Group 18 (Noble Gases)", isCorrect: false, explanation: "Group 18 elements have full valence shells." }
      ]
  },
  {
      section: "VI. Periodic Families",
      question: "The noble gases are located in which group of the periodic table?",
      options: [
          { text: "A) Group 1", isCorrect: false, explanation: "Group 1 contains the alkali metals." },
          { text: "B) Group 16", isCorrect: false, explanation: "Group 16 contains the chalcogens." },
          { text: "C) Group 17", isCorrect: false, explanation: "Group 17 contains the halogens." },
          { text: "D) Group 18", isCorrect: true, explanation: "Group 18 contains the noble gases." }
      ]
  },

  // VII. Metals vs Non-Metals
  {
      section: "VII. Metals vs Non-Metals",
      question: "Which of the following is a characteristic of metals?",
      options: [
          { text: "A) Brittle when solid", isCorrect: false, explanation: "Non-metals are typically brittle when solid." },
          { text: "B) Good conductor of electricity", isCorrect: true, explanation: "Metals are good conductors of heat and electricity." },
          { text: "C) Dull appearance", isCorrect: false, explanation: "Non-metals often have a dull appearance." },
          { text: "D) Poor conductor of heat", isCorrect: false, explanation: "Non-metals are poor conductors of heat." }
      ]
  },
  {
      section: "VII. Metals vs Non-Metals",
      question: "Elements that have properties of both metals and non-metals are called:",
      options: [
          { text: "A) Metals", isCorrect: false, explanation: "Metals have distinct metallic properties." },
          { text: "B) Non-metals", isCorrect: false, explanation: "Non-metals lack metallic properties." },
          { text: "C) Metalloids", isCorrect: true, explanation: "Metalloids have properties intermediate between metals and non-metals." },
          { text: "D) Noble gases", isCorrect: false, explanation: "Noble gases are inert gases with full valence shells." }
      ]
  },
  {
      section: "VII. Metals vs Non-Metals",
      question: "Which element is a non-metal?",
      options: [
          { text: "A) Iron", isCorrect: false, explanation: "Iron is a metal." },
          { text: "B) Copper", isCorrect: false, explanation: "Copper is a metal." },
          { text: "C) Sulfur", isCorrect: true, explanation: "Sulfur is a non-metal." },
          { text: "D) Aluminum", isCorrect: false, explanation: "Aluminum is a metal." }
      ]
  },

  // VIII. Laws of Definite Composition and Multiple Proportions
  {
      section: "VIII. Laws of Composition",
      question: "The Law of Definite Composition applies to:",
      options: [
          { text: "A) Compounds", isCorrect: true, explanation: "Compounds have a definite composition by mass." },
          { text: "B) Mixtures", isCorrect: false, explanation: "Mixtures have variable composition." },
          { text: "C) Elements", isCorrect: false, explanation: "Elements are pure substances but the law refers to compounds." },
          { text: "D) Solutions", isCorrect: false, explanation: "Solutions are mixtures and have variable composition." }
      ]
  },
  {
      section: "VIII. Laws of Composition",
      question: "If two elements form more than one compound, their mass ratios are simple whole numbers. This is an example of the Law of:",
      options: [
          { text: "A) Conservation of Mass", isCorrect: false, explanation: "The Law of Conservation of Mass states that mass is conserved in reactions." },
          { text: "B) Definite Composition", isCorrect: false, explanation: "The Law of Definite Composition refers to fixed composition in compounds." },
          { text: "C) Multiple Proportions", isCorrect: true, explanation: "The Law of Multiple Proportions describes this phenomenon." },
          { text: "D) Dalton's Law of Partial Pressures", isCorrect: false, explanation: "Dalton's Law of Partial Pressures relates to gases." }
      ]
  },
  {
      section: "VIII. Laws of Composition",
      question: "Which of the following best illustrates the Law of Multiple Proportions?",
      options: [
          { text: "A) Carbon forms CO and CO₂", isCorrect: true, explanation: "Carbon forms CO and CO₂, with oxygen mass ratios of 1:2." },
          { text: "B) Water is composed of H₂O", isCorrect: false, explanation: "Water always has the same composition, illustrating the Law of Definite Composition." },
          { text: "C) Mass is conserved in reactions", isCorrect: false, explanation: "Mass conservation relates to the Law of Conservation of Mass." },
          { text: "D) Air is composed of nitrogen and oxygen", isCorrect: false, explanation: "Air is a mixture, not a compound with fixed ratios." }
      ]
  },

  // IX. Dalton's Atomic Model
  {
      section: "IX. Dalton's Atomic Model",
      question: "Which of the following is NOT a postulate of Dalton's Atomic Theory?",
      options: [
          { text: "A) Atoms are indivisible particles", isCorrect: false, explanation: "Dalton stated that atoms are indivisible." },
          { text: "B) Atoms of the same element are identical", isCorrect: false, explanation: "Atoms of the same element are identical in mass and properties." },
          { text: "C) Atoms combine in simple whole-number ratios", isCorrect: false, explanation: "Atoms combine in simple whole-number ratios." },
          { text: "D) Atoms are made up of protons, neutrons, and electrons", isCorrect: true, explanation: "Dalton's theory did not include protons, neutrons, or electrons." }
      ]
  },
  {
      section: "IX. Dalton's Atomic Model",
      question: "Dalton's Atomic Theory helped to explain the Law of Conservation of Mass by stating that:",
      options: [
          { text: "A) Atoms are rearranged during chemical reactions", isCorrect: true, explanation: "Dalton proposed that atoms are rearranged during chemical reactions." },
          { text: "B) Atoms can be created and destroyed", isCorrect: false, explanation: "Atoms are neither created nor destroyed in reactions." },
          { text: "C) Mass is converted into energy", isCorrect: false, explanation: "Mass is conserved, not converted into energy in chemical reactions." },
          { text: "D) Atoms change their identities in reactions", isCorrect: false, explanation: "Atoms retain their identities in chemical reactions." }
      ]
  },
  {
      section: "IX. Dalton's Atomic Model",
      question: "Which of the following is a limitation of Dalton's Atomic Theory?",
      options: [
          { text: "A) Atoms can combine in chemical reactions", isCorrect: false, explanation: "Dalton correctly proposed that atoms combine in chemical reactions." },
          { text: "B) Atoms are indivisible and indestructible particles", isCorrect: true, explanation: "Atoms are divisible into subatomic particles, which Dalton did not know." },
          { text: "C) Atoms can be converted into energy in nuclear reactions", isCorrect: false, explanation: "Dalton's theory did not address nuclear reactions." },
          { text: "D) Atoms of different elements have different masses", isCorrect: false, explanation: "Dalton recognized that different elements have different masses." }
      ]
  }
];

// Function to generate practice problems
function generatePracticeProblems() {
  // Get the container where the questions will be displayed
  var container = document.getElementById('practice-problems-container');
  container.innerHTML = ''; // Clear any existing content

  // Define how many questions you want to display
  var numberOfQuestions = 5; // You can change this number

  // Create a copy of the question bank and shuffle it
  var shuffledQuestions = questionBank.slice().sort(() => Math.random() - 0.5);

  // Select the first 'numberOfQuestions' from the shuffled array
  var selectedQuestions = shuffledQuestions.slice(0, numberOfQuestions);

  // Generate the questions
  selectedQuestions.forEach(function(q, index) {
      // Create the question div
      var questionDiv = document.createElement('div');
      questionDiv.className = 'question';

      // Create the question text
      var questionP = document.createElement('p');
      questionP.innerHTML = `<strong>${index + 1}.</strong> ${q.question}`;
      questionDiv.appendChild(questionP);

      // Create the options
      var optionsDiv = document.createElement('div');

      q.options.forEach(function(option) {
          var optionDiv = document.createElement('div');
          optionDiv.className = 'quiz-option';
          optionDiv.textContent = option.text;
          optionDiv.dataset.correct = option.isCorrect;
          optionDiv.dataset.explanation = option.explanation;

          // Add event listener for each option
          optionDiv.addEventListener('click', function() {
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

          optionsDiv.appendChild(optionDiv);
      });

      questionDiv.appendChild(optionsDiv);
      container.appendChild(questionDiv);
  });
}

// Functions for popups
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
  popup.className = 'popup'; // Reset classes
  popup.classList.add(isCorrect ? 'correct' : 'incorrect');
  popupText.textContent = isCorrect ? 'Correct!' : 'Incorrect.';
  popupExplanation.textContent = explanation;
  popup.style.display = 'block';
  document.body.classList.add('popup-active');
}

function closeQuizPopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
  document.body.classList.remove('popup-active');

  // Remove selected classes from options for the next set of questions
  var options = document.getElementsByClassName('quiz-option');
  for (var i = 0; i < options.length; i++) {
      options[i].classList.remove('correct', 'incorrect');
      options[i].style.pointerEvents = 'auto';
  }
}

// Event listeners and initial setup
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

  // Add event listener to the 'Generate New Questions' button
  var generateButton = document.getElementById('generate-questions-button');
  if (generateButton) {
      generateButton.addEventListener('click', generatePracticeProblems);
  }

  // Show the welcome popup when the page loads
  showWelcomePopup();

  // Generate practice problems on page load
  generatePracticeProblems();
});
