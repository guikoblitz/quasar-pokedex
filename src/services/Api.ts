import axios, { AxiosError, AxiosResponse } from 'axios';

const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

const eject = pokeApi.interceptors.response.use(
  (response: AxiosResponse) => {
    return Promise.resolve(response);
  },
  (error: AxiosError) => {
    return error?.response;
  }
);

axios.interceptors.request.eject(eject);

export default pokeApi;
