const answers = {
    radioOne: 1,
    radioTwo: 1,
    radioThree: 1,
    checkboxOne: false,
    checkboxTwo: false,
    textOne: "a",
    textTwo: "a",
    textThree: "a",
    textFour: "a",
    textFive: "a",
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
    
    if (input.radioOne == answers.radioOne) {counter++}
    if (input.radioTwo == answers.radioTwo) {counter++}
    if (input.radioThree == answers.radioThree) {counter++}
    if (input.checkboxOne == answers.checkboxOne) {counter++}
    if (input.checkboxTwo == answers.checkboxTwo) {counter++}
    if (input.textOne == answers.textOne) {counter++}
    if (input.textTwo == answers.textTwo) {counter++}
    if (input.textThree == answers.textThree) {counter++}
    if (input.textFour == answers.textFour) {counter++}
    if (input.textFive == answers.textFive) {counter++}

    percent = (100 * counter) / 10;
    document.getElementById("result").innerHTML = `Acertou: ${counter}/10 | ${percent}%`;
}

function readInput() {
    input.checkboxOne = document.getElementById("check1").checked;
    input.checkboxTwo = document.getElementById("check2").checked;

    input.textOne = document.getElementById("text1").value;
    input.textTwo = document.getElementById("text2").value;
    input.textThree = document.getElementById("text3").value;
    input.textFour = document.getElementById("text4").value;
    input.textFive = document.getElementById("text5").value;

    input.radioOne = document.querySelector('input[name="radio1"]:checked').value
    input.radioTwo = document.querySelector('input[name="radio2"]:checked').value
    input.radioThree = document.querySelector('input[name="radio3"]:checked').value
}