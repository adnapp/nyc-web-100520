console.log('%c HI!!!!!!!', 'color: blue')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

/*

Once we are able to load _all_ of the dog breeds onto the page, add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown.

For example, if the user selects 'a' in the dropdown, only show the breeds with names that start with the letter a. For simplicity, the dropdown only includes the letters a-d. However, we can imagine expanding this to include the entire alphabet.

- add an event listener for the change
- filter the list of dogs

add an event listener to the select#breed-dropdown
- listen for a CHANGE event
- filter the list of breeds being displayed based on the selected value (breed[0] === "b" || breed.startsWith("b"))

*/
// Application State
let breedsArray;

// DOM Elements
const container = document.querySelector("#dog-image-container")
const breedsContainer = document.querySelector("#dog-breeds")
const dropdown = document.querySelector("select#breed-dropdown")

// Event Listeners
dropdown.addEventListener("change", event => {
  console.log(breedsArray)
  
  const breedLetter = event.target.value // or dropdown.value

  const filteredBreeds = breedsArray.filter(breed => breed.startsWith(breedLetter))

  breedsContainer.innerHTML = ""
  
  filteredBreeds.forEach(renderOneBreed)

  // console.log(breedLetter)
  // const breedLisArray = Array.from(breedsContainer.querySelectorAll("li"))

  // const filteredLis = breedLisArray.filter(li => li.textContent.startsWith(breedLetter))


  // filteredLis.forEach(li => {
  //   breedsContainer.append(li)
  // })

  // debugger

  // breedLis.forEach(li => {
  //   if (breedLetter === "-1") {
  //     li.style.display = ""
  //   } else {
  //     if (li.textContent[0] === breedLetter) {
  //       // show it
  //       li.style.display = ""
  //     } else {
  //       // hide it
  //       li.style.display = "none"
  //     }
  //   }
  // })
})

// breedsContainer.addEventListener("click", event => {
//   // write some condition to check for the elements we care about!
//   console.log(event.target.tagName)
//   if (event.target.tagName === "LI") {
//     if (event.target.style.color === "red") {
//       event.target.style.color = "black"
//     } else {
//       event.target.style.color = "red"
//     }
//   }
// })

// Fetch Code
const getDogBreeds = () => {
  fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      breedsArray = Object.keys(data.message)
      
      breedsArray.forEach(renderOneBreed)
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
