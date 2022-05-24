<template>
  <v-navigation-drawer v-model="display" temporary position="right">
    <h3 class="text-center my-4"><v-icon large color="black">mdi-cart</v-icon></h3>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        lines="two"
        prepend-icon="mdi-food-apple"
        v-for="(item, index) in $store.state.restaurant.bookingCart"
        :key="item.time + index"
        :value="{ item }"
        @click="handleSelectedFood(item)"
        v-bind:class="{ 'bg-black': selectedFood === item }"
      >
        <v-list-item-header>
          <v-list-item-title>{{ item.date + ':' + item.time }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.amount }} platser</v-list-item-subtitle>
        </v-list-item-header>
        <p class="text-body-2">{{ item.price }}kr</p>
      </v-list-item>

      <v-list-item
        lines="two"
        prepend-icon="mdi-home"
        v-for="(item, index) in $store.state.cabin.cabinCart"
        :key="item.date + index"
        :value="{ item }"
        @click="handleSelectedCabin(item)"
        v-bind:class="{ 'bg-black': selectedCabin === item }"
      >
        <v-list-item-header>
          <v-list-item-title>{{ item.date + ':' + item.days }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.place }}</v-list-item-subtitle>
        </v-list-item-header>
        <p class="text-body-2">{{ item.price }}kr</p>
      </v-list-item>

      <!-- <v-list-item prepend-icon="mdi-account" title="Spa"></v-list-item> -->

      <v-list-item title="Total:" class="mb-4"
        ><p class="text-body-2 text-decoration-underline">{{ getRestaurantTotal + getCabinTotal }}kr</p>
      </v-list-item>
    </v-list>

    <div class="checkout">
      <v-icon v-if="selectedFood" large color="black" class="mb-4 deleteIcon" @click="handleRemoveRestaurant"
        >mdi-delete</v-icon
      >
      <v-icon v-if="selectedCabin" large color="black" class="mb-4 deleteIcon" @click="handleRemoveCabin"
        >mdi-delete</v-icon
      >
      <div>
        <v-btn class="mb-3 px-10" color="black">Checkout </v-btn>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Cart',
  data() {
    return {
      selectedFood: null,
      selectedCabin: null,
    };
  },
  props: ['display'],
  methods: {
    handleSelectedFood(item) {
      if (this.selectedFood !== item) {
        this.selectedFood = item;
        this.selectedCabin = null;
      } else {
        this.selectedFood = null;
      }
    },
    handleRemoveRestaurant() {
      this.$store.commit('removeRestaurantBookingCart', this.selectedFood);
      this.selectedFood = null;
    },
    handleSelectedCabin(item) {
      if (this.selectedCabin !== item) {
        this.selectedCabin = item;
        this.selectedFood = null;
      } else {
        this.selectedCabin = null;
      }
    },
    handleRemoveCabin() {
      this.$store.commit('removeCabinBookingCart', this.selectedCabin);
      this.selectedCabin = null;
    },
  },
  computed: {
    ...mapGetters(['getRestaurantTotal', 'getCabinTotal']),
  },
};
</script>

<style lang="scss" scoped>
.checkout {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;

  .deleteIcon {
    transition: 0.5s;
  }

  .deleteIcon:hover {
    cursor: pointer !important;
    font-size: 1.8rem;
  }

  div {
    display: flex;
    justify-content: center !important;
  }
}
</style>
