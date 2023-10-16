var mins = 0;
var secs = 0;
var milisecs = 0;

var timer = false;

function Start()
{
    timer = true;
    stopWatch()
}
function Stop()
{
    timer = false;
}
function Reset()
{
    timer = false;
    mins = 0;
    secs = 0;
    milisecs = 0;
    document.getElementById("min").innerHTML = "00";
    document.getElementById("secs").innerHTML = "00";
    document.getElementById("milisec").innerHTML = "00";
}
function stopWatch()
{
    if(timer === true){
        milisecs++;
        if(milisecs === 100){
            secs++;
            milisecs = 0;
        }
        if(secs === 60){
            mins++;
            secs = 0;
        }
        document.getElementById("min").innerHTML = mins;
        document.getElementById("secs").innerHTML = secs;
        document.getElementById("milisec").innerHTML = milisecs;

        setTimeout("stopWatch()", 10)
    }
}
