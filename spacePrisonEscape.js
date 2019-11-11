// alert("We are connected!")

var randomNumTreasure = Math.floor(Math.random()*25)
var randomNumBomb = Math.floor(Math.random()*25)
var clicksRemaining = 20

//console.log(randomNumTreasure)
//console.log(randomNumBomb)

randomThings()

function randomThings(){
    if (randomNumTreasure === randomNumBomb){
        randomNumBomb = Math.floor(Math.random()*25)
    }
    console.log(randomNumTreasure)
    console.log(randomNumBomb)
}

function treasure(location) {
    if(document.getElementById(location).innerHTML=="🚪"){
        if(location === randomNumTreasure) {
            document.getElementById(location).innerHTML="🚀"
            setTimeout(function(){alert("You won! 🚀"), 2500})
            window.location.reload()
        } else if(location === randomNumBomb) {
            document.getElementById(location).innerHTML="👾"
            setTimeout(function(){alert("You lost! 👾"), 2500})
            window.location.reload()
        } else {
            document.getElementById(location).innerHTML="🔒"
            clicksRemaining -= 1
            if (clicksRemaining > 0){
                document.getElementById("countDown").innerHTML=clicksRemaining
            } else if (clicksRemaining === 0) {
            document.getElementById("countDown").innerHTML="0"
            setTimeout(function(){alert("You failed, but may try again... indefinitely..."), 2500})
            window.location.reload()
            }
        }
    }
}


// function counter(clicks) {
//     document.getElementById(countDown).innerHTML=clicks
// }
// function clicks(clicks) {}
