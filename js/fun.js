// Main
function DigiClock() {
    // Get time
    var nowTime = new Date();
    var hours = nowTime.getHours();
    var min = nowTime.getMinutes();
    var sec = nowTime.getSeconds();

    // time convert to string
    hours = timeConv(hours);
    min = timeConv(min);
    sec = timeConv(sec);

    // Changes images according to time
    imgChange(hours, min, sec);

    // function timeout in 1s
    setTimeout(DigiClock, 1000);
}

// Time convert to string
function timeConv(num) {
    if (num < 10) {
        return ("0" + num);
    }
    else {
        return (num.toString());
    }
}

// Image changer
function imgChange(hours, min, sec) {
    var opn_hours_01 = document.getElementById("hours_01");
    var opn_hours_02 = document.getElementById("hours_02");
    var opn_min_01 = document.getElementById("min_01");
    var opn_min_02 = document.getElementById("min_02");
    var opn_sec_01 = document.getElementById("sec_01");
    var opn_sec_02 = document.getElementById("sec_02");

    opn_hours_01.src = `img/${hours[0]}.png`;
    opn_hours_02.src = `img/${hours[1]}.png`;

    opn_min_01.src = `img/${min[0]}.png`;
    opn_min_02.src = `img/${min[1]}.png`;

    opn_sec_01.src = `img/${sec[0]}.png`;
    opn_sec_02.src = `img/${sec[1]}.png`;
}

DigiClock();