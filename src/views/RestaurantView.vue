<template>
  <div>
    <div class="backgroundImg">
      <div class="d-flex justify-center text-white text-center align-center" :style="{ height: '25vh' }">
        <div>
          <h1 class="text-h3 font-weight-bold">RESTAURANG DELUX</h1>
          <h3 class="text-h6 font-weight-bold font-italic">Med inspiration från hela världen</h3>
        </div>
      </div>

      <v-container fluid>
        <RestaurantForm :style="{ paddingBottom: '3vh' }" />
      </v-container>
    </div>
    <v-container fluid>
      <RestaurantCard />
    </v-container>
  </div>
</template>

<script>
import RestaurantForm from '../components/RestaurantForm.vue';
import RestaurantCard from '../components/RestaurantCard.vue';

export default {
  name: 'Restaurant',
  components: {
    RestaurantForm,
    RestaurantCard,
  },
};
</script>

<style lang="scss" scoped>
.v-container {
  max-width: 60vw;
}

.backgroundImg {
  background-image: url('../assets/restaurant_bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

@media only screen and (max-width: 960px) {
  .v-container {
    max-width: 100vw;
  }
}
</style>
