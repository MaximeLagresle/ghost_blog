(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{49:function(t,e,n){t.exports=n(50)},50:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),s=(n(6),n(21)),a=n(4),r=n(5),c=n.n(r),l=null,d=null,u=window.pageYOffset,f=0,m=0,p=0,w=!1;function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"768px";return window.matchMedia("(max-width: ".concat(t,")")).matches}function b(){u=window.pageYOffset,y()}function v(t){h("1023px")?(i()("body").addClass("share-menu-displayed"),setTimeout(function(){l.removeAttr("data-aos")},t)):(Object(s.a)(".js-sticky",{stickyBitStickyOffset:100}),i()("body").removeClass("share-menu-displayed"))}function g(){j(),v(100),setTimeout(function(){x(),y()},200)}function y(){w||requestAnimationFrame(k),w=!0}function k(){var t=m-f,e=Math.ceil(u/t*100);e<=100&&function(t){if(t<=100){var e=p-t/100*p;d[0].style.strokeDashoffset=e}}(e),w=!1}function j(){f=window.innerHeight,m=i()(document).height()}function x(){var t=d.parent().width()/2,e=h()?2:3;d.attr("stroke-width",e),d.attr("r",t-(e-1)),d.attr("cx",t),d.attr("cy",t),p=2*t*Math.PI,d[0].style.strokeDasharray="".concat(p," ").concat(p),d[0].style.strokeDashoffset=p}function T(){d=i()(".js-progress"),j(),x(),k(),setTimeout(function(){d.parent().css("opacity",1)},300)}i()(document).ready(function(){l=i()(".js-aos-wrapper");var t=i()(".js-scrolltop"),e=i()(".js-load-comments"),n=i()(".js-comments-iframe"),o=i()(".js-recommended-articles");c()(".js-post-content"),function(){for(var t=document.querySelectorAll(".kg-gallery-image img"),e=0,n=t.length;e<n;e++){var o=t[e].closest(".kg-gallery-image"),i=t[e].attributes.width.value/t[e].attributes.height.value;o.style.flex="".concat(i," 1 0%")}}(),v(1e3),o.length>0&&(o.on("init",function(){T()}),o.slick({arrows:!0,infinite:!0,prevArrow:'<button class="m-icon-button filled in-recommended-articles slick-prev" aria-label="Previous"><span class="icon-arrow-left"></span></button>',nextArrow:'<button class="m-icon-button filled in-recommended-articles slick-next" aria-label="Next"><span class="icon-arrow-right"></span></button>',mobileFirst:!0,responsive:[{breakpoint:720,settings:{slidesToShow:2}},{breakpoint:1023,settings:{arrows:!1,slidesToShow:3}}]})),t.click(function(){i()("html, body").animate({scrollTop:0},500)}),e.click(function(){e.parent().hide(),n.fadeIn("slow")}),i()(".js-post-content").find("img").each(function(){i()(this).addClass("js-zoomable");var t=i()(this).parent().find("figcaption");t?i()(this).attr("alt",t.text()):$this.attr("alt","")}),Object(a.a)(".js-zoomable"),window.addEventListener("scroll",b,{passive:!0}),window.addEventListener("resize",g,{passive:!0})}),i()(window).on("load",function(){T()})}},[[49,0,1]]]);