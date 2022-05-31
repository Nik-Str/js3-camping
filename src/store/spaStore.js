const store = {
  state: () => ({
    Spa: [],
    SpaBooked: [],
    SpaCart: [],
  }),
  mutations: {
    addSpaBook(state, item) {
      state.SpaCart.push({ ...item, price: 999 });
      console.log(state.SpaCart);
    },
    removeSpaBookingCart(state, payload) {
      state.SpaCart = state.SpaCart.filter((item) => item !== payload);
    },
  },
  actions: {},
  getters: {
    getSpaTotal(state) {
      let total = 0;
      for (let i = 0; i < state.SpaCart.length; i++) {
        total = total + state.SpaCart[i].price;
      }
      return total;
    },
  },
};

export default store;
