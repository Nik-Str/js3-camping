<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12 inline-block"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://media.happy-day.se//happyday/images/massage-2018-12-11-144703801/0/0/0/massage.jpg"
    ></v-img>

    <v-card-title>Massage</v-card-title>

    <v-card-text>
      <div>Skön avslappnade massage som passar för alla tillfällen och händelser</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Dagens tider</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
      <v-chip v-for="(value, id) in profile.bookning" :key="id">
          {{ value.time }}
      </v-chip>


      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reservera
      </v-btn>
    </v-card-actions>
  </v-card>


  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://previews.123rf.com/images/denisfilm/denisfilm1805/denisfilm180501548/101809407-les-gens-qui-font-des-exercices-de-yoga-en-plein-air-cours-de-yoga-en-groupe-sur-l-herbe-.jpg"
    ></v-img>

    <v-card-title>Yogamassage</v-card-title>

    <v-card-text>
      <div>För dig som vill slappna av tillsammans med andra i en gemensam övning</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Dagens tider</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>11:00</v-chip>

        <v-chip>13:00</v-chip>

        <v-chip>15:00</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reservera
      </v-btn>
    </v-card-actions>
  </v-card>

  

</template>

<script>
  export default {
    name: 'bookning',
    data: () => ({
      profile:{
        bookning: [
          {
            "id":1,
            "time": "10:00"
          },

          {
            "id":2,
            "time": "12:00"
          },   
          
          {
            "id":3,
            "time": "14:00"
          },
          
          {
            "id":4,
            "time": "16:00"
          } 
        ]
      }
    })
  }
</script>

<!-- <script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script> -->