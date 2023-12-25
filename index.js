const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const Christmas = document.getElementById("christmas");
const countdownTime = document.getElementById("countdown-time");



var currentYear = new Date().getFullYear();

var ChristmasTime = new Date(`December 25 ${currentYear} 00:00:00`);

function updateCountdowntime(){
    const currentTime = new Date();
    const diff = ChristmasTime - currentTime;

    const d = Math.floor(diff/1000/60/60/24);
    const h = Math.floor(diff/1000/60/60)%24;
    const m = Math.floor(diff/1000/60)%60;
    const s = Math.floor(diff/1000)%60;

    if(d==0 || d==-1){
        countdownTime.innerText="It's Christmas!💚"
    }
    else if( d==-2 || d==-3 || d==-4 || d==-5 || d==-6){
        currentYear = new Date().getFullYear()+1;
        console.log(currentYear);
        ChristmasTime = new Date(`December 25 ${currentYear} 00:00:00`);
        const currentTime = new Date();
        const diff = ChristmasTime - currentTime;

        const d = Math.floor(diff/1000/60/60/24);
        const h = Math.floor(diff/1000/60/60)%24;
        const m = Math.floor(diff/1000/60)%60;
        const s = Math.floor(diff/1000)%60;
        days.innerHTML = d;
        hours.innerHTML = h<10 ? '0'+h:h;
        minutes.innerHTML = m<10 ? '0'+m:m;
        seconds.innerHTML = s<10 ? '0'+s:s;

    }
    else{
    days.innerHTML = d;
    hours.innerHTML = h<10 ? '0'+h:h;
    minutes.innerHTML = m<10 ? '0'+m:m;
    seconds.innerHTML = s<10 ? '0'+s:s;
    }

    

}

setInterval(updateCountdowntime,1000);