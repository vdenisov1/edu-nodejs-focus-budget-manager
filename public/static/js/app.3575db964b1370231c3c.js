webpackJsonp([4],{CZc0:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("/5sW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=i("VU/8")({name:"app"},a,!1,function(t){i("YDNJ")},null,null).exports,l=i("/ocq"),r=i("mtWM"),o=i.n(r),c="http://"+window.location.hostname+":3000",d={user:{authenticated:!1},authenticate:function(t,e,i){var n=this;o.a.post(c+"/api/v1/auth",e).then(function(e){var a=e.data;t.$cookie.set("token",a.token,"1D"),t.$cookie.set("user_id",a.user._id,"1D"),t.validLogin=!0,n.user.authenticated=!0,i&&N.push(i)}).catch(function(e){var i=e.response.data;t.snackbar=!0,t.message=i.message})},signup:function(t,e,i){var n=this;o.a.post(c+"/api/v1/signup",e).then(function(){t.validSignUp=!0,n.authenticate(t,e,i)}).catch(function(e){var i=e.response.data;t.snackbar=!0,t.message=i.message})},checkAuthentication:function(){var t=document.cookie;this.user.authenticated=!!t},getAuthenticationHeader:function(t){return"Bearer "+t.$cookie.get("token")},logoutUser:function(t,e){t.$cookie.delete("token"),t.$cookie.delete("user_id"),this.user.authenticated=!1,e&&N.push(e)}},u=i("mvHQ"),g=i.n(u),v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"l-list-header"},t._l(t.headers,function(e){return null!=t.headers?i("div",{key:e,staticClass:"md-list-header white--text"},[t._v("\n  "+t._s(e)+"\n  ")]):t._e()}))},staticRenderFns:[]};var b=i("VU/8")({props:["headers"]},v,!1,function(t){i("Zfjm")},null,null).exports,f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"l-list-body"},[t._l(t.data,function(e){return null!=t.data&&null===t.parsedBudgets?i("div",{key:e._id,staticClass:"md-list-item"},[t._l(e,function(n){return n!=e._id&&n!=e.client_id?i("div",{key:n,class:t.budgetsVisible?"md-budget-info black--text":"md-client-info black--text"},[t._v("\n        "+t._s(n)+"\n    ")]):t._e()}),t._v(" "),i("div",{class:t.budgetsVisible?"l-budget-actions black--text":"l-client-actions black--text"},[i("v-btn",{attrs:{small:"",flat:"",color:"green"},nativeOn:{click:function(i){t.getItemAndEdit(e)}}},[i("v-icon",{attrs:{small:""}},[t._v("mode_edit")])],1),t._v(" "),i("v-btn",{attrs:{small:"",flat:"",color:"red"},nativeOn:{click:function(i){t.deleteItem(e,t.data,t.budgetsVisible)}}},[i("v-icon",{attrs:{small:""}},[t._v("delete_forever")])],1)],1)],2):t._e()}),t._v(" "),t._l(t.parsedBudgets,function(e){return null!==t.parsedBudgets?i("div",{key:e._id,staticClass:"md-list-item"},[t._l(e,function(n){return n!=e._id&&n!=e.client_id?i("div",{key:n,class:t.budgetsVisible?"md-budget-info black--text":"md-client-info black--text"},[t._v("\n      "+t._s(n)+"  \n    ")]):t._e()}),t._v(" "),i("div",{class:t.budgetsVisible?"l-budget-actions black--text":"l-client-actions black--text"},[i("v-btn",{attrs:{small:"",flat:"",color:"green"},nativeOn:{click:function(i){t.getItemAndEdit(e)}}},[i("v-icon",{attrs:{small:""}},[t._v("mode_edit")])],1),t._v(" "),i("v-btn",{attrs:{small:"",flat:"",color:"red"},nativeOn:{click:function(i){t.deleteItem(e,t.data,t.budgetsVisible)}}},[i("v-icon",{attrs:{small:""}},[t._v("delete_forever")])],1)],1)],2):t._e()})],2)},staticRenderFns:[]};var h=i("VU/8")({props:["data","budgetsVisible","deleteItem","getBudget","getClient","parsedBudgets"],methods:{getItemAndEdit:function(t){t.phone?this.getClient(t):this.getBudget(t)}}},f,!1,function(t){i("CZc0")},null,null).exports,m="http://"+window.location.hostname+":3000",p={components:{"list-header":b,"list-body":h},data:function(){return{parsedBudgets:null,budget:null,client:null,state:null,search:null,budgets:[],clients:[],budgetHeaders:["Client","Title","Status","Actions"],clientHeaders:["Client","Email","Phone","Actions"],budgetsVisible:!0,snackbar:!1,timeout:6e3,message:"",fab:!1,listPage:!0,createPage:!0,editPage:!1,budgetCreation:!0,budgetEdit:!0,snackColor:"red lighten-1"}},mounted:function(){this.getAllBudgets(),this.getAllClients(),this.hidden=!1},watch:{search:function(){if(null!==this.search||""!==this.search){var t=this.search,e=new RegExp("^("+t+")","g"),i=this.budgets.filter(function(t){return t.client.match(e)});this.parsedBudgets=i}else this.parsedBudgets=null}},methods:{getAllBudgets:function(){var t=this;o.a.get(m+"/api/v1/budget",{headers:{Authorization:d.getAuthenticationHeader(this)},params:{user_id:this.$cookie.get("user_id")}}).then(function(e){var i=e.data;t.budgets=t.dataParser(i,"_id","client","title","state","client_id")}).catch(function(e){t.errorHandler(e)})},getAllClients:function(){var t=this;o.a.get(m+"/api/v1/client",{headers:{Authorization:d.getAuthenticationHeader(this)},params:{user_id:this.$cookie.get("user_id")}}).then(function(e){var i=e.data;t.clients=t.dataParser(i,"name","email","_id","phone"),console.log("Clients: "+g()(t.clients))}).catch(function(e){t.errorHandler(e)})},getBudget:function(t){var e=this;o.a.get(m+"/api/v1/budget/single",{headers:{Authorization:d.getAuthenticationHeader(this)},params:{user_id:this.$cookie.get("user_id"),_id:t._id}}).then(function(t){var i=t.data;e.budget=i,e.enableEdit("budget")}).catch(function(t){e.errorHandler(t)})},getClient:function(t){var e=this;o.a.get(m+"/api/v1/client/single",{headers:{Authorization:d.getAuthenticationHeader(this)},params:{user_id:this.$cookie.get("user_id"),_id:t._id}}).then(function(t){var i=t.data;console.log("Client Data: "+g()(i)),e.client=i,e.enableEdit("client")}).catch(function(t){e.errorHandler(t)})},enableEdit:function(t){"budget"===t?(this.listPage=!1,this.budgetEdit=!0,this.budgetCreation=!1,this.editPage=!0):"client"===t&&(this.listPage=!1,this.budgetEdit=!1,this.budgetCreation=!1,this.editPage=!0)},saveBudget:function(t){var e=this;t.user_id=t.user_id=this.$cookie.get("user_id"),console.log("Budget Data: "+g()(t)),o.a.post(m+"/api/v1/budget",t,{headers:{Authorization:d.getAuthenticationHeader(this)}}).then(function(i){e.resetFields(t),e.snackbar=!0,e.message=i.data.message,e.snackColor="green lighten-1",e.getAllBudgets()}).catch(function(t){e.errorHandler(t)})},fixClientNameAndUpdate:function(t){this.clients.find(function(e){e._id===t.client_id&&(t.client=e.name,t.client_id=e._id)}),this.updateBudget(t)},updateBudget:function(t){var e=this;t.user_id=t.user_id=this.$cookie.get("user_id"),o.a.put(m+"/api/v1/budget/single",t,{headers:{Authorization:d.getAuthenticationHeader(this)}}).then(function(){e.snackbar=!0,e.message="Budget updated",e.snackColor="green lighten-1",e.listPage=!0,e.budgetCreation=!1,e.budgetsVisible=!0,e.getAllBudgets()}).catch(function(t){e.errorHandler(t)})},updateClient:function(t){var e=this;t.user_id=this.$cookie.get("user_id"),o.a.put(m+"/api/v1/client/single",t,{headers:{Authorization:d.getAuthenticationHeader(this)}}).then(function(){e.snackbar=!0,e.message="Client updated",e.snackColor="green lighten-1",e.listPage=!0,e.budgetCreation=!1,e.budgetsVisible=!1,e.getAllClients()}).catch(function(t){e.errorHandler(t)})},saveClient:function(t){var e=this;t.user_id=this.$cookie.get("user_id"),o.a.post(m+"/api/v1/client",t,{headers:{Authorization:d.getAuthenticationHeader(this)}}).then(function(i){e.resetFields(t),e.snackbar=!0,e.message=i.data.message,e.snackColor="green lighten-1",e.getAllClients()}).catch(function(t){e.errorHandler(t)})},deleteItem:function(t,e,i){var n=this,a="";a=i?"budget":"client",o.a.delete(m+"/api/v1/"+a,{headers:{Authorization:d.getAuthenticationHeader(this)},params:{user_id:this.$cookie.get("user_id"),_id:t._id}}).then(function(){n.removeItem(t,e)}).then(function(){i?n.getAllBudgets():n.getAllClients()}).catch(function(t){n.errorHandler(t)})},errorHandler:function(t){console.log(g()(t));var e=t.response.status;this.snackbar=!0,this.snackColor="red lighten-1",this.message=404===e?"Invalid request":401===e||403===e?"Unauthorized":400===e?"Invalid or missing information":t.message},removeItem:function(t,e){e.forEach(function(i,n){i===t&&e.splice(n,1)})},dataParser:function(t){for(var e=arguments.length,i=Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];var a=[];return t.forEach(function(t){var e={};i.forEach(function(i){return e[i]=t[i]}),a.push(e)}),a},resetFields:function(t){for(var e in t)t[e]=null,"quantity"!==e&&"price"!==e||(t[e]=0),t.items=[]},selectState:function(t){this.state=t,"all"===t?this.getAllBudgets():this.getBudgetsByState(t)},getBudgetsByState:function(t){var e=this;o.a.get(m+"/api/v1/budget/state",{headers:{Authorization:d.getAuthenticationHeader(this)},params:{user_id:this.$cookie.get("user_id"),state:t}}).then(function(t){var i=t.data;e.budgets=e.dataParser(i,"_id","client","title","state","client_id")}).catch(function(t){e.errorHandler(t)})}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("app-header",{attrs:{budgetsVisible:t.budgetsVisible,selectState:t.selectState,search:t.search},on:{toggleVisibleData:function(e){t.budgetsVisible=!t.budgetsVisible,t.budgetCreation=!t.budgetCreation}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),i("v-content",[i("v-container",[t.listPage?i("list",[i("list-header",{attrs:{slot:"list-header",headers:t.budgetsVisible?t.budgetHeaders:t.clientHeaders},slot:"list-header"}),t._v(" "),i("list-body",{attrs:{slot:"list-body",budgetsVisible:t.budgetsVisible,data:t.budgetsVisible?t.budgets:t.clients,search:t.search,deleteItem:t.deleteItem,getBudget:t.getBudget,getClient:t.getClient,parsedBudgets:t.parsedBudgets},slot:"list-body"})],1):t.createPage?i("create",{attrs:{budgetCreation:t.budgetCreation,budgetEdit:t.budgetEdit,editPage:t.editPage,clients:t.clients,budget:t.budget,client:t.client,saveBudget:t.saveBudget,saveClient:t.saveClient,fixClientNameAndUpdate:t.fixClientNameAndUpdate,updateClient:t.updateClient}}):t._e()],1),t._v(" "),i("v-snackbar",{attrs:{timeout:t.timeout,bottom:"bottom",color:"red lighten-1"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(t._s(t.message))]),t._v(" "),i("v-fab-transition",[i("v-speed-dial",{attrs:{bottom:"",right:"",fixed:"",direction:"top",transition:"scale-transition"},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[i("v-btn",{attrs:{slot:"activator",color:"red lighten-1",dark:"",fab:""},slot:"activator",model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[i("v-icon",[t._v("add")]),t._v(" "),i("v-icon",[t._v("close")])],1),t._v(" "),i("v-tooltip",{attrs:{left:""}},[i("v-btn",{attrs:{slot:"activator",color:"light-blue lighten-1",dark:"",small:"",fab:""},nativeOn:{click:function(e){t.budgetCreation=!0,t.listPage=!1,t.editPage=!1,t.createPage=!0}},slot:"activator"},[i("v-icon",[t._v("assignment")])],1),t._v(" "),i("span",[t._v("Add new Budget")])],1),t._v(" "),i("v-tooltip",{attrs:{left:""}},[i("v-btn",{attrs:{slot:"activator",color:"green lighten-1",dark:"",small:"",fab:""},nativeOn:{click:function(e){t.budgetCreation=!1,t.listPage=!1,t.editPage=!1,t.createPage=!0}},slot:"activator"},[i("v-icon",[t._v("account_circle")])],1),t._v(" "),i("span",[t._v("Add new Client")])],1),t._v(" "),i("v-tooltip",{attrs:{left:""}},[i("v-btn",{attrs:{slot:"activator",color:"purple lighten-2",dark:"",small:"",fab:""},nativeOn:{click:function(e){t.budgetCreation=!1,t.listPage=!0,t.budgetsVisible=!0}},slot:"activator"},[i("v-icon",[t._v("assessment")])],1),t._v(" "),i("span",[t._v("List Budgets")])],1),t._v(" "),i("v-tooltip",{attrs:{left:""}},[i("v-btn",{attrs:{slot:"activator",color:"deep-orange lighten-2",dark:"",small:"",fab:""},nativeOn:{click:function(e){t.budgetCreation=!1,t.listPage=!0,t.budgetsVisible=!1}},slot:"activator"},[i("v-icon",[t._v("supervisor_account")])],1),t._v(" "),i("span",[t._v("List Clients")])],1)],1)],1)],1)],1)},staticRenderFns:[]},x=i("VU/8")(p,_,!1,null,null,null).exports,k={data:function(){return{snackbar:!1,validLogin:!1,validSignUp:!1,signUpVisible:!1,loginPasswordVisible:!1,signUpPasswordVisible:!1,rules:[function(t){return!!t||"This field is required"}],credentials:{username:"",password:""},newUser:{username:"",password:""},message:""}},methods:{submitAuthentication:function(){d.authenticate(this,this.credentials,"/")},submitSignUp:function(){d.signup(this,this.newUser,"/")}},props:{timeout:{type:Number,default:6e3}}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-toolbar",{attrs:{dark:"",fixed:"",app:""}},[i("v-toolbar-title",[t._v("Budgeter")]),t._v(" "),i("v-spacer"),t._v(" "),i("v-toolbar-items",[t.signUpVisible?t._e():i("v-btn",{attrs:{flat:""},nativeOn:{click:function(e){t.signUpVisible=!0}}},[t._v("\n            Sign Up\n            ")]),t._v(" "),t.signUpVisible?i("v-btn",{attrs:{flat:""},nativeOn:{click:function(e){t.signUpVisible=!1}}},[t._v("\n                Login\n            ")]):t._e()],1)],1),t._v(" "),i("v-content",[i("v-container",{attrs:{fluid:"","fill-height":""}},[i("v-layout",[i("v-flex",{attrs:{xs10:"",md6:"",lg4:"","offset-xs1":"","offset-md3":"","offset-lg4":""}},[i("div",{staticClass:"l-auth-container"},[i("div",{staticClass:"l-auth"},[t.signUpVisible?t._e():i("v-form",{model:{value:t.validLogin,callback:function(e){t.validLogin=e},expression:"validLogin"}},[i("h3",[t._v("Log In")]),t._v(" "),i("v-text-field",{attrs:{label:"Username","prepend-icon":"account_box",rules:t.rules,required:"",color:"light-blue lighten-1"},model:{value:t.credentials.username,callback:function(e){t.$set(t.credentials,"username",e)},expression:"credentials.username"}}),t._v(" "),i("v-text-field",{attrs:{label:"Password","prepend-icon":"lock",rules:t.rules,"append-icon":t.loginPasswordVisible?"visibility":"visibility_off","append-icon-cb":function(){return t.loginPasswordVisible=!t.loginPasswordVisible},type:t.loginPasswordVisible?"text":"password",color:"light-blue lighten-1",required:""},model:{value:t.credentials.password,callback:function(e){t.$set(t.credentials,"password",e)},expression:"credentials.password"}}),t._v(" "),i("v-btn",{attrs:{color:"light-blue lighten-1"},nativeOn:{click:function(e){t.submitAuthentication()}}},[t._v("\n                                    Login\n                                ")])],1)],1),t._v(" "),t.signUpVisible?i("div",{staticClass:"l-signup"},[i("v-form",{model:{value:t.validSignUp,callback:function(e){t.validSignUp=e},expression:"validSignUp"}},[i("h3",[t._v("Register")]),t._v(" "),i("v-text-field",{attrs:{label:"Username","prepend-icon":"account_box",rules:t.rules,required:"",color:"light-blue lighten-1"},model:{value:t.newUser.username,callback:function(e){t.$set(t.newUser,"username",e)},expression:"newUser.username"}}),t._v(" "),i("v-text-field",{attrs:{label:"Password","prepend-icon":"lock",rules:t.rules,"append-icon":t.signUpPasswordVisible?"visibility":"visibility_off","append-icon-cb":function(){return t.signUpPasswordVisible=!t.signUpPasswordVisible},type:t.signUpPasswordVisible?"text":"password",color:"light-blue lighten-1",required:""},model:{value:t.newUser.password,callback:function(e){t.$set(t.newUser,"password",e)},expression:"newUser.password"}}),t._v(" "),i("v-btn",{attrs:{color:"light-blue lighten-1"},nativeOn:{click:function(e){t.submitSignUp()}}},[t._v("\n                                    Sign Up\n                                ")])],1)],1):t._e(),t._v(" "),i("v-snackbar",{attrs:{timeout:t.timeout,bottom:"bottom",color:"red lighten-1"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n                        "+t._s(t.message)+"\n                        ")])],1)])],1)],1)],1)],1)},staticRenderFns:[]},w=i("VU/8")(k,C,!1,null,null,null).exports,V={props:["budgetsVisible","selectState","search"],data:function(){return{searchValue:"",status:"",statusItems:["all","approved","denied","waiting","writing","editing"]}},watch:{searchValue:function(){this.$emit("input",this.searchValue)}},created:function(){this.searchValue=this.search},methods:{submitSignout:function(){d.logoutUser(this,"/login")}}},$={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-toolbar",{attrs:{dark:"",fixed:""}},[i("v-toolbar-title",[t._v("Budgeter")]),t._v(" "),i("v-spacer"),t._v(" "),i("v-toolbar-items",[i("v-btn",{attrs:{flat:""},nativeOn:{click:function(e){t.submitSignout()}}},[t._v("\n          Logout\n        ")])],1)],1),t._v(" "),i("v-container",[i("v-layout",{class:t.budgetsVisible?"l-budgets-header":"l-clients-header",staticStyle:{"margin-top":"75px"},attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",md5:""}},[i("v-text-field",{attrs:{label:"Search","append-icon":"search",color:t.budgetsVisible?"light-blue-lighten-1":"green lighten-1"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),i("v-flex",{attrs:{xs12:"","offset-md1":"",md1:""}},[i("v-btn",{attrs:{block:"",color:t.budgetsVisible?"light-blue lighten-1":"green lighten-1"},nativeOn:{click:function(e){t.$emit("toggleVisibleData")}}},[t._v(t._s(t.budgetsVisible?"Clients":"Budgets"))])],1),t._v(" "),i("v-flex",{attrs:{xs12:"","offset-md1":"",md4:""}},[i("v-select",{attrs:{label:"Status",color:t.budgetsVisible?"light-blue lighten-1":"green lighten-1",items:t.statusItems,"single-line":""},on:{change:t.selectState},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}})],1)],1)],1)],1)},staticRenderFns:[]},A=i("VU/8")(V,$,!1,null,null,null).exports,U={render:function(){var t=this.$createElement;return(this._self._c||t)("section",{staticClass:"l-list-container"},[this._t("list-header"),this._v(" "),this._t("list-body")],2)},staticRenderFns:[]},y=i("VU/8")({},U,!1,null,null,null).exports,B={props:["clients","saveBudget"],data:function(){return{budget:{title:null,description:null,state:"writing",client:null,get total_price(){var t=0;return this.items.forEach(function(e){var i=e.subtotal;t+=parseInt(i)}),t},items:[{title:null,quantity:0,price:0,get subtotal(){return this.quantity*this.price}}]},states:["writing","editing","pending","approved","denied","waiting"]}},methods:{addItem:function(){var t=this.budget.items,e={title:"",quantiti:0,price:0,get subtotal(){return this.quantity&&this.price?this.quantity*this.price:0}};t.push(e)},removeItem:function(t){var e=this.budget.items;e.forEach(function(i,n){i===t&&e.splice(n,1)})}}},P={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"l-budget-creation"},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",md2:""}},[i("v-select",{attrs:{label:"Status",items:t.states},model:{value:t.budget.state,callback:function(e){t.$set(t.budget,"state",e)},expression:"budget.state"}})],1),t._v(" "),i("v-flex",{attrs:{xs12:"",md9:"","offset-md1":""}},[i("v-select",{attrs:{label:"Client",items:t.clients,"item-text":"name","item-value":"_id"},model:{value:t.budget.client_id,callback:function(e){t.$set(t.budget,"client_id",e)},expression:"budget.client_id"}})],1),t._v(" "),i("v-flex",{attrs:{xs12:"",md12:""}},[i("v-text-field",{attrs:{label:"Title",required:"",color:"light-blue lighten-1"},model:{value:t.budget.title,callback:function(e){t.$set(t.budget,"title",e)},expression:"budget.title"}}),t._v(" "),i("v-text-field",{attrs:{label:"Description",textarea:"",required:"",color:"light-blue lighten-1"},model:{value:t.budget.description,callback:function(e){t.$set(t.budget,"description",e)},expression:"budget.description"}})],1),t._v(" "),t._l(t.budget.items,function(e){return i("v-layout",{key:e.id,staticClass:"l-budget-item",attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",md1:""}},[i("v-btn",{attrs:{block:"",dark:"",color:"red lighten-1"},nativeOn:{click:function(i){t.removeItem(e)}}},[t._v("Remove")])],1),t._v(" "),i("v-flex",{attrs:{xs12:"",md3:"","offset-md1":""}},[i("v-text-field",{attrs:{label:"Title",required:"",color:"blue"},model:{value:e.title,callback:function(i){t.$set(e,"title",i)},expression:"item.title"}})],1),t._v(" "),i("v-flex",{attrs:{xs12:"",md1:"","offset-md1":""}},[i("v-text-field",{attrs:{label:"Price",prefix:"$",required:"",color:"blue"},model:{value:e.price,callback:function(i){t.$set(e,"price",i)},expression:"item.price"}})],1),t._v(" "),i("v-flex",{attrs:{xs12:"",md2:"","offset-md1":""}},[i("v-text-field",{staticClass:"black--text",attrs:{label:"Quantity",min:"0",type:"number",required:"",color:"blue"},model:{value:e.quantity,callback:function(i){t.$set(e,"quantity",i)},expression:"item.quantity"}})],1),t._v(" "),i("v-flex",{attrs:{xs12:"",md2:""}},[i("span",{staticClass:"md-budget-item-subtotal black--text"},[t._v("ITEM PRICE $ "+t._s(e.subtotal))])])],1)}),t._v(" "),i("v-flex",{attrs:{xs12:"",md2:"","offset-md10":""}},[i("v-btn",{attrs:{block:"",color:"md-add-item-btn blue"},nativeOn:{click:function(e){t.addItem()}}},[t._v("Add item")])],1),t._v(" "),i("v-flex",{attrs:{xs12:"",md2:"","offset-md10":""}},[i("span",{staticClass:"md-budget-item-total black--text"},[t._v("TOTAL $ "+t._s(t.budget.total_price))])]),t._v(" "),i("v-flex",{attrs:{xs12:"",md2:"","offset-md10":""}},[i("v-btn",{attrs:{block:"",color:"md-add-item-btn green"},nativeOn:{click:function(e){t.saveBudget(t.budget)}}},[t._v("Save")])],1)],2)],1)},staticRenderFns:[]},q={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"l-client-creation"},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",md4:""}},[i("v-text-field",{attrs:{label:"Name",required:"",color:"green lighten-1"},model:{value:t.client.name,callback:function(e){t.$set(t.client,"name",e)},expression:"client.name"}})],1),t._v(" "),i("v-flex",{attrs:{xs12:"",md3:"","offset-md1":""}},[i("v-text-field",{attrs:{label:"Email",required:"",color:"green lighten-1"},model:{value:t.client.email,callback:function(e){t.$set(t.client,"email",e)},expression:"client.email"}})],1),t._v(" "),i("v-flex",{attrs:{xs12:"",md3:"","offset-md1":""}},[i("v-text-field",{attrs:{label:"Phone",required:"",mask:"phone",color:"green lighten-1"},model:{value:t.client.phone,callback:function(e){t.$set(t.client,"phone",e)},expression:"client.phone"}})],1),t._v(" "),i("v-flex",{attrs:{xs12:"",md2:"","offset-md10":""}},[i("v-btn",{attrs:{block:"",color:"md-add-item-btn green lighten-1"},nativeOn:{click:function(e){t.saveClient(t.client)}}},[t._v("Save")])],1)],1)],1)},staticRenderFns:[]},E={props:["clients","fixClientNameAndUpdate","selectedBudget"],data:function(){return{budget:{title:null,description:null,state:"pending",client:null,get total_price(){var t=0;return this.items.forEach(function(e){var i=e.subtotal;t+=parseInt(i)}),t},items:[{title:null,quantity:0,price:null,get subtotal(){return this.quantity*this.price}}]},states:["writing","editing","pending","approved","denied","waiting"]}},mounted:function(){this.parseBudget()},methods:{addItem:function(){var t=this.budget.items,e={title:"",quantity:0,price:0,get subtotal(){return this.quantity*this.price}};t.push(e)},removeItem:function(t){var e=this.budget.items;e.forEach(function(i,n){i===t&&e.splice(n,1)})},parseBudget:function(){var t,e,i=this;for(var n in this.selectedBudget)"total"!==n&&"items"!==n&&(this.budget[n]=this.selectedBudget[n]),"items"===n&&(void 0,void 0,t=i.selectedBudget.items,e=function(t){return{title:t.title,quantity:t.quantity,price:t.price,get subtotal(){return this.quantity*this.price}}},i.budget.items=function(t){return t.map(e)}(t));console.log("Budget: "+g()(this.budget))}}},H={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"l-budget-creation"},[i("v-layout",{attrs:{row:"",wrap:""}},[i("span",{staticClass:"md-budget-state-hint uppercased white--text"},[t._v("status")]),t._v(" "),i("v-flex",{attrs:{xs12:"",md2:""}},[i("v-select",{attrs:{label:"Status",items:t.states},model:{value:t.budget.state,callback:function(e){t.$set(t.budget,"state",e)},expression:"budget.state"}})],1),t._v(" "),i("v-flex",{attrs:{xs12:"",md9:"","offset-md1":""}},[i("v-select",{attrs:{label:"Client",items:t.clients,"item-text":"name","item-value":"_id"},model:{value:t.budget.client,callback:function(e){t.$set(t.budget,"client",e)},expression:"budget.client"}})],1),t._v(" "),i("v-flex",{attrs:{xs12:"",md12:""}},[i("v-text-field",{attrs:{label:"Title",required:"",color:"light-blue lighten-1"},model:{value:t.budget.title,callback:function(e){t.$set(t.budget,"title",e)},expression:"budget.title"}}),t._v(" "),i("v-text-field",{attrs:{label:"Description",textarea:"",required:"",color:"light-blue lighten-1"},model:{value:t.budget.description,callback:function(e){t.$set(t.budget,"description",e)},expression:"budget.description"}})],1),t._v(" "),t._l(t.budget.items,function(e){return i("v-layout",{key:e.id,staticClass:"l-budget-item",attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",md1:""}},[i("v-btn",{attrs:{block:"",dark:"",color:"red lighten-1"},nativeOn:{click:function(i){t.removeItem(e)}}},[t._v("Remove")])],1),t._v(" "),i("v-flex",{attrs:{xs12:"",md3:"","offset-md1":""}},[i("v-text-field",{attrs:{label:"Title",box:"",dark:"",required:"",color:"light-blue lighten-1"},model:{value:e.title,callback:function(i){t.$set(e,"title",i)},expression:"item.title"}})],1),t._v(" "),i("v-flex",{attrs:{xs12:"",md1:"","offset-md1":""}},[i("v-text-field",{attrs:{label:"Price",box:"",dark:"",prefix:"$",required:"",color:"light-blue lighten-1"},model:{value:e.price,callback:function(i){t.$set(e,"price",i)},expression:"item.price"}})],1),t._v(" "),i("v-flex",{attrs:{xs12:"",md2:"","offset-md1":""}},[i("v-text-field",{attrs:{label:"Quantity",box:"",dark:"",min:"0",type:"number",required:"",color:"light-blue lighten-1"},model:{value:e.quantity,callback:function(i){t.$set(e,"quantity",i)},expression:"item.quantity"}})],1),t._v(" "),i("v-flex",{attrs:{xs12:"",md2:""}},[i("span",{staticClass:"md-budget-item-subtotal white--text"},[t._v("ITEM PRICE $ "+t._s(e.subtotal))])])],1)}),t._v(" "),i("v-flex",{attrs:{xs12:"",md2:"","offset-md10":""}},[i("v-btn",{attrs:{block:"",color:"md-add-item-btn light-blue lighten-1"},nativeOn:{click:function(e){t.addItem()}}},[t._v("Add item")])],1),t._v(" "),i("v-flex",{attrs:{xs12:"",md2:"","offset-md10":""}},[i("span",{staticClass:"md-budget-item-total white--text"},[t._v("TOTAL $ "+t._s(t.budget.total_price))])]),t._v(" "),i("v-flex",{attrs:{xs12:"",md2:"","offset-md10":""}},[i("v-btn",{attrs:{block:"",color:"md-add-item-btn green lighten-1"},nativeOn:{click:function(e){t.fixClientNameAndUpdate(t.budget)}}},[t._v("Update")])],1)],2)],1)},staticRenderFns:[]},I={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"l-client-creation"},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",md4:""}},[i("v-text-field",{attrs:{label:"Name",required:"",color:"green lighten-1"},model:{value:t.client.name,callback:function(e){t.$set(t.client,"name",e)},expression:"client.name"}})],1),t._v(" "),i("v-flex",{attrs:{xs12:"",md3:"","offset-md1":""}},[i("v-text-field",{attrs:{label:"Email",required:"",color:"green lighten-1"},model:{value:t.client.email,callback:function(e){t.$set(t.client,"email",e)},expression:"client.email"}})],1),t._v(" "),i("v-flex",{attrs:{xs12:"",md3:"","offset-md1":""}},[i("v-text-field",{attrs:{label:"Phone",required:"",mask:"phone",color:"green lighten-1"},model:{value:t.client.phone,callback:function(e){t.$set(t.client,"phone",e)},expression:"client.phone"}})],1),t._v(" "),i("v-flex",{attrs:{xs12:"",md2:"","offset-md10":""}},[i("v-btn",{attrs:{block:"",color:"md-add-item-btn green lighten-1"},nativeOn:{click:function(e){t.updateClient(t.client)}}},[t._v("Update")])],1)],1)],1)},staticRenderFns:[]},S={props:["budgetCreation","clients","saveBudget","saveClient","budget","client","updateClient","fixClientNameAndUpdate","editPage","budgetEdit"],components:{"budget-creation":i("VU/8")(B,P,!1,null,null,null).exports,"client-creation":i("VU/8")({props:["saveClient"],data:function(){return{client:{name:null,email:null,phone:null}}}},q,!1,null,null,null).exports,"budget-edit":i("VU/8")(E,H,!1,null,null,null).exports,"client-edit":i("VU/8")({props:["updateClient","selectedClient"],data:function(){return{client:{name:null,email:null,phone:null}}},mounted:function(){this.client=this.selectedClient}},I,!1,null,null,null).exports}},O={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"l-create-page"},[t.budgetCreation&&!t.editPage?i("budget-creation",{attrs:{slot:"budget-creation",clients:t.clients,saveBudget:t.saveBudget},slot:"budget-creation"}):t._e(),t._v(" "),t.budgetCreation||t.editPage?t.budgetEdit&&t.editPage?i("budget-edit",{attrs:{slot:"budget-creation",clients:t.clients,selectedBudget:t.budget,fixClientNameAndUpdate:t.fixClientNameAndUpdate},slot:"budget-creation"}):!t.budgetEdit&&t.editPage?i("client-edit",{attrs:{slot:"client-creation",selectedClient:t.client,updateClient:t.updateClient},slot:"client-creation"}):t._e():i("client-creation",{attrs:{slot:"client-creation",saveClient:t.saveClient},slot:"client-creation"})],1)},staticRenderFns:[]},R=i("VU/8")(S,O,!1,null,null,null).exports;n.a.component("app-header",A),n.a.component("list",y),n.a.component("create",R),n.a.use(l.a);var F=new l.a({routes:[{path:"/login",name:"Authentication",component:w},{path:"/",name:"Home",components:{default:x,header:A,list:y,create:R},meta:{requiredAuth:!0}}]});F.beforeEach(function(t,e,i){"/login"!==t.path?d.user.authenticated?i():F.push("/login"):i()});var N=F,L=i("K/Lq"),T=i.n(L),z=i("3EgV"),D=i.n(z);i.e(1).then(i.bind(null,"7zck")),i.e(2).then(i.bind(null,"gJtD")),i.e(0).then(i.bind(null,"j1ja")),n.a.use(T.a),n.a.use(D.a),n.a.config.productionTip=!1,d.checkAuthentication(),new n.a({el:"#app",router:N,render:function(t){return t(s)}})},YDNJ:function(t,e){},Zfjm:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3575db964b1370231c3c.js.map