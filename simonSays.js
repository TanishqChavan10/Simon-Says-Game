let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let highestScore=[];
let h2=document.querySelector("h2")
let btn=["yellow","red","purple","green"];
document.addEventListener("keypress",function(){
    if(started==false)
        {
            console.log("game is started");
            started=true;
        }
        levelUp();
    });
    function gameFlash(btn)
    {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn)
{
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randomColor=btn[randIdx];
    let randbtn=document.querySelector(`.${randomColor}`);
    // console.log(randIdx);
    // console.log(randomColor);
    // console.log(randbtn);
    gameSeq.push(randomColor);
    // console.log(gameSeq);
    gameFlash(randbtn);
}

function chkAnswer(idx)
{
    // console.log(`current level ${level}`);
    if(userSeq[idx]==gameSeq[idx])
        {
            if(userSeq.length===gameSeq.length)
                {
                    setTimeout(levelUp,1000);
                }
            }
            else{
                highestScore.push(level*10);
                h2.innerHTML=`Game Over! Your score was <b>${level*10}</b> Press any key to start.  \n Highest score was ${gethighestScore()}`;
                document.querySelector("body").style.backgroundColor="red"; 
                setTimeout(function(){
                    document.querySelector("body").style.backgroundColor="white";
                },250)
                reset();
            }
            
        }
function btnPress(){
    // console.log(this);
    let btn=this;
    userFlash(btn);   
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    chkAnswer(userSeq.length-1);
}
let allBtn=document.querySelectorAll(".btn");
for(let btns of allBtn)
    {
        btns.addEventListener("click",btnPress);
    }
function reset(){
    started=false;
    userSeq=[];
    level=0;
    gameSeq=[];
}
function gethighestScore()
{
    
    let max=highestScore[0];
    for(let i=1;i<highestScore.length;i++)
    {
        if(highestScore[i]>max)
        {
            max=highestScore[i];
        }
    }
    return max; 
}
