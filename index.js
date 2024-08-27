function exportTableToCSV() {
    let table = document.getElementById("table1");
    let rows = table.querySelectorAll("tr");

    let csvContent = "";

    rows.forEach((row) => {
        let cols = row.querySelectorAll("th, td");
        let rowData = [];

        cols.forEach((col) => {
            rowData.push(col.innerText);
        });

        csvContent += rowData.join(",") + "\n";
    });

    // Store the CSV content in local storage
    localStorage.setItem("tableCSV", csvContent);

    alert("Table 1 data has been exported to CSV and stored in local storage!");
}

function fetchCSVFromStorage() {
    let csvContent = localStorage.getItem("tableCSV");

    if (!csvContent) {
        alert("No CSV data found in local storage!");
        return;
    }

    let rows = csvContent.trim().split("\n");
    let table2Body = document.getElementById("table2").querySelector("tbody");

    // Clear any existing rows in Table 2
    table2Body.innerHTML = "";

    rows.forEach((row) => {
        let cols = row.split(",");
        let tr = document.createElement("tr");

        cols.forEach((col) => {
            let td = document.createElement("td");
            td.innerText = col.trim();
            tr.appendChild(td);
        });

        table2Body.appendChild(tr);
    });

    
}