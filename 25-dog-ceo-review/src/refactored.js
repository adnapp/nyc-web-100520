const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// Application State
let breedsArray;

// DOM Elements
const container = document.querySelector("#dog-image-container")
const breedsContainer = document.querySelector("#dog-breeds")
const dropdown = document.querySelector("select#breed-dropdown")

// Event Listeners
dropdown.addEventListener("change", event => {
  const breedLetter = event.target.value
  let breedsToRender = breedsArray
  if (breedLetter !== "-1") {
    breedsToRender = breedsArray.filter(breed => breed.startsWith(breedLetter))
  }
  renderAllBreeds(breedsToRender)
})

// Fetch Code
const getDogBreeds = () => {
  fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      breedsArray = Object.keys(data.message)
      renderAllBreeds(breedsArray)
    })
}

const getDogImages = () => {
  fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
      data.message.forEach(renderOneImg)
    })
}

// Rendering Logic
const renderAllBreeds = breedArray => {
  breedsContainer.innerHTML = ""
  breedArray.forEach(renderOneBreed)
}

const renderOneBreed = breed => {
  const li = document.createElement("li")
  li.textContent = breed
  li.addEventListener("click", () => {
    li.style.color = "red"
  })
  breedsContainer.append(li)
}

const renderOneImg = urlString => {
  const img = document.createElement("img")
  img.src = urlString
  container.append(img)
}

// Initialize!
getDogImages()
getDogBreeds()
