(this["webpackJsonpon-the-dot"]=this["webpackJsonpon-the-dot"]||[]).push([[0],{25:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),i=a(8),r=a.n(i),n=(a(25),a(4)),d=a(9),l=a(3),o=a(0);var j=function(e){var t=Object(s.useState)(""),a=Object(n.a)(t,2),c=a[0],i=a[1],r=Object(l.f)();return Object(o.jsxs)("div",{className:"activities-search",children:[Object(o.jsx)("h3",{children:"Activities"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.push("activities/search/".concat(c))},children:[Object(o.jsx)("input",{type:"text",onChange:function(e){i(e.target.value)},placeholder:"Search activities"}),Object(o.jsx)("button",{children:"Search"})]})]})},u=a(7),b=a(20);var h=function(e){var t=Object(s.useState)(null),a=Object(n.a)(t,2),c=a[0],i=a[1],r=Object(s.useState)([]),j=Object(n.a)(r,2),h=j[0],v=j[1],O=Object(s.useState)({}),m=Object(n.a)(O,2),x=m[0],p=m[1],f=Object(s.useState)(""),y=Object(n.a)(f,2),g=y[0],N=y[1],k=Object(s.useState)(""),S=Object(n.a)(k,2),w=S[0],A=S[1],I=Object(l.g)();Object(s.useEffect)((function(){p({}),N(""),v([]),A("");var t=function(t){var a=t.toLowerCase(),s=e.activities.filter((function(e){return e.activityName.toLowerCase()===a}));return s.length>0&&s.map((function(t){var s=e.tasks.filter((function(e){return e.date===t.dateId&&e.activityName.toLowerCase()===a}));if(s.length>0){var c=s.reduce((function(e,t){return e+t.duration}),0),i=c<0?0:c,r=60*Number(t.arriveBy.split(":")[0])+Number(t.arriveBy.split(":")[1])-Math.round(t.duration/60)-i,n=Math.floor(r/60),d=r%60<10?"0".concat(r%60):r%60;t.departBy="".concat(n,":").concat(d)}})),s}(I.query);v(t)}),[I.query]);var T=function(){var e=new Date,t=e.getDate(),a=e.getMonth()+1;return e.getFullYear()+"-"+(a=a<10?"0"+a:a)+"-"+(t=t<10?"0"+t:t)};return Object(o.jsxs)("div",{children:[Object(o.jsx)(b.a,{onGoogleApiLoaded:function(e){var t=e.map,a=e.maps;i({map:t,maps:a})},bootstrapURLKeys:{key:"AIzaSyDv8N9pEewiAbofYIPVoS9x-WNVFPMkyu0"},defaultCenter:{lat:19.168802,lng:99.89543},defaultZoom:7}),Object(o.jsxs)("div",{className:"search-results-invalid",children:[g.length>0&&Object(o.jsxs)("p",{children:[g,":"]}),Object(o.jsx)("ul",{children:x.length>0&&x.map((function(e,t){return Object(o.jsx)("li",{children:e},t)}))}),w.length>0&&Object(o.jsx)("p",{children:w})]}),Object(o.jsx)("div",{className:"search-results",children:Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=[];t.target.activityName.value.length<=0&&(a=[].concat(Object(u.a)(a),["Activity"])),t.target.arriveBy.value.length<=0&&(a=[].concat(Object(u.a)(a),["Arrival Time"])),t.target.addressFrom.value.length<=0&&(a=[].concat(Object(u.a)(a),["Address From"])),t.target.addressTo.value.length<=0&&(a=[].concat(Object(u.a)(a),["Address To"])),p(a),a.length>0?N("Missing required fields"):e.activities.find((function(e){return e.dateId===t.target.dateId.value&&e.activityName.toLowerCase()===t.target.activityName.value.toLowerCase()}))?N("Activity exists"):(N(""),function(t){(new c.maps.DistanceMatrixService).getDistanceMatrix({origins:[t.target.addressFrom.value],destinations:[t.target.addressTo.value],region:"AU",travelMode:c.maps.TravelMode.DRIVING},(function(a,s){if(s!==c.maps.DistanceMatrixStatus.OK&&alert("Error was: "+s),"OK"!==a.rows[0].elements[0].status)A("Unable to calculate duration due to unknown routes or routes not found.");else{var i=60*Number(t.target.arriveBy.value.split(":")[0])+Number(t.target.arriveBy.value.split(":")[1])-Math.round(a.rows[0].elements[0].duration.value/60),r=Math.floor(i/60),n=i%60,d={dateId:t.target.dateId.value,activityName:t.target.activityName.value,addressFrom:a.originAddresses[0].split(",")[0],addressTo:a.destinationAddresses[0].split(",")[0],arriveBy:t.target.arriveBy.value,departBy:"".concat(r,":").concat(n),duration:a.rows[0].elements[0].duration.value};e.setActivities([].concat(Object(u.a)(e.activities),[d])),v([].concat(Object(u.a)(h),[d])),A("")}}))}(t))},children:[Object(o.jsx)("input",{type:"date",name:"dateId",min:T(),defaultValue:T()}),Object(o.jsx)("input",{type:"time",name:"arriveBy",placeholder:"Arrive By (hhmm)"}),Object(o.jsx)("input",{type:"text",name:"activityName",placeholder:"Activity"}),Object(o.jsx)("input",{type:"text",name:"addressFrom",placeholder:"Address From"}),Object(o.jsx)("input",{type:"text",name:"addressTo",placeholder:"Address To"}),Object(o.jsx)("button",{children:"New"})]})}),Object(o.jsx)("ul",{className:"row",children:h.length>0?h.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)(d.b,{to:"/activities/search/".concat(e.activityName.toLowerCase(),"/").concat(e.dateId),children:Object(o.jsxs)("div",{className:"activities-card",children:[Object(o.jsx)("label",{className:"txt-label",children:e.dateId}),Object(o.jsx)("label",{className:"txt-label-title",children:e.activityName}),Object(o.jsxs)("div",{className:"txt-label",children:[Object(o.jsxs)("label",{children:["Depart: ",e.addressFrom]}),Object(o.jsxs)("label",{children:["Arrive: ",e.addressTo]})]}),Object(o.jsxs)("div",{className:"txt-label",children:[Object(o.jsxs)("label",{children:["At: ",e.departBy]}),Object(o.jsxs)("label",{children:["At: ",e.arriveBy]})]})]})})},e.dateId+e.activityName)})):Object(o.jsxs)("p",{children:["Activity list is empty for '",I.query,"'. Start adding it."]})})]})};var v=function(e){var t=Object(s.useState)(""),a=Object(n.a)(t,2),c=a[0],i=a[1],r=Object(s.useState)({}),d=Object(n.a)(r,2),l=d[0],j=d[1];return Object(s.useEffect)((function(){var t=c.toLowerCase(),a=e.tasks.filter((function(e){return e.name.toLowerCase().includes(t)}));j(a)}),[c]),Object(o.jsxs)("div",{className:"tasks-search",children:[Object(o.jsx)("h3",{children:"Tasks"}),Object(o.jsx)("input",{type:"text",onChange:function(e){i(e.target.value)},placeholder:"Search tasks"}),Object(o.jsx)("ul",{className:"row",children:l.length>0&&l.map((function(e){return Object(o.jsx)("li",{className:"tasks-card",children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"txt-label",children:[Object(o.jsx)("label",{children:e.date}),Object(o.jsx)("label",{children:e.activityName})]}),Object(o.jsx)("div",{className:"tasks-title",children:e.name}),Object(o.jsxs)("div",{className:"txt-label",children:["Duration: ",e.duration," minutes"]})]})},e.id)}))})]})};var O=function(e){var t=Object(s.useState)([]),a=Object(n.a)(t,2),c=a[0],i=a[1],r=Object(s.useState)({}),d=Object(n.a)(r,2),j=d[0],b=d[1],h=Object(s.useState)(""),v=Object(n.a)(h,2),O=v[0],m=v[1],x=Object(l.g)();return Object(s.useEffect)((function(){i([]);var t=e.tasks.filter((function(e){return e.date===x.dateId&&e.activityName.toLowerCase()===x.query.toLowerCase()}));i(t)}),[x.dateId]),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"tasks-results-invalid",children:[O.length>0&&Object(o.jsxs)("p",{children:[O,":"]}),Object(o.jsx)("ul",{children:j.length>0&&j.map((function(e,t){return Object(o.jsx)("li",{children:e},t)}))})]}),Object(o.jsxs)("div",{className:"search-results",children:[Object(o.jsxs)("label",{children:[x.dateId,"\xa0",x.query]}),Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=[];if(t.target.taskName.value.length<=0&&(a=[].concat(Object(u.a)(a),["Task"])),t.target.duration.value.length<=0&&(a=[].concat(Object(u.a)(a),["Duration"])),b(a),a.length>0)m("Missing required fields");else if(t.target.taskName.value.length>0&&!isNaN(parseInt(t.target.duration.value))){var s={id:Date.now(),activityName:x.query,date:x.dateId,name:t.target.taskName.value,duration:parseInt(t.target.duration.value),deleted:!1};m(""),e.setTasks([].concat(Object(u.a)(e.tasks),[s])),i([].concat(Object(u.a)(c),[s]))}},children:[Object(o.jsx)("input",{type:"text",name:"taskName",placeholder:"Task"}),"\xa0",Object(o.jsx)("input",{type:"text",name:"duration",placeholder:"Duration in mins"}),Object(o.jsx)("button",{children:"New"})]})]}),Object(o.jsx)("ul",{className:"row",children:c.length>0?c.map((function(t){return Object(o.jsx)("li",{className:"tasks-card",children:Object(o.jsxs)("div",{className:"tasks-labels",children:[Object(o.jsx)("div",{className:"tasks-title",children:t.name}),Object(o.jsxs)("div",{className:"txt-label",children:["Duration: ",t.duration," minutes",Object(o.jsx)("button",{onClick:function(){return a=t.id,e.tasks.map((function(e){e.id===a&&(e.deleted=!e.deleted,e.duration=-1*e.duration)})),void i(e.tasks.filter((function(e){return e.date===x.dateId})));var a},children:t.deleted?"+":"-"})]})]})},t.id)})):Object(o.jsxs)("p",{children:["Task list is empty for '",x.query,"'. Start adding it."]})})]})},m=(a(35),[{dateId:"2021-09-20",activityName:"Work",addressFrom:"Laverton",addressTo:"Flinders Street Railway Station",departBy:"8:00",arriveBy:"9:00",duration:1234},{dateId:"2021-09-25",activityName:"Picnic",addressFrom:"Laverton",addressTo:"Wyndham Park",departBy:"8:00",arriveBy:"9:00",duration:1234}]),x=[{id:0,activityName:"work",date:"2021-09-20",name:"Coffee",duration:5,deleted:!1},{id:1,activityName:"work",date:"2021-09-20",name:"Send kid to school",duration:15,deleted:!1},{id:2,activityName:"picnic",date:"2021-09-26",name:"Prepare food",duration:30,deleted:!1}];function p(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Sorry, the page you requested was not found."}),"Go back to ",Object(o.jsx)(d.b,{to:"/",children:"the home page"})]})}var f=function(){var e=Object(s.useState)(m),t=Object(n.a)(e,2),a=t[0],c=t[1],i=Object(s.useState)(x),r=Object(n.a)(i,2),u=r[0],b=r[1];return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(d.a,{basename:"/on-the-dot",children:[Object(o.jsxs)("nav",{className:"navbar",children:[Object(o.jsx)("div",{className:"App-logo",children:"on-the-dot..."}),Object(o.jsx)("ul",{className:"nav-link",children:Object(o.jsxs)("div",{className:"menu",children:[Object(o.jsx)("li",{children:Object(o.jsx)(d.b,{to:"/",children:"Activities"})}),Object(o.jsx)("li",{children:Object(o.jsx)(d.b,{to:"/tasks",children:"Tasks"})})]})})]}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",component:j}),Object(o.jsx)(l.a,{exact:!0,path:"/activities/search/:query",children:Object(o.jsx)(h,{activities:a,setActivities:c,tasks:u})}),Object(o.jsx)(l.a,{exact:!0,path:"/tasks",children:Object(o.jsx)(v,{tasks:u})}),Object(o.jsx)(l.a,{exact:!0,path:"/activities/search/:query/:dateId",children:Object(o.jsx)(O,{tasks:u,setTasks:b})}),Object(o.jsx)(l.a,{path:"*",component:p})]})]})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),i(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),y()}},[[36,1,2]]]);
//# sourceMappingURL=main.9a64ee55.chunk.js.map