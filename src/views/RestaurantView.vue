<template>
  <div>
    <div class="backgroundImg">
      <RestaurantHeader link="food" linkText="Se vår meny" />
      <v-container fluid>
        <RestaurantForm :style="{ paddingBottom: '3vh' }" />
      </v-container>
    </div>
    <v-container fluid>
      <RestaurantCard />
    </v-container>

    <v-snackbar v-model="msgErr" multi-line color="white" absolute right top elevation="24" :style="{ zIndex: 2000 }">
      {{ bookingError }}
      <template v-slot:actions>
        <v-btn color="orange" variant="text" @click="closeMsgErr"> Ok </v-btn>
      </template>
    </v-snackbar>

    <v-snackbar v-model="msgCart" multi-line color="white" absolute right top elevation="24" :style="{ zIndex: 2000 }">
      En ny bokning har lagts till i din varukorg!
      <template v-slot:actions>
        <v-btn color="orange" variant="text" @click="closeMsgAdd"> Ok </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import RestaurantForm from '../components/RestaurantForm.vue';
import RestaurantCard from '../components/RestaurantCard.vue';
import RestaurantHeader from '../components/RestaurantHeader.vue';
import { mapState } from 'vuex';

export default {
  name: 'Restaurant',
  data() {
    return {
      msgErr: false,
      msgCart: false,
    };
  },
  components: {
    RestaurantForm,
    RestaurantCard,
    RestaurantHeader,
  },
  computed: {
    ...mapState({
      bookingError: (state) => state.restaurant.bookingError,
      bookingCart: (state) => state.restaurant.bookingCart,
    }),
  },
  methods: {
    closeMsgErr() {
      this.msgErr = false;
      this.$store.commit('resetError');
    },
    closeMsgAdd() {
      this.msgCart = false;
    },
  },
  watch: {
    bookingError(value) {
      if (value) {
        this.msgErr = true;
      }
    },
    bookingCart(value, old) {
      if (value.length > old.length || (value.length === old.length && value !== old)) {
        this.msgCart = true;
        setTimeout(() => {
          this.closeMsgAdd();
        }, 3000);
      }
    },
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
  padding-top: 10vh;
}

@media only screen and (max-width: 960px) {
  .v-container {
    max-width: 100vw;
  }
}
</style>
