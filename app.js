let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","green","brown"];

let started= false;
let level=0;

let h3= document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is started");
        started= true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}


function levelUp(){
    console.log("level is up");
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor= btns[randIdx];
    let randBtn= document.querySelector(`#${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    console.log(userSeq[idx]);
    console.log(gameSeq[idx]);
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }  
    }
    else{
        h3.innerHTML=`Game Over! Your score was <b> ${level} </b> <br> Press any key to Start!`;
        document.querySelector("body").style.backgroundColor="red";


        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
    
        
        reset();}
    }
    
            

function btnPress(event){
    console.log(event);
    let btn = event.target;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log("btn is pressed");

    checkAns(userSeq.length-1);
}

let allBtns= document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
}