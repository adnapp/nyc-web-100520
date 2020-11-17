/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)

/***** Deliverable 2 *****/
header.style.color = "red"

/***** Deliverable 3 *****/
console.log("the player object looks like this:", player)


const img = document.querySelectorAll(".player img")
const h2 = document.querySelector(".player h2")
const em = document.querySelector(".player em")

img.src = player.photo
img.alt = player.name
h2.textContent = player.name
em.textContent = player.nickname

/***** Deliverable 4 *****/


function addOneGoal(goal) {

    // ------- STATEGY 1: Hybrid --------------------------------
    // // 1. find and grab the element where we want 
    // to append these goals & TEST!
    //     const goalsUl = document.querySelector('#goals')

    //  // 2. Create all the elements for one goal, add attributes, & TEST!
    //     const li = document.createElement("li")
    //     li.dataset.id = goal.id
    //     li.innerHTML = `
    // <p>${goal.description}</p>
    //   <a href="${goal.link}" target="_blank">${goal.link}</a>`

    //  // 3. Slap it on the Dom & TEST!
    //     goalsUl.append(li)

    // ------- STRATEGY 2: Artisinal ~ --------------------------------
    const goalsUl = document.querySelector('#goals')

    const li = document.createElement("li")
    const p = document.createElement("p")
    const anchor = document.createElement("a")

    li.dataset.id = goal.id
    p.textContent = goal.description
    anchor.href = goal.link
    anchor.target = "_blank"
    anchor.textContent = goal.link

    li.append(p, anchor)
    goalsUl.append(li)
}

// 4. Do steps 2-3 for the rest of the goals
function addAllGoals() {
    player.goals.forEach(addOneGoal)
}

addAllGoals()


/***** Deliverable 5 *****/
// const ul = document.querySelector("ul")
// corruptItem = ul.querySelector(`[data-id='3']`).remove()

document.querySelector('[data-id="3"]').remove()