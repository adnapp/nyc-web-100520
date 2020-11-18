document.addEventListener("DOMContentLoaded", function () {
  // initializes the board
  init();
  let moveButton = document.querySelector("#move-button")
  let ul = document.querySelector("ul#moves-container")

  /* ------------------- STORE THE COMMANDS ------------------- */
  document.addEventListener("keydown", function (event) {
    let eventKey = event.key

    if (eventKey.startsWith("Arrow")) {
      let li = document.createElement("li")
      li.textContent = eventKey.slice(5).toLowerCase()
      ul.append(li)
    }
  })

  /* ------------------- MOVE THE ROBOT ------------------- */
  moveButton.addEventListener("click", function () {
    if (ul.children[0]) {
      let li = document.querySelector("#moves-container li")
      move(li.textContent)
      li.remove()
    }
  })

  /* ------------------- DELETE A MOVE ------------------- */
  ul.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      event.target.remove()
    }
  })

  /* ------------------- BONUS ------------------- */
  // STRATEGY 1 - using setTimeout
  // moveButton.addEventListener("click", function () {
  //   const liList = ul.querySelectorAll("li")
  //   liList.forEach(function (li, index) {
  //     // console.log(performance.now())
  //     const direction = li.textContent
  //     setTimeout(function () {
  //       // console.log(performance.now())
  //       move(direction)
  //       li.remove()
  //     }, 500 * (index + 1) )
  //   })
  // })

  // STRATEGY 2 - using setInterval
  // moveButton.addEventListener("click", function () {
  //   const moveInterval = setInterval(function () {
  //     let li = ul.querySelector("li")
  //     if (li) {
  //       let liText = li.textContent
  //       move(liText)
  //       li.remove()
  //     }
  //     else {
  //       clearInterval(moveInterval)
  //     }
  //   }, 500);
  // })

});