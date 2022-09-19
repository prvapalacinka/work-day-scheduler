var textContent = document.querySelectorAll("#saveButton");

var today = moment (); 
$('#currentDay').text(today.format('LL'));

var currentDate = new Date();

var currentHour = currentDate.getHours();



const rows = document.getElementsByClassName("row");


Array.from(rows).forEach(row => {
    
    let
        rowIdString = row.id,
        rowHour;
    if (rowIdString) {
        rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
     
        if (currentHour === rowHour) {
            setColor(row, "red");
        } else if ((currentHour < rowHour)){
            setColor(row, "green");
        } else if ((currentHour > rowHour)){
            setColor(row, "lightgrey");
        } else {
            setColor(row, "white");
        }
    }
});

function setColor(element, color) {
    element.style.backgroundColor = color;
}

function saveEvent () {
    var input = document.getElementById("inputBox");

    localStorage.setItem("server", input.value());
    
    var storedValue = localStorage.getItem("server"); 
}

console.log(textContent);
for (i = 0; i < textContent.length; i++) {

    textContent[i].addEventListener("click", saveEvent)
}