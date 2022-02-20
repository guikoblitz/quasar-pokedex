import TypeApiDataResults from './TypeApiDataResults';

export default interface PokemonApiData {
  count: number;

  next: string;

  previous: string;

  results: TypeApiDataResults[];
}
