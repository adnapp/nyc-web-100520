let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });


  // const data = new FormData(form)
  // const obj = {}
  // data.forEach((value, key) => obj[key] = value)
  // console.log(obj)

  /*** Variables ***/
  const addToyForm = document.querySelector(".add-toy-form")
  const toyCollection = document.querySelector("#toy-collection")
  const url = 'http://localhost:3000/toys'




  /*** Event Listeners ****/

  addToyForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const data = new FormData(addToyForm)
    const obj = {}
    data.forEach((value, key) => obj[key] = value)
    obj.likes = 0

    makeFetchHappen('POST', url, obj)
      .then((response) => response.json())
      .then((toy) => {
        renderOneToy(obj)
        addToyForm.reset()
      })
  })

  toyCollection.addEventListener('click', (event) => {

    if (event.target.matches('button.like-btn')) {
      const div = event.target.closest('div')
      const id = div.dataset.id
      const likesDisplay = div.querySelector('p')
      const newLikes = { likes: parseInt(likesDisplay.textContent) + 1 }

      makeFetchHappen('PATCH', `${url}/${id}`, newLikes)
        .then(response => response.json())
        .then(toy => {
          likesDisplay.textContent = `${toy.likes} likes`
        })
    }
  })

  /***** Helper Functions *****/
  function makeFetchHappen(method, url, jsObj) {
    return fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(jsObj)
    })
  }

  function initializer() {
    fetch('http://localhost:3000/toys')
      .then(response => {
        return response.json()
      }).then((toyArray) => {
        toyArray.forEach((toy) => {
          renderOneToy(toy)
        })
      })
  }

  function renderOneToy(toyObject) {
    const div = document.createElement("div")
    div.classList.add("card")
    div.dataset.id = toyObject.id
    div.innerHTML = `
          <h2>${toyObject.name}</h2>
          <img src=${toyObject.image} class="toy-avatar" />
          <p>${toyObject.likes} Likes </p>
          <button class="like-btn">Like <3</button>`
    toyCollection.append(div)
  }


  initializer()

});
