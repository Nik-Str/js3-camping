const store = {
  state: () => ({
    cabinBooked: [
      {
        name: 'Anders',
        date: '20/5-2022',
        days: 5,
        place: 'Afterbeach-stugan',
      },
    ],
    cabinCart: [],
  }),
  mutations: {
    addCabinBook(state, payload) {
      let price;
      if (payload.type === 'Stuga') price = payload.days * 999;
      if (payload.type === 'Husvagnplats') price = payload.days * 749;
      if (payload.type === 'Tältplats') price = payload.days * 499;

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
