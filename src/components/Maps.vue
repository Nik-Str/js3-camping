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
  props: ['markers'],
  data() {
    return {
      center: { lat: 57.27453375008152, lng: 17.051595981973417 },
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
