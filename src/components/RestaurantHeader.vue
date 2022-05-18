<template>
  <div class="d-flex justify-center text-white text-center align-center" :style="{ height: '25vh' }">
    <div>
      <h1 class="text-h3 font-weight-bold">RESTAURANG DELUX</h1>
      <h3 class="text-h6 font-weight-bold font-italic">Med inspiration från hela världen</h3>
      <router-link :to="`/${link}`" class="text-white">
        <h4 class="font-weight-medium font-italic">{{ linkText }}</h4>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestaurantHeader',
  props: {
    link: String,
    linkText: String,
  },
};
</script>
