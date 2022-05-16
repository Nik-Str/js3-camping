<template>
  <v-app>
    <v-main>
      <navbarView />
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import navbarView from './components/navbarView.vue';
export default {
  name: 'App',
  components: {
    navbarView
  },

  data: () => ({

    //
  }),
}
</script>
