import PokemonService from 'src/services/PokemonService';
import Pokemon from 'src/classes/Pokemon';
import { getPokemonIdByUrlString } from 'src/util/AppUtil';

export default {
  async getPokemons(): Promise<Pokemon[]> {
    try {
      const pokemons: Pokemon[] = [];

      const pokemonData = await PokemonService.getPokemons();

      for (let index = 0; index < pokemonData.results.length; index++) {
        const result = pokemonData.results[index];
        const pokemonId = getPokemonIdByUrlString(result.url);
        const pokemonApi = await PokemonService.getPokemonById(pokemonId);

        const pokemon = {} as Pokemon;
        pokemon.id = pokemonApi.id;
        pokemon.name = pokemonApi.name;
        pokemon.image = pokemonApi.sprites.other['official-artwork'].front_default;

        pokemons.push(pokemon);
      }

      return pokemons;
    } catch (e) {
      throw e;
    }
  },
};
