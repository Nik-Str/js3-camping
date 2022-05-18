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
    <div class="elevation-1 rounded-lg closeBy mb-4">
      <div class="closeByOverlayer d-flex justify-center align-center text-center">
        <h2 class="text-h4 text-white font-weight-bold">NÄRLIGGANDE BADPLATSER</h2>
      </div>
    </div>
    <Maps />
  </v-container>
</template>

<script>
import Maps from '../components/Maps.vue';
import ActivitiesCard from '../components/ActivitiesCard.vue';

export default {
  name: 'Activities',
  data() {
    return {
      activities: [
        { title: 'Mat & Dryck', sub: 'Bred variation från väldens alla hörn', img: require('@/assets//food1.jpg') },
      ],
    };
  },
  components: {
    Maps,
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
  background-color: rgba(250, 250, 250, 0.503);
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
