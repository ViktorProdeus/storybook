(this["webpackJsonpreact-kbazda-kak-prosto"]=this["webpackJsonpreact-kbazda-kak-prosto"]||[]).push([[0],{10:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var c=t(1),l=t.n(c),o=t(4),r=t.n(o),i=(t(9),t(2)),s=(t(10),t(0));function j(e){return console.log("AccordionTitle rendering"),Object(s.jsx)("h3",{onClick:function(){return e.onclick(e.collapsed)},children:e.title})}function u(){return console.log("AccordionBody rendering"),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:"1"}),Object(s.jsx)("li",{children:"2"}),Object(s.jsx)("li",{children:"3"})]})}var a=function(e){return console.log("Accordion rendering"),Object(s.jsxs)("div",{children:[Object(s.jsx)(j,{title:e.titleValue,onclick:e.onClick,collapsed:!e.collapsed}),!e.collapsed&&Object(s.jsx)(u,{})]})},d=function(e){console.log("OnOff rendering");var n=e.toggle?"toggle on":"toggle",t=e.toggle?"toggle":"toggle off";return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("p",{children:"TOGGLE --- Controlled"}),Object(s.jsxs)("div",{className:"OnOff",children:[Object(s.jsx)("button",{onClick:function(){return e.onClick(true)},className:n,children:"On"}),Object(s.jsx)("button",{onClick:function(){return e.onClick(false)},className:t,children:"Off"})]})]})};function O(e){return console.log("AccordionTitle rendering"),Object(s.jsx)("h3",{onClick:e.onClick,children:"-- UnControlledMenu --"})}function b(){return console.log("AccordionBody rendering"),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:"1"}),Object(s.jsx)("li",{children:"2"}),Object(s.jsx)("li",{children:"3"})]})}var g=function(){console.log("Accordion rendering");var e=Object(c.useState)(!0),n=Object(i.a)(e,2),t=n[0],l=n[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)(O,{onClick:function(){return l(!t)}}),!t&&Object(s.jsx)(b,{})]})};function x(e){console.log("Ratting rendering");var n=Object(c.useState)(2),t=Object(i.a)(n,2),l=t[0],o=t[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)(f,{selected:l>0,setValue:function(){return o(1)}}),Object(s.jsx)(f,{selected:l>1,setValue:function(){return o(2)}}),Object(s.jsx)(f,{selected:l>2,setValue:function(){return o(3)}}),Object(s.jsx)(f,{selected:l>3,setValue:function(){return o(4)}}),Object(s.jsx)(f,{selected:l>4,setValue:function(){return o(5)}})]})}function f(e){return console.log("Star rendering"),Object(s.jsx)("span",{onClick:function(n){return e.setValue()},children:e.selected?Object(s.jsx)("b",{children:"Star"}):"Star"})}function h(e){return console.log("Ratting rendering"),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(k,{selected:e.value>0,onClick:e.onClick,value:1}),Object(s.jsx)(k,{selected:e.value>1,onClick:e.onClick,value:2}),Object(s.jsx)(k,{selected:e.value>2,onClick:e.onClick,value:3}),Object(s.jsx)(k,{selected:e.value>3,onClick:e.onClick,value:4}),Object(s.jsx)(k,{selected:e.value>4,onClick:e.onClick,value:5})]})}function k(e){return console.log("Star rendering"),Object(s.jsx)("span",{onClick:function(){return e.onClick(e.value)},children:e.selected?Object(s.jsx)("b",{children:"Star"}):"Star"})}var C=function(){console.log("OnOff rendering");var e=Object(c.useState)(!1),n=Object(i.a)(e,2),t=n[0],l=n[1],o=t?"toggle on":"toggle",r=t?"toggle":"toggle off";return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("p",{children:"TOGGLE --- UnControlled"}),Object(s.jsxs)("div",{className:"OnOff",children:[Object(s.jsx)("button",{onClick:function(){return l(true)},className:o,children:"On"}),Object(s.jsx)("button",{onClick:function(){return l(false)},className:r,children:"Off"})]})]})};var v=function(){console.log("App rendering");var e=Object(c.useState)(3),n=Object(i.a)(e,2),t=n[0],l=n[1],o=Object(c.useState)(!1),r=Object(i.a)(o,2),j=r[0],u=r[1],O=Object(c.useState)(!0),b=Object(i.a)(O,2),f=b[0],k=b[1];return Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)(a,{titleValue:"-- Menu --",collapsed:j,onClick:u}),Object(s.jsx)(h,{value:t,onClick:l}),Object(s.jsx)(d,{toggle:f,onClick:k}),Object(s.jsx)(C,{}),Object(s.jsx)(g,{}),Object(s.jsx)(x,{})]})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(n){var t=n.getCLS,c=n.getFID,l=n.getFCP,o=n.getLCP,r=n.getTTFB;t(e),c(e),l(e),o(e),r(e)}))};r.a.render(Object(s.jsx)(l.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root")),p()},9:function(e,n,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.eeb75448.chunk.js.map