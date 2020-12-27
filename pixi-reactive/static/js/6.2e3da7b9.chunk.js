(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[6],{128:function(e,t,n){"use strict";n.r(t);var a=n(17),l=n(1),r=n.n(l),c=n(18),u=n(146),s=n(150),i=n(147),o=n(27);t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.n,null,"TextureContext"),r.a.createElement(o.g,null,"The ",r.a.createElement(i.a,null,"TextureContext")," is mostly for internal use; when a list of sources is passed to the"," ",r.a.createElement(s.a,{page:c.b.PixiCanvas})," ",r.a.createElement(i.a,null,"textures")," property, those are downloaded by the"," ",r.a.createElement(i.a,null,"PIXI.Loader")," and the resulting textures are stored in this context. In this way, all the sprite components can easily access them using their names.",r.a.createElement("br",null),"The texture list can include any type of image files, but it also supports ",r.a.createElement(i.a,null,"JSON")," files created using"," ",r.a.createElement(o.h,{href:"https://www.codeandweb.com/texturepacker",text:"TexturePacker",external:!0,target:"_blank"}),". When you load a packed texture, the exploded textures will be associated with the names they have inside the ",r.a.createElement(i.a,null,"JSON")," file (minus the extensions). The name used in the list will be associated with an array of texture names that can be used to load the frames as a ",r.a.createElement(s.a,{page:c.b.PixiAnimatedSprite}),".",r.a.createElement("br",null),"It sounds a bit farfetched, but the following example should clarify it:"),r.a.createElement(a.b,null,"Assuming this is the content of the ",r.a.createElement(i.a,null,"JSON")," file",r.a.createElement(u.a,{src:"./static/assets/colors.json"}),"And this is the file list you are going to pass to the loader",r.a.createElement(u.a,{src:"./static/assets/imports.json"}),"The resulting ",r.a.createElement(i.a,null,"TextureContext")," will be the following",r.a.createElement(u.a,null,"{\n  galaxy: PIXI.Texture,\n  ship: PIXI.Texture,\n  blue: PIXI.Texture,\n  green: PIXI.Texture,\n  red: PIXI.Texture,\n  colors: ['blue', 'green', 'red'],\n}")))}},146:function(e,t,n){"use strict";var a=n(22),l=n(1),r=n.n(l),c=n(225),u=n(156),s=n(223);c.a.registerLanguage("tsx",u.a);t.a=function(e){var t=e.src,n=e.children,u=void 0===n?"":n,i=Object(l.useState)(u),o=Object(a.a)(i,2),m=o[0],h=o[1];return Object(l.useEffect)((function(){t&&fetch(t).then((function(e){return e.text()})).then((function(e){return h(e)}))}),[t]),Object(l.useEffect)((function(){u&&h(u)}),[u]),r.a.createElement(c.a,{style:s.a,language:"tsx",showLineNumbers:!0},m)}},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(22),l=n(23),r=n(17),c=n(1),u=n.n(c),s=n(24),i=n(18),o=n(27);function m(){var e=Object(l.a)(["\n  background: rgba(100, 100, 100, 0.5);\n  padding: 0 5px;\n  border-radius: 2px;\n"]);return m=function(){return e},e}var h=s.a.code(m());t.b=function(e){var t=e.props,n=void 0===t?[]:t,l=Object(c.useContext)(i.a).dispatch,s=Object(c.useState)([]),m=Object(a.a)(s,2),d=m[0],f=m[1];return Object(c.useEffect)((function(){Object(i.e)(i.b.Types).then(f)}),[]),u.a.createElement(r.b,null,u.a.createElement(o.m,null,u.a.createElement(o.l,null,u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Name"),u.a.createElement("th",null,"Required"),u.a.createElement("th",null,"Type"),u.a.createElement("th",null,"Default"),u.a.createElement("th",null,"Description"))),u.a.createElement("tbody",null,n.map((function(e,t){return u.a.createElement("tr",{key:t},u.a.createElement("td",null,e[0]),u.a.createElement("td",null,e[1]?u.a.createElement(r.d,{f7:"checkmark_alt",size:14}):null),u.a.createElement("td",null,u.a.createElement("code",null,d.includes(e[2])?u.a.createElement(o.h,{text:e[2],onClick:function(){return l(e[2])}}):e[2])),u.a.createElement("td",null,u.a.createElement("code",null,e[3])),u.a.createElement("td",null,e[4].split(/`/).map((function(e,t){return t%2===0?u.a.createElement("span",{key:t},e):u.a.createElement(h,{key:t},e)}))))}))))))}},150:function(e,t,n){"use strict";var a=n(22),l=n(1),r=n.n(l),c=n(18),u=n(27);t.a=function(e){var t=e.page,n=e.className,s=Object(l.useContext)(c.a).dispatch,i=Object(l.useState)(),o=Object(a.a)(i,2),m=o[0],h=o[1];return Object(l.useEffect)((function(){Object(c.d)(t).then((function(e){return h("#".concat(e))}))}),[t]),r.a.createElement(u.d,{className:n,href:m,key:t,text:t,onClick:function(){return s(t)}})}}}]);
//# sourceMappingURL=6.2e3da7b9.chunk.js.map