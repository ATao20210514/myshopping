(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c795c"],{"50f1":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"Add_manage"},[e("van-radio-group",{model:{value:t.radio,callback:function(a){t.radio=a},expression:"radio"}},t._l(t.addressItem,(function(a,s){return e("div",{key:a.id,staticClass:"addressItem"},[e("div",{staticClass:"ItemInfo"},[e("div",[t._v("收货人："+t._s(a.real_name)+" "+t._s(a.phone))]),e("div",[t._v("收货地址:"+t._s(a.province)+t._s(a.city)+t._s(a.district)+t._s(a.detail))])]),e("div",{staticClass:"ItemSet"},[e("van-radio",{attrs:{name:s,"checked-color":"#ee0a24"}},[t._v("设置默认")])],1)])})),0)],1)},d=[],i={name:"Add_manage",data:function(){return{addressItem:[],radio:0}},components:{},methods:{},created:function(){var t=this;this.$axios.get("http://47.115.51.185/api/address/list?page=1&limit=20").then((function(a){200==a.data.status?(t.addressItem=a.data.data,console.log(t.addressItem)):t.$router.push("/login")}))},computed:{}},n=i,o=e("2877"),r=Object(o["a"])(n,s,d,!1,null,"daf84646",null);a["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0c795c.07457268.js.map