/*To-do list for script file:
1. Identify which elements are to be selected for quiz to run:
 a. 
 2.
3. create array of questions objects

4. create array of answers?
5. create timer function
6. Add initials to input box function
7. Save user initals and score function

*/

let questionEl = document.querySelector(".title");
let questionContainerEl = document.querySelector(".button");
let multipleChoiceOption1 = document.querySelector("#choice1");
let multipleChoiceOption2 = document.querySelector("#choice2");
let multipleChoiceOption3 = document.querySelector("#choice3");
let multipleChoiceOption4 = document.querySelector("#choice4");
let anyMultipleChoiceButton = document.querySelector(".button");
let startButton = document.querySelector(".start-button");
let trackingNumber = 0;
let timerElement = document.querySelector("#timer");
let score = 0;

let timeLeft = 60;

//array of question objects:
let questionArray = [
    {
        question: "Commonly used data types DO NOT Include:",

        answer: 'alerts',
        choiceA: 'strinrg',
        choiceB: 'booleans',
        choiceC: 'numbers',

    },
    {
        question: "The condition in an if/else statment is enclosed with _______",

        answer: 'parenthesis',
        choiceA: 'quotes',
        choiceB: 'curly brackets',
        choiceC: 'square brackets',

    },

    {
        question: "Arrays in JavaScript can be used to store______:",

        answer: 'all true',
        choiceA: 'numbers and strings',
        choiceB: 'other arrays',
        choiceC: 'booleans',

    },

    {
        question: "String values must be enclosed within_____when being assigned to variables.",

        answer: 'quotes',
        choiceA: 'commas',
        choiceB: 'curly brackets',
        choiceC: 'parenthesis',

    },

]


function startGame() {
    questionEl.textContent = questionArray[trackingNumber].question;
    multipleChoiceOption1.textContent = questionArray[trackingNumber].choiceA;
    multipleChoiceOption2.textContent = questionArray[trackingNumber].choiceB;
    multipleChoiceOption3.textContent = questionArray[trackingNumber].choiceC;
    multipleChoiceOption4.textContent = questionArray[trackingNumber].answer;

    console.log('Started');

    //Prevents start button from being clicked when round is in progress
    startButton.disabled = true;

}

//Add event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

startButton.addEventListener("click", startTimer);
multipleChoiceOption1.addEventListener("click", selectAnswer);
multipleChoiceOption2.addEventListener("click", selectAnswer);
multipleChoiceOption3.addEventListener("click", selectAnswer);
multipleChoiceOption4.addEventListener("click", selectAnswer);
//create function to start the quiz when the start button is clicked


//this function will make the next question appear once the user clicks
//need for loop for next question?
function nextQuestion() {
    //have to have if statement to check if statement that they went index not greater than 3 then game over, if lower then display next question
    if (questionArray[trackingNumber] < 3) {
        anyMultipleChoiceButton.addEventListener("click")
        console.log("game over")
        return

    } 
    /*else if  (){

        questionEl.textContent = questionArray[trackingNumber].question;
        multipleChoiceOption1.textContent = questionArray[trackingNumber].choiceA;
        multipleChoiceOption2.textContent = questionArray[trackingNumber].choiceB;
        multipleChoiceOption3.textContent = questionArray[trackingNumber].choiceC;
        multipleChoiceOption4.textContent = questionArray[trackingNumber].answer;
        console.log('Started');

    }
    */
}

    //When user selects answer a message will appear correct or wrong
    //increase score and increase tracking number and display new set of questions
    function selectAnswer(event) {
        if (event.target.textContent == questionArray[trackingNumber].answer) {
            console.log("correct answer")
            //else decrease score and increase tracking number and display next set of questions
        } else { }
    
    }



    //timer will run while the user is answering questons
    function startTimer() {
        let timer = setInterval(function () {
            timeLeft--;

            timerElement.textContent = timeLeft;
            if (timeLeft === 0) {
                // reset timer
                clearInterval(timer);
                return

            }

        }
            , 1000);

    }


/*


//This function will execute when the correct choice is selected
function correct() {

}


//this funciton will exectute when the answer is wrong
function wrong() {

}
*/