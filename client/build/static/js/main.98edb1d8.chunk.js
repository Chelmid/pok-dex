(this.webpackJsonpproject01=this.webpackJsonpproject01||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(20),o=n.n(a),i=(n(44),n(45),n(3)),r=n(39),l=n(4),j=n(7),u=n(38),m=n.n(u),d=n(75),O=n(10),p=n.n(O),b=n(6),h=n(0),x=function(e){var t=Object(i.b)(),n=Object(d.a)(["cookie-name"]),c=Object(l.a)(n,2),s=c[0],a=c[1],o=Object(b.f)(),r=Object(i.c)((function(e){return e.ConnectUserReducer})),j=(r.connect,r.pokemonCapture),u=r.messageCapture;return Object(h.jsxs)("div",{children:[j.id.find((function(t){return e.id===t-e.ratio}))?Object(h.jsx)("div",{children:u}):"",void 0!==j.id.find((function(t){return e.id===t-e.ratio}))?Object(h.jsxs)("form",{onSubmit:function(n){return function(e,n){n.preventDefault(),t({type:"POKEMON_CAPTURE_REMOVE",pokemonCaptureRemove:e}),p.a.put("/pokemon/list/removeCapture",{email:s.email,pokemonCapture:j}).catch((function(e){e&&(t({type:"CONNECT",connection:!1}),a("connect"),o.push("/login"))}))}(e.id+e.ratio,n)},children:[" ",Object(h.jsx)("button",{className:"btnEnlever",name:"pokemonTeams"})]}):Object(h.jsx)("form",{onSubmit:function(n){return function(e,n){console.log(n),n.preventDefault(),t({type:"POKEMON_CAPTURE_ADD",pokemonCaptureAdd:e}),p.a.put("/pokemon/list/addCapture",{email:s.email,pokemonCapture:j}).catch((function(e){e&&(t({type:"CONNECT",connection:!1}),a("connect"),o.push("/login"))}))}(e.id+e.ratio,n)},children:Object(h.jsx)("button",{className:"btnAjouter",name:"pokemonTeams"})})]})},f=function(e){var t=Object(i.b)(),n=Object(d.a)(["cookie-name"]),c=Object(l.a)(n,2),s=c[0],a=c[1],o=Object(b.f)(),r=Object(i.c)((function(e){return e.ConnectUserReducer})),j=(r.connect,r.pokemonTeams),u=r.messageTeam;return Object(h.jsxs)("div",{children:[j.id.find((function(t){return e.id===t-e.ratio}))?Object(h.jsx)("div",{children:u}):"",void 0!==j.id.find((function(t){return e.id===t-e.ratio}))?Object(h.jsxs)("form",{onSubmit:function(n){return function(e,n){n.preventDefault(),t({type:"POKEMON_TEAM_REMOVE",pokemonTeamRemove:e}),p.a.put("/pokemon/list/removeTeam",{email:s.email,pokemonTeams:j}).catch((function(e){e&&(t({type:"CONNECT",connection:!1}),a("connect"),o.push("/login"))}))}(e.id+e.ratio,n)},children:[" ",Object(h.jsx)("button",{name:"pokemonTeams",children:"remove team"})]}):Object(h.jsx)("form",{onSubmit:function(n){return function(e,n){n.preventDefault(),t({type:"POKEMON_TEAM_ADD",pokemonTeamAdd:e}),p.a.put("/pokemon/list/addTeam",{email:s.email,pokemonTeams:j}).catch((function(e){e&&(t({type:"CONNECT",connection:!1}),a("connect"),o.push("/login"))}))}(e.id+e.ratio,n)},children:Object(h.jsx)("button",{name:"pokemonTeams",children:"add team"})})]})},g=function(){var e=Object(i.c)((function(e){return e.ReducerPokemonlist})),t=e.apiPokemon,n=e.displayList,s=e.pokemonListContinue,a=e.total,o=e.pokemonListTotal,u=Object(i.c)((function(e){return e.ConnectUserReducer})).connect,O=Object(c.useState)([]),g=Object(l.a)(O,2),k=g[0],N=g[1],v=Object(d.a)(["cookie-name"]),C=Object(l.a)(v,2),E=C[0],T=C[1],y=Object(c.useState)(""),P=Object(l.a)(y,2),S=P[0],_=(P[1],Object(b.f)()),A=function(){return w({type:"STATUS_ONE_POKEMON",display:!1})},w=Object(i.b)();return Object(c.useEffect)((function(){w({type:"STATUS_ONE_POKEMON",display:!0,pokedex:!1}),!0===n&&fetch(t).then((function(e){return e.json()})).then((function(e){N(e.results),w({type:"COUNTER_POKEMON",counter:Object(r.a)(e.results.keys())})}),(function(e){})),void 0!==E.email&&p.a.post("/pokemon/list/onload",{email:E.email}).then((function(e){return w({type:"ONLOAD_POKEMON_TEAMS",pokemonTeamOnload:e.data.idTeam}),w({type:"ONLOAD_POKEMON_CAPTURE",pokemonCaptureOnload:e.data.idCapture})}))}),[t,w,n,E.email,_,T]),window.onscroll=m()((function(){document.documentElement.scrollTop/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100>50&&w({type:"LIST_CONTINUE_POKEMON",continue:30}),fetch(s).then((function(e){return e.json()})).then((function(e){w({type:"LIST_TOTAL_POKEMON",nextList:e.results})}),(function(e){}))}),200),Object(h.jsx)("div",{children:u&&Object(h.jsxs)("div",{className:"text-center mt-3",children:[Object(h.jsx)("h2",{children:"Pokedex"}),Object(h.jsxs)("div",{className:"d-flex flex-wrap ",children:[Object(h.jsx)("div",{children:S}),Object(h.jsxs)("div",{className:"d-flex flex-wrap",children:[k.map((function(e,t){return Object(h.jsxs)("div",{className:"pokemon",children:[Object(h.jsxs)(j.b,{to:"/Pokemon/"+(t+1),value:t,onClick:A,children:[Object(h.jsxs)("li",{className:"text-center",children:[" ",Object(h.jsx)("img",{src:"/pokeball.png",className:"App-logo-list",alt:"logo"})," N\xb0 ",t+1]}),Object(h.jsx)("div",{className:"text-center",children:Object(h.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(t+1)+".png",alt:"img"})}),Object(h.jsx)("li",{className:"text-center capitalize",children:e.name})]}),Object(h.jsx)(x,{id:t,ratio:1}),Object(h.jsx)(f,{id:t,ratio:1})]},t)})),o.map((function(e,t){return t<828?Object(h.jsxs)("div",{className:"pokemon",children:[Object(h.jsxs)(j.b,{to:"/Pokemon/"+(a+1+t),value:a+1+t,onClick:A,children:[Object(h.jsxs)("li",{className:"text-center",children:[" ",Object(h.jsx)("img",{src:"/pokeball.png",className:"App-logo-list",alt:"logo"})," N\xb0 ",a+1+t]}),Object(h.jsx)("div",{className:"text-center",children:Object(h.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(a+1+t)+".png",alt:""})}),Object(h.jsx)("li",{className:"text-center capitalize",children:e.name})]}),Object(h.jsx)(x,{id:a+t,ratio:1}),Object(h.jsx)(f,{id:a+t,ratio:1})]},a+1+t):""}))]})]})]})})},k=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),o=Object(l.a)(a,2),i=o[0],r=o[1],j=Object(c.useState)(""),u=Object(l.a)(j,2),m=u[0],d=u[1];return Object(h.jsxs)("div",{children:[Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("https://pokeapi.co/api/v2/pokemon/"+n).then((function(e){return e.json()})).then((function(e){r(e.id),d("")})).catch((function(e){return d("pokemon introuvable")}))},className:"barSearch",children:[Object(h.jsx)("input",{name:"pokemonName",onChange:function(e){""===e.target.value&&void 0===e.target.value||s(e.target.value.toLowerCase())}}),Object(h.jsx)("button",{children:"Search"})]}),m.length>0&&m,""!=i&&0==m.length&&Object(h.jsx)(N,{id:i})]})},N=function(e){var t=Object(i.c)((function(e){return e.ReducerPokemon})),n=t.idPokemon,s=t.dataPokemon,a=t.apiPokemonSolo,o=t.colorTypes,r=Object(i.b)(),l=Object(b.g)().id;return""!=l&&void 0!=l||(l=e.id),Object(c.useEffect)((function(){fetch(a+l).then((function(e){return e.json()})).then((function(e){r({type:"SET_POKEMON_DATA",data:e}),r({type:"SET_POKEMON_ID",id:l})}),(function(e){}))}),[a,l,r]),Object(h.jsxs)("div",{className:"mt-5 d-flex flex-wrap",children:[Object(h.jsxs)("div",{className:"col-auto",children:[Object(h.jsxs)("h2",{className:"capitalize",children:["N\xb0",n," ",s.name]}),Object(h.jsxs)("div",{className:"d-flex",children:["Type :",Object(h.jsx)("div",{className:"d-flex",children:l&&n&&s.types.map((function(e,t){return Object.entries(o).map((function(t,n){return t[0]===e.type.name?Object(h.jsx)("div",{className:"mx-2 text-white",style:{backgroundColor:t[1]},children:e.type.name},n):""}))}))})]}),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:"text-center",children:"Front"}),Object(h.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+l+".png",alt:""})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:"text-center",children:"Back"}),Object(h.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/"+l+".png",alt:""})]})]}),Object(h.jsx)("div",{children:" height / weight "}),Object(h.jsxs)("div",{children:[10*s.height," cm / ",s.weight/10," kg "]}),Object(h.jsxs)("div",{children:["base experience : ",s.base_experience]})]}),Object(h.jsxs)("div",{className:"col-4",children:[Object(h.jsx)("h5",{className:"mt-5",children:"Stats"}),Object(h.jsx)("div",{className:"",children:l&&n&&s.stats.map((function(e,t){return Object(h.jsxs)("div",{className:"mr-2",children:[e.stat.name," : ",e.base_stat]},t)}))})]}),Object(h.jsxs)("div",{className:"col-4",children:[Object(h.jsx)("h5",{className:"mt-5",children:"Abilities"}),Object(h.jsx)("div",{children:l&&n&&s.abilities.map((function(e,t){return!0===e.is_hidden?Object(h.jsxs)("div",{style:{color:"red"},children:[e.ability.name," (hidden)"]},t):Object(h.jsx)("div",{children:e.ability.name},t)}))})]})]})},v=function(){var e=Object(i.c)((function(e){return e.ReducerPokemonlist})).displayList,t=Object(i.c)((function(e){return e.ConnectUserReducer})).connect,n=Object(i.b)(),s=Object(d.a)(["cookie-name"]),a=Object(l.a)(s,2),o=a[0],r=a[1],u=Object(b.f)();Object(c.useEffect)((function(){"true"===o.connect?n({type:"CONNECT",connection:!0}):n({type:"CONNECT",connection:!1})}),[n,o]);var m=function(){return n({type:"STATUS_ONE_POKEMON",display:!0,pokedex:!1})};return Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)(j.b,{to:"/",onClick:function(){return n({type:"STATUS_ONE_POKEMON",display:!0,pokedex:!0})},children:Object(h.jsx)("img",{src:"/pokeball.png",className:"App-logo",alt:"logo"})}),!e&&Object(h.jsx)(j.b,{className:"ml-4",to:"/pokemon/list",onClick:m,children:"back"}),Object(h.jsx)("div",{className:"col text-right",children:Object(h.jsxs)("div",{className:"d-flex justify-content-end",children:[t&&Object(h.jsx)(j.b,{to:"/pokemon/list",children:Object(h.jsx)("div",{className:"mr-3",onClick:m,children:"List"})}),!t&&Object(h.jsx)(j.b,{to:"/register",children:Object(h.jsx)("div",{className:"mr-3",onClick:m,children:"Register"})}),!t&&Object(h.jsx)(j.b,{to:"/login",children:Object(h.jsx)("div",{className:"mr-3",onClick:m,children:"Login"})}),t&&Object(h.jsx)(j.b,{to:"/",children:Object(h.jsx)("div",{className:"mr-3",onClick:function(){return r("connect",!1,{path:"/pokemon/list"}),r("email","",{path:"/pokemon/list"}),r("connect",!1,{path:"/"}),r("email","",{path:"/"}),n({type:"CONNECT",connection:!1}),n({type:"STATUS_ONE_POKEMON",display:!0,pokedex:!0}),u.push("/")},children:"Logout"})})]})})]})},C=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),o=Object(l.a)(a,2),r=o[0],j=o[1],u=Object(c.useState)(""),m=Object(l.a)(u,2),O=m[0],x=m[1],f=Object(c.useState)(""),g=Object(l.a)(f,2),k=g[0],N=g[1],v=Object(c.useState)(""),C=Object(l.a)(v,2),E=C[0],T=C[1],y=Object(d.a)(["cookie-name"]),P=Object(l.a)(y,2)[1],S=Object(i.c)((function(e){return e.ConnectUserReducer})).seePassword,_=Object(i.b)(),A=Object(b.f)();Object(c.useEffect)((function(){_({type:"STATUS_ONE_POKEMON",display:!0,pokedex:!1})}),[_]);return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n.length>=4&&r.length>=5?(p.a.post("/login",{email:n,password:r}).then((function(e){console.log(e),p.a.get(e.request.responseURL).then((function(t){1==t.request.responseURL.includes("/login/success/")||"connecter"===e.data.message?(_({type:"CONNECT",connection:!0}),P("connect",!0,{path:"/pokemon/list"}),P("email",n,{path:"/pokemon/list"}),P("connect",!0,{path:"/"}),P("email",n,{path:"/"}),A.push("/pokemon/list")):N("erreur mot de passe ou d'adresse mail")}))})).catch((function(e){return N("server erreur")})),x("")):r.length<=5&&(x("Veuillez remplir avec plus de 5 charateres"),T("borderError"))},style:{margin:" auto"},children:[Object(h.jsx)("h2",{className:"text-center",children:"Login"}),Object(h.jsx)("div",{className:"text-center",children:k}),Object(h.jsxs)("div",{style:{display:" grid"},children:[Object(h.jsxs)("label",{className:"center",children:["Your Email :",Object(h.jsx)("div",{className:"center",children:n.length<=4&&E?Object(h.jsx)("input",{className:E,type:"email",name:"email",onChange:function(e){return s(e.target.value)},required:!0}):Object(h.jsx)("input",{type:"email",name:"email",onChange:function(e){return s(e.target.value)},required:!0})})]}),Object(h.jsx)("div",{className:"message-error",children:n.length<=4&&O}),Object(h.jsxs)("label",{className:"center",style:{paddingLeft:"20px"},children:["Your Password :",Object(h.jsxs)("div",{className:"d-flex",children:[r.length<=4&&E?Object(h.jsx)("input",{type:S,className:E,name:"pwd",onChange:function(e){return j(e.target.value)}}):Object(h.jsx)("input",{type:S,name:"pwd",onChange:function(e){return j(e.target.value)}}),Object(h.jsx)("img",{src:"/master_ball.jpg",className:"App-logo-list cusor",alt:"logo",onClick:function(e){return _("password"===S?{type:"SEE_PASSWORD",showPassword:"text"}:{type:"SEE_PASSWORD",showPassword:"password"})}})]})]}),Object(h.jsx)("div",{className:"message-error",children:r.length<=4&&O}),Object(h.jsx)("div",{style:{margin:" auto"},children:Object(h.jsx)("button",{type:"submit",children:"Connect"})})]})]})})},E=function(){var e=Object(b.f)(),t=Object(c.useState)(""),n=Object(l.a)(t,2),s=n[0],a=n[1],o=Object(c.useState)(""),r=Object(l.a)(o,2),j=r[0],u=r[1],m=Object(c.useState)(""),d=Object(l.a)(m,2),O=d[0],x=d[1],f=Object(c.useState)(""),g=Object(l.a)(f,2),k=g[0],N=g[1],v=Object(c.useState)(""),C=Object(l.a)(v,2),E=C[0],T=C[1],y=Object(c.useState)(""),P=Object(l.a)(y,2),S=P[0],_=P[1],A=Object(i.c)((function(e){return e.ConnectUserReducer})).seePassword,w=Object(i.b)();Object(c.useEffect)((function(){w({type:"STATUS_ONE_POKEMON",display:!0,pokedex:!1})}),[w]);return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),s.length>=4&&j.length>=5&&O.length>=5?(p.a.post("/register",{email:s,name:j,password:O}).then((function(e){return T(e.data.message)}),e.push("/login")).catch((function(e){return T("serveur erreur")})),N("")):(j.length<=5||O.length<=5)&&(N("Veuillez remplir avec plus de 5 charateres"),_("borderError"))},children:[Object(h.jsx)("h2",{className:"text-center",children:"Register"}),Object(h.jsx)("div",{className:"text-center",children:E}),Object(h.jsxs)("div",{style:{display:" grid"},children:[Object(h.jsxs)("label",{className:"center",children:["Your Email :",Object(h.jsx)("div",{className:"center",children:s.length<=4&&S?Object(h.jsx)("input",{className:S,type:"email",name:"email",onChange:function(e){return a(e.target.value)},required:!0}):Object(h.jsx)("input",{type:"email",name:"email",onChange:function(e){return a(e.target.value)},required:!0})})]}),Object(h.jsx)("div",{className:"message-error",children:s.length<=4&&k}),Object(h.jsxs)("label",{className:"center",children:["Your Name :",Object(h.jsx)("div",{className:"center",children:j.length<=4&&S?Object(h.jsx)("input",{className:S,type:"text",name:"name",onChange:function(e){return u(e.target.value)}}):Object(h.jsx)("input",{type:"text",name:"name",onChange:function(e){return u(e.target.value)}})})]}),Object(h.jsx)("div",{className:"message-error",children:j.length<=4&&k}),Object(h.jsxs)("label",{className:"center",style:{paddingLeft:"20px"},children:["Your Password :",Object(h.jsxs)("div",{className:"d-flex",children:[O.length<=4&&S?Object(h.jsx)("input",{type:A,className:S,name:"pwd",onChange:function(e){return x(e.target.value)}}):Object(h.jsx)("input",{type:A,name:"pwd",onChange:function(e){return x(e.target.value)}}),Object(h.jsx)("img",{src:"/master_ball.jpg",className:"App-logo-list cusor",alt:"logo",onClick:function(e){return w("password"===A?{type:"SEE_PASSWORD",showPassword:"text"}:{type:"SEE_PASSWORD",showPassword:"password"})}})]})]}),Object(h.jsx)("div",{className:"message-error",children:O.length<=4&&k}),Object(h.jsx)("div",{style:{margin:" auto"},children:Object(h.jsx)("button",{type:"submit",children:"Register"})})]})]})})},T=function(){var e=Object(i.c)((function(e){return e.ConnectUserReducer})).connect,t=Object(i.c)((function(e){return e.ReducerPokemonlist})),n=t.displayList,c=t.pokedex;return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(v,{}),n&&e&&Object(h.jsx)(k,{}),c&&Object(h.jsx)("div",{className:"pokedex",children:Object(h.jsx)("img",{src:"/pokedex.gif",style:{width:"100%"},alt:"pokedex"})}),Object(h.jsxs)(b.c,{children:[!n&&Object(h.jsx)(b.a,{path:"/Pokemon/:id",component:N}),Object(h.jsx)(b.a,{path:"/Pokemon/list",component:g}),Object(h.jsx)(b.a,{path:"/login",component:C}),Object(h.jsx)(b.a,{path:"/register",component:E})]})]})})},y=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(T,{})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),a(e),o(e)}))},S=n(17),_=n(2),A={total:70,limite:10,apiPokemon:"https://pokeapi.co/api/v2/pokemon?limit=70",displayList:!0,pokemonListContinue:"https://pokeapi.co/api/v2/pokemon/?limit=10&offset=70",pokemonListTotal:[],pokedex:!0},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"INIT_LIST":return Object(_.a)(Object(_.a)({},e),{},{countPokemon:e.countPokemon.push(t.payload)});case"STATUS_ONE_POKEMON":return Object(_.a)(Object(_.a)({},e),{},{displayList:t.display,pokedex:t.pokedex});case"COUNTER_POKEMON":return Object(_.a)(Object(_.a)({},e),{},{countPokemon:t.counter});case"LIST_CONTINUE_POKEMON":return e.limite<=850?(e.limite=e.limite+t.continue,Object(_.a)(Object(_.a)({},e),{},{pokemonListContinue:"https://pokeapi.co/api/v2/pokemon/?limit="+e.limite+"&offset="+e.total})):e;case"LIST_TOTAL_POKEMON":return Object(_.a)(Object(_.a)({},e),{},{pokemonListTotal:t.nextList});default:return e}},M={idPokemon:"",dataPokemon:"",apiPokemonSolo:"https://pokeapi.co/api/v2/pokemon/",colorTypes:{bug:"lightgreen",water:"blue",fire:"red",grass:"green",normal:"gray",flying:"lightgrey",fairy:"pink",ground:"#CC9900",poison:"#CC33FF",fighting:"#CC3300",rock:"grey",ghost:"#660099",psychic:"#FF00FF",electric:"yellow",dark:"#333333",dragon:"#6600FF"}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SET_POKEMON_ID":return Object(_.a)(Object(_.a)({},e),{},{idPokemon:t.id});case"SET_POKEMON_DATA":return Object(_.a)(Object(_.a)({},e),{},{dataPokemon:t.data});default:return e}},L={connect:!1,seePassword:"password",messageTeam:"",pokemonTeams:{id:[]},messageCapture:"",pokemonCapture:{id:[]}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CONNECT":return Object(_.a)(Object(_.a)({},e),{},{connect:t.connection});case"SEE_PASSWORD":return Object(_.a)(Object(_.a)({},e),{},{seePassword:t.showPassword});case"POKEMON_TEAM_ADD":return e.pokemonTeams.id.length<6?(e.pokemonTeams.id.push(t.pokemonTeamAdd),Object(_.a)(Object(_.a)({},e),{},{pokemonTeams:e.pokemonTeams,messageTeam:"In team"})):Object(_.a)(Object(_.a)({},e),{},{messageTeam:"team full"});case"POKEMON_TEAM_REMOVE":return e.pokemonTeams.id=e.pokemonTeams.id.filter((function(e){return t.pokemonTeamRemove!==e})),Object(_.a)(Object(_.a)({},e),{},{pokemonTeams:e.pokemonTeams});case"ONLOAD_POKEMON_TEAMS":return e.pokemonTeams=t.pokemonTeamOnload,Object(_.a)(Object(_.a)({},e),{},{pokemonTeams:e.pokemonTeams,messageTeam:"In team"});case"ONLOAD_POKEMON_CAPTURE":return e.pokemonCapture=t.pokemonCaptureOnload,Object(_.a)(Object(_.a)({},e),{},{pokemonCapture:e.pokemonCapture,messageCapture:"capturer"});case"POKEMON_CAPTURE_ADD":return e.pokemonCapture.id.push(t.pokemonCaptureAdd),Object(_.a)(Object(_.a)({},e),{},{pokemonCapture:e.pokemonCapture,messageCapture:"capturer"});case"POKEMON_CAPTURE_REMOVE":return e.pokemonCapture.id=e.pokemonCapture.id.filter((function(e){return t.pokemonCaptureRemove!==e})),Object(_.a)(Object(_.a)({},e),{},{pokemonCapture:e.pokemonCapture});default:return e}},D=Object(S.b)({ReducerPokemonlist:w,ReducerPokemon:R,ConnectUserReducer:K}),U=Object(S.c)(D);o.a.render(Object(h.jsx)(i.a,{store:U,children:Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(y,{})})}),document.getElementById("root")),P()}},[[74,1,2]]]);
//# sourceMappingURL=main.98edb1d8.chunk.js.map