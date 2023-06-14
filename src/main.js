import data from './data/animes/one_piece_quote.json' assert {
  type: "json"
}

const animes = document.getElementById("animes_one_piece")
const searchName = document.getElementById("search");

data.forEach(function (item) {
  animes.innerHTML +=
    `
  <div class="cards">
    <div class="cardFlip">
      <div class="front">
        <figure>
          <img src = "${item.img}" class = "poster">
        </figure>
      </div>
      <div class="back">
        <h1>${item.anime}</h1>
        <p>${item.character}</p>
        <addr>${item.quote}</addr>
      </div>
    </div>
  </div>`
})