<template>
    <v-app>
      <app-header></app-header>
  
      <v-content>
        <v-container>
          <budget-list>
            <budget-list-header slot="budget-list-header"></budget-list-header>
            <budget-list-body slot="budget-list-body" :budgets="budgets"></budget-list-body>
          </budget-list>
        </v-container>
      </v-content>
    </v-app>
</template>

<script>
import Axios from "axios";
import Authentication from "@/components/pages/Authentication";
import BudgetListHeader from "./../Budget/BudgetListHeader";
import BudgetListBody from "./../Budget/BudgetListBody";

const BudgetManagerAPI = `http://${window.location.hostname}:3000`;

export default {
  components: {
    "budget-list-header": BudgetListHeader,
    "budget-list-body": BudgetListBody
  },
  data() {
    return {
      budgets: []
    };
  },
  mounted() {
    this.getAllBudgets();
  },
  methods: {
    getAllBudgets() {
      console.log("Cookie ID: " + this.$cookie.get("user_id"));
      Axios.get(`${BudgetManagerAPI}/api/v1/budget`, {
        headers: {
          Authorization: Authentication.getAuthenticationHeader(this)
        },
        params: { user_id: this.$cookie.get("user_id") }
      }).then(({ data }) => (this.budgets = data));
    }
  }
};
</script>

