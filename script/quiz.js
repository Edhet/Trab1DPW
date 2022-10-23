const answers = {
    radioOne: 2,
    radioTwo: 4,
    radioThree: 3,
    checkboxOne: true,
    checkboxTwo: true,
    textOne: "CANADÁ",
    textTwo: "60",
    textThree: "CONGELADO",
    textFour: "NHL",
    textFive: "ESTERCO DE VACA",
};

let input = {
    radioOne: 1,
    radioTwo: 1,
    radioThree: 1,
    checkboxOne: null,
    checkboxTwo: null,
    textOne: null,
    textTwo: null,
    textThree: null,
    textFour: null,
    textFive: null,
};

function submitClicked() {
    let counter = 0;
    let percent;
    readInput();

    // To remove validator warning, create h2 to display result.
    const answerDisplay = document.createElement("h2");
    answerDisplay.className = "quiz headerText";
    answerDisplay.id = "result";
    document.getElementById("resultDiv").appendChild(answerDisplay);

    const divQ1 = document.getElementById("q1"); //Radio1
    const divQ2 = document.getElementById("q2"); //Text1
    const divQ3 = document.getElementById("q3"); //Radio2
    const divQ4 = document.getElementById("q4"); //Check1
    const divQ5 = document.getElementById("q5"); //Text2
    const divQ6 = document.getElementById("q6"); //Text3
    const divQ7 = document.getElementById("q7"); //Radio7
    const divQ8 = document.getElementById("q8"); //Text4
    const divQ9 = document.getElementById("q9"); //Text5
    const divQ10 = document.getElementById("q10"); //Check2

    const resultDiv = document.getElementById("resultDiv");
    
    if (input.radioOne == answers.radioOne) {counter++; divQ1.className = "question right";}
    else {divQ1.className = "question wrong";}
    if (input.radioTwo == answers.radioTwo) {counter++; divQ3.className = "question right";}
    else {divQ3.className = "question wrong";}
    if (input.radioThree == answers.radioThree) {counter++; divQ7.className = "question right";}
    else {divQ7.className = "question wrong";}

    if (input.checkboxOne == answers.checkboxOne) {counter++; divQ4.className = "question right";}
    else {divQ4.className = "question wrong";}
    if (input.checkboxTwo == answers.checkboxTwo) {counter++; divQ10.className = "question right";}
    else {divQ10.className = "question wrong";}
    
    if (input.textOne == answers.textOne) {counter++; divQ2.className = "question right";}
    else {divQ2.className = "question wrong";}
    if (input.textTwo == answers.textTwo) {counter++; divQ5.className = "question right";}
    else {divQ5.className = "question wrong";}
    if (input.textThree == answers.textThree) {counter++; divQ6.className = "question right";}
    else {divQ6.className = "question wrong";}
    if (input.textFour == answers.textFour) {counter++; divQ8.className = "question right";}
    else {divQ8.className = "question wrong";}
    if (input.textFive == answers.textFive) {counter++; divQ9.className = "question right";}
    else {divQ9.className = "question wrong";}

    percent = (100 * counter) / 10;
    document.getElementById("result").innerHTML = `Acertou: ${counter}/10 | ${percent}%`;
    if (counter >= 7) {
        resultDiv.className = "resultDiv right";
    }
    else if (counter <= 4) {
        resultDiv.className = "resultDiv wrong";
    }
    else {
        resultDiv.className = "resultDiv enough";
    }
}

function readInput() {
    input.checkboxOne = document.getElementById("check1").checked;
    input.checkboxTwo = document.getElementById("check2").checked;

    input.textOne = document.getElementById("text1").value.toUpperCase();
    input.textTwo = document.getElementById("text2").value.toUpperCase();
    input.textThree = document.getElementById("text3").value.toUpperCase();
    input.textFour = document.getElementById("text4").value.toUpperCase();
    input.textFive = document.getElementById("text5").value.toUpperCase();

    input.radioOne = document.querySelector('input[name="radio1"]:checked').value
    input.radioTwo = document.querySelector('input[name="radio2"]:checked').value
    input.radioThree = document.querySelector('input[name="radio3"]:checked').value
}