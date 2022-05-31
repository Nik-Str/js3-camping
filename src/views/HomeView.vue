<template>
  <v-container class="container">
    <v-row>
      <v-col cols="8" class="header"> </v-col>
      <v-col cols="4" class="text">
        <h1>{{ header.title }}</h1>
        <p>
          {{ header.text }}
        </p>
        <router-link to="/cabin" class="li"
          >{{ header.button_text }}<fa icon="arrow-right"
        /></router-link>
      </v-col>
    </v-row>
    <v-row class="mt-10">
      <v-col cols="4" class="img1">
        </v-col>
      <v-col cols="8" class="text">
        <h1>{{ one.title }}</h1>
        <p>
          {{ one.text }}
        </p>
        <router-link to="/restaurant" class="li"
          >{{ one.button_text }}<fa icon="arrow-right"
        /></router-link>
      </v-col>
    </v-row>

    <v-row class="mt-10">
      <v-col cols="8" class="text">
        <h1>{{ two.title }}</h1>
        <p>
          {{ two.text }}
        </p>
        <router-link to="/restaurant" class="li"
          >{{ two.button_text }}<fa icon="arrow-right"
        /></router-link>
      </v-col>
      <v-col cols="4" class="img2"> 
      </v-col>
    </v-row>
    <v-row class="mt-10">
      <v-col cols="4" class="img3"></v-col>
      <v-col cols="8" class="text">
        <h1>{{ three.title }}</h1>
        <p>
          {{ three.text }}
        </p>
        <router-link to="/activities" class="li"
          >{{ three.button_text }}<fa icon="arrow-right"
        /></router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      header: {
          title: 'Välkommen!',
          img: "../assets/spa-background.jpg",
          text: "Välkommen till Stockholms och en av Sveriges finaste Camping. Här bor du vackert ute i naturen och ändå bara 5 km söder om centrum. Campingen är populär för övernattning hela året. Vi har mysiga villor med två sovrum, stuglägenheter, campingstugor och rum.",
          button_text: "Boka stuga",

      },
      one:
        {
          title: 'Mat och dryck',
          img: require("../assets/spa-background.jpg"),
          text: "Här har du har möjlighet att äta i campingens matglada restaurang med fullständiga rättigheter. ",
          button_text: "Kolla in menyn från restaurangen",
        },
        two:
        {
          title: 'Spa & relax',
          img: "../assets/spa-background.jpg",
          text: "Vårt spa bjuder dig på bad i pool, bubbelpool, bastu och relax. Vi erbjuder en rad sköna behandlingar för händer, fötter, ansikte samt massage och kroppsbehandlingar. Missa inte upplevelsen och njuten som våra SPA-Ritualer förmedlar.",
          button_text: "Boka spa",
        },
        three:
          {
          title: 'Aktiviteter för hela familjen',
          img: "../assets/spa-background.jpg",
          text: "Här finns det ett stort utbud av aktiviteter för hela familjen. Hela sommaren är det fullt program. Med bland annat musik, shopping och träning",
          button_text: "Kolla in våra aktiviteter",
        }
    };
  },
};
</script>

<style scoped>
.container {
  padding: 150px 30px;
}

.header {
  background-image: url("../assets/homepage_bg.jpg");
  background-size: cover;
  background-position: center;
  height: 500px;
}

.img1 {
  background-image: url("../assets/food2.jpg");
  background-size: cover;
  background-position: center;
  height: 350px;
}

.img2 {
  background-image: url("../assets/SpaIMG/massage.jpg");
  background-size: cover;
  background-position: center;
  height: 350px;
}

.img3 {
  background-image: url("../assets/activities_training.jpg");
  background-size: cover;
  background-position: center;
  height: 350px;
}




.text {
  background-color: #3d3a50;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  padding: 50px;
  color: #f4fcfe;
}

.li {
  color: #f4fcfe;
  font-size: 1.2rem;
  width: auto;
  display: flex;
  align-items: center;
}
</style>
