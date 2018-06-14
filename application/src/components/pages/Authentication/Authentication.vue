<template>
    <v-app>
        <v-toolbar dark fixed app>
            <v-toolbar-title>Budgeter</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn flat
                    v-if="!signUpVisible"
                    @click.native="signUpVisible = true">
                Sign Up
                </v-btn>
                <v-btn flat
                    v-if="signUpVisible"
                    @click.native="signUpVisible = false"
                    >
                    Login
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <v-container fluid fill-height>
                <v-layout>
                    <v-flex xs10 md6 lg4 offset-xs1 offset-md3 offset-lg4>
                        <div class="l-auth-container">
                            <div class="l-auth">
                                <v-form v-model="validLogin" v-if="!signUpVisible">
                                    <h3>Log In</h3>
                                    <v-text-field label='Username' 
                                            v-model='credentials.username' 
                                            prepend-icon='account_box' 
                                            :rules='rules' 
                                            required
                                            color='light-blue lighten-1'>
                                    </v-text-field>
                                    <v-text-field label="Password"
                                            v-model="credentials.password"
                                            prepend-icon="lock"
                                            :rules="rules"
                                            :append-icon="loginPasswordVisible ? 'visibility' : 'visibility_off'"
                                            :append-icon-cb="() => (loginPasswordVisible = !loginPasswordVisible)"
                                            :type="loginPasswordVisible ? 'text' : 'password'"
                                            color="light-blue lighten-1"
                                            required
                                            >
                                    </v-text-field>
                                    <v-btn color="light-blue lighten-1"
                                        @click.native="submitAuthentication()"
                                    >
                                        Login
                                    </v-btn>
                                </v-form>
                            </div>
                            <div class="l-signup" v-if="signUpVisible">
                                <v-form v-model="validSignUp">
                                    <h3>Register</h3>
                                    <v-text-field label="Username"
                                        v-model="newUser.username"
                                        prepend-icon="account_box"
                                        :rules="rules"
                                        required
                                        color="light-blue lighten-1"
                                    >
                                    </v-text-field>
                                    <v-text-field label="Password"
                                        v-model="newUser.password"
                                        prepend-icon="lock"
                                        :rules="rules"
                                        :append-icon="signUpPasswordVisible ? 'visibility' : 'visibility_off'"
                                        :append-icon-cb="() => (signUpPasswordVisible = !signUpPasswordVisible)"
                                        :type="signUpPasswordVisible ? 'text' : 'password'"
                                        color="light-blue lighten-1"
                                        required
                                    >
                                    </v-text-field>
                                    <v-btn
                                        color="light-blue lighten-1"
                                        @click-native="submitSignUp()"
                                    >
                                        Sign Up
                                    </v-btn>
                                </v-form>
                            </div>
                            <v-snackbar :timeout="timeout"
                                bottom="bottom"
                                color="red lighten-1"
                                v-model="snackbar"
                            >
                            {{ message }}
                            </v-snackbar>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import Authentication from "@/components/pages/Authentication";

export default {
  data() {
    return {
      snackbar: false,
      validLogin: false,
      validSignUp: false,
      signUpVisible: false,
      loginPasswordVisible: false,
      signUpPasswordVisible: false,
      rules: [value => !!value || "This field is required"],
      credentials: {
        username: "",
        password: ""
      },
      newUser: {
        username: "",
        password: ""
      },
      message: ""
    };
  },
  methods: {
    submitAuthentication() {
      Authentication.authenticate(this, this.credentials, "/");
    },
    submitSignUp() {
      Authentication.signup(this, this.newUser, "/");
    }
  },
  props: {
    timeout: {
      type: Number,
      default: 6000
    }
  }
};
</script>

