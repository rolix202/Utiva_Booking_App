//document.getElementById("count-el").innerText = 5

//let myAge = 29
//console.log(myAge)

//let secondBatch = 5
//let firstBatch = 7
//let count = secondBatch;
//console.log(count)

//let myAge = 35
//let humanDogRatio = 7
//let myDogAge = myAge * humanDogRatio;
//console.log(myDogAge);

//let bonusPoint = 50
//bonusPoint = bonusPoint + 100
//bonusPoint = bonusPoint - 25
//bonusPoint = bonusPoint + 70
//console.log(bonusPoint)

let myPoints = 3
function add3Points() {
    myPoints += 3
}
function remove1points(){
    myPoints = myPoints - 1
}
add3Points()
add3Points()
add3Points()
remove1points()
remove1points()

console.log(myPoints)

//}

//let welcomEl = document.getElementById("welcome-el")
//let name = "Nma"
//let greeting = "welcomel back"
//welcomEl.innerText = greeting + name
let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0
function increment() {
   count = count + 1
   countEl.innerText = count
}
function save() {
    let countStr = count +  " - " 
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
} 
let saveEl = document.getElementById("save-El")
console.log(count)

let firstName = "Chidinma"
let lastName = "Eneh"
let fullName = firstName   + " " + lastName
console.log(fullName)  

let name = "linda"
let greeting = " Hi there"
function greetLinda(){
    console.log(greeting +"," + name + "!")
}
greetLinda()
let errorParagraph = document.getElementById("error")
console.log(errorParagraph)

function purchase(){
    console.log("button clicked")
    errorParagraph.textContent = "something went wrong, please try again"

}
let num1 = 8
let num2 = 2
document.getElementById("numl_El").textContent = num1 
document.getElementById("num2_El").textContent = num2

let sumEl = document.getElementById("sum_El")
function add() {
    sumEl.textContent = "Sum:" + num1 + num2
}

//let userName = "Nma"

//let messageToUser = "you have three new notification"
//console.log(messageToUser + "," + userName + "!")
//let name = "Nma"
//let greeting = "Hi, my name is" 
//let myGreeting = greeting + "," + name;
//console.log(myGreeting)


//function count( ) {
    //console.log(42)
    //count ()
//}
//let lapsCompleted = 0
//function incrementLap() {
//lapsCompleted = lapsCompleted + 1
//}
//incrementLap()
//incrementLap()
//incrementLap()

//console.log(lapsCompleted)


