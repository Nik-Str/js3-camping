import allMenu from './menu';

const store = {
  state: () => ({
    bookingDate: [
      { date: '3/6-2022', time: '11:00', amount: 4, price: 100 },
      { date: '3/6-2022', time: '12:00', amount: 2, price: 100 },
    ],
    bookingCart: [],
    bookingError: '',
    menu: [],
  }),
  mutations: {
    //Handles booking validation and confirmation
    addRestaurantBookingCart(state, payload) {
      const existInBooking = state.bookingDate.filter(
        (item) => item.date === payload.date && item.time === payload.time
      );
      const existInCart = state.bookingCart.filter((item) => item.date === payload.date && item.time === payload.time);

      //Controlls if spec of booking input already exist
      if (existInCart[0] || existInBooking[0]) {
        const alreadyBooked = existInBooking[0] ? existInBooking[0].amount : 0;

        //Validates booking spec if similar already exist in cart
        if (existInCart[0]) {
          //Controlls amount against existing bookings
          if (existInCart[0].amount + payload.amount + alreadyBooked <= 12) {
            state.bookingCart = state.bookingCart.map((item) => {
              //Increment cart item amount on existing spec
              if (item.date === payload.date && item.time === payload.time) {
                return { ...item, amount: item.amount + payload.amount };
                //Add new item to cart
              } else {
                return item;
              }
            });
            //Add error msg if reach booking amount limit
          } else {
            if (existInCart[0].amount + alreadyBooked < 12) {
              state.bookingError = `${existInCart[0].date} kl. ${existInCart[0].time} finns endast ${
                12 - existInCart[0].amount - alreadyBooked
              } platser kvar i restaurangen.`;
            } else {
              state.bookingError = `${existInCart[0].date} kl. ${existInCart[0].time} är restaurangen fullbokad.`;
            }
          }
          //Validates booking spec if similar already exist in system but not in cart
        } else {
          //Controlls amount against system bookings
          if (payload.amount + alreadyBooked <= 12) {
            //Add new item to cart
            state.bookingCart = [{ ...payload, price: 100 }];
            //Add error msg if reach limit
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
        //Adds new booking to cart
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
  getters: {
    getRestaurantTotal(state) {
      let total = 0;
      for (let i = 0; i < state.bookingCart.length; i++) {
        total = total + state.bookingCart[i].price;
      }
      return total;
    },
    getAmountOfBookedRestaurant(state) {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      const day = today.getDate();
      const thisDay = day + '/' + month + '-' + year;

      const booked = state.bookingDate.filter((item) => item.date === thisDay);
      return booked;
    },
  },
};

export default store;
