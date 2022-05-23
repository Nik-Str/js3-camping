<template>
  <div class="backgroundImg">
    <div class="d-flex justify-center text-white text-center align-center" :style="{ height: '35vh' }">
      <div>
        <h1 class="text-h3 font-weight-bold">SPA OCH MASSAGE</h1>
        <h3 class="text-h6 font-weight-bold font-italic">massage, yoga och avslappnings övniningar för dig som behöver en slappna av </h3>
      </div>
    </div>
  </div>

  <v-container fluid>
    <spacard class="mb-3" :data="spa" />
  </v-container>
</template>

<script>
import spacard from '../components/spacard.vue';

export default {
  name: 'spa',
  data() {
    return {
      spa: [
        { 
          title: 'Massage',
          sub: 'Välj mellan klassik och hård massage',
          img: require('@/assets/SpaIMG/massage.jpg') },
        {
          title: 'Yoga',
          sub: 'Allt från utegym, joggingspår, paddel, mm',
          img: require('@/assets/SpaIMG/Yoga1.jpg'),
        },
        {
          title: 'Hot-stone',
          sub: 'Avslappning med naturlig varma stenar',
          img: require('@/assets/SpaIMG/Hotstone.jpg'),
        },
        {
          title: 'Grupp Yoga utomhus',
          sub: 'Yoga i grupp för hela familjen',
          img: require('@/assets/SpaIMG/GruppYoga.jpg'),
        },
        {
          title: 'Spa, bad och bastu',
          sub: 'Slappna av själv, din kära eller hela familj med pool, spa och bastu',
          img: require('@/assets/SpaIMG/SpaBad.jpg'),
        },
        {
          title: 'Utomhus bastu',
          sub: 'Ta ett dopp och värm upp dig i en ab våra utomhus bastu',
          img: require('@/assets/SpaIMG/Bastu.jpg'),
        },
      ],
    };
  },
  components: {
    spacard,
  },
};
</script>

<style lang="scss" scoped>
.backgroundImg {
  background-image: url('../assets/spa-background.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.closeBy {
  background-image: url('../assets/spa-background.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 7rem;
  width: 100%;
}

.closeByOverlayer {
  background-color: rgba(250, 250, 250, 0.903);
  width: 100%;
  height: 100%;
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
