<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view />
      <Cart :display="modal" />
      <v-btn color="white" class="elevation-4 rounded-circle modalBtn" @click.stop="modal = !modal">
        <v-icon size="x-large" color="black">mdi-cart</v-icon>
      </v-btn>
    </v-main>
    <Footer class="mt-8" />
  </v-app>
</template>

<script>
import Cart from './components/Cart.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/footer.vue';
export default {
  name: 'App',
  data() {
    return {
      modal: null,
    };
  },
  components: {
    Cart,
    Navbar,
    Footer,
  },
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
  z-index: 99;
  height: 3.5rem !important;
}

.v-navigation-drawer__scrim {
  background: rgba(0, 0, 0, 0.3) !important;
}
</style>
