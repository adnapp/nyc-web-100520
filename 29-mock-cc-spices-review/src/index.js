/*
  Click on an image from the #spice-images div and see all the info about that spice blend displayed inside the #spice-blend-detail div. You will need to make another GET request with the spice blend's ID to get the information about the spice blend that was clicked.

  When any image is clicked
  Make a GET /spiceblends/:id
  And display the spice blend details
*/ 

/**** STATE *****/ 
let currentSpiceId = 1



/**** DOM ELEMENTS *****/ 
const titleH2 = document.querySelector(".title")
const spiceImg = document.querySelector(".detail-image")
const ingredientsUl = document.querySelector(".ingredients-list")
const titleInput = document.querySelector("#spiceblend-title")
const updateForm = document.querySelector("#update-form")
const ingredientForm = document.querySelector("#ingredient-form")
const spiceImagesDiv = document.querySelector("#spice-images")


/**** RENDER FUNCTIONS *****/ 
const renderSpiceBlendImage = spiceblendObj => {
  // Slap the images in the #spice-images div
  // - create <img> element
  const img = document.createElement("img")
  // - set src/alt
  img.src = spiceblendObj.image
  img.alt = spiceblendObj.title
  img.dataset.id = spiceblendObj.id
  // - append to the #spice-images
  spiceImagesDiv.append(img)
}

// function renderSpiceBlend(spiceblendObj) {
// }

const renderIngredient = ingredientObj => {
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
  
  ingredientsUl.innerHTML = ""
  // while (ingredientsUl.firstChild) ingredientsUl.firstChild.remove()

  spiceblendObj.ingredients.forEach(renderIngredient)
}

/**** EVENT HANDLERS *****/ 
spiceImagesDiv.addEventListener("click", event => {
  if (event.target.matches("img")) {
    const spiceId = parseInt(event.target.dataset.id)
    currentSpiceId = spiceId
    
    console.log(currentSpiceId)

    // GET /spiceblends/:id
    getFirstSpice(spiceId)
  }
})


ingredientForm.addEventListener("submit", event => {
  event.preventDefault()

  const ingredientName = event.target.name.value

  const ingredientObj = {
    name: ingredientName,
    spiceblendId: currentSpiceId
  }
  addIngredient(ingredientObj)

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
const addIngredient = (data) => {
  fetch("http://localhost:3000/ingredients", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(r => r.json())
    .then(console.log)
}


const updateSpice = (data) => {
  fetch(`http://localhost:3000/spiceblends/${currentSpiceId}`, {
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

const getFirstSpice = (id) => {
  fetch(`http://localhost:3000/spiceblends/${id}`)
    .then(r => r.json())
    .then(spiceblendObj => renderSpiceBlend(spiceblendObj))
}

const getAllSpices = () => {
  fetch("http://localhost:3000/spiceblends")
    .then(r => r.json())
    .then(spiceblendArray => {
      spiceblendArray.forEach(spiceblendObj => {
        renderSpiceBlendImage(spiceblendObj)
      })
    })
}


/**** INITIALIZE *****/ 
getFirstSpice(1)
getAllSpices()
