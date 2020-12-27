(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[42],{120:function(e,t,n){"use strict";n.r(t);var a=n(22),c=n(23),l=n(17),r=n(148),i=n(1),s=n.n(i),o=n(24),u=n(18),p=n(146),d=n(150),m=n(147),h=n(27);function f(){var e=Object(c.a)(["\n  color: white;\n  padding: 0 5px;\n"]);return f=function(){return e},e}var b=[["speed",!0,"number","1","Current speed of the animation"],["increase",!0,"function","() => void","Double the current speed"],["decrease",!0,"function","() => void","Halve the current speed"],["play",!0,"function","() => void","Reset the current speed to 1"],["pause",!0,"function","() => void","Set the current speed to 0"],["setSpeed",!0,"function","(speed: number) => void","Set the speed to a specific value"]],E={galaxy:"/static/assets/galaxy.png",ship:"/static/assets/spaceship.png"},x=Object(o.a)(l.e)(f()),v=function(){var e=Object(i.useContext)(r.P),t=e.play,n=e.pause,c=e.increase,l=e.decrease,o=e.speed,u=Object(i.useState)(!0),p=Object(a.a)(u,2),d=p[0],m=p[1],h=Object(i.useCallback)((function(){d?(n(),m(!1)):(t(),m(!0))}),[d,t,n]);return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{style:{textAlign:"center"}},s.a.createElement("span",{style:{float:"left"}},"Speed: ",o),s.a.createElement(x,{iconOnly:!0,iconF7:"backward_fill",onClick:l}),s.a.createElement(x,{iconOnly:!0,iconF7:"playpause_fill",onClick:h}),s.a.createElement(x,{iconOnly:!0,iconF7:"forward_fill",onClick:c})))},y=function(){var e=Object(i.useContext)(r.M).width,t=Object(i.useContext)(r.b).elapsed,n=Object(i.useCallback)((function(t,n){return(t+n)%(e+300)}),[e]),c=Object(i.useReducer)(n,0),l=Object(a.a)(c,2),o=l[0],u=l[1];return Object(i.useEffect)((function(){var e=Math.round(t/(1e3/60)*10)/10;u(e)}),[t]),s.a.createElement(r.F,{texture:"ship",x:o-150,alignY:.5})},g=function(){return s.a.createElement(r.A,{textures:E},s.a.createElement(r.I,{texture:"galaxy"}),s.a.createElement(y,null),s.a.createElement(v,null))};t.default=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(h.n,null,"SpeedContext"),s.a.createElement(h.g,null,"This context provides the instruments to alter the speed of the canvas rendering. This is achieved by changing the"," ",s.a.createElement(m.a,null,"elapsed")," property from the ",s.a.createElement(d.a,{page:u.b.AnimationContext}),". This means that it will only affect those animations based on this parameter. Components like ",s.a.createElement(d.a,{page:u.b.PixiAnimatedSprite})," are already based on this, so they will be automatically affected.",s.a.createElement("br",null),"This is mostly useful during debug, because it allows you to slow down animations and check every frame, or to accelerate the execution to skip sequence of animations we're not interested in.",s.a.createElement("br",null),"In the following example we'll refactor the ",s.a.createElement(m.a,null,"Ship")," animation to use the ",s.a.createElement(m.a,null,"elapsed")," ","property, so that we can handle its speed using the context functions. Click the buttons below the canvas to see what happens."),s.a.createElement(l.b,{style:{height:300}},s.a.createElement(g,null)),s.a.createElement(l.b,null,s.a.createElement(p.a,{src:"/static/examples/SpeedContextExample.tsx"})),s.a.createElement(h.k,null,"Properties"),s.a.createElement(m.b,{props:b}))}},150:function(e,t,n){"use strict";var a=n(22),c=n(1),l=n.n(c),r=n(18),i=n(27);t.a=function(e){var t=e.page,n=e.className,s=Object(c.useContext)(r.a).dispatch,o=Object(c.useState)(),u=Object(a.a)(o,2),p=u[0],d=u[1];return Object(c.useEffect)((function(){Object(r.d)(t).then((function(e){return d("#".concat(e))}))}),[t]),l.a.createElement(i.d,{className:n,href:p,key:t,text:t,onClick:function(){return s(t)}})}}}]);
//# sourceMappingURL=42.d1217ffc.chunk.js.map