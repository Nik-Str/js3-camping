<template>
  <div class="backgroundImg">
    <div class="d-flex justify-center text-white text-center align-center" :style="{ height: '35vh' }">
      <div>
        <h1 class="text-h3 font-weight-bold">CAMPING DELUX</h1>
        <h3 class="text-h6 font-weight-bold font-italic">En plats för alla, med sol, bad och massor av aktiviteter</h3>
      </div>
    </div>
  </div>

  <v-container fluid>
    <v-app-bar
      color="teal-darken-4 rounded"
      :image="require('../assets/about_bg.jpg')"
      :style="{ position: 'relative', zIndex: '1' }"
    >
      <template v-slot:image>
        <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
      </template>

      <template v-slot:prepend>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-icon v-bind="props" icon="mdi-menu"></v-icon>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" :value="index">
              <v-list-item-title @click="handleSelected(item.title)">{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
      <v-app-bar-title class="text-h6 font-weight-bold text-center" :style="{ marginLeft: '-2.5rem' }">{{
        selectedState.title
      }}</v-app-bar-title>
    </v-app-bar>
    <div class="d-flex justify-center">
      <div class="text-center mt-4" :style="{ maxWidth: '90%', minWidth: '90%' }">
        <div class="d-flex justify-center my-4">
          <img
            v-if="selected !== 'Komma hit' && selected !== 'Närliggande'"
            :src="selectedState.img"
            alt="Img"
            class="rounded"
          />
          <Maps v-if="selected === 'Komma hit' || selected === 'Närliggande'" :markers="selectedState.markers" />
        </div>
        <h4>{{ selectedState.h4 }}</h4>
        <p v-if="selectedState.p">{{ selectedState.p }}</p>

        <v-list density="compact" nav v-if="selectedState.list" class="text-left">
          <div v-for="(item, index) in selectedState.list" :key="index + item">
            <v-list-item lines="two" :style="{ padding: '0rem', paddingTop: '2rem', minHeight: 'auto' }">
              <v-list-item-header>
                <v-list-item-title class="text-subtitle-2">
                  <a :href="item.link" class="text-black">{{ item.title }}</a>
                </v-list-item-title>
                <v-list-item-subtitle class="text-subtitle-2">{{ item.sub }}</v-list-item-subtitle>
              </v-list-item-header>
              <div class="d-flex">
                <p :style="{ color: 'grey', fontSize: '1rem' }">{{ item.distance }}km</p>
              </div>
            </v-list-item>
            <v-divider></v-divider>
          </div>
        </v-list>

        <h4 v-if="selectedState.h5" class="mt-4">{{ selectedState.h5 }}</h4>
        <a href="/beach" v-if="selectedState.beachInfo" class="text-black mt-4">{{ selectedState.beachInfo }}</a>
        <p v-if="selectedState.p2">{{ selectedState.p2 }}</p>
      </div>
    </div>
  </v-container>
</template>

<script>
import Maps from '../components/Maps.vue';

export default {
  name: 'AboutView',
  components: {
    Maps,
  },
  data() {
    return {
      selected: 'Om oss',
      items: [
        {
          title: 'Om oss',
          img: require('../assets/activities_bg.jpg'),
          h4: 'Sagolik miljö med fantasiska möjligheter',
          p: 'Väldigt många svarar den otroliga sandstranden (2 mil gnistrande vit sandstrand) men lika många säger att det är något speciellt med hela campingen på Delux Camping. Helthetsupplevelsen. Det är läget vid havet på ölands vackraste strand, tallskogens doft, att det är ordning och reda, bageriet med färskt bröd varje dag, golfbanan alldeles runt hörnet, barnvänligheten, servicen, alla aktiviteterna - ja listan kan göras lång. Att våra gäster trivs hos oss ser vi på listan över alla som återkommer år efter år. Det är ett gott betyg tycker vi och är det som sporrar oss att ständigt utveckla vår anläggning. Välkommen att fira din semester med oss du också.',
          h5: 'Finns något för hela familjen',
          p2: 'Camping delux på Öland är med sina 1350 campingplatser och 125 stugor Sveriges största camping. Vår anläggning är belägen längs med en 2 mil lång vit sandstrand och är en komplett by med pool, spa, bastuvärld, restauranger, pub, after beach, bageri, ICA-butik, frisör, kiosk, gatukök och pizzeria. På området ligger även Camping Delux GK - en 9 håls fullängdsbana. Camping Delux ägs till 100% av familjen Barkevall från Öland. Familjen har drivit anläggningen i egen regi sedan 1994 och strategin är och förblir att återinvestera all eventuell vinst i företaget. Detta ser vi genom att Camping Delux har utvecklats från att vara en traditionell campingplats till en fullfjädrad semesteranläggning, en destination.',
        },
        {
          title: 'Komma hit',
          h4: 'Tillgängligt och enkelt att hitta',
          p: 'Camping Delux är beläget på ölands östra sida. För att komma hit följer du väg 136 och svänger av mot Böda strax efter Kyrketorp. Du hittar parkering på vänsta sidan av strandlinjen mot centrum. Kommer du med båt från finns möjlighet att ankra vid hamnen på den norra sidan om stranden längst med fyren och båthamnen. För er med husvagn rekommenderar vi att stanna till i Delux camping område strax innan kyrketorp. Anmäl i reception vid ankomst.',
          h5: 'Kordinater',
          p2: '57.275212895721346, 17.05122465022413',
          markers: [
            {
              position: {
                lat: 57.27456066053389,
                lng: 17.052761773588667,
              },
            },
          ],
        },
        {
          title: 'Närliggande',
          h4: 'Sevärdigheter & Aktiviteter',
          list: [
            { title: 'Kaffestugan', sub: 'Äldre kaffe med hembakat bröd, kaffe och tårta', distance: '134', link: '/' },
            {
              title: 'Rosendals Järnåldersby',
              sub: 'By från början av 1800 talet, med möjlighet att se smedja',
              distance: '20',
              link: '/',
            },
            {
              title: 'Röda Backar',
              sub: 'Naturreservat med vandringsled och fågelskådning',
              distance: '56',
              link: '/',
            },
            {
              title: 'Lyckesand',
              sub: 'Sandstrand av den finaste miljön belägen på östra delen',
              distance: '97',
              link: '/',
            },
            { title: 'Böda hotell', sub: '5 stjärnigt hotell, massage, spa och konferens', distance: '40', link: '/' },
            { title: 'Homrevet', sub: 'Stort kullerstenstran med möjlighet till fiske', distance: '63', link: '/' },
            { title: 'Byxelkroks Golfklub', sub: 'Ölands största golfbana, 18 hål på 19km', distance: '24', link: '/' },
            {
              title: 'Getterum',
              sub: 'Äldre by, men flertalet sevärdigheter av historisk betydelse',
              distance: '88',
              link: '/',
            },
          ],
          markers: [
            {
              position: {
                lat: 57.24645963392192,
                lng: 17.05875625938503,
              },
            },
            {
              position: {
                lat: 57.27427340258405,
                lng: 17.009956180608626,
              },
            },
            {
              position: {
                lat: 57.27048202468579,
                lng: 17.03299883314727,
              },
            },
            {
              position: {
                lat: 57.284131028683156,
                lng: 17.061981324241824,
              },
            },
            {
              position: {
                lat: 57.26077213519431,
                lng: 17.03256731820084,
              },
            },
            {
              position: {
                lat: 57.30200639535701,
                lng: 17.089865244385738,
              },
            },
            {
              position: {
                lat: 57.31157645686909,
                lng: 16.996096471622653,
              },
            },
            {
              position: {
                lat: 57.312075370551014,
                lng: 17.048252089006407,
              },
            },
          ],
          h5: 'Ytterligare info',
          beachInfo: 'Strand karta',
        },
        {
          title: 'Evenemang',
          img: require('../assets/activities_sm.jpg'),
          h4: '"Rock away beach" har det kallats',
          p: 'Här på Camping Delux finn ett brett utbud av evenemang, artister och uppträdande under hela säsongen. Besök vår sida för evenemang för mer info, där kan du också boka och söka efter olika event per kalender datum. ',
        },
      ],
    };
  },

  methods: {
    handleSelected(select) {
      this.selected = select;
    },
  },
  computed: {
    selectedState() {
      const filtered = this.items.filter((item) => item.title === this.selected);
      return filtered[0];
    },
  },
};
</script>

<style lang="scss" scoped>
.backgroundImg {
  background-image: url('../assets/about_bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 3rem;
  padding-top: 10vh;
}

.v-container {
  max-width: 60vw;
}

img {
  max-width: 55vw;
}

@media only screen and (max-width: 960px) {
  .v-container {
    max-width: 100vw;
  }

  img {
    max-width: 85vw;
  }
}
</style>
