import pokeApi from './Api';

export default {
  async getPokemons(): Promise<any> {
    try {
      const response = await pokeApi.get('pokemon');
      console.log(response);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
};
