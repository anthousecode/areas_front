(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{234:function(t,e,l){var content=l(262);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(19).default)("2cb4d360",content,!0,{sourceMap:!1})},261:function(t,e,l){"use strict";var n=l(234);l.n(n).a},262:function(t,e,l){(e=l(18)(!1)).push([t.i,'#exampleModal[data-v-a362b57c]{top:6.04vw}#exampleModal .modal-dialog[data-v-a362b57c]{z-index:2000;height:100%;display:flex;width:100%;flex-direction:column;align-items:flex-start}#exampleModal .modal-dialog .modal-content[data-v-a362b57c]{height:80%;background:transparent!important;border:none}#exampleModal .modal-dialog .modal-content .modal-footer[data-v-a362b57c]{border:none}#exampleModal[data-v-a362b57c]:after{content:"";display:block;background-color:rgba(0,0,0,.5);width:100%;height:100%;position:fixed;top:0;left:0;z-index:8000}.gallery-wrapper[data-v-a362b57c]{justify-content:center;align-items:center;width:100vw;height:100vh;z-index:0;position:relative;overflow:hidden}@media screen and (max-width:1100px){.gallery-wrapper[data-v-a362b57c]{padding-top:100px!important}}.gallery-wrapper .bg[data-v-a362b57c]{position:absolute;display:block;width:100%;height:100%;top:0;left:0;-o-object-fit:none;object-fit:none}.gallery-wrapper .gallery[data-v-a362b57c]{top:6.04vw;padding-bottom:140px!important;position:relative;width:100%;height:100%;z-index:1000;overflow:auto}@media screen and (max-width:1100px){.gallery-wrapper .gallery[data-v-a362b57c]{padding-top:0!important}}.gallery-wrapper .gallery figure[data-v-a362b57c]{margin-top:30px}.gallery-wrapper .gallery figure a[data-v-a362b57c]{display:flex;justify-content:center}.next[data-v-a362b57c]{display:none}.picture[data-v-a362b57c]{max-width:100%;height:260px;width:auto;-o-object-fit:contain;object-fit:contain}@media screen and (max-width:768px){.picture[data-v-a362b57c]{height:auto;max-height:300px}}@media screen and (max-device-width:968px){.picture[data-v-a362b57c]{height:auto;max-height:300px}}@media screen and (-webkit-min-device-pixel-ratio:3) and (max-device-width:968px){.picture[data-v-a362b57c]{height:auto;max-height:300px}}@media screen and (-webkit-min-device-pixel-ratio:2) and (max-device-width:968px){.picture[data-v-a362b57c]{height:auto;max-height:300px}}',""]),t.exports=e},319:function(t,e,l){"use strict";l.r(e);var n=l(73),o=l.n(n),r=l(260),d=l.n(r),c=l(233),m=l.n(c),h={name:"Gallery",directives:{clickOutside:o.a.directive},components:{carousel:d.a},data:function(){return{currentSlideIndex:0,images:[],isCarouselVisible:!1}},asyncData:function(t){return t.$axios.get("/gallery-items").then((function(t){return{images:t.data.data}})).catch((function(t){console.log(t)}))},computed:{getWindowWidth:function(){return window.innerWidth},getWindowHeight:function(){return window.innerHeight}},methods:{showCarousel:function(t){this.currentSlideIndex=t,this.isCarouselVisible=!0},hideCarousel:function(){this.isCarouselVisible=!1},nextImage:function(){m()(".owl-next").click()},prevImage:function(){m()(".owl-prev").click()}}},v=(l(261),l(9)),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"container-fluid gallery-wrapper p-0 d-flex",on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"right",39,e.key,["Right","ArrowRight"])||"button"in e&&2!==e.button?null:t.nextImage()},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:t.prevImage()}]}},[t.getWindowWidth<=1281?l("img",{staticClass:"bg",attrs:{src:"/gallery/1280Gallery.jpg",alt:"big"}}):t.getWindowWidth>1280&&t.getWindowWidth<1681?l("img",{staticClass:"bg",attrs:{id:"bg",src:"/gallery/1680Gallery.jpg",alt:"big"}}):t.getWindowWidth>1681&&t.getWindowWidth<1921?l("img",{staticClass:"bg",attrs:{src:"/gallery/1920Gallery.jpg",alt:"big"}}):t.getWindowWidth>=1921&&t.getWindowWidth<2800?l("img",{staticClass:"bg",attrs:{src:"/gallery/2048Gallery.jpg",alt:"big"}}):l("img",{staticClass:"bg",attrs:{src:"/gallery/4kGallery.jpg",alt:"big"}}),t._v(" "),t.isCarouselVisible?l("div",{staticClass:"modal fade show d-block",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[l("div",{staticClass:"modal-dialog",staticStyle:{"z-index":"9999"},attrs:{role:"document"}},[l("div",{staticClass:"modal-content position-relative"},[l("div",{staticClass:"modal-body d-flex justify-content-center align-items-center"},[l("carousel",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hideCarousel,expression:"hideCarousel"}],staticClass:"pt-5 mt-2 carousel_unique",attrs:{nav:!0,dots:!1,items:1,startPosition:t.currentSlideIndex,mouseDrag:!1,loop:!0}},[[l("template",{slot:"prev"},[l("span",{staticClass:"prev"})]),t._v(" "),t._l(t.images,(function(image){return l("div",{key:image.id,staticClass:"position-relative"},[l("img",{attrs:{src:image.image,alt:"img"}}),t._v(" "),l("div",{staticClass:"closer",on:{click:t.hideCarousel}})])})),t._v(" "),l("template",{slot:"next"},[l("span",{staticClass:"next"})])]],2)],1),t._v(" "),l("div",{staticClass:"modal-footer"})])])]):t._e(),t._v(" "),l("div",{staticClass:"row gallery py-5 px-5"},t._l(t.images,(function(image,i){return l("figure",{key:image.id,staticClass:"col-md-3 mt-3"},[l("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.showCarousel(i)}}},[l("img",{staticClass:"img-fluid picture",attrs:{alt:"picture",src:image.image}})])])})),0)])}),[],!1,null,"a362b57c",null);e.default=component.exports}}]);