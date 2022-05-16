<template>
  <v-form ref="form" v-model="valid" lazy-validation @submit="handleSubmit">
    <v-row align="center">
      <v-col class="d-flex justify-center align-center" cols="6" lg="3" sm="4">
        <v-select
          class="elevation-1 bg-white rounded"
          v-model="selectedDate"
          :items="date"
          label="Välj dag"
          :rules="[(v) => !!v || '']"
          required
        ></v-select>
      </v-col>
      <v-col class="d-flex justify-center align-center" cols="6" lg="3" sm="4">
        <v-select
          class="elevation-1 bg-white rounded"
          v-model="selectedTime"
          :items="time"
          label="Välj tid"
          :rules="[(v) => !!v || '']"
          required
        ></v-select>
      </v-col>
      <v-col class="d-flex justify-center align-center" cols="6" lg="3" sm="4">
        <v-select
          class="elevation-1 bg-white rounded"
          v-model="selectedAmount"
          :items="amount"
          label="Välj antal"
          :rules="[(v) => !!v || '']"
          required
        ></v-select>
      </v-col>
      <v-col class="d-flex justify-center align-center" cols="6" lg="3" sm="12">
        <v-btn :disabled="!valid" @click="validate" type="submit">Boka</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: 'RestaurantForm',
  data() {
    return {
      valid: true,
      selectedDate: null,
      selectedTime: null,
      selectedAmount: null,
      amount: [2, 4, 6, 8, 10, 12],
      time: ['11:00', '12.00', '13.00', '16.00', '17.00', '18.00', '19.00'],
      date: [],
    };
  },
  methods: {
    handleSubmit() {
      this.$store.commit('addRestaurantBookingDate', {
        date: this.selectedDate,
        time: this.selectedTime,
        amount: this.selectedAmount,
      });
    },
    validate() {
      this.$refs.form.validate();
    },
    resetForm() {
      this.$refs.form.resetValidation();
      this.valid = true;
    },
  },
  watch: {
    selectedDate() {
      this.resetForm();
    },
    selectedTime() {
      this.resetForm();
    },
    selectedAmount() {
      this.resetForm();
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

<style lang="scss" scoped>
.v-btn {
  height: 56px;
  width: 100%;
}
</style>
