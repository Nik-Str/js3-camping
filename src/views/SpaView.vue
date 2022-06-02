<template>
  <div class="backgroundImg">
    <div class="d-flex justify-center text-white text-center align-center" :style="{ height: '35vh' }">
      <div>
        <h1 class="text-h3 font-weight-bold">SPA OCH MASSAGE</h1>
        <h3 class="text-h6 font-weight-bold font-italic">Massage, yoga, bad och bastu</h3>
        
      </div>
    </div>
    <SpaForm />
  </div>

  <v-container fluid>
    <spacard class="mb-3" :data="spa" />
  </v-container>
</template>

<script>
import spacard from '../components/spacard.vue';
import SpaForm from '@/components/SpaForm.vue';

export default {
  name: 'spa',
  data() {
    return {
      spa: [
        { 
          title: 'Massage',
          sub: 'Välj mellan klassik och hård massage',
          img: require('@/assets/SpaIMG/massage.jpg'),
          price: '499'
          },          
        {
          title: 'Yoga',
          sub: 'Allt från utegym, joggingspår, paddel, mm',
          img: require('@/assets/SpaIMG/Yoga1.jpg'),
          price: '299'
        },
        {
          title: 'Hot-stone',
          sub: 'Avslappning med naturlig varma stenar',
          img: require('@/assets/SpaIMG/Hotstone.jpg'),
          price: '399'
        },
        {
          title: 'Grupp Yoga utomhus',
          sub: 'Yoga i grupp för hela familjen',
          img: require('@/assets/SpaIMG/GruppYoga.jpg'),
          price: '299'
        },
        {
          title: 'Spa, bad och bastu',
          sub: 'Slappna av själv, din kära eller hela familj med pool, spa och bastu',
          img: require('@/assets/SpaIMG/SpaBad.jpg'),
          price: '899'
        },
        {
          title: 'Utomhus bastu',
          sub: 'Ta ett dopp och värm upp dig i en av våra utomhus bastu',
          img: require('@/assets/SpaIMG/Bastu.jpg'),
          price: '799'
        },
      ],
    };
  },
  components: {
    spacard,
    SpaForm
},
};
</script>

<style lang="scss" scoped>
.backgroundImg {
  background-image: url('../assets/spa-background.jpg');


   width: 100%;
  margin-top: 20px;
  height: 600px;
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
