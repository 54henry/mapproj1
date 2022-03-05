<template>
  <div class="map-div"></div>
</template>
<script>
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
export default {
  name: "App",
  async mounted() {
    const webMap = new WebMap({
      portalItem: {
        id: "99fff0f927b74e4cb3d190e169ff1868",
      },
    });
    const mapView = new MapView({
      container: this.$el,
      map: webMap,
    });
    await mapView.when(() => {
      console.log(" Map loaded successfully ");
    });
  },
};
</script>
<style>
html,
body,
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.map-div {
  padding: 0;
  margin: 0;
  height: 100%;
}
</style>
