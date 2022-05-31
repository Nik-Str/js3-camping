<template>
  <v-container>
    <v-row align="center">
      <v-col class="d-flex justify-center align-center" cols="6" lg="3" sm="4">
        <select v-model="selectedDate" class="select" :class="{ standard: selectedDate === 'Välj datum' }">
          <option value="Välj datum">Välj datum</option>
          <option v-for="(item, index) in date" :key="item + index" :value="item">{{ item }}</option>
        </select>
      </v-col>
      <v-col class="d-flex justify-center align-center" cols="6" lg="3" sm="4">
        <select v-model="selectedTime" class="select" :class="{ standard: selectedTime === 'Välj tid' }">
          <option value="Välj tid">Välj tid</option>
          <option v-for="(item, index) in time" :key="item + index" :value="item">{{ item }}</option>
        </select>
      </v-col>
      <v-col class="d-flex justify-center align-center" cols="6" lg="3" sm="4">
        <select v-model="selectedAmount" class="select" :class="{ standard: selectedAmount === 'Välj antal' }">
          <option value="Välj antal">Välj antal</option>
          <option v-for="(item, index) in amount" :key="item + index" :value="item">{{ item }}</option>
        </select>
      </v-col>
      <v-col class="d-flex justify-center align-center" cols="6" lg="3" sm="12">
        <v-btn :disabled="valid" type="button" @click="handleSubmit">Boka</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'RestaurantForm',
  data() {
    return {
      valid: true,
      selectedDate: 'Välj datum',
      selectedTime: 'Välj tid',
      selectedAmount: 'Välj antal',
      amount: [2, 4, 6, 8, 10, 12],
      time: ['11:00', '12.00', '13.00', '16.00', '17.00', '18.00', '19.00'],
      date: [],
    };
  },
  methods: {
    //Trigger add to cart function in store and reset form input
    handleSubmit() {
      this.$store.commit('addRestaurantBookingCart', {
        date: this.selectedDate,
        time: this.selectedTime,
        amount: this.selectedAmount,
      });
      this.selectedDate = 'Välj datum';
      this.selectedTime = 'Välj tid';
      this.selectedAmount = 'Välj antal';
    },
    //Handles button disabled state
    validate() {
      if (
        this.selectedDate !== 'Välj datum' &&
        this.selectedTime !== 'Välj tid' &&
        this.selectedAmount !== 'Välj antal'
      ) {
        this.valid = false;
      }
    },
  },
  watch: {
    //watch for state change on selection input
    selectedDate() {
      this.validate();
    },
    selectedTime() {
      this.validate();
    },
    selectedAmount() {
      this.validate();
    },
  },
  //Return the comming 14 days dates in state for rendering option values
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

.v-container {
  max-width: 60vw;
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
