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

let question =  document.querySelector(".title");
let questionContainerEl =document.querySelector(".button");
let multipleChoiceOption1 = document.querySelector("#choice1");
let multipleChoiceOption2 = document.querySelector("#choice2");
let multipleChoiceOption3 = document.querySelector("#choice3");
let multipleChoiceOption4 = document.querySelector("#choice4");
let startButton = document.querySelector(".start-button");


//array of question objects:
//let questionArray = [
   ""
//

function startGame() {
    console.log('Started');
startButton.classList.add('hide');
questionContainerEl.classList.remove('hide');


//Prevents start button from being clicked when round is in progress
startButton.disabled = true;

}


//Add event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame)

//create function to start the quiz when the start button is clicked


//this function will make the next question appear once the user clicks
function nextQuestion() {


}

//When user selects answer a messaage will appear correct or wrong
function selectAnswer() {

}

//timer will run while the user is answering questons
function starTimer () {


}



//This function will execute when the correct choice is selected
function correct () {

}


//this function will exexute when the wrong answer is selected
function wrong () {

    
}