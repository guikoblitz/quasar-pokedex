export default interface Pokemon {
  id: number;

  name: string;

  image: string;

  types: PokemonType[];
}

interface PokemonType {
  primary: string;

  secondary: string;
}
