(this["webpackJsonpreact-from-meta-lang"]=this["webpackJsonpreact-from-meta-lang"]||[]).push([[0],{12:function(e){e.exports=JSON.parse('{"variable":{"baseColor":"#A63744","textColor":"#333","textColor_w":"#fff","bgColor_g":"#eee","textSize":"14px"}}')},21:function(e){e.exports=JSON.parse('{"message":{"text":"\u3053\u3093\u306b\u3061\u306f\u3001\u308a\u3042\u304f\u3068\u3002","selector":".hello"}}')},40:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),a=n(0),i=n.n(a),o=n(24),s=n.n(o),j=n(9),l=n(8);function x(){var e=Object(c.a)(["\n    width: 100%;\n    max-width: 1000px;\n    padding: 20px;\n    margin: 0 auto;\n"]);return x=function(){return e},e}var d=Object(l.b)(x()),b=n(12),h=n(13);function u(){var e=Object(c.a)(["\n  ","\n  text-align: center;\n  background: ",";\n  padding: 20px;\n  & h2 {\n    font-size: 2em;\n  }\n  & nav span {\n    padding-right: 0.5em;\n  }\n"]);return u=function(){return e},e}var O=b.variable,f=j.data.header.title,p=j.data.header.text,m="/react-app-started",g=l.c.header(u(),d,O.bgColor_g);var v=function(){return Object(r.jsxs)(g,{children:[Object(r.jsx)("h2",{children:f}),Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:p}}),Object(r.jsxs)("nav",{children:[Object(r.jsx)("span",{children:"MENU:"}),Object(r.jsx)("span",{children:Object(r.jsx)(h.b,{to:m+"/",children:"Home"})}),Object(r.jsx)("span",{children:Object(r.jsx)(h.b,{to:m+"/other",children:"Other"})})]})]})},S=n(20),C=n(21),_={text:C.message.text,selector:C.message.selector},y=_.text,T=_.selector;function J(){var e=Object(c.a)(["\n  & h2 {\n    font-size: 1.25em;\n    color: ",";\n  }\n"]);return J=function(){return e},e}var L=b.variable,M=j.data.inner,z=l.c.section(J(),L.baseColor);var H=function(){return Object(a.useEffect)((function(){!function(){var e=document.querySelector(T);console.log(e),e.innerHTML=y,console.log("text-> "+y)}()})),Object(r.jsx)("div",{className:"inner",children:M.map((function(e,t){return Object(r.jsxs)(z,{children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:e.text}})]},t)}))})},I=n(3);function N(){var e=Object(c.a)(["\n  ","\n  & h1 {\n    font-size: 1.5em;\n  }\n"]);return N=function(){return e},e}var w=j.data.main.title,F=j.data.main.text,k=j.data.other.title,E=j.data.other.text,A="/react-app-started",B=l.c.section(N(),d);var P=function(){return Object(r.jsx)("main",{children:Object(r.jsx)(B,{children:Object(r.jsxs)(I.c,{children:[Object(r.jsxs)(I.a,{exact:!0,path:A+"/",children:[Object(r.jsxs)(S.a,{children:[Object(r.jsx)("title",{children:w}),Object(r.jsx)("meta",{name:"description",content:F})]}),Object(r.jsx)("h1",{children:w}),Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:F}}),Object(r.jsx)(H,{})]}),Object(r.jsxs)(I.a,{path:A+"/other",children:[Object(r.jsxs)(S.a,{children:[Object(r.jsx)("title",{children:k}),Object(r.jsx)("meta",{name:"description",content:E})]}),Object(r.jsx)("h1",{children:k}),Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:E}})]})]})})})};function R(){var e=Object(c.a)(["\n  ","\n  text-align: center;\n"]);return R=function(){return e},e}var q=j.data.footer.text,D=l.c.footer(R(),d);var U=function(){return Object(r.jsx)(D,{children:Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:q}})})};var G=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(h.a,{children:[Object(r.jsx)(v,{}),Object(r.jsx)(P,{}),Object(r.jsx)(U,{})]})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};function Q(){var e=Object(c.a)(["\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n    font-size: ",";\n    color: ",";\n    *, *:before, *:after {\n        box-sizing: border-box;\n    }\n    a {\n        color: ",";\n        &:hover {\n          opacity: 0.8;\n        }\n    }\n  }\n"]);return Q=function(){return e},e}var V=b.variable,W=Object(l.a)(Q(),V.textSize,V.textColor,V.baseColor);s.a.render(Object(r.jsxs)(i.a.StrictMode,{children:[Object(r.jsx)(W,{}),Object(r.jsx)(G,{})]}),document.getElementById("root")),K()},9:function(e){e.exports=JSON.parse('{"data":{"header":{"title":"React\u30a2\u30d7\u30ea\u30b9\u30bf\u30fc\u30bf\u30fc\u30ad\u30c3\u30c8","text":"React + TypeScript + CSS in JS\u74b0\u5883"},"main":{"title":"\u30e1\u30a4\u30f3\u30da\u30fc\u30b8\u3067\u3059","text":"\u30e1\u30a4\u30f3\u30da\u30fc\u30b8\u306e\u30c6\u30ad\u30b9\u30c8\u3067\u3059\u3002\u30c6\u30ad\u30b9\u30c8\u3067\u3059\u3063\u305f\u3089\u30c6\u30ad\u30b9\u30c8\u3067\u3059\u3002"},"other":{"title":"\u5225\u30da\u30fc\u30b8\u3067\u3059","text":"\u5225\u30da\u30fc\u30b8\u306e\u30c6\u30ad\u30b9\u30c8\u3067\u3059\u3002\u30c6\u30ad\u30b9\u30c8\u3067\u3059\u3063\u305f\u3089\u30c6\u30ad\u30b9\u30c8\u3067\u3059\u3002"},"inner":[{"title":"CSS\uff08\u6587\u5b57\u8272\uff09","text":"CSS\u3067\u30bf\u30a4\u30c8\u30eb\u306e\u6587\u5b57\u8272\u5909\u66f4\u3002"},{"title":"JS\uff08\u6587\u5b57\u5217\uff09","text":"JS\u3067\u30c6\u30ad\u30b9\u30c8\u306e\u6587\u5b57\u5217\u8ffd\u52a0\u300c<span class=\'hello\'></span>\u300d"}],"footer":{"text":"\xa9\ufe0f react-app-started"}}}')}},[[40,1,2]]]);
//# sourceMappingURL=main.b1ec2d1b.chunk.js.map