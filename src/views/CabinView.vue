<template>
  <div class="header">
    <div class="text">
      <h1 class="text-h3 font-weight-bold">NORRLANDS PÄRLA</h1>
      <h3 class="text-h6 font-weight-bold font-italic">Drop in säsongsplatser & stugor öppet året runt</h3>
    </div>
    <CabinForm />
  </div>
  <div class="container">
    <div class="cardDiv">
      <div class="card" v-for="(cabin, index) in cabins" :key="index">
        <CabinCard :text="cabin.title" :info="cabin.info" :title="cabin.trailer" :img="cabin.img" class="cabin" />
      </div>
    </div>
  </div>
</template>

<script>
import CabinCard from '@/components/CabinCard.vue';
import CabinForm from '@/components/CabinForm.vue';
export default {
  components: {
    CabinCard,
    CabinForm,
  },
  data() {
    return {
      cabins: [
        {
          title: 'Afterbeach-stugan',
          img: require('../assets/cabinIMG/cabin1.jpeg'),
          trailer: 'Afterbeach-stugan',
          value: 'cabin',
          info: 'Två stycken Parstugor om 2x9 kvm med 2 st sängar med resårbäddmadrasser (90x200), kylskåp, vattenkokare samt nödvändig porslin och köksgeråd för två personer. Djurtillåten',
          type: 'cabin',
        },
        {
          title: 'Semester-stugan',
          img: require('../assets/cabinIMG/cabin2.jpeg'),
          trailer: 'Semester-stugan',
          value: 'caravan',
          info: 'Två stycken Parstugor om 2x9 kvm med 2 st sängar med resårbäddmadrasser (90x200), kylskåp, vattenkokare samt nödvändig porslin och köksgeråd för två personer. Djurtillåten',
          type: 'cabin',
        },
        {
          title: 'Strand-stugan',
          img: require('../assets/cabinIMG/cabin3.jpeg'),
          value: 'tent',
          trailer: 'Strand-stugan',
          info: 'Mysig strand-stugan med nära till badplats och restaurang.',
          type: 'cabin',
        },
        {
          title: 'Glass-stugan',
          img: require('../assets/cabinIMG/cabin4.jpeg'),
          trailer: 'Glass-stugan',
          info: 'Glass-stugan passar utmärkt för barnfamiljer, eller den som älskar glass!',
          type: 'cabin',
        },
        {
          title: 'Husvagns-plats',
          img: require('../assets/cabinIMG/caravan.jpg'),
          trailer: 'Husvagns-plats',
          info: 'Varierande läge på campingen i mån av plats.',
          type: 'caravan',
        },
        {
          title: 'Tält-plats',
          img: require('../assets/cabinIMG/tent.jpg'),
          trailer: 'Tält-plats',
          info: 'Våra tältplatser ligger på campngens östra sida, med gångavstånd till badplats.',
          type: 'tent',
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.cardDiv {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 70vw;
}

.header {
  width: 100%;
  margin-top: 20px;
  background-image: url('@/assets/cabinIMG/headerimg.jpeg');
  background-position: center;
  background-size: cover;
  padding-top: 10rem;
}

.text {
  color: white;
  text-align: center;
}
</style>
