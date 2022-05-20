import { createStore } from 'vuex';
import spaStore from './spaStore';
import restaurantStore from './restaurantStore';
import cabinStore from './cabinStore';

export default createStore({
  modules: {
    cabin: cabinStore,
    spa: spaStore,
    restaurant: restaurantStore,
  },
});
