<template>
  <div class="header">
    <h1 class="header__logo">
      GOOD
      <br />BEANS
    </h1>
    <div class="header__nav">
      <div class="header__nav__search">search</div>
      <div class="header__nav__login">login</div>
      <div class="header__nav__sign-up">sign up</div>
      <div class="header__nav__cart">cart</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  &__nav {
    display: flex;
  }
}
</style>