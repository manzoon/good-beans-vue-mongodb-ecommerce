<template>
  <div class="products-categories">
    <h2>CATEGORIES</h2>
    <div class="products-categories__navigation">
      <ul
        class="products-categories__navigation__categories-list"
        v-for="category in categories"
        :key="category.id"
      >
        {{category.categoryName}}
        <li
          class="products-categories__navigation__subcategories-list"
          v-for="subCategory in category.subCategories"
          :key="subCategory.id"
        >{{ subCategory }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("categories", ["categories"])
  },
  created() {
    this.$store.dispatch("categories/loadCategories");
  }
};
</script>

<style lang="scss">
.products-categories {
  display: flex;
  flex: 0 32%;
}
</style>