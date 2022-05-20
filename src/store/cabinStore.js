const store = {
  state: () => ({
    cabins: [
      {
        title: 'Afterbeach-stugan',
        img: require('../assets/cabinIMG/cabin1.jpeg') ,
        trailer: 'Afterbeach-stugan',
        value: 'cabin',
        info: 'Två stycken Parstugor om 2x9 kvm med 2 st sängar med resårbäddmadrasser (90x200), kylskåp, vattenkokare samt nödvändig porslin och köksgeråd för två personer. Djurtillåten'
      },
      {
        title: 'Semester-stugan',
        img: require('../assets/cabinIMG/cabin2.jpeg'), 
        trailer: 'Semester-stugan',
        value: 'caravan',
        info: 'Två stycken Parstugor om 2x9 kvm med 2 st sängar med resårbäddmadrasser (90x200), kylskåp, vattenkokare samt nödvändig porslin och köksgeråd för två personer. Djurtillåten'
      },
      {
        title: 'Strand-stugan',
        img: require('../assets/cabinIMG/cabin3.jpeg'), 
        value: 'tent',
        trailer: 'Strand-stugan',
        info: 'Strand-stugan'
      },
      {
        title: 'Glass-stugan',
        img: require('../assets/cabinIMG/cabin4.jpeg'), 
        trailer: 'Glass-stugan',
        info: 'Glass-stugan'
      },
      {
        title: 'Cykel-stugan',
        img: require('../assets/cabinIMG/cabin5.jpeg'),
        trailer: 'Cykel-stugan',
        info: 'Cykel-stugan'
      },
      {
        title: 'Grill-stugan',
        img: require('../assets/cabinIMG/cabin6.jpeg'),
        trailer: 'Grill-stugan',
        info: 'Grill-stugan'
      }
    ],

    tent: [
      {
        space: 1,
        booked: 'false',
      },
      {
        space: 2,
        booked: 'false',
      },
      {
        space: 3,
        booked: 'false',
      },
      {
        space: 4,
        booked: 'false',
      },
      {
        space: 5,
        booked: 'false',
      },
    ]
  }),
  mutations: {},
  actions: {},
  getters: {},
};

export default store;
