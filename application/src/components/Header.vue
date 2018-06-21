<template>
  <div>
    <v-toolbar dark fixed>
        <v-toolbar-title>Budgeter</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat @click.native="submitSignout()">
            Logout
          </v-btn>
        </v-toolbar-items>
    </v-toolbar>
    <v-container>
      <v-layout row wrap style="margin-top: 75px" 
              :class="budgetsVisible ? 'l-budgets-header' : 'l-clients-header'">
        <v-flex xs12 md5>
          <v-text-field v-model="search"
                label="Search"
                append-icon="search"
                :color="budgetsVisible ? 'light-blue-lighten-1' : 'green lighten-1'"
              >
          </v-text-field>
        </v-flex>
        <v-flex xs12 offset-md1 md1>
          <v-btn block 
                :color="budgetsVisible ? 'light-blue lighten-1' : 'green lighten-1'"
                @click.native="$emit('toggleVisibleData')"
          >{{ budgetsVisible ? "Clients" : "Budgets" }}</v-btn>
        </v-flex>
        <v-flex xs12 offset-md1 md4>
          <v-select label="Status"
                    :color="budgetsVisible ? 'light-blue lighten-1' : 'green lighten-1'"
                    v-model="status"
                    :items="statusItems"
                    single-line
                    @change="selectState">
          </v-select>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Authentication from "@/components/pages/Authentication";

export default {
  props: ["budgetsVisible", "selectState", "search"],
  data() {
    return {
      searchValue: "",
      status: "",
      statusItems: [
        "all",
        "approved",
        "denied",
        "waiting",
        "writing",
        "editing"
      ]
    };
  },
  watch: {
    searchValue: function() {
      this.$emit("input", this.searchValue);
    }
  },
  created() {
    this.searchValue = this.search;
  },
  methods: {
    submitSignout() {
      Authentication.logoutUser(this, "/login");
    }
  }
};
</script>