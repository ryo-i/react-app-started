(this["webpackJsonpreact-from-meta-lang"]=this["webpackJsonpreact-from-meta-lang"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"data":{"header":{"title":"React\u30a2\u30d7\u30ea\u30b9\u30bf\u30fc\u30bf\u30fc\u30ad\u30c3\u30c8","text":"React + TypeScript + CSS in JS\u74b0\u5883"},"main":{"title":"\u30e1\u30a4\u30f3\u30da\u30fc\u30b8\u3067\u3059","text":"\u30e1\u30a4\u30f3\u30da\u30fc\u30b8\u306e\u30c6\u30ad\u30b9\u30c8\u3067\u3059\u3002\u30c6\u30ad\u30b9\u30c8\u3067\u3059\u3063\u305f\u3089\u30c6\u30ad\u30b9\u30c8\u3067\u3059\u3002"},"about":{"title":"\u3053\u306e\u30a2\u30d7\u30ea\u306b\u3064\u3044\u3066","text":"\u30a2\u30d7\u30ea\u306e\u6982\u8981\u3092\u3053\u3053\u306b\u66f8\u304f\u3002"},"inner":[{"title":"CSS\uff08\u6587\u5b57\u8272\uff09","text":"CSS\u3067\u30bf\u30a4\u30c8\u30eb\u306e\u6587\u5b57\u8272\u5909\u66f4\u3002"},{"title":"JS\uff08\u6587\u5b57\u5217\uff09","text":"JS\u3067\u30c6\u30ad\u30b9\u30c8\u306e\u6587\u5b57\u5217\u8ffd\u52a0\u300c<span class=\'hello\'></span>\u300d"}],"footer":{"text":"\xa9\ufe0f react-app-started"}}}')},12:function(e){e.exports=JSON.parse('{"variable":{"baseColor":"#A63744","textColor":"#333","textColor_w":"#fff","bgColor_g":"#eee","textSize":"14px"}}')},21:function(e){e.exports=JSON.parse('{"message":{"text":"\u3053\u3093\u306b\u3061\u306f\u3001\u308a\u3042\u304f\u3068\u3002","selector":".hello"}}')},40:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(8),i=n(0),a=n.n(i),s=n(24),o=n.n(s),j=n(10),l=n(9);function b(){var e=Object(c.a)(["\n    width: 100%;\n    max-width: 1000px;\n    padding: 20px;\n    margin: 0 auto;\n"]);return b=function(){return e},e}var x=Object(l.b)(b()),h=n(12),d=n(13);function u(){var e=Object(c.a)(["\n  ","\n  text-align: center;\n  background: ",";\n  padding: 20px;\n  h2 {\n    font-size: 2em;\n  }\n  nav span {\n    padding-right: 0.5em;\n  }\n"]);return u=function(){return e},e}var O=h.variable,p=j.data.header.title,f=j.data.header.text,m="/react-app-started",g=l.c.header(u(),x,O.bgColor_g);var v=function(){return Object(r.jsxs)(g,{children:[Object(r.jsx)("h2",{children:p}),Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:f}}),Object(r.jsxs)("nav",{children:[Object(r.jsx)("span",{children:"MENU:"}),Object(r.jsx)("span",{children:Object(r.jsx)(d.b,{to:m+"/",children:"Home"})}),Object(r.jsx)("span",{children:Object(r.jsx)(d.b,{to:m+"/about",children:"About"})})]})]})},S=n(20),y=n(21),C={text:y.message.text,selector:y.message.selector},_=C.text,T=C.selector,w=j.data.inner;var z=function(){return Object(i.useEffect)((function(){!function(){var e=document.querySelector(T);console.log(e),e.innerHTML=_,console.log("text-> "+_)}()})),Object(r.jsx)("div",{className:"inner",children:w.map((function(e,t){return Object(r.jsxs)("section",{children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:e.text}})]},t)}))})};var H=function(){return Object(r.jsxs)("div",{className:"inner",children:[Object(r.jsxs)("section",{children:[Object(r.jsx)("h2",{children:"\u30bf\u30a4\u30c8\u30eb"}),Object(r.jsx)("p",{children:"\u8aac\u660e\u8aac\u660e\u8aac\u660e\u8aac\u660e\u8aac\u660e\u8aac\u660e\u8aac\u660e\u8aac\u660e"})]}),Object(r.jsxs)("section",{children:[Object(r.jsx)("h2",{children:"\u30a4\u30a4\u30c0\u30ea\u30e7\u30a6"}),Object(r.jsx)("p",{children:"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a8\u30f3\u30b8\u30cb\u30a2\u3002\u795e\u5948\u5ddd\u306b\u4f4f\u307e\u3046\u56db\u5341\u8def\u306e\u30aa\u30b8\u30ad\u3002 DTP\u2192Web\u30c7\u30b6\u30a4\u30ca\u30fc\u304b\u3089\u8ee2\u5411\u3057\u4eca\u306b\u81f3\u308b\u3002\u5f15\u304d\u7d9a\u304d\u30b3\u30c4\u30b3\u30c4\u306e\u65e5\u3005\u3002\u30d6\u30ed\u30b0\u3082\u66f8\u3044\u3066\u307e\u3059\u3002 Web\u3065\u304f\u308a \u3084\u308a\u305f\u3044\u6642\u304c \u59cb\u3081\u6642\uff01"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://www.i-ryo.com",children:"\u30d6\u30ed\u30b0"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://twitter.com/idr_zz",children:"Twitter"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://qiita.com/i-ryo",children:"Qiita"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://github.com/ryo-i",children:"GitHub"})})]})]})]})},J=n(3);function L(){var e=Object(c.a)(["\n  ","\n  h1 {\n    font-size: 1.5em;\n  }\n  h2 {\n    font-size: 1.25em;\n    color: ",";\n  }\n"]);return L=function(){return e},e}var M=h.variable,I=j.data,N=I.main.title,F=I.main.text,k=I.about.title,A=I.about.text,E="/react-app-started",P=l.c.section(L(),x,M.baseColor);var q=function(){return Object(r.jsx)("main",{children:Object(r.jsx)(P,{children:Object(r.jsxs)(J.c,{children:[Object(r.jsxs)(J.a,{exact:!0,path:E+"/",children:[Object(r.jsx)(S.a,{title:N,meta:[{name:"description",content:F}]}),Object(r.jsx)("h1",{children:N}),Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:F}}),Object(r.jsx)(z,{})]}),Object(r.jsxs)(J.a,{path:E+"/about",children:[Object(r.jsx)(S.a,{title:k,meta:[{name:"description",content:A}]}),Object(r.jsx)("h1",{children:k}),Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:A}}),Object(r.jsx)(H,{})]})]})})})};function B(){var e=Object(c.a)(["\n  ","\n  text-align: center;\n"]);return B=function(){return e},e}var D=j.data.footer.text,R=l.c.footer(B(),x);var W=function(){return Object(r.jsx)(R,{children:Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:D}})})};var G=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(d.a,{children:[Object(r.jsx)(v,{}),Object(r.jsx)(q,{}),Object(r.jsx)(W,{})]})})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))};function U(){var e=Object(c.a)(["\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n    font-size: ",";\n    color: ",";\n    *, *:before, *:after {\n        box-sizing: border-box;\n    }\n    a {\n        color: ",";\n        &:hover {\n          opacity: 0.8;\n        }\n    }\n    section {\n      margin: 0 0 20px;\n    }\n    h1, h2, p, figure, ul, table {\n      margin: 0 0 10px;\n    }\n    h1, h2 {\n      line-height: 1.25;\n    }\n    p {\n      line-height: 1.75;\n    }\n  }\n"]);return U=function(){return e},e}var K=h.variable,V=Object(l.a)(U(),K.textSize,K.textColor,K.baseColor);o.a.render(Object(r.jsxs)(a.a.StrictMode,{children:[Object(r.jsx)(V,{}),Object(r.jsx)(G,{})]}),document.getElementById("root")),Q()}},[[40,1,2]]]);
//# sourceMappingURL=main.fe53055e.chunk.js.map