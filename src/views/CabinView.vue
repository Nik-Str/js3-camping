<template>
  <div class="header">
    <div class="text">
      <h1>VÄLKOMMEN TILL NORRLANDS PÄRLA</h1>
      <p>Drop in säsongsplatser & stugor öppet året runt</p>
    </div>
    <div class="buttons">
      <v-btn elevation="2" outlined>Plats för husvagn</v-btn>
      <v-btn elevation="2" outlined>Tältplats</v-btn>
    </div>
  </div>

  <div class="container">
    <div class="card" v-for="(cabin, index) in $store.state.cabin.cabins" :key="index">
      <CabinCard :text="cabin.title" :info="cabin.info" :title="cabin.trailer" :img="cabin.img" class="cabin" />
    </div>
  </div>
</template>

<script>
import CabinCard from '@/components/CabinCard.vue';
import CabinForm from '@/components/CabinForm.vue';
export default {
  components: {
    CabinCard,
    CabinForm,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.header {
  width: 100%;

  height: 600px;
  background-image: url('@/assets/cabinIMG/headerimg.jpeg');
  background-position: center;
  background-size: cover;

  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: Georgia, 'Times New Roman', Times, serif;
  padding: 5rem;
}

.text {
  color: white;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.4);
  height: 150px;
}

.buttons {
  width: 400px;
  display: flex;
  justify-content: space-around;
}
</style>
