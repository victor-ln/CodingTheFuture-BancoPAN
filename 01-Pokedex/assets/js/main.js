const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");

const limit = 12;
let offset = 0;

function convertPokemonTypesToListItem(pokemonTypes) {
  return pokemonTypes.map((type) => `<li class="type ${type}">${type}</li>`);
}

function convertPokemonToListItem(pokemon) {
  return `
        <li class="pokemon ${pokemon.mainType}">
            <span class="number">#${pokemon.id}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
            <ol class="types">
                ${convertPokemonTypesToListItem(pokemon.types).join("")}
            </ol>
            <img
                src="${pokemon.photo}"
                alt="${pokemon.name}"
            />
            </div>
        </li>
    `;
}

function loadPokemonsIntoHTML(offset, limit) {
    pokeAPI
    .getPokemons(offset, limit)
    .then((pokemons) => {
      const pokemonListsHTML = pokemons.map(convertPokemonToListItem).join("");
      pokemonList.innerHTML += pokemonListsHTML;
    })
    .catch(console.error);  
}

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    loadPokemonsIntoHTML(offset, limit);
})

loadPokemonsIntoHTML(offset, limit);
