<template>
  <GMapMap :center="center" :zoom="12" map-type-id="terrain" class="maps">
    <GMapCluster>
      <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" />
    </GMapCluster>
  </GMapMap>
</template>
<script>
export default {
  name: 'Maps',
  data() {
    return {
      center: { lat: 57.27453375008152, lng: 17.051595981973417 },
      markers: [
        {
          position: {
            lat: 57.27456066053389,
            lng: 17.052761773588667,
          },
        },

        {
          position: {
            lat: 57.28423060155824,
            lng: 17.06167735672246,
          },
        },
        {
          position: {
            lat: 57.3016871692964,
            lng: 17.08956625371586,
          },
        },
        {
          position: {
            lat: 57.25867864347498,
            lng: 17.05556713839516,
          },
        },
        {
          position: {
            lat: 57.309649533807644,
            lng: 17.114712416148954,
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.maps {
  width: 100%;
  height: 60vh;
}
</style>
