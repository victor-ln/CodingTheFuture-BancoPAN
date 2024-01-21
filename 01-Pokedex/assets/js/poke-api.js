const pokeAPI = {};

pokeAPI.getPokemonJSONFromAPI = async function (pokemon) {
  const response = await fetch(pokemon);
  return await response.json();
};

pokeAPI.getPokemons = async function (offset = 0, limit = 12) {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  try {
    const response = await fetch(url);
    const jsonBody = await response.json();
    const pokemons = jsonBody.results;
    const promises = pokemons.map((pokemon) => this.getPokemonJSONFromAPI(pokemon.url));
    const pokemonResponses = await Promise.all(promises);
    return pokemonResponses.map((pokemonResponse) => new Pokemon(pokemonResponse));
  } catch (data) {
    return console.error(data);
  }
};

pokeAPI.getPokemonDetail = async function (pokemonID) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`;

  const response = await fetch(url);
  const pokemonResponse = await response.json();
  return new PokemonDetails(pokemonResponse);
};
