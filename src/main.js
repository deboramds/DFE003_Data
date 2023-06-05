import data from './data/animes/one_piece_quote.json' assert {type: "json"}
/*
const animes = data

function showAnimes(itens){
  document.getElementById("animes_one_piece").innerHTML = todos(itens)
}
console.table(showAnimes(data.itens))

function todos(data){
   data.map((item)=>
    {
      return `
      <div class="cards">
        <p>${item.anime}</p>
        <p>${item.character}</p>
        <addr>${item.quote}</addr>
      </div>
    `
  })
}
*/
const animes = document.getElementById("animes_one_piece")

data.forEach(function(item){
  animes.innerHTML +=
  `
    <div class="cards">
      <h1>${item.anime}</h1>
      <p>${item.character}</p>
      <addr>${item.quote}</addr>
    </div>
  `
})