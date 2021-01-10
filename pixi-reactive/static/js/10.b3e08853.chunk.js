(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[10,75,79],{180:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var i=n(16),r=n(21),a=n(23),c=n.n(a),o=n(29),s=n(24),l=n(18),u=n(1),h=n(25),d=n(19),b=n(28);function x(){var e=Object(s.a)(["\n  background: rgba(100, 100, 100, 0.5);\n  padding: 0 5px;\n  border-radius: 2px;\n"]);return x=function(){return e},e}var j,p=h.a.code(x()),g=function(){var e=Object(o.a)(c.a.mark((function e(){var t,n,i,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=15;break}return e.next=3,Object(d.d)(d.a.Types);case 3:t=e.sent,n=new Map,i=0;case 6:if(!(i<t.length)){e.next=14;break}return e.next=9,Object(d.c)(t[i]);case 9:r=e.sent,n.set(t[i],"#".concat(r));case 11:i++,e.next=6;break;case 14:j=n;case 15:return e.abrupt("return",j);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.b=function(e){var t=e.props,n=void 0===t?[]:t,a=Object(u.useState)(),c=Object(r.a)(a,2),o=c[0],s=c[1];return Object(u.useEffect)((function(){g().then(s)}),[]),Object(i.jsx)(l.b,{children:Object(i.jsx)(b.m,{children:Object(i.jsxs)(b.l,{children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Required"}),Object(i.jsx)("th",{children:"Type"}),Object(i.jsx)("th",{children:"Default"}),Object(i.jsx)("th",{children:"Description"})]})}),Object(i.jsx)("tbody",{children:n.map((function(e,t){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:e[0]}),Object(i.jsx)("td",{children:e[1]?Object(i.jsx)(l.d,{f7:"checkmark_alt",size:14}):null}),Object(i.jsx)("td",{children:Object(i.jsx)("code",{children:o&&o.has(e[2])?Object(i.jsx)(b.h,{text:e[2],href:o.get(e[2]),external:!0}):e[2]})}),Object(i.jsx)("td",{children:Object(i.jsx)("code",{children:e[3]})}),Object(i.jsx)("td",{children:(n=e[4],n.split(/`/).map((function(e,t){return t%2===0?Object(i.jsx)("span",{children:e},t):Object(i.jsx)(p,{children:e},t)})))})]},t);var n}))})]})})})}},181:function(e,t,n){"use strict";var i=n(16),r=n(21),a=n(1),c=n(262),o=n(183),s=n(261);c.a.registerLanguage("tsx",o.a);t.a=function(e){var t=e.src,n=e.children,o=void 0===n?"":n,l=Object(a.useState)(o),u=Object(r.a)(l,2),h=u[0],d=u[1];return Object(a.useEffect)((function(){t&&fetch(t).then((function(e){return e.text()})).then((function(e){return d(e)}))}),[t]),Object(a.useEffect)((function(){o&&d(o)}),[o]),Object(i.jsx)(c.a,{style:s.a,language:"tsx",showLineNumbers:!0,children:h})}},186:function(e,t,n){"use strict";var i=n(16),r=n(21),a=n(1),c=n(19),o=n(28);t.a=function(e){var t=e.page,n=e.className,s=Object(a.useState)(),l=Object(r.a)(s,2),u=l[0],h=l[1];return Object(a.useEffect)((function(){Object(c.c)(t).then((function(e){return h("#".concat(e))}))}),[t]),Object(i.jsx)(o.d,{className:n,href:u,text:t,external:!0},t)}},74:function(e,t,n){"use strict";n.r(t),n.d(t,"renderEvents",(function(){return d})),n.d(t,"PixiCanvasExample",(function(){return p}));var i=n(16),r=n(21),a=n(18),c=n(1),o=n(182),s=n(181),l=n(180),u=n(28),h=[["id",!1,"string","null","Canvas identifier"],["overflow",!1,"Overflow","Overflow.All","Whether HTML elements hovering the canvas should be seen if they overflow their container"],["className",!1,"string","null","CSS class name applied to the canvas element"],["width",!1,"number","null","Width of the canvas"],["height",!1,"number","null","Height of the canvas"],["retina",!1,"boolean","false","Whether to use a @2x canvas"],["speed",!1,"number","1","Speed at which the rendered animations will run"],["background",!1,"number","null","Set the background color of the canvas, if empty the canvas will be transparent"],["textures",!1,"LoadResourceType","[]","List of textures that will be loaded by the Pixi Loader"]],d=[["onResize",!1,"function","null","Callback executed when the canvas is resized"],["onUpdate",!1,"function","null","Callback executed at every animation frame"],["onAfterRender",!1,"function","null","Callback executed after a frame has been rendered on the canvas"]],b=[].concat(d,[["onClick",!1,"function","null","Callback executed when the `click` event is triggered"],["onMouseDown",!1,"function","null","Callback executed when the `mousedown` event is triggered"],["onMouseMove",!1,"function","null","Callback executed when the `mousemove` event is triggered"],["onMouseOut",!1,"function","null","Callback executed when the `mouseout` event is triggered"],["onMouseOver",!1,"function","null","Callback executed when the `mouseover` event is triggered"],["onMouseUp",!1,"function","null","Callback executed when the `mouseup` event is triggered"],["onPointerCancel",!1,"function","null","Callback executed when the `pointercancel` event is triggered"],["onPointerDown",!1,"function","null","Callback executed when the `pointerdown` event is triggered"],["onPointerMove",!1,"function","null","Callback executed when the `pointermove` event is triggered"],["onPointerOut",!1,"function","null","Callback executed when the `pointerout` event is triggered"],["onPointerOver",!1,"function","null","Callback executed when the `pointerover` event is triggered"],["onPointerUp",!1,"function","null","Callback executed when the `pointerup` event is triggered"],["onTouchCancel",!1,"function","null","Callback executed when the `touchcancel` event is triggered"],["onTouchEnd",!1,"function","null","Callback executed when the `touchend` event is triggered"],["onTouchMove",!1,"function","null","Callback executed when the `touchmove` event is triggered"],["onTouchStart",!1,"function","null","Callback executed when the `touchstart` event is triggered"],["onInteractionUpdate",!1,"function","null","Callback executed when `Pointer Context` is updated"],["onLoadProgress",!1,"function","null","Callback executed when the Texture Loader progress in the download process"],["onAllTexturesLoaded",!1,"function","null","Callback executed when all the textures are loaded"]]),x={galaxy:"./static/assets/galaxy.png",stars:"./static/assets/slow-stars.png",ship:"./static/assets/spaceship.png"},j=function(e){var t=e.direction;return(e.direction&&e.shipY<=60||!e.direction&&e.shipY>=240)&&(t=!e.direction),{galaxyTileX:e.galaxyTileX-.1,starsTileX:e.starsTileX-.5,direction:t,shipY:t?e.shipY-.5:e.shipY+.5}},p=function(){var e=Object(c.useReducer)(j,{galaxyTileX:0,starsTileX:0,direction:!1,shipY:150}),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(i.jsxs)(o.L,{height:300,textures:x,onUpdate:a,children:[Object(i.jsx)(o.V,{texture:"galaxy",tileX:n.galaxyTileX}),Object(i.jsx)(o.V,{texture:"stars",tileX:n.starsTileX}),Object(i.jsx)(o.S,{texture:"ship",x:30,y:n.shipY,anchorY:.5})]})};t.default=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u.n,{children:"PixiCanvas"}),Object(i.jsx)(u.g,{children:"The PixiCanvas is the base component that generates the canvas element, initialise the PIXI Renderer, load the textures and creates all the React contexts. It is also responsible of starting the animation loop and render all the elements onto the stage."}),Object(i.jsx)(a.b,{children:Object(i.jsx)(p,{})}),Object(i.jsx)(a.b,{children:Object(i.jsx)(s.a,{src:"./static/examples/PixiCanvasExample.tsx"})}),Object(i.jsx)(u.k,{children:"Properties"}),Object(i.jsx)(l.b,{props:h}),Object(i.jsx)(u.k,{children:"Event Callbacks"}),Object(i.jsx)(l.b,{props:b})]})}},75:function(e,t,n){"use strict";n.r(t),n.d(t,"transformProps",(function(){return h})),n.d(t,"genericProps",(function(){return d})),n.d(t,"genericEvents",(function(){return b}));var i=n(16),r=n(12),a=n(18),c=(n(1),n(182)),o=n(181),s=n(180),l=n(28),u=n(74),h=[["x",!1,"number","0","X coordinate of the object relative to the parent"],["y",!1,"number","0","X coordinate of the object relative to the parent"],["pivotX",!1,"number","0","Relative coordinate on the X axis of the point around which the object rotate"],["pivotY",!1,"number","0","Relative coordinate on the Y axis of the point around which the object rotate"],["rotation",!1,"number","0","Rotation of the object in radians"],["scaleX",!1,"number","1","Scale of the object on the X axis"],["scaleY",!1,"number","1","Scale of the object on the Y axis"],["skewX",!1,"number","0","Skew transform value on the X axis"],["skewY",!1,"number","0","Skew transform value on the Y axis"]],d=[].concat(h,[["alpha",!1,"number","1","Value between 0 and 1 that defines the object opacity"],["angle",!1,"number","0","Rotation of the object in degrees"],["buttonMode",!1,"boolean","false","When set to true it makes the element clickable and set the cursor as pointer"],["cursor",!1,"CursorType","CursorType.None","Cursor used while hovering on the object"],["interactive",!1,"boolean","false","Whether the object is interactive (react to pointer events)"],["name",!1,"string","null","Name of the object"],["visible",!1,"boolean","true","Whether the object is visible or not"],["zIndex",!1,"number","0","Order in which the object is rendered (only works if the parent `sortableChildren` is set to `true`)"],["width",!1,"number","null","Width of the object"],["height",!1,"number","null","Height of the object"],["sortableChildren",!1,"boolean","false","Whether the children of the element can be sorted through the `zIndex`"],["filterArea",!1,"Area","null","Area over which the filters will be applied"],["hitArea",!1,"Area","null","Area of the element that will be used to test for interactions"],["impactArea",!1,"Area","null","Area of the element that will be used to test for impacts"],["detectImpacts",!1,"boolean","false","Whether or not the component will detect or will be detected for impacts"],["impactClassName",!1,"string","null","Class name of the object used for comparison during impact detection"],["impactFilter",!1,"string[]","[]","List of classes and names of components that will trigger the `onImpact` callback when an impact is detected"]]),b=[].concat(Object(r.a)(u.renderEvents),[["onClick",!1,"function","null","Callback executed when the `click` event is triggered"],["onMouseDown",!1,"function","null","Callback executed when the `mousedown` event is triggered"],["onMouseMove",!1,"function","null","Callback executed when the `mousemove` event is triggered"],["onMouseOut",!1,"function","null","Callback executed when the `mouseout` event is triggered"],["onMouseOver",!1,"function","null","Callback executed when the `mouseover` event is triggered"],["onMouseUp",!1,"function","null","Callback executed when the `mouseup` event is triggered"],["onMouseUpOutside",!1,"function","null","Callback executed when the `mouseupoutside` event is triggered"],["onPointerCancel",!1,"function","null","Callback executed when the `pointercancel` event is triggered"],["onPointerDown",!1,"function","null","Callback executed when the `pointerdown` event is triggered"],["onPointerMove",!1,"function","null","Callback executed when the `pointermove` event is triggered"],["onPointerOut",!1,"function","null","Callback executed when the `pointerout` event is triggered"],["onPointerOver",!1,"function","null","Callback executed when the `pointerover` event is triggered"],["onPointerTap",!1,"function","null","Callback executed when the `pointertap` event is triggered"],["onPointerUp",!1,"function","null","Callback executed when the `pointerup` event is triggered"],["onPointerUpOutside",!1,"function","null","Callback executed when the `pointerupoutside` event is triggered"],["onRemovedFrom",!1,"function","null","Callback executed when the `removedfrom` event is triggered"],["onRightClick",!1,"function","null","Callback executed when the `rightclick` event is triggered"],["onRightDown",!1,"function","null","Callback executed when the `rightdown` event is triggered"],["onRightUp",!1,"function","null","Callback executed when the `rightup` event is triggered"],["onRightUpOutside",!1,"function","null","Callback executed when the `rightupoutside` event is triggered"],["onTap",!1,"function","null","Callback executed when the `tap` event is triggered"],["onTouchCancel",!1,"function","null","Callback executed when the `touchcancel` event is triggered"],["onTouchEnd",!1,"function","null","Callback executed when the `touchend` event is triggered"],["onTouchEndOutside",!1,"function","null","Callback executed when the `touchendoutside` event is triggered"],["onTouchMove",!1,"function","null","Callback executed when the `touchmove` event is triggered"],["onTouchStart",!1,"function","null","Callback executed when the `touchstart` event is triggered"],["onAdded",!1,"function","null","Callback executed the object is added to a parent element or into the rendered stage"],["onRemoved",!1,"function","null","Callback executed the element is removed from it' parent"],["onChildAdded",!1,"function","null","Callback executed a child element is added"],["onImpact",!1,"function","null","Callback executed when an impact is detected"]]),x={galaxy:"./static/assets/galaxy.png",ship:"./static/assets/spaceship.png"},j=function(){return Object(i.jsxs)(c.L,{textures:x,children:[Object(i.jsx)(c.V,{texture:"galaxy"}),Object(i.jsxs)(c.M,{x:50,y:50,children:[Object(i.jsx)(c.S,{texture:"ship"}),Object(i.jsx)(c.M,{x:100,y:100,children:Object(i.jsx)(c.S,{texture:"ship"})})]})]})};t.default=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l.n,{children:"PixiContainer"}),Object(i.jsx)(l.g,{children:"The PixiContainer, as the name suggests, is an object used co contain other objects. Any transformation (position, rotation and scale) are applied to all its children and allow to create logical groups that can be handled together."}),Object(i.jsx)(a.b,{style:{height:300},children:Object(i.jsx)(j,{})}),Object(i.jsx)(a.b,{children:Object(i.jsx)(o.a,{src:"./static/examples/PixiContainerExample.tsx"})}),Object(i.jsx)(l.k,{children:"Properties"}),Object(i.jsx)(s.b,{props:d}),Object(i.jsx)(l.k,{children:"Event Callbacks"}),Object(i.jsx)(s.b,{props:b})]})}},78:function(e,t,n){"use strict";n.r(t),n.d(t,"spriteProps",(function(){return b}));var i=n(16),r=n(12),a=n(18),c=(n(1),n(182)),o=n(19),s=n(181),l=n(186),u=n(180),h=n(28),d=n(75),b=[["alignX",!1,"number","0","Value between 0 and 1 that defines where the object is aligned on the X axis (0 aligns it on the left and 1 on the right)"],["alignY",!1,"number","0","Value between 0 and 1 that defines where the object is aligned on theYX axis (0 aligns it on the top and 1 on the bottom)"],["anchorX",!1,"number","0","Anchor on the X axis where the texture starts to be rendered (it is overridden by `alignX`)"],["anchorY",!1,"number","0","Anchor on the Y axis where the texture starts to be rendered (it is overridden by `alignY`)"],["blendMode",!1,"BlendModes","BlendModes.Normal","Mode used to blend textures together"],["roundPixels",!1,"boolean","false","Whether to round the pixel values when the scale causes decimal values on position and size. It makes rendering faster"],["tint",!1,"number","0xffffff","Tint applied onto the texture"],["texture",!1,"string","null","Name of the texture to be used"]].concat(Object(r.a)(d.genericProps)),x={galaxy:"./static/assets/galaxy.png",sheet:"./static/assets/spritesheet.json"},j=function(){return Object(i.jsxs)(c.L,{textures:x,children:[Object(i.jsx)(c.V,{texture:"galaxy"}),Object(i.jsx)(c.S,{alignY:.5,x:20,children:Object(i.jsx)(c.U,{src:"./static/assets/spaceship.png"})}),Object(i.jsx)(c.S,{texture:"enemy-ship",alignY:.5,alignX:1,x:-20})]})};t.default=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(h.n,{children:"PixiSprite"}),Object(i.jsxs)(h.g,{children:["The PixiSprite is the component that will render a texture onto the canvas. It is possible to use a texture preloaded by the"," ",Object(i.jsx)(l.a,{page:o.a.TextureContext})," by using the ",Object(i.jsx)(u.a,{children:"texture"})," property or by adding a"," ",Object(i.jsx)(l.a,{page:o.a.PixiTexture})," as a child node. ",Object(i.jsx)("br",{}),"If you are familiar with the PIXI properties, there are a couple of extra properties added by this library. Both"," ",Object(i.jsx)(u.a,{children:"alignX"})," and ",Object(i.jsx)(u.a,{children:"alignX"})," are not original properties but it is something I've found quite useful during the years as a game developer. These 2 properties will allow you to align the sprite on the X and Y axis. If you'll use the ",Object(i.jsx)(u.a,{children:"x"})," and/or ",Object(i.jsx)(u.a,{children:"y"})," properties, they will work as relative position translations from the aligned central position."]}),Object(i.jsx)(a.b,{style:{height:300},children:Object(i.jsx)(j,{})}),Object(i.jsx)(a.b,{children:Object(i.jsx)(s.a,{src:"./static/examples/PixiSpriteExample.tsx"})}),Object(i.jsx)(h.k,{children:"Properties"}),Object(i.jsx)(u.b,{props:b}),Object(i.jsx)(h.k,{children:"Event Callbacks"}),Object(i.jsx)(u.b,{props:d.genericEvents})]})}}}]);
//# sourceMappingURL=10.b3e08853.chunk.js.map