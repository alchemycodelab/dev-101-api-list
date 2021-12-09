import { getPokedex, getStarWarsPeople } from './api.js';

async function loadPokedex() {
  const pokedex = await getPokedex();

  for (let pokemon of pokedex) {
    
    console.log(pokemon);

    // Put your code to render data to template here
  
  }
}
loadPokedex();

async function loadStarWarsPeople() {
  const people = await getStarWarsPeople();

  for (let person of people) {
    
    console.log(person);

    // Put your code to render data to template here
  
  }
}
loadStarWarsPeople();

