let user = 0;
let comp = 0;

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const userScore=document.querySelector("#user-score");
const compScore=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const option=["stone","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
}

const drawGame=()=>{
    msg.innerText = "Oops game draw.Play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        user++;
        userScore.innerText=user;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        comp++;
        compScore.innerText=comp;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{

    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice === "stone"){
            //scissor,paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){
            //stone,scissor
            userWin = compChoice === "scissor" ? false : true;

        }
        else{
            //stone,paper
            userWin = compChoice==="stone" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});