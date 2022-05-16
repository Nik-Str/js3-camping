import { createStore } from 'vuex';
import spaStore from './spaStore';
import foodStore from './foodStore';
import cabinStore from './cabinStore';

export default createStore({
  modules: {
    cabin: cabinStore,
    spa: spaStore,
    food: foodStore,
  },
});
