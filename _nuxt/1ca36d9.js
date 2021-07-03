(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3,4,5],{197:function(t,e,l){"use strict";l.r(e);var o=l(35),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("header",{staticClass:"header"},[l("div",{staticClass:"container p-5 mx-auto flex flex-col md:flex-row justify-center items-center"},[l("h1",{staticClass:"font-noto-sans font-bold text-4xl md:text-5xl"},[t._v("Photo Gallery")])]),t._v(" "),l("div",{staticClass:"container mx-auto max-w-sm"},[l("hr",{staticClass:"border border-black"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:l(197).default})},198:function(t,e,l){"use strict";l.r(e);var o=l(35),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container py-10 sm:py-20 mx-auto"},[e("hr",{staticClass:"border border-black"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:l(198).default})},199:function(t,e,l){"use strict";l.r(e);var o={data:function(){return{gallery:".gallery",activeEl:null,loaded:!1,galleryItems:[{title:"Arches National Park, UT",image_url:"./img/arches-utah-1.jpg"},{title:"Squamish, BC",image_url:"./img/squamish-bc-2.jpg"},{title:"Bonneville Salt Flats, UT",image_url:"./img/bonneville-utah-1.jpg"},{title:"Garden of the Gods - Colorado Springs, CO",image_url:"./img/garden-of-the-gods-co-1.jpg"},{title:"Seattle, WA",image_url:"./img/seattle-wa-1.jpg"},{title:"Cumberland Trail - Chattanooga, TN",image_url:"./img/chattanooga-1.jpg"},{title:"Arabia Mountain, GA",image_url:"./img/arabia-mt-1.jpg"},{title:"San Francisco, CA",image_url:"./img/san-fran-1.jpg"},{title:"Squamish, BC",image_url:"./img/squamish-bc-1.jpg"},{title:"Arches National Park, UT",image_url:"./img/arches-utah-2.jpg"},{title:"Seattle, WA",image_url:"./img/seattle-wa-2.jpg"},{title:"Seal Rock, OR",image_url:"./img/seal-rock-oregon-1.jpg"},{title:"Boulder Mountain Park - Boulder, CO",image_url:"./img/boulder-co-1.jpg"},{title:"Canby, OR",image_url:"./img/canby-or-1.jpg"},{title:"Willamette National Forest - Blue River, OR",image_url:"./img/willamette-national-forest-1.jpg"}]}},methods:{onLoaded:function(){this.loaded=!0},activateGallery:function(t){var e=document.querySelector(this.gallery).offsetTop;window.scrollTo(0,e-20),this.activeEl=t},closeGallery:function(){this.activeEl=null},goPrev:function(t){var e=this.galleryItems.length;this.activeEl=t<1?e-1:t-1},goNext:function(t){var e=this.galleryItems.length;this.activeEl=t===e-1?0:t+1}}},r=l(35),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"gallery relative px-2"},[l("div",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],staticClass:"gallery__buttons container mx-auto grid grid-cols-2 md:grid-cols-3 gap-2",class:null==t.activeEl?"":" hidden",on:{load:t.onLoaded}},t._l(t.galleryItems,(function(e,o){return l("button",{key:o,staticClass:"overflow-hidden focus:outline-custom relative border-2 md:border-4 border-transparent hover:border-black transition duration-500",attrs:{"aria-label":"Open Expanded Photo of "+e.title},on:{click:function(e){return t.activateGallery(o)}}},[l("img",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],attrs:{src:e.image_url,alt:e.title+" Button Image"},on:{load:t.onLoaded}}),t._v(" "),l("svg",{staticClass:"h-4 w-4 sm:h-6 sm:w-6 absolute right-1 bottom-1 bg-black bg-opacity-70 rounded text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[l("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"}})])])})),0),t._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],staticClass:"gallery__expanded container mx-auto relative",on:{load:t.onLoaded}},t._l(t.galleryItems,(function(e,o){return l("div",{key:o,staticClass:"gallery__photo-wrap bg-black pb-14",class:t.activeEl!=o||null==t.activeEl?"hidden":"",attrs:{"aria-hidden":t.activeEl!=o||null==t.activeEl?"true":"false"}},[l("div",{staticClass:"container w-full bg-black bg-opacity-80 flex flex-row justify-between py-3 px-2 sm:px-4"},[l("h2",{staticClass:"font-noto-sans max-w-sm sm:max-w-full pr-3 text-md sm:text-lg text-white leading-tight flex flex-row items-center"},[l("svg",{staticClass:"h-6 w-6 mr-1 flex-shrink-0",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[l("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}}),t._v(" "),l("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"}})]),t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),l("button",{staticClass:"text-white p-0 focus:outline-custom2",attrs:{"aria-label":"Close Photo of "+e.title},on:{click:t.closeGallery}},[l("svg",{staticClass:"h-10 w-10",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[l("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"}})])])]),t._v(" "),l("img",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],staticClass:"w-full",attrs:{alt:e.title,src:e.image_url},on:{load:t.onLoaded}}),t._v(" "),l("div",{staticClass:"gallery__expanded-controls container absolute bottom-3 sm:inset-y-2/4 flex flex-row items-center justify-between px-2 w-full"},[l("button",{staticClass:"bg-black bg-opacity-70 rounded text-white focus:outline-custom2 disabled:opacity-40",attrs:{"aria-label":"Go to the Previous Expanded Photo"},on:{click:function(e){return t.goPrev(o)}}},[l("svg",{staticClass:"h-8 lg:h-10 w-8 lg:w-10",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z","clip-rule":"evenodd"}})])]),t._v(" "),l("button",{staticClass:"bg-black bg-opacity-70 rounded text-white focus:outline-custom2",class:o.count,attrs:{"aria-label":"Go to the Next Expanded Photo"},on:{click:function(e){return t.goNext(o)}}},[l("svg",{staticClass:"h-8 lg:h-10 w-8 lg:w-10",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z","clip-rule":"evenodd"}})])])])])})),0),t._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:!t.loaded,expression:"!loaded"}],staticClass:"gallery__loading container px-4 overflow-hidden flex items-start justify-center mx-auto w-full max-w-full h-screen"},[l("svg",{staticClass:"animate-spin mt-5 sm:mt-10 w-40 sm:w-80 max-w-full text-black",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[l("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),t._v(" "),l("path",{staticClass:"opacity-75",attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})])])])}),[],!1,null,null,null);e.default=component.exports},200:function(t,e,l){"use strict";l.r(e);var o=l(35),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"introduction"},[l("div",{staticClass:"container font-open-sans p-5 max-w-xl mx-auto text-center"},[l("p",{staticClass:"text-lg md:text-xl"},[t._v("\n      Hello and welcome to my photo gallery. See below for some of my outdoor photography from various travels and road-trips throughout the years.\n    ")])])])}],!1,null,null,null);e.default=component.exports},201:function(t,e,l){"use strict";l.r(e);var o=l(35),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("main",{staticClass:"gallery-main-container"},[l("Header"),t._v(" "),l("Intro"),t._v(" "),l("Gallery"),t._v(" "),l("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:l(197).default,Intro:l(200).default,Gallery:l(199).default,Footer:l(198).default})}}]);