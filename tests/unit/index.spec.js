import Store from '../../src/store';

const store = Store;

const example1 = { date: '23/5-2022', time: '11:00', amount: 4, price: 100 };
const example2 = { date: '24/5-2022', time: '11:00', amount: 4, price: 100 };
const example3 = { date: '24/5-2022', time: '12:00', amount: 4, price: 100 };

describe('test mutation for booking restaurant', () => {
  //Add to cart
  test('add singel booking', () => {
    store.commit('addRestaurantBookingCart', example1);
    expect(store.state.restaurant.bookingCart).toEqual([example1]);
  });

  test('add more booking of same date', () => {
    store.commit('addRestaurantBookingCart', example1);
    expect(store.state.restaurant.bookingCart).toEqual([{ ...example1, amount: 8 }]);
  });

  test('add mutiple bookings of diffrent date', () => {
    store.commit('addRestaurantBookingCart', example2);
    expect(store.state.restaurant.bookingCart).toEqual([{ ...example1, amount: 8 }, example2]);
  });

  test('add booking of same date but diffrent time', () => {
    store.commit('addRestaurantBookingCart', example3);
    expect(store.state.restaurant.bookingCart).toEqual([{ ...example1, amount: 8 }, example2, example3]);
  });

  //Remove from cart
  test('remove single booking of same date and time', () => {
    store.commit('removeRestaurantBookingCart', { ...example1, amount: 8 });
    expect(store.state.restaurant.bookingCart).toEqual([example2, example3]);
  });

  test('remove single booking of same date but diffrent time', () => {
    store.commit('removeRestaurantBookingCart', example2);
    expect(store.state.restaurant.bookingCart).toEqual([example3]);
  });

  test('remove all booking', () => {
    store.commit('removeRestaurantBookingCart', example3);
    expect(store.state.restaurant.bookingCart).toEqual([]);
  });
});

describe('test getter for booking restaurant', () => {
  test('get total cart price of single booking', () => {
    store.commit('addRestaurantBookingCart', example1);
    expect(store.getters.getRestaurantTotal).toEqual(100);
  });

  test('get total cart price of multiple booking on same date and time', () => {
    store.commit('addRestaurantBookingCart', example1);
    expect(store.getters.getRestaurantTotal).toEqual(100);
    expect(store.state.restaurant.bookingCart).toEqual([{ ...example1, amount: 8 }]);
  });

  test('get total cart price of mutiple booking difrent date', () => {
    store.commit('addRestaurantBookingCart', example2);
    expect(store.getters.getRestaurantTotal).toEqual(200);
  });
});

describe('test validate if booking amount has reach limit', () => {
  test('if existing booking amount + booking cart amount on single day > 12', () => {
    store.commit('removeRestaurantBookingCart', example2);
    store.commit('addRestaurantBookingCart', example1);
    expect(store.state.restaurant.bookingCart).toEqual([{ ...example1, amount: 8 }]);
    expect(store.state.restaurant.bookingDate).toEqual([example1]);
    expect(store.state.restaurant.bookingError).toEqual('23/5-2022 kl. 11:00 är restaurangen fullbokad.');
  });
});

//npm run test:unit
