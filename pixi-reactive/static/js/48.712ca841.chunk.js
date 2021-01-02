(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[48],{112:function(e,t,n){"use strict";n.r(t);var a=n(17),r=n(166),l=n(1),c=n.n(l),u=n(18),i=n(165),s=n(167),o=n(164),m=n(27),f=[["color",!1,"number","0xffffff","Color used to fill the outline"],["alpha",!1,"number","1","Opacity of the outline"],["width",!1,"number","1","Width of the line"],["alignment",!1,"number","0","Alignment of the line around the border of the shape (0 means external to the shape while 1 is internal)"],["cap",!1,"LineCap","LineCap.Butt","Line cap style"],["join",!1,"LineJoin","LineJoin.Miter","Shape to be used at the corners of the line path"],["miterLimit",!1,"number","10","Limit of the miter shape"],["native",!1,"boolean","false","If true the lines will be draw using LINES instead of TRIANGLE_STRIP"]],h=function(){return c.a.createElement(r.L,null,c.a.createElement(r.N,null,c.a.createElement(r.hb,{x:100,y:95,radius:80},c.a.createElement(r.C,{color:16776960,alpha:.75,width:10,alignment:.5,cap:r.A.Round}))))};t.default=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.n,null,"LineStyle"),c.a.createElement(m.g,null,"The style used to define the outline of the shape. It accepts a ",c.a.createElement(s.a,{page:u.a.ShapeTexture})," to use it as line filler."),c.a.createElement(a.b,{style:{height:200}},c.a.createElement(h,null)),c.a.createElement(a.b,null,c.a.createElement(i.a,{src:"./static/examples/LineStyleExample.tsx"})),c.a.createElement(m.k,null,"Properties"),c.a.createElement(o.b,{props:f}))}},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(20),r=n(22),l=n.n(r),c=n(28),u=n(23),i=n(17),s=n(1),o=n.n(s),m=n(24),f=n(18),h=n(27);function p(){var e=Object(u.a)(["\n  background: rgba(100, 100, 100, 0.5);\n  padding: 0 5px;\n  border-radius: 2px;\n"]);return p=function(){return e},e}var E,d=m.a.code(p()),b=function(){var e=Object(c.a)(l.a.mark((function e(){var t,n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E){e.next=15;break}return e.next=3,Object(f.d)(f.a.Types);case 3:t=e.sent,n=new Map,a=0;case 6:if(!(a<t.length)){e.next=14;break}return e.next=9,Object(f.c)(t[a]);case 9:r=e.sent,n.set(t[a],"#".concat(r));case 11:a++,e.next=6;break;case 14:E=n;case 15:return e.abrupt("return",E);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.b=function(e){var t=e.props,n=void 0===t?[]:t,r=Object(s.useState)(),l=Object(a.a)(r,2),c=l[0],u=l[1];return Object(s.useEffect)((function(){b().then(u)}),[]),o.a.createElement(i.b,null,o.a.createElement(h.m,null,o.a.createElement(h.l,null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Required"),o.a.createElement("th",null,"Type"),o.a.createElement("th",null,"Default"),o.a.createElement("th",null,"Description"))),o.a.createElement("tbody",null,n.map((function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",null,e[0]),o.a.createElement("td",null,e[1]?o.a.createElement(i.d,{f7:"checkmark_alt",size:14}):null),o.a.createElement("td",null,o.a.createElement("code",null,c&&c.has(e[2])?o.a.createElement(h.h,{text:e[2],href:c.get(e[2]),external:!0}):e[2])),o.a.createElement("td",null,o.a.createElement("code",null,e[3])),o.a.createElement("td",null,e[4].split(/`/).map((function(e,t){return t%2===0?o.a.createElement("span",{key:t},e):o.a.createElement(d,{key:t},e)}))))}))))))}},167:function(e,t,n){"use strict";var a=n(20),r=n(1),l=n.n(r),c=n(18),u=n(27);t.a=function(e){var t=e.page,n=e.className,i=Object(r.useState)(),s=Object(a.a)(i,2),o=s[0],m=s[1];return Object(r.useEffect)((function(){Object(c.c)(t).then((function(e){return m("#".concat(e))}))}),[t]),l.a.createElement(u.d,{className:n,href:o,key:t,text:t,external:!0})}}}]);
//# sourceMappingURL=48.712ca841.chunk.js.map