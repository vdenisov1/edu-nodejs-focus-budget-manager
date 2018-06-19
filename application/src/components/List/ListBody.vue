<template>
  <section class="l-list-body">
    <div class="md-list-item"
          v-if="data != null"
          v-for="item in data"
          :key="item._id">

      <div :class="budgetsVisible ? 'md-budget-info black--text' : 'md-client-info black--text'"
          v-for="info in item" 
          v-if="info != item._id" 
          :key="info">
          {{ info }}
      </div>

      <div :class="budgetsVisible ? 'l-budget-actions black--text' : 'l-client-actions black--text'">
        <v-btn small flat color="blue">
          <v-icon small>visibility</v-icon>
        </v-btn>
        <v-btn small flat color="green">
          <v-icon small>mode_edit</v-icon>
        </v-btn>
        <v-btn small flat color="red">
          <v-icon small>delete_forever</v-icon>
        </v-btn>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["data", "budgetsVisible"]
};
</script>

<style lang="scss">
.l-list-body {
  display: flex;
  flex-direction: column;

  .md-list-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 15px 0;

    @media (min-width: 960px) {
      flex-direction: row;
      margin: 0;
    }

    .md-budget-info,
    .md-client-info {
      flex-basis: 25%;
      width: 100%;
      background-color: white;
      border: 1px solid black;
      padding: 0 15px;
      display: flex;
      height: 35px;
      align-items: center;
      justify-content: center;

      border-left: none;

      &:first-of-type {
        border-left: 1px solid black;
      }

      &:last-of-type {
        border-right: none;
      }

      &:first-of-type,
      &:nth-of-type(2) {
        text-transform: capitalize;
      }

      &:nth-of-type(3) {
        text-transform: uppercase;
      }

      @media (min-width: 601px) {
        justify-content: flex-start;
      }
    }

    .l-budget-actions,
    .l-client-actions {
      flex-basis: 25%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
      border: 1px solid black;

      .btn {
        min-width: 45px !important;
        margin: 0 5px !important;
      }
    }
  }
}
</style>


