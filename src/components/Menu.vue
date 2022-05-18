<template>
  <v-list density="compact" nav>
    <div v-for="item in $store.state.restaurant.menu" :key="item.id + item.category">
      <v-list-item lines="two">
        <v-list-item-header>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.ingredients }}</v-list-item-subtitle>
        </v-list-item-header>
        <p class="text-body-2">{{ item.price }}kr</p> </v-list-item
      ><v-divider></v-divider>
    </div>
  </v-list>
</template>

<script>
export default {
  name: 'Menu',
};
</script>

<style lang="scss" scoped>
.v-list-item {
  padding: 0 !important;
  padding-top: 2rem !important;
  min-height: auto;
}
</style>
