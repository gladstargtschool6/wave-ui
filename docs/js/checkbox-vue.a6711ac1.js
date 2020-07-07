(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["checkbox-vue"],{a2cf:function(e,c,t){"use strict";t.r(c);var s=function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("div",[e._m(0),e._m(1),e._m(2),t("h3",[e._v("States")]),t("div",{staticClass:"w-flex wrap"},[t("w-checkbox",{staticClass:"mr-3 mb-1",attrs:{value:!0,label:"Checked"}}),t("w-checkbox",{staticClass:"mr-3 mb-1",attrs:{value:!1,label:"Unchecked"}}),t("w-checkbox",{staticClass:"mr-3 mb-1",attrs:{value:!0,indeterminate:"",label:"Indeterminate"}}),t("w-checkbox",{staticClass:"mr-3 mb-1",attrs:{value:!0,disabled:"",label:"Checked &amp; disabled"}}),t("w-checkbox",{staticClass:"mr-3 mb-1",attrs:{value:!1,disabled:"",label:"Unchecked &amp; disabled"}})],1),t("h3",[e._v("V-model")]),e._m(3),t("div",{staticClass:"w-flex"},[t("w-checkboxes",{attrs:{items:e.checkboxes1},model:{value:e.selectedCheckbox1,callback:function(c){e.selectedCheckbox1=c},expression:"selectedCheckbox1"}}),t("div",{staticClass:"subtitle ml-8"},[e._v("Selected choices:"),t("code",[e._v(e._s(e.selectedCheckbox1||"[]"))])])],1),t("h3",[e._v("Default column layout")]),t("w-checkboxes",{attrs:{items:e.checkboxes2}}),t("h3",[e._v("Inline layout")]),t("w-checkboxes",{attrs:{items:e.checkboxes2,inline:""}}),t("h3",[e._v("Round")]),t("w-checkboxes",{attrs:{items:e.checkboxes2,round:"",inline:""}}),t("h3",[e._v("Color")]),e._m(4),t("w-checkboxes",{attrs:{items:e.checkboxes2,color:"purple"}}),t("h3",[e._v("Custom label content")]),e._m(5),t("w-checkboxes",{attrs:{items:e.checkboxes3,color:"green"},scopedSlots:e._u([{key:"item",fn:function(c){var s=c.item;return[t("span",{staticClass:"pr-2"},[e._v(e._s(s.label))]),t("w-icon",{staticClass:"deep-purple"},[e._v(e._s(s.icon))])]}}])}),t("w-divider",{staticClass:"ma-10 ml-0"}),t("h2",[e._v("Individual checkbox")]),e._m(6),t("w-checkbox",{staticClass:"mr-2",attrs:{label:"Choice 1",name:"checkboxes2",color:"success"}}),t("w-checkbox",{staticClass:"mr-2",attrs:{label:"Choice 2",name:"checkboxes2",color:"warning"}}),t("w-checkbox",{attrs:{label:"Choice 3",name:"checkboxes2",color:"error"}}),t("h3",[e._v("Custom label content")]),e._m(7),t("w-checkbox",{staticClass:"mr-2",attrs:{name:"checkboxes2",color:"success"}},[t("span",{staticClass:"pr-2"},[e._v("Choice 1")]),t("w-icon",{staticClass:"primary"},[e._v("wi-star")])],1)],1)},a=[function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("h1",{staticClass:"headline mt-4"},[t("span",{staticClass:"code"},[e._v("w-checkbox")]),e._v(" & "),t("span",{staticClass:"code"},[e._v("w-checkboxes")])])},function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("h2",[e._v("Multiple checkboxes using the "),t("code",[e._v("w-checkboxes")]),e._v(" tag")])},function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("p",[e._v("The "),t("code",[e._v("w-checkboxes")]),e._v(" component allows a fast and easy rendering of multiple checkboxes by passing the items through a prop."),t("br"),e._v(" It accepts an inline parameter to display the checkboxes inline, and allows you to customize the label of each checkbox through slot. ")])},function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("p",[e._v("If a value is set in the choice's data, it will be returned through the v-model when selected."),t("br"),e._v(" If no value is set, the choice's label will be returned instead.")])},function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("p",[e._v("By default the "),t("code",[e._v("w-checkboxes")]),e._v(" & "),t("code",[e._v("w-checkbox")]),e._v(" components will use the primary color.")])},function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("p",[t("code",[e._v("w-checkboxes")]),e._v(" provides a "),t("code",[e._v("label")]),e._v(" slot to customize the label of each checkbox button.")])},function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("p",[e._v("It is possible to use the "),t("code",[e._v("w-checkbox")]),e._v(" component to render a single checkbox at once."),t("br"),e._v(" A set of checkboxes will only work together if they have the same v-model, or the same "),t("code",[e._v("name")]),e._v(" attribute (standard HTML). ")])},function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("p",[t("code",[e._v("w-checkbox")]),e._v(" provides a default slot to customize the content.")])}],l={data:function(){return{selectedCheckbox1:[],checkboxes1:[{label:"Choice 1",value:1},{label:"Choice 2",value:2},{label:"Choice 3",value:3}],checkboxes2:[{label:"Choice 1"},{label:"Choice 2"},{label:"Choice 3"},{label:"Choice 4"}],checkboxes3:[{label:"Square",icon:"mdi mdi-square"},{label:"Circle",icon:"mdi mdi-circle"},{label:"Triangle",icon:"mdi mdi-triangle"}]}}},o=l,i=t("2877"),n=Object(i["a"])(o,s,a,!1,null,null,null);c["default"]=n.exports}}]);
//# sourceMappingURL=checkbox-vue.a6711ac1.js.map