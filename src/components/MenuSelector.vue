<template>
  <v-row align="center">
    <v-col class="d-flex justify-center align-center" cols="6" sm="4">
      <v-btn type="button" @click="$emit('changeMenu', 'children')">Barnmeny</v-btn>
    </v-col>
    <v-col class="d-flex justify-center align-center" cols="6" sm="4">
      <v-btn type="button" @click="$emit('changeMenu', 'adults')">Vuxenmeny</v-btn>
    </v-col>
    <v-col class="d-flex justify-center align-center" cols="12" sm="4">
      <v-btn type="button" @click="$emit('changeMenu', 'couple')">Parmeny</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'menuSelector',
};
</script>

<style lang="scss" scoped>
.v-btn {
  height: 56px;
  width: 100%;
}
</style>
