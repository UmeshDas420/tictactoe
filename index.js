/* TODO
 
 2.Draw a cut line.
 
 
*/
// Intialised variable
var boxes = document.getElementsByClassName("box")
var turn = "X" ;
var intext = document.getElementsByClassName("info")[0];
var isgameover = false;
var gameover = new Audio("gameover.mp3");
i = 0
// Function to change the value of turn
function changeTurn(){
    return turn ==="X"?"0":"X";
}

intext.textContent  = "Turn for " + turn;
function checkWin(){
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [2,5,8],
        [1,4,7]
    ];
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            gameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vh, ${e[4]}vh) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
            if(boxtext[e[0]]===0){
                if(boxtext[e[1]]===1){
                    document.querySelector(".line").classList.add(".firstline");
                }
            }
        }
    })
}
//Intial info Text
// Detecting clicks on box 
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            var audio = new Audio("ting.mp3")
            //adding text to box
            boxtext.innerText = turn;
            turn = changeTurn();
            audio.play();
            checkWin();
            if(!isgameover){

                intext.textContent  = "Turn for " + turn;
            }
        }
         
        
    })
})
// Reset button click
var resetbtn = document.getElementById("reset");
resetbtn.addEventListener("click", function(){
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false;
    intext.textContent  = "Turn for X";
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0";
    document.querySelector(".line").style.width = "0vw";
})