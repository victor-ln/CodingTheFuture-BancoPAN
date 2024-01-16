const pokeAPI = {};

function findFirstNonNullValueByKeyName(obj, keyName) {
  for (const key in obj) {
    if (key == keyName && Boolean(obj[key])) {
      return obj[key];
    } else if (typeof obj[key] === "object") {
      const result = findFirstNonNullValueByKeyName(obj[key], keyName);
      if (Boolean(result)) {
        return result;
      }
    }
  }
  return null;
}

function createPokemonFromPokeAPIDetail(pokeDetail) {
  const pokemon = new Pokemon();

  pokemon.id = pokeDetail.id;
  pokemon.name = pokeDetail.name;

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  const [mainType] = types;

  pokemon.types = types;
  pokemon.mainType = mainType;

  pokemon.photo =
    pokeDetail.sprites.other.dream_world.front_default ||
    findFirstNonNullValueByKeyName(pokeDetail.sprites, "front_default");

  return pokemon;
}

pokeAPI.getPokemonDetail = function (pokemon) {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(createPokemonFromPokeAPIDetail);
};

pokeAPI.getPokemons = function (offset = 0, limit = 12) {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(this.getPokemonDetail))
    .then((promises) => Promise.all(promises))
    .catch(console.error);
};
