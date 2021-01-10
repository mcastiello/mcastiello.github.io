(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[56],{156:function(e,t,n){"use strict";n.r(t);var s=n(16),c=n(18),r=(n(1),n(19)),a=n(181),i=n(186),u=n(180),j=n(28);t.default=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(j.n,{children:"TextureContext"}),Object(s.jsxs)(j.g,{children:["The ",Object(s.jsx)(u.a,{children:"TextureContext"})," is mostly for internal use; when a list of sources is passed to the"," ",Object(s.jsx)(i.a,{page:r.a.PixiCanvas})," ",Object(s.jsx)(u.a,{children:"textures"})," property, those are downloaded by the"," ",Object(s.jsx)(u.a,{children:"PIXI.Loader"})," and the resulting textures are stored in this context. In this way, all the sprite components can easily access them using their names.",Object(s.jsx)("br",{}),"The texture list can include any type of image files, but it also supports ",Object(s.jsx)(u.a,{children:"JSON"})," files created using"," ",Object(s.jsx)(j.h,{href:"https://www.codeandweb.com/texturepacker",text:"TexturePacker",external:!0,target:"_blank"}),". When you load a packed texture, the exploded textures will be associated with the names they have inside the ",Object(s.jsx)(u.a,{children:"JSON"})," file (minus the extensions). The name used in the list will be associated with an array of texture names that can be used to load the frames as a ",Object(s.jsx)(i.a,{page:r.a.PixiAnimatedSprite}),".",Object(s.jsx)("br",{}),"It sounds a bit farfetched, but the following example should clarify it:"]}),Object(s.jsxs)(c.b,{children:["Assuming this is the content of the ",Object(s.jsx)(u.a,{children:"JSON"})," file",Object(s.jsx)(a.a,{src:"./static/assets/colors.json"}),"And this is the file list you are going to pass to the loader",Object(s.jsx)(a.a,{src:"./static/assets/imports.json"}),"The resulting ",Object(s.jsx)(u.a,{children:"TextureContext"})," will be the following",Object(s.jsx)(a.a,{children:"{\n  textures: {\n    galaxy: PIXI.Texture,\n    ship: PIXI.Texture,\n    blue: PIXI.Texture,\n    green: PIXI.Texture,\n    red: PIXI.Texture,\n    colors: ['blue', 'green', 'red']\n  }\n  resources: {\n    galaxy: PIXI.LoaderResource,\n    ship: PIXI.LoaderResource,\n    colors: PIXI.LoaderResource\n  }\n}"})]})]})}},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var s=n(16),c=n(21),r=n(23),a=n.n(r),i=n(29),u=n(24),j=n(18),o=n(1),h=n(25),l=n(19),d=n(28);function x(){var e=Object(u.a)(["\n  background: rgba(100, 100, 100, 0.5);\n  padding: 0 5px;\n  border-radius: 2px;\n"]);return x=function(){return e},e}var b,O=h.a.code(x()),f=function(){var e=Object(i.a)(a.a.mark((function e(){var t,n,s,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b){e.next=15;break}return e.next=3,Object(l.d)(l.a.Types);case 3:t=e.sent,n=new Map,s=0;case 6:if(!(s<t.length)){e.next=14;break}return e.next=9,Object(l.c)(t[s]);case 9:c=e.sent,n.set(t[s],"#".concat(c));case 11:s++,e.next=6;break;case 14:b=n;case 15:return e.abrupt("return",b);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.b=function(e){var t=e.props,n=void 0===t?[]:t,r=Object(o.useState)(),a=Object(c.a)(r,2),i=a[0],u=a[1];return Object(o.useEffect)((function(){f().then(u)}),[]),Object(s.jsx)(j.b,{children:Object(s.jsx)(d.m,{children:Object(s.jsxs)(d.l,{children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Name"}),Object(s.jsx)("th",{children:"Required"}),Object(s.jsx)("th",{children:"Type"}),Object(s.jsx)("th",{children:"Default"}),Object(s.jsx)("th",{children:"Description"})]})}),Object(s.jsx)("tbody",{children:n.map((function(e,t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e[0]}),Object(s.jsx)("td",{children:e[1]?Object(s.jsx)(j.d,{f7:"checkmark_alt",size:14}):null}),Object(s.jsx)("td",{children:Object(s.jsx)("code",{children:i&&i.has(e[2])?Object(s.jsx)(d.h,{text:e[2],href:i.get(e[2]),external:!0}):e[2]})}),Object(s.jsx)("td",{children:Object(s.jsx)("code",{children:e[3]})}),Object(s.jsx)("td",{children:(n=e[4],n.split(/`/).map((function(e,t){return t%2===0?Object(s.jsx)("span",{children:e},t):Object(s.jsx)(O,{children:e},t)})))})]},t);var n}))})]})})})}},181:function(e,t,n){"use strict";var s=n(16),c=n(21),r=n(1),a=n(262),i=n(183),u=n(261);a.a.registerLanguage("tsx",i.a);t.a=function(e){var t=e.src,n=e.children,i=void 0===n?"":n,j=Object(r.useState)(i),o=Object(c.a)(j,2),h=o[0],l=o[1];return Object(r.useEffect)((function(){t&&fetch(t).then((function(e){return e.text()})).then((function(e){return l(e)}))}),[t]),Object(r.useEffect)((function(){i&&l(i)}),[i]),Object(s.jsx)(a.a,{style:u.a,language:"tsx",showLineNumbers:!0,children:h})}},186:function(e,t,n){"use strict";var s=n(16),c=n(21),r=n(1),a=n(19),i=n(28);t.a=function(e){var t=e.page,n=e.className,u=Object(r.useState)(),j=Object(c.a)(u,2),o=j[0],h=j[1];return Object(r.useEffect)((function(){Object(a.c)(t).then((function(e){return h("#".concat(e))}))}),[t]),Object(s.jsx)(i.d,{className:n,href:o,text:t,external:!0},t)}}}]);
//# sourceMappingURL=56.6c6079c6.chunk.js.map