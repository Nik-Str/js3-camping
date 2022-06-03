const store = {
  state: () => ({
    Spa: [],
    SpaBooked: [
      { date: '3/6-2022', days: '10.00', place: 'Yoga', amount: 6 },
      { date: '3/6-2022', days: '17.00', place: 'Grupp Yoga utomhus', amount: 17 },
    ],
    SpaCart: [],
  }),
  mutations: {
    addSpaBook(state, item) {
      state.SpaCart.push({ ...item, price: 999 });
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
    getAmountOfBookedYoga(state) {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      const day = today.getDate();
      const thisDay = day + '/' + month + '-' + year;

      const booked = state.SpaBooked.filter((item) => item.date === thisDay && item.place === 'Yoga');
      const amount = booked[0]?.amount ? booked[0].amount : 0;
      return 15 - amount;
    },
    getAmountOfBookedYogaOutdoor(state) {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      const day = today.getDate();
      const thisDay = day + '/' + month + '-' + year;

      const booked = state.SpaBooked.filter((item) => item.date === thisDay && item.place === 'Grupp Yoga utomhus');
      const amount = booked[0]?.amount ? booked[0].amount : 0;
      return 30 - amount;
    },
  },
};

export default store;
