import { routineData } from './routineData.js';

function showAllRoutines() {
    const department = localStorage.getItem("selectedDepartment") || "selectdepartment";
    const semester = localStorage.getItem("selectedSemester") || "selectsemester";
    const section = localStorage.getItem("selectedSection") || "selectSection";

    document.getElementById("department").value = department;
    document.getElementById("semester").value = semester;
    document.getElementById("section").value = section;

    const routineTable = document.getElementById("routineTable");
    routineTable.innerHTML = "";

    if (department === "selectdepartment" || semester === "selectsemester" || section === "selectSection") {
        return;
    }

    const routines = routineData[department][semester][section]; 

    let tableHeaders;
    if (department === "CSE") {
        tableHeaders = ["Day/Time", "9:00 AM-10:10 AM", "10:10 AM-11:20 AM", "11:20 AM-12:30 PM", "12:30 PM-1:40 PM", "1:40 PM-2:50 PM", "2:50 PM-4:00 PM", "4:00 PM-5:10 PM"];
    } else {
        tableHeaders = ["Day/Time", "08:15 AM - 09:10 AM", "09:15 AM - 10:10 AM", "10:15 AM - 11: 10 AM", "11:10 AM - 11:40 AM", "11:40 AM - 12:35 PM", "12:40 PM - 01:35 PM", "01:40 PM - 02:35 PM"];
    }

    // Get current time and adjust day index
    const bangladeshTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" }));
    const currentHour = bangladeshTime.getHours();
    let currentDayIndex = bangladeshTime.getDay();
    let nextDayIndex = (currentDayIndex + 1) % 7;

    if (currentHour >= 1) {
        currentDayIndex = nextDayIndex;
        nextDayIndex = (nextDayIndex + 1) % 7;
    }

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const headerRow = document.createElement("tr");
    tableHeaders.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    routineTable.appendChild(headerRow);

    let rowspanCounter = 0; 
    routines.forEach((data, rowIndex) => {
        const row = document.createElement("tr");
        data.forEach((item, colIndex) => {
            const cell = document.createElement("td");
            if (typeof item === 'object') {
                cell.textContent = item.text;
                if (item.colspan) cell.colSpan = item.colspan;
                if (item.rowspan) {
                    cell.rowSpan = item.rowspan;
                    rowspanCounter = item.rowspan - 1;
                }
            } else {
                cell.textContent = item;
            }
            row.appendChild(cell);

            if (rowspanCounter > 0 && colIndex === 0) {
                rowspanCounter--;
            }
            if (rowspanCounter === 0 && colIndex === 0) {
                rowspanCounter = 0;
            }
        });

        const dayCell = row.children[0];
        if (rowIndex === currentDayIndex) {
            dayCell.textContent = days[currentDayIndex] + " - Today";
            row.classList.add("highlight");
        } else if (rowIndex === nextDayIndex) {
            dayCell.textContent = days[nextDayIndex] + " - Next Day";
            row.classList.add("highlight2");
        } else {
            dayCell.textContent = days[rowIndex];
        }

        routineTable.appendChild(row);
    });
}

function autoShowRoutines() {
    showAllRoutines();
}

document.addEventListener("DOMContentLoaded", autoShowRoutines);

document.getElementById("department").addEventListener("change", function () {
    localStorage.setItem("selectedDepartment", this.value);
    showAllRoutines();
});


document.getElementById("semester").addEventListener("change", function () {
    localStorage.setItem("selectedSemester", this.value);
    showAllRoutines();
});


document.getElementById("section").addEventListener("change", function () {
    localStorage.setItem("selectedSection", this.value);
    showAllRoutines();
});

function formatDateTime(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    var formattedDateTime = day + '-' + month + '-' + year ;
    return formattedDateTime;
}


function updateDateTime() {
    var currentDate = new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' });
    var currentDateTime = new Date(currentDate);
    var formattedDateTime = formatDateTime(currentDateTime);
    document.getElementById('currentDate').textContent = "Today Date : " + formattedDateTime;
}

updateDateTime();
setInterval(updateDateTime, 1000);
showAllRoutines();