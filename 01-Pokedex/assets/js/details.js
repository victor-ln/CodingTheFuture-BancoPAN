document.addEventListener("DOMContentLoaded", async function () {
  const pokemonPage = document.querySelector(".pokemon-page");
  const nameElement = pokemonPage.querySelector(".pokemon-page__name");
  const numberElement = pokemonPage.querySelector(".pokemon-page__number");
  const typesList = pokemonPage.querySelector(".types");
  const imageElement = pokemonPage.querySelector(".pokemon-page__header img");

  function updatePokemonDetails(pokemonDetails) {
    pokemonPage.classList.add(pokemonDetails.mainType);

    nameElement.textContent = pokemonDetails.name;
    numberElement.textContent = pokemonDetails.id;

    for (type of pokemonDetails.types) {
      addTypeToList(type);
    }
    imageElement.src = pokemonDetails.photo;

    updateOverviewValue(
      "height",
      `${pokemonDetails.height} cm ` +
        `(${(pokemonDetails.height * 0.393701).toFixed(2)} in)`
    );
    updateOverviewValue(
      "weight",
      `${pokemonDetails.weight} kg ` +
        `(${(pokemonDetails.weight * 2.20462).toFixed(2)} lbs)`
    );
    updateOverviewValue("abilities", `${pokemonDetails.abilities.join(", ")}`);

    updateBaseStatsValue("hp", pokemonDetails.stats.hp);
    updateBaseStatsValue("attack", pokemonDetails.stats.attack);
    updateBaseStatsValue("defense", pokemonDetails.stats.defense);
    updateBaseStatsValue("special-attack", pokemonDetails.stats.specialAttack);
    updateBaseStatsValue(
      "special-defense",
      pokemonDetails.stats.specialDefense
    );
    updateBaseStatsValue("speed", pokemonDetails.stats.speed);
  }

  function addTypeToList(type) {
    const typeElement = document.createElement("li");
    typeElement.className = `type ${type}`;
    typeElement.textContent = type;
    typesList.appendChild(typeElement);
  }

  function updateBaseStatsValue(elementId, definition) {
    const element = document.getElementById(elementId);

    if (element) {
      element.querySelector("span:first-child").textContent = definition;
    }
  }

  function updateOverviewValue(elementId, definition) {
    const element = document.getElementById(elementId);

    if (element) {
      element.textContent = definition;
    }
  }
  const urlParams = new URLSearchParams(window.location.search);
  const pokemonID = urlParams.get("id");

  updatePokemonDetails(await pokeAPI.getPokemonDetail(pokemonID));
});

function contains(selector, text) {
  const elements = document.querySelectorAll(selector);
  return Array.from(elements).find((element) =>
    element.textContent.includes(text)
  );
}
