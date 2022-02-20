import PokemonService from 'src/services/PokemonService';
import { Pokemon, PokemonType } from 'src/classes/Pokemon';
import { getPokemonIdByUrlString, formatFirstLetterToUpperCase } from 'src/util/AppUtil';

export default {
  async getPokemons(limit = 20, offset = 0): Promise<Pokemon[]> {
    try {
      const pokemons: Pokemon[] = [];

      const pokemonData = await PokemonService.getPokemons(limit, offset);

      for (let index = 0; index < pokemonData.results.length; index++) {
        const result = pokemonData.results[index];
        const pokemonId = getPokemonIdByUrlString(result.url);
        const pokemonApi = await PokemonService.getPokemonById(pokemonId);

        const pokemon = {} as Pokemon;
        pokemon.id = pokemonApi.id;
        pokemon.name = formatFirstLetterToUpperCase(pokemonApi.name);
        pokemon.image = pokemonApi.sprites.other['official-artwork'].front_default;
        pokemon.type = {} as PokemonType;

        for (let index = 0; index < pokemonApi.types.length; index++) {
          const pokemonType = pokemonApi.types[index];
          if (pokemonType.slot === 1) {
            pokemon.type.primary = pokemonType.type.name;
          } else {
            pokemon.type.secondary = pokemonType.type.name;
          }
        }

        pokemons.push(pokemon);
      }

      return pokemons;
    } catch (e) {
      throw e;
    }
  },
};
