import PokemonService from 'src/services/PokemonService';
import { Pokemon, PokemonType } from 'src/classes/Pokemon';
import { getPokemonIdByUrlString, formatFirstLetterToUpperCase } from 'src/util/AppUtil';
import PokemonApiRaw from 'src/classes/PokemonApiRaw';

export default {
  async getPokemons(limit = 30, offset = 0): Promise<Pokemon[]> {
    try {
      const pokemons: Pokemon[] = [];

      const pokemonData = await PokemonService.getPokemons(limit, offset);

      if (pokemonData) {
        for (let index = 0; index < pokemonData.results.length; index++) {
          const result = pokemonData.results[index];
          const pokemonId = getPokemonIdByUrlString(result.url);
          const pokemonApi = await PokemonService.getPokemonByFilter(pokemonId);

          if (pokemonApi) {
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
        }
      } else {
        throw new Error("We couldn't find any Pokémon. Try again in a few minutes.");
      }

      return pokemons;
    } catch (e) {
      throw e;
    }
  },

  async getPokemon(filter: string): Promise<Pokemon | undefined> {
    try {
      const pokemonApi = await PokemonService.getPokemonByFilter(filter);
      if (pokemonApi) {
        const pokemon = this.pokemonConstructor(pokemonApi);
        return pokemon;
      }
      throw new Error('Pokémon not found. Try again in a few minutes.');
    } catch (e) {
      throw e;
    }
  },

  pokemonConstructor(pokemonApi: PokemonApiRaw): Pokemon {
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

    return pokemon;
  },
};
