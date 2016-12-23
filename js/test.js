
var flag = 0; //0 - timer if off; 1 - timer is running
var hh = 0, mm = 0, ss = 0, msec = 0;
var hhLeadingZero = "", mmLeadingZero = "", ssLeadingZero = "", msecLeadingZero = "";
var timerZeroText = "00:00:00<span>000</span>";
var TimerText;
var myInterval;

document.getElementById("latin2").style.display = "none";
document.getElementById("latin3").style.display = "none";

document.getElementById("idStart").addEventListener("click", function() {
    timerStartPauseContinue();
});

document.getElementById("idClear").addEventListener("click", function() {
    timerClear();
});


function timerStartPauseContinue() {
    if (flag === 0) { // start or continue
        myInterval = setInterval(timerGo, 5);
        timerGo();
        flag = 1;

        document.getElementById("idStart").innerHTML = "Pause";
        document.getElementById("idStart").className = "btn btn-info btn-block";

        document.getElementById("latin1").style.display = "none";
        document.getElementById("latin2").style.display = "block";
        document.getElementById("latin3").style.display = "none";
    } else { // pause

        flag = 0;
        clearTimeout(myInterval);

        document.getElementById("idStart").innerHTML = "Continue";
        document.getElementById("idStart").className = "btn btn-success btn-block";

        document.getElementById("latin1").style.display = "none";
        document.getElementById("latin2").style.display = "none";
        document.getElementById("latin3").style.display = "block";
    }
}

function timerGo() {
    if (msec === 995) {
        msec = 0;
        if (ss === 59) {
            ss = 0;
            if (mm === 59) {
                mm = 0;
                if (hh === 59) { hh = 0; } else { hh++; }
            } else { mm++; }
        } else { ss++; }
    } else { msec += 5; }

    // Тут просто форматируем для вывода на экран - где нужно, добавляем ведущие нули
    msecLeadingZero = (msec < 10) ? "00" : msecLeadingZero = (msec < 100) ? "0" : "";
    ssLeadingZero = (ss < 10) ? "0" : "";
    mmLeadingZero = (mm < 10) ? "0" : "";
    hhLeadingZero = (hh < 10) ? "0" : "";

    timerText = hhLeadingZero + hh + ":" + mmLeadingZero + mm + ":" + ssLeadingZero + ss + "<span>" + msecLeadingZero + msec + "</span>";
    document.getElementById("idTimer").innerHTML = timerText;
}

function timerClear() {
    flag = 0;
    hh = 0;
    mm = 0;
    ss = 0;
    document.getElementById("idTimer").innerHTML = timerZeroText;

    document.getElementById("idStart").innerHTML = "Start";
    document.getElementById("idStart").className = "btn btn-success btn-block";

    clearTimeout(myInterval);

    document.getElementById("latin1").style.display = "block";
    document.getElementById("latin2").style.display = "none";
    document.getElementById("latin3").style.display = "none";
}
