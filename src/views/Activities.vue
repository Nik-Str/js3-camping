<template>
  <div class="backgroundImg">
    <div class="d-flex justify-center text-white text-center align-center" :style="{ height: '35vh' }">
      <div>
        <h1 class="text-h3 font-weight-bold">AKTIVITETER FÖR HELA FAMILJEN</h1>
        <h3 class="text-h6 font-weight-bold font-italic">Sola, bada och välj bland flera olika aktiviteter</h3>
      </div>
    </div>
  </div>

  <v-container fluid>
    <ActivitiesCard class="mb-3" :data="activities" />
  </v-container>
</template>

<script>
import ActivitiesCard from '../components/ActivitiesCard.vue';

export default {
  name: 'Activities',
  data() {
    return {
      activities: [
        { title: 'Mat & Dryck', sub: 'Bred variation från väldens alla hörn', img: require('@/assets/food1.jpg') },
        {
          title: 'Träning & Hälsa',
          sub: 'Allt från utegym, joggingspår, paddel, mm',
          img: require('@/assets/activities_training.jpg'),
        },
        {
          title: 'Spa & Skönhet',
          sub: 'Välj mellan olika behandlingar',
          img: require('@/assets/activities_spa.jpg'),
        },
        {
          title: 'Sol & Bad',
          sub: 'Havet, pool och närliggande sjöar',
          img: require('@/assets/activities_swimming.jpg'),
        },
        {
          title: 'Lekland & Äventyr',
          sub: 'Aktiviteter för de mindre',
          img: require('@/assets/activities_playground.jpg'),
        },
        {
          title: 'Vin & Ölprovning',
          sub: 'Vidga din vyer och testa något nytt',
          img: require('@/assets/activities_drinks.jpg'),
        },
        {
          title: 'Kultur & Musik',
          sub: 'Blandat artister och inspiratörer',
          img: require('@/assets/activities_music.jpg'),
        },
        {
          title: 'Natur & Friluftsliv',
          sub: 'Guidade turer och vandringsled',
          img: require('@/assets/activities_nature.jpg'),
        },
        {
          title: 'Kläder & Shopping',
          sub: 'Nära till shoppingcenter',
          img: require('@/assets/activities_shopping.jpg'),
        },
      ],
    };
  },
  components: {
    ActivitiesCard,
  },
};
</script>

<style lang="scss" scoped>
.backgroundImg {
  background-image: url('../assets/activities_bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.closeBy {
  background-image: url('../assets/activities_sm.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 7rem;
  width: 100%;
}

.closeByOverlayer {
  background-color: rgba(250, 250, 250, 0.903);
  width: 100%;
  height: 100%;
}

.v-container {
  max-width: 60vw;
}

@media only screen and (max-width: 960px) {
  .v-container {
    max-width: 100vw;
  }
}
</style>
