<template>
  <div class="backgroundImg">
    <RestaurantHeader link="restaurant" linkText="Boka bord" />
    <v-container fluid>
      <MenuSelector :style="{ paddingBottom: '3vh' }" @changeMenu="changeMenu" />
    </v-container>
  </div>
  <v-container fluid>
    <Menu>
      <template #menuTitle>
        <h4 class="text-center text-grey mb-0 pt-2">{{ selectedMenu }}</h4>
      </template>
    </Menu>
  </v-container>
</template>

<script>
import RestaurantHeader from '../components/RestaurantHeader.vue';
import MenuSelector from '../components/MenuSelector.vue';
import Menu from '../components/Menu.vue';

export default {
  name: 'Food',
  data() {
    return {
      selectedMenu: 'VUXENMENY',
    };
  },
  components: {
    RestaurantHeader,
    MenuSelector,
    Menu,
  },
  methods: {
    changeMenu(menu) {
      this.$store.commit('setMenu', menu);
      if (menu === 'adults') this.selectedMenu = 'VUXENMENY';
      if (menu === 'children') this.selectedMenu = 'BARNMENY';
      if (menu === 'couple') this.selectedMenu = 'PARMENY';
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
