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
        @click="handleSelected(item)"
        v-bind:class="{ 'bg-black': selected === item }"
      >
        <v-list-item-header>
          <v-list-item-title>{{ item.date + ':' + item.time }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.amount }} platser</v-list-item-subtitle>
        </v-list-item-header>
        <p class="text-body-2">{{ item.price }}kr</p>
      </v-list-item>

      <!-- <v-list-item prepend-icon="mdi-home" title="Cabin"></v-list-item> -->
      <!-- <v-list-item prepend-icon="mdi-account" title="Spa"></v-list-item> -->

      <v-list-item title="Total:" class="mb-4"
        ><p class="text-body-2 text-decoration-underline">{{ getRestaurantTotal }}kr</p>
      </v-list-item>
    </v-list>

    <div class="checkout">
      <v-icon v-if="selected" large color="black" class="mb-4 deleteIcon" @click="handleRemoveRestaurant"
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
      selected: null,
    };
  },
  props: ['display'],
  methods: {
    handleSelected(item) {
      if (this.selected !== item) {
        this.selected = item;
      } else {
        this.selected = null;
      }
    },
    handleRemoveRestaurant() {
      this.$store.commit('removeRestaurantBookingCart', this.selected);
      this.selected = null;
    },
  },
  computed: {
    ...mapGetters(['getRestaurantTotal']),
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
