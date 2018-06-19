<template>
    <v-app>
      <app-header :budgetsVisible="budgetsVisible"
        @toggleVisibleData="budgetsVisible = !budgetsVisible"></app-header>
  
      <v-content>
        <v-container>
          <list>
            <list-header slot="list-header" 
                    :headers="budgetsVisible ? budgetHeaders : clientHeaders"
            ></list-header>
            <list-body slot="list-body"
                      :budgetsVisible="budgetsVisible"
                      :data="budgetsVisible ? budgets : clients"
            ></list-body>
          </list>
        </v-container>
        <v-snackbar :timeout="timeout" 
                    bottom="bottom" 
                    color="red lighten-1" 
                    v-model="snackbar">{{ message }}</v-snackbar>
        <v-fab-transition>
  <v-speed-dial v-model="fab"
                bottom
                right
                fixed
                direction="top"
                transition="scale-transition">
      <v-btn slot="activator"
             color="red lighten-1"
             dark
             fab
             v-model="fab">
            <v-icon>add</v-icon>
            <v-icon>close</v-icon>
      </v-btn>

      <v-tooltip left>
        <v-btn color="light-blue lighten-1"
               dark
               small
               fab
               slot="activator">
              <v-icon>assignment</v-icon>
        </v-btn>
        <span>Add new Budget</span>
      </v-tooltip>

      <v-tooltip left>
        <v-btn color="green lighten-1"
               dark
               small
               fab
               slot="activator">
              <v-icon>account_circle</v-icon>
        </v-btn>
        <span>Add new Client</span>
      </v-tooltip>

  </v-speed-dial>
</v-fab-transition>
      </v-content>
    </v-app>
</template>

<script>
import Axios from "axios";
import Authentication from "@/components/pages/Authentication";
import ListHeader from "./../List/ListHeader";
import ListBody from "./../List/ListBody";

const BudgetManagerAPI = `http://${window.location.hostname}:3000`;

export default {
  components: {
    "list-header": ListHeader,
    "list-body": ListBody
  },
  data() {
    return {
      budgets: [],
      clients: [],
      budgetHeaders: ["Client", "Title", "Status", "Actions"],
      clientHeaders: ["Client", "Email", "Phone", "Actions"],
      snackbar: false,
      timeout: 6000,
      budgetsVisible: true,
      message: "",
      fab: false
    };
  },
  mounted() {
    this.getAllBudgets();
    this.getAllClients();
  },
  methods: {
    getAllClients() {
      Axios.get(`${BudgetManagerAPI}/api/v1/client`, {
        headers: {
          Authorization: Authentication.getAuthenticationHeader(this)
        },
        params: { user_id: this.$cookie.get("user_id") }
      })
        .then(({ data }) => {
          this.clients = this.dataParser(data, "_id", "name", "email", "phone");

          console.log(JSON.stringify(data));
        })
        .catch(error => {
          this.snackbar = true;
          this.message = error.message;
        });
    },

    getAllBudgets() {
      console.log("Cookie ID: " + this.$cookie.get("user_id"));
      Axios.get(`${BudgetManagerAPI}/api/v1/budget`, {
        headers: {
          Authorization: Authentication.getAuthenticationHeader(this)
        },
        params: { user_id: this.$cookie.get("user_id") }
      })
        .then(({ data }) => {
          this.budgets = this.dataParser(
            data,
            "_id",
            "client",
            "title",
            "state"
          );
        })
        .catch(error => {
          this.snackbar = true;
          this.message = error.message;
        });
    },

    dataParser(targetedArray, ...options) {
      let parsedData = [];
      targetedArray.forEach(item => {
        let parsedItem = {};
        options.forEach(option => (parsedItem[option] = item[option]));
        parsedData.push(parsedItem);
      });
      return parsedData;
    }
  }
};
</script>

