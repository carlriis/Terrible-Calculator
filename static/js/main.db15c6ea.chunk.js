(this["webpackJsonpterrible-calculator"]=this["webpackJsonpterrible-calculator"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(6),c=n.n(o),i=(n(14),n(3)),u=function(t){var e=t.text;return a.a.createElement("div",{style:l.container},a.a.createElement("p",{style:l.text},e))},l={container:{backgroundColor:"#2e2e2e",borderRadius:"5px",margin:"10px",height:"40px",padding:"10px"},text:{color:"white",margin:"0"}},s=n(8),d=function(t,e){switch(e.type){case"add":return"number"!==typeof t[t.length-1]&&"number"!==typeof e.action?t:"number"===typeof t[t.length-1]&&"number"===typeof e.action?t.map((function(n,r){return r===t.length-1?parseInt(n.toString()+e.action.toString()):n})):[].concat(Object(s.a)(t),[e.action]);case"clear":return[];default:return t}},f=n(7),m=n(4),p=function(t){var e=t.text,n=t.color,r=t.click;return a.a.createElement("div",{style:Object(m.a)(Object(m.a)({},h.button),{},{backgroundColor:n}),onClick:r},a.a.createElement("h1",{style:h.text},e))},h={button:{width:"50px",height:"50px",cursor:"pointer",borderRadius:"5px",margin:"10px"},text:{fontSize:"40px",textAlign:"center",margin:"0"}},g=function(t){var e=t.dispatch,n=t.calculateResult,r=t.clear,o=function(t,n){for(var r=[],o=function(n){r.push(a.a.createElement("td",{key:n+t},a.a.createElement(p,{click:function(){return e({type:"add",action:n})},text:n.toString(),color:"white"})))},c=t;c<t+3;c++)o(c);return r.push(a.a.createElement("td",{key:-1*t},a.a.createElement(p,{click:function(){return e({type:"add",action:n})},color:"darkgrey",text:n}))),r};return a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement("tr",null,o(1,"+")),a.a.createElement("tr",null,o(4,"-")),a.a.createElement("tr",null,o(7,"*")),a.a.createElement("tr",{style:w.tr},a.a.createElement("td",null,a.a.createElement(p,{text:"C",color:"pink",click:r})),a.a.createElement("td",null,a.a.createElement(p,{click:function(){return e({type:"add",action:0})},text:"0",color:"white"})),a.a.createElement("td",null,a.a.createElement(p,{text:"=",color:"lightgreen",click:n})),a.a.createElement("td",null,a.a.createElement(p,{click:function(){return e({type:"add",action:"/"})},text:"/",color:"darkgrey"})))))},w={container:{},tr:{marginLeft:"10px"}},b=[function(t){return{answer:"Thats at least 10",condition:t>10}},function(t){return{answer:"I think it's "+t,condition:!0}},function(t){return{answer:"Thats a very big number",condition:t>1e3}},function(t){return{answer:"I have no idea",condition:!0}},function(t){return{answer:"Your guess is as good as mine",condition:!0}},function(t){return{answer:"You should know this",condition:!0}},function(t){return{answer:"I'm pretty sure it's "+Math.floor(Math.random()*(t+3-(t-2)+1)+(t-2)),condition:!0}},function(t){return{answer:"Thats "+(t+3),condition:t<100}},function(t){return{answer:"I'm sure it's "+(t+(Math.floor(6*Math.random())+1)),condition:t<500}},function(t){return{answer:"It's below 0",condition:t<0}},function(t){return{answer:"I'm 100% sure it's "+(t+1),condition:t>10&&t<200}},function(t){return{answer:"I know what it is but I won't tell you",condition:!0}},function(t){return{answer:"The answer is WAY to big",condition:t>1500}},function(t){return{answer:"Your answer is "+(t-.01),condition:!0}},function(t){return{answer:t.toString(),condition:!0}},function(t){return{answer:(t-1).toString(),condition:!0}},function(t){return{answer:(t+1).toString(),condition:!0}},function(t){return{answer:"It's either ".concat(t+Math.floor(2*Math.random())," or ").concat(t-Math.floor(3*Math.random())),condition:t<100}},function(t){return{answer:3.14159265359.toString(),condition:t<6}}],x=function(){var t=Object(r.useState)(""),e=Object(i.a)(t,2),n=e[0],o=e[1],c=Object(r.useReducer)(d,[]),l=Object(i.a)(c,2),s=l[0],m=l[1];Object(r.useEffect)((function(){0!==s.length&&o(s.map((function(t){return"number"===typeof t?t.toString():" "+t+" "})).join(""))}),[s]);return a.a.createElement("div",{style:E.container},a.a.createElement(u,{text:n}),a.a.createElement(g,{dispatch:m,calculateResult:function(){var t=Object(f.a)(s),e=[];b.forEach((function(n){var r=n(t);r.condition&&e.push(r.answer)})),m({type:"clear"}),o(e[Math.floor(Math.random()*e.length)])},clear:function(){m({type:"clear"}),o("")}}))},E={container:{margin:"auto",width:"300px",paddingBottom:"10px",backgroundColor:"grey",borderRadius:"15px",overflow:"auto"}};var y={title:{textAlign:"center",paddingTop:"50px",fontSize:"60px"}},k=function(){return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("h1",{style:y.title},"Terrible Calculator"),a.a.createElement(x,null)))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(k,null)),document.getElementById("root"))},7:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return calculate}));var calculate=function calculate(actions){if(0===actions.length)return 0;var expression=removeIllegalOperators(actions).map((function(t){return"number"===typeof t?t.toString():t}));return eval(expression.join(" "))},removeIllegalOperators=function(t){return t.filter((function(e,n){return"string"!==typeof e||!(0===n||n===t.length-1)}))}},9:function(t,e,n){t.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.db15c6ea.chunk.js.map