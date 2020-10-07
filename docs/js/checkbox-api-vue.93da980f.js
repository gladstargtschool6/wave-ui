(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["checkbox-api-vue"],{4754:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"w-divider my12"}),s("title-link",{staticClass:"title1",attrs:{h2:"",slug:"w-checkboxes-api"}},[e._v("<w-checkboxes> API")]),s("alert",{staticClass:"mb6",attrs:{info:""}},[e._v("The props will soon be more detailed.")]),s("api",{staticClass:"mt0",attrs:{items:e.checkboxesProps,descriptions:e.checkboxes.propsDescs,title:"Props"}}),s("api",{attrs:{items:e.checkboxes.slots,title:"Slots"}}),s("api",{attrs:{items:e.checkboxesEvents,title:"Events"}}),s("div",{staticClass:"w-divider my12"}),s("title-link",{staticClass:"title1",attrs:{h2:"",slug:"w-checkbox-api"}},[e._v("<w-checkbox> API")]),s("api",{staticClass:"mt0",attrs:{items:e.checkboxProps,descriptions:e.checkbox.propsDescs,title:"Props"}}),s("api",{attrs:{items:e.checkbox.slots,title:"Slots"}}),s("api",{attrs:{items:e.checkboxEvents,title:"Events"}})],1)},c=[],i=(s("13d5"),s("5530")),o=s("c0bc"),r=s("fc6d"),n=s("b0e5"),l={propsDescs:{items:"",value:"",labelOnLeft:"",itemLabel:"",itemValue:"",itemColor:"",inline:"",round:"",color:"",name:"",disabled:"",readonly:"",required:"",validators:""},slots:{item:{description:"Provide a custom content for each checkbox label."}},eventsDescs:{input:"Emitted each time any of the checkboxes is toggled. It updates the v-model value in Vue 2.x only.<br>An array of return-value of each checked checkbox is passed as a parameter.<br>A return-value is, in this order (if they exist), either: the item value, the item label, the item index.","update:modelValue":"Emitted each time any of the checkboxes is toggled. It updates the v-model value in Vue 3 only.<br>An array of return-value of each checked checkbox is passed as a parameter.<br>A return-value is, in this order (if they exist), either: the item value, the item label, the item index.",focus:"Emitted on each checkbox focus. The focus DOM event is returned as a parameter."}},u={propsDescs:{value:"",returnValue:"",label:"",labelOnLeft:"",color:"",noRipple:"",indeterminate:"",round:"",name:"",disabled:"",readonly:"",required:"",validators:""},slots:{default:{description:"The checkbox label content."}},eventsDescs:{input:"Emitted each time the state of the checkbox changes. It updates the v-model value in Vue 2.x only.<br>A boolean for the current state is passed as a parameter.","update:modelValue":"Emitted each time the state of the checkbox changes. It updates the v-model value in Vue 3 only.<br>A boolean for the current state is passed as a parameter.",focus:"Emitted on each checkbox focus. The focus DOM event is returned as a parameter."}},h={data:function(){return{checkboxes:l,checkbox:u}},computed:{checkboxesProps:function(){return Object(i["a"])(Object(i["a"])({},r["a"].props),o["a"].props)},checkboxProps:function(){return Object(i["a"])(Object(i["a"])({},n["a"].props),o["a"].props)},checkboxesEvents:function(){return r["a"].emits.reduce((function(e,t){return(e[t]={description:l.eventsDescs[t]||""})&&e}),{})},checkboxEvents:function(){return n["a"].emits.reduce((function(e,t){return(e[t]={description:u.eventsDescs[t]||""})&&e}),{})}}},d=h,p=s("2877"),b=Object(p["a"])(d,a,c,!1,null,null,null);t["default"]=b.exports}}]);
//# sourceMappingURL=checkbox-api-vue.93da980f.js.map