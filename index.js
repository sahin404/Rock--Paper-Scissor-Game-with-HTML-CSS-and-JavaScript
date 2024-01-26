let myscore = 0;
let pcscore = 0;

let image = document.querySelectorAll(".image");
let msg = document.querySelector(".msg");
let score1 = document.querySelector(".my");
let score2 = document.querySelector(".pc");

const drawPrint = (computer_choice) =>{
    //console.log(`Draw! Computer choose also ${computer_choice}`);
    msg.innerHTML = "Draw"
    msg.style.backgroundColor = "Black";
}

const printWinorLoss = (user_result, computer_choice)=>{
    if(user_result){
        //console.log(`You Win! Computer Choose ${computer_choice}`);
        msg.innerHTML = `You Win! Computer Choose ${computer_choice}`;
        msg.style.backgroundColor = "Green";
        myscore++;
        score1.innerHTML = myscore;
    }
    else{
        pcscore++;
        score2.innerHTML = pcscore;
        msg.innerHTML = `You Loss! Computer Choose ${computer_choice}`;
        msg.style.backgroundColor = "Red";
    }
}
const checkingResult = (user_choice, computer_choice) =>{
    if(user_choice===computer_choice){
        drawPrint(computer_choice);
    }
    else{
        let user_result = false;
        if(user_choice==='rock'){
            if(computer_choice==="paper"){
                user_result = false;
            }
            else{
                user_result = true;
            }
        }
        if(user_choice==='paper'){
            if(computer_choice==="scissors"){
                user_result = false;
            }
            else{
                user_result = true;
            }
        }
        if(user_choice==='scissors'){
            if(computer_choice==="paper"){
                user_result = true;
            }
            else{
                user_result = false;
            }
        }
        printWinorLoss(user_result, computer_choice);
    }
}


const getComputerCoice = () =>{
    const arr = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random()*3);
    return arr[randomNumber];
}


image.forEach((img)=>{
    img.addEventListener("click", ()=>{
        let user_choice= img.getAttribute("id");
        let computer_choice = getComputerCoice();
        checkingResult(user_choice, computer_choice);
    })
})