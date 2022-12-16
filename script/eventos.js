document.write(`
    <section class="question start">
        <h2 class="headerText">Eventos do Hóquei</h2>
        <div>
            <p> Insira um Evento:</p>
            <div style="margin: 0.6rem">
                <label>Nome:</label>
                <input type="text" id="eventName">
                <label>Data:</label>
                <input type="date" id="eventDate">
            </div>
            <button class="button" id="addBtn">Criar evento</button>
        </div>
        <table id="list" class="table">
        </table>
    </section>
`);

const addBtn = document.getElementById('addBtn');
const eventName = document.getElementById('eventName');
const eventDate = document.getElementById('eventDate');
let eventNmbr = 0;

addBtn.addEventListener('click',
    () => {
        if (eventDate.value == '' || eventName.value == '' || eventName.value.length > 30)
            return

        let newEvent = document.createElement("tr");
        newEvent.setAttribute('id', 'event'+eventNmbr);
        newEvent.style.padding = "0.4rem";

        let nameRow = document.createElement("th");
        nameRow.style.width = "80%";
        nameRow.textContent = eventName.value;

        let dateRow = document.createElement("th");
        dateRow.textContent = eventDate.value;

        let btnRow = document.createElement("th");
        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'button');
        deleteBtn.textContent = "Deletar Evento";
        deleteBtn.addEventListener('click',
            () => {
               document.getElementById(newEvent.id).remove();
            });

        btnRow.appendChild(deleteBtn);
        document.getElementById('list').appendChild(newEvent);
        document.getElementById(newEvent.id).appendChild(nameRow);
        document.getElementById(newEvent.id).appendChild(dateRow);
        document.getElementById(newEvent.id).appendChild(btnRow);

        eventNmbr++;
    });
