var questions = [{
    question: "Organizations use which communication to announce information?", options: ["written", "oral", "verbal", "nonverbal"],
    answer: "written"
},
{
    question: "Body Language,Body posture are examples of which type of communication",
    options: ["verbal", "nonverbal", "Informal", "formal"],
    answer: "nonverbal"
},
{
    question: "What is defined as process by which meanings are perceived and understanding between humans?",
    options: ["communication", "message", "statement", "language"],
    answer: "communication"
}
];
// Define variables to keep track of the current question and score
var currentQuestion = 0;
var score = 0;

// Get references to the HTML elements
var questionText = document.querySelector(".question-text");
var optionContainer = document.querySelector(".option-container");
var resultContainer = document.querySelector(".result-container");
var resultText = document.querySelector(".result-text");
var scoreText = document.querySelector(".score-text");
var leveltest = document.querySelector(".level-text")
var nextButton = document.querySelector(".next-button");
var levelButton = document.querySelector(".level-button");

// Function to display the current question and options
function displayQuestion() {
    var currentQ = questions[currentQuestion];
    questionText.textContent = currentQ.question;
    optionContainer.innerHTML = "";
    for (var i = 0; i < currentQ.options.length; i++) {
        var option = document.createElement("button");
        option.textContent = currentQ.options[i];
        option.classList.add("option");
        optionContainer.appendChild(option);
    }
}

// Function to check the selected option against the correct answer
function checkAnswer(selectedOption) {
    var currentQ = questions[currentQuestion];
    if (selectedOption.textContent === currentQ.answer) {
        selectedOption.classList.add("correct");
        resultText.textContent = "Correct!";
        score++;
    } else {
        selectedOption.classList.add("incorrect");
        resultText.textContent = "Incorrect!";
    }
    // Disable all options and show the result container
    var options = optionContainer.querySelectorAll(".option");
    for (var i = 0; i < options.length; i++) {
        options[i].disabled = true;
    }
    resultContainer.classList.remove
        ("hide");
    scoreText.textContent = score;
}

// Add event listeners to the options and buttons
optionContainer.addEventListener("click", function (event) {
    if (event.target.matches(".option")) {
        checkAnswer(event.target);
    }
});

nextButton.addEventListener("click", function () {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
        resultContainer.classList.add("hide");
        var options = optionContainer.querySelectorAll(".option");
        for (var i = 0; i < options.length; i++) {
            options[i].disabled = false;
            options[i].classList.remove("correct", "incorrect");
        }
    } else {
        levelButton.classList.remove("hide");
        nextButton.disabled = true;
    }
});

// add a click event listener to the level button
levelButton.addEventListener('click', () => {
    // check if the user has completed all the questions and scored more than 7
    if (score >= 3 && currentQuestion >= questions.length) {
        // if so, redirect the user to level 4
        leveltest.innerText = "4";
        alert("Congratulations! You've completed all the questions and scored more than 7. You can now proceed to Level 4.")
        window.location.href = 'signadmin.html';
    } else {
        // if not, show an alert box asking the user to try again
        alert('You need to complete all the questions and score more than 7 to proceed to the next level. Please try again.');
    }
});

// Display the first question
displayQuestion();
resultContainer.classList.add("hide");
scoreText.textContent = score;
