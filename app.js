//function to send input call to api
const getPokemon = async (pokemon) => {
  
  //initalize removal of previous pokemon if one exists
  pokeRemove();

  //assign api url to a variable
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  // try and
  try {

    //assign the axios call/return of info to a variable
    const res = await axios.get(url);

    //assign data portion of axios call to variable for parsing and use
    const pokeList = res.data;

    //initialize the display function
    showPokemon(pokeList);

    //if axios call doesn't happen catch a error message here
  } catch (error) {

    //print error message to console
    console.log(`Error: ${error}`);
  }
};

//takes call and parses data and displays it adding it to the DOM
function showPokemon(pokeList) {

  //append text information about pokemon to dom and display
  const infoDisplay = document.querySelector(`#text-display`);

  //create a new div
  const pokeDiv = document.createElement(`div`);

  //add class of pokemon to the new div
  pokeDiv.classList.add(`pokemon`);

  //append div which will contain pokemon stats to text display div
  infoDisplay.append(pokeDiv);

  //convert api data to correct values for meters and kilograms
  const height = pokeList.height / 10;
  const weight = pokeList.weight / 10;

  //take returned pokemon name and first letter of string, capitalize it and then rejoin it with rest of string
  const name = pokeList.name.charAt(0).toUpperCase() + pokeList.name.slice(1);

  //create tags and assign data to be appended to DOM to display
  let pokeStat = `
  <div id="id">Id:${pokeList.id}</div>
  <div id="name">Name:${name}</div>
  <div id="height">Height:${height}m</div>
  <div id="weight">Weight:${weight}kg</div>
  `;

  //append data to text box
  pokeDiv.insertAdjacentHTML(`beforeend`, pokeStat);

  //append sprite of pokemon to DOM and display
  const spriteDisplay = document.querySelector(`#sprite-display`);
  let pokeSprite = `<img id="sprite" alt="sprite" src="${pokeList.sprites.front_default}"  style="width: 200px: height: 200px:"/>`;

  //changes color of background to match pokemon type (switch statement)
  let type1 = pokeList.types[0].type.name;
  switch (type1) {
    case `normal`:
      spriteDisplay.style.background = `rgba(158,158,109,0.8)`;
      break;
    case `fire`:
      spriteDisplay.style.background = `rgba(238,117,42,0.8)`;
      break;
    case `water`:
      spriteDisplay.style.background = `rgba(93,133,238,0.8)`;
      break;
    case `electric`:
      spriteDisplay.style.background = `rgba(247,202,42,0.8)`;
      break;
    case `grass`:
      spriteDisplay.style.background = `rgba(109,193,70,0.8)`;
      break;
    case `ice`:
      spriteDisplay.style.background = `rgba(141,211,211,0.8)`;
      break;
    case `fighting`:
      spriteDisplay.style.background = `rgba(184,42,36,0.8)`;
      break;
    case `poison`:
      spriteDisplay.style.background = `rgba(150,58,150,0.8)`;
      break;
    case `ground`:
      spriteDisplay.style.background = `rgba(220,188,93,0.8)`;
      break;
    case `flying`:
      spriteDisplay.style.background = `rgba(83,176,169,0.8)`;
      break;
    case `psychic`:
      spriteDisplay.style.background = `rgba(247,78,125,0.8)`;
      break;
    case `bug`:
      spriteDisplay.style.background = `rgba(158,175,29,0.8)`;
      break;
    case `rock`:
      spriteDisplay.style.background = `rgba(105,95,54,0.8)`;
      break;
    case `ghost`:
      spriteDisplay.style.background = `rgba(101,78,141,0.8)`;
      break;
    case `dragon`:
      spriteDisplay.style.background = `rgba(101,49,247,0.8)`;
      break;
    case `dark`:
      spriteDisplay.style.background = `rgba(101,78,63,0.8)`;
      break;
    case `steel`:
      spriteDisplay.style.background = `rgba(175,175,202,0.8)`;
      break;
    case `fairy`:
      spriteDisplay.style.background = `rgba(255,144,149,0.8)`;
      break;
    default:

      //if no color change happens have default be a print to console to see if it gets to this part of code
      console.log(`ln 100 error`);
  }

  //append sprite to page
  spriteDisplay.insertAdjacentHTML(`beforeend`, pokeSprite);
}

//changes casing of first letter to allow for both lower and uppercase spelling
function changeLetter(input) {
  //assign user input to a variable
  const letter = input;

  //create a nother variable after running input to lowercase
  const name = letter.toLowerCase();

  //initialize get pokemon function with converted input as argument
  getPokemon(name);
}

//cearte variable and assign it to search button
const submit = document.querySelector(`#search`);

//add event listener on click and create anonymous function
submit.addEventListener("click", (e) => {

  //allow even default to 
  e.preventDefault();

  //create a variable and assign it to the value of the input field
  const input = document.querySelector(`#input`).value;

  //convert input field to a string
  document.querySelector(`#input`).value = "";

  //initialize changeLetter function
  changeLetter(input);
});

//removees currently displayed pokemon information and img when a new one is inputed
function pokeRemove() {

  //create variables and assign them to sprite display and text display
  const removeImg = document.querySelector(`#sprite-display`);
  const removePoke = document.querySelector(`#text-display`);

  //while there is a child of the text display and therfore sprite display
  while (removePoke.lastChild) {

    //remove those children
    removePoke.removeChild(removePoke.lastChild);
    removeImg.removeChild(removeImg.lastChild);
  }
}
