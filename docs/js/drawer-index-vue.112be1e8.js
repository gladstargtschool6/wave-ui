(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["drawer-index-vue","drawer-api-vue","drawer-examples-vue"],{"4fb0":function(t,o,e){"use strict";e.r(o);var r=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"w-divider my12"}),e("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),e("alert",{staticClass:"mb6",attrs:{info:""}},[t._v("This API will soon be more detailed.")]),e("api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),e("api",{attrs:{items:t.slots,title:"Slots"}}),e("api",{attrs:{items:t.events,title:"Events"}})],1)},n=[],a=(e("13d5"),e("7195")),s={},i={},l={},c={data:function(){return{propsDescs:s,slots:i}},computed:{props:function(){return a["a"].props},events:function(){return a["a"].emits.reduce((function(t,o){return(t[o]={description:l[o]||""})&&t}),{})}}},w=c,u=e("2877"),h=Object(u["a"])(w,r,n,!1,null,null,null);o["default"]=h.exports},efc6:function(t,o,e){"use strict";e.r(o);var r=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("ui-component-title",[t._v("w-drawer")]),e("examples"),e("api")],1)},n=[],a=e("ffdd"),s=e("4fb0"),i={components:{Examples:a["default"],Api:s["default"]}},l=i,c=e("2877"),w=Object(c["a"])(l,r,n,!1,null,null,null);o["default"]=w.exports},ffdd:function(t,o,e){"use strict";e.r(o);var r=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("title-link",{attrs:{h2:""}},[t._v("Positions")]),e("example",{attrs:{"content-class":"w-flex align-center wrap"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-button.ma1(\n  @click="showDrawer = \'left\'"\n  outline\n  color="primary") Show left drawer\nw-button.ma1(\n  @click="showDrawer = \'right\'"\n  outline\n  color="primary") Show right drawer\nw-button.ma1(\n  @click="showDrawer = \'top\'"\n  outline\n  color="primary") Show top drawer\nw-button.ma1(\n  @click="showDrawer = \'bottom\'"\n  outline\n  color="primary") Show bottom drawer\n\nw-drawer(\n  :value="!!showDrawer"\n  :[position]="true"\n  @close="showDrawer = false")\n  w-button.button--close(\n    @click="showDrawer = false"\n    sm\n    outline\n    round\n    absolute\n    color="primary"\n    icon="wi-cross")\n')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  showDrawer: false\n}),\n\ncomputed: {\n  position () {\n    return this.showDrawer || 'right'\n  }\n}\n")]},proxy:!0}])},[e("w-button",{staticClass:"ma1",attrs:{outline:"",color:"primary"},on:{click:function(o){t.showLeftDrawer=!t.showLeftDrawer}}},[t._v("Show left drawer")]),e("w-button",{staticClass:"ma1",attrs:{outline:"",color:"primary"},on:{click:function(o){t.showRightDrawer=!t.showRightDrawer}}},[t._v("Show right drawer")]),e("w-button",{staticClass:"ma1",attrs:{outline:"",color:"primary"},on:{click:function(o){t.noOverlay=!1,t.showTopDrawer=!t.showTopDrawer}}},[t._v("Show top drawer")]),e("w-button",{staticClass:"ma1",attrs:{outline:"",color:"primary"},on:{click:function(o){t.showBottomDrawer=!t.showBottomDrawer}}},[t._v("Show bottom drawer")])],1),e("title-link",{attrs:{h2:""}},[t._v("Control width or height")]),t._m(0),t._m(1),e("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-button(\n  @click="showDrawer = true"\n  outline\n  color="primary") Show a 60px height bottom drawer\n\nw-drawer(v-model="showDrawer" bottom height="60px")\n  w-button.button--close(\n    @click="showDrawer = false"\n    sm\n    outline\n    round\n    absolute\n    color="primary"\n    icon="wi-cross")')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  showDrawer: false\n})\n")]},proxy:!0}])},[e("w-button",{attrs:{outline:"",color:"primary"},on:{click:function(o){t.bottomDrawerHeight="60px",t.showBottomDrawer=!t.showBottomDrawer}}},[t._v("Show a 60px height bottom drawer")])],1),e("title-link",{attrs:{h2:""}},[t._v("No overlay & custom color overlay")]),e("example",{attrs:{"content-class":"w-flex align-center wrap"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('span Open top drawer with a:\nw-button.ma1(\n  @click="noOverlay = false;overlayColor = \'rgba(35, 71, 129, 0.5&#041;\';showDrawer = !showDrawer"\n  outline\n  color="primary") Custom color overlay\nw-button.ma1(\n  @click="noOverlay = false;overlayColor = \'transparent\';showDrawer = !showDrawer"\n  outline\n  color="primary") Transparent overlay\nw-button.ma1(\n  @click="noOverlay = true;overlayColor = false;showDrawer = !showDrawer"\n  outline\n  color="primary") No overlay\n\nw-drawer(v-model="showDrawer" top :no-overlay="noOverlay" :overlay-color="overlayColor")\n  w-button.button--close(\n    @click="showDrawer = false"\n    sm\n    outline\n    absolute\n    round\n    color="primary"\n    icon="wi-cross")')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  showDrawer: false,\n  noOverlay: false,\n  overlayColor: false\n})\n")]},proxy:!0}])},[e("span",[t._v("Open top drawer with a:")]),e("w-button",{staticClass:"ma1",attrs:{outline:"",color:"primary"},on:{click:function(o){t.noOverlay=!1,t.overlayColor="rgba(35, 71, 129, 0.5)",t.showTopDrawer=!t.showTopDrawer}}},[t._v("Custom color overlay")]),e("w-button",{staticClass:"ma1",attrs:{outline:"",color:"primary"},on:{click:function(o){t.noOverlay=!1,t.overlayColor="transparent",t.showTopDrawer=!t.showTopDrawer}}},[t._v("Transparent overlay")]),e("w-button",{staticClass:"ma1",attrs:{outline:"",color:"primary"},on:{click:function(o){t.noOverlay=!0,t.overlayColor=!1,t.showTopDrawer=!t.showTopDrawer}}},[t._v("No overlay")])],1),t._m(2),e("title-link",{attrs:{h2:""}},[t._v("Persistent drawers")]),e("p",[t._v("A persistent drawer stays open when clicking outside or pressing the escape key.")]),e("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-button(@click="showDrawer = true" outline color="primary")\n  | Persistent drawer\n\nw-drawer(\n  v-model="showDrawer"\n  bottom\n  persistent\n  bg-color="blue-light4")\n  w-button.button--close(\n    sm\n    @click="showDrawer = false"\n    outline\n    absolute\n    round\n    icon="wi-cross")\n  .w-flex.fill-height.align-center.justify-center You can customize the background color as well.')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  showDrawer: false\n})\n")]},proxy:!0}])},[e("w-button",{attrs:{outline:"",color:"primary"},on:{click:function(o){t.persistent=!0,t.showBottomDrawer=!t.showBottomDrawer}}},[t._v("Persistent drawer")])],1),e("title-link",{attrs:{h2:""}},[t._v("Cookie notice example")]),e("p",[t._v("The cookie notice is a good use case of a persistent drawer, it will not let you click\nanything until you accept.")]),e("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-button(@click="showCookieNotice = true" outline color="primary")\n  | Show the cookie notice\n\nw-drawer(\n  v-model="showCookieNotice"\n  content-class="cookie-notice"\n  overlay-color="transparent"\n  persistent\n  fit-content\n  bottom)\n  .w-flex.pa2.align-center.wrap\n    .w-flex.align-center\n      w-icon.mr3(color="primary" xl) wi-info-circle\n      span.grey-dark3.\n        Our website uses cookies to give you the best user experience.\n        To continue browsing this site you must agree.\n    .spacer\n    w-button(sm bg-color="primary" dark @click="showCookieNotice = false")\n      w-icon.mr2 wi-check\n      | I agree')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  showCookieNotice: false\n})\n")]},proxy:!0}])},[e("w-button",{attrs:{outline:"",color:"primary"},on:{click:function(o){t.showCookieNotice=!0}}},[t._v("Show the cookie notice")]),e("w-drawer",{attrs:{"content-class":"cookie-notice","overlay-color":"transparent",persistent:"","fit-content":"",bottom:""},model:{value:t.showCookieNotice,callback:function(o){t.showCookieNotice=o},expression:"showCookieNotice"}},[e("div",{staticClass:"w-flex pa2 align-center wrap"},[e("div",{staticClass:"w-flex align-center py1"},[e("w-icon",{staticClass:"mr3",attrs:{color:"primary",xl:""}},[t._v("wi-info-circle")]),e("span",{staticClass:"grey-dark3"},[t._v("Our website uses cookies to give you the best user experience.\nTo continue browsing this site you must agree.")])],1),e("div",{staticClass:"spacer"}),e("w-button",{attrs:{sm:"","bg-color":"primary",dark:""},on:{click:function(o){t.showCookieNotice=!1}}},[e("w-icon",{staticClass:"mr2"},[t._v("wi-check")]),t._v("I agree")],1)],1)])],1),e("p",[t._v("You can then store the result of the acceptation in the localStorage.")]),e("ssh-pre",{attrs:{language:"html-vue",label:"Template"}},[t._v('<w-button\n  class="ml-auto"\n  sm\n  bg-color="primary"\n  dark\n  absolute\n  @click="acceptCookies">\n  <w-icon class="mr2">wi-check</w-icon>\n  I agree\n</w-button>\n')]),e("ssh-pre",{attrs:{language:"js",label:"Javascript"}},[t._v("acceptCookies () {\n  localStorage.acceptCookies = 'yes'\n  this.showCookieNotice = false\n}\n")]),e("w-drawer",{attrs:{left:""},model:{value:t.showLeftDrawer,callback:function(o){t.showLeftDrawer=o},expression:"showLeftDrawer"}},[e("w-button",{staticClass:"button--close",attrs:{sm:"",outline:"",absolute:"",round:"",color:"primary",icon:"wi-cross"},on:{click:function(o){t.showLeftDrawer=!t.showLeftDrawer}}}),e("div",{staticClass:"w-flex align-center justify-center fill-height"},[e("w-button",{attrs:{dark:"","bg-color":"primary"},on:{click:function(o){t.showLeftDrawer=!1,t.showRightDrawer=!0}}},[t._v("Show right drawer")])],1)],1),e("w-drawer",{model:{value:t.showRightDrawer,callback:function(o){t.showRightDrawer=o},expression:"showRightDrawer"}},[e("w-button",{staticClass:"button--close",attrs:{sm:"",outline:"",absolute:"",round:"",color:"primary",icon:"wi-cross"},on:{click:function(o){t.showRightDrawer=!t.showRightDrawer}}})],1),e("w-drawer",{attrs:{top:"","no-overlay":t.noOverlay,"overlay-color":t.overlayColor},model:{value:t.showTopDrawer,callback:function(o){t.showTopDrawer=o},expression:"showTopDrawer"}},[e("w-button",{staticClass:"button--close",attrs:{sm:"",outline:"",absolute:"",round:"",color:"primary",icon:"wi-cross"},on:{click:function(o){t.showTopDrawer=!t.showTopDrawer}}})],1),e("w-drawer",{attrs:{bottom:"",persistent:t.persistent,height:t.bottomDrawerHeight,"bg-color":"blue-light4"},on:{close:function(o){t.bottomDrawerHeight=null,t.persistent=!1}},model:{value:t.showBottomDrawer,callback:function(o){t.showBottomDrawer=o},expression:"showBottomDrawer"}},[e("w-button",{staticClass:"button--close",attrs:{sm:"",outline:"",absolute:"",round:"",icon:"wi-cross"},on:{click:function(o){t.showBottomDrawer=!t.showBottomDrawer}}}),e("div",{staticClass:"w-flex fill-height align-center justify-center"},[t._v("You can customize the background color as well.")])],1)],1)},n=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",[t._v("The "),e("span",{staticClass:"code"},[t._v("w-drawer")]),t._v(" component accepts a "),e("span",{staticClass:"code"},[t._v("width")]),t._v(" or "),e("span",{staticClass:"code"},[t._v("height")]),t._v(" parameter\ndepending on its position on screen to override the default one.")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",{staticClass:"grey-light1"},[e("span",{staticClass:"code grey-light1"},[t._v("width")]),t._v(" and "),e("span",{staticClass:"code grey-light1"},[t._v("height")]),t._v(" are called so for simplicity but\nthey internally translate to "),e("span",{staticClass:"code grey-light1"},[t._v("max-width")]),t._v(" and "),e("span",{staticClass:"code grey-light1"},[t._v("max-height")]),t._v("\nto fit on small screens.\n")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",{staticClass:"mt4"},[e("strong",[t._v("Note:")]),t._v(" with no overlay the underneath content will be clickable and the drawer\nwill not close.\nTo allow closing the drawer when clicking outside of it, you can set a transparent background\non the overlay.\n")])}],a={data:function(){return{showLeftDrawer:!1,showRightDrawer:!1,showTopDrawer:!1,showBottomDrawer:!1,noOverlay:!1,overlayColor:!1,bottomDrawerHeight:0,persistent:!1,showCookieNotice:!1}}},s=a,i=e("2877"),l=Object(i["a"])(s,r,n,!1,null,null,null);o["default"]=l.exports}}]);
//# sourceMappingURL=drawer-index-vue.112be1e8.js.map