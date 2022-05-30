const store = {
  state: () => ({
    cabinBooked: [],
    cabinCart: [],
  }),
  mutations: {
    addCabinBook(state, payload) {
      let price;
      if (payload.type === 'Stuga') price =  999;
      if (payload.type === 'Husvagnplats') price =  749;
      if (payload.type === 'Tältplats') price =  499;

      state.cabinCart.push({ ...payload, price: price });
      console.log(state.cabinCart);
    },
    removeCabinBookingCart(state, payload) {
      state.cabinCart = state.cabinCart.filter((item) => item !== payload);
    },
  },
  getters: {
    getCabinTotal(state) {
      let total = 0;
      for (let i = 0; i < state.cabinCart.length; i++) {
        total = total + state.cabinCart[i].price;
      }
      return total;
    },
  },
};

export default store;
