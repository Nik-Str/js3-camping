<template>
  <div class="container">
    <div class="left_container">
            <router-link class="logo" to="/"><img :src="logo"></router-link>
      <div class="weather">
        <p>Vädret i Stockholm idag: {{ this.weather }}, varmast under dagen: {{ this.maxCelsius }}°C</p>
        <p>{{ moment(new Date()).format('DD/MM-YY') }}</p>
      </div>
    </div>
    <ul class="links" v-show="showOg">
      <router-link class="li" to="/cabin">Boka stuga</router-link>
      <router-link class="li" to="/activities">Att göra</router-link>
      <router-link class="li" to="/event">Evenemang</router-link>
      <router-link class="li" to="/restaurant">Restaurang</router-link>
      <router-link class="li" to="/spa">Spa</router-link>
      <router-link class="li" to="/about">Om oss</router-link>
    </ul>
    <div class="mobile_icon_menu" @click="resizeNav" v-show="openIcon">
      <fa icon="bars" />
    </div>
    <div class="mobile_view" v-show="showNav">
      <div class="mobile_icon" @click="toggleNav">
        <fa icon="x" />
      </div>
      <ul class="mobile_links">
        <router-link class="mobile_li" to="/cabin">Boka stuga</router-link>
        <router-link class="mobile_li" to="/activities">Att göra</router-link>
        <router-link class="mobile_li" to="/event">Evenemang</router-link>
        <router-link class="mobile_li" to="/restaurant">Restaurang</router-link>
        <router-link class="mobile_li" to="/spa">Spa</router-link>
        <router-link class="mobile_li" to="/about">Om oss</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import logo from '../assets/logo.png';
import moment from 'moment';

export default {
  name: 'NavbarView',
  data() {
    return {
      showOg: null,
      showNav: null,
      openIcon: null,
      weather: '',
      maxCelsius: '',
      logo,
      width: null,
      moment,
    };
  },
  //mounted() {
  //this.fetchWeather();
  //},

  created() {
    window.addEventListener('resize', this.resizeNav);
    this.resizeNav();
  },

  methods: {
    fetchWeather() {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com',
          'X-RapidAPI-Key': 'b734433830msh4203f0ed73e9e8fp15a4d6jsn63bf803b2659',
        },
      };

      fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=stockholm&format=json&u=c', options)
        .then((res) => res.json())
        .then((data) => {
          let weather = data.forecasts[0].text;
          this.maxCelsius = data.forecasts[0].high;

          //console.log(this.weather);

          if (weather.includes('Partly Cloudy')) {
            this.weather = 'Delvis molnigt';
          } else if (weather.includes('Cloudy')) {
            this.weather = 'Molnigt';
          } else if (weather.includes('Rain')) {
            this.weather = 'Regnigt';
          } else if (weather.includes('Sunny')) {
            this.weather = 'Soligt';
          }
        });
    },
    resizeNav() {
      this.openIcon = null;
      this.width = window.innerWidth;

      if (this.width <= 1100) {
        this.showOg = null;
        this.showNav = true;
      } else {
        this.showNav = null;
        this.showOg = true;
        this.openIcon = false;
      }
    },
    toggleNav() {
      if ((this.showNav = null)) {
        this.showNav = true;
      } else {
        this.showNav = false;
        this.openIcon = true;
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.container {
  display: flex;
  justify-content: space-between;
  margin-top: -100px;
  padding: 10px;
  height: 80px;
  position: sticky;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99;
}

.left_container {
  display: flex;
  height: 60px;
}


.weather {
  padding: 10px;
  margin: 0px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  height: 50px;
  width: 50px;
  }

.links {
  display: flex;
  padding: 20px;
  position: relative;
}

.li {
  margin: 0px 10px;
}

.li,
.mobile_li,
.mobile_icon,
.mobile_menu,
.home {
  transition: 0.3s ease all;
}

.li:hover,
.mobile_li:hover,
.mobile_icon:hover,
.mobile_icon_menu:hover,
.home:hover {
  transform: translateY(-2px) scale(1.1) rotate(-1deg);
  cursor: pointer;
}

.mobile_view {
  position: fixed;
  right: 0;
  top: 0;
  width: 250px;
  border: none;
  z-index: 99;
}

.mobile_links {
  display: flex;
  padding: 20px;
  flex-direction: column;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: rgba(30, 30, 30, 0.6);
}

.mobile_li {
  color: white;
  font-size: 1.4rem;
  margin: 10px 0px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.mobile_icon {
  position: absolute;
  padding: 30px;
  right: 0;
  top: 0;
  color: white;
}
.mobile_icon_menu {
  position: absolute;
  padding: 30px;
  right: 0;
  top: 0;
  color: white;
}

.logo {
  transition: 0.8s ease all;
  padding: 5px;
}
.logo:hover {
  transform: rotate(45deg) scale(1.1);
  }


</style>
