(this["webpackJsonpreact-rails-api-project-template-client"]=this["webpackJsonpreact-rails-api-project-template-client"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(13),r=n(0),a=n(26),o=n.n(a),s=(n(34),n(35),n(4)),j=(n(36),n(3)),i=n(8),l=n(7),b=(n(37),n(1));var d=function(e){var t=e.job,n=t.id,c=t.name,r=t.location,a=t.level,o=t.salary,s=t.featured,j=t.languages,d=t.contract,u=t.posted_at,h=[a].concat(Object(i.a)(j)),x="w-10/12 max-w-6xl flex flex-col lg:flex-row justify-between item-start lg:items-center gap-4 p-6 lg:p-9 rounded bg-white shadow-cyan",O="flex gap-2 lg:gap-4 text-sm lg:text-base text-gray-400",p="flex gap-4 flex-wrap",f="flex items-center text-sm font-bold text-cyan-default pt-4",m="bg-cyan-light hover:text-white hover:bg-cyan-default text-cyan-default px-2 pt-2 pb-1 rounded text-sm font-bold",g="bg-cyan-verydark text-white rounded-full px-2 pt-1.5 pb-0.5 text-xs uppercase font-normal",v="border-l-4 border-cyan-default pl-5 lg:pl-8";return Object(b.jsx)("div",{className:"".concat(x,"}").concat(s?v:""),children:Object(b.jsx)(l.b,{to:"jobs/".concat(n),children:Object(b.jsxs)("div",{className:"bp4-card bp4-elevation-0 bp4-interactive",children:[Object(b.jsxs)("div",{className:f,children:[Object(b.jsx)("h2",{children:Object(b.jsx)(l.b,{to:"jobs/".concat(n),children:c})}),s&&Object(b.jsx)("span",{className:g,children:"Featured"})]}),Object(b.jsxs)("div",{className:O,children:[Object(b.jsx)("h3",{children:u}),Object(b.jsx)("span",{"aria-hidden":"true",children:"\u2022"}),Object(b.jsx)("h3",{children:d}),Object(b.jsx)("span",{"aria-hidden":"true",children:"\u2022"}),Object(b.jsx)("h3",{children:r}),Object(b.jsx)("span",{"aria-hidden":"true",children:"\u2022"}),Object(b.jsx)("h3",{children:o})]}),Object(b.jsx)("div",{className:p,children:h.map((function(e){return Object(b.jsx)("button",{className:m,children:e})}))})]})})})};var u=function(e){var t=e.onLogin,n=Object(r.useState)(""),c=Object(s.a)(n,2),a=c[0],o=c[1],j=Object(r.useState)(""),i=Object(s.a)(j,2),l=i[0],d=i[1];return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,password:l})}).then((function(e){return e.json()})).then((function(e){return t(e)}))},children:[Object(b.jsx)("h3",{children:"Login"}),Object(b.jsx)("label",{htmlFor:"username",children:"Username: "}),Object(b.jsx)("input",{type:"text",id:"name",autoComplete:"off",value:a,onChange:function(e){return o(e.target.value)}}),Object(b.jsx)("label",{htmlFor:"password",children:"Password"}),Object(b.jsx)("input",{type:"password",id:"password",autoComplete:"current-password",value:l,onChange:function(e){return d(e.target.value)}}),Object(b.jsx)("button",{type:"submit",children:"Sign in"})]})})};var h=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){fetch("/jobs").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]),Object(b.jsx)("div",{className:"JobList",children:Object(b.jsx)("ul",{className:"Jobs",children:n.map((function(e){return Object(b.jsx)(d,{job:e},e.id)}))})})};var x=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){fetch("/me").then((function(e){e.ok&&e.json().then((function(e){return c(e)}))}))}),[]),n?Object(b.jsxs)("h2",{children:["Welcome, ",n.name,"!"]}):Object(b.jsx)(u,{onLogin:c})};var O=function(){return Object(b.jsxs)("article",{children:[Object(b.jsx)("h2",{children:"Sign In"}),Object(b.jsx)("p",{children:"Login To View The Jobs"})]})},p={job:null,error:null,status:"pending"};var f=function(){var e=Object(r.useState)(p),t=Object(s.a)(e,2),n=t[0],c=n.job,a=n.error,o=n.status,d=t[1],u=Object(j.o)().id;if(Object(r.useEffect)((function(){d(p),fetch("/jobs/".concat(u)).then((function(e){e.ok?e.json().then((function(e){return d({job:e,error:null,status:"resolved"})})):e.json().then((function(e){return d({job:null,error:e.error,status:"rejected"})}))}))}),[u]),"pending"===o)return Object(b.jsx)("h1",{children:"Loading..."});if("rejected"===o)return"Login"===a?Object(b.jsx)(O,{}):Object(b.jsx)("h1",{children:a});var h=c.name,x=c.location,f=c.level,m=c.salary,g=(c.featured,c.languages),v=c.contract,y=c.posted_at,w=(c.companys,[f].concat(Object(i.a)(g)));return Object(b.jsx)("div",{children:Object(b.jsxs)("article",{children:[Object(b.jsx)("h1",{children:h}),Object(b.jsxs)("small",{children:[Object(b.jsxs)("p",{children:[y," \u2022 ",x," ",m," ",f]}),Object(b.jsx)("p",{children:Object(b.jsx)("em",{children:w.map((function(e){}))})})]}),Object(b.jsx)("p",{children:v}),Object(b.jsx)(l.b,{exact:!0,to:"/login",children:Object(b.jsx)("button",{children:"Company"})}),Object(b.jsx)(l.b,{exact:!0,to:"/login",children:Object(b.jsx)("button",{children:"Edit Job"})}),Object(b.jsx)(l.b,{exact:!0,to:"/login",children:Object(b.jsx)("button",{children:"Add Job"})}),Object(b.jsx)(l.b,{exact:!0,to:"/login",children:Object(b.jsx)("button",{children:"Delete Job"})})]})})};var m=function(e){var t=e.company,n=e.onLogout;return Object(b.jsx)("header",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:Object(b.jsx)(l.b,{to:"/",children:"Code Jobs"})}),t?Object(b.jsx)("div",{children:Object(b.jsx)("button",{onClick:function(){fetch("/logout",{method:"DELETE"}).then((function(){return n()}))},children:"Logout"})}):Object(b.jsxs)("section",{children:[Object(b.jsx)(l.b,{to:"/login",children:Object(b.jsx)("button",{children:"Click Here to Login"})}),Object(b.jsx)(l.b,{to:"/signup",children:Object(b.jsx)("button",{children:"Click Here to SignUp"})})]})]})})};var g=function(e){var t=e.job,n=t.name,c=t.location,r=t.level,a=t.salary,o=(t.featured,t.languages),s=t.contract,j=t.posted_at,d=t.companys,u=[r].concat(Object(i.a)(o));return Object(b.jsxs)("article",{children:[Object(b.jsx)("h1",{children:n}),Object(b.jsxs)("small",{children:[Object(b.jsxs)("p",{children:[j," \u2022 ",c," ",a," ",r," ",d.name]}),Object(b.jsx)("p",{children:Object(b.jsx)("em",{children:u.map((function(e){}))})})]}),Object(b.jsx)("p",{children:s}),Object(b.jsx)(l.b,{exact:!0,to:"/me",children:Object(b.jsx)("button",{children:"Company"})}),Object(b.jsx)(l.b,{exact:!0,to:"/login",children:Object(b.jsx)("button",{children:"Edit Job"})}),Object(b.jsx)(l.b,{exact:!0,to:"/members",children:Object(b.jsx)("button",{children:"Add Job"})}),Object(b.jsx)(l.b,{exact:!0,to:"/login",children:Object(b.jsx)("button",{children:"Delete Job"})})]})},v={jobs:null,error:null,status:"pending"};var y,w,C,S=function(){var e=Object(r.useState)(v),t=Object(s.a)(e,2),n=t[0],c=n.jobs,a=n.error,o=n.status,j=t[1];return Object(r.useEffect)((function(){j(v),fetch("/members").then((function(e){e.ok?e.json().then((function(e){return j({jobs:e,error:null,status:"resolved"})})):e.json().then((function(e){return j({jobs:null,error:e.error,status:"rejected"})}))}))}),[]),"pending"===o?Object(b.jsx)("h1",{children:"Loading..."}):"rejected"===o?Object(b.jsx)("h1",{children:a}):Object(b.jsxs)("main",{children:[Object(b.jsx)("h2",{children:"Member Only Jobs"}),c.map((function(e){return Object(b.jsx)(g,{job:e},e.id)}))]})},L=n(22),F=n(6),J=n(14);var k=J.b.section(y||(y=Object(c.a)(["\n  max-width: 500px;\n  margin: 32px auto;\n  padding: 32px;\n"]))),N=J.b.div(w||(w=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n"]))),E=J.b.button(C||(C=Object(c.a)(["\n  background: blue;\n  color: yellow;\n  font-weight: bold;\n  font-family: inherit;\n  font-size: 1.2rem;\n  border: none;\n  padding: 8px 16px;\n  cursor: pointer;\n"]))),T=function(){var e=Object(r.useState)(Object(F.a)({name:"",location:"",level:"",salary:"",languages:[],contract:"",posted_at:"",featured:!1},"posted_at","")),t=Object(s.a)(e,2),n=t[0],c=t[1];function a(e){var t="checkbox"===e.target.type?e.target.checked:e.target.value;c(Object(L.a)(Object(L.a)({},n),{},Object(F.a)({},e.target.id,t)))}return Object(b.jsx)(k,{children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))},children:[Object(b.jsxs)(N,{children:[Object(b.jsx)("label",{htmlFor:"name",children:"name"}),Object(b.jsx)("input",{type:"text",id:"name",value:n.name,onChange:a})]}),Object(b.jsxs)(N,{children:[Object(b.jsx)("label",{htmlFor:"location",children:"Location"}),Object(b.jsx)("input",{type:"text",id:"location",value:n.location,onChange:a})]}),Object(b.jsxs)(N,{children:[Object(b.jsx)("label",{htmlFor:"level",children:"Level"}),Object(b.jsx)("input",{type:"text",id:"level",value:n.level,onChange:a})]}),Object(b.jsxs)(N,{children:[Object(b.jsx)("label",{htmlFor:"",children:"Salary"}),Object(b.jsx)("input",{type:"text",id:"salary",value:n.salary,onChange:a})]}),Object(b.jsxs)(N,{children:[Object(b.jsx)("label",{htmlFor:"languages",children:"Languages"}),Object(b.jsx)("textarea",{id:"languages",value:n.languages,onChange:a})]}),Object(b.jsxs)(N,{children:[Object(b.jsx)("label",{htmlFor:"contract",children:"Contract"}),Object(b.jsx)("input",{type:"text",id:"contract",value:n.contract,onChange:a})]}),Object(b.jsx)(N,{children:Object(b.jsxs)("label",{htmlFor:"featured",children:["Featured?",Object(b.jsx)("input",{type:"checkbox",id:"featured",checked:n.featured,onChange:a})]})}),Object(b.jsx)(E,{type:"submit",children:"Add Job"})]})})};var P=function(e){var t=e.setCompany,n=Object(r.useState)(""),c=Object(s.a)(n,2),a=c[0],o=c[1],j=Object(r.useState)(""),i=Object(s.a)(j,2),l=i[0],d=i[1],u=Object(r.useState)(""),h=Object(s.a)(u,2),x=h[0],O=h[1];return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,password:l,password_confirmation:x})}).then((function(e){e.ok&&e.json().then((function(e){return t(e)}))}))},children:[Object(b.jsx)("h1",{children:"Sign Up"}),Object(b.jsx)("label",{htmlFor:"name",children:"Username"}),Object(b.jsx)("input",{type:"text",id:"name",autoComplete:"off",value:a,onChange:function(e){return o(e.target.value)}}),Object(b.jsx)("label",{htmlFor:"password",children:"Password"}),Object(b.jsx)("input",{type:"password",id:"password",value:l,onChange:function(e){return d(e.target.value)},autoComplete:"current-password"}),Object(b.jsx)("label",{htmlFor:"password",children:"Password Confirmation"}),Object(b.jsx)("input",{type:"password",id:"password_confirmation",value:x,onChange:function(e){return O(e.target.value)},autoComplete:"current-password"}),Object(b.jsx)("button",{type:"submit",children:"Sign Up"})]})})};var D,_=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){fetch("/me").then((function(e){e.ok&&e.json().then((function(e){return c(e)}))}))}),[]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(m,{company:n,onLogout:function(){c(null)}}),Object(b.jsx)("main",{children:n?Object(b.jsx)(j.c,{children:Object(b.jsx)(j.a,{exact:!0,path:"/members",element:Object(b.jsx)(S,{})})}):Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/login",element:Object(b.jsx)(u,{onLogin:function(e){c(e)}}),children:" "}),Object(b.jsx)(j.a,{exact:!0,path:"/jobs/:id",element:Object(b.jsx)(f,{}),children:" "}),Object(b.jsx)(j.a,{exact:!0,path:"/new",element:Object(b.jsx)(T,{})}),Object(b.jsx)(j.a,{exact:!0,path:"/signup",element:Object(b.jsx)(P,{setCompany:c})}),Object(b.jsx)(j.a,{exact:!0,path:"/",element:Object(b.jsx)(h,{})}),Object(b.jsx)(j.a,{exact:!0,path:"/me",element:Object(b.jsx)(x,{})})]})})]})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))},A=Object(J.a)(D||(D=Object(c.a)(["\n  html {\n    font-family: 'Roboto', sans-serif;\n  }\n\n  html, body {\n    margin: 0;\n    padding: 0;\n  }\n"])));o.a.render(Object(b.jsxs)(l.a,{children:[Object(b.jsx)(A,{}),Object(b.jsx)(_,{})]}),document.getElementById("root")),U()}},[[44,1,2]]]);
//# sourceMappingURL=main.38b42dba.chunk.js.map