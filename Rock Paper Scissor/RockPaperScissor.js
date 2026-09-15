 let userScore = 0;
 let compScore = 0;

 const userS = document.querySelector("#user-score");
 const compS = document.querySelector("#computer-score");

 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");

 const genCompChoice = ()=>{
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3) 
    return options[randIdx];

 }

 const drawGame =()=>{
    console.log("Game was Draw");
    msg.innerText="TIE!!"
    msg.style.backgroundColor = "blue";
 }

 const showWinner =(userWin, userChoice, compChoice)=>{
    if(userWin === true){
    userScore++;
    userS.innerText=userScore;
    msg.innerText= `You Win! ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compS.innerText=compScore;
        msg.innerText= `You Loose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

 const playGame = (userChoice)=>{
   
    const compChoice = genCompChoice();
   
    if(userChoice===compChoice){
        drawGame();
    }
    
    else{
        let userWin = true;

        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
 

    

 choices.forEach((choice) =>{
     choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
     });
 });

