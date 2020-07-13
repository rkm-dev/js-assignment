
var date = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("day").innerHTML = days[date.getDay()];

function hour(h) {
    if(h<12){
        return h+" AM";
    }else{
        return (h-12)+" PM"   
    }
}

document.getElementById('time').innerHTML = hour(date.getHours()) + " : " + date.getMinutes() + " : " + date.getSeconds();

var printButton=document.getElementById("print")
printButton.onclick = function () {
    window.print();
}

var dateNum, month, year;
dateNum = date.getDate();
month   = date.getMonth();
year    = date.getFullYear();

for(i=0;i<4;i++)
{
    document.getElementsByClassName("dd")[i].innerHTML=dateNum;
    document.getElementsByClassName("mm")[i].innerHTML=month;
    document.getElementsByClassName("yy")[i].innerHTML=year;
}