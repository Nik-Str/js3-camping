const store = {
  state: () => ({
    Spa: [
      {
        title: 'Massage',
        img: require('../assets/SpaIMG/massage.jpg') ,
        info: 'Massage för en person'
      },
      {
        title: 'Yoga',
        img: require('../assets/SpaIMG/massage.jpg'), 
        info: 'Yoga för en person'
      },
      {
        title: 'Hot-Stone',
        img: require('../assets/SpaIMG/massage.jpg'), 
        info: 'Massage med stenar'
      },
      {
        title: 'akupunktur',
        img: require('../assets/SpaIMG/massage.jpg'), 
        info: 'Nålar'
      },
      {
        title: 'Hård massage',
        img: require('../assets/SpaIMG/massage.jpg'),
        info: 'massage'
      },
      {
        title: 'Kassikt massage',
        img: require('../assets/SpaIMG/massage.jpg'),
        info: 'massage'
      }
    ],
  }),
  mutations: {},
  actions: {},
  getters: {},
};

export default store;
