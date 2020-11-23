document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')

  let joke;

  function fetchJoke(user) {
    return fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
      .then(res => res.json())
      .then(jokeData => {
        const newJokeLi = document.createElement('li')
        joke = jokeData.joke
        newJokeLi.innerHTML = `
    <span class="username">${user} says:</span> ${joke}
    `
        jokeList.appendChild(newJokeLi)
      })
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const username = document.getElementById('name-input').value
    if (username === "") return;

    fetchJoke(username)
    event.target.reset()
  })
})
