if (localStorage.alreadyOpenedOnce == null) {
    const qList = [
        {type: "radio", text: "O disco \"puck\" utilizado no hoquei é feito de qual material?", options: ["Mármore carrara", "Borracha vulcanizada", "Resina", "Cimento"], answer: 1, finished: false},
        {type: "radio", text: "No hóquei de gelo, os jogadores disputam com um disco que pode alcançar até grandes velocidades, nesse contexto, eles necessitam utilizar:", options: ["Nenhuma proteção", "Um capacete apenas", "Blusas de lã e botas", "Luvas, capacete e equipamentos apropriados"], answer: 3, finished: false},
        {type: "radio", text: "Em geral, o hóquei é um esporte caracterizado pela agilidade e velocidade, seguindo esse fato, os discos puck geralmente atingem:", options: ["Entre 50 e 60km/h", "Menos de 100km/h", "Mais de 150 km/h", "15 km/h"], answer: 2, finished: false},

        {type: "text", text: "Qual o país responsável por originar o hóquei de gelo?" , answer: "CANADÁ", finished: false},
        {type: "text", text: "Quanto tempo dura em média uma partida de hóquei em minutos?" , answer: "60", finished: false},
        {type: "text", text: "O puck utilizado nas partidas de hóquei é geralmente:" , answer: "CONGELADO", finished: false},
        {type: "text", text: "Qual o maior campeonato de hóquei no gelo atualmente?" , answer: "NHL", finished: false},
        {type: "text", text: "De qual material eram feitos os primeiros discos de hoquei?" , answer: "ESTERCO DE VACA", finished: false},

        {type: "checkbox", text: "Uma partida de hóquei tem 12 jogadores, sendo 6 de cada time." , answer: true, finished: false},
        {type: "checkbox", text: "Em caso de acidente com o goleiro oficial, um membro da platéia pode substitui-lo e jogar com o time em um campeonato, essa afirmação é:" , answer: true, finished: false},
    ];
    localStorage.setItem('questions', JSON.stringify(qList));
    localStorage.alreadyOpenedOnce = 1;
}

const HOW_MANY_QUESTIONS = 10;

let questions = JSON.parse(localStorage.questions);

const submitBtn = document.createElement("button");
submitBtn.textContent = "Enviar";
submitBtn.setAttribute('class', 'button');
document.querySelector('main').appendChild(submitBtn);

const reloadBtn = document.createElement("button");
reloadBtn.textContent = "Jogar Novamente";
reloadBtn.setAttribute('class', 'button');
reloadBtn.style.marginLeft = "auto";
reloadBtn.style.padding = "0 0.2rem";

let questionDivs = [];
let pickedQuestions = [];
let questionTypes = [];
let inputs = [];

const LIMIT = (unfinishedQuestions() > 5) ? 5 : unfinishedQuestions();
for (let i = 0; i < LIMIT; i++) {

    let questionDiv = document.createElement('div');
    questionDiv.setAttribute('class', 'question start');
    questionDiv.setAttribute('id', 'q'+i);
    questionDivs.push(questionDiv);
    document.querySelector('section').appendChild(questionDiv);

    let questionIndex = generateRandom(0, HOW_MANY_QUESTIONS -1);
    while (questions[questionIndex].finished === true || pickedQuestions.includes(questionIndex))
        questionIndex = generateRandom(0, HOW_MANY_QUESTIONS -1);
    pickedQuestions.push(questionIndex);

    let questionText = document.createElement('p');
    questionText.textContent = questions[questionIndex].text;
    document.getElementById('q'+i).appendChild(questionText);

    if (questions[questionIndex].type == "checkbox") {
        questionTypes.push("checkbox");
        let checkboxInput = document.createElement('input');
        checkboxInput.setAttribute('type', 'checkbox');
        document.getElementById('q'+i).appendChild(checkboxInput);

        let checkboxLabel = document.createElement('label');
        checkboxLabel.textContent = "Verdadeiro";
        document.getElementById('q'+i).appendChild(checkboxLabel);

        inputs.push(checkboxInput);
    }
    else if (questions[questionIndex].type == "text") {
        questionTypes.push("text");
        let textInput = document.createElement('input');
        textInput.setAttribute('type', 'text');

        document.getElementById('q'+i).appendChild(textInput);
        inputs.push(textInput);
    }
    else if (questions[questionIndex].type == "radio") {
        questionTypes.push("radio");
        let radioInputs = [];
        for (option = 0; option < 4; option++) {
            let radioInput = document.createElement('input');
            radioInput.setAttribute('type', 'radio');
            radioInput.setAttribute('name', 'r'+i);
            radioInput.setAttribute('value', option);

            if (option != 0) {
                const br = document.createElement('br');
                document.getElementById('q'+i).appendChild(br);
            }
            else
                radioInput.setAttribute('checked', '');

            document.getElementById('q'+i).appendChild(radioInput);
            radioInputs.push(radioInput);

            let radioLabel = document.createElement('label');
            radioLabel.textContent = questions[questionIndex].options[option];

            document.getElementById('q'+i).appendChild(radioLabel);
        }
        inputs.push(radioInputs);
    }
}

