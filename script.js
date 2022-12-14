var saveContent = document.querySelectorAll("#saveButton");
var textContent = document.querySelectorAll("#inputBox");
var showList = JSON.parse(localStorage.getItem('showList') || "[]");

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

function saveEvent (showList) {
   var valueToSave = showList.target.previousElementSibling.children[0].value;
   var keyToSave = showList.target.previousElementSibling.children[0].name;

    localStorage.setItem(keyToSave, valueToSave);

}




for (i = 0; i < saveContent.length; i++) {
    saveContent[i].addEventListener("click", saveEvent)
}

for (i = 0; i < textContent.length; i++) {
    var savedText = localStorage.getItem(i+9);
    console.log(savedText);
    textContent[i].value = savedText;
}