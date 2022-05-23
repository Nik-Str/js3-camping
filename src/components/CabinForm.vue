<template>
  <div class="text">
    <h2>{{ this.text }}</h2>
  </div>
  <form action="submit" @submit.prevent="bookCabin">
    <div class="container">
      <v-text-field
        class="elevation-1 bg-white rounded mx-3"
        v-model="name"
        label="Namn"
        :rules="rules"
        hide-details="auto"
      ></v-text-field>
      <v-select
        class="elevation-1 bg-white rounded m-3"
        v-model="selectedDate"
        :items="date"
        label="Från dag"
        :rules="[(v) => !!v || '']"
        required
      ></v-select>
      <v-select
        class="elevation-1 bg-white rounded mx-3"
        v-model="selectedDays"
        :items="days"
        label="Hur många dagar?"
        :rules="[(v) => !!v || '']"
        required
      ></v-select>
      <v-select
        class="elevation-1 bg-white rounded"
        v-model="selectedCabin"
        :items="cabin"
        label="Vilken stuga?"
        :rules="[(v) => !!v || '']"
        required
        
      ></v-select>
    </div>
    <v-btn type="submit" class="mt-6 mb-2" elevation="2" rounded width="100px"
      >Boka</v-btn
    >
  </form>
</template>

<script>
export default {
  name: "CabinForm",
  data() {
    return {
      valid: true,
      name: null,
      selectedDate: null,
      selectedDays: null,
      selectedCabin: null,
      text: "Boka din stuga här nedanför",
      days: [1, 2, 3, 4, 5, 6, 7],
      cabin: [
        "Afterbeach-stugan",
        "Semester-stugan",
        "Strand-stugan",
        "Glass-stugan",
        "Cykel-stugan",
        "Grillstugan",
      ],
      date: [],
    };
  },
  methods: {
    bookCabin() {
      if (
        this.selectedDate !== null &&
        this.selectedDays !== null &&
        this.selectedCabin !== null &&
        this.name !== null
      ) {
        this.$store.commit("addCabinBook", {
          name: this.name,
          date: this.selectedDate,
          days: this.selectedDays,
          place: this.selectedCabin,
        });
        this.text = "Du är nu bokad!";
        this.name = null;
        this.selectedDate = null;
        this.selectedDays = null;
        this.selectedCabin = null;
      } else {
        this.text = "Du glömde att fylla i något! Försök igen";
      }
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
        allDates.push(day + i + "/" + month + "-" + year);
      } else {
        allDates.push(newMonth + "/" + (month + 1) + "-" + year);
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
  background-color: rgba(0, 0, 0, 0.4);
  width: 70%;
  text-align: center;
}


</style>
