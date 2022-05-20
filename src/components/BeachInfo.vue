<template>
  <v-list density="compact" nav>
    <div v-for="item in beach" :key="item.title">
      <v-list-item lines="two">
        <v-list-item-header>
          <v-list-item-title class="text-subtitle-2">{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle class="text-subtitle-2">{{ item.sub }}</v-list-item-subtitle>
        </v-list-item-header>
        <div class="d-flex">
          <v-icon
            v-for="icon in item.enable"
            :key="icon"
            :icon="icon"
            class="mr-1"
            :style="{ color: 'grey', fontSize: '1rem' }"
          />
        </div>
      </v-list-item>
      <v-divider></v-divider>
    </div>
  </v-list>
</template>

<script>
export default {
  name: 'BeachInfo',
  data() {
    return {
      beach: [
        {
          title: 'Böda Strand: Norr',
          sub: '600m långgrunt område, passande för familjer med barn',
          enable: ['mdi-food', 'mdi-toilet', 'mdi-dumbbell'],
        },
        {
          title: 'Homrevet',
          sub: '2000m kullerstenstrand med avskild miljö och möjlighet till fiske',
          enable: ['mdi-toilet', 'mdi-fish'],
        },
        {
          title: 'Lyckesand',
          sub: '1000m sandstrand, möjlighet till pool och solstol',
          enable: ['mdi-food', 'mdi-toilet', 'mdi-seat'],
        },
        {
          title: 'Böda Beach',
          sub: '3000m sandstrand, pool, gym, spa, tennis och nära till shopping',
          enable: ['mdi-food', 'mdi-toilet', 'mdi-dumbbell', 'mdi-tennis', 'mdi-bed'],
        },
        {
          title: 'Böda Strand: Syd',
          sub: '800m sandstrand, med möjligheter till gold, minigolf, paddel och husvagn',
          enable: ['mdi-toilet', 'mdi-tennis', 'mdi-golf-cart', 'mdi-caravan'],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.v-list-item {
  padding: 0 !important;
  padding-top: 2rem !important;
  min-height: auto;
}
</style>
