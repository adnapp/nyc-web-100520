/*
  Add a new ingredient to the spice blend when the #ingredient-form is submitted. The new ingredient should be displayed on the page (no persistence needed for now).

  when the ingredient form is submitted
  (don't worry bout fetch for now)
  slap the new ingredient on the DOM
    - get the ingredient name from the form 
    - create a new LI
    - add it to the ingredient list
*/ 

/**** DOM ELEMENTS *****/ 
const titleH2 = document.querySelector(".title")
const spiceImg = document.querySelector(".detail-image")
const ingredientsUl = document.querySelector(".ingredients-list")
const titleInput = document.querySelector("#spiceblend-title")
const updateForm = document.querySelector("#update-form")
const ingredientForm = document.querySelector("#ingredient-form")


/**** RENDER FUNCTIONS *****/ 
// function renderSpiceBlend(spiceblendObj) {
// }

const renderIngredient = ingredientObj => {
  console.log({ ingredientObj })
  // create an element
  const li = document.createElement("li")
  // add some text content
  li.textContent = ingredientObj.name
  // append to the ul
  ingredientsUl.append(li)
}

const renderSpiceBlend = spiceblendObj => {
  titleH2.textContent = spiceblendObj.title
  spiceImg.src = spiceblendObj.image
  spiceImg.alt = spiceblendObj.title

  titleInput.value = spiceblendObj.title
  
  spiceblendObj.ingredients.forEach(renderIngredient)
}

/**** EVENT HANDLERS *****/ 
ingredientForm.addEventListener("submit", event => {
  event.preventDefault()

  const ingredientName = event.target.name.value

  const ingredientObj = {
    name: ingredientName
  }

  // renderIngredient(ingredientObj)
  const li = document.createElement("li")
  li.textContent = ingredientName
  ingredientsUl.append(li)
})



updateForm.addEventListener("submit", event => {
  event.preventDefault()
  
  const updateObj = { 
    title: titleInput.value
  }

  updateSpice(updateObj)
})


/**** FETCH FUNCTIONS *****/ 
const updateSpice = (data) => {
  fetch("http://localhost:3000/spiceblends/1", {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(r => r.json())
    .then(updatedSpiceblendObj => {
      // pessimistic - waiting for the response to update the DOM
      titleH2.textContent = updatedSpiceblendObj.title
      spiceImg.alt = updatedSpiceblendObj.title
    })
}

const getFirstSpice = () => {
  fetch("http://localhost:3000/spiceblends/1")
    .then(r => r.json())
    .then(spiceblendObj => renderSpiceBlend(spiceblendObj))
}


/**** INITIALIZE *****/ 
getFirstSpice()
