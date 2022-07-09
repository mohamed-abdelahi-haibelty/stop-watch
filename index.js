let previousTime,getCentiSecondInterval,stoped;
let is_stoped = false,counter = 0,centiSecond;
const text = document.getElementById("timer-text");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const startBtn = document.getElementById("start");

startBtn.addEventListener("click",function starter(){
    previousTime = new Date().getTime();
    getCentiSecondInterval = setInterval(getCentiSecond,10);
});
function getSecond(){
    is_stoped=false;
    previousTime = new Date().getTime();
    counter++;
}
function getCentiSecond(){
     let current = new Date().getTime();
     centiSecond = Math.round((current-previousTime)/10);
     if(is_stoped && centiSecond + stoped > 100 || is_stoped === false && centiSecond > 100){
        getSecond();
     }
    else{
            if(counter>=10){
                if(is_stoped){
                    text.innerHTML = `${counter} : ${centiSecond + stoped}`;
                }
                else
                 text.innerHTML = counter + ": " + centiSecond;
            }
            else{
                if(is_stoped){
                    text.innerHTML = `0${counter} : ${centiSecond + stoped}`;
                }
                else
                  text.innerHTML = "0"+ counter + ": " + centiSecond;
            }
        }
}
stopBtn.addEventListener("click",()=>{
    clearInterval(getCentiSecondInterval);
    is_stoped = true;
    stoped = centiSecond;
});
resetBtn.addEventListener("click",()=>{
    clearInterval(getCentiSecondInterval);
    text.innerHTML="00:00";
    counter = 0;
});

const audio = new Audio("Audio/sound.mp3")
const buttons = document.querySelectorAll("button");

buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        audio.play();
    });
})