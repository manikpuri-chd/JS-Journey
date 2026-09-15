let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGameBtn = document.querySelector("#new-game")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");
let msg2 = document.querySelector("#msg2")
let msgcontainer2 = document.querySelector(".msg-container2")
let turnO =  true;
let newGameBtn2= document.querySelector("#new-game2")
let count = 0;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,7,8],
];

const resetGame = ()=>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    msgcontainer2.classList.add("hide");
    count = 0;

}

boxes.forEach((evt) =>{
    evt.addEventListener("click",() =>{
        console.log("box was clicked");
       if(turnO) {
        evt.innerText = "O";
        turnO=false;
       } else {
        evt.innerText = "X";
        turnO=true;
       }
       evt.disabled=true;
       
       count ++

     let isWinner = checkWinner();

    if (count===9 && !isWinner) {
    showTie()
    }
    })
     })


const disabledBoxes = ()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

const enableBoxes = ()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner = (winner) => {
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide")
    disabledBoxes();
}

const checkWinner = () => {
   for(let pattern of winPatterns){
         let pos1Val = boxes[pattern[0]].innerText;
         let pos2Val = boxes[pattern[1]].innerText;
         let pos3Val = boxes[pattern[2]].innerText;
         
         if(pos1Val != "" && pos2Val != ""&& pos3Val != "") {
           if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
            return true;
           }
         }
        
   } 
    return false;
}


const showTie = (tie)=>{
    msg2.innerText=`Its a TIE`
    msgcontainer2.classList.remove("hide")
}




newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
newGameBtn2.addEventListener("click",resetGame);

