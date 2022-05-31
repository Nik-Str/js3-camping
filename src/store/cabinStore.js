const store = {
  state: () => ({
    cabinBooked: [{ week: 16, type: 'Stuga', amount: 1 }],
    cabinCart: [],
    message: 'Boka ditt boende här nedanför:',
  }),
  mutations: {
    addCabinBook(state, payload) {
      let price;

      if (payload.type === 'Stuga') price = 999;
      if (payload.type === 'Husvagnplats') price = 749;
      if (payload.type === 'Tältplats') price = 499;

      const existInBooking = state.cabinBooked.filter(
        (item) => item.week === payload.week && item.type === payload.type
      );
      const existInCart = state.cabinCart.filter((item) => item.week === payload.week && item.type === payload.type);
      const validateAmount = (amount) => {
        const booked = existInBooking[0]?.amount ? existInBooking[0].amount : 0;
        const cart = existInCart[0]?.amount ? existInCart[0].amount : 0;
        return booked + cart + 1 <= amount ? true : false;
      };
      const addToCartSingel = () => state.cabinCart.push({ ...payload, price: price, amount: 1 });
      const addToCartExisting = () => {
        state.cabinCart = state.cabinCart.map((item) => {
          if (item.week === payload.week && item.type === payload.type) {
            return { ...item, amount: item.amount + 1, price: item.price + price };
          } else {
            return item;
          }
        });
      };
      const addError = () => (state.message = `Tyvärr är ${payload.type} fullbokade den veckan!`);
      const addSuccess = () => (state.message = 'Din bokning finns nu i kundvagnen!');
      const resetMessage = () => (state.message = 'Boka ditt boende här nedanför:');

      if (existInBooking.length >= 1 || existInCart.length >= 1) {
        //Stuga
        if (payload.type === 'Stuga') {
          if (validateAmount(5)) {
            if (existInCart[0]) {
              addToCartExisting();
            } else {
              addToCartSingel();
            }
            addSuccess();
          } else {
            //Type är fullbokad på angivet datum
            addError();
          }
        }

        //Husvagnplats
        if (payload.type === 'Husvagnplats') {
          if (validateAmount(20)) {
            if (existInCart[0]) {
              addToCartExisting();
            } else {
              addToCartSingel();
            }
            addSuccess();
          } else {
            //Type är fullbokad på angivet datum
            addError();
          }
        }

        //Tältplats
        if (payload.type === 'Tältplats') {
          if (validateAmount(10)) {
            if (existInCart[0]) {
              addToCartExisting();
            } else {
              addToCartSingel();
            }
            addSuccess();
          } else {
            //Type är fullbokad på angivet datum
            addError();
          }
        }
      } else {
        addToCartSingel();
        addSuccess();
      }
      setTimeout(() => {
        resetMessage();
      }, 5000);
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
    getAmountOfBookedCabin(state) {
      const booked = state.cabinBooked.filter((item) => item.week === 16 && item.type === 'Stuga');
      console.log(booked);
      return booked[0].amount;
    },
  },
};

export default store;
