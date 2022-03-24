export function formatPokemonName(value: string) {
  const pokemonNameSplit = value.split('-');
  let pokemonName = pokemonNameSplit[0];
  if (pokemonNameSplit[1] === 'm') {
    pokemonName += '-♂';
  } else if (pokemonNameSplit[1] === 'f') {
    pokemonName += '-♀';
  } else if (pokemonNameSplit[1] === 'mime') {
    pokemonName += ' Mime';
  } else if (pokemonNameSplit[1] === 'oh') {
    pokemonName += '-Oh';
  } else if (pokemonNameSplit[1] === 'jr') {
    pokemonName += ' Jr';
  } else if (pokemonNameSplit[1] === 'z') {
    pokemonName += ' Z';
  } else if (pokemonNameSplit[1] === 'male') {
    pokemonName += '-♂';
  } else if (pokemonNameSplit[1] === 'o') {
    pokemonName += '-o';
  } else if (pokemonNameSplit[1] === 'koko') {
    pokemonName += ' Koko';
  } else if (pokemonNameSplit[1] === 'lele') {
    pokemonName += ' Lele';
  } else if (pokemonNameSplit[1] === 'bulu') {
    pokemonName += ' Bulu';
  } else if (pokemonNameSplit[1] === 'fini') {
    pokemonName += ' Fini';
  } else if (pokemonNameSplit[1] === 'mega') {
    pokemonName += ' Mega';
  } else if (pokemonNameSplit[1] === 'totem') {
    pokemonName += ' Totem';
  }
  return formatFirstLetterToUpperCase(pokemonName);
}

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
