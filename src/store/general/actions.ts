import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { StateInterfaceInicial } from './state';

const actions: ActionTree<StateInterfaceInicial, StateInterface> = {
  setPokemon({ commit }, pokemon) {
    commit('SET_POKEMON', pokemon);
  },
};

export default actions;
