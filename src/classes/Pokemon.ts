export interface Pokemon {
  id: number;

  name: string;

  image: string;

  type: PokemonType;
}

export interface PokemonType {
  primary: string;

  secondary?: string;
}
