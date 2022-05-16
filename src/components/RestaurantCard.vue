<template>
  <v-row align="center">
    <v-col
      class="d-flex justify-center align-center"
      cols="12"
      sm="6"
      lg="4"
      v-for="(item, index) in data"
      :key="item.title + index"
    >
      <v-card class="mx-auto elevation-1 mt-7" width="360">
        <v-img :src="item.img" height="240px" cover></v-img>

        <v-card-title> {{ item.title }} </v-card-title>

        <v-card-subtitle> {{ item.sub }} </v-card-subtitle>

        <v-card-actions>
          <v-btn color="orange-lighten-2" variant="text"> Info </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            :icon="show[index] ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show[index] = !show[index]"
          ></v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show[index]">
            <v-divider></v-divider>

            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" lg="12" class="d-flex justify-center align-center">
      <v-card class="cardInfo mt-7 elevation-1">
        <div class="cardOverlayer d-flex justify-center align-center">
          <div>
            <v-card-title class="d-flex justify-center"> Allergi eller Intollerans? </v-card-title>

            <v-card-subtitle class="d-flex justify-center text-high-emphasis">
              Kontakta oss inom personal vid frågor!
            </v-card-subtitle>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'RestaurantCard',
  data: () => {
    return {
      show: [false, false, false],
      data: [
        { title: 'Vegetarisk & Hälsosam', sub: '100% renodlade produkter', img: require('../assets/food3.jpg') },
        { title: 'Asiatisk & Mellanöster', sub: 'Kryddstarka och smakrika', img: require('../assets/food2.jpg') },
        { title: 'Amerikans & BBQ', sub: 'För den hungrige', img: require('../assets/food1.jpg') },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.cardInfo {
  background-image: url('../assets/intolerant.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 7rem;
  width: 100%;
}

.cardOverlayer {
  background-color: rgba(250, 250, 250, 0.603);
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 1279px) {
  .cardInfo {
    height: 373px;
    max-width: 360px;
  }
}
</style>
