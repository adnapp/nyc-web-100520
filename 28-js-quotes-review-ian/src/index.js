/*
Clicking the delete button should delete the respective quote from the API and remove it from the page without having to refresh.
*/

const ul = document.querySelector("#quote-list")
const newQuoteForm = document.querySelector('#new-quote-form')

ul.addEventListener("click", handleButtons)

function handleButtons(event) {
  if (event.target.matches(".btn-danger")) {
    const button = event.target
    const li = button.closest("li")
    const quoteId = li.dataset.id
    deleteQuoteFetch(quoteId)
      .then(() => {
        li.remove()
      })
  }
  else if (event.target.matches(`.btn-success`)) {
    const likeButton = event.target
    const li = likeButton.closest('li')
    const quoteId = parseInt(li.dataset.id)

    const likeObj = {
      quoteId: quoteId
    }

    fetch(`http://localhost:3000/likes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(likeObj)
    })

    const likes = li.querySelector("span")
    likes.textContent = parseInt(likes.textContent) + 1
  }
}

const deleteQuoteFetch = id => {
  return fetch(`http://localhost:3000/quotes/${id}`, {
    method: "DELETE"
  })
    .then(r => r.json())
}

fetch("http://localhost:3000/quotes?_embed=likes")
  .then(response => response.json())
  .then(quotesObjs => quotesObjs.forEach(quote => renderQuote(quote)))

function renderQuote(quote) {
  const li = document.createElement("li")
  li.className = "quote-card"
  li.dataset.id = quote.id
  li.innerHTML = `<blockquote class="blockquote">
  <p class="mb-0">${quote.quote}</p>
  <footer class="blockquote-footer">${quote.author}</footer>
  <br>
  <button class='btn-success'>Likes: <span>${quote.likes.length}</span></button>
  <button class='btn-danger'>Delete</button>
</blockquote>`
  ul.append(li)
}

newQuoteForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const newQuoteObj = {
    quote: newQuoteForm.quote.value,
    author: newQuoteForm.author.value,
  }

  const quoteConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(newQuoteObj)
  }

  fetch("http://localhost:3000/quotes", quoteConfig)
    .then(resp => resp.json())
    .then(quote => {
      quote.likes = []
      renderQuote(quote)
      console.log(quote)
    })
  console.log(newQuoteObj)
})