<template>
  <div>
    <h1>Categories Nav</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["categories"])
  }
};
</script>

<style>
</style>