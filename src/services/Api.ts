import axios from 'axios';

const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 1000,
});

export default pokeApi;
