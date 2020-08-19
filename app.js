//function to send input call to api
const getPokemon = async (pokemon) => {
  pokeRemove();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  try {
    const res = await axios.get(url);
    const pokeList = res.data;
    showPokemon(pokeList);
    //fetches type of pokemon post MVP
    console.log(pokeList);
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
  const type = pokeList.types[0].type.name;
  if (type === `fire`) {
    spriteDisplay.style.backgroundColor = `rgba(238,117,42,0.8)`;
  } else if (type === `water`) {
    spriteDisplay.style.backgroundColor = `rgba(93,133,238,0.3)`;
  } else if (type === `grass`) {
    spriteDisplay.style.backgroundColor = `rgba(109,193,70,0.8)`;
  } else if (type === `electric`) {
    spriteDisplay.style.backgroundColor = `rgba(247,202,42,0.8)`;
  } else if (type === `normal`) {
    spriteDisplay.style.backgroundColor = `rgba(158,158,109,0.8)`;
  } else if (type === `fighting`) {
    spriteDisplay.style.backgroundColor = `rgba(184,42,36,0.8)`;
  } else if (type === `flying`) {
    spriteDisplay.style.backgroundColor = `rgba(158,132,238,0.8)`;
  } else if (type === `poison`) {
    spriteDisplay.style.backgroundColor = `rgba(150,58,150,0.8)`;
  } else if (type === `ground`) {
    spriteDisplay.style.backgroundColor = `rgba(220,188,93,0.8)`;
  } else if (type === `rock`) {
    spriteDisplay.style.backgroundColor = `rgba(175,150,40,0.8)`;
  } else if (type === `bug`) {
    spriteDisplay.style.backgroundColor = `rgba(158,175,29,0.8)`;
  } else if (type === `ghost`) {
    spriteDisplay.style.backgroundColor = `rgba(101,78,141,0.8)`;
  } else if (type === `steel`) {
    spriteDisplay.style.backgroundColor = `rgba(175,175,202,0.8)`;
  } else if (type === `psychic`) {
    spriteDisplay.style.backgroundColor = `rgba(247,78,125,0.5)`;
  } else if (type === `ice`) {
    spriteDisplay.style.backgroundColor = `rgba(141,211,211,0.8)`;
  } else if (type === `dragon`) {
    spriteDisplay.style.backgroundColor = `rgba(101,49,247,0.8)`;
  } else if (type === `dark`) {
    spriteDisplay.style.backgroundColor = `rgba(101,78,63,0.8)`;
  } else if (type === `fairy`) {
    spriteDisplay.style.backgroundColor = `rgba(255,144,149,0.8)`;
  }
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
  document.querySelector(`#input`).value = Number;
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

// pokeapi info to look for to add to page when called
// const height = res.data.height returns height
// const weight = res.data.weight returns weight
// const pokeId = res.data.id returns id number
// const name = res.data.name returns name of pokemon
// const type = res.types.type.name returns type of pokemon
// console.log(pokeList.types[0].type.name); returns first type found in array
// console.log(pokeList.types[1].type.name); returns second type if exists
// const backPic = res.data.sprites.back_default returns sprite back
// const frontPic = res.data.sprites.front_default returns sprite front
// `https://pokeapi.co/api/v2/pokemon/${pokemon}` returns single pokemon

// `https://pokeapi.co/api/v2/pokemon/` returns list of 20 pokemon at a time
// res.data.next shows next 20 pokemon
// res.data.previous shows previous 20 pokemon


//other ideas for post mvp's 
// text assist?
// adding second type and linear gradient to display
// add search by id number
