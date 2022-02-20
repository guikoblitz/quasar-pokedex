import PokemonApiDataResults from './PokemonApiDataResults';

export default interface PokemonApiData {
  count: number;

  next: string;

  previous: string;

  results: PokemonApiDataResults[];
}
