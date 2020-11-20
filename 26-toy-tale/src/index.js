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


  const addToyForm = document.querySelector(".add-toy-form")
  const toyCollection = document.querySelector("#toy-collection")


  fetch('http://localhost:3000/toys')
    .then(response => {
      return response.json()
    }).then((toyArray) => {
      toyArray.forEach((toy) => {
        renderOneToy(toy)
      })
    })


  addToyForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const toyName = event.target.name.value
    // const toyName = addToyForm[0].value
    const imgUrl = event.target.image.value
    // const imgUrl = eaddToyForm[1].value
    const toy = {
      name: toyName,
      image: imgUrl,
      likes: 0
    }

    fetch('http://localhost:3000/toys', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(toy)
    })
      .then((response) => {
        return response.json()
      })
      .then((toy) => {
        renderOneToy(toy)
      })
  })

  toyCollection.addEventListener('click', (event) => {

    if (event.target.matches('button.like-btn')) {
      const div = event.target.closest('div')
      const id = div.dataset.id
      const likesDisplay = div.querySelector('p')
      const newLikes = parseInt(likesDisplay.textContent) + 1

      fetch(`http://localhost:3000/toys/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ likes: newLikes })
      })
        .then(response => {
          return response.json()
        })
        .then(toy => {
          likesDisplay.textContent = `${toy.likes} likes`
        })
    }
  })





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

});
