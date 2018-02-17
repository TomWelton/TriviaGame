// Document ready function wraps all JS
$(document).ready(function () {

(function() {
    function buildTrivia() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
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
  
      // finally combine our output list into one string of HTML and put it on the page
      triviaContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our trivia
      const answerContainers = triviaContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const triviaContainer = document.getElementById("trivia");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
      {
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
  
    // display trivia right away
    buildTrivia();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();

  //timer function
  window.onload = function(){
    var min = 1;
    var sec = 60;
    setInterval(function(){

      document.getElementById("timer").innerHTML = min +" : " + sec ;
      sec--;
      if(sec == 00)
      {
        min--;
        sec = 60;
        if (min == 0)
        {
           min = 1;
        }
      }
     },1000);
   };

});//End Document.ready function