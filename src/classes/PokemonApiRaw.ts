export default interface PokemonApiRaw {
  id: number;

  name: string;

  sprites: PokemonApiSprite;
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