let notClicked = true;
submitBtn.addEventListener('click',
    () => {
        if (!notClicked)
            return

        let rightAnswers = 0;

        for (checkHead = 0; checkHead < LIMIT; checkHead++) {
            if (questionTypes[checkHead] == "checkbox") {
                if (inputs[checkHead].checked == questions[pickedQuestions[checkHead]].answer) {
                    questions[pickedQuestions[checkHead]].finished = true;
                    rightAnswers++;
                    questionDivs[checkHead].className = "question right";
                }
                else {
                    questionDivs[checkHead].className = "question wrong";
                }
            }
            else if (questionTypes[checkHead] == "text") {
                if (inputs[checkHead].value.toUpperCase() == questions[pickedQuestions[checkHead]].answer) {
                    questions[pickedQuestions[checkHead]].finished = true;
                    rightAnswers++;
                    questionDivs[checkHead].className = "question right";
                }
                else {
                    questionDivs[checkHead].className = "question wrong";
                }
            }
            else if (questionTypes[checkHead] == "radio") {
                let inputValue;
                for (let i = 0; i < 4; i++)
                    if (inputs[checkHead][i].checked)
                        inputValue = inputs[checkHead][i].value;

                if (inputValue == questions[pickedQuestions[checkHead]].answer) {
                    questions[pickedQuestions[checkHead]].finished = true;
                    rightAnswers++;
                    questionDivs[checkHead].className = "question right";
                }
                else {
                    questionDivs[checkHead].className = "question wrong";
                }
            }
        }

        const percentage = (rightAnswers * 100) / LIMIT
        let resultDiv = document.createElement('div');
        resultDiv.setAttribute('id', 'resultDiv');
        resultDiv.className = (percentage < 50) ? "question wrong" : (percentage < 70) ? "question enough" : "question right";
        resultDiv.style.marginTop = "1.5rem";
        resultDiv.style.display = "flex";
        resultDiv.style.flexWrap = "wrap";
        document.querySelector('main').appendChild(resultDiv);

        let resultText = document.createElement('h2');
        resultText.textContent = `Você acertou ${rightAnswers} de ${LIMIT}, ${percentage}%`;
        resultText.className = "headerText";
        document.getElementById('resultDiv').appendChild(resultText);


        document.getElementById('resultDiv').appendChild(reloadBtn);

        if (unfinishedQuestions() === 0)
            for (let i = 0; i < HOW_MANY_QUESTIONS; i++)
                questions[i].finished = false;

        localStorage.setItem('questions', JSON.stringify(questions));
        notClicked = false;
    });

reloadBtn.addEventListener('click',
    () => {
        window.location.reload();
    });


function unfinishedQuestions() {
    let incomplete = 0;
    for (let i = 0; i < HOW_MANY_QUESTIONS; i++)
        if (questions[i].finished === false)
            incomplete++;
    return incomplete;
}

function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}