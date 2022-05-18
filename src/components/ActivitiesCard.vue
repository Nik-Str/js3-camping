<template>
  <v-row align="center">
    <v-col
      class="d-flex justify-center align-center"
      cols="12"
      sm="6"
      lg="4"
      v-for="(item, index) in data"
      :key="item.title + index"
    >
      <v-card class="mx-auto elevation-1 mt-7" width="360">
        <v-img :src="item.img" height="240px" cover></v-img>

        <v-card-title class="justify-center"> {{ item.title }} </v-card-title>

        <v-card-subtitle class="pb-4 justify-center text-center"> {{ item.sub }} </v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ActivitiesCard',
  props: ['data'],
};
</script>

<style lang="scss" scoped></style>
