// Document ready function wraps all JS
$(document).ready(function () {

  (function () {
    function buildTrivia() {
      //store the HTML output
      var output = [];
      myQuestions.forEach((currentQuestion, questionNumber) => {
        //store answer choices
        var answers = [];

        // available answers
        for (letter in currentQuestion.answers) {

          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });

      // combine our output
      triviaContainer.innerHTML = output.join("");
    }

    function showResults() {
      // gather answer containers from our trivia
      var answerContainers = triviaContainer.querySelectorAll(".answers");

      // user's answers
      var numCorrect = 0;

      // for each question
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        var answerContainer = answerContainers[questionNumber];
        var selector = `input[name=question${questionNumber}]:checked`;
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;

        };
      });

      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    var triviaContainer = document.getElementById("trivia");
    var resultsContainer = document.getElementById("results");
    var submitButton = document.getElementById("submit");
    var myQuestions = [{
        question: "The Earth is the ____ planet from the sun",
        answers: {
          a: "First",
          b: "Second",
          c: "Third",
          d: "Fourth"
        },
        correctAnswer: "c"
      },
      {
        question: "What spacecraft holds the record of being 'Farthest from Earth'?",
        answers: {
          a: "Voyager 1",
          b: "Voyager 2",
          c: "Viking 2",
          d: "Cassini"
        },
        correctAnswer: "a"
      },
      {
        question: "Enceldus is a moon of which gas giant?",
        answers: {
          a: "Jupiter",
          b: "Saturn",
          c: "Uranus",
          d: "Neptune"
        },
        correctAnswer: "a"
      },
      {
        question: "What famous song was playing inside of the Tesla car recently launched into space?",
        answers: {
          a: "'Rocket Man' - Elton John",
          b: "'Space Oddity' - David Bowie",
          c: "'Learning to Fly' - Tom Petty",
          d: "'Highway to Hell' - AC/DC",
        },
        correctAnswer: "b"
      },
    ];

    // display trivia on page load
    buildTrivia();

    //show results
    submitButton.addEventListener("click", showResults);
  })();

  //timer function
  window.onload = function () {
    var min = 1;
    var sec = 60;
    setInterval(function () {

      document.getElementById("timer").innerHTML = min + " : " + sec;
      sec--;
      if (sec == 00) {
        min--;
        sec = 60;
      }
    }, 1000);
    // Attempting to stop timer function when clock reachs 0 min and 0 sec(********SEE READ ME FOR DETAILS*****)
    if (min === -1) {
      showResults();
      var min = 0;
      var sec = 0;
    };
  };

}); //End Document.ready function