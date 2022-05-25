<template>
  <div class="text">
    <h2>{{ this.text }}</h2>
  </div>
  <div class="container">
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
        <select v-model="selectedDays" class="select mx-3" :class="{ standard: selectedDays === 'Välj Tid' }">
          <option value="Välj Tid">Välj Tid</option>
          <option v-for="(item, index) in days" :key="item + index" :value="item">{{ item }}</option>
        </select>
      </v-col>
      <v-col class="d-flex justify-center align-center" cols="6" lg="3" sm="4">
        <select v-model="selectedCabin" class="select mx-3" :class="{ standard: selectedCabin === 'Vilken Tjänst' }">
          <option value="Vilken Tjänst">Vilken Tjänst</option>
          <option v-for="(item, index) in cabin" :key="item + index" :value="item">{{ item }}</option>
        </select>
      </v-col>
    </v-row>
  </div>
  <v-btn type="button" :disabled="valid" @click="bookCabin" class="mt-6 mb-2" elevation="2" rounded width="100px"
    >Boka</v-btn
  >
</template>

<script>
export default {
  name: 'CabinForm',
  data() {
    return {
      valid: true,
      name: null,
      selectedDate: 'Från dag',
      selectedDays: 'Välj Tid',
      selectedCabin: 'Vilken Tjänst',
      text: 'Boka här!',
      days: ["12:00 - 14:00","14:00 - 16:00", "16:00 - 18:00", "18:00 - 20:00", "20:00 - 22:00"],
      cabin: ['Massage', 'Yoga', 'Hot-Stone', 'Grupp Yoga utomhus', 'Spa, bad och bastu', 'Utomhus bastu'],
      date: [],
    };
  },
  methods: {
    bookCabin() {
      this.$store.commit('addCabinBook', {
        name: this.name,
        date: this.selectedDate,
        days: this.selectedDays,
        place: this.selectedCabin,
      });
      this.text = 'Tack för bokningen!';
      this.name = null;
      this.selectedDate = 'Från dag';
      this.selectedDays = 'Välj Tid';
      this.selectedCabin = 'Vilken Tjänst';
    },
    validate() {
      if (
        this.selectedDate !== 'Från dag' &&
        this.selectedDays !== 'Välj Tid' &&
        this.selectedCabin !== 'Vilken Tjänst' &&
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
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
  display: flex;
  width: 800px;
}

.text {
  color: #f1f1f1;
  width: 70%;
  text-align: center;
}

.standard {
  color: grey;
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
