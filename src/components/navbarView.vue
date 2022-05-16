<template>
  <div class="container">
    <div class="left_container">
              <router-link to="/" class="home">
                  <img
                  :src=logo
                  >
              </router-link>
      <div class="weather">
        <p>Vädret i Stockholm idag: {{ this.weather }}</p>
        <p>varmast under dagen: {{ this.maxCelsius }}°C</p>
      </div>
    </div>
    <ul class="links">
      <li>
        <router-link to="/cabin">Boka stuga</router-link>
      </li>
      <li>
        <router-link to="/activities">Evenemang</router-link>
      </li>
      <li>
        <router-link to="/restaurant">Restaurang</router-link>
      </li>
      <li>
        <router-link to="/spa">Spa</router-link>
      </li>
      <li>
        <router-link to="/about">Om oss</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import logo from '../assets/sthlm.png'
export default {
  name: "NavbarView",
  data() {
    return {
      weather: "",
      maxCelsius: "",
      logo
    };
  },
  mounted() {
    this.fetchWeather();
  },

  methods: {
    fetchWeather() {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
          "X-RapidAPI-Key":
            "b734433830msh4203f0ed73e9e8fp15a4d6jsn63bf803b2659",
        },
      };

      fetch(
        "https://yahoo-weather5.p.rapidapi.com/weather?location=stockholm&format=json&u=c",
        options
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          let weather = data.forecasts[0].text;
          this.maxCelsius = data.forecasts[0].high;

          //console.log(this.weather);

          if (weather.includes("Partly Cloudy")) {
            this.weather = "Delvis molnigt";
          } else if (weather.includes("Cloudy")) {
            this.weather = "Molnigt";
          } else if (weather.includes("Rain")) {
            this.weather = "Regnigt";
          } else if (weather.includes("Sunny")) {
            this.weather = "Soligt";
          }
        });
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
  color: black;
  font-weight: bold;
  font-size: 1.1rem;
}

img {
    width: 100px;
    height: 100px;
    }

.container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.left_container {
  display: flex;
  width: 50%;
  justify-content: space-between;
}

.weather {
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.links {
  display: flex;
  padding: 10px;
}

li {
  margin: 0px 10px;
}

li, .home {
    transition: 0.3s ease all;
}

li:hover,
.home:hover {
  transform: translateY(-2px) scale(1.1) rotate(-1deg);
}
</style>
