_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"19LR":function(e,t,a){"use strict";var s=a("nKUr"),c=a("q1tI"),n=a("YFqc"),l=a.n(n),i="na";t.a=function(){var e=Object(c.useState)(i),t=e[0],a=e[1],n=Object(c.useState)(""),r=n[0],o=n[1],d=Object(c.useState)(""),b=d[0],h=d[1],u=Object(c.useState)(""),j=u[0],m=u[1],x=Object(c.useState)(""),p=x[0],g=x[1],f=Object(c.useState)(new Boolean(!1)),O=f[0],v=f[1],N="pt-2 pl-4 font-extrabold text-vesicode-red-dark";return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("form",{className:"w-full",onSubmit:function(e){e.preventDefault();var t=function(){var e={};return r.trim().length<1&&(e.Name=!0),b.trim().length<1&&(e.Organisation=!0),j.length>1024&&(e.Message=!0),/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(String(p).toLowerCase())||(e.Email=!0),O||(e.Accept=!0),e}();if(0===Object.entries(t).length){var s={name:r,organisation:b,message:j,email:p,accepted:O.valueOf()};console.log("touching the endpoint ..."),console.log(JSON.stringify(s)),fetch("http://localhost:7071/api/contact",{method:"POST",body:JSON.stringify(s)}).then((function(e){return e.json()})).then((function(e){console.log(e),a(e)}))}else a({Err:t})},children:Object(s.jsxs)("div",{className:"pt-4",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{className:"block uppercase tracking-wide font-bold mb-2 text-xs",children:"Name"}),Object(s.jsx)("input",{className:"block w-full text-gray-800 bg-gray-200 py-3 px-4 focus:bg-white",type:"text",value:r,onChange:function(e){return o(e.target.value)},placeholder:"Contact person"}),Object(s.jsx)("div",{className:t.Err&&t.Err.Name?N:"hidden",children:"Please, tell us what to call you!"})]}),Object(s.jsxs)("div",{className:"pt-4",children:[Object(s.jsx)("label",{className:"block uppercase tracking-wide font-bold mb-2 text-xs",children:"Organisation"}),Object(s.jsx)("input",{className:"block w-full text-gray-800 bg-gray-200 py-3 px-4 focus:bg-white",type:"text",value:b,onChange:function(e){return h(e.target.value)},placeholder:"Name of organisation"}),Object(s.jsx)("div",{className:t.Err&&t.Err.Organisation?N:"hidden",children:"Where are you from?"})]}),Object(s.jsxs)("div",{className:"pt-4",children:[Object(s.jsx)("label",{className:"block uppercase tracking-wide font-bold mb-2 text-xs",children:"Message"}),Object(s.jsx)("textarea",{className:"block w-full text-gray-800 bg-gray-200 py-3 px-4 focus:bg-white",value:j,onChange:function(e){return m(e.target.value)},placeholder:"Send us a message!"}),Object(s.jsx)("div",{className:t.Err&&t.Err.Message?N:"hidden",children:"While we do enjoy reading ... less than 1024 characters, please?"})]}),Object(s.jsxs)("div",{className:"pt-4",children:[Object(s.jsx)("label",{className:"block uppercase tracking-wide font-bold mb-2 text-xs",children:"Email Address"}),Object(s.jsx)("input",{className:"block w-full text-gray-800 bg-gray-200 py-3 px-4 focus:bg-white",type:"text",value:p,onChange:function(e){return g(e.target.value)},placeholder:"e.mail@ddress.net"}),Object(s.jsx)("div",{className:t.Err&&t.Err.Email?N:"hidden",children:"Please, provide a valid email address!"})]}),Object(s.jsxs)("div",{className:"mb-6 flex-col items-center pt-4",children:[Object(s.jsxs)("label",{className:"block font-bold flex items-center",children:[Object(s.jsx)("input",{className:"mr-2 leading-tight",type:"checkbox",value:O.valueOf(),onChange:function(e){return v(new Boolean(!O.valueOf()))}}),Object(s.jsxs)("span",{className:"text-xs",children:["I accept the Terms and Conditions of"," ",Object(s.jsx)(l.a,{href:"/privacy-policy",children:Object(s.jsx)("a",{className:"hover:underline",children:"Vesicode's Privacy Policy"})})]})]}),Object(s.jsx)("div",{className:t.Err&&t.Err.Accept?N:"hidden",children:"Please, read and accept the terms and conditions to proceed!"})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{className:"bg-vesicode-red-dark hover:bg-vesicode-red-light focus:outline-none text-white font-bold py-4 px-10 rounded",type:"submit",value:"Submit",children:"Submit"})})]})}),Object(s.jsx)("div",{className:t.Ok?"text-2xl font-bold pt-4":"hidden",children:"Thank you! Your submission has been received!"}),Object(s.jsxs)("div",{className:t.Failed?"text-2xl font-bold text-vesicode-red-dark pt-4":"hidden",children:["Oops! Something went wrong while submitting the form.",Object(s.jsx)("br",{}),"Try mailing us directly at"," ",Object(s.jsx)(l.a,{href:"mailto:info@vesicode.com",children:Object(s.jsx)("a",{className:"hover:underline",children:"info@vesicode.com"})}),"."]})]})}},p5vY:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/contact",function(){return a("wYly")}])},wYly:function(e,t,a){"use strict";a.r(t);var s=a("nKUr"),c=(a("YFqc"),a("u51M")),n=a("19LR"),l={src:"/home/img/about_us_main.png",srcSet:"/home/img/about_us_main-p-500.png 500w,/home/img/about_us_main-p-1080.png 1080w"};t.default=function(){return Object(s.jsxs)(c.a,{hero:l,children:[Object(s.jsx)("div",{className:"py-8 px-6 bg-vesicode-header-block text-vesicode-header-font",children:Object(s.jsx)("h1",{className:"font-header text-3xl font-semibold",children:"Contact Us"})}),Object(s.jsxs)("div",{className:"p-6 bg-white",children:[Object(s.jsx)("h1",{className:"text-xl font-bold font-header",children:"What can we do for you?"}),Object(s.jsx)(n.a,{})]})]})}}},[["p5vY",0,2,5,4,1,3]]]);