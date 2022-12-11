const date = new Date();
const monthDay = date.getDate(), month = date.getMonth(), year = date.getUTCFullYear();
const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

document.write(`
    <div style="margin: auto; max-width: fit-content">
        <p class="headerText">Calendário ${date.getMonth()+1}/${date.getFullYear()}</p>
        <table id="calendario" style="border-style: solid; border-radius: 3px; border-color: #A1A1A133; background-color: #d3d3d3; margin-top: 0.4rem">
        </table>
    </div>
`);

let day = 1;

if (year % 4 === 0 && (!(year % 100 === 0) || year % 400 === 0)) {
    daysInMonths[1] = 29;
}

for (let row_i = 0; row_i < 5; row_i++) {
    let row = document.createElement('tr');
    row.setAttribute('id', 'row'+row_i);
    document.getElementById('calendario').appendChild(row);

    for (let week_i = 1; week_i <= 7; week_i++) {
        let td = document.createElement('td');
        td.textContent = day;
        if (day === monthDay) {
            td.style.backgroundColor = "#0d6efd";
            td.style.color = "white";
        }

        document.getElementById('row'+row_i).appendChild(td);
        day++;
        if (day > daysInMonths[month])
            break;
    }
}
