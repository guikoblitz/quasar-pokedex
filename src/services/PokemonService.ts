import PokemonApiData from 'src/classes/PokemonApiData';
import PokemonApiRaw from 'src/classes/PokemonApiRaw';
import pokeApi from './Api';

export default {
  async getPokemons(): Promise<PokemonApiData> {
    try {
      const response = await pokeApi.get('pokemon');
      return response.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  async getPokemonById(id: number): Promise<PokemonApiRaw> {
    try {
      const response = await pokeApi.get(`pokemon/${id}`);
      return response.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
};
