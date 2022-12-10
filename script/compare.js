document.write(`
    <div id="checkDiv" class="question start">
        <p>Insira uma data, e veja quanto tempo há desde a primeira partida de hóquei no gelo.</p>
        <button id="checkBtn">Comparar</button>
    </div>
`);

const checkBtn = document.getElementById('checkBtn');
const checkBox = document.getElementById('checkDiv');
let input = document.createElement('input');
input.setAttribute('type', 'date');

checkBtn.setAttribute('class', 'button');

let result = document.createElement('p');

checkBox.appendChild(input);
checkBox.appendChild(result);

checkBtn.addEventListener('click',
    () => {
        const eventDate = new Date('1875-03-03');
        const inputDate = new Date(input.value);
        if (input.value == '' || input.value == NaN || input.value == null) {
            result.textContent = "Insira uma data válida."
            return
        }

        let differenceInDays = Math.ceil(Math.abs(inputDate - eventDate) / (86400000));
        console.log("diferença em dias é: " + differenceInDays);

        const yearsDifference = inputDate.getUTCFullYear()  - eventDate.getUTCFullYear();
        let leapYears = (yearsDifference / 4) - (yearsDifference / 100 - (yearsDifference / 400));
        leapYears = (leapYears - parseInt(leapYears) > .5) ? parseInt(leapYears) + 1 : parseInt(leapYears);

        let year = 0, month = 0, day;

        differenceInDays -= leapYears * 366;
        year += leapYears;

        while (differenceInDays >= 365) {
            differenceInDays -= 365;
            year++;
        }

        const daysInMonths = [31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 31, 28];  // Starts at March.
        if (inputDate.getUTCFullYear() % 4 === 0 && (!(inputDate.getUTCFullYear() % 100 === 0) || inputDate.getUTCFullYear() % 400 === 0))
            if (inputDate.getUTCMonth() > 1)
                differenceInDays--;

        let indexHead = 0;
        while (differenceInDays >= 30) {
            differenceInDays -= daysInMonths[indexHead];
            month++;
            indexHead++;
            if (indexHead === 12)
                indexHead = 0;
        }

        day = differenceInDays;

        if (day < 0) {
            month--;
            day = daysInMonths[month - 1] + day;
        }

        result.textContent = `${parseInt(day)} dias, ${parseInt(month)} meses e ${parseInt(year)} anos desde a primeira partida de Hóquei no Gelo.`;
    });