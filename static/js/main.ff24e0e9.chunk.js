(this["webpackJsonpdok-test"]=this["webpackJsonpdok-test"]||[]).push([[0],{1:function(t,a,e){t.exports={products:"ProductsList_products__2Fr1E",productCard:"ProductsList_productCard__3CMWs",productPhoto:"ProductsList_productPhoto__12Tjx",addToCard:"ProductsList_addToCard__3Yxph",brandName:"ProductsList_brandName__1lNhG",productTitle:"ProductsList_productTitle__3JqX2",productRating:"ProductsList_productRating__3X1k0",raiting:"ProductsList_raiting__1KaZS",recomendation:"ProductsList_recomendation__1_ZEF",productCardBottom:"ProductsList_productCardBottom__Bphci",priceWrap:"ProductsList_priceWrap__2-fvH",price:"ProductsList_price__395Fg",value:"ProductsList_value__1pr7P",available:"ProductsList_available__WpDX0",onOrder:"ProductsList_onOrder__3Jc1M",buyBtn:"ProductsList_buyBtn__1Wj0j"}},13:function(t,a,e){t.exports=e.p+"static/media/favorite.4fc31a4b.svg"},14:function(t,a,e){t.exports=e.p+"static/media/oil.721036e7.jpg"},16:function(t,a,e){t.exports=e(43)},21:function(t,a,e){},22:function(t,a,e){},43:function(t,a,e){"use strict";e.r(a);var r=e(0),c=e.n(r),n=e(4),i=e.n(n),o=(e(21),e(22),function(t){var a=t.title,e=t.children;return c.a.createElement("section",null,c.a.createElement("h2",{className:"section-title"},a),e)}),l=e(5),d=e.n(l),u={dots:!1,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,arrow:!0,centerPadding:"43px",responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1,arrows:!1}}]},_=e(1),s=e.n(_),p=e(13),m=e.n(p),g=e(14),b=e.n(g),v=e(15),E=e.n(v),f=(e(42),"https://dok.dbroker.com.ua/"),h=function(t,a){var e=t.brand_name,r=t.product_title,n=t.available,i=t.rating,o=t.url_direct,l=t.rating_count,d=t.price,u=t.product_image_alt;return c.a.createElement("div",{key:a,className:s.a.productCard},c.a.createElement("span",{className:s.a.productPhoto},c.a.createElement("a",{href:"".concat(f).concat(o)},c.a.createElement("img",{src:b.a,alt:u})),c.a.createElement("button",{className:s.a.addToCard},c.a.createElement("img",{src:m.a}))),c.a.createElement("a",{href:"".concat(f).concat(o)},c.a.createElement("span",{className:s.a.brandName},e)),c.a.createElement("a",{href:"".concat(f).concat(o)},c.a.createElement("span",{className:s.a.productTitle},r)),c.a.createElement("span",{className:s.a.productRating},c.a.createElement("span",{className:s.a.raiting},i>0?c.a.createElement(E.a,{rating:i,total:5,interactive:!1}):null),c.a.createElement("span",{className:s.a.recomendation},l>0?"(".concat(l," \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438)"):null)),c.a.createElement("a",{href:"".concat(f).concat(o),className:s.a.productCardBottom},c.a.createElement("div",{className:s.a.priceWrap},c.a.createElement("div",{className:s.a.price},d,c.a.createElement("span",{className:s.a.value},"\u0433\u0440\u043d")),c.a.createElement("span",{className:s.a.available},n>0?"\u0415\u0441\u0442\u044c \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438":c.a.createElement("span",{className:s.a.onOrder},"\u041f\u043e\u0434 \u0437\u0430\u043a\u0430\u0437, 13 \u0434\u043d\u0435\u0439"))),c.a.createElement("a",{href:"".concat(f).concat(o),className:s.a.buyBtn},"\u041a\u0443\u043f\u0438\u0442\u044c")))},N=function(t){var a=t.cards;return c.a.createElement(d.a,Object.assign({},u,{className:s.a.products}),a.map((function(t,a){var e=t.brand_name,r=t.product_title,n=t.available,i=t.rating,o=t.url_direct,l=t.rating_count,d=t.price,u=t.product_image_alt;return c.a.createElement(h,{product_id:a,brand_name:e,product_title:r,available:n,rating:i,url_direct:o,rating_count:l,price:d,product_image_alt:u})})))},P=function(t){var a=t.cards;return c.a.createElement(d.a,Object.assign({},u,{className:s.a.products}),a.filter((function(t){return t.rating_count>0})).map((function(t,a){var e=t.brand_name,r=t.product_title,n=t.available,i=t.rating,o=t.url_direct,l=t.rating_count,d=t.price,u=t.product_image_alt;return c.a.createElement(h,{product_id:a,brand_name:e,product_title:r,available:n,rating:i,url_direct:o,rating_count:l,price:d,product_image_alt:u})})))},w=e(7),k=function(){return c.a.createElement("div",{className:"container"},c.a.createElement(o,{title:"\u0411\u0435\u0441\u0442\u0441\u0435\u043b\u043b\u0435\u0440\u044b \u0432 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0430\u0432\u0442\u043e\u0442\u043e\u0432\u0430\u0440\u044b \u0438 \u0430\u0432\u0442\u043e\u0445\u0438\u043c\u0438\u044f"},c.a.createElement(P,{cards:w})),c.a.createElement(o,{title:"\u0427\u0442\u043e-\u0442\u043e \u043d\u043e\u0432\u0435\u043d\u044c\u043a\u043e\u0435"},c.a.createElement(N,{cards:w})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},7:function(t){t.exports=JSON.parse('[{"product_id":"28050975","product_title":"\u0411\u0438\u0442\u0430 Toptul FSBA0802 PH 2","product_image_alt":"\u0411\u0438\u0442\u0430 Toptul FSBA0802 PH 2","brand_name":"Toptul","price":"6.00","available":"1","url_direct":"/art-bita-toptul-fsba0802-ph-2-28050975","rating":null,"rating_count":null},{"product_id":"2059556","product_title":"\u0423\u043f\u043b\u043e\u0442\u043d\u044f\u044e\u0449\u0435\u0435 \u043a\u043e\u043b\u044c\u0446\u043e \u0432\u0430\u043b\u0430","product_image_alt":"","brand_name":"Topran","price":"26.00","available":"0","url_direct":"/art-201281-topran-2059556","rating":"0","rating_count":"0"},{"product_id":"27779716","product_title":"\u041a\u043b\u0435\u0449\u0438 \u0442\u043e\u0440\u0446\u0435\u0432\u044b\u0435 Sigma 4354211 160 \u043c\u043c","product_image_alt":"\u041a\u043b\u0435\u0449\u0438 \u0442\u043e\u0440\u0446\u0435\u0432\u044b\u0435 Sigma 4354211 160 \u043c\u043c","brand_name":"Sigma","price":"65.00","available":"1","url_direct":"/art-kleschi-torcevye-sigma-160-mm-27779716","rating":null,"rating_count":null},{"product_id":"153128","product_title":"\u0412\u043e\u0437\u0434\u0443\u0448\u043d\u044b\u0439 \u0444\u0438\u043b\u044c\u0442\u0440","product_image_alt":"","brand_name":"Wix Filters","price":"123.00","available":"1","url_direct":"/art-wa6214-wix-filters-153128","rating":"4","rating_count":"95"},{"product_id":"226942","product_title":"\u041c\u0430\u0441\u043b\u044f\u043d\u044b\u0439 \u0444\u0438\u043b\u044c\u0442\u0440","product_image_alt":"","brand_name":"Mann","price":"131.00","available":"1","url_direct":"/art-w81180-mann-226942","rating":"4","rating_count":"356"},{"product_id":"27465","product_title":"\u0424\u0438\u043b\u044c\u0442\u0440 \u0441\u0430\u043b\u043e\u043d\u0430","product_image_alt":"","brand_name":"Wix Filters","price":"135.00","available":"1","url_direct":"/art-wp6812-wix-filters-27465","rating":"4","rating_count":"49"},{"product_id":"471043","product_title":"\u0421\u0432\u0435\u0447\u0430 \u043d\u0430\u043a\u0430\u043b\u0430","product_image_alt":"","brand_name":"Meyle","price":"142.00","available":"1","url_direct":"/art-0140201039-471043","rating":"4","rating_count":"14"},{"product_id":"21995879","product_title":"\u041c\u043e\u0442\u043e\u0440\u043d\u043e\u0435 \u043c\u0430\u0441\u043b\u043e Ford Formula F 5W-30 \u0441\u0438\u043d\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435","product_image_alt":"\u041c\u043e\u0442\u043e\u0440\u043d\u043e\u0435 \u043c\u0430\u0441\u043b\u043e Ford Formula F 5W-30 \u0441\u0438\u043d\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435","brand_name":"Ford","price":"154.00","available":"1","url_direct":"/art-motornoe-maslo-ford-formula-f-5w-30-sinteticheskoe-21995879/21995879","rating":"4","rating_count":"612"},{"product_id":"137588","product_title":"\u0420\u0435\u043c\u0435\u043d\u044c \u0413\u0420\u041c","product_image_alt":"","brand_name":"Contitech","price":"195.00","available":"1","url_direct":"/art-ct637-contitech-137588","rating":"4","rating_count":"21"},{"product_id":"65078","product_title":"\u0422\u043e\u0440\u043c\u043e\u0437\u043d\u043e\u0439 \u0431\u0430\u0440\u0430\u0431\u0430\u043d","product_image_alt":"","brand_name":"Abe","price":"431.00","available":"1","url_direct":"/art-c6s004abe-abe-65078","rating":"4","rating_count":"11"},{"product_id":"27454873","product_title":"\u0410\u0432\u0442\u043e\u0445\u043e\u043b\u043e\u0434\u0438\u043b\u044c\u043d\u0438\u043a Ranger Cool RA8847 20 \u043b.","product_image_alt":"\u0410\u0432\u0442\u043e\u0445\u043e\u043b\u043e\u0434\u0438\u043b\u044c\u043d\u0438\u043a Ranger Cool RA8847 20 \u043b.","brand_name":"Ranger","price":"1499.00","available":"1","url_direct":"/art-avtoholodilnik-ranger-cool-20-l-1136818180-27454873","rating":"0","rating_count":"0"}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.ff24e0e9.chunk.js.map