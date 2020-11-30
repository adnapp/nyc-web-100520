// - [x] Keep track of the data associated with a player
// - [x] Render the player to the DOM
// - [ ] Handle any events associated with the player

class PlayerComponent {

  static all = []

  constructor(playerObj) {
    this.player = playerObj
    PlayerComponent.all.push(this)
  }

  // any callback functions should use arrow fn syntax!
  like = () => {
    console.log("like method running!")
    console.log(this)

    this.player.likes++
    const likesPTag = this.playerDiv.querySelector(".likes")
    likesPTag.textContent = `${this.player.likes} likes`

    // fetch
    const url = `${BASE_URL}/players/${this.player.id}`
    const config = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ likes: this.player.likes })
    }

    fetch(url, config)
  }

  render(parentElement) {
    // parentElement

    // save to the instance vs save to the proto
    this.playerDiv = document.createElement("div")

    this.playerDiv.className = "player"
    this.playerDiv.dataset.number = this.player.number
  
    this.playerDiv.innerHTML = `
      <h3>${this.player.name} (<em>${this.player.nickname}</em>)</h3>
      <img src="${this.player.photo}" alt="${this.player.name}">
      <p class="likes">${this.player.likes} likes</p>
      <button class="like-button">❤️</button>
    `
  
    const likeButton = this.playerDiv.querySelector(".like-button")

    likeButton.addEventListener("click", this.like)
    
    // likeButton.addEventListener("click", () => {
    //   this.like()
    // })
  
    parentElement.append(this.playerDiv)
  }

}

// playerComponent1.render(playerContainer)

/*
class Dog
  attr_accessor :name

  def initialize(name)
    @name = name
  end

  def speak
    puts "Woof my name is #{self.name}"
  end

end

fezzik = Dog.new("Fezzik")
fezzik.name
*/