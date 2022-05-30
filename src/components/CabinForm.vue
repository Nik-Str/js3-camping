<template>
  <div class="d-flex justify-center pt-5">
    <div class="text">
      <h2>{{ text }}</h2>
    </div>
  </div>
  <v-container>
    <v-row align="center">
      <v-col class="d-flex justify-center align-center" cols="6" lg="3" sm="4">
        <v-text-field
          class="elevation-1 bg-white rounded mx-3"
          v-model="name"
          label="Namn"
          hide-details="auto"
        ></v-text-field>
      </v-col>
      <v-col class="d-flex justify-center align-center" cols="6" lg="3" sm="4">
        <select v-model="selectedDate" class="select mx-3" :class="{ standard: selectedDate === 'Från dag' }">
          <option value="Från dag">Från dag</option>
          <option v-for="(item, index) in date" :key="item + index" :value="item">{{ item }}</option>
        </select>
      </v-col>
      <v-col class="d-flex justify-center align-center" cols="6" lg="3" sm="4">
        <select v-model="selectedDays" class="select mx-3" :class="{ standard: selectedDays === 'Antal dagar' }">
          <option value="Antal dagar">Antal dagar</option>
          <option v-for="(item, index) in days" :key="item + index" :value="item">{{ item }}</option>
        </select>
      </v-col>
      <v-col class="d-flex justify-center align-center" cols="6" lg="3" sm="4">
        <select v-model="selectedCabin" class="select mx-3" :class="{ standard: selectedCabin === 'Välj boende' }">
          <option value="Välj boende">Välj boende</option>
          <option v-for="(item, index) in cabin" :key="item + index" :value="item.value">{{ item.name }}</option>
        </select>
      </v-col>
      <v-col class="d-flex justify-center align-center" cols="12">
        <v-btn type="button" :disabled="valid" @click="bookCabin" class="mt-0 mb-2" elevation="2" rounded width="100px"
          >Boka</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CabinForm',
  data() {
    return {
      valid: true,
      name: null,
      selectedDate: 'Från dag',
      selectedDays: 'Antal dagar',
      selectedCabin: 'Välj boende',
      text: 'Boka ditt boende här nedanför:',
      days: [1, 2, 3, 4, 5, 6, 7],
      cabin: [
        { name: 'Afterbeach-stugan', value: 'Stuga' },
        { name: 'Semester-stugan', value: 'Stuga' },
        { name: 'Strand-stugan', value: 'Stuga' },
        { name: 'Glass-stugan', value: 'Stuga' },
        { name: 'Husvagnplats', value: 'Husvagnplats' },
        { name: 'Tältplats', value: 'Tältplats' },
      ],
      date: [],
    };
  },
  methods: {
    bookCabin() {
      this.$store.commit('addCabinBook', {
        name: this.name,
        date: this.selectedDate,
        days: this.selectedDays,
        type: this.selectedCabin,
      });
      this.text = 'Din bokning finns nu i kundvagnen!';
      this.name = null;
      this.selectedDate = 'Från dag';
      this.selectedDays = 'Antal dagar';
      this.selectedCabin = 'Välj boende';
    },
    validate() {
      if (
        this.selectedDate !== 'Från dag' &&
        this.selectedDays !== 'Antal dagar' &&
        this.selectedCabin !== 'Välj boende' &&
        this.name !== null
      ) {
        this.valid = false;
      }
    },
  },
  watch: {
    selectedDate() {
      this.validate();
    },
    selectedDays() {
      this.validate();
    },
    selectedCabin() {
      this.validate();
    },
    name() {
      this.validate();
    },
  },
  mounted() {
    let allDates = [];
    let newMonth = 1;
    for (let i = 0; i < 14; i++) {
      const daysInMonth = (month, year) => new Date(year, month, 0).getDate();
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      const day = today.getDate();

      if (daysInMonth(year, month) >= day + i) {
        allDates.push(day + i + '/' + month + '-' + year);
      } else {
        allDates.push(newMonth + '/' + (month + 1) + '-' + year);
        newMonth++;
      }
    }
    this.date = allDates;
  },
};
</script>

<style scoped>
.text {
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.503);
  width: 70%;
  text-align: center;
  margin-top: 3rem;
  border-radius: 4px;
}

.standard {
  color: grey;
}

.v-container {
  max-width: 60vw;
}

@media only screen and (max-width: 960px) {
  .v-container {
    max-width: 100vw;
  }
}

.select {
  height: 56px;
  width: 100%;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  text-align: center;
  border-radius: 4px;
  font-weight: 500;
  text-indent: 0.0892857143em;
  text-transform: uppercase;
  font-size: 0.875rem;
  background-color: white;
}
</style>
