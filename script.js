var today = moment (); 
$('#currentDay').text(today.format('LL'));
var tz = moment.tz.guess ();
console.log(tz);
$('#currentTime').moment.tz.guess();


const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment(stillUtc).local().format('HH:mm:ss'));

Array.from(rows).forEach(row => {
    let
        rowIdString = row.id,
        rowHour;
    if (rowIdString) {
        rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
        // Compares row id to current hour and sets color accordingly
        if (currentHour === rowHour) {
            setColor(row, "red");
        } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
            setColor(row, "green");
        } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
            setColor(row, "lightgrey");
        } else {
            setColor(row, "white");
        }
    }
});

function setColor(element, color) {
    element.style.backgroundColor = color;
}



var input = document.getElementById('inputBox').value;
localStorage.setItem('server', input);

document.getElementById('inputBox').value = localStorage.getItem('server');

/*event listener click button to save*/
document.getElementsByClassName("saveBtn").addEventListener("click", function()
if {
    
});