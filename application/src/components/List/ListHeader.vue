<template>
  <header class="l-list-header">
    <div class="md-list-header white--text"
        v-if="headers != null" v-for="header in headers" :key="header">
    {{ header }}
    </div>
  </header>
</template>

<script>
export default {
  props: ["headers"]
};
</script>

<style lang="scss">
.l-list-header {
  display: none;
  width: 100%;
  @media (min-width: 601px) {
    margin: 25px 0 0;
    display: flex;
  }
  .md-list-header {
    width: 100%;
    background-color: black !important;
    border: 1px solid white;
    border-bottom: none;
    padding: 0 15px;
    display: flex;
    height: 45px;
    align-items: center;
    justify-content: center;
    font-size: 22px;

    border-left: none;

    &:first-of-type {
      border-left: none;
    }

    &:last-of-type {
      border-right: none;
    }

    @media (min-width: 601px) {
      justify-content: flex-start;
    }
  }
}
</style>
