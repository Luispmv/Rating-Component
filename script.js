const botonOne = document.getElementById("botonOne")
const botonTwo = document.getElementById("botonTwo")
const botonThree = document.getElementById("botonThree")
const botonFour = document.getElementById("botonFour")
const botonFive = document.getElementById("botonFive")
const submitButton = document.getElementById("sumbitButton")
const ratingCard = document.querySelector(".rating-Card")
const resultCard = document.querySelector(".results-card")
const spanResults = document.getElementById("spanResults")
const h1Results = document.getElementById("h1-results")
const pResults = document.getElementById("p-results")

botonOne.addEventListener("click", showResults)
botonTwo.addEventListener("click", showResults)
botonThree.addEventListener("click", showResults)
botonFour.addEventListener("click", showResults)
botonFive.addEventListener("click", showResults)

submitButton.addEventListener("click", showCard)

function showResults(event){
    const botonClicked = event.target
    const botonClickedValue = parseInt(botonClicked.innerText)
    if(botonClicked){
        botonClicked.style.backgroundColor = "hsl(217, 12%, 63%)"
        botonClicked.style.color = "white"
        if(botonClickedValue === 1){
            spanResults.innerText = "You selected 1 out of 5"
        }else if(botonClickedValue === 2){
            spanResults.innerText = "You selected 2 out of 5"
        }else if(botonClickedValue === 3){
            spanResults.innerText = "You selected 3 out of 5"
        }else if(botonClickedValue=== 4){
            spanResults.innerText = "You selected 4 out of 5"
        }else{
            spanResults.innerText = "You selected 5 out of 5"
        }
    }
}

function showCard(){
    ratingCard.style.display = "none"
    resultCard.style.display = "grid"
}