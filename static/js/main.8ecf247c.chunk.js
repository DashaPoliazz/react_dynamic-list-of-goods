(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{10:function(t,n,e){},12:function(t,n,e){"use strict";e.r(n);var o=e(3),c=e.n(o),r=e(5),i=e(1),u=(e(10),e(4)),a=e.n(u),s=e(0),d=function(t){var n=t.goods;return Object(s.jsx)("ul",{children:n.map((function(t){var n=t.id,e=t.color,o=t.name;return Object(s.jsx)("li",{"data-cy":"good",className:a()({red:"red"===e},{green:"green"===e},{blue:"blue"===e}),children:o},n)}))})};function l(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var f=function(){var t=Object(i.useState)([]),n=Object(r.a)(t,2),e=n[0],o=n[1],c=function(){l().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})).then((function(t){return o(t)}))},u=function(){l().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then((function(t){return o(t)}))};return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Dynamic list of Goods"}),Object(s.jsx)("button",{onClick:function(){l().then((function(t){return o(t)}))},type:"button","data-cy":"all-button",children:"Load all goods"}),Object(s.jsx)("button",{onClick:function(){return c()},type:"button","data-cy":"first-five-button",children:"Load 5 first goods"}),Object(s.jsx)("button",{onClick:function(){return u()},type:"button","data-cy":"red-button",children:"Load red goods"}),Object(s.jsx)(d,{goods:e})]})};c.a.render(Object(s.jsx)(f,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.8ecf247c.chunk.js.map