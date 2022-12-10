document.write(`
    <div class="question start" style="margin-top: 1rem; display: flex; flex-wrap: wrap">
        <h2 class="headerText">Alterar estilo da página</h2>
        <div style="display: flex; flex-wrap: wrap">
            <div style="margin: auto 2rem">
                <label>Fundo</label>
                <input type="color" id="background">    
            </div>
            <div style="margin: auto 2rem">
                <label>Texto</label>
                <input type="color" id="text">    
            </div>
            <div style="margin: auto 2rem">
                <label>Tamanho</label>
                <input type="number" id="size" style="max-width: 8rem">    
            </div>
        </div>
        <button class="button" style="margin-left: auto;" id="btn">Alterar</button>
    </div>
`)

const chngBtn = document.getElementById('btn');
const size = document.getElementById('size');
const background = document.getElementById('background');
const text = document.getElementById('text');

chngBtn.addEventListener('click',
    () => {
        if (size == '' || background == '' || text == '')
            return

        document.body.style.background = background.value;
        document.body.style.color = text.value;
        document.body.style.fontSize = size.value+"px";

        const chevrons = document.getElementsByClassName('chevronButton');
        for (let i = 0; i < chevrons.length; i++) {
            chevrons.item(i).setAttribute('style', `color: ${text.value}`);
        }

        const links = document.getElementsByClassName('linkButton');
        for (let i = 0; i < links.length; i++) {
            links.item(i).setAttribute('style', `color: ${text.value}`);
            links.item(i).style.fontSize = size.value+"px";
        }
    });