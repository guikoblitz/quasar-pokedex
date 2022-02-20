export function formatFirstLetterToUpperCase(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function getPokemonIdByUrlString(url: string) {
  const urlList = url.split('/');
  return Number(urlList[urlList.length - 2]);
}

export function returnPokemonId(pokemonId: number): string {
  const pokemonIdString = String(pokemonId);
  return pokemonIdString.length >= 3 ? `#${pokemonId}` : pokemonIdString.length === 2 ? `#0${pokemonId}` : `#00${pokemonId}`;
}
