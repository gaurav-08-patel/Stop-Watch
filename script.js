let stopBtn = document.querySelector(".stopBtn");
let startBtn = document.querySelector(".startBtn");
let resetBtn = document.querySelector(".resetBtn");
let timerDisplay = document.querySelector(".timer-display");

let msec= 0;
let mins= 0;
let secs= 0;
let timerId = null;


startBtn.addEventListener("click",()=>{
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId=setInterval(startTimer,10);

})
stopBtn.addEventListener("click",()=>{
        clearInterval(timerId);
})
resetBtn.addEventListener("click",()=>{
        clearInterval(timerId);
        timerDisplay.innerHTML="00:00:00";
        msec = secs = mins =0;
})

function startTimer(){
    msec++;
    if(msec == 100){
        msec =0;
        secs++;
        if(secs == 60){
            secs=0;
            mins++;
        }
    }

    let mSecString = msec<10 ? `0${msec}`: msec;
    let secString = secs<10 ? `0${secs}`: secs;
    let minString = mins<10 ? `0${mins}`: mins;

    timerDisplay.innerHTML = `${minString}:${secString}:${mSecString}`;
}