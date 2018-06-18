<template>
  <v-header>
    <v-toolbar dark fixed>
        <v-toolbar-title>Budgeter</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat>
            Clients
          </v-btn>
          <v-btn flat @click.native="logout()">
            Logout
          </v-btn>
        </v-toolbar-items>
    </v-toolbar>
    <v-container>
      <v-layout row wrap style="margin-top: 75px">
        <v-flex xs12 md5>
          <v-text-field v-model="search"
                label="Search"
                append-icon="search"
                color="light-blue-lighten-1"
              >
          </v-text-field>
        </v-flex>
        <v-flex xs12 offset-md1 md1>
          <v-btn block color="light-blue lighten-1">Clients</v-btn>
        </v-flex>
        <v-flex xs12 offset-md1 md4>
          <v-select label="Status"
                    color="light-blue lighten-1"
                    v-model="status"
                    :items="statusItems"
                    single-line>
          </v-select>
        </v-flex>
      </v-layout>
    </v-container>
  </v-header>
</template>

<script>
import Authentication from "@/components/pages/Authentication";

export default {
  data() {
    return {
      search: "",
      status: "",
      statusItems: [
        "All",
        "Approved",
        "Denied",
        "Waiting",
        "Writing",
        "Editing"
      ]
    };
  },
  methods: {
    submitSignout() {
      Authentication.logoutUser(this, "/login");
    }
  }
};
</script>

