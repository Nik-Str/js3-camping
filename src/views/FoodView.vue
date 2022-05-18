<template>
  <div class="backgroundImg">
    <RestaurantHeader link="restaurant" linkText="Boka bord" />
    <v-container fluid>
      <MenuSelector :style="{ paddingBottom: '3vh' }" @changeMenu="changeMenu" />
    </v-container>
  </div>
  <v-container fluid>
    <Menu />
  </v-container>
</template>

<script>
import RestaurantHeader from '../components/RestaurantHeader.vue';
import MenuSelector from '../components/MenuSelector.vue';
import Menu from '../components/Menu.vue';

export default {
  name: 'Food',
  components: {
    RestaurantHeader,
    MenuSelector,
    Menu,
  },
  methods: {
    changeMenu(menu) {
      this.$store.commit('setMenu', menu);
    },
  },
  mounted() {
    this.$store.commit('setMenu', 'adults');
  },
};
</script>

<style lang="scss" scoped>
.backgroundImg {
  background-image: url('../assets/restaurant_bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
