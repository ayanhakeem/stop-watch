let start=document.getElementById('stbtn');
let stop=document.getElementById('stopbtn');
let reset=document.getElementById('resetbtn');
let timerdisplay=document.querySelector(".timerdisplay")


let msec=0o0;
let sec=0o0;
let min=0o0;

let timerid=null;

start.addEventListener("click",function(){
    if(timerid!==null){
        clearInterval(timerid);//stop  repeating actiobn by setinterval
    }
    timerid=setInterval(starttimer,10);//repeating action

});
stop.addEventListener("click",function(){
    clearInterval(timerid);
});
reset.addEventListener("click",function(){
    clearInterval(timerid);
    timerdisplay.innerHTML=`00:00:00`;
    min=sec=msec=0o0;
});

function starttimer(){
    msec++;
    if(msec==100){
        msec=0;
        sec++;
        if(sec==60){
            sec=0;
            min++;
        }
    }
    let msecString=msec<10?`0${msec}`:msec;
    let secString=sec<10?`0${sec}`:sec;
    let minString=min<10?`0${min}`:min;
    timerdisplay.innerHTML=`${minString}:${secString}:${msecString}`;

}
        
  



