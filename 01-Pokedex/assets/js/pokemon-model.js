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

class Pokemon {
  constructor(pokeResponse) {
    this.id = pokeResponse.id;
    this.name = pokeResponse.name;

    const types = pokeResponse.types.map((typeSlot) => typeSlot.type.name);
    const [mainType] = types;

    this.types = types;
    this.mainType = mainType;

    this.photo =
      pokeResponse.sprites.other.dream_world.front_default ||
      findFirstNonNullValueByKeyName(pokeResponse.sprites, "front_default");
  }
}

class PokemonDetails extends Pokemon {
  constructor(pokeResponse) {
    super(pokeResponse);
    this.abilities = pokeResponse.abilities.map(obj => obj.ability.name)
    this.height = pokeResponse.height * 10; /* decimeter to centimeter */
    this.weight = pokeResponse.weight / 10; /* hectogram to kilogram */
    this.stats = {
      hp: pokeResponse.stats[0].base_stat,
      attack: pokeResponse.stats[1].base_stat,
      defense: pokeResponse.stats[2].base_stat,
      specialAttack: pokeResponse.stats[3].base_stat,
      specialDefense: pokeResponse.stats[4].base_stat,
      speed: pokeResponse.stats[5].base_stat,
    };
  }
}
