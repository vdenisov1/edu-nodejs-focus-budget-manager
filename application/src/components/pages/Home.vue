<template>
    <v-app>
        <v-toolbar dark fixed app>
            <v-toolbar-title>Budgeter</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn flat
                    @click.native="logout()">
                Logout
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <v-container fluid fill-height>
                <v-layout>
                    <v-flex xs10 md6 lg4 offset-xs1 offset-md3 offset-lg4>
                      <h3>Users</h3>
                      <v-list>
                        <v-list-title v-for="(user, index) in users" 
                          :key="user.username"
                        >
                          <v-list-tile-content class="pa-3">
                            <v-list-tile-title v-text="user.username"></v-list-tile-title>
                          </v-list-tile-content>
                          <v-list-action></v-list-action>
                          <v-divider v-if="index + 1 < users.length" :key="index"></v-divider>
                        </v-list-title>
                      </v-list>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import Axios from "axios";
import Authentication from "@/components/pages/Authentication";

const BudgetManagerAPI = `http://${window.location.hostname}:3000`;

export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.getAllUsers();
  },
  methods: {
    getAllUsers(context) {
      Axios.get(`${BudgetManagerAPI}/api/v1/users`, {
        headers: {
          Authorization: Authentication.getAuthenticationHeader(this)
        }
      }).then(({ data }) => (this.users = data));
    }
  }
};
</script>

