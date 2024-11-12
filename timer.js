let showTime = document.getElementById("timer");

let [seconds,minutes,hours] = [0,0,0];

let timer = null;

function startProcess(){
    seconds++;
    if(seconds === 60){
        seconds = 0;
        minutes++;
        if(minutes === 60){
            minutes = 0;
            hours++;
        }
    }
    displayTime();
} 

function displayTime(){
    showTime.innerHTML = `${hours < 10? "0":""}${hours} : ${minutes < 10? "0":""}${minutes} : ${seconds < 10? "0":""}${seconds}`;
}

function startTimer(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(startProcess,1000);
}

function stopTimer(){
    clearInterval(timer);
}

function resetTimer(){
    clearInterval(timer);
    [seconds,minutes,hours] = [0,0,0];
    showTime.innerHTML = `00 : 00 : 00`
}

let pause = document.getElementById("pause")
let start = document.getElementById("play")
let reset = document.getElementById("reset")

function pauseHover() {
    pause.style.display= "block";

    setTimeout(() => {
        pause.style.display= "none";
    }, 1000);
}

function playHover() {
    start.style.display= "block";

    setTimeout(() => {
        start.style.display= "none";
    }, 1000);
}

function resetHover() {
    reset.style.display= "block";

    setTimeout(() => {
        reset.style.display= "none";
    }, 1000);
}