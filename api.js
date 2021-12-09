
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
export async function getStarWarsPeople(name) {
  let url = 'https://swapi.dev/api/people';
  if (name) {
    url += '?name=' + name;
  }
  const resp = await fetch(url);
  const json = await resp.json();
  return json.results;
}