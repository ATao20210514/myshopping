(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-514dcb13"],{"4d65":function(i,t,c){},"63af":function(i,t,c){"use strict";c("4d65")},"674e":function(i,t,c){"use strict";c.r(t);var e=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"goodlist"},[e("div",{staticClass:"headNav"},[e("van-grid",{attrs:{border:!1}},[e("van-grid-item",{staticClass:"red",on:{click:i.trunLast}},[i._v(i._s(i.$route.query.title))]),e("van-grid-item",{staticClass:"changefont",on:{click:i.changePrice}},[i._v(" 价格 "),i.priceC%3==0?e("img",{attrs:{src:c("976d"),alt:""}}):i._e(),i.priceC%3==1?e("img",{attrs:{src:c("e8a4"),alt:""}}):i._e(),i.priceC%3==2?e("img",{attrs:{src:c("6fc9"),alt:""}}):i._e()]),e("van-grid-item",{on:{click:i.changesales}},[i._v(" 销量 "),i.salesC%3==0?e("img",{attrs:{src:c("976d"),alt:""}}):i._e(),i.salesC%3==1?e("img",{attrs:{src:c("e8a4"),alt:""}}):i._e(),i.salesC%3==2?e("img",{attrs:{src:c("6fc9"),alt:""}}):i._e()]),e("van-grid-item",[i._v("新品")])],1)],1),0!=i.goods.length?e("div",[e("ul",{staticClass:"good"},i._l(i.goods,(function(t){return e("li",{key:t.id},[e("router-link",{attrs:{to:"/detail/"+t.id}},[e("img",{attrs:{src:t.image,alt:""}})]),e("div",[e("p",[i._v(i._s(t.store_name))]),e("span",[i._v("￥"+i._s(t.price))]),e("div",[e("span",[i._v(" ￥"+i._s(t.vip_price)+" "),e("img",{attrs:{src:c("07df"),alt:""}})]),e("span",[i._v("已售"+i._s(t.sales)+"件")])])])],1)})),0)]):e("div",[e("Recommend")],1)])},A=[],s=c("ded5"),n={name:"GoodList",props:["id"],data:function(){return{priceC:0,salesC:0,goods:[],conditino:{page:1,limit:10,keyword:"",sid:0,news:0,priceOrder:"",salesOrder:""}}},components:{Recommend:s["a"]},created:function(){this.getProduct()},methods:{trunLast:function(){this.$router.go(-1)},changePrice:function(){this.priceC++,this.priceC%3==1?this.conditino.priceOrder="desc":this.priceC%3==2?this.conditino.priceOrder="asc":this.conditino.priceOrder="",this.getProduct()},changesales:function(){this.salesC++,this.salesC%3==1?this.conditino.salesOrder="desc":this.salesC%3==2?this.conditino.salesOrder="asc":this.conditino.salesOrder="",this.getProduct()},getProduct:function(){var i=this;this.conditino.sid=this.id,this.$axios.get("api/products",{params:this.conditino}).then((function(t){200==t.data.status&&(i.goods=t.data.data)}))}}},a=n,d=(c("63af"),c("2877")),m=Object(d["a"])(a,e,A,!1,null,"6fbdf408",null);t["default"]=m.exports},"6fc9":function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAATCAYAAABPwleqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxMGM0NTk3Mi0xZWRjLTc5NDktYmM5My01MmI5MGUwMjczMTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzIyRUYyOEEyMTBFMTFFOTgxNTBERkEyQkU2RTI3NkUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzIyRUYyODkyMTBFMTFFOTgxNTBERkEyQkU2RTI3NkUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODJmOGJjOWEtNjNhNi1hZDRkLTk0NTMtYWQxYTg4NTU5YTFhIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEwYzQ1OTcyLTFlZGMtNzk0OS1iYzkzLTUyYjkwZTAyNzMxOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pn93ow0AAAEASURBVHjaYnxprMyAA0gD8RwgTgLi59gUMOHQyA/E24HYA4h3QvlEaeYC4m1ArAvlg+gtUHG8mtmAeAUQW6GJ2wDxciBmxaWZEYjnAbEvDq/4AfF8qDoMzROAOJoBPwDJ96FrrgTiPAbiQAEQV4AYLECcCcRtDKQBkPqPLNCQVWYgHfxl2ZBW9pCBTACyWR6ImcmyGUh4AfE0MjRngUJ7OhDXkKgRFDvTYVHVCsSTidQ4EYg70BNJPhAvJaARJF+ILYX9h2a/zTg0bgLiRKg6rBnjFxBHAPFxNPGjQBwJxL8JZclvQOwJxJehfBDtDRUnqjD4CDVgBxC7Q/kYACDAAJfhLaK8zH0rAAAAAElFTkSuQmCC"},"976d":function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAATCAYAAABPwleqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxMGM0NTk3Mi0xZWRjLTc5NDktYmM5My01MmI5MGUwMjczMTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjEwRUYxQTkyMTE2MTFFOTk4QUVDRTRFNDMyRTZFNkUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjEwRUYxQTgyMTE2MTFFOTk4QUVDRTRFNDMyRTZFNkUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODJmOGJjOWEtNjNhNi1hZDRkLTk0NTMtYWQxYTg4NTU5YTFhIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEwYzQ1OTcyLTFlZGMtNzk0OS1iYzkzLTUyYjkwZTAyNzMxOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjUxYEEAAAD9SURBVHjaYpw5cyYDDiANxHOAOAmIn2NTwIRDIz8QbwdiDyDeCeUTpZkLiLcBsS6UD6K3QMXxamYD4hVAbIUmbgPEy4GYFZdmRiCeB8S+OLziB8TzoeowNE8A4mgG/AAk34euuRKI8xiIAwVAXAFisABxJhC3MZAGQOo/skBDVpmBdPAXpPkhA5kApFkeiJnJtdkLiKeRoTkLFNrTgbiGRI2g2JkOi6pWIJ5MpMaJQNyBnkjygXgpAY0g+UJsKew/NPttxqFxExAnQtVhzRi/gDgCiI+jiR8F4kgg/k0oS34DYk8gvgzlg2hvqDhRhcFHqAE7gNgdyscAAAEGAGMOLKKfpm4VAAAAAElFTkSuQmCC"},"9ad8":function(i,t,c){i.exports=c.p+"img/none.7aec7edd.png"},aa79:function(i,t,c){"use strict";c("d119")},d119:function(i,t,c){},ded5:function(i,t,c){"use strict";var e=function(){var i=this,t=i.$createElement,c=i._self._c||t;return c("div",{staticClass:"Recommen"},[i._m(0),i._m(1),c("div",{staticClass:"shop"},[c("ul",i._l(i.item,(function(t){return c("li",{key:t.id},[c("router-link",{attrs:{to:"/detail/"+t.id}},[c("van-image",{staticClass:"pic",attrs:{fit:"contain",src:t.image}}),c("h5",[i._v(i._s(t.store_name))]),c("i",[i._v("￥"+i._s(t.price))])],1)],1)})),0)])])},A=[function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"shoppic"},[e("img",{attrs:{src:c("9ad8"),alt:""}})])},function(){var i=this,t=i.$createElement,c=i._self._c||t;return c("div",{staticClass:"tit"},[c("div",{staticClass:"great"},[i._v(" 精品推荐 ")])])}],s={name:"Recommen",props:["item"],data:function(){return{}},created:function(){},components:{}},n=s,a=(c("aa79"),c("2877")),d=Object(a["a"])(n,e,A,!1,null,"cfd4e8c4",null);t["a"]=d.exports},e8a4:function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAATCAYAAABPwleqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxMGM0NTk3Mi0xZWRjLTc5NDktYmM5My01MmI5MGUwMjczMTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTFCNkQ5Q0IyMTBFMTFFOTk4NDBDMUY1MDFFRUREREYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTFCNkQ5Q0EyMTBFMTFFOTk4NDBDMUY1MDFFRUREREYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODJmOGJjOWEtNjNhNi1hZDRkLTk0NTMtYWQxYTg4NTU5YTFhIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEwYzQ1OTcyLTFlZGMtNzk0OS1iYzkzLTUyYjkwZTAyNzMxOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjqHv5oAAAD/SURBVHjaYpw5cyYDDiANxHOAOAmIn2NTwIRDIz8QbwdiDyDeCeUTpZkLiLcBsS6UD6K3QMXxamYD4hVAbIUmbgPEy4GYFZdmRiCeB8S+OLziB8TzoeowNE8A4mgG/AAk34euuRKI8xiIAwVAXAFisABxJhC3MZAGQOo/skBDVpmBdPAXpPkhA5mA8aWxsjyQZibXZi8gnkaG5ixQaE8H4hoSNYJiZzosqlqBeDKRGicCcQd6IskH4qUENILkC7GlsP/Q7LcZh8ZNQJwIVYc1Y/wC4gggPo4mfhSII4H4N6Es+Q2IPYH4MpQPor2h4kQVBh+hBuwAYncoHwMABBgABy8t3vXX4OYAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=chunk-514dcb13.03a7d5b7.js.map