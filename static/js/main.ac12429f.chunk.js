(this.webpackJsonphb=this.webpackJsonphb||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(1),i=a.n(r),c=a(7),n=a.n(c),o=(a(17),a(18),{SET_DIALOG:"SET_DIALOG",ADD_ITEM_TO_BASKET:"ADD_ITEM_TO_BASKET",REMOVE_ITEM_FROM_BASKET:"REMOVE_ITEM_FROM_BASKET",SET_SEARCH_INPUT:"SET_SEARCH_INPUT",SET_SIDEBAR_FILTER:"SET_SIDEBAR_FILTER",SET_CURRENT_PAGE:"SET_CURRENT_PAGE"}),s=a(5),d=a(2),l=(a(25),a(0)),u=function(e){var t=e.item,a=e.removeItem;return Object(l.jsxs)("div",{className:"basket__basketItem",children:[Object(l.jsx)("div",{className:"basket__basketItem__imgContainer",children:Object(l.jsx)("img",{className:"basket__basketItem__img",src:"".concat(".","/imgs/").concat(t.imgSrc),alt:"basketItem"})}),Object(l.jsxs)("div",{className:"basket__basketItem__info",children:[Object(l.jsx)("p",{className:"basket__basketItem__info__title",children:t.title}),Object(l.jsx)("button",{onClick:function(){return a(t.id,t.title)},className:"basket__basketItem__info__btn",children:"Kald\u0131r"})]})]})},b=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),a=t[0],i=t[1],c=Object(d.c)((function(e){return e.basketItems})),n=Object(d.c)((function(e){return e.isModalOpen})),b=Object(d.b)(),j=Object(r.useRef)();function m(){b({type:o.SET_DIALOG,payload:{dialog:{},isModalOpen:!1}})}function p(e,t){b({type:o.SET_DIALOG,payload:{isModalOpen:!0,dialog:{description:t,confirm:function(){b({type:o.REMOVE_ITEM_FROM_BASKET,payload:e}),m()},reject:m}}})}return Object(r.useEffect)((function(){function e(e){!a||n||j.current.contains(e.target)||"basket__basketItem__info__btn"===e.target.className||i(!1)}return window.addEventListener("click",e),function(){return window.removeEventListener("click",e)}}),[a,n]),Object(l.jsxs)("div",{className:"basket",ref:j,children:[Object(l.jsx)("div",{className:"basket__inner",onClick:function(){i((function(e){return!e}))},style:{borderBottom:a?"0":"1px solid #B0B0B0"},children:Object(l.jsx)("p",{children:"Sepetim"})}),Object(l.jsx)("div",{className:"basket__badge",children:Object(l.jsx)("p",{children:c.length})}),a&&Object(l.jsx)("div",{className:"basket__rectangle",children:c.map((function(e,t){return Object(l.jsx)(u,{item:e,removeItem:p},t)}))})]})},j=(a(27),"".concat(".","/imgs")),m=function(){var e=Object(d.c)((function(e){return e.searchInput})),t=Object(d.b)();return Object(l.jsxs)("header",{className:"header","data-testid":"Header-test",children:[Object(l.jsx)("img",{className:"header__logo",src:"".concat(j,"/logo.svg"),alt:"logo"}),Object(l.jsxs)("div",{className:"header__searchBar",children:[Object(l.jsx)("img",{src:"".concat(j,"/searchIcon.svg"),alt:"search"}),Object(l.jsx)("input",{type:"text",name:"searchInput",placeholder:"25 milyon'dan fazla \xfcr\xfcn i\xe7erisinde ara",value:e,onChange:function(e){t({type:o.SET_SEARCH_INPUT,payload:e.target.value})},"data-testid":"input-test"})]}),Object(l.jsx)(b,{})]})},p=a(3),T=(a(28),function(e){var t=e.filter,a=e.title,r=e.selectedFilter,i=e.selectFilter,c=e.products,n={};c.forEach((function(e){n[e[t]]=n[e[t]]+1||1}));for(var o=[],d=0,u=Object.entries(n);d<u.length;d++){var b=Object(s.a)(u[d],2),j=b[0],m=b[1];o.push({name:j,count:m})}return Object(l.jsxs)("div",{className:"sidebar__element",children:[Object(l.jsx)("p",{className:"sidebar__element__title",children:a}),Object(l.jsx)("ul",{children:o.map((function(e,a){return Object(l.jsxs)("li",{onClick:function(){return i(t,e.name)},style:{color:e.name===r?"var(--orange)":"#646464"},children:[e.name," (",e.count,")"]},a)}))})]})}),g=function(e){var t=e.filter,a=e.title,r=e.selectedFilter,i=e.selectFilter;return Object(l.jsxs)("div",{className:"sidebar__element",children:[Object(l.jsx)("p",{className:"sidebar__element__title",children:a}),Object(l.jsx)("ul",{children:["En D\xfc\u015f\xfck Fiyat","En Y\xfcksek Fiyat","En Yeniler (A>Z)","En Yeniler (Z>A)"].map((function(e,a){return Object(l.jsx)("li",{onClick:function(){return i(t,e)},style:{color:e===r?"var(--orange)":"#646464"},children:e},a)}))})]})},f=function(){var e=Object(d.c)((function(e){return e})),t=e.sidebarFilters,a=e.products,r=Object(d.b)();function i(e,a){var i=Object(p.a)({},t);i[e]=i[e]===a?"":a,r({type:o.SET_SIDEBAR_FILTER,payload:i})}return Object(l.jsxs)("aside",{className:"sidebar",children:[Object(l.jsx)(T,{filter:"color",title:"Renk",selectedFilter:t.color,selectFilter:i,products:a||[]}),Object(l.jsx)(g,{filter:"order",title:"S\u0131ralama",selectedFilter:t.order,selectFilter:i,products:a||[]}),Object(l.jsx)(T,{filter:"brand",title:"Marka",selectedFilter:t.brand,selectFilter:i,products:a||[]})]})},O=(a(29),function(){var e=Object(d.c)((function(e){return e})),t=e.searchInput,a=e.sidebarFilters,r=Object(d.b)();return Object(l.jsxs)("div",{className:"subheader",children:[Object(l.jsxs)("div",{className:"subheader__col1",children:[Object(l.jsx)("p",{className:"subheader__col1__p1",children:t}),Object(l.jsxs)("p",{className:"subheader__col1__p2",children:["Aranan Kelime : ",Object(l.jsx)("span",{"data-testid":"display-input",children:t})]})]}),Object(l.jsx)("div",{className:"subheader__col2",children:Object(l.jsxs)("select",{name:"cars",id:"cars",placeholder:"S\u0131ralama",onChange:function(e){var t=Object(p.a)({},a);t.order=e.target.value,r({type:o.SET_SIDEBAR_FILTER,payload:t})},value:a.order,children:[Object(l.jsx)("option",{value:"S\u0131ralama",disabled:!0,children:"S\u0131ralama"}),Object(l.jsx)("option",{value:"En D\xfc\u015f\xfck Fiyat",children:"En D\xfc\u015f\xfck Fiyat"}),Object(l.jsx)("option",{value:"En Y\xfcksek Fiyat",children:"En Y\xfcksek Fiyat"}),Object(l.jsx)("option",{value:"En Yeniler (A>Z)",children:"En Yeniler (A>Z)"}),Object(l.jsx)("option",{value:"En Yeniler (Z>A)",children:"En Yeniler (Z>A)"})]})})]})}),_=(a(30),function(){var e=Object(d.c)((function(e){return e.dialog})),t=Object(d.c)((function(e){return e.isModalOpen}));return window.document.body.style="overflow-y : ".concat(t?"hidden":"overlay"),t&&Object(l.jsx)("div",{className:"backdrop",children:Object(l.jsxs)("div",{className:"dialogBox",children:[Object(l.jsx)("p",{className:"dialogBox__question",children:"\xdcr\xfcn\xfc silmek istedi\u011finize emin misiniz?"}),Object(l.jsx)("hr",{}),Object(l.jsx)("p",{className:"dialogBox__text",children:e.description}),Object(l.jsxs)("div",{className:"dialogBox__buttons",children:[Object(l.jsx)("button",{className:"dialog__btn confirm",onClick:e.confirm,children:"EVET"}),Object(l.jsx)("button",{className:"dialog__btn reject",onClick:e.reject,children:"HAYIR"})]})]})})}),G=a(4),S=[{id:1,title:"Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...",brand:"Apple",color:"Siyah",price:124,discoundPercentage:"12",imgSrc:"i1.svg",createdDate:new Date("Tue Nov 11 2021 23:23:46 GMT+0300 (GMT+03:00)")},{id:2,title:"Apple iPhone 13",brand:"Apple",color:"Sar\u0131",price:900,discoundPercentage:"2",imgSrc:"i2.svg",createdDate:new Date("Tue Nov 12 2021 23:23:46 GMT+0300 (GMT+03:00)")},{id:12,title:"Reeder P13 Blue 16 GB 3 GB RAM (Reeder T\xfcrkiye Garantili)",brand:"Reeder",color:"Mavi",price:1599,discoundPercentage:"41",imgSrc:"format_webp.jfif",createdDate:new Date("Tue Nov 22 2021 23:23:46 GMT+0300 (GMT+03:00)")},{id:13,title:"Poco X3 Pro 128 GB (Poco T\xfcrkiye Garantili)",brand:"Poco",color:"Siyah",price:4099,discoundPercentage:"10",imgSrc:"Poco.jfif",createdDate:new Date("Tue Nov 27 2021 23:23:46 GMT+0300 (GMT+03:00)")},{id:14,title:"Samsung Galaxy M31s 128 GB (Samsung T\xfcrkiye Garantili)",brand:"Samsung",color:"Mavi",price:3599,discoundPercentage:"6",imgSrc:"Samsung.jfif",createdDate:new Date("Tue Nov 24 2021 23:23:46 GMT+0300 (GMT+03:00)")},{id:15,title:"Samsung Galaxy A52 128 GB (Samsung T\xfcrkiye Garantili)",brand:"Samsung",color:"Mavi",price:4999,discoundPercentage:"6",imgSrc:"Samsunga52.jfif",createdDate:new Date("Tue Nov 25 2021 23:23:46 GMT+0300 (GMT+03:00)")},{id:16,title:"POCO F3 128 GB (Poco T\xfcrkiye Garantili",brand:"Poco",color:"Siyah",price:6e3,discoundPercentage:"2",imgSrc:"pocof3.jfif",createdDate:new Date("Tue Nov 26 2021 23:23:46 GMT+0300 (GMT+03:00)")},{id:17,title:"Samsung Galaxy A72 128 GB (Samsung T\xfcrkiye Garantili)",brand:"Samsung",color:"Mor",price:5999,discoundPercentage:"5",imgSrc:"samsunga72.jfif",createdDate:new Date("Tue Nov 26 2021 23:23:46 GMT+0300 (GMT+03:00)")},{id:18,title:"Xiaomi Redmi 9c 64 GB (Xiaomi T\xfcrkiye Garantili)",brand:"Xiaomi",color:"Turuncu",price:2699,discoundPercentage:"19",imgSrc:"redmi9c.jfif",createdDate:new Date("Tue Nov 27 2021 23:23:46 GMT+0300 (GMT+03:00)")},{id:19,title:"Xiaomi Redmi Note 9 Pro 128 GB (Xiaomi T\xfcrkiye Garantili)",brand:"Xiaomi",color:"Ye\u015fil",price:2699,discoundPercentage:"19",imgSrc:"redminote9pro.jfif",createdDate:new Date("Tue Nov 28 2021 23:23:46 GMT+0300 (GMT+03:00)")},{id:20,title:"Xiaomi Redmi Note 9 Pro 128 GB (Xiaomi T\xfcrkiye Garantili)",brand:"Xiaomi",color:"Turuncu",price:2699,discoundPercentage:"19",imgSrc:"redminote9pro.jfif",createdDate:new Date("Tue Nov 28 2021 23:23:46 GMT+0300 (GMT+03:00)")},{id:20,title:"Xiaomi Redmi  9T Pro 128 GB (Xiaomi T\xfcrkiye Garantili)",brand:"Xiaomi",color:"Mavi",price:3057,discoundPercentage:"2",imgSrc:"redmi9t.jfif",createdDate:new Date("Tue Nov 28 2021 23:23:46 GMT+0300 (GMT+03:00)")},{id:21,title:"Xiaomi Mi 11 Lite 128 GB (Xiaomi T\xfcrkiye Garantili)",brand:"Xiaomi",color:"Pembe",price:3057,discoundPercentage:"2",imgSrc:"mi11lite.jfif",createdDate:new Date("Tue Nov 28 2021 12:23:46 GMT+0300 (GMT+03:00)")},{id:21,title:"Xiaomi Mi Note 10 Lite 64 GB (Xiaomi T\xfcrkiye Garantiili)",brand:"Xiaomi",color:"Siyah",price:4239,discoundPercentage:"10",imgSrc:"mi10.jfif",createdDate:new Date("Tue Nov 28 2021 15:23:46 GMT+0300 (GMT+03:00)")},{id:22,title:"Poco X3 Pro 8 GB Ram 256 GB (Poco T\xfcrkiye Garantili)",brand:"Poco",color:"Mavi",price:4399,discoundPercentage:"7",imgSrc:"pocox3.jfif",createdDate:new Date("Tue Nov 28 2021 15:23:46 GMT+0300 (GMT+03:00)")},{id:23,title:"Poco X3 Pro 8 GB Ram 256 GB (Poco T\xfcrkiye Garantili)",brand:"Poco",color:"Mavi",price:4399,discoundPercentage:"7",imgSrc:"pocox3.jfif",createdDate:new Date("Tue Nov 28 2021 15:23:46 GMT+0300 (GMT+03:00)")},{id:24,title:"POCO X3 NFC 128 GB (POCO T\xfcrkiye Garantili)",brand:"Poco",color:"Gri",price:4224,discoundPercentage:"2",imgSrc:"x3nfc.jfif",createdDate:new Date("Tue Nov 28 2021 15:24:46 GMT+0300 (GMT+03:00)")},{id:25,title:"POCO M3 Pro 5G 6 GB 128 GB (POCO T\xfcrkiye Garantili)",brand:"Poco",color:"Sar\u0131",price:3899,discoundPercentage:"2",imgSrc:"m3pro.jfif",createdDate:new Date("Tue Nov 28 2021 14:23:46 GMT+0300 (GMT+03:00)")},{id:26,title:"POCO F3 128 GB (Poco T\xfcrkiye Garantili)",brand:"Poco",color:"Mavi",price:5999,discoundPercentage:"10",imgSrc:"f3.jfif",createdDate:new Date("Tue Nov 28 2021 15:23:36 GMT+0300 (GMT+03:00)")},{id:27,title:"Poco X3 Pro 8 GB Ram 256 GB (Poco T\xfcrkiye Garantili)",brand:"Poco",color:"Mavi",price:4399,discoundPercentage:"7",imgSrc:"pocox3.jfif",createdDate:new Date("Tue Nov 28 2021 15:23:46 GMT+0300 (GMT+03:00)")},{id:28,title:"POCO F2 Pro 128 GB (POCO T\xfcrkiye Garantili)",brand:"Poco",color:"Beyaz",price:6999,discoundPercentage:"28",imgSrc:"f2.jfif",createdDate:new Date("Tue Nov 10 2021 15:23:46 GMT+0300 (GMT+03:00)")},{id:29,title:"POCO M3 64 GB (POCO T\xfcrkiye Garantili)",brand:"Poco",color:"Sar\u0131",price:2899,discoundPercentage:"2",imgSrc:"m3.jfif",createdDate:new Date("Tue Nov 28 2021 15:23:46 GMT+0300 (GMT+03:00)")},{id:30,title:"Reeder P13 Blue Max 2021 128 GB 4 GB RAM (Reeder T\xfcrkiye Garantili)",brand:"Reeder",color:"Mavi",price:2499,discoundPercentage:"40",imgSrc:"p13.jfif",createdDate:new Date("Tue Nov 05 2021 15:23:46 GMT+0300 (GMT+03:00)")},{id:31,title:"Reeder P13 Blue Max Pro 8 GB Ram 128GB (Reeder T\xfcrkiye Garantili)",brand:"Reeder",color:"Beyaz",price:2899,discoundPercentage:"34",imgSrc:"p13blue.jfif",createdDate:new Date("Tue Nov 19 2021 15:23:46 GMT+0300 (GMT+03:00)")},{id:32,title:"Reeder P13 Blue 32 GB 2021 (Reeder T\xfcrkiye Garantili)",brand:"Reeder",color:"Beyaz",price:1499,discoundPercentage:"10",imgSrc:"p1332.jfif",createdDate:new Date("Tue Nov 28 2021 15:23:46 GMT+0300 (GMT+03:00)")},{id:33,title:"Reeder P13 Blue Koruyucu S\u0131l\u0131kon K\u0131l\u0131f",brand:"Reeder",color:"Beyaz",price:39.99,discoundPercentage:"50",imgSrc:"kilif.jfif",createdDate:new Date("Tue Nov 28 2021 16:23:46 GMT+0300 (GMT+03:00)")},{id:34,title:"Samsung Galaxy M12 128 GB (Samsung T\xfcrkiye Garantili)",brand:"Samsung",color:"Ye\u015fil",price:2799,discoundPercentage:"12",imgSrc:"m12.jfif",createdDate:new Date("Tue Nov 28 2020   15:23:46 GMT+0300 (GMT+03:00)")},{id:35,title:"Samsung Galaxy S20 FE 128 GB Snapdragon (Samsung T\xfcrkiye Garantili)",brand:"Samsung",color:"Ye\u015fil",price:5835,discoundPercentage:"2",imgSrc:"s20.jfif",createdDate:new Date("Tue Nov 21 2021 15:24:46 GMT+0300 (GMT+03:00)")},{id:35,title:"Samsung Galaxy S21 5G 128 GB (Samsung T\xfcrkiye Garantili)",brand:"Samsung",color:"Gri",price:9999,discoundPercentage:"1",imgSrc:"s21.jfif",createdDate:new Date("Tue Nov 20 2021 15:24:46 GMT+0300 (GMT+03:00)")},{id:35,title:"Samsung Galaxy Note 20 256 GB (Samsung T\xfcrkiye Garantili)",brand:"Samsung",color:"Bronz",price:9749,discoundPercentage:"2",imgSrc:"note20.jfif",createdDate:new Date("Tue Nov 20 2021 15:24:46 GMT+0300 (GMT+03:00)")},{id:35,title:"Samsung Galaxy A22 64 GB (Samsung T\xfcrkiye Garantili)",brand:"Samsung",color:"Mor",price:3299,discoundPercentage:"6",imgSrc:"a22.jfif",createdDate:new Date("Tue Nov 19 2021 15:24:46 GMT+0300 (GMT+03:00)")},{id:36,title:"iPhone 13 Pro Max 128 GB",brand:"Apple",color:"G\xfcm\xfc\u015f",price:23899,discoundPercentage:"2",imgSrc:"13promax.jfif",createdDate:new Date("Tue Nov 19 2021 15:24:46 GMT+0300 (GMT+03:00)")},{id:37,title:"iPhone 13 Pro Max 256 GB",brand:"Apple",color:"Mavi",price:26275,discoundPercentage:"2",imgSrc:"13promax256.jfif",createdDate:new Date("Tue Nov 19 2021 14:24:46 GMT+0300 (GMT+03:00)")},{id:38,title:"iPhone 12 Pro Max 256 GB",brand:"Apple",color:"Mavi",price:17999,discoundPercentage:"1",imgSrc:"12promax.jfif",createdDate:new Date("Tue Nov 19 2021 14:25:46 GMT+0300 (GMT+03:00)")},{id:39,title:"iPhone 12 Mini 64 GB",brand:"Apple",color:"Mavi",price:9999,discoundPercentage:"2",imgSrc:"12mini.jfif",createdDate:new Date("Tue Nov 19 2021 14:24:46 GMT+0300 (GMT+03:00)")},{id:40,title:"iPhone XR 64 GB",brand:"Apple",color:"Sar\u0131",price:7e3,discoundPercentage:"1",imgSrc:"xr.jfif",createdDate:new Date("Tue Nov 14 2021 14:24:26 GMT+0300 (GMT+03:00)")}],M=(a(31),function(e){var t=e.product,a=e.purchasable,i=Object(r.useState)(!1),c=Object(s.a)(i,2),n=c[0],u=c[1],b=Object(d.b)(),j=t.title,m=t.brand,p=t.color,T=t.price,g=t.discoundPercentage,f=t.imgSrc,O=(T-T*g/100).toFixed(2);return Object(l.jsxs)("div",{className:"product",onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)},children:[Object(l.jsx)("div",{className:"product__img__container",children:Object(l.jsx)("img",{className:"product__img",src:"."+"/imgs/".concat(f),alt:"product"})}),Object(l.jsxs)("div",{style:{opacity:n?0:1},children:[Object(l.jsx)("p",{className:"product__title",children:j}),Object(l.jsxs)("div",{className:"product__filters",children:[Object(l.jsxs)("p",{className:"product__brand",children:[Object(l.jsx)("strong",{children:"Marka: "}),m]}),Object(l.jsxs)("p",{className:"product__color",children:[Object(l.jsx)("strong",{children:"Renk: "}),p]})]}),Object(l.jsxs)("div",{className:"product__priceWrapper",children:[Object(l.jsxs)("p",{className:"product__price__discounted",children:[O," TL"]}),Object(l.jsxs)("p",{className:"product__price",children:[T," TL ",Object(l.jsxs)("span",{children:["%",g]})]})]})]}),a?Object(l.jsx)("button",{onClick:function(){b({type:o.ADD_ITEM_TO_BASKET,payload:t})},className:"product__add",style:{opacity:n?1:0},children:"Sepete Ekle"}):Object(l.jsx)("button",{className:"product__add disabled",style:{opacity:n?1:0},children:"Bu \xfcr\xfcn\xfc sepete ekleyemezsiniz."})]})});a(32);function P(e,t){return(e-e*t/100).toFixed(2)}var v=function(){var e=Object(d.c)((function(e){return e})),t=e.basketItems,a=e.searchInput,r=e.sidebarFilters,i=e.currentPage,c=e.productPerPage,n=i*c,o=n-c,s=Object(G.a)(S).slice(o,n);switch(a.length>=2&&(s=s.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())}))),r.color&&(s=s.filter((function(e){return r.color===e.color}))),r.brand&&(s=s.filter((function(e){return r.brand===e.brand}))),r.order){case"En D\xfc\u015f\xfck Fiyat":s.sort((function(e,t){return P(t.price,t.discoundPercentage)-P(e.price,e.discoundPercentage)})).reverse();break;case"En Y\xfcksek Fiyat":s.sort((function(e,t){return P(t.price,t.discoundPercentage)-P(e.price,e.discoundPercentage)}));break;case"En Yeniler (A>Z)":s.sort((function(e,t){return new Date(t.createdDate)-new Date(e.createdDate)}));break;case"En Yeniler (Z>A)":s.sort((function(e,t){return new Date(t.createdDate)-new Date(e.createdDate)})).reverse()}return Object(l.jsx)("div",{className:"products",children:Object(l.jsx)("div",{className:"products__productlist",children:s.map((function(e,a){var r=t&&t.some((function(t){return t.id===e.id}));return Object(l.jsx)(M,{product:e,purchasable:!r},a)}))})})},h=(a(33),function(){var e=Object(d.c)((function(e){return e})),t=e.productPerPage,a=e.currentPage,r=e.products,i=Object(d.b)(),c=Object(G.a)(Array(Math.ceil(r.length/t)).keys());return Object(l.jsx)("div",{className:"pagination","data-testid":"pagination-test",children:c.map((function(e){return Object(l.jsx)("p",{onClick:function(){return function(e){i({type:o.SET_CURRENT_PAGE,payload:e})}(e+1)},className:a===e+1?"selected":"","data-testid":"pagination-num-test-".concat(e+1),children:e+1},e+1)}))})});var x=function(){return Object(l.jsxs)("div",{className:"app","data-testid":"app-test",children:[Object(l.jsx)(_,{}),Object(l.jsx)(m,{}),Object(l.jsx)(O,{}),Object(l.jsxs)("main",{className:"app__content",children:[Object(l.jsx)(f,{}),Object(l.jsx)(v,{})]}),Object(l.jsx)(h,{})]})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,35)).then((function(t){var a=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),r(e),i(e),c(e),n(e)}))},y=a(12),N=JSON.parse(localStorage.getItem("basketItems")),k=JSON.parse(localStorage.getItem("products"));k||localStorage.setItem("products",JSON.stringify(S));var E={products:k||S,basketItems:N||[],isModalOpen:!1,searchInput:"",sidebarFilters:{color:"",order:"S\u0131ralama",brand:""},currentPage:1,productPerPage:12,dialog:{description:"foo bar",confirm:function(){},reject:function(){}}};var B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.ADD_ITEM_TO_BASKET:return localStorage.setItem("basketItems",JSON.stringify([].concat(Object(G.a)(e.basketItems),[t.payload]))),Object(p.a)(Object(p.a)({},e),{},{basketItems:[].concat(Object(G.a)(e.basketItems),[t.payload])});case o.REMOVE_ITEM_FROM_BASKET:var a=Object(G.a)(e.basketItems).filter((function(e){return e.id!==t.payload}));return localStorage.setItem("basketItems",JSON.stringify(a)),Object(p.a)(Object(p.a)({},e),{},{basketItems:a});case o.SET_DIALOG:return Object(p.a)(Object(p.a)({},e),{},{isModalOpen:t.payload.isModalOpen,dialog:t.payload.dialog});case o.SET_ALLPRODUCTS:return Object(p.a)(Object(p.a)({},e),{},{allProducts:t.payload,filteredProducts:t.payload});case o.SET_SEARCH_INPUT:return Object(p.a)(Object(p.a)({},e),{},{searchInput:t.payload});case o.SET_SIDEBAR_FILTER:return Object(p.a)(Object(p.a)({},e),{},{sidebarFilters:t.payload});case o.SET_CURRENT_PAGE:return Object(p.a)(Object(p.a)({},e),{},{currentPage:t.payload});default:return e}},I=Object(y.a)(B);n.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(d.a,{store:I,children:Object(l.jsx)(x,{})})}),document.getElementById("root")),D()}],[[34,1,2]]]);
//# sourceMappingURL=main.ac12429f.chunk.js.map