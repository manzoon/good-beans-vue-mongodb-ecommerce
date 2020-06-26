<template>
  <div class="home">
    <header>
      <HomeHeader />
    </header>
    <aside>
      <HomeCategoriesNavigation />
    </aside>
    <section class="home__main-area">
      <HomeProducts />
    </section>
    <footer>
      <HomeFooter />
    </footer>
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

<style lang="scss">
.home {
  display: grid;
  height: 100%;
  grid-template-columns: 20% 1fr;
  grid-template-rows: 100px 1fr 100px;
  grid-template-areas:
    "header header header header"
    "sidebar main main main"
    "footer footer footer footer";
  // @include responsive(phone) {
  //   grid-template-areas:
  //     "header header header header"
  //     "sidebar main main main"
  //     "footer footer footer footer";
  // }
  header {
    grid-area: header;
  }
  aside {
    grid-area: sidebar;
  }
  &__main-area {
    grid-area: main;
  }
  footer {
    grid-area: footer;
  }
}
</style>