<template>
  <v-footer dark padless class="footer">
    <v-card flat tile class="lighten-1 footer white--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
        temporibus hic natus culpa odio, repudiandae dolor fugiat alias itaque,
        accusantium corporis eligendi optio deleniti accusamus placeat
        exercitationem labore eius beatae.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Javascript 3</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style scoped>
.footer {
  background-color: indigo;
  color: white;
  opacity: 95%;
}
</style>
