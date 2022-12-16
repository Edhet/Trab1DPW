const date = new Date();
const monthDay = date.getDate(), month = date.getMonth(), year = date.getUTCFullYear();
const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

document.write(`
    <div style="margin: auto; max-width: fit-content">
        <p class="headerText" style="text-align: center">Calendário ${date.getMonth()+1}/${date.getFullYear()}</p>
        <table id="calendario" style="border-style: solid; border-radius: 3px; border-color: rgb(161, 161, 161); background-color: #d3d3d3; margin-top: 0.4rem;">
            <tr style="font-weight: bold; border-bottom: 2px solid rgb(161, 161, 161);">
                <td style="color: #dc3545; text-align: center">D</td>
                <td style="text-align: center">S</td>
                <td style="text-align: center">T</td>
                <td style="text-align: center">Q</td>
                <td style="text-align: center">Q</td>
                <td style="text-align: center">S</td>
                <td style="text-align: center">S</td>
            </tr>
        </table>
    </div>
`);

let day = 1;
let weekDay = new Date(year, month, 1).getDay();

if (year % 4 === 0 && (!(year % 100 === 0) || year % 400 === 0)) {
    daysInMonths[1] = 29;
}

for (let row_i = 0; row_i < 6; row_i++) {
    let row = document.createElement('tr');
    row.setAttribute('id', 'row'+row_i);
    document.getElementById('calendario').appendChild(row);

    for (let week_i = 1; week_i <= 7; week_i++) {
        let td = document.createElement('td');
        td.style.textAlign = "center";
        if (weekDay > 0) {
            weekDay--;
            td.textContent = "ㅤ";
        }
        else if (day <= daysInMonths[month]) {
            td.textContent = day;
            day++;
        }

        if (day === monthDay+1) {
            td.style.backgroundColor = "#0d6efd";
            td.style.borderRadius = "4px";
            td.style.color = "white";
        }

        document.getElementById('row'+row_i).appendChild(td);
        if (day > daysInMonths[month])
            break;
    }
}
