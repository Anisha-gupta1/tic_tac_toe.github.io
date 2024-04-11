let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let turnO = true;//Player1
let newGame = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
// let turnX = false;
const winningPatterns = [[0,1,2],[3,4,5],[6,7,8],
                        [0,3,6],[1,4,7],[2,5,8],
                        [0,4,8],[2,4,6]] ;
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        // console.log("box was clicked", box);
        if(turnO===true){
            box.innerText = "O";
            turnO=false;
        }
        else{
            box.innerText = "X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    }); 
});

const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enabledBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText= "";
    }
};

const showWinner= (winner)=>{
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const checkWinner=()=>{
    for(let pattern of winningPatterns){
                // console.log();
        let pos1= boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                // console.log("Winner",pos1);
                showWinner(pos1);
            }
        }
    }
};

const resetGame = () =>{
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
};
 
newGame.addEventListener ("click", resetGame);
reset.addEventListener ("click", resetGame);
