import { MutationTree } from 'vuex';
import { StateInterfaceInicial } from './state';
import * as lodash from 'lodash';
import Storage from '../../util/LocalStorageUtil';
const storage = new Storage();

const mutation: MutationTree<StateInterfaceInicial> = {
  SET_POKEMON(state, payload) {
    state.pokemon = payload;
    storage.set('pokemon', lodash.cloneDeep(payload));
  },
};

export default mutation;
