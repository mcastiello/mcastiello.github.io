(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[61],{107:function(e,t,a){"use strict";a.r(t);var n=a(22),r=a(23),l=a(17),i=a(148),c=a(1),o=a.n(c),s=a(24),u=a(146),p=a(147),m=a(27);function h(){var e=Object(r.a)(["\n  width: calc(100% - 10px);\n  padding: 5px;\n  background: white;\n  border: solid 2px black;\n  border-radius: 5px;\n  margin-top: 120px;\n  color: black;\n  text-align: center;\n"]);return h=function(){return e},e}var x=[["id",!1,"string","null","Name or ID that will be assigned to the `DIV` element"],["overflow",!1,"Overflow","Overflow.All","Whether HTML children should be seen if they overflow their container"]],b={galaxy:"/static/assets/galaxy.png",ship:"/static/assets/spaceship.png"},d=s.a.div(h()),f=function(){var e=Object(c.useState)(0),t=Object(n.a)(e,2),a=t[0],r=t[1],l=Object(c.useCallback)((function(e){return r(e.width+300)}),[]),s=Object(c.useCallback)((function(e){return(e+1)%a}),[a]),u=Object(c.useReducer)(s,0),p=Object(n.a)(u,2),m=p[0],h=p[1];return o.a.createElement(i.A,{textures:b,onResize:l,onUpdate:h,overflow:i.x.None},o.a.createElement(i.I,{texture:"galaxy"}),o.a.createElement(i.F,{texture:"ship",x:m-150,alignY:.5},o.a.createElement(i.C,null,o.a.createElement(d,null,"Spaceship #1"))))};t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.n,null,"PixiHtmlContainer"),o.a.createElement(m.g,null,"The ",o.a.createElement(p.a,null,"PixiHtmlContainer")," creates a ",o.a.createElement(p.a,null,"DIV")," element that matches in size, position and transform matrix to the parent Pixi element. This allow to have HTML content that hover on a graphic object. It's a simple way to mix different content types if, for example, you want to create a tooltip, a balloon or just have text context rendered in the HTML dom without using WebGL resources."),o.a.createElement(l.b,{style:{height:250}},o.a.createElement(f,null)),o.a.createElement(l.b,null,o.a.createElement(u.a,{src:"/static/examples/PixiHtmlContainerExample.tsx"})),o.a.createElement(m.k,null,"Properties"),o.a.createElement(p.b,{props:x}))}}}]);
//# sourceMappingURL=61.0fbee91b.chunk.js.map