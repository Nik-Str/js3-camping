<template>
  <v-footer dark padless class="footer">
    <v-card flat tile class="lighten-1 footer white--text text-center w-100">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-container>
        <v-row align="center">
          <v-col class="d-flex justify-center align-center" cols="12" md="4">
            <div>
              <p class="font-weight-bold text-center">Boende</p>
              <p>Lediga boendeformer V.16</p>
              <p>Stugor: {{ getAmountOfBookedCabin }}st</p>
              <p>Tältplatser: {{ getAmountOfBookedTent }}st</p>
              <p>Husvagnplatser: {{ getAmountOfBookedCaravan }}st</p>
            </div>
          </v-col>
          <v-col class="d-flex justify-center align-center" cols="12" md="4">
            <div>
              <p class="font-weight-bold text-center">Restaurang</p>
              <p>Platser i restaurang lediga idag</p>
              <ul>
                <li v-for="(item, index) in getAmountOfBookedRestaurant" :key="item.time + index">
                  Kl: {{ item.time }}: {{ item.amount - 12 }}st
                </li>
              </ul>
            </div>
          </v-col>
          <v-col class="d-flex justify-center align-center" cols="12" md="4">
            <div>
              <p class="font-weight-bold text-center">Spa</p>
              <p>Leda platser på klasser idag</p>
              <p>Yoga: {{ getAmountOfBookedYoga }}</p>
              <p>Utomhus Yoga: {{ getAmountOfBookedYogaOutdoor }}</p>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <v-divider></v-divider>

      <v-card-text class="white--text"> {{ new Date().getFullYear() }} — <strong>Javascript 3</strong> </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
  }),
  computed: {
    ...mapGetters([
      'getAmountOfBookedCabin',
      'getAmountOfBookedTent',
      'getAmountOfBookedCaravan',
      'getAmountOfBookedRestaurant',
      'getAmountOfBookedYoga',
      'getAmountOfBookedYogaOutdoor',
    ]),
  },
};
</script>

<style scoped>
.footer {
  background-color: indigo;
  color: white;
  opacity: 95%;
}

ul {
  list-style-type: none;
}
</style>
