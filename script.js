function check(){
    /*document searches for quiz, after location quiz, it looks for question1. 
    in question one it looks for the predefined value.*/
var question1 = document.quiz.question1.value; 
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var correct = 0; 

    if (question1 == "Providence"){
        correct++;
    }
    if (question2 == "Hartford"){
        correct++;
    }
    if (question3 == "Albany"){
    correct++;
    }  

var messages = ["BITCH you smart!", "Girl!", "ehh..."];
var pictures = ["img/bys.gif", "img/girl.gif", "img/ehh.gif"]
var range; // going to determine which score we want!

    if (correct < 1){
        range = 2;
    }
    if (correct > 0 && correct < 3) { //&& both conditions need to be true.
        range = 1;
    }
    if (correct >2) {
        range = 0;
    }

document.getElementById("after_submit").style.visibility = "visible";


document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML= "You got " + correct + " correct!";
document.getElementById("picture").src = pictures[range]; 

};