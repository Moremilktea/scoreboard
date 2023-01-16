let score1 = 0
let score2 = 0
score1El=document.getElementById("score1-el")
score2El=document.getElementById("score2-el")
reset1El=document.getElementById("reset-el")
reset2El=document.getElementById("reset-el")
let count = 0


function addone() {
  let newScore = score1 += 1
  score1El.textContent = newScore
  console.log(newScore)
}

function addtwo() {
  let newScore = score1 += 2
  score1El.textContent = newScore
  console.log(newScore)
}

function addthree() {
  let newScore = score1 += 3
  score1El.textContent = newScore
  console.log(newScore)
}

function reset() {
  let newScore = score1 - score1
  score1El.textContent = newScore
  score1 = 0
  console.log(newScore)
}
 
function addoneG() {
  let newScore = score2 += 1
  score2El.textContent = newScore
  console.log(newScore)
}

function addtwoG() {
  let newScore = score2 += 2
  score2El.textContent = newScore
  console.log(newScore)
}

function addthreeG() {
  let newScore = score2 += 3
  score2El.textContent = newScore
  console.log(newScore)
}

function resetG() {
  let newScore = score2 - score2
  score2El.textContent = newScore
  score2 = 0
  console.log(newScore)
}