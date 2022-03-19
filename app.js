//Import the data then declare the variable tableData using const
const tableData = data;

//Since the data will be in a table, we need to tell our HTML page by using D3
//Reference the HTML table using d3
var tbody = d3.select("tbody");

//Building  a table
function buildTable(data) {
    //Clear existing data to create a fresh table to insert data and prevent duplicates.
    tbody.html("");    //this creates a blank canvas

    //Chain a for loop to our data and add an argument (dataRow) that will represent each row of the data as we iterate through the array
    data.forEach((dataRow) => {
        //Create a variable that will append a row to the table body. using let instead of var to declare the row variable.
        //because this variable is limited to just this block of code, This code tells JavaScript to find the <tbody> tag within the HTML and add a table row ("tr")
        let row = tbody.append("tr");
        
        //we're telling our code put each sighting onto its own row of data
        Object.values(dataRow).forEach((val) => {
            //append each value of the object to a cell in the table
            let cell = row.append("td");
            //appending .text to the variable allows us to extract only the text of the value
            cell.text(val);
        }
        );
    });
}

//This time, we'll use a forEach function, which loops through the array in the same way as a for loop. 
//The difference is that forEach works only with arrays. Another benefit is that forEach can be combined with an 
//arrow function, once again making the code more concise and easy to read.