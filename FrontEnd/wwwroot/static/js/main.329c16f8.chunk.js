(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,a,t){e.exports=t(52)},52:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),c=t.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(6),o=t(10),s=t(11),m=Object(i.c)({formReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FORM_ADD_ITEM":return[].concat(Object(s.a)(e),[a.item]);case"FORM_DELETE_ITEM":return[].concat(Object(s.a)(e.slice(0,a.index)),Object(s.a)(e.slice(a.index+1)));default:return e}}}),u=t(22),d=t.n(u),E=t(23),p=t.n(E),v=t(24),h=t(54),b=t(57),f=t(56),g=t(55),N=t(53),x=function(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"},l.a.createElement("div",{className:"container"},l.a.createElement(N.a,{to:"/",className:"navbar-brand"},"BASIC APP"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement(N.a,{to:"/",className:"nav-link"},"Home",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(N.a,{to:"/about",className:"nav-link"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(N.a,{to:"/feature",className:"nav-link"},"Feature"))))))},k=function(e){return l.a.createElement("h1",{className:"my-4"},e.title,l.a.createElement("small",null," ",e.subtitle))},T=function(e){var a={backgroundImage:"url(http://placehold.it/1900x1080)"};return l.a.createElement("header",null,l.a.createElement("div",{id:"carouselExampleIndicators",className:"carousel slide","data-ride":"carousel"},l.a.createElement("ol",{className:"carousel-indicators"},l.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",className:"active"}),l.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}),l.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"2"})),l.a.createElement("div",{className:"carousel-inner",role:"listbox"},l.a.createElement("div",{className:"carousel-item active",style:a},l.a.createElement("div",{className:"carousel-caption d-none d-md-block"},l.a.createElement("h3",null,"First Slide"),l.a.createElement("p",null,"This is a description for the first slide."))),l.a.createElement("div",{className:"carousel-item",style:a},l.a.createElement("div",{className:"carousel-caption d-none d-md-block"},l.a.createElement("h3",null,"Second Slide"),l.a.createElement("p",null,"This is a description for the second slide."))),l.a.createElement("div",{className:"carousel-item",style:a},l.a.createElement("div",{className:"carousel-caption d-none d-md-block"},l.a.createElement("h3",null,"Third Slide"),l.a.createElement("p",null,"This is a description for the third slide.")))),l.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev"},l.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Previous")),l.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next"},l.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Next"))))},y=function(e){var a=(new Date).getFullYear();return l.a.createElement("footer",{className:"py-5 bg-dark"},l.a.createElement("div",{className:"container"},l.a.createElement("p",{className:"m-0 text-center text-white"},"Copyright \xa9 ",e.siteName+" "," ",a)))},O=function(e){return l.a.createElement("div",{className:"container"},e.children)},_=function(e){var a=e.header;return l.a.createElement(l.a.Fragment,null,l.a.createElement(x,null),a?l.a.createElement(T,null):"",l.a.createElement(O,null,l.a.createElement(k,{title:e.pageTitle,subtitle:e.pageSubTitle}),e.children),l.a.createElement(y,{siteName:"Basic App"}))},w=function(){return l.a.createElement(_,{pageTitle:"Business HomePage",header:!0})},I=function(){return l.a.createElement(_,{pageTitle:"About Page",pageSubTitle:"Quem somos"})},D=t(25),S=t(26),R=t(29),A=t(27),j=t(28),C=function(e){function a(e){var t;return Object(D.a)(this,a),(t=Object(R.a)(this,Object(A.a)(a).call(this,e))).state={name:"",price:""},t}return Object(j.a)(a,e),Object(S.a)(a,[{key:"handleChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"handleChangePrice",value:function(e){this.setState({price:e.target.value})}},{key:"addItem",value:function(){this.props.onAdd(this.state.name,this.state.price),this.setState({name:"",price:""})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("input",{onChange:this.handleChangeName.bind(this),value:this.state.name}),l.a.createElement("input",{onChange:this.handleChangePrice.bind(this),value:this.state.price}),l.a.createElement("button",{onClick:function(){return e.addItem()}},"Add"))}}]),a}(l.a.Component),F=function(e){return l.a.createElement("div",{key:e.index},l.a.createElement("div",null,"Item : ",e.name," || Price: ",e.price),l.a.createElement("button",{onClick:function(){return e.onDelete(e.index)}},"Delete"))},M=function(e,a){return{type:"FORM_ADD_ITEM",item:{name:e,price:a}}},P=function(e){return{type:"FORM_DELETE_ITEM",index:e}},B=Object(o.b)(function(e){return{items:e.formReducer}},function(e){return{onAdd:function(a,t){e(M(a,t))},onDelete:function(a){e(P(a))}}})(function(e){return l.a.createElement("div",null,l.a.createElement(C,{onAdd:e.onAdd}),e.items.map(function(a,t){return l.a.createElement(F,{key:t,onDelete:e.onDelete,index:t,name:a.name,price:a.price})}),l.a.createElement("br",null))}),L=function(){return l.a.createElement(_,{pageTitle:"Read Redux",pageSubTitle:"Um exemplo"},l.a.createElement(B,null))},X=function(){return l.a.createElement(h.a,null,l.a.createElement(b.a,null,l.a.createElement(f.a,{exact:!0,path:"/",component:w}),l.a.createElement(f.a,{exact:!0,path:"/about",component:I}),l.a.createElement(f.a,{exact:!0,path:"/feature",component:L}),l.a.createElement(g.a,{from:"*",to:"/"})))},U=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),H=Object(i.a)(v.a,p.a,d.a)(i.d)(m,U),J=document.getElementById("root");c.a.render(l.a.createElement(o.a,{store:H},l.a.createElement(X,null)),J),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.329c16f8.chunk.js.map