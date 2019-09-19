
var endGame = false
var boxes = document.querySelectorAll('.box')
var box1 = document.querySelector('.one')
var box2 = document.querySelector('.two')
var box3 = document.querySelector('.three')
var box4 = document.querySelector('.four')
var box5 = document.querySelector('.five')
var box6 = document.querySelector('.six')
var box7 = document.querySelector('.seven')
var box8 = document.querySelector('.eight')
var box9 = document.querySelector('.nine')
var allboxes = document.querySelector('.ticTacToe')
var counter1 = document.querySelector('.counter1')
var counter2 = document.querySelector('.counter2')
var playerXPoints = 0
var playerOPoints = 0
var countTurn = 0
var winner = document.querySelector('h1')
var player = "x"
var lightSaber = document.querySelector('#lightsaber');


var makeMove = function(event) {
    if (!endGame && event.target.textContent === "") { 
        countTurn++
        event.target.textContent = player
        lightSaber.play();
        checkIfWonAgain();
       if (!endGame && countTurn === 9) {
            winner.textContent = "It is a Jedi draw!"
        }
        if (player === 'x') {
            event.target.classList.add('x')
            event.target.classList.add('transition-glow-x')
            player = 'o'
        } else {
            event.target.classList.add('o')
            event.target.classList.add('transition-glow-o')
            player = 'x'
        }
    }
}

var winCombos = [
    [box1, box2, box3],
    [box4, box5, box6],
    [box7, box8, box9],
    [box1, box4, box7],
    [box2, box5, box8],
    [box3, box6, box9],
    [box1, box5, box9],
    [box3, box5, box7]
]

function checkIfWonAgain() {
    
    for (var i = 0; i < winCombos.length; i++){
        counter = 0 
        for (var j = 0; j < winCombos[i].length; j++){ 
            if (winCombos[i][j].textContent === player){
                counter = counter + 1
            } 
            if (counter === 3) {
                endGame = true;  
                winner.textContent = 'Winner is Young Jedi ' + player + ' !'
                if (player === 'x'){
                    playerXPoints++
                    counter1.textContent = " = "+ playerXPoints
                } else {
                    playerOPoints++
                    counter2.textContent = " = " + playerOPoints
                }
            }
            
        }
    }
}
boxes.forEach(function(box) {
    box.addEventListener('click',makeMove)
    
})
