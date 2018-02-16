// Document ready function wraps all JS
$(document).ready(function () {

//variables defined, html div boxes made into vars
var triviaContainer = $("#trivia");
var submit = $("#submit");
var gameResult = $("#gameResult");


function createTrivia() {
    var output = [];

    triviaQ.forEach(
        (currentQuestion, questionNumber) => {
            var answers = [];

            for(letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            //adds question and answers to output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        });
    
    triviaContainer.innerHTML = output.join('');

};//end createTrivia function

function getResults() {

};


var triviaQ = [{
            question: "Questions go here",
            answers: {
                a: "Answer One",
                b: "Answer Two",
                c: "Answer Three",
                d: "Answer Four"
            },
            correctAnswer: "c"
        },
        {
            question: "Questions go here",
            answers: {
                a: "Answer One",
                b: "Answer Two",
                c: "Answer Three"
            },
            correctAnswer: "b"
        },
        {
            question: "Questions go here",
            answers: {
                a: "Answer One",
                b: "Answer Two",
                c: "Answer Three",
            },
            correctAnswer: "a"
        }
    ];//End TrivaQ Array

console.log(triviaQ);

createTrivia();

submit.addEventListener('click', getResults);


});//End Document.ready function