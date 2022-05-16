const store = {
  state: () => ({
    bookingDate: { date: '', time: '' },
  }),
  mutations: {
    addRestaurantBookingDate(state, payload) {
      state.bookingDate = payload;
      console.log(state.bookingDate);
    },
  },
  actions: {},
  getters: {},
};

export default store;
