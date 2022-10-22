document.write(`
<footer class="footer">
    <div class="footerText">
        <p>Este site foi feito como avaliação da disciplina de DPW (Desenvolvimento de Páginas Web) para o Bacharelado de Sistemas de Informação da UNIRIO.</p>
        <p>Feito por Eduardo P. e Christian I. 2022</p>
        <div class="footerIcon">
            <img src="./assets/hockey.svg" class="icon">
            <h2 class="footerText">Hóquei</h2>
        </div>
        <div class="footerIcon">
            <a href="http://www.unirio.br/" target="unirio" class="footerText">Unirio</a>
            <a href="https://bsi.uniriotec.br/" target="unirio" class="footerText">BSI-Unirio</a>
        </div>
    </div>
</footer>
`);

document.getElementById("footerScript").remove();