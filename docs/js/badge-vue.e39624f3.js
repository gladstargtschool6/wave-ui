(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["badge-vue"],{1343:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("title-link",{staticClass:"mt4 code",attrs:{h1:"",slug:"w-badge"}},[e._v("w-badge"),o("w-tag",{staticClass:"ml3",attrs:{"bg-color":"orange",color:"white",lg:""}},[e._v("In progress")])],1),o("title-link",{attrs:{h2:""}},[e._v("Default")]),o("p",[e._v("The default badge background color is primary.")]),o("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-badge class="mr10">\n  <template #badge>3</template>\n  <div class="pa2 grey-light5--bg primary">\n    <w-icon class="mr1">mdi mdi-email</w-icon>\n    Emails\n  </div>\n</w-badge>\n')]},proxy:!0}])},[o("w-badge",{staticClass:"mr10",scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("div",{staticClass:"grey-light5--bg pa2 primary"},[o("w-icon",{staticClass:"mr1"},[e._v("mdi mdi-email")]),e._v("Emails")],1)])],1),o("title-link",{attrs:{h2:""}},[e._v("Color and background color")]),o("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-flex(wrap)\n  w-badge.mr10(bg-color="error")\n    template(#badge) 3\n    w-icon(color="grey-light1" size="2.5em") mdi mdi-email\n  w-badge.mr10(color="yellow")\n    template(#badge) 3\n    w-icon(color="grey-light1" size="2.5em") mdi mdi-email\n  w-badge.mr10(bg-color="lime-light1" color="green-dark2")\n    template(#badge) 3\n    w-icon(color="grey-light1" size="2.5em") mdi mdi-email\n')]},proxy:!0}])},[o("w-flex",{attrs:{wrap:""}},[o("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{attrs:{color:"grey-light1",size:"2.5em"}},[e._v("mdi mdi-email")])],1),o("w-badge",{staticClass:"mr10",attrs:{color:"yellow"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{attrs:{color:"grey-light1",size:"2.5em"}},[e._v("mdi mdi-email")])],1),o("w-badge",{staticClass:"mr10",attrs:{"bg-color":"lime-light1",color:"green-dark2"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{attrs:{color:"grey-light1",size:"2.5em"}},[e._v("mdi mdi-email")])],1)],1)],1),o("title-link",{attrs:{h2:""}},[e._v("Dot")]),o("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-flex(wrap)\n  w-badge.mr10(dot bg-color="red")\n    template(#badge)\n    w-icon(size="2.5em") mdi mdi-account\n')]},proxy:!0}])},[o("w-flex",{attrs:{wrap:""}},[o("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red"},scopedSlots:e._u([{key:"badge",fn:function(){},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1)],1)],1),o("title-link",{attrs:{h2:""}},[e._v("Positions")]),o("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-flex.ml2(wrap)\n  w-badge.mr10(dot bottom left bg-color="red")\n    template(#badge)\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(dot top left bg-color="red")\n    template(#badge)\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(dot top right bg-color="red")\n    template(#badge)\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(dot bottom right bg-color="red")\n    template(#badge)\n    w-icon(size="2.5em") mdi mdi-account\n')]},proxy:!0}])},[o("w-flex",{staticClass:"ml2",attrs:{wrap:""}},[o("w-badge",{staticClass:"mr10",attrs:{dot:"",bottom:"",left:"","bg-color":"red"},scopedSlots:e._u([{key:"badge",fn:function(){},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{staticClass:"mr10",attrs:{dot:"",top:"",left:"","bg-color":"red"},scopedSlots:e._u([{key:"badge",fn:function(){},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{staticClass:"mr10",attrs:{dot:"",top:"",right:"","bg-color":"red"},scopedSlots:e._u([{key:"badge",fn:function(){},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{staticClass:"mr10",attrs:{dot:"",bottom:"",right:"","bg-color":"red"},scopedSlots:e._u([{key:"badge",fn:function(){},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1)],1)],1),o("title-link",{attrs:{h2:""}},[e._v("Sizes")]),o("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('h3 Dots\nw-flex(wrap)\n  w-badge.mr10(dot bg-color="red" xs)\n    template(#badge)\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(dot bg-color="red" sm)\n    template(#badge)\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(dot bg-color="red" md)\n    template(#badge)\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(dot bg-color="red" lg)\n    template(#badge)\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(dot bg-color="red" xl)\n    template(#badge)\n    w-icon(size="2.5em") mdi mdi-account\nh3 Text content\nw-flex(wrap)\n  w-badge.mr10(bg-color="error" xs)\n    template(#badge) busy\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(bg-color="error" sm)\n    template(#badge) busy\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(bg-color="error" md)\n    template(#badge) busy\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(bg-color="error" lg)\n    template(#badge) busy\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(bg-color="error" xl)\n    template(#badge) busy\n    w-icon(size="2.5em") mdi mdi-account\nh3 Numeric content\nw-flex(wrap)\n  w-badge.mr10(bg-color="error" xs)\n    template(#badge) 3\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(bg-color="error" sm)\n    template(#badge) 3\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(bg-color="error" md)\n    template(#badge) 3\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(bg-color="error" lg)\n    template(#badge) 3\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(bg-color="error" xl)\n    template(#badge) 3\n    w-icon(size="2.5em") mdi mdi-account\n')]},proxy:!0}])},[o("h3",[e._v("Dots")]),o("w-flex",{attrs:{wrap:""}},[o("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red",xs:""},scopedSlots:e._u([{key:"badge",fn:function(){},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red",sm:""},scopedSlots:e._u([{key:"badge",fn:function(){},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red",md:""},scopedSlots:e._u([{key:"badge",fn:function(){},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red",lg:""},scopedSlots:e._u([{key:"badge",fn:function(){},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red",xl:""},scopedSlots:e._u([{key:"badge",fn:function(){},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1)],1),o("h3",[e._v("Text content")]),o("w-flex",{attrs:{wrap:""}},[o("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",xs:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("busy")]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",sm:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("busy")]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",md:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("busy")]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",lg:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("busy")]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",xl:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("busy")]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1)],1),o("h3",[e._v("Numeric content")]),o("w-flex",{attrs:{wrap:""}},[o("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",xs:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",sm:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",md:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",lg:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",xl:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1)],1)],1),o("title-link",{attrs:{h2:""}},[e._v("Overlap")]),o("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-flex(wrap)\n  w-badge.mr10\n    template(#badge) 3\n    div.grey-light5--bg.pa2.primary\n      w-icon.mr1 mdi mdi-email\n      | Emails\n\n  w-badge.my4.mr10(overlap bottom dot bg-color="green")\n    w-icon.blue--bg.pa6(size="2.5em" color="white") mdi mdi-account\n\nw-flex(wrap)\n  w-badge.my4.mr10(overlap bottom bg-color="orange" sm color="white")\n    template(#badge) away\n    w-icon.blue--bg.pa6(size="2.5em" color="white") mdi mdi-account\n')]},proxy:!0}])},[o("w-flex",{attrs:{wrap:""}},[o("w-badge",{staticClass:"mr10",scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[o("div",{staticClass:"grey-light5--bg pa2 primary"},[o("w-icon",{staticClass:"mr1"},[e._v("mdi mdi-email")]),e._v("Emails")],1)]),o("w-badge",{staticClass:"my4 mr10",attrs:{overlap:"",bottom:"",dot:"","bg-color":"green"}},[o("w-icon",{staticClass:"blue--bg pa6",attrs:{size:"2.5em",color:"white"}},[e._v("mdi mdi-account")])],1)],1),o("w-flex",{attrs:{wrap:""}},[o("w-badge",{staticClass:"my4 mr10",attrs:{overlap:"",bottom:"","bg-color":"orange",sm:"",color:"white"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("away")]},proxy:!0}])},[o("w-icon",{staticClass:"blue--bg pa6",attrs:{size:"2.5em",color:"white"}},[e._v("mdi mdi-account")])],1)],1)],1),o("title-link",{attrs:{h2:""}},[e._v("Force round badge")]),e._m(0),o("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-flex(wrap)\n  w-badge(bg-color="error")\n    template(#badge)\n      span.size--sm 11\n    w-icon(size="2.5em") mdi mdi-account\n\n  w-icon.ml12.mr6.grey-light3(size="2.5em") mdi mdi-arrow-right\n\n  w-badge(bg-color="error" round)\n    template(#badge)\n      span.size--sm 11\n    w-icon(size="2.5em") mdi mdi-account\n')]},proxy:!0}])},[o("w-flex",{attrs:{wrap:""}},[o("w-badge",{attrs:{"bg-color":"error"},scopedSlots:e._u([{key:"badge",fn:function(){return[o("span",{staticClass:"size--sm"},[e._v("11")])]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-icon",{staticClass:"ml12 mr6 grey-light3",attrs:{size:"2.5em"}},[e._v("mdi mdi-arrow-right")]),o("w-badge",{attrs:{"bg-color":"error",round:""},scopedSlots:e._u([{key:"badge",fn:function(){return[o("span",{staticClass:"size--sm"},[e._v("11")])]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1)],1)],1),o("title-link",{attrs:{h2:""}},[e._v("Override badge padding")]),o("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-badge(bg-color="error" badge-class="px1")\n  template(#badge) busy\n  w-icon(size="2.5em") mdi mdi-account\n\nw-icon.ml12.mr6.grey-light3(size="2.5em") mdi mdi-arrow-right\n\nw-badge(bg-color="error" badge-class="px4")\n  template(#badge) busy\n  w-icon(size="2.5em") mdi mdi-account\n')]},proxy:!0}])},[o("w-badge",{attrs:{"bg-color":"error","badge-class":"px1"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("busy")]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),o("w-icon",{staticClass:"ml12 mr6 grey-light3",attrs:{size:"2.5em"}},[e._v("mdi mdi-arrow-right")]),o("w-badge",{attrs:{"bg-color":"error","badge-class":"px4"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("busy")]},proxy:!0}])},[o("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1)],1),o("title-link",{attrs:{h2:""}},[e._v("V-model")]),o("p",[e._v("The badge appears if one of these conditions is fulfilled:")]),e._m(1),o("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-flex.align-center\n  w-button(@click="showBadge--" icon="wi-minus" bg-color="success" sm)\n  w-badge.mx6(v-model="showBadge" bg-color="error" overlap)\n    w-icon(color="grey-light1" size="2.5em") mdi mdi-email\n  w-button(@click="showBadge++" icon="wi-plus" bg-color="success" sm)')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  showBadge: 0\n})\n")]},proxy:!0}])},[o("w-flex",{staticClass:"align-center"},[o("w-button",{attrs:{icon:"wi-minus","bg-color":"success",sm:""},on:{click:function(t){e.showBadge--}}}),o("w-badge",{staticClass:"mx6",attrs:{"bg-color":"error",overlap:""},model:{value:e.showBadge,callback:function(t){e.showBadge=t},expression:"showBadge"}},[o("w-icon",{attrs:{color:"grey-light1",size:"2.5em"}},[e._v("mdi mdi-email")])],1),o("w-button",{attrs:{icon:"wi-plus","bg-color":"success",sm:""},on:{click:function(t){e.showBadge++}}})],1)],1),o("title-link",{attrs:{h2:""}},[e._v("Transitions")]),o("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.w-flex.align-center.wrap\n  w-flex.mb4(column no-grow align-end)\n    span.mb2 Toggle with this transition effect:\n    w-button.code.ma1(@click="transition = \'fade\';showBadge = !showBadge" bg-color="primary" xs) fade\n    w-button.code.ma1(@click="transition = \'bounce\';showBadge = !showBadge" bg-color="primary" xs) bounce\n    w-button.code.ma1(@click="transition = \'twist\';showBadge = !showBadge" bg-color="primary" xs) twist\n    w-button.code.ma1(@click="transition = \'scale\';showBadge = !showBadge" bg-color="primary" xs) scale\n    w-button.code.ma1(@click="transition = \'scale-fade\';showBadge = !showBadge" bg-color="primary" xs) scale-fade\n    w-button.code.ma1(@click="transition = \'slide-fade-left\';showBadge = !showBadge" bg-color="primary" xs) slide-fade-left\n    w-button.code.ma1(@click="transition = \'slide-fade-right\';showBadge = !showBadge" bg-color="primary" xs) slide-fade-right\n    w-button.code.ma1(@click="transition = \'slide-fade-top\';showBadge = !showBadge" bg-color="primary" xs) slide-fade-top\n    w-button.code.ma1(@click="transition = \'slide-fade-bottom\';showBadge = !showBadge" bg-color="primary" xs) slide-fade-bottom\n  .w-flex.grow\n    .xs2\n    .xs10\n      w-badge.ml4(v-model="showBadge" :transition="transition" bg-color="error" overlap round)\n        template(#badge) 5\n        w-icon(color="grey-light1" size="2.5em") mdi mdi-email')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  showBadge: false,\n  transition: 'fade'\n})")]},proxy:!0}])},[o("div",{staticClass:"w-flex align-center wrap"},[o("w-flex",{staticClass:"mb4",attrs:{column:"","no-grow":"","align-end":""}},[o("span",{staticClass:"mb2"},[e._v("Toggle with this transition effect:")]),o("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(t){e.transition="fade",e.showBadge2=!e.showBadge2}}},[e._v("fade")]),o("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(t){e.transition="bounce",e.showBadge2=!e.showBadge2}}},[e._v("bounce")]),o("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(t){e.transition="twist",e.showBadge2=!e.showBadge2}}},[e._v("twist")]),o("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(t){e.transition="scale",e.showBadge2=!e.showBadge2}}},[e._v("scale")]),o("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(t){e.transition="scale-fade",e.showBadge2=!e.showBadge2}}},[e._v("scale-fade")]),o("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(t){e.transition="slide-fade-left",e.showBadge2=!e.showBadge2}}},[e._v("slide-fade-left")]),o("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(t){e.transition="slide-fade-right",e.showBadge2=!e.showBadge2}}},[e._v("slide-fade-right")]),o("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(t){e.transition="slide-fade-top",e.showBadge2=!e.showBadge2}}},[e._v("slide-fade-top")]),o("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(t){e.transition="slide-fade-bottom",e.showBadge2=!e.showBadge2}}},[e._v("slide-fade-bottom")])],1),o("div",{staticClass:"w-flex grow"},[o("div",{staticClass:"xs2"}),o("div",{staticClass:"xs10"},[o("w-badge",{staticClass:"ml4",attrs:{transition:e.transition,"bg-color":"error",overlap:"",round:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("5")]},proxy:!0}]),model:{value:e.showBadge2,callback:function(t){e.showBadge2=t},expression:"showBadge2"}},[o("w-icon",{attrs:{color:"grey-light1",size:"2.5em"}},[e._v("mdi mdi-email")])],1)],1)])],1)])],1)},r=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("For instance, if you increase the font size of the badge like in this example, the natural behavior\nof the badge is to increase its width to adapt to its content."),o("br"),e._v("\nWith the option "),o("code",[e._v("round")]),e._v(" you can force it to be round.")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[e._v("No v-model or value is provided but a badge slot is.")]),o("li",[e._v("A v-model or a value is given and is not "),o("code",[e._v("null")]),e._v(", "),o("code",[e._v("false")]),e._v(" or "),o("code",[e._v("0")]),e._v("."),o("br"),e._v("\nIf you want to show one of these values, you can cast it to a string and it will show up.")])])}],s={data:function(){return{showBadge:0,showBadge2:!1,transition:"fade"}}},i=s,n=o("2877"),c=Object(n["a"])(i,a,r,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=badge-vue.e39624f3.js.map