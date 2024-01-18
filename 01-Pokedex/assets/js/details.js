document.addEventListener("DOMContentLoaded", function () {
  const nameElement = document.querySelector(".pokemon-page__name");
  const numberElement = document.querySelector(".pokemon-page__number");
  const typesList = document.querySelector(".types");
  const imageElement = document.querySelector(".pokemon-page__header img");

  function updatePokemonDetails(height, weight, abilities, stats) {
    nameElement.textContent = "Bulbasaur";
    numberElement.textContent = "1";

    addTypeToList("grass");
    addTypeToList("poison");

    imageElement.src =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg";

    updateOverviewValue("height", height);
    updateOverviewValue("weight", weight);
    updateOverviewValue("abilities", abilities);

    updateBaseStatsValue("hp", stats.hp);
    updateBaseStatsValue("attack", stats.attack);
    updateBaseStatsValue("defense", stats.defense);
    updateBaseStatsValue("special-attack", stats.specialAttack);
    updateBaseStatsValue("special-defense", stats.specialDefense);
    updateBaseStatsValue("speed", stats.speed);
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

  const pokemonDetails = {
    height: "0.70cm",
    weight: "6.9kg",
    abilities: "Overgrow, ...",
    stats: {
      hp: "45",
      attack: "65",
      defense: "65",
      specialAttack: "49",
      specialDefense: "49",
      speed: "45",
    },
  };

  updatePokemonDetails(
    pokemonDetails.height,
    pokemonDetails.weight,
    pokemonDetails.abilities,
    pokemonDetails.stats
  );
});

function contains(selector, text) {
  const elements = document.querySelectorAll(selector);
  return Array.from(elements).find((element) =>
    element.textContent.includes(text)
  );
}
