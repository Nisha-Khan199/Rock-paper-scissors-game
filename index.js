let userScore=0;
let compScore=0;
const msg=document.querySelector("#mesg")
const choices= document.querySelectorAll(".choice");
 let userScorepara=document.querySelector("#userscore")
 let compScorepara=document.querySelector("#compscore")
const  gencompChoice=()=>{
    const options=["rock","paper","scissors"]
  const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
};
//showwinner;
const showwinner=(userWin)=>{
    if(userWin){
       userScore++;
       userScorepara.innerText=userScore;
        console.log("you Win")
        msg.innerHTML="You Win";
        msg.style.backgroundColor="Green";
    }else{
        compScore++;
        compScorepara.innerText=compScore
        console.log("you lose");
        msg.innerHTML="You Loose";
        msg.style.backgroundColor="Red";
    }
}
const drawGame= ()=>{
    console.log("Game Was Draw")
    msg.innerHTML="Game Was Draw"
    msg.style.backgroundColor="yellow";
}
let playgame=(userChoice)=>{
    console.log("user choice =", userChoice)
    // computer choice generate
    const compChoice=gencompChoice();
    console.log("comp choice=", compChoice)
    if(userChoice===compChoice){
        drawGame();
    }
else{
    let userWin=true;
    if(userChoice==="rock"){
        compChoice==='paper'? false : true
    }else if (userChoice==="paper"){
        compChoice==="scissors" ? false : true
    } else{
        userWin= compChoice==="rock" ? false:true;
    }

    showwinner(userWin);
    
}
}




choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
   playgame(userChoice);
});

});
















