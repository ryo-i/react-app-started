(this["webpackJsonpreact-from-meta-lang"]=this["webpackJsonpreact-from-meta-lang"]||[]).push([[0],{12:function(t){t.exports=JSON.parse('{"variable":{"baseColor":"#A63744","textColor":"#333","textColor_w":"#fff","bgColor_g":"#eee","textSize":"14px"}}')},21:function(t){t.exports=JSON.parse('{"message":{"text":"\u3053\u3093\u306b\u3061\u306f\u3001\u308a\u3042\u304f\u3068\u3002","selector":".hello"}}')},40:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(9),a=n(0),i=n.n(a),o=n(24),s=n.n(o),j=n(7),l=n(10);function b(){var t=Object(c.a)(["\n    width: 100%;\n    max-width: 1000px;\n    padding: 20px;\n    margin: 0 auto;\n"]);return b=function(){return t},t}var x=Object(l.b)(b()),d=n(12),h=n(13);function p(){var t=Object(c.a)(["\n  ","\n  text-align: center;\n  background: ",";\n  padding: 20px;\n  h2 {\n    font-size: 2em;\n  }\n  nav span {\n    padding-right: 0.5em;\n  }\n"]);return p=function(){return t},t}var O=d.variable,u=j.data.header.title,m=j.data.header.text,g="/react-app-started",f=l.c.header(p(),x,O.bgColor_g);var v=function(){return Object(r.jsxs)(f,{children:[Object(r.jsx)("h2",{children:u}),Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:m}}),Object(r.jsxs)("nav",{children:[Object(r.jsx)("span",{children:"MENU:"}),Object(r.jsx)("span",{children:Object(r.jsx)(h.b,{to:g+"/",children:"Home"})}),Object(r.jsx)("span",{children:Object(r.jsx)(h.b,{to:g+"/about",children:"About"})})]})]})},y=n(20),S=n(21),_={text:S.message.text,selector:S.message.selector},w=_.text,C=_.selector,z=j.data.inner;var T=function(){return Object(a.useEffect)((function(){!function(){var t=document.querySelector(C);console.log(t),t.innerHTML=w,console.log("text-> "+w)}()})),Object(r.jsx)("div",{className:"inner",children:z.map((function(t,e){return Object(r.jsxs)("section",{children:[Object(r.jsx)("h2",{children:t.title}),Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:t.text}})]},e)}))})};var H=function(){return Object(r.jsxs)("div",{className:"inner",children:[Object(r.jsxs)("section",{children:[Object(r.jsx)("h2",{children:"\u30bf\u30a4\u30c8\u30eb"}),Object(r.jsx)("p",{children:"\u8aac\u660e\u8aac\u660e\u8aac\u660e\u8aac\u660e\u8aac\u660e\u8aac\u660e\u8aac\u660e\u8aac\u660e"})]}),Object(r.jsxs)("section",{children:[Object(r.jsx)("h2",{children:"\u30a4\u30a4\u30c0\u30ea\u30e7\u30a6"}),Object(r.jsx)("p",{children:"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a8\u30f3\u30b8\u30cb\u30a2\u3002\u795e\u5948\u5ddd\u306b\u4f4f\u307e\u3046\u56db\u5341\u8def\u306e\u30aa\u30b8\u30ad\u3002 DTP\u2192Web\u30c7\u30b6\u30a4\u30ca\u30fc\u304b\u3089\u8ee2\u5411\u3057\u4eca\u306b\u81f3\u308b\u3002\u5f15\u304d\u7d9a\u304d\u30b3\u30c4\u30b3\u30c4\u306e\u65e5\u3005\u3002\u30d6\u30ed\u30b0\u3082\u66f8\u3044\u3066\u307e\u3059\u3002 Web\u3065\u304f\u308a \u3084\u308a\u305f\u3044\u6642\u304c \u59cb\u3081\u6642\uff01"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://www.i-ryo.com",children:"\u30d6\u30ed\u30b0"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://twitter.com/idr_zz",children:"Twitter"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://qiita.com/i-ryo",children:"Qiita"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://github.com/ryo-i",children:"GitHub"})})]})]})]})},J=n(3);function L(){var t=Object(c.a)(["\n  ","\n  h1 {\n    font-size: 1.5em;\n  }\n  h2 {\n    font-size: 1.25em;\n    color: ",";\n  }\n"]);return L=function(){return t},t}var M=d.variable,I=j.data.main.title,N=j.data.main.text,F=j.data.about.title,k=j.data.about.text,A="/react-app-started",E=l.c.section(L(),x,M.baseColor);var P=function(){return Object(r.jsx)("main",{children:Object(r.jsx)(E,{children:Object(r.jsxs)(J.c,{children:[Object(r.jsxs)(J.a,{exact:!0,path:A+"/",children:[Object(r.jsxs)(y.a,{children:[Object(r.jsx)("title",{children:I}),Object(r.jsx)("meta",{name:"description",content:N}),Object(r.jsx)("meta",{property:"og:title",content:I}),Object(r.jsx)("meta",{property:"og:type",content:"article"}),Object(r.jsx)("meta",{property:"og:image",content:A+"/ogp.png"}),Object(r.jsx)("meta",{property:"og:url",content:A+"/"}),Object(r.jsx)("meta",{property:"og:description",content:N}),Object(r.jsx)("meta",{name:"twitter:card",content:"summary"}),Object(r.jsx)("meta",{name:"twitter:site",content:"@idr_zz"})]}),Object(r.jsx)("h1",{children:I}),Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:N}}),Object(r.jsx)(T,{})]}),Object(r.jsxs)(J.a,{path:A+"/about",children:[Object(r.jsxs)(y.a,{children:[Object(r.jsx)("title",{children:F}),Object(r.jsx)("meta",{name:"description",content:k}),Object(r.jsx)("meta",{property:"og:title",content:F}),Object(r.jsx)("meta",{property:"og:type",content:"article"}),Object(r.jsx)("meta",{property:"og:image",content:A+"/ogp.png"}),Object(r.jsx)("meta",{property:"og:url",content:A+"/about"}),Object(r.jsx)("meta",{property:"og:description",content:k}),Object(r.jsx)("meta",{name:"twitter:card",content:"summary"}),Object(r.jsx)("meta",{name:"twitter:site",content:"@idr_zz"})]}),Object(r.jsx)("h1",{children:F}),Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:k}}),Object(r.jsx)(H,{})]})]})})})};function q(){var t=Object(c.a)(["\n  ","\n  text-align: center;\n"]);return q=function(){return t},t}var B=j.data.footer.text,D=l.c.footer(q(),x);var R=function(){return Object(r.jsx)(D,{children:Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:B}})})};var W=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(h.a,{children:[Object(r.jsx)(v,{}),Object(r.jsx)(P,{}),Object(r.jsx)(R,{})]})})},G=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),r(t),c(t),a(t),i(t)}))};function Q(){var t=Object(c.a)(["\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n    font-size: ",";\n    color: ",";\n    *, *:before, *:after {\n        box-sizing: border-box;\n    }\n    a {\n        color: ",";\n        &:hover {\n          opacity: 0.8;\n        }\n    }\n    section {\n      margin: 0 0 20px;\n    }\n    h1, h2, p, figure, ul, table {\n      margin: 0 0 10px;\n    }\n    h1, h2 {\n      line-height: 1.25;\n    }\n    p {\n      line-height: 1.75;\n    }\n  }\n"]);return Q=function(){return t},t}var U=d.variable,K=Object(l.a)(Q(),U.textSize,U.textColor,U.baseColor);s.a.render(Object(r.jsxs)(i.a.StrictMode,{children:[Object(r.jsx)(K,{}),Object(r.jsx)(W,{})]}),document.getElementById("root")),G()},7:function(t){t.exports=JSON.parse('{"data":{"header":{"title":"React\u30a2\u30d7\u30ea\u30b9\u30bf\u30fc\u30bf\u30fc\u30ad\u30c3\u30c8","text":"React + TypeScript + CSS in JS\u74b0\u5883"},"main":{"title":"\u30e1\u30a4\u30f3\u30da\u30fc\u30b8\u3067\u3059","text":"\u30e1\u30a4\u30f3\u30da\u30fc\u30b8\u306e\u30c6\u30ad\u30b9\u30c8\u3067\u3059\u3002\u30c6\u30ad\u30b9\u30c8\u3067\u3059\u3063\u305f\u3089\u30c6\u30ad\u30b9\u30c8\u3067\u3059\u3002"},"about":{"title":"\u3053\u306e\u30a2\u30d7\u30ea\u306b\u3064\u3044\u3066","text":"\u30a2\u30d7\u30ea\u306e\u6982\u8981\u3092\u3053\u3053\u306b\u66f8\u304f\u3002"},"inner":[{"title":"CSS\uff08\u6587\u5b57\u8272\uff09","text":"CSS\u3067\u30bf\u30a4\u30c8\u30eb\u306e\u6587\u5b57\u8272\u5909\u66f4\u3002"},{"title":"JS\uff08\u6587\u5b57\u5217\uff09","text":"JS\u3067\u30c6\u30ad\u30b9\u30c8\u306e\u6587\u5b57\u5217\u8ffd\u52a0\u300c<span class=\'hello\'></span>\u300d"}],"footer":{"text":"\xa9\ufe0f react-app-started"}}}')}},[[40,1,2]]]);
//# sourceMappingURL=main.790c7bb7.chunk.js.map