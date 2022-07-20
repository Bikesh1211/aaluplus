console.log('aalu plus is running');

// let music = new Audio('')
let music = new Audio('');
let winaudio = new Audio('winaudio.wav');
let gameOverAudio = new Audio('gameover.wav');
let audioTurn = new Audio('turnaudio.mp3');

    gameOverAudio.play()


let turn = "X"
                document.querySelector('.info').innerText = "Turn For " + turn


let winner = "X"
// turn = winner
let gameOver = false

// let xWin = 0
// let oWin = 0

const changeTurn = () =>{
    return turn === "X"? "O": "X"
}

const checkWin = () =>{
    let boxtext = document.getElementsByClassName('boxtext')
    const wins = [
        [0,1,2,0,5,0,10],
        [3,4,5,0,15,0,30],
        [6,7,8,0,25,0,50],
        [0,3,6,-10,15,90,30],
        [1,4,7,0,15,90,30],
        [2,5,8,10,15,90,30],
        [0,4,8,0,15,45,30],
        [2,4,6,0,15,-45,30]
    ]

    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText)&&
        (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=="")
        ){
                document.querySelector('.info').innerText = "Player " + boxtext[e[0]].innerText + " Won"
               winner =  boxtext[e[0]].innerText
               console.log(winner);
                gameOver= true
                document.querySelector('.line').style.display = "block" 
                document.querySelector('.line').style.width = '20vw'
                document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`

                var x = window.matchMedia("(max-width: 768px)")
                if (x.matches) { // If media query matches
                    document.querySelector('.line').style.width = '40vw'
                    document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[6]}vw) rotate(${e[5]}deg)`


                }

              
                // document.querySelector('.info').style.color = "red"
 
                    //reset jgame after win

                    setTimeout(() => {
                        
                        let boxtexts = document.querySelectorAll('.boxtext');
                        Array.from(boxtexts).forEach(element=>{
                            element.innerText = ""
                            document.querySelector('.line').style.width = '0'
                        })


                        
                    }, 3000);

                    winaudio.play()


        }
        
    })

}

//Game Logic

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener("click",(e)=>{
        if(boxtext.innerText ==='' ){
            boxtext.innerText = turn;
          turn =  changeTurn()
            audioTurn.play()

            
            checkWin();
                if(!gameOver){
                    document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;

                }
        }
    })
})


//reset button
// let reset = dodument.getElementById('reset')

reset.addEventListener("click",(e)=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText = ""
        document.querySelector('.line').style.width = '0'
        document.getElementsByClassName("info")[0].innerText = "Turn For"+ " " + winner;
    })
    gameOverAudio.play();
    gameOver =false

    
})