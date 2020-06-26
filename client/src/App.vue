<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./pages/Home";

export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style lang="scss">
@import "./scss/_reset.scss";
@import "./scss/_imports.scss";
@import "./scss/_variables.scss";
@import "./scss/_setup.scss";
@import "./scss/_breakpoints.scss";

#app {
  height: 100%;
}
</style>
