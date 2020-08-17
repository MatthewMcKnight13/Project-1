
//function to send input call to api
const getPokemon = async (pokemon) => {
  pokeRemove();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  try {
    const res = await axios.get(url);
    const pokeList = res.data;
    showPokemon(pokeList);
    // console.log(pokeList);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

//takes call and parses data and displays it adding it to the DOM
function showPokemon(pokeList) {
  const display = document.querySelector(`#append-pokemon`);
  const pokeDiv = document.createElement(`div`);
  pokeDiv.classList.add(`pokemon`);
  display.append(pokeDiv);
  let pokeSprite = `<img id="sprite" alt="sprite" src="${pokeList.sprites.front_default}"  style="width: 200px: height: 200px:"/>`
  pokeDiv.insertAdjacentHTML(`beforeend`, pokeSprite)
  let pokeStat = `
  <div id="name">Name: ${pokeList.name}</div>
  <div id="id">Id: ${pokeList.id}</div>
  <div id="height">Height: ${pokeList.height}</div>
  <div id="weight">Weight: ${pokeList.weight}</div>
  `;
  pokeDiv.insertAdjacentHTML(`beforeend`, pokeStat);
}

//changes casing of first letter to allow for both lower and uppercase spelling
function changeLetter(input) {
  const letter = input
  const name =letter.toLowerCase()
  getPokemon(name)
}

//event listener that takes input and sends it through to api
const submit = document.querySelector(`#search`);
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.querySelector(`#input`).value;
  document.querySelector(`#input`).value = "";
  changeLetter(input);
});

//removees currently displayed pokemon when a new one is inputed
function pokeRemove() {
  const removePoke = document.querySelector(`#append-pokemon`);
  while (removePoke.lastChild) {
    removePoke.removeChild(removePoke.lastChild);
  }
}

// pokeapi info to look for to add to page when called
// const height = res.data.height returns height
// const weight = res.data.weight returns weight
// const pokeId = res.data.id returns id number
// const name = res.data.name returns name of pokemon
// const type = res.types.type.name returns type of pokemon
// const backPic = res.data.sprites.back_default returns sprite back
// const frontPic = res.data.sprites.front_default returns sprite front
// `https://pokeapi.co/api/v2/pokemon/${pokemon}` returns single pokemon

// `https://pokeapi.co/api/v2/pokemon/` returns list of 20 pokemon at a time
// res.data.next shows next 20 pokemon
// res.data.previous shows previous 20 pokemon

// Will have to add pokemon name to url to search, then can use the data

// append input to url (look at omdb for search function)