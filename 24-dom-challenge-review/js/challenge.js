/*
  3. As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.

  // when the like button is clicked
  // if the number hasn't been liked
    // add a new LI to the ul.likes
    // that shows "The number X has been liked 1 time"
  // if the number HAS been liked
    // find the LI for that number
    // update the text to say "The number X has been liked X times"
*/

// DOM Elements
const timerH1 = document.querySelector("h1#counter")
const buttonContainer = document.querySelector("#button-container")
const likesUl = document.querySelector("ul.likes")

// Application State (single source of truth)
let currentNumber = 0
let counterRunning = true
let likedNumbers = {}
// { 1: 3, 20: 2 }

// Events
buttonContainer.addEventListener("click", event => {
  if (event.target.id === "plus") {
    changeCounter(1)
  } else if (event.target.id === "minus") {
    changeCounter(-1)
  } else if (event.target.id === "pause") {
    togglePaused()
  } else if (event.target.id === "heart") {
    updateLikes()
  }
})

function updateLikes() {
  if (likedNumbers[currentNumber]) {
    const li = document.querySelector(`[data-number="${currentNumber}"]`)
    likedNumbers[currentNumber] += 1
    li.textContent = `The number ${currentNumber} has been liked ${likedNumbers[currentNumber]} times`
  } else {
    likedNumbers[currentNumber] = 1
    const li = document.createElement("li")
    li.dataset.number = currentNumber
    li.textContent = `The number ${currentNumber} has been liked 1 time`
    likesUl.append(li)
  }
}

function togglePaused() {
  counterRunning = !counterRunning
  document.querySelectorAll("button").forEach(button => {
    if (button.id !== "pause") {
      button.disabled = !counterRunning
    } else {
      if (counterRunning) {
        button.textContent = "pause"
      } else {
        button.textContent = "resume"
      }
    }
  })
}

function changeCounter(amount) {
  currentNumber = currentNumber + amount
  timerH1.textContent = currentNumber
}

// setInterval run code every second
setInterval(() => {
  if (counterRunning) {
    changeCounter(1)
  }
}, 1000)

// change the number in the timer