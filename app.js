import { 
  getPokedex, 
  getStarWarsCharacters,
  getFuturamaCharacters,
  getRickAndMortyCharacters
} from './api.js';

async function loadPokedex() {
  const pokedex = await getPokedex();

  for (let pokemon of pokedex) {
    console.log(pokemon);
    // Put your code to render data to template here
  }
}
loadPokedex();

async function loadStarWarsCharacters() {
  const characters = await getStarWarsCharacters();

  for (let character of characters) {
    console.log(character);
    // Put your code to render data to template here
  }
}
loadStarWarsCharacters();

async function loadFuturamaCharacters() {
  const characters = await getFuturamaCharacters();

  for (let character of characters) {
    console.log(character);
    // Put your code to render data to template here
  }
}
loadFuturamaCharacters();

async function loadRickAndMortyCharacters() {
  const characters = await getRickAndMortyCharacters();

  for (let character of characters) {
    console.log(character);
    // Put your code to render data to template here
  }
}
loadRickAndMortyCharacters();

