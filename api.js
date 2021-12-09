
// API Documentation: https://alchemy-pokedex.herokuapp.com/
export async function getPokedex(search) {
  let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
  if (search) {
    url += '?pokemon=' + search;
  }
  const resp = await fetch(url);
  const json = await resp.json();
  return json.results;
}

// API Documentation: https://swapi.dev/documentation
export async function getStarWarsCharacters(name) {
  let url = 'https://swapi.dev/api/people';
  if (name) {
    url += '?name=' + name;
  }
  const resp = await fetch(url);
  const json = await resp.json();
  return json.results;
}

// API Documentation: http://futuramaapi.herokuapp.com/
export async function getFuturamaCharacters(search) {
  let url = 'https://futuramaapi.herokuapp.com/api/v2/characters';
  if (search) {
    url += '?search=' + search;
  }
  const resp = await fetch(url);
  const json = await resp.json();
  return json;
}

// API Documentation: https://rickandmortyapi.com/documentation/#get-all-characters
export async function getRickAndMortyCharacters(name) {
  let url = 'https://rickandmortyapi.com/api/character';
  if (name) {
    url += '?name=' + name;
  }
  const resp = await fetch(url);
  const json = await resp.json();
  return json.results;
}