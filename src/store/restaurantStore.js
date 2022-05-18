import allMenu from './menu';

const store = {
  state: () => ({
    bookingDate: [{ date: '18/5-2022', time: '11:00', amount: 4, price: 100 }],
    bookingCart: [],
    bookingError: '',
    menu: [],
  }),
  mutations: {
    addRestaurantBookingCart(state, payload) {
      const existInBooking = state.bookingDate.filter(
        (item) => item.date === payload.date && item.time === payload.time
      );
      const existInCart = state.bookingCart.filter((item) => item.date === payload.date && item.time === payload.time);

      if (existInCart[0] || existInBooking[0]) {
        const alreadyBooked = existInBooking[0] ? existInBooking[0].amount : 0;

        if (existInCart[0]) {
          if (existInCart[0].amount + payload.amount + alreadyBooked <= 12) {
            state.bookingCart = state.bookingCart.map((item) => {
              if (item.date === payload.date && item.time === payload.time) {
                return { ...item, amount: item.amount + payload.amount };
              } else {
                return item;
              }
            });
          } else {
            if (existInCart[0].amount + alreadyBooked < 12) {
              state.bookingError = `${existInCart[0].date} kl. ${existInCart[0].time} finns endast ${
                12 - existInCart[0].amount - alreadyBooked
              } platser kvar i restaurangen.`;
            } else {
              state.bookingError = `${existInCart[0].date} kl. ${existInCart[0].time} är restaurangen fullbokad.`;
            }
          }
        } else {
          if (payload.amount + alreadyBooked <= 12) {
            state.bookingCart = [{ ...payload, price: 100 }];
          } else {
            if (alreadyBooked < 12) {
              state.bookingError = `${payload.date} kl. ${payload.time} finns endast ${
                12 - alreadyBooked
              } platser kvar i restaurangen.`;
            } else {
              state.bookingError = `${payload.date} kl. ${payload.time} är restaurangen fullbokad.`;
            }
          }
        }
      } else {
        state.bookingCart = [...state.bookingCart, { ...payload, price: 100 }];
      }
    },
    resetError(state) {
      state.bookingError = '';
    },
    removeRestaurantBookingCart(state, payload) {
      let filtered = [];
      for (let i = 0; i < state.bookingCart.length; i++) {
        if (state.bookingCart[i].date !== payload.date && state.bookingCart[i].time !== payload.time) {
          filtered.push(state.bookingCart[i]);
        } else if (state.bookingCart[i].date === payload.date && state.bookingCart[i].time !== payload.time) {
          filtered.push(state.bookingCart[i]);
        } else if (state.bookingCart[i].date !== payload.date && state.bookingCart[i].time === payload.time) {
          filtered.push(state.bookingCart[i]);
        }
      }
      state.bookingCart = filtered;
    },
    setMenu(state, payload) {
      const filteredMenu = allMenu.filter((item) => item.category === payload);
      const sorted = filteredMenu.sort((a, b) => a.price - b.price);
      state.menu = sorted;
    },
  },
  actions: {},
  getters: {
    getRestaurantTotal(state) {
      let total = 0;
      for (let i = 0; i < state.bookingCart.length; i++) {
        total = total + state.bookingCart[i].price;
      }
      return total;
    },
  },
};

export default store;
