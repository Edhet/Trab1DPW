const pageName = document.title;
let OnStart = "", OnHistory = "", OnCuriosities = "", OnQuiz = "";

switch (pageName) {
    case "Hóquei - Início":
        OnStart = " onPage";
        break;
    case "Hóquei - História":
        OnHistory = " onPage";
        break;
    case "Hóquei - Curiosidades":
        OnCuriosities = " onPage";
        break;
    case "Hóquei - Quiz":
        OnQuiz = " onPage";
        break;
}

document.write(`
<header>
    <nav class="navbar">
        <img src="./assets/hockey.svg" class="icon">
        <h2 class="navHeader">Hóquei</h2>
        <div class="navLinks">
            <a href="index.html" class="navText${OnStart}">Início</a>
            <a href="historia.html" class="navText${OnHistory}">História</a>
            <a href="curiosidades.html" class="navText${OnCuriosities}">Curiosidades</a>
            <a href="quiz.html" class="navText${OnQuiz}">Quiz</a>
        </div>
    </nav>
</header>
`);

document.getElementById("navScript").remove();