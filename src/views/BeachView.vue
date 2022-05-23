<template>
  <div class="backgroundImg">
    <div class="d-flex justify-center text-white text-center align-center" :style="{ height: '35vh' }">
      <div>
        <h1 class="text-h3 font-weight-bold"><v-icon icon="mdi-swim" />STRAND KARTA</h1>
        <h3 class="text-h6 font-weight-bold font-italic">Nära till flera stränder med olika atmosfär</h3>
      </div>
    </div>
  </div>

  <v-container fluid>
    <Maps class="mt-4" :markers="markers" />
    <BeachInfo class="mb-8" />
  </v-container>
</template>

<script>
import Maps from '../components/Maps.vue';
import BeachInfo from '../components/BeachInfo.vue';

export default {
  name: 'BeachView',
  data() {
    return {
      markers: [
        {
          position: {
            lat: 57.27456066053389,
            lng: 17.052761773588667,
          },
        },

        {
          position: {
            lat: 57.28423060155824,
            lng: 17.06167735672246,
          },
        },
        {
          position: {
            lat: 57.3016871692964,
            lng: 17.08956625371586,
          },
        },
        {
          position: {
            lat: 57.25867864347498,
            lng: 17.05556713839516,
          },
        },
        {
          position: {
            lat: 57.309649533807644,
            lng: 17.114712416148954,
          },
        },
      ],
    };
  },
  components: {
    Maps,
    BeachInfo,
  },
};
</script>

<style lang="scss" scoped>
.backgroundImg {
  background-image: url('../assets/activities_sm.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 3rem;
  padding-top: 10vh;
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
