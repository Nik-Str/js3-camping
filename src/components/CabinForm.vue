<template>
  <div class="d-flex justify-center pt-5">
    <div class="text">
      <h2>{{ $store.state.cabin.message }}</h2>
    </div>
  </div>
  <v-container>
    <v-row align="center">
      <v-col class="d-flex justify-center align-center" cols="6" lg="4" sm="4">
        <v-text-field
          class="elevation-1 bg-white rounded mx-3"
          v-model="name"
          label="Namn"
          hide-details="auto"
        ></v-text-field>
      </v-col>
      <v-col class="d-flex justify-center align-center" cols="6" lg="4" sm="4">
        <select v-model="selectedWeek" class="select mx-3" :class="{ standard: selectedWeek === 'Vilken vecka?' }">
          <option value="Vilken vecka?">Vilken vecka?</option>
          <option v-for="(item, index) in weeks" :key="item + index" :value="item">
            {{ item }}
          </option>
        </select>
      </v-col>
      <v-col class="d-flex justify-center align-center" cols="6" lg="4" sm="4">
        <select v-model="selectedCabin" class="select mx-3" :class="{ standard: selectedCabin === 'Välj boende' }">
          <option value="Välj boende">Välj boende</option>
          <option v-for="(item, index) in cabin" :key="item + index" :value="item.value">
            {{ item.name }}
          </option>
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
      selectedWeek: 'Vilken vecka?',
      selectedCabin: 'Välj boende',
      weeks: [15, 16, 17, 18, 19, 20, 21],
      weeksbooked: [],
      cabin: [
        { name: 'Afterbeach-stugan', value: 'Stuga' },
        { name: 'Semester-stugan', value: 'Stuga' },
        { name: 'Strand-stugan', value: 'Stuga' },
        { name: 'Glass-stugan', value: 'Stuga' },
        { name: 'Husvagnplats', value: 'Husvagnplats' },
        { name: 'Tältplats', value: 'Tältplats' },
      ],
    };
  },
  methods: {
    bookCabin() {
      this.$store.commit('addCabinBook', {
        name: this.name,
        week: this.selectedWeek,
        type: this.selectedCabin,
      });
      this.valid = true;

      this.name = null;
      this.selectedWeek = 'Vilken vecka?';
      this.selectedCabin = 'Välj boende';
    },
    validate() {
      if (this.selectedWeek !== 'Vilken vecka?' && this.selectedCabin !== 'Välj boende' && this.name !== null) {
        this.valid = false;
      }
    },
  },
  watch: {
    selectedWeek() {
      this.validate();
    },
    selectedCabin() {
      this.validate();
    },
    name() {
      this.validate();
    },
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
    display: flex;
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
