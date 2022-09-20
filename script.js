var saveContent = document.querySelectorAll("#saveButton");
var textContent = document.querySelectorAll("#inputBox");


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
    // showList = [];
    // for (i = 0; i < textContent.length; i++) {
    //     console.log(textContent[i]);
    //     if (textContent[i].value != ""){
    //         console.log(show);
    //         show = {name: textContent[i].name, text: textContent[i].value};
    //         showList.push(show);
    //     }
    // }
   var valueToSave = showList.target.previousElementSibling.children[0].value;
   var keyToSave = showList.target.previousElementSibling.children[0].name;

    localStorage.setItem(keyToSave, valueToSave);

}

var showList = JSON.parse(localStorage.getItem('showList') || "[]");
console.log(showList);
for (i = 0; i < textContent.length; i++) {
    for(j = 0; j < showList.length; j++) {
        if (textContent[i].name === showList[j].name){
            textContent[i].value = showList[j].value;
        }
    }

}

for (i = 0; i < saveContent.length; i++) {
    saveContent[i].addEventListener("click", saveEvent)
}

for (i = 0; i < textContent.length; i++) {
    var savedText = localStorage.getItem(i+9);
    console.log(savedText);
    textContent[i].value = savedText;
}