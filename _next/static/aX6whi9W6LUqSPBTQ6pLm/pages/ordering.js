(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"9Jkg":function(e,t,a){e.exports=a("oh+g")},E8gZ:function(e,t,a){var l=a("jmDH"),n=a("w6GO"),s=a("NsO/"),o=a("NV0k").f;e.exports=function(e){return function(t){for(var a,r=s(t),i=n(r),c=i.length,u=0,d=[];c>u;)a=i[u++],l&&!o.call(r,a)||d.push(e?[a,r[a]]:r[a]);return d}}},"LR/J":function(e,t,a){e.exports=a("tgZa")},"TeS/":function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),s=a("YFqc"),o=a.n(s),r=a("u51M"),i=a("9Jkg"),c=a.n(i),u=a("LR/J"),d=a.n(u),p=a("doui"),m=n.a.createElement,b="na";function g(e,t){var a=Object(l.useState)(e),n=a[0],s=a[1],o=Object(l.useState)("hidden"),r=o[0],i=o[1];return[n,function(e){return s(e.target.value)},r,function(){return t(n)?i("hidden"):i("pt-2 pl-4 font-extrabold text-vesicode-red-dark")}]}var h=function(e){return/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(String(e).toLowerCase())},f=function(e){return e.trim().length>0},v=function(e){return e.trim().length>0},x=function(e){return e.trim().length<1024},N=function(e){return!0},w=function(e){return e.trim().length>0},y=["Serum","Plasma","Other"],k=function(e){return/^\d+$/i.test(e)&&e<3210},O=function(e){return!0},S=function(){var e=Object(l.useState)(b),t=e[0],a=e[1],s=g("",f),r=Object(p.a)(s,4),i=r[0],u=r[1],S=r[2],_=r[3],j=g("",v),B=Object(p.a)(j,4),C=B[0],P=B[1],T=B[2],E=B[3],J=g("",x),W=Object(p.a)(J,4),H=W[0],Z=W[1],D=W[2],X=W[3],A=g("",h),F=Object(p.a)(A,4),G=F[0],I=F[1],L=F[2],M=F[3],R=g("",N),V=Object(p.a)(R,4),Y=V[0],q=V[1],$=V[2],z=V[3],K=Object(l.useState)(""),Q=K[0],U=K[1],ee=Object(l.useState)(""),te=ee[0],ae=ee[1],le=Object(l.useState)("hidden"),ne=le[0],se=le[1],oe=Object(l.useState)("hidden"),re=oe[0],ie=oe[1],ce=function(){y.includes(Q)?se("hidden"):se("pt-2 pl-4 font-extrabold text-vesicode-red-dark"),Q===y[y.length-1]?ie(te.trim().length>0?"hidden":"pt-2 pl-4 font-extrabold text-vesicode-red-dark"):ie(0===te.trim().length?"hidden":"pt-2 pl-4 font-extrabold text-vesicode-red-dark")},ue=g("",w),de=Object(p.a)(ue,4),pe=de[0],me=de[1],be=de[2],ge=de[3],he=Object(l.useState)(new Boolean(!1)),fe=he[0],ve=he[1],xe=g("",k),Ne=Object(p.a)(xe,4),we=Ne[0],ye=Ne[1],ke=Ne[2],Oe=Ne[3],Se=Object(l.useState)(new Boolean(!1)),_e=Se[0],je=Se[1],Be=Object(l.useState)(new Boolean(!1)),Ce=Be[0],Pe=Be[1],Te=g("",O),Ee=Object(p.a)(Te,4),Je=Ee[0],We=Ee[1],He=Ee[2],Ze=Ee[3],De=Object(l.useState)(new Boolean(!1)),Xe=De[0],Ae=De[1],Fe=function(e){return""!==e?e:null};return m(n.a.Fragment,null,m("form",{className:"w-full",onSubmit:function(e){e.preventDefault();var t=function(){var e={};return S||(e.Organisation=!0),D||(e.Message=!0),Xe.valueOf()||(e.Accept=!0),e}();if(0===d()(t).length){var l=c()({customer_name:i,customer_email:G,customer_organisation:C,customer_phone:Fe(Y),order_message:Fe(H),sample_type:Q,sample_type_other:Fe(te),sample_description:pe,sample_count:we,tested_blood_borne:_e,tested_blood_borne_positive:Ce,tested_blood_borne_comment:Je,accepted_terms_guid:"e58c63e9-561b-4818-9393-066f828ac57d"});console.log(l),fetch("http://localhost:7071/api/order",{method:"POST",body:l}).then((function(e){return e.json()})).then((function(e){console.log(e),a(e)}))}else a({Err:t})}},m("div",{className:"pt-4"},m("div",null,m("label",{className:"block uppercase tracking-wide font-bold mb-2 text-xs"},"Name"),m("input",{className:"block w-full text-gray-800 bg-gray-200 py-3 px-4 focus:bg-white",type:"text",value:i,onChange:u,onBlur:_,placeholder:"Contact person"}),m("div",{className:S},"Please, tell us what to call you!")),m("div",{className:"pt-4"},m("label",{className:"block uppercase tracking-wide font-bold mb-2 text-xs"},"Organisation"),m("input",{className:"block w-full text-gray-800 bg-gray-200 py-3 px-4 focus:bg-white",type:"text",value:C,onChange:P,onBlur:E,placeholder:"Name of organisation"}),m("div",{className:T},"Where are you from?")),m("div",{className:"pt-4"},m("label",{className:"block uppercase tracking-wide font-bold mb-2 text-xs"},"Email Address"),m("input",{className:"block w-full text-gray-800 bg-gray-200 py-3 px-4 focus:bg-white",type:"text",value:G,onChange:I,onBlur:M,placeholder:"Name of organisation"}),m("div",{className:L},"Please, provide a valid email address!")),m("div",{className:"pt-4"},m("label",{className:"block uppercase tracking-wide font-bold mb-2 text-xs"},"Phone Number"),m("input",{className:"block w-full text-gray-800 bg-gray-200 py-3 px-4 focus:bg-white",type:"text",value:Y,onChange:q,onBlur:z,placeholder:"+12-345 678 90 12"}),m("div",{className:$},"Please, provide a valid phone number!")),m("div",{className:"pt-4"},m("label",{className:"block uppercase tracking-wide font-bold mb-2 text-xs"},"Samples"),m("div",{className:"flex flex-row"},m("div",{className:"ml-6 w-1/3"},m("div",null,m("label",{className:""},"Type"),m("select",{className:"block w-full text-gray-800 bg-gray-200 py-3 px-4 focus:bg-white",value:Q,onChange:function(e){return U(e.target.value)},onBlur:ce},["Select type"].concat(y).map((function(e){return m("option",{key:e,value:e},e)}))),m("div",{className:ne},"Please, select a valid sample type!"),m("div",null,m("label",{className:""},"Other"),m("input",{className:"block w-full text-gray-800 bg-gray-200 py-3 px-4 focus:bg-white",value:te,onChange:function(e){return ae(e.target.value)},onBlur:ce}),m("div",{className:re},"Please, select a valid sample type!"))))),m("div",{className:"pt-4"},m("label",null,"Number of samples"),m("input",{className:"block w-full text-gray-800 bg-gray-200 py-3 px-4 focus:bg-white",value:we,onChange:ye,onBlur:Oe}),m("div",{className:ke},"How many samples will you be sending us?")),m("div",{className:"pt-4"},m("label",null,"Sample description"),m("input",{className:"block w-full text-gray-800 bg-gray-200 py-3 px-4 focus:bg-white",value:pe,onChange:me,onBlur:ge}),m("div",{className:be},"Tell us about the samples! Are they healthy? Pathological? What type of disease do they have?")),m("div",{className:"pt-4"},m("label",null,"Risk assessment of samples"),m("div",null,m("label",null,m("input",{className:"mr-2 w-8 h-8 lg:w-4 lg:h-4 leading-tight",type:"checkbox",value:_e.valueOf(),onChange:function(e){_e.valueOf()?(je(new Boolean(!1)),Pe(new Boolean(!1))):je(new Boolean(!0))}}),"Tested for blood-borne diseases?"),m("p",{className:"pl-2 text-sm"},"Have samples been tested for HIV, Hepatitis B and C or other blood-borne diseases?")),m("div",{className:_e.valueOf()?"":"hidden"},m("label",null,m("input",{className:"mr-2 w-8 h-8 lg:w-4 lg:h-4 leading-tight",type:"checkbox",value:Ce.valueOf(),onChange:function(e){return Pe(new Boolean(!Ce.valueOf()))}}),"Positive"),m("p",{className:"pl-2 text-sm"},"Was the test positive?")),m("div",null,m("label",null,"Comment"),m("input",{className:"block w-full text-gray-800 bg-gray-200 py-3 px-4 focus:bg-white",value:Je,onChange:We,onBlur:Ze}),m("div",{className:He},"How did this happen?"))),m("div",{className:"pt-4"},m("label",null,m("input",{className:"mr-2 w-8 h-8 lg:w-4 lg:h-4 leading-tight",type:"checkbox",value:fe.valueOf(),onChange:function(e){return ve(new Boolean(!fe.valueOf()))}}),"Control sample will be supplied"),m("p",{className:"pl-2 text-sm"},"This is recommended for studies with more than 100 samples and will be run free of charge.")),m("div",{className:"pt-4"},m("label",{className:"block uppercase tracking-wide font-bold mb-2 text-xs"},"Message"),m("textarea",{className:"block w-full text-gray-800 bg-gray-200 py-3 px-4 focus:bg-white",type:"text",value:H,onChange:Z,onBlur:X,placeholder:"Send us a message!"}),m("div",{className:D},"While we do enjoy reading ... less than 1024 characters, please?"))),m("div",{className:"mb-16 lg:mb-6 flex-col items-center mt-4 lg:mt-0 pt-8 lg:pt-4"},m("label",{className:"font-bold flex items-center"},m("input",{className:"mr-2 w-8 h-8 lg:w-4 lg:h-4 leading-tight",type:"checkbox",value:Xe.valueOf(),onChange:function(e){return Ae(new Boolean(!Xe.valueOf()))}}),m("span",{className:"lg:text-sm"},"I accept the Terms and Conditions of"," ",m(o.a,{href:"/privacy-policy"},m("a",{target:"_blank",rel:"noopener noreferrer",className:"hover:underline text-vesicode-link"},"Vesicode's Privacy Policy")))),m("div",{className:Xe?"hidden":"pt-2 pl-4 font-extrabold text-vesicode-red-dark"},"Please, read and accept the terms and conditions to proceed!")),m("div",null,m("button",{className:"w-full lg:w-auto bg-vesicode-red-dark hover:bg-vesicode-red-light focus:outline-none text-white font-bold py-4 px-10 rounded",type:"submit",value:"Submit"},"Submit")))),m("div",{className:t.verification?"text-2xl font-bold pt-4":"hidden"},"Thank you! Your submission has been received!"),m("div",{className:t.failed?"text-2xl font-bold text-vesicode-red-dark pt-4":"hidden"},"Oops! Something went wrong while submitting the form.",m("br",null),"Try mailing us directly at"," ",m("a",{href:"mailto:order@vesicode.com",className:"hover:underline text-vesicode-link"},"order@vesicode.com"),"."))},_=n.a.createElement;t.default=function(){return _(r.a,null,_("div",{className:"py-8 px-6 bg-vesicode-header-block text-vesicode-header-font"},_("h1",{className:"text-2xl font-bold font-header"},"Order"),_("h4",{className:"pt-4 text-m lg:text-s italic"},"Fill in the form or contact us on"," ",_("a",{href:"mailto:order@vesicode.com",className:"hover:underline text-vesicode-link"},"order@vesicode.com"),"!")),_("div",{className:"p-6 bg-white pb-20 lg:mb-20"},_(S,null)))}},XEWT:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ordering",function(){return a("TeS/")}])},nGDx:function(e,t,a){var l=a("Y7ZC"),n=a("E8gZ")(!0);l(l.S,"Object",{entries:function(e){return n(e)}})},"oh+g":function(e,t,a){var l=a("WEpk"),n=l.JSON||(l.JSON={stringify:JSON.stringify});e.exports=function(e){return n.stringify.apply(n,arguments)}},tgZa:function(e,t,a){a("nGDx"),e.exports=a("WEpk").Object.entries}},[["XEWT",1,2,6,4,5,0,3]]]);