<template>
  <v-card class="ma-8" width="360px">
    <v-img :src="img" height="200px"></v-img>

    <v-card-title> {{ title }} </v-card-title>

    <v-card-subtitle> {{ trailer }} </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange lighten-2" text> Läs mer!</v-btn>
      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          {{ info }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: ['title', 'info', 'trailer', 'img'],

  data: () => ({
    show: false,
  }),
};
</script>
