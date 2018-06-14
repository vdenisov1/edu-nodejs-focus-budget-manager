webpackJsonp([4],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("/5sW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"app"},s,!1,function(e){n("WcKs")},null,null).exports,o=n("/ocq"),r=n("mtWM"),l=n.n(r),u="http://"+window.location.hostname+":3000",c={user:{authenticated:!1},authenticate:function(e,t,n){var i=this;l.a.post(u+"/api/v1/auth",t).then(function(t){var s=t.data.token;e.$cookie.set("token",s,"1D"),e.validLogin=!0,i.user.authenticated=!0,n&&_.push(n)}).catch(function(t){var n=t.response.data;e.snackbar=!0,e.message=n.message})},signup:function(e,t,n){var i=this;l.a.post(u+"/api/v1/signup",t).then(function(t){var s=t.data.token;e.$cookie.set("token",s,"1D"),e.validSignUp=!0,i.user.authenticated=!0,console.log("User authenticated"),n&&_.push(n)}).catch(function(t){var n=t.response.data;e.snackbar=!0,e.message=n.message,console.log("User not authenticated")})},checkAuthentication:function(){var e=document.cookie;this.user.authenticated=!!e},getAuthenticationHeader:function(e){return"Bearer "+e.$cookie.get("token")},logoutUser:function(e,t){console.log("loging out user and redirecting to "+t),e.$cookie.delete("token"),t&&_.push(t)}},d="http://"+window.location.hostname+":3000",v={data:function(){return{users:[]}},mounted:function(){this.getAllUsers()},methods:{getAllUsers:function(e){var t=this;l.a.get(d+"/api/v1/users",{headers:{Authorization:c.getAuthenticationHeader(this)}}).then(function(e){var n=e.data;return t.users=n})},logout:function(){c.logoutUser(this,"/login")}}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-toolbar",{attrs:{dark:"",fixed:"",app:""}},[n("v-toolbar-title",[e._v("Budgeter")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-toolbar-items",[n("v-btn",{attrs:{flat:""},nativeOn:{click:function(t){e.logout()}}},[e._v("\n            Logout\n            ")])],1)],1),e._v(" "),n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",[n("v-flex",{attrs:{xs10:"",md6:"",lg4:"","offset-xs1":"","offset-md3":"","offset-lg4":""}},[n("h3",[e._v("Users")]),e._v(" "),n("v-list",[e._l(e.users,function(t){return[n("v-list-tile",{key:t.username},[n("v-list-tile-content",[n("v-list-tile-title",{domProps:{innerHTML:e._s(t.username)}})],1)],1)]})],2)],1)],1)],1)],1)],1)},staticRenderFns:[]},g=n("VU/8")(v,p,!1,null,null,null).exports,f={data:function(){return{snackbar:!1,validLogin:!1,validSignUp:!1,signUpVisible:!1,loginPasswordVisible:!1,signUpPasswordVisible:!1,rules:[function(e){return!!e||"This field is required"}],credentials:{username:"",password:""},newUser:{username:"",password:""},message:""}},methods:{submitAuthentication:function(){c.authenticate(this,this.credentials,"/")},submitSignUp:function(){c.signup(this,this.newUser,"/")}},props:{timeout:{type:Number,default:6e3}}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-toolbar",{attrs:{dark:"",fixed:"",app:""}},[n("v-toolbar-title",[e._v("Budgeter")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-toolbar-items",[e.signUpVisible?e._e():n("v-btn",{attrs:{flat:""},nativeOn:{click:function(t){e.signUpVisible=!0}}},[e._v("\n            Sign Up\n            ")]),e._v(" "),e.signUpVisible?n("v-btn",{attrs:{flat:""},nativeOn:{click:function(t){e.signUpVisible=!1}}},[e._v("\n                Login\n            ")]):e._e()],1)],1),e._v(" "),n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",[n("v-flex",{attrs:{xs10:"",md6:"",lg4:"","offset-xs1":"","offset-md3":"","offset-lg4":""}},[n("div",{staticClass:"l-auth-container"},[n("div",{staticClass:"l-auth"},[e.signUpVisible?e._e():n("v-form",{model:{value:e.validLogin,callback:function(t){e.validLogin=t},expression:"validLogin"}},[n("h3",[e._v("Log In")]),e._v(" "),n("v-text-field",{attrs:{label:"Username","prepend-icon":"account_box",rules:e.rules,required:"",color:"light-blue lighten-1"},model:{value:e.credentials.username,callback:function(t){e.$set(e.credentials,"username",t)},expression:"credentials.username"}}),e._v(" "),n("v-text-field",{attrs:{label:"Password","prepend-icon":"lock",rules:e.rules,"append-icon":e.loginPasswordVisible?"visibility":"visibility_off","append-icon-cb":function(){return e.loginPasswordVisible=!e.loginPasswordVisible},type:e.loginPasswordVisible?"text":"password",color:"light-blue lighten-1",required:""},model:{value:e.credentials.password,callback:function(t){e.$set(e.credentials,"password",t)},expression:"credentials.password"}}),e._v(" "),n("v-btn",{attrs:{color:"light-blue lighten-1"},nativeOn:{click:function(t){e.submitAuthentication()}}},[e._v("\n                                    Login\n                                ")])],1)],1),e._v(" "),e.signUpVisible?n("div",{staticClass:"l-signup"},[n("v-form",{model:{value:e.validSignUp,callback:function(t){e.validSignUp=t},expression:"validSignUp"}},[n("h3",[e._v("Register")]),e._v(" "),n("v-text-field",{attrs:{label:"Username","prepend-icon":"account_box",rules:e.rules,required:"",color:"light-blue lighten-1"},model:{value:e.newUser.username,callback:function(t){e.$set(e.newUser,"username",t)},expression:"newUser.username"}}),e._v(" "),n("v-text-field",{attrs:{label:"Password","prepend-icon":"lock",rules:e.rules,"append-icon":e.signUpPasswordVisible?"visibility":"visibility_off","append-icon-cb":function(){return e.signUpPasswordVisible=!e.signUpPasswordVisible},type:e.signUpPasswordVisible?"text":"password",color:"light-blue lighten-1",required:""},model:{value:e.newUser.password,callback:function(t){e.$set(e.newUser,"password",t)},expression:"newUser.password"}}),e._v(" "),n("v-btn",{attrs:{color:"light-blue lighten-1"},nativeOn:{click:function(t){e.submitSignUp()}}},[e._v("\n                                    Sign Up\n                                ")])],1)],1):e._e(),e._v(" "),n("v-snackbar",{attrs:{timeout:e.timeout,bottom:"bottom",color:"red lighten-1"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n                        "+e._s(e.message)+"\n                        ")])],1)])],1)],1)],1)],1)},staticRenderFns:[]},b=n("VU/8")(f,h,!1,null,null,null).exports;i.a.use(o.a);var m=new o.a({routes:[{path:"/login",name:"Authentication",component:b},{path:"/",name:"Home",component:g,meta:{requiredAuth:!0}}]});m.beforeEach(function(e,t,n){e.meta.requiredAuth?c.user.authenticated?n():m.push("/login"):n()});var _=m,U=n("K/Lq"),k=n.n(U),w=n("3EgV"),x=n.n(w);n.e(1).then(n.bind(null,"7zck")),n.e(2).then(n.bind(null,"gJtD")),n.e(0).then(n.bind(null,"j1ja")),i.a.use(k.a),i.a.use(x.a),i.a.config.productionTip=!1,c.checkAuthentication(),new i.a({el:"#app",router:_,render:function(e){return e(a)}})},WcKs:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.fb109c42f42a05de7086.js.map