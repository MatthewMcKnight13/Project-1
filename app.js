//function to send input call to api
const getPokemon = async (pokemon) => {
  pokeRemove();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  try {
    const res = await axios.get(url);
    const pokeList = res.data;
    showPokemon(pokeList);
    console.log(pokeList.types);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

//takes call and parses data and displays it adding it to the DOM
function showPokemon(pokeList) {

  //append text information about pokemon to dom and display
  const infoDisplay = document.querySelector(`#text-display`);
  const pokeDiv = document.createElement(`div`);
  pokeDiv.classList.add(`pokemon`);
  infoDisplay.append(pokeDiv);

  //convert api data to correct values
  const height = pokeList.height / 10;
  const weight = pokeList.weight / 10;
  const name = pokeList.name.charAt(0).toUpperCase() + pokeList.name.slice(1);

  //create tags and assign data and append to DOM to display
  let pokeStat = `
  <div id="id">Id:${pokeList.id}</div>
  <div id="name">Name:${name}</div>
  <div id="height">Height:${height}m</div>
  <div id="weight">Weight:${weight}kg</div>
  `;
  pokeDiv.insertAdjacentHTML(`beforeend`, pokeStat);

  //append sprite of pokemon to DOM and display
  const spriteDisplay = document.querySelector(`#sprite-display`);
  let pokeSprite = `<img id="sprite" alt="sprite" src="${pokeList.sprites.front_default}"  style="width: 200px: height: 200px:"/>`;

  //changes color of background to match pokemon type
  // const type = pokeList.types
  let type1 = pokeList.types[0].type.name;
  switch (type1) {
    case `normal`:
      spriteDisplay.style.background = `rgba(158,158,109,0.8)`;
      break;
    case `fire`:
      spriteDisplay.style.background = `rgba(238,117,42,0.8)`;
      break;
    case `water`:
      spriteDisplay.style.background = `rgba(93,133,238,0.8)`
      break;
    case `electric`:
      spriteDisplay.style.background = `rgba(247,202,42,0.8)`
      break;
    case `grass`:
      spriteDisplay.style.background = `rgba(109,193,70,0.8)`
      break;
    case `ice`:
      spriteDisplay.style.background = `rgba(141,211,211,0.8)`
      break;
    case `fighting`:
      spriteDisplay.style.background = `rgba(184,42,36,0.8)`
      break;
    case `poison`:
      spriteDisplay.style.background = `rgba(150,58,150,0.8)`
      break;
    case `ground`:
      spriteDisplay.style.background = `rgba(220,188,93,0.8)`
      break;
    case `flying`:
      spriteDisplay.style.background = `rgba(83,176,169,0.8)`
      break;
    case `psychic`:
      spriteDisplay.style.background = `rgba(247,78,125,0.8)`
      break;
    case `bug`:
      spriteDisplay.style.background = `rgba(158,175,29,0.8)`
      break;
    case `rock`:
      spriteDisplay.style.background = `rgba(105,95,54,0.8)`
      break;
    case `ghost`:
      spriteDisplay.style.background = `rgba(101,78,141,0.8)`
      break;
    case `dragon`:
      spriteDisplay.style.background = `rgba(101,49,247,0.8)`
      break;
    case `dark`:
      spriteDisplay.style.background = `rgba(101,78,63,0.8)`
      break;
    case `steel`:
      spriteDisplay.style.background = `rgba(175,175,202,0.8)`
      break;
    case `fairy`:
      spriteDisplay.style.background = `rgba(255,144,149,0.8)`
      break;
    default:
      console.log(`ln 100 error`)
  }

  //changes color of background to match pokemon type
  // const type = pokeList.types
  // let type = pokeList.types[i].type.name;
  // if (type1 === `fire`) {
  //   spriteDisplay.style.background = `rgba(238,117,42,0.8)`;
  // } else if (type1 === `water`) {
  //   spriteDisplay.style.background = `rgba(93,133,238,0.8)`;
  // } else if (type1 === `grass`) {
  //   spriteDisplay.style.background = `rgba(109,193,70,0.8)`;
  // } else if (type1 === `electric`) {
  //   spriteDisplay.style.background = `rgba(247,202,42,0.8)`;
  // } else if (type1 === `normal`) {
  //   spriteDisplay.style.background = `rgba(158,158,109,0.8)`;
  // } else if (type1 === `fighting`) {
  //   spriteDisplay.style.background = `rgba(184,42,36,0.8)`;
  // } else if (type1 === `flying`) {
  //   spriteDisplay.style.background = `rgba(83,176,169,0.8)`;
  // } else if (type1 === `poison`) {
  //   spriteDisplay.style.background = `rgba(150,58,150,0.8)`;
  // } else if (type1 === `ground`) {
  //   spriteDisplay.style.background = `rgba(220,188,93,0.8)`;
  // } else if (type1 === `rock`) {
  //   spriteDisplay.style.background = `rgba(105,95,54,0.8)`;
  // } else if (type1 === `bug`) {
  //   spriteDisplay.style.background = `rgba(158,175,29,0.8)`;
  // } else if (type1 === `ghost`) {
  //   spriteDisplay.style.background = `rgba(101,78,141,0.8)`;
  // } else if (type1 === `steel`) {
  //   spriteDisplay.style.background = `rgba(175,175,202,0.8)`;
  // } else if (type1 === `psychic`) {
  //   spriteDisplay.style.background = `rgba(247,78,125,0.8)`;
  // } else if (type1 === `ice`) {
  //   spriteDisplay.style.background = `rgba(141,211,211,0.8)`;
  // } else if (type1 === `dragon`) {
  //   spriteDisplay.style.background = `rgba(101,49,247,0.8)`;
  // } else if (type1 === `dark`) {
  //   spriteDisplay.style.background = `rgba(101,78,63,0.8)`;
  // } else if (type1 === `fairy`) {
  //   spriteDisplay.style.background = `rgba(255,144,149,0.8)`;
  // }

  //append sprite to page
  spriteDisplay.insertAdjacentHTML(`beforeend`, pokeSprite);
}

//changes casing of first letter to allow for both lower and uppercase spelling
function changeLetter(input) {
  const letter = input;
  const name = letter.toLowerCase();
  getPokemon(name);
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
  const removeImg = document.querySelector(`#sprite-display`);
  const removePoke = document.querySelector(`#text-display`);
  while (removePoke.lastChild) {
    //removes stats and img of current pokemon when a new one is searched for
    removePoke.removeChild(removePoke.lastChild);
    removeImg.removeChild(removeImg.lastChild);
  }
}

// API chains of currently used call //

// `https://pokeapi.co/api/v2/pokemon/${pokemon}` returns single pokemon by name or id
// const height = res.data.height returns height
// const weight = res.data.weight returns weight
// const pokeId = res.data.id returns id number
// const name = res.data.name returns name of pokemon
// const type = res.types.type.name returns type of pokemon
// console.log(pokeList.types[0].type.name); returns first type found in array
// console.log(pokeList.types[1].type.name); returns second type if exists
// const frontPic = res.data.sprites.front_default returns sprite front

// select bar start point for desktop future update //

// `https://pokeapi.co/api/v2/pokemon/` returns list of 20 pokemon at a time
// res.data.next shows next 20 pokemon
// res.data.previous shows previous 20 pokemon

// additional API call paths for further inforamtion //

// `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`
// returns a call that can lead to pokedex flavor text.
// https://pokeapi.co/api/v2/evolution-chain/${pokemon}/
// shows info on evolutions

// future update ideas //
//other ideas for post mvp's
// adding second type and linear gradient to display - looking into most effiecent way to do this
// loading screen, as further down line of pokemon latency does happen - animation questions to ask
// text assist? - would require a built in database with hard coded results
// make desktop a box to select from
// add box for base stats, flavor text, and flow chart of evolutions
