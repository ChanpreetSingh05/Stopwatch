var timeleft;
var counter=0;
var interval;
function AddZero(num) {
    return (num >= 0 && num < 10) ? "0" + num : num + "";
}

window.addEventListener('load', () => {
    fdate();
    createminutes();
    audio = document.getElementById("music");
    var alarmButton = document.getElementById("alarmbutton");
    alarmButton.addEventListener("click", alarm);
});

function alarm() {
    
    timeleft = $('#MinuteSelector').val() * 60;
    interval=setInterval(timer,1000);
};

function timer(){
    counter++; 
 document.getElementById("time").innerHTML=convertSeconds(timeleft - counter);
    if(counter==timeleft){
        
        audio.play();
         if (confirm("Time Out !!")) {
            audio.pause();
            audio.currentTime = 0;
            counter=0;
            clearInterval(interval);
             document.getElementById("time").innerHTML="00:00"
             
        } else { audio.pause();
            audio.currentTime = 0;
            counter=0;
            clearInterval(interval);
             document.getElementById("time").innerHTML="00:00"
             
        }
        
    }
}

function convertSeconds(s){
    var min = Math.floor(s/60);
    console.log(min);
    var sec = Math.floor(s%60);
    console.log(sec);
    return AddZero(min) + ":" + AddZero(sec);
}

function createminutes() {
    for (var i = 1; i < 90; i++) {
        var sel = document.getElementById("MinuteSelector");
        var opt = document.createElement('option');

        if (i.toString().length < 2) {
            // create text node to add to option element (opt)
            opt.appendChild(document.createTextNode("0" + i + " Minute"));
        } else {
            // create text node to add to option element (opt)
            opt.appendChild(document.createTextNode(i + " Minutes"));

        }
        // set value property of opt
        opt.value = i;

        // add opt to end of select box (sel)
        sel.appendChild(opt);
    }
}

function fdate() {
    var now = new Date();
    var week = ["MON", "TUES", "WED", "THURS", "FRI", "SAT", "SUN"];
    var strdate = AddZero(now.getFullYear()) + " - " + AddZero(now.getMonth()) + " - " + AddZero(now.getDate());
        change_img();
    document.getElementById("date").innerHTML = strdate + "  " + week[now.getDay()];
}

function change_img() {
      var now = new Date();
    if (now.getHours() >= 6 && now.getHours() <= 11) {
        $("body").css({
            "background-image": 'url(./Images/Morning.jpg)'
        });
    } else if (now.getHours() >= 12 && now.getHours() <= 15) {
        $("body").css({
            "background-image": 'url(./Images/afternoon.jpg)'
        });
    } else if (now.getHours() >= 16 && now.getHours() <= 18) {
        $("body").css({
            "background-image": 'url(./Images/evening.jpg)'
        });
    } else {
        $("body").css({
            "background-image": 'url(./Images/night.jpg)'
        });
    }
}
