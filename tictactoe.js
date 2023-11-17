console.log("Welcome to Tic tac Toe")
let music = new Audio("music.mp3")
const audioturn = new Audio("ting.mp3")
const gameover = new Audio("gameover.mp3")
const turn = "X"


//function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//function to check win
const checkWin = () => {
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        i0 = e[0]
    })


}
let boxes = document.getElementsByClassName("box"); //ye saare 9 blox
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext'); //jo bhi boxselect ho raha h uske andar ke boxtext ka 
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;

        }
    })
})