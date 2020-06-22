<template>
  <div>
    <div id="main-header">
      <HomeHeader />
      <HomeCategoriesNavigation />
      <HomeProducts />
      <HomeFooter />
      <router-link to="/">Home</router-link>
    </div>
    <!-- <router-view /> -->
  </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader";
import HomeCategoriesNavigation from "../components/HomeCategoriesNavigation";
import HomeProducts from "../components/HomeProducts";
import HomeFooter from "../components/HomeFooter";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeCategoriesNavigation,
    HomeProducts,
    HomeFooter
  }
};
</script>

<style>
</style>