import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { StateInterfaceInicial } from './state';

const getters: GetterTree<StateInterfaceInicial, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
