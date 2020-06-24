(function(t){function e(e){for(var s,n,l=e[0],i=e[1],c=e[2],d=0,p=[];d<l.length;d++)n=l[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,l=1;l<a.length;l++){var i=a[l];0!==r[i]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=i;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00a2":function(t,e,a){"use strict";var s=a("7581"),r=a.n(s);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("a026"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("div",[a("v-app-bar",[""!=t.focusedCountry?a("a",{staticClass:"text-decoration-none ml-n4",attrs:{href:"/"}},[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",depressed:"",color:"primary"}},[a("v-icon",[t._v("mdi-chevron-left")])],1)],1):t._e(),a("div",[t._v(" COVID-19 STATS ")])])],1),""!=t.focusedCountry?a("countryHistory",{attrs:{loadWhichCountry:t.focusedCountry}}):t._e(),a("v-container",[""==t.focusedCountry?a("v-form",{ref:"form"},[a("v-text-field",{staticClass:"flex-shrink-0",attrs:{label:"Filter Country Name",filled:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1):t._e(),""==t.focusedCountry?a("countryQuickStats",{attrs:{countryURL:"",search:t.search}}):t._e(),t.areCountriesLoaded?t._e():a("v-row",[a("v-col",{staticClass:"text-center"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)],1),""!=t.focusedCountry?a("countryQuickStats",{attrs:{countryURL:t.focusedCountry,search:t.focusedCountry}}):t._e()],1),a("v-footer",{attrs:{padless:""}},[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[a("v-card-title",[a("div",{staticClass:"footer-msg font-italic text-xs"},[t._v(' "Help prevent the spread of COVID-19. Clean your hands often, maintain social distancing and stay home if you feel unwell." ')])]),a("v-card-text",[a("div",{staticClass:"py-2 site-author text-center text-xxs"},[t._v(t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Artvader")])])])],1)],1)],1)},o=[],n=(a("4de4"),a("c975"),a("ac1f"),a("841c"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[0==t.totalCases.length?a("v-sheet",{staticClass:"d-flex align-center justify-center",attrs:{color:"transparent","min-height":"50vh"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1):t._e(),t.totalCases.length>0?a("v-row",[a("v-col",{attrs:{cols:12}},[a("h2",{staticClass:"chart-heading"},[a("span",{domProps:{innerHTML:t._s(t.highlightedCountry)}}),t._v(" "),a("span",{staticClass:"text-sm text--disabled"},[t._v("historical trend")])])]),t.dailyCases.length>0?a("v-col",{attrs:{cols:12}},[a("v-sheet",{staticClass:"graph",attrs:{color:"transparent",outlined:!0}},[a("p",{staticClass:"chart-title top"},[t._v("Daily New Cases")]),a("v-sparkline",{attrs:{value:t.dailyCases,gradient:["#FF0","#F0F","#00c6ff"],smooth:10,padding:8,"line-width":2,"stroke-linecap":"round","gradient-direction":"top",fill:!1,type:"trend","auto-line-width":!1,"auto-draw":"","show-labels":!1,"label-size":7}})],1)],1):t._e(),t.totalCases.length>0?a("v-col",{attrs:{cols:6}},[a("v-sheet",{staticClass:"graph",attrs:{color:"transparent",outlined:!0}},[a("p",{staticClass:"chart-title"},[t._v("Cases")]),a("v-sparkline",{attrs:{value:t.totalCases,gradient:["#FF0","#F0F","#00c6ff"],smooth:10,padding:8,"line-width":2,"stroke-linecap":"round","gradient-direction":"top",fill:!1,type:"trend","auto-line-width":!1,"auto-draw":"","show-labels":!1,"label-size":7}})],1)],1):t._e(),t.totalRecovered.length>0?a("v-col",{attrs:{cols:6}},[a("v-sheet",{staticClass:"graph",attrs:{color:"transparent",outlined:!0}},[a("p",{staticClass:"chart-title"},[t._v("Recovered")]),a("v-sparkline",{attrs:{value:t.totalRecovered,gradient:["#FF0","#F0F","#00c6ff"],smooth:10,padding:8,"line-width":2,"stroke-linecap":"round","gradient-direction":"top",fill:!1,type:"trend","auto-line-width":!1,"auto-draw":"","show-labels":!1,"label-size":7}})],1)],1):t._e(),t.totalDeaths.length>0?a("v-col",{attrs:{cols:6}},[a("v-sheet",{staticClass:"graph",attrs:{color:"transparent",outlined:!0}},[a("p",{staticClass:"chart-title"},[t._v("Deaths")]),a("v-sparkline",{attrs:{value:t.totalDeaths,gradient:["#FF0","#F0F","#00c6ff"],smooth:10,padding:8,"line-width":2,"stroke-linecap":"round","gradient-direction":"top",fill:!1,type:"trend","auto-line-width":!1,"auto-draw":"","show-labels":!1,"label-size":7}})],1)],1):t._e(),t.totalTested.length>0?a("v-col",{attrs:{cols:6}},[a("v-sheet",{staticClass:"graph",attrs:{color:"transparent",outlined:!0}},[a("p",{staticClass:"chart-title"},[t._v("Tests Done")]),a("v-sparkline",{attrs:{value:t.totalTested,gradient:["#FF0","#F0F","#00c6ff"],smooth:10,padding:8,"line-width":2,"stroke-linecap":"round","gradient-direction":"top",fill:!1,type:"trend","auto-line-width":!1,"auto-draw":"","show-labels":!1,"label-size":7}})],1)],1):t._e()],1):t._e()],1)}),l=[],i=(a("a9e3"),a("d3b7"),{name:"highlightCountry",components:{},data:function(){return{results:[],totalCases:[],totalDeaths:[],totalRecovered:[],reportedDate:[],totalTested:[],highlightedCountry:""}},methods:{getData:function(t){var e=this;fetch("https://covid-193.p.rapidapi.com/history?country="+t,{method:"GET",headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"d9822f5bcbmsh198dadc54bf35b0p159988jsnd34bf1ce4b3c"}}).then((function(t){return t.json()})).then((function(t){var a=[],s=[],r=[],o=[],n=[],l=[],i=[];for(a in t.response)null!=t.response[a].cases.total&&s.push(t.response[a].cases.total),null!=t.response[a].cases.recovered&&o.push(t.response[a].cases.recovered),null!=t.response[a].deaths.total&&r.push(t.response[a].deaths.total),null!=t.response[a].tests.total&&l.push(t.response[a].tests.total),null!=t.response[a].cases.new&&i.push(Number(t.response[a].cases.new)),n.push(t.response[a].time);e.totalCases=s.reverse(),e.totalDeaths=r.reverse(),e.totalRecovered=o.reverse(),e.reportedDate=n.reverse(),e.totalTested=l.reverse(),e.dailyCases=i.reverse(),e.highlightedCountry=t.response[a].country,localStorage.setItem("path","")}))}},props:{loadWhichCountry:{type:String,default:"usa"}},computed:{},watch:{},created:function(){var t=this;this.$store.watch((function(t){return t.countryList}),(function(e){e&&(t.loadWhichCountry.length>0?-1!=e.indexOf(t.loadWhichCountry)&&t.getData(t.loadWhichCountry):t.getData("afghanistan"))}))},mounted:function(){}}),c=i,u=(a("9d24"),a("2877")),d=a("6544"),p=a.n(d),h=a("62ad"),f=a("a523"),v=a("490a"),m=a("0fd9"),x=a("8dd9"),C=a("7f2e"),y=Object(u["a"])(c,n,l,!1,null,null,null),g=y.exports;p()(y,{VCol:h["a"],VContainer:f["a"],VProgressCircular:v["a"],VRow:m["a"],VSheet:x["a"],VSparkline:C["a"]});var b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",t._l(t.filteredItems,(function(e){return a("v-col",{key:e.country,attrs:{cols:12}},[null!=e.continent&&e.continent!=e.country?a("div",{staticClass:"primary-text"},[a("v-row",[a("v-col",[a("h2",{staticClass:"text-md"},[a("span",{domProps:{innerHTML:t._s(e.country)}}),t._v(" "),""!=t.countryURL?a("span",{staticClass:"text-xs font-weight-regular text--disabled"},[t._v("current stats")]):t._e(),t._v(" "),""==t.countryURL?a("a",{staticClass:"text-xxs",attrs:{href:"/"+e.country.toLowerCase()}},[t._v("Historical Data")]):t._e()]),a("h3",{staticClass:"text-xs font-weight-regular"},[a("span",[t._v("pop:")]),t._v(" "),a("span",{staticClass:"font-weight-bold"},[t._v(t._s(Number(e.population).toLocaleString()))]),a("time",{staticClass:"d-block text-xxs text--disabled"},[t._v(" "+t._s(t._f("moment")(e.time,"MMMM D YYYY"))+" ")])])]),a("v-col",{attrs:{cols:4}},[a("v-sheet",{staticClass:"mx-1",attrs:{color:"#e09111",outlined:!0,rounded:!0}},[a("div",{staticClass:"text-center text-xxs text--secondary"},[t._v(" New Cases ")]),a("div",{staticClass:"text-center text-xxs text--primary"},[t._v(" +"+t._s(Number(e.cases.new).toLocaleString())+" ")])])],1)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:3,sm:4,md:4,lg:2,"offset-lg":"2"}},[a("donutGraph",{attrs:{donutTotal:e.cases.total,donutSlice:e.cases.recovered,mainColor:"#cef263",donutLabel:"recovered"}}),a("v-sheet",{staticClass:"mx-1",attrs:{color:"#213349",outlined:!0,rounded:!0}},[a("div",{staticClass:"text-center text-xxs text--disabled"},[t._v(" Recovered ")]),a("div",{staticClass:"text-center text-xs text--secondary"},[t._v(" "+t._s(Number(e.cases.recovered).toLocaleString())+" ")])])],1),a("v-col",{attrs:{cols:3,sm:4,lg:2}},[a("donutGraph",{attrs:{donutTotal:e.cases.total,donutSlice:e.deaths.total,mainColor:"#e03535",donutLabel:"deaths"}}),a("v-sheet",{staticClass:"mx-1",attrs:{color:"#213349",outlined:!0,rounded:!0}},[a("div",{staticClass:"text-center text-xxs text--disabled"},[t._v(" Deaths ")]),a("div",{staticClass:"text-center text-xs text--secondary"},[t._v(" "+t._s(Number(e.deaths.total).toLocaleString())+" ")])])],1),null!=e.population?a("v-col",{attrs:{cols:3,sm:4,lg:2}},[a("donutGraph",{attrs:{donutTotal:e.population,donutSlice:e.cases.total,decimalPlaces:3,mainColor:"#ff9200",classes:"smaller-number",donutLabel:"cases / pop"}}),a("v-sheet",{staticClass:"mx-1",attrs:{color:"#213349",outlined:!0,rounded:!0}},[a("div",{staticClass:"text-center text-xxs text--disabled"},[t._v(" Total Cases ")]),a("div",{staticClass:"text-center text-xs text--secondary"},[t._v(" "+t._s(Number(e.cases.total).toLocaleString())+" ")])])],1):t._e(),null!=e.population?a("v-col",{attrs:{cols:3,sm:4,lg:2}},[a("donutGraph",{attrs:{donutTotal:e.population,donutSlice:e.tests.total,decimalPlaces:3,classes:"smaller-number",donutLabel:"test / pop"}}),a("v-sheet",{staticClass:"mx-1",attrs:{color:"#213349",outlined:!0,rounded:!0}},[a("div",{staticClass:"text-center text-xxs text--disabled"},[t._v(" Tested ")]),a("div",{staticClass:"text-center text-xs text--secondary"},[t._v(" "+t._s(Number(e.tests.total).toLocaleString())+" ")])])],1):t._e()],1)],1):t._e()])})),1)},_=[],w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("svg",{staticClass:"donut",attrs:{width:"100%",height:"100%",viewBox:"0 0 42 42"}},[a("circle",{staticClass:"donut-ring",class:t.classes,attrs:{cx:"21",cy:"21",r:"15.91549430918954",fill:"transparent",stroke:t.trackColor,"stroke-width":"3",opacity:".3"}}),a("transition",{attrs:{name:"fill-up",mode:"out-in"}},[a("circle",{key:t.donutName,staticClass:"donut-segment",attrs:{cx:"21",cy:"21",r:"15.91549430918954",fill:"transparent",stroke:t.mainColor,"stroke-width":"3","stroke-dasharray":[t.donutSlice/t.donutTotal*100,100-t.donutSlice/t.donutTotal*100],"stroke-dashoffset":"25","stroke-linecap":"round"}})]),a("g",{staticClass:"chart-text"},[a("text",{staticClass:"chart-number",class:t.classes,attrs:{x:"50%",y:"50%"}},[t._v(" "+t._s(Number(t.donutSlice/t.donutTotal*100).toFixed(Number(t.decimalPlaces)))+"% ")]),a("text",{staticClass:"chart-label",attrs:{x:"50%",y:"50%"}},[t._v(t._s(t.donutLabel))])])],1)])},S=[],L={name:"donutGraph",components:{},props:{donutTotal:{type:Number,default:0},donutSlice:{type:Number,default:0},donutName:{type:String,default:""},donutLabel:{type:String,default:""},classes:{type:String,default:""},mainColor:{type:String,default:"#be4b99"},trackColor:{type:String,default:"#000000"},decimalPlaces:{type:Number,default:1},fontSize:{type:String,default:"0.55em"}},data:function(){return{}}},k=L,T=(a("f80e"),Object(u["a"])(k,w,S,!1,null,null,null)),F=T.exports,D={name:"Home",components:{donutGraph:F},data:function(){return{}},props:{search:{type:String,default:""},countryURL:{type:String,default:""}},computed:{filteredItems:function(){var t=this;return this.$store.getters.worldData.filter((function(e){return e.country.toLowerCase().indexOf(t.search.toLowerCase())>-1}))}},methods:{}},V=D,N=(a("00a2"),Object(u["a"])(V,b,_,!1,null,"4afd7a96",null)),O=N.exports;p()(N,{VCol:h["a"],VRow:m["a"],VSheet:x["a"]});var j={name:"App",components:{countryHistory:g,countryQuickStats:O},title:function(){return"COV19Spy | ".concat(this.focusedCountry.toUpperCase())},data:function(){return{pageLocation:"",to:{},from:{},search:"",areCountriesLoaded:!1,focusedCountry:""}},methods:{pageIdentify:function(){this.focusedCountry=localStorage.getItem("path"),window.history.pushState("","","/"+localStorage.getItem("path"))}},watch:{$route:function(t,e){this.to=t,this.from=e}},computed:{filteredItems:function(){var t=this;return this.$store.getters.worldData.filter((function(e){return e.country.toLowerCase().indexOf(t.search.toLowerCase())>-1}))}},created:function(){var t=this;this.pageIdentify(),this.$store.watch((function(t){return t.countryList}),(function(e){e&&(t.areCountriesLoaded=!0)}))},mounted:function(){this.pageIdentify()}},R=j,P=(a("5c0b"),a("7496")),I=a("40dc"),$=a("8336"),G=a("b0af"),M=a("99d9"),H=a("553a"),W=a("4bd4"),z=a("132d"),A=a("8654"),E=Object(u["a"])(R,r,o,!1,null,null,null),U=E.exports;p()(E,{VApp:P["a"],VAppBar:I["a"],VBtn:$["a"],VCard:G["a"],VCardText:M["a"],VCardTitle:M["b"],VCol:h["a"],VContainer:f["a"],VFooter:H["a"],VForm:W["a"],VIcon:z["a"],VProgressCircular:v["a"],VRow:m["a"],VTextField:A["a"]});var Y=a("8c4f"),B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",t._l(t.filteredItems,(function(e){return a("v-col",{key:e.country,attrs:{cols:12}},[null!=e.continent&&e.continent!=e.country?a("div",{staticClass:"primary-text"},[a("v-row",[a("v-col",[a("h2",{staticClass:"text-md",domProps:{innerHTML:t._s(e.country)}}),a("h3",{staticClass:"text-sm font-weight-regular"},[t._v(" "+t._s(Number(e.population).toLocaleString())+" "),a("span",[t._v("population")])])]),a("v-col",{attrs:{cols:4}},[a("v-sheet",{staticClass:"mx-1",attrs:{color:"#ff9200",outlined:!0,rounded:!0}},[a("div",{staticClass:"text-center text-xxs text--secondary"},[t._v(" New Cases ")]),a("div",{staticClass:"text-center text-xs text--primary"},[t._v(" "+t._s(Number(e.cases.new).toLocaleString())+" ")])])],1)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:3,sm:4,md:4,lg:2}},[a("donutGraph",{attrs:{donutTotal:e.cases.total,donutSlice:e.cases.recovered,donutLabel:"recovered"}}),a("v-sheet",{staticClass:"mx-1",attrs:{color:"#213349",outlined:!0,rounded:!0}},[a("div",{staticClass:"text-center text-xxs text--disabled"},[t._v(" Recovered ")]),a("div",{staticClass:"text-center text-xs text--secondary"},[t._v(" "+t._s(Number(e.cases.recovered).toLocaleString())+" ")])])],1),a("v-col",{attrs:{cols:3,sm:4,lg:2}},[a("donutGraph",{attrs:{donutTotal:e.cases.total,donutSlice:e.deaths.total,mainColor:"#63e6f2",donutLabel:"deaths"}}),a("v-sheet",{staticClass:"mx-1",attrs:{color:"#213349",outlined:!0,rounded:!0}},[a("div",{staticClass:"text-center text-xxs text--disabled"},[t._v(" Deaths ")]),a("div",{staticClass:"text-center text-xs text--secondary"},[t._v(" "+t._s(Number(e.deaths.total).toLocaleString())+" ")])])],1),null!=e.population?a("v-col",{attrs:{cols:3,sm:4,lg:2}},[a("donutGraph",{attrs:{donutTotal:e.population,donutSlice:e.cases.total,mainColor:"#ff9200",donutLabel:"cases / pop"}}),a("v-sheet",{staticClass:"mx-1",attrs:{color:"#213349",outlined:!0,rounded:!0}},[a("div",{staticClass:"text-center text-xxs text--disabled"},[t._v(" Total Cases ")]),a("div",{staticClass:"text-center text-xs text--secondary"},[t._v(" "+t._s(Number(e.cases.total).toLocaleString())+" ")])])],1):t._e(),null!=e.population?a("v-col",{attrs:{cols:3,sm:4,lg:2}},[a("donutGraph",{attrs:{donutTotal:e.population,donutSlice:e.tests.total,mainColor:"#cef263",donutLabel:"test / pop",decimalPlaces:3,classes:"smaller-number"}}),a("v-sheet",{staticClass:"mx-1",attrs:{color:"#213349",outlined:!0,rounded:!0}},[a("div",{staticClass:"text-center text-xxs text--disabled"},[t._v(" Tested ")]),a("div",{staticClass:"text-center text-xs text--secondary"},[t._v(" "+t._s(Number(e.tests.total).toLocaleString())+" ")])])],1):t._e()],1)],1):t._e()])})),1)],1)},Q=[],J={name:"Home",components:{donutGraph:F},data:function(){return{search:"philippines"}},computed:{filteredItems:function(){var t=this;return this.$store.getters.worldData.filter((function(e){return e.country.toLowerCase().indexOf(t.search.toLowerCase())>-1}))}},methods:{}},q=J,K=Object(u["a"])(q,B,Q,!1,null,null,null),X=K.exports;p()(K,{VCol:h["a"],VContainer:f["a"],VRow:m["a"],VSheet:x["a"]}),s["a"].use(Y["a"]);var Z=[{path:"/",name:"Home",component:X,meta:{title:"CovSpy19",metaTags:[{name:"description",content:"The home page of our example app."},{property:"og:description",content:"The home page of our example app."}]}}],tt=new Y["a"]({mode:"history",routes:Z}),et=tt,at=(a("96cf"),a("1da1")),st=a("2f62");s["a"].use(st["a"]);var rt=new st["a"].Store({state:{worldData:[],countryList:[]},getters:{worldData:function(t){return t.worldData},countryList:function(t){return t.countryList}},mutations:{setWorldData:function(t,e){return t.worldData=e},buildCountryList:function(t,e){return t.countryList.push(e)}},actions:{loadWorldData:function(){var t=Object(at["a"])(regeneratorRuntime.mark((function t(e){var a,s,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.next=3,fetch("https://covid-193.p.rapidapi.com/statistics",{headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"d9822f5bcbmsh198dadc54bf35b0p159988jsnd34bf1ce4b3c"}});case 3:if(s=t.sent,s.ok){t.next=6;break}throw s;case 6:return t.next=8,s.json();case 8:for(o in r=t.sent.response,o=[],r)r[o].country!=r[o].continent&&null!=r[o].continent&&rt.commit("buildCountryList",r[o].country.toLowerCase());a("setWorldData",r.sort((function(t,e){return t.country.localeCompare(e.country)})));case 12:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}});rt.dispatch("loadWorldData");var ot=rt,nt=a("f309"),lt={primary:{base:"#ff9200",darken1:"#000000"},secondary:"#000000",tertiary:"#ffffff",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107",anchor:"#00b6ff"};s["a"].use(nt["a"]);var it=new nt["a"]({theme:{dark:!0,themes:{dark:lt}}}),ct=a("44c2"),ut=a("2ead"),dt=a.n(ut);function pt(t){var e=t.$options.title;if(e)return"function"===typeof e?e.call(t):e}var ht={created:function(){var t=pt(this);t&&(document.title=t)}};s["a"].mixin(ht),s["a"].config.productionTip=!1,s["a"].use(ct["a"]),s["a"].use(dt.a),new s["a"]({router:et,store:ot,vuetify:it,render:function(t){return t(U)}}).$mount("#app")},"5b71":function(t,e,a){},"5c0b":function(t,e,a){"use strict";var s=a("7694"),r=a.n(s);r.a},7581:function(t,e,a){},7694:function(t,e,a){},"9d24":function(t,e,a){"use strict";var s=a("5b71"),r=a.n(s);r.a},ae43:function(t,e,a){},f80e:function(t,e,a){"use strict";var s=a("ae43"),r=a.n(s);r.a}});
//# sourceMappingURL=app.fa596739.js.map