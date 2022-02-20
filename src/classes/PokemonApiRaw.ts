export default interface PokemonApiRaw {
  id: number;

  name: string;

  sprites: PokemonApiSprite;

  types: PokemonApiType[];
}

interface PokemonApiType {
  slot: number;

  type: PokemonApiTypeRaw;
}

interface PokemonApiTypeRaw {
  name: string;

  url: string;
}

interface PokemonApiSprite {
  other: PokemonApiSpriteOther;
}

interface PokemonApiSpriteOther {
  'official-artwork': PokemonApiSpriteFrontDefault;
}

interface PokemonApiSpriteFrontDefault {
  front_default: string;
}
