import PokemonApiData from 'src/classes/PokemonApiData';
import PokemonApiRaw from 'src/classes/PokemonApiRaw';
import pokeApi from './Api';

export default {
  async getPokemons(limit: number, offset: number): Promise<PokemonApiData | undefined> {
    try {
      const response = await pokeApi.get('pokemon', { params: { offset, limit } });
      if (response.status === 200) {
        return response.data;
      }
      return undefined;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  async getPokemonByFilter(filter: number | string): Promise<PokemonApiRaw | undefined> {
    try {
      const response = await pokeApi.get(`pokemon/${filter}`);
      if (response.status === 200) {
        return response.data;
      }
      return undefined;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
};
