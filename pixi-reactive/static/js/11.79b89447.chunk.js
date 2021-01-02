(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[11],{146:function(e,t,a){"use strict";a.r(t);var n=a(17),r=a(1),l=a.n(r),c=a(18),u=a(165),s=a(167),i=a(164),o=a(27);t.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.n,null,"TextureContext"),l.a.createElement(o.g,null,"The ",l.a.createElement(i.a,null,"TextureContext")," is mostly for internal use; when a list of sources is passed to the"," ",l.a.createElement(s.a,{page:c.a.PixiCanvas})," ",l.a.createElement(i.a,null,"textures")," property, those are downloaded by the"," ",l.a.createElement(i.a,null,"PIXI.Loader")," and the resulting textures are stored in this context. In this way, all the sprite components can easily access them using their names.",l.a.createElement("br",null),"The texture list can include any type of image files, but it also supports ",l.a.createElement(i.a,null,"JSON")," files created using"," ",l.a.createElement(o.h,{href:"https://www.codeandweb.com/texturepacker",text:"TexturePacker",external:!0,target:"_blank"}),". When you load a packed texture, the exploded textures will be associated with the names they have inside the ",l.a.createElement(i.a,null,"JSON")," file (minus the extensions). The name used in the list will be associated with an array of texture names that can be used to load the frames as a ",l.a.createElement(s.a,{page:c.a.PixiAnimatedSprite}),".",l.a.createElement("br",null),"It sounds a bit farfetched, but the following example should clarify it:"),l.a.createElement(n.b,null,"Assuming this is the content of the ",l.a.createElement(i.a,null,"JSON")," file",l.a.createElement(u.a,{src:"./static/assets/colors.json"}),"And this is the file list you are going to pass to the loader",l.a.createElement(u.a,{src:"./static/assets/imports.json"}),"The resulting ",l.a.createElement(i.a,null,"TextureContext")," will be the following",l.a.createElement(u.a,null,"{\n  galaxy: PIXI.Texture,\n  ship: PIXI.Texture,\n  blue: PIXI.Texture,\n  green: PIXI.Texture,\n  red: PIXI.Texture,\n  colors: ['blue', 'green', 'red'],\n}")))}},164:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(20),r=a(22),l=a.n(r),c=a(28),u=a(23),s=a(17),i=a(1),o=a.n(i),m=a(24),h=a(18),f=a(27);function d(){var e=Object(u.a)(["\n  background: rgba(100, 100, 100, 0.5);\n  padding: 0 5px;\n  border-radius: 2px;\n"]);return d=function(){return e},e}var E,p=m.a.code(d()),x=function(){var e=Object(c.a)(l.a.mark((function e(){var t,a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E){e.next=15;break}return e.next=3,Object(h.d)(h.a.Types);case 3:t=e.sent,a=new Map,n=0;case 6:if(!(n<t.length)){e.next=14;break}return e.next=9,Object(h.c)(t[n]);case 9:r=e.sent,a.set(t[n],"#".concat(r));case 11:n++,e.next=6;break;case 14:E=a;case 15:return e.abrupt("return",E);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.b=function(e){var t=e.props,a=void 0===t?[]:t,r=Object(i.useState)(),l=Object(n.a)(r,2),c=l[0],u=l[1];return Object(i.useEffect)((function(){x().then(u)}),[]),o.a.createElement(s.b,null,o.a.createElement(f.m,null,o.a.createElement(f.l,null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Required"),o.a.createElement("th",null,"Type"),o.a.createElement("th",null,"Default"),o.a.createElement("th",null,"Description"))),o.a.createElement("tbody",null,a.map((function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",null,e[0]),o.a.createElement("td",null,e[1]?o.a.createElement(s.d,{f7:"checkmark_alt",size:14}):null),o.a.createElement("td",null,o.a.createElement("code",null,c&&c.has(e[2])?o.a.createElement(f.h,{text:e[2],href:c.get(e[2]),external:!0}):e[2])),o.a.createElement("td",null,o.a.createElement("code",null,e[3])),o.a.createElement("td",null,e[4].split(/`/).map((function(e,t){return t%2===0?o.a.createElement("span",{key:t},e):o.a.createElement(p,{key:t},e)}))))}))))))}},165:function(e,t,a){"use strict";var n=a(20),r=a(1),l=a.n(r),c=a(243),u=a(174),s=a(241);c.a.registerLanguage("tsx",u.a);t.a=function(e){var t=e.src,a=e.children,u=void 0===a?"":a,i=Object(r.useState)(u),o=Object(n.a)(i,2),m=o[0],h=o[1];return Object(r.useEffect)((function(){t&&fetch(t).then((function(e){return e.text()})).then((function(e){return h(e)}))}),[t]),Object(r.useEffect)((function(){u&&h(u)}),[u]),l.a.createElement(c.a,{style:s.a,language:"tsx",showLineNumbers:!0},m)}},167:function(e,t,a){"use strict";var n=a(20),r=a(1),l=a.n(r),c=a(18),u=a(27);t.a=function(e){var t=e.page,a=e.className,s=Object(r.useState)(),i=Object(n.a)(s,2),o=i[0],m=i[1];return Object(r.useEffect)((function(){Object(c.c)(t).then((function(e){return m("#".concat(e))}))}),[t]),l.a.createElement(u.d,{className:a,href:o,key:t,text:t,external:!0})}}}]);
//# sourceMappingURL=11.79b89447.chunk.js.map