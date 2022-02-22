import { Pokemon } from 'src/classes/Pokemon';

export interface StateInterfaceInicial {
  pokemon: Pokemon | null;
}

function state(): StateInterfaceInicial {
  return {
    pokemon: null,
  };
}

export default state;
