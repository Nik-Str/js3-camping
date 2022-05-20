<template>
  <v-app>
    <v-main>
      <navbarView />
      <router-view />
      <Cart :display="modal" />
      <v-btn color="white" class="elevation-4 rounded-circle modalBtn" @click.stop="modal = !modal">
        <v-icon size="x-large" color="black">mdi-cart</v-icon>
      </v-btn>

    </v-main>
  </v-app>
</template>

<script>

import Cart from './components/Cart.vue';
import navbarView from './components/navbarView.vue';
export default {
  name: 'App',
  data() {
    return {
      modal: null,
    };
  },
  components: {
    Cart,
    navbarView
  },
  data: () => ({

    //
  }),
};
</script>

<style lang="scss">
.v-text-field {
  .v-input__details {
    display: none !important;
  }
}

.modalBtn {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 1rem;
  height: 3.5rem !important;
}
</style>
