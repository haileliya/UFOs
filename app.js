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

//Adding filters (adding a date function). This function will run each time the filter button is clicked on
function handleClick() {
    //we're telling D3 to look for the #datetime id in the HTML tags, which will have an ID of "datetime"
    //By chaining .property("value"); to the d3.select function, we're telling D3 not only to look for where our date values are stored 
    //on the webpage, but to actually grab that information and hold it in the "date" variable
    let date = d3.select("#datetime").property("value");

    //set a default filter and save it to a new variable, which will be the original table data
    let filteredData = tableData;

    //Check for a date filter using an if statement: our if statement should read as follows; 
    //"If there is a date already set, then use that date as a filter. If not, then return the default data."
    if (date) {
        //Apply `filter` to the table data to only keep the
        //rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);

}

//Another aspect of D3.js is that it can listen for events that occur on a webpage, such as a button click. 
//The next code we add will be tied to the filter button we'll build on our webpage. Selector string = #filter-btn which will be used in HTML
d3.selectAll("#filter-btn").on("click", handleClick);

//Once this function is called, it will create a basic table filled with rows of unflitered data from our array
buildTable(tableData);


    