/** handles (scripts) :comment-reply | cornerstone-site-head  */var addComment={moveForm:function(a,b,c,d){var e,f,g,h,i=this,j=i.I(a),k=i.I(c),l=i.I("cancel-comment-reply-link"),m=i.I("comment_parent"),n=i.I("comment_post_ID"),o=k.getElementsByTagName("form")[0];if(j&&k&&l&&m&&o){i.respondId=c,d=d||!1,i.I("wp-temp-form-div")||(e=document.createElement("div"),e.id="wp-temp-form-div",e.style.display="none",k.parentNode.insertBefore(e,k)),j.parentNode.insertBefore(k,j.nextSibling),n&&d&&(n.value=d),m.value=b,l.style.display="",l.onclick=function(){var a=addComment,b=a.I("wp-temp-form-div"),c=a.I(a.respondId);if(b&&c)return a.I("comment_parent").value="0",b.parentNode.insertBefore(c,b),b.parentNode.removeChild(b),this.style.display="none",this.onclick=null,!1};try{for(var p=0;p<o.elements.length;p++)if(f=o.elements[p],h=!1,"getComputedStyle"in window?g=window.getComputedStyle(f):document.documentElement.currentStyle&&(g=f.currentStyle),(f.offsetWidth<=0&&f.offsetHeight<=0||"hidden"===g.visibility)&&(h=!0),"hidden"!==f.type&&!f.disabled&&!h){f.focus();break}}catch(q){}return!1}},I:function(a){return document.getElementById(a)}}
;;
!function(e,i,t){function s(e,i){return typeof e===i}function o(){var e,i,t,o,n,l,r;for(var a in w)if(w.hasOwnProperty(a)){if(e=[],i=w[a],i.name&&(e.push(i.name.toLowerCase()),i.options&&i.options.aliases&&i.options.aliases.length))for(t=0;t<i.options.aliases.length;t++)e.push(i.options.aliases[t].toLowerCase());for(o=s(i.fn,"function")?i.fn():i.fn,n=0;n<e.length;n++)l=e[n],r=l.split("."),1===r.length?T[r[0]]=o:(!T[r[0]]||T[r[0]]instanceof Boolean||(T[r[0]]=new Boolean(T[r[0]])),T[r[0]][r[1]]=o),g.push((o?"":"no-")+r.join("-"))}}function n(e){var i=S.className,t=T._config.classPrefix||"";if($&&(i=i.baseVal),T._config.enableJSClass){var s=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");i=i.replace(s,"$1"+t+"js$2")}T._config.enableClasses&&(i+=" "+t+e.join(" "+t),$?S.className.baseVal=i:S.className=i)}function l(){return"function"!=typeof i.createElement?i.createElement(arguments[0]):$?i.createElementNS.call(i,"http://www.w3.org/2000/svg",arguments[0]):i.createElement.apply(i,arguments)}function r(){var e=i.body;return e||(e=l($?"svg":"body"),e.fake=!0),e}function a(e,t,s,o){var n,a,d,c,p="modernizr",u=l("div"),f=r();if(parseInt(s,10))for(;s--;)d=l("div"),d.id=o?o[s]:p+(s+1),u.appendChild(d);return n=l("style"),n.type="text/css",n.id="s"+p,(f.fake?f:u).appendChild(n),f.appendChild(u),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(i.createTextNode(e)),u.id=p,f.fake&&(f.style.background="",f.style.overflow="hidden",c=S.style.overflow,S.style.overflow="hidden",S.appendChild(f)),a=t(u,e),f.fake?(f.parentNode.removeChild(f),S.style.overflow=c,S.offsetHeight):u.parentNode.removeChild(u),!!a}function d(e,i){return!!~(""+e).indexOf(i)}function c(e){return e.replace(/([A-Z])/g,function(e,i){return"-"+i.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(i,s){var o=i.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(c(i[o]),s))return!0;return!1}if("CSSSupportsRule"in e){for(var n=[];o--;)n.push("("+c(i[o])+":"+s+")");return n=n.join(" or "),a("@supports ("+n+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,i,t){return i+t.toUpperCase()}).replace(/^-/,"")}function f(e,i,o,n){function r(){c&&(delete z.style,delete z.modElem)}if(n=s(n,"undefined")?!1:n,!s(o,"undefined")){var a=p(e,o);if(!s(a,"undefined"))return a}for(var c,f,h,v,y,k=["modernizr","tspan"];!z.style;)c=!0,z.modElem=l(k.shift()),z.style=z.modElem.style;for(h=e.length,f=0;h>f;f++)if(v=e[f],y=z.style[v],d(v,"-")&&(v=u(v)),z.style[v]!==t){if(n||s(o,"undefined"))return r(),"pfx"==i?v:!0;try{z.style[v]=o}catch(w){}if(z.style[v]!=y)return r(),"pfx"==i?v:!0}return r(),!1}function h(e,i){return function(){return e.apply(i,arguments)}}function v(e,i,t){var o;for(var n in e)if(e[n]in i)return t===!1?e[n]:(o=i[e[n]],s(o,"function")?h(o,t||i):o);return!1}function y(e,i,t,o,n){var l=e.charAt(0).toUpperCase()+e.slice(1),r=(e+" "+P.join(l+" ")+l).split(" ");return s(i,"string")||s(i,"undefined")?f(r,i,o,n):(r=(e+" "+A.join(l+" ")+l).split(" "),v(r,i,t))}function k(e,i,s){return y(e,t,t,i,s)}var w=[],m={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,i){var t=this;setTimeout(function(){i(t[e])},0)},addTest:function(e,i,t){w.push({name:e,fn:i,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},T=function(){};T.prototype=m,T=new T;var g=[],S=i.documentElement,$="svg"===S.nodeName.toLowerCase(),C=m._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];m._prefixes=C;var b=m.testStyles=a;T.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&i instanceof DocumentTouch)t=!0;else{var s=["@media (",C.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");b(s,function(e){t=9===e.offsetTop})}return t});var x="Moz O ms Webkit",P=m._config.usePrefixes?x.split(" "):[];m._cssomPrefixes=P;var O={elem:l("modernizr")};T._q.push(function(){delete O.elem});var z={style:O.elem.style};T._q.unshift(function(){delete z.style});var A=m._config.usePrefixes?x.toLowerCase().split(" "):[];m._domPrefixes=A,m.testAllProps=y,m.testAllProps=k,T.addTest("cssanimations",k("animationName","a",!0)),T.addTest("csspointerevents",function(){var e=l("a").style;return e.cssText="pointer-events:auto","auto"===e.pointerEvents}),T.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&k("transform","scale(1)",!0)});var j="CSS"in e&&"supports"in e.CSS,L="supportsCSS"in e;T.addTest("supports",j||L),T.addTest("csstransforms3d",function(){var e=!!k("perspective","1px",!0),i=T._config.usePrefixes;if(e&&(!i||"webkitPerspective"in S.style)){var t,s="#modernizr{width:0;height:0}";T.supports?t="@supports (perspective: 1px)":(t="@media (transform-3d)",i&&(t+=",(-webkit-transform-3d)")),t+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",b(s+t,function(i){e=7===i.offsetWidth&&18===i.offsetHeight})}return e}),T.addTest("preserve3d",k("transformStyle","preserve-3d")),T.addTest("csstransitions",k("transition","all",!0)),o(),n(g),delete m.addTest,delete m.addAsyncTest;for(var E=0;E<T._q.length;E++)T._q[E]();e.csModernizr=T}(window,document),window.Modernizr=window.Modernizr||window.csModernizr,function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){"use strict";var i=window.Slick||{};i=function(){function i(i,s){var o,n,l=this;if(l.defaults={accessibility:!0,arrows:!0,autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,i){return'<button type="button">'+(i+1)+"</button>"},dots:!1,draggable:!0,easing:"linear",fade:!1,infinite:!0,lazyLoad:"ondemand",onBeforeChange:null,onAfterChange:null,onInit:null,onReInit:null,pauseOnHover:!0,responsive:null,slide:"div",slidesToShow:1,slidesToScroll:1,speed:300,swipe:!0,touchMove:!0,touchThreshold:5,useCSS:!0,vertical:!1},l.initials={animating:!1,autoPlayTimer:null,currentSlide:0,currentLeft:null,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1},e.extend(l,l.initials),l.activeBreakpoint=null,l.animType=null,l.animProp=null,l.breakpoints=[],l.breakpointSettings=[],l.cssTransitions=!1,l.paused=!1,l.positionProp=null,l.$slider=e(i),l.$slidesCache=null,l.transformType=null,l.transitionType=null,l.windowWidth=0,l.windowTimer=null,l.options=e.extend({},l.defaults,s),l.originalSettings=l.options,o=l.options.responsive||null,o&&o.length>-1){for(n in o)o.hasOwnProperty(n)&&(l.breakpoints.push(o[n].breakpoint),l.breakpointSettings[o[n].breakpoint]=o[n].settings);l.breakpoints.sort(function(e,i){return i-e})}l.autoPlay=e.proxy(l.autoPlay,l),l.autoPlayClear=e.proxy(l.autoPlayClear,l),l.changeSlide=e.proxy(l.changeSlide,l),l.setPosition=e.proxy(l.setPosition,l),l.swipeHandler=e.proxy(l.swipeHandler,l),l.dragHandler=e.proxy(l.dragHandler,l),l.keyHandler=e.proxy(l.keyHandler,l),l.autoPlayIterator=e.proxy(l.autoPlayIterator,l),l.instanceUid=t++,l.init()}var t=0;return i}(),i.prototype.addSlide=function(i,t,s){var o=this;if("boolean"==typeof t)s=t,t=null;else if(0>t||t>=o.slideCount)return!1;o.unload(),"number"==typeof t?0===t&&0===o.$slides.length?e(i).appendTo(o.$slideTrack):s?e(i).insertBefore(o.$slides.eq(t)):e(i).insertAfter(o.$slides.eq(t)):s===!0?e(i).prependTo(o.$slideTrack):e(i).appendTo(o.$slideTrack),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).remove(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},i.prototype.animateSlide=function(i,t){var s={},o=this;o.transformsEnabled===!1?o.options.vertical===!1?o.$slideTrack.animate({left:i},o.options.speed,o.options.easing,t):o.$slideTrack.animate({top:i},o.options.speed,o.options.easing,t):o.cssTransitions===!1?e({animStart:o.currentLeft}).animate({animStart:i},{duration:o.options.speed,easing:o.options.easing,step:function(e){o.options.vertical===!1?(s[o.animType]="translate("+e+"px, 0px)",o.$slideTrack.css(s)):(s[o.animType]="translate(0px,"+e+"px)",o.$slideTrack.css(s))},complete:function(){t&&t.call()}}):(o.applyTransition(),o.options.vertical===!1?s[o.animType]="translate3d("+i+"px, 0px, 0px)":s[o.animType]="translate3d(0px,"+i+"px, 0px)",o.$slideTrack.css(s),t&&setTimeout(function(){o.disableTransition(),t.call()},o.options.speed))},i.prototype.applyTransition=function(e){var i=this,t={};i.options.fade===!1?t[i.transitionType]=i.transformType+" "+i.options.speed+"ms "+i.options.cssEase:t[i.transitionType]="opacity "+i.options.speed+"ms "+i.options.cssEase,i.options.fade===!1?i.$slideTrack.css(t):i.$slides.eq(e).css(t)},i.prototype.autoPlay=function(){var e=this;e.autoPlayTimer&&clearInterval(e.autoPlayTimer),e.slideCount>e.options.slidesToShow&&e.paused!==!0&&(e.autoPlayTimer=setInterval(e.autoPlayIterator,e.options.autoplaySpeed))},i.prototype.autoPlayClear=function(){var e=this;e.autoPlayTimer&&clearInterval(e.autoPlayTimer)},i.prototype.autoPlayIterator=function(){var e=this;e.options.infinite===!1?1===e.direction?(e.currentSlide+1===e.slideCount-1&&(e.direction=0),e.slideHandler(e.currentSlide+e.options.slidesToScroll)):(e.currentSlide-1===0&&(e.direction=1),e.slideHandler(e.currentSlide-e.options.slidesToScroll)):e.slideHandler(e.currentSlide+e.options.slidesToScroll)},i.prototype.buildArrows=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow=e('<button type="button" class="slick-prev">Previous</button>').appendTo(i.$slider),i.$nextArrow=e('<button type="button" class="slick-next">Next</button>').appendTo(i.$slider),i.options.infinite!==!0&&i.$prevArrow.addClass("slick-disabled"))},i.prototype.buildDots=function(){var i,t,s=this;if(s.options.dots===!0&&s.slideCount>s.options.slidesToShow){for(t='<ul class="slick-dots">',i=0;i<=s.getDotCount();i+=1)t+="<li>"+s.options.customPaging.call(this,s,i)+"</li>";t+="</ul>",s.$dots=e(t).appendTo(s.$slider),s.$dots.find("li").first().addClass("slick-active")}},i.prototype.buildOut=function(){var i=this;i.$slides=i.$slider.children(i.options.slide+":not(.slick-cloned)").addClass("slick-slide"),i.slideCount=i.$slides.length,i.$slidesCache=i.$slides,i.$slider.addClass("slick-slider"),i.$slideTrack=0===i.slideCount?e('<div class="slick-track"/>').appendTo(i.$slider):i.$slides.wrapAll('<div class="slick-track"/>').parent(),i.$list=i.$slideTrack.wrap('<div class="slick-list"/>').parent(),i.$slideTrack.css("opacity",0),i.options.centerMode===!0&&(i.options.infinite=!0,i.options.slidesToScroll=1,i.options.slidesToShow%2===0&&(i.options.slidesToShow=3)),e("img[data-lazy]",i.$slider).not("[src]").addClass("slick-loading"),i.setupInfinite(),i.buildArrows(),i.buildDots(),i.options.accessibility===!0&&i.$list.prop("tabIndex",0),i.setSlideClasses(0),i.options.draggable===!0&&i.$list.addClass("draggable")},i.prototype.checkResponsive=function(){var i,t,s=this;if(s.originalSettings.responsive&&s.originalSettings.responsive.length>-1&&null!==s.originalSettings.responsive){t=null;for(i in s.breakpoints)s.breakpoints.hasOwnProperty(i)&&e(window).width()<s.breakpoints[i]&&(t=s.breakpoints[i]);null!==t?null!==s.activeBreakpoint?t!==s.activeBreakpoint&&(s.activeBreakpoint=t,s.options=e.extend({},s.defaults,s.breakpointSettings[t]),s.refresh()):(s.activeBreakpoint=t,s.options=e.extend({},s.defaults,s.breakpointSettings[t]),s.refresh()):null!==s.activeBreakpoint&&(s.activeBreakpoint=null,s.options=e.extend({},s.defaults,s.originalSettings),s.refresh())}},i.prototype.changeSlide=function(i){var t=this;switch(i.data.message){case"previous":t.slideHandler(t.currentSlide-t.options.slidesToScroll);break;case"next":t.slideHandler(t.currentSlide+t.options.slidesToScroll);break;case"index":t.slideHandler(e(i.target).parent().index()*t.options.slidesToScroll);break;default:return!1}},i.prototype.destroy=function(){var i=this;i.autoPlayClear(),i.touchObject={},e(".slick-cloned",i.$slider).remove(),i.$dots&&i.$dots.remove(),i.$prevArrow&&(i.$prevArrow.remove(),i.$nextArrow.remove()),i.$slides.unwrap().unwrap(),i.$slides.removeClass("slick-slide slick-active slick-visible").removeAttr("style"),i.$slider.removeClass("slick-slider"),i.$slider.removeClass("slick-initialized"),i.$list.off(".slick"),e(window).off(".slick-"+i.instanceUid)},i.prototype.disableTransition=function(e){var i=this,t={};t[i.transitionType]="",i.options.fade===!1?i.$slideTrack.css(t):i.$slides.eq(e).css(t)},i.prototype.fadeSlide=function(e,i){var t=this;t.cssTransitions===!1?(t.$slides.eq(e).css({zIndex:1e3}),t.$slides.eq(e).animate({opacity:1},t.options.speed,t.options.easing,i)):(t.applyTransition(e),t.$slides.eq(e).css({opacity:1,zIndex:1e3}),i&&setTimeout(function(){t.disableTransition(e),i.call()},t.options.speed))},i.prototype.filterSlides=function(e){var i=this;null!==e&&(i.unload(),i.$slideTrack.children(this.options.slide).remove(),i.$slidesCache.filter(e).appendTo(i.$slideTrack),i.reinit())},i.prototype.getCurrent=function(){var e=this;return e.currentSlide},i.prototype.getDotCount=function(){var e,i=this,t=0,s=0,o=0;for(e=i.options.infinite===!0?i.slideCount+i.options.slidesToShow-i.options.slidesToScroll:i.slideCount;e>t;)o++,s+=i.options.slidesToScroll,t=s+i.options.slidesToShow;return o},i.prototype.getLeft=function(e){var i,t,s=this,o=0;return s.slideOffset=0,t=s.$slides.first().outerHeight(),s.options.infinite===!0?(s.slideCount>s.options.slidesToShow&&(s.slideOffset=s.slideWidth*s.options.slidesToShow*-1,o=t*s.options.slidesToShow*-1),s.slideCount%s.options.slidesToScroll!==0&&e+s.options.slidesToScroll>s.slideCount&&s.slideCount>s.options.slidesToShow&&(s.slideOffset=s.slideCount%s.options.slidesToShow*s.slideWidth*-1,o=s.slideCount%s.options.slidesToShow*t*-1)):s.slideCount%s.options.slidesToShow!==0&&e+s.options.slidesToScroll>s.slideCount&&s.slideCount>s.options.slidesToShow&&(s.slideOffset=s.options.slidesToShow*s.slideWidth-s.slideCount%s.options.slidesToShow*s.slideWidth,o=s.slideCount%s.options.slidesToShow*t),s.options.centerMode===!0&&(s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)-s.slideWidth),i=s.options.vertical===!1?e*s.slideWidth*-1+s.slideOffset:e*t*-1+o},i.prototype.init=function(){var i=this;e(i.$slider).hasClass("slick-initialized")||(e(i.$slider).addClass("slick-initialized"),i.buildOut(),i.setProps(),i.startLoad(),i.loadSlider(),i.initializeEvents(),i.checkResponsive()),null!==i.options.onInit&&i.options.onInit.call(this,i)},i.prototype.initArrowEvents=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.on("click.slick",{message:"previous"},e.changeSlide),e.$nextArrow.on("click.slick",{message:"next"},e.changeSlide))},i.prototype.initDotEvents=function(){var i=this;i.options.dots===!0&&i.slideCount>i.options.slidesToShow&&e("li",i.$dots).on("click.slick",{message:"index"},i.changeSlide)},i.prototype.initializeEvents=function(){var i=this;i.initArrowEvents(),i.initDotEvents(),i.$list.on("touchstart.slick mousedown.slick",{action:"start"},i.swipeHandler),i.$list.on("touchmove.slick mousemove.slick",{action:"move"},i.swipeHandler),i.$list.on("touchend.slick mouseup.slick",{action:"end"},i.swipeHandler),i.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},i.swipeHandler),i.options.pauseOnHover===!0&&i.options.autoplay===!0&&(i.$list.on("mouseenter.slick",i.autoPlayClear),i.$list.on("mouseleave.slick",i.autoPlay)),i.options.accessibility===!0&&i.$list.on("keydown.slick",i.keyHandler),e(window).on("orientationchange.slick.slick-"+i.instanceUid,function(){i.checkResponsive(),i.setPosition()}),e(window).on("resize.slick.slick-"+i.instanceUid,function(){e(window).width!==i.windowWidth&&(clearTimeout(i.windowDelay),i.windowDelay=window.setTimeout(function(){i.windowWidth=e(window).width(),i.checkResponsive(),i.setPosition()},50))}),e(window).on("load.slick.slick-"+i.instanceUid,i.setPosition)},i.prototype.initUI=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.show(),e.$nextArrow.show()),e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&e.$dots.show(),e.options.autoplay===!0&&e.autoPlay()},i.prototype.keyHandler=function(e){var i=this;37===e.keyCode?i.changeSlide({data:{message:"previous"}}):39===e.keyCode&&i.changeSlide({data:{message:"next"}})},i.prototype.lazyLoad=function(){var i,t,s,o,n=this;n.options.centerMode===!0?(s=n.options.slidesToShow+n.currentSlide-1,o=s+n.options.slidesToShow+2):(s=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,o=s+n.options.slidesToShow),i=n.$slider.find(".slick-slide").slice(s,o),e("img[data-lazy]",i).not("[src]").each(function(){e(this).css({opacity:0}).attr("src",e(this).attr("data-lazy")).removeClass("slick-loading").load(function(){e(this).animate({opacity:1},200)})}),n.currentSlide>=n.slideCount-n.options.slidesToShow?(t=n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow),e("img[data-lazy]",t).not("[src]").each(function(){e(this).css({opacity:0}).attr("src",e(this).attr("data-lazy")).removeClass("slick-loading").load(function(){e(this).animate({opacity:1},200)})})):0===n.currentSlide&&(t=n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow),e("img[data-lazy]",t).not("[src]").each(function(){e(this).css({opacity:0}).attr("src",e(this).attr("data-lazy")).removeClass("slick-loading").load(function(){e(this).animate({opacity:1},200)})}))},i.prototype.loadSlider=function(){var e=this;e.setPosition(),e.$slideTrack.css({opacity:1}),e.$slider.removeClass("slick-loading"),e.initUI(),"progressive"===e.options.lazyLoad&&e.progressiveLazyLoad()},i.prototype.postSlide=function(e){var i=this;null!==i.options.onAfterChange&&i.options.onAfterChange.call(this,i,e),i.animating=!1,i.setPosition(),i.swipeLeft=null,i.options.autoplay===!0&&i.paused===!1&&i.autoPlay()},i.prototype.progressiveLazyLoad=function(){var i,t,s=this;i=e("img[data-lazy]").not("[src]").length,i>0&&(t=e(e("img[data-lazy]",s.$slider).not("[src]").get(0)),t.attr("src",t.attr("data-lazy")).removeClass("slick-loading").load(function(){s.progressiveLazyLoad()}))},i.prototype.refresh=function(){var i=this;i.destroy(),e.extend(i,i.initials),i.init()},i.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.setSlideClasses(0),e.setPosition(),null!==e.options.onReInit&&e.options.onReInit.call(this,e)},i.prototype.removeSlide=function(e,i){var t=this;return"boolean"==typeof e?(i=e,e=i===!0?0:t.slideCount-1):e=i===!0?--e:e,t.slideCount<1||0>e||e>t.slideCount-1?!1:(t.unload(),t.$slideTrack.children(this.options.slide).eq(e).remove(),t.$slides=t.$slideTrack.children(this.options.slide),t.$slideTrack.children(this.options.slide).remove(),t.$slideTrack.append(t.$slides),t.$slidesCache=t.$slides,void t.reinit())},i.prototype.setCSS=function(e){var i,t,s=this,o={};i="left"==s.positionProp?e+"px":"0px",t="top"==s.positionProp?e+"px":"0px",o[s.positionProp]=e,s.transformsEnabled===!1?s.$slideTrack.css(o):(o={},s.cssTransitions===!1?(o[s.animType]="translate("+i+", "+t+")",s.$slideTrack.css(o)):(o[s.animType]="translate3d("+i+", "+t+", 0px)",s.$slideTrack.css(o)))},i.prototype.setDimensions=function(){var e=this;e.options.centerMode===!0?e.$slideTrack.children(".slick-slide").width(e.slideWidth):e.$slideTrack.children(".slick-slide").width(e.slideWidth),e.options.vertical===!1?(e.$slideTrack.width(Math.ceil(e.slideWidth*e.$slideTrack.children(".slick-slide").length)),e.options.centerMode===!0&&e.$list.css({padding:"0px "+e.options.centerPadding})):(e.$list.height(e.$slides.first().outerHeight()*e.options.slidesToShow),e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight()*e.$slideTrack.children(".slick-slide").length)),e.options.centerMode===!0&&e.$list.css({padding:e.options.centerPadding+" 0px"}))},i.prototype.setFade=function(){var i,t=this;t.$slides.each(function(s,o){i=t.slideWidth*s*-1,e(o).css({position:"relative",left:i,top:0,zIndex:800,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:900,opacity:1})},i.prototype.setPosition=function(){var e=this;e.setValues(),e.setDimensions(),e.options.fade===!1?e.setCSS(e.getLeft(e.currentSlide)):e.setFade()},i.prototype.setProps=function(){var e=this;e.positionProp=e.options.vertical===!0?"top":"left","top"===e.positionProp?e.$slider.addClass("slick-vertical"):e.$slider.removeClass("slick-vertical"),(void 0!==document.body.style.WebkitTransition||void 0!==document.body.style.MozTransition||void 0!==document.body.style.msTransition)&&e.options.useCSS===!0&&(e.cssTransitions=!0),void 0!==document.body.style.MozTransform&&(e.animType="MozTransform",e.transformType="-moz-transform",e.transitionType="MozTransition"),void 0!==document.body.style.webkitTransform&&(e.animType="webkitTransform",e.transformType="-webkit-transform",e.transitionType="webkitTransition"),void 0!==document.body.style.msTransform&&(e.animType="transform",e.transformType="transform",e.transitionType="transition"),e.transformsEnabled=null!==e.animType},i.prototype.setValues=function(){var e=this;e.listWidth=e.$list.width(),e.listHeight=e.$list.height(),e.options.vertical===!1?e.slideWidth=Math.ceil(e.listWidth/e.options.slidesToShow):e.slideWidth=Math.ceil(e.listWidth)},i.prototype.setSlideClasses=function(e){var i,t,s,o=this;o.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"),t=o.$slider.find(".slick-slide"),o.options.centerMode===!0?(i=Math.floor(o.options.slidesToShow/2),e>=i&&e<=o.slideCount-1-i?o.$slides.slice(e-i,e+i+1).addClass("slick-active"):(s=o.options.slidesToShow+e,t.slice(s-i+1,s+i+2).addClass("slick-active")),0===e?t.eq(t.length-1-o.options.slidesToShow).addClass("slick-center"):e===o.slideCount-1&&t.eq(o.options.slidesToShow).addClass("slick-center"),o.$slides.eq(e).addClass("slick-center")):e>0&&e<o.slideCount-o.options.slidesToShow?o.$slides.slice(e,e+o.options.slidesToShow).addClass("slick-active"):(s=o.options.infinite===!0?o.options.slidesToShow+e:e,t.slice(s,s+o.options.slidesToShow).addClass("slick-active")),"ondemand"===o.options.lazyLoad&&o.lazyLoad()},i.prototype.setupInfinite=function(){var i,t,s,o=this;if((o.options.fade===!0||o.options.vertical===!0)&&(o.options.centerMode=!1),o.options.infinite===!0&&o.options.fade===!1&&(t=null,o.slideCount>o.options.slidesToShow)){for(s=o.options.centerMode===!0?o.options.slidesToShow+1:o.options.slidesToShow,i=o.slideCount;i>o.slideCount-s;i-=1)t=i-1,e(o.$slides[t]).clone().attr("id","").prependTo(o.$slideTrack).addClass("slick-cloned");for(i=0;s>i;i+=1)t=i,e(o.$slides[t]).clone().attr("id","").appendTo(o.$slideTrack).addClass("slick-cloned");o.$slideTrack.find(".slick-cloned").find("[id]").each(function(){e(this).attr("id","")})}},i.prototype.slideHandler=function(e){var i,t,s,o,n=null,l=this;return l.animating===!0?!1:(i=e,n=l.getLeft(i),s=l.getLeft(l.currentSlide),o=l.slideCount%l.options.slidesToScroll!==0?l.options.slidesToScroll:0,l.currentLeft=null===l.swipeLeft?s:l.swipeLeft,l.options.infinite===!1&&(0>e||e>l.slideCount-l.options.slidesToShow+o)?(l.options.fade===!1&&(i=l.currentSlide,l.animateSlide(s,function(){l.postSlide(i)})),!1):(l.options.autoplay===!0&&clearInterval(l.autoPlayTimer),t=0>i?l.slideCount%l.options.slidesToScroll!==0?l.slideCount-l.slideCount%l.options.slidesToScroll:l.slideCount-l.options.slidesToScroll:i>l.slideCount-1?0:i,l.animating=!0,null!==l.options.onBeforeChange&&e!==l.currentSlide&&l.options.onBeforeChange.call(this,l,l.currentSlide,t),l.currentSlide=t,l.setSlideClasses(l.currentSlide),l.updateDots(),l.updateArrows(),l.options.fade===!0?(l.fadeSlide(t,function(){l.postSlide(t)}),!1):void l.animateSlide(n,function(){l.postSlide(t)})))},i.prototype.startLoad=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.hide(),e.$nextArrow.hide()),e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&e.$dots.hide(),e.$slider.addClass("slick-loading")},i.prototype.swipeDirection=function(){var e,i,t,s,o=this;return e=o.touchObject.startX-o.touchObject.curX,i=o.touchObject.startY-o.touchObject.curY,t=Math.atan2(i,e),s=Math.round(180*t/Math.PI),0>s&&(s=360-Math.abs(s)),45>=s&&s>=0?"left":360>=s&&s>=315?"left":s>=135&&225>=s?"right":"vertical"},i.prototype.swipeEnd=function(i){var t=this;if(t.$list.removeClass("dragging"),void 0===t.touchObject.curX)return!1;if(t.touchObject.swipeLength>=t.touchObject.minSwipe)switch(e(i.target).on("click.slick",function(i){i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault(),e(i.target).off("click.slick")}),t.swipeDirection()){case"left":t.slideHandler(t.currentSlide+t.options.slidesToScroll),t.touchObject={};break;case"right":t.slideHandler(t.currentSlide-t.options.slidesToScroll),t.touchObject={}}else t.touchObject.startX!==t.touchObject.curX&&(t.slideHandler(t.currentSlide),t.touchObject={})},i.prototype.swipeHandler=function(e){var i=this;if("ontouchend"in document&&i.options.swipe===!1)return!1;if(i.options.draggable===!1&&!e.originalEvent.touches)return!0;switch(i.touchObject.fingerCount=e.originalEvent&&void 0!==e.originalEvent.touches?e.originalEvent.touches.length:1,i.touchObject.minSwipe=i.listWidth/i.options.touchThreshold,e.data.action){case"start":i.swipeStart(e);break;case"move":i.swipeMove(e);break;case"end":i.swipeEnd(e)}},i.prototype.swipeMove=function(e){var i,t,s,o,n=this;return o=void 0!==e.originalEvent?e.originalEvent.touches:null,i=n.getLeft(n.currentSlide),!n.$list.hasClass("dragging")||o&&1!==o.length?!1:(n.touchObject.curX=void 0!==o?o[0].pageX:e.clientX,n.touchObject.curY=void 0!==o?o[0].pageY:e.clientY,n.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(n.touchObject.curX-n.touchObject.startX,2))),t=n.swipeDirection(),"vertical"!==t?(void 0!==e.originalEvent&&n.touchObject.swipeLength>4&&e.preventDefault(),s=n.touchObject.curX>n.touchObject.startX?1:-1,n.options.vertical===!1?n.swipeLeft=i+n.touchObject.swipeLength*s:n.swipeLeft=i+n.touchObject.swipeLength*(n.$list.height()/n.listWidth)*s,n.options.fade===!0||n.options.touchMove===!1?!1:n.animating===!0?(n.swipeLeft=null,!1):void n.setCSS(n.swipeLeft)):void 0)},i.prototype.swipeStart=function(e){var i,t=this;return 1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow?(t.touchObject={},!1):(void 0!==e.originalEvent&&void 0!==e.originalEvent.touches&&(i=e.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==i?i.pageX:e.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==i?i.pageY:e.clientY,void t.$list.addClass("dragging"))},i.prototype.unfilterSlides=function(){var e=this;null!==e.$slidesCache&&(e.unload(),e.$slideTrack.children(this.options.slide).remove(),e.$slidesCache.appendTo(e.$slideTrack),e.reinit())},i.prototype.unload=function(){var i=this;e(".slick-cloned",i.$slider).remove(),i.$dots&&i.$dots.remove(),i.$prevArrow&&(i.$prevArrow.remove(),i.$nextArrow.remove()),i.$slides.removeClass("slick-slide slick-active slick-visible").removeAttr("style")},i.prototype.updateArrows=function(){var e=this;e.options.arrows===!0&&e.options.infinite!==!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.removeClass("slick-disabled"),e.$nextArrow.removeClass("slick-disabled"),0===e.currentSlide?(e.$prevArrow.addClass("slick-disabled"),e.$nextArrow.removeClass("slick-disabled")):e.currentSlide>=e.slideCount-e.options.slidesToShow&&(e.$nextArrow.addClass("slick-disabled"),e.$prevArrow.removeClass("slick-disabled")))},i.prototype.updateDots=function(){var e=this;null!==e.$dots&&(e.$dots.find("li").removeClass("slick-active"),e.$dots.find("li").eq(e.currentSlide/e.options.slidesToScroll).addClass("slick-active"))},e.fn.slick=function(e){var t=this;return t.each(function(t,s){s.slick=new i(s,e)})},e.fn.slickAdd=function(e,i,t){var s=this;return s.each(function(s,o){o.slick.addSlide(e,i,t)})},e.fn.slickCurrentSlide=function(){var e=this;return e.get(0).slick.getCurrent()},e.fn.slickFilter=function(e){var i=this;return i.each(function(i,t){t.slick.filterSlides(e)})},e.fn.slickGoTo=function(e){var i=this;return i.each(function(i,t){t.slick.slideHandler(e)})},e.fn.slickNext=function(){var e=this;return e.each(function(e,i){i.slick.changeSlide({data:{message:"next"}})})},e.fn.slickPause=function(){var e=this;return e.each(function(e,i){i.slick.autoPlayClear(),i.slick.paused=!0})},e.fn.slickPlay=function(){var e=this;return e.each(function(e,i){i.slick.paused=!1,i.slick.autoPlay()})},e.fn.slickPrev=function(){var e=this;return e.each(function(e,i){i.slick.changeSlide({data:{message:"previous"}})})},e.fn.slickRemove=function(e,i){var t=this;return t.each(function(t,s){s.slick.removeSlide(e,i)})},e.fn.slickSetOption=function(e,i,t){var s=this;return s.each(function(s,o){o.slick.options[e]=i,t===!0&&(o.slick.unload(),o.slick.reinit())})},e.fn.slickUnfilter=function(){var e=this;return e.each(function(e,i){i.slick.unfilterSlides()})},e.fn.unslick=function(){var e=this;return e.each(function(e,i){i.slick.destroy()})}})