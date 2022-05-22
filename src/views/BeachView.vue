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
    <Maps class="mt-4" />
    <BeachInfo class="mb-8" />
  </v-container>
</template>

<script>
import Maps from '../components/Maps.vue';
import BeachInfo from '../components/BeachInfo.vue';

export default {
  name: 'BeachView',
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
