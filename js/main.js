
let elMovies = document.querySelector('.movies__list')
let partMovies = movies.slice(0,100)
let elSearch = document.querySelector('.movies__search')
fnMapper(partMovies)
function  fnMapper(data) {
  elMovies.innerHTML = ''
  data.forEach((item, index) =>  {
      console.log(item.summary.split(" ").slice(0,7).join(" "));
      let newLi = document.createElement('li')
      newLi.innerHTML =  `
      <div class="card" style="width: 18rem;">
      <img src="https://i.ytimg.com/vi/${item.ytid}/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLBiuAGonrXW8Qe12Se-jRsY7eGTdQ" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.Title.toString().split("  ").slice(0,3).join("  ")}</h5>
        <p class="card-text">${item.summary.split(" ").slice(0,7).join(" ")} ...</p>
        <p class="card-text">${item.movie_year}  </p>
        <p class="card-text">${item.Categories}  </p>        
        <p class="card-text">${item.imdb_rating} </p>
        <a https://www.youtube.com/watch?v=${item.ytid}"  class="btn btn-primary" target="_blank"  >Watch film</a>
      </div>
    </div>
    `
      elMovies.appendChild(newLi)
  });
  
}


function fnYear(year) {
  if(year == 'new')  {
    fnMapper(partMovies.sort((a,b) => b.movie_year - a.movie_year));
  }
  else{
    fnMapper(partMovies.sort((a,b) => a.movie_year - b.movie_year));
  }
}

function fnRating(rating) {
  if(rating == 'max')  {
    fnMapper(partMovies.sort((a,b) => b.imdb_rating - a.imdb_rating));
  }
  else{
    fnMapper(partMovies.sort((a,b) => a.imdb_rating - b.imdb_rating));
  }
}

let arrCategory = []
partMovies.forEach((item) => {
  if(arrCategory.includes()) {

  }
  else{
    arrCategory.push(item.Categories)
  }
})
let elSelCategory = document.querySelector('.sel__category')
arrCategory.forEach((item) => {
  let newOption = document.createElement('option')
  newOption.textContent = item
  elSelCategory.appendChild(newOption)
})

function  fnCategories(category) {
  console.log(category);
  fnMapper(partMovies.filter((item) => item.Categories == category)) 
}

function  fnSearch(e){
  e.prevevenDefault()
  let strSearch = elSearch.value
  fnMapper(partMovies.filter((item) => item.Title.toString().toLowerCase().includes(strSearch.toLowerCase())))
  console.log(partMovies.filter((item) => item.TitletoString().includes(strSearch)));
}


let elPaginations = document.querySelector('.movie__pagenations')
let movLenMax =  partMovies.length /  10 
for (let i = 1; i <=  partMovies.length /  10  ; i++) {
  let newLi = document.createElement('li')
  newLi.classList.add('pagenation__item')
  newLi.innerHTML = `<button class="btn btn-success" onclick="fnPagination(${i})">${i}</button>`
  elPaginations.appendChild(newLi)
}
function fnPagenation(slug) {
  if (movLenMax <= slug) {
    // console.log("ishladiii");
    elPaginations.style =  `transform: translateX(-${100 * (slug - 2)}px);`
  }
    else {
    elPaginations.style =  `transform: translateX(-${100 * (slug - 1)}px);`

    }
  fnMapper(partMovies.slice((slug -1) *10, slug *10));

}