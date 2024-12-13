!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});
;
/*!
	Colorbox 1.6.4
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function ($, document, window) {
	var
	// Default settings object.
	// See http://jacklmoore.com/colorbox for details.
	defaults = {
		// data sources
		html: false,
		photo: false,
		iframe: false,
		inline: false,

		// behavior and appearance
		transition: "elastic",
		speed: 300,
		fadeOut: 300,
		width: false,
		initialWidth: "600",
		innerWidth: false,
		maxWidth: false,
		height: false,
		initialHeight: "450",
		innerHeight: false,
		maxHeight: false,
		scalePhotos: true,
		scrolling: true,
		opacity: 0.9,
		preloading: true,
		className: false,
		overlayClose: true,
		escKey: true,
		arrowKey: true,
		top: false,
		bottom: false,
		left: false,
		right: false,
		fixed: false,
		data: undefined,
		closeButton: true,
		fastIframe: true,
		open: false,
		reposition: true,
		loop: true,
		slideshow: false,
		slideshowAuto: true,
		slideshowSpeed: 2500,
		slideshowStart: "start slideshow",
		slideshowStop: "stop slideshow",
		photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,

		// alternate image paths for high-res displays
		retinaImage: false,
		retinaUrl: false,
		retinaSuffix: '@2x.$1',

		// internationalization
		current: "image {current} of {total}",
		previous: "previous",
		next: "next",
		close: "close",
		xhrError: "This content failed to load.",
		imgError: "This image failed to load.",

		// accessbility
		returnFocus: true,
		trapFocus: true,

		// callbacks
		onOpen: false,
		onLoad: false,
		onComplete: false,
		onCleanup: false,
		onClosed: false,

		rel: function() {
			return this.rel;
		},
		href: function() {
			// using this.href would give the absolute url, when the href may have been inteded as a selector (e.g. '#container')
			return $(this).attr('href');
		},
		title: function() {
			return this.title;
		},
		createImg: function() {
			var img = new Image();
			var attrs = $(this).data('cbox-img-attrs');

			if (typeof attrs === 'object') {
				$.each(attrs, function(key, val){
					img[key] = val;
				});
			}

			return img;
		},
		createIframe: function() {
			var iframe = document.createElement('iframe');
			var attrs = $(this).data('cbox-iframe-attrs');

			if (typeof attrs === 'object') {
				$.each(attrs, function(key, val){
					iframe[key] = val;
				});
			}

			if ('frameBorder' in iframe) {
				iframe.frameBorder = 0;
			}
			if ('allowTransparency' in iframe) {
				iframe.allowTransparency = "true";
			}
			iframe.name = (new Date()).getTime(); // give the iframe a unique name to prevent caching
			iframe.allowFullscreen = true;

			return iframe;
		}
	},

	// Abstracting the HTML and event identifiers for easy rebranding
	colorbox = 'colorbox',
	prefix = 'cbox',
	boxElement = prefix + 'Element',

	// Events
	event_open = prefix + '_open',
	event_load = prefix + '_load',
	event_complete = prefix + '_complete',
	event_cleanup = prefix + '_cleanup',
	event_closed = prefix + '_closed',
	event_purge = prefix + '_purge',

	// Cached jQuery Object Variables
	$overlay,
	$box,
	$wrap,
	$content,
	$topBorder,
	$leftBorder,
	$rightBorder,
	$bottomBorder,
	$related,
	$window,
	$loaded,
	$loadingBay,
	$loadingOverlay,
	$title,
	$current,
	$slideshow,
	$next,
	$prev,
	$close,
	$groupControls,
	$events = $('<a/>'), // $({}) would be prefered, but there is an issue with jQuery 1.4.2

	// Variables for cached values or use across multiple functions
	settings,
	interfaceHeight,
	interfaceWidth,
	loadedHeight,
	loadedWidth,
	index,
	photo,
	open,
	active,
	closing,
	loadingTimer,
	publicMethod,
	div = "div",
	requests = 0,
	previousCSS = {},
	init;

	// ****************
	// HELPER FUNCTIONS
	// ****************

	// Convenience function for creating new jQuery objects
	function $tag(tag, id, css) {
		var element = document.createElement(tag);

		if (id) {
			element.id = prefix + id;
		}

		if (css) {
			element.style.cssText = css;
		}

		return $(element);
	}

	// Get the window height using innerHeight when available to avoid an issue with iOS
	// http://bugs.jquery.com/ticket/6724
	function winheight() {
		return window.innerHeight ? window.innerHeight : $(window).height();
	}

	function Settings(element, options) {
		if (options !== Object(options)) {
			options = {};
		}

		this.cache = {};
		this.el = element;

		this.value = function(key) {
			var dataAttr;

			if (this.cache[key] === undefined) {
				dataAttr = $(this.el).attr('data-cbox-'+key);

				if (dataAttr !== undefined) {
					this.cache[key] = dataAttr;
				} else if (options[key] !== undefined) {
					this.cache[key] = options[key];
				} else if (defaults[key] !== undefined) {
					this.cache[key] = defaults[key];
				}
			}

			return this.cache[key];
		};

		this.get = function(key) {
			var value = this.value(key);
			return $.isFunction(value) ? value.call(this.el, this) : value;
		};
	}

	// Determine the next and previous members in a group.
	function getIndex(increment) {
		var
		max = $related.length,
		newIndex = (index + increment) % max;

		return (newIndex < 0) ? max + newIndex : newIndex;
	}

	// Convert '%' and 'px' values to integers
	function setSize(size, dimension) {
		return Math.round((/%/.test(size) ? ((dimension === 'x' ? $window.width() : winheight()) / 100) : 1) * parseInt(size, 10));
	}

	// Checks an href to see if it is a photo.
	// There is a force photo option (photo: true) for hrefs that cannot be matched by the regex.
	function isImage(settings, url) {
		return settings.get('photo') || settings.get('photoRegex').test(url);
	}

	function retinaUrl(settings, url) {
		return settings.get('retinaUrl') && window.devicePixelRatio > 1 ? url.replace(settings.get('photoRegex'), settings.get('retinaSuffix')) : url;
	}

	function trapFocus(e) {
		if ('contains' in $box[0] && !$box[0].contains(e.target) && e.target !== $overlay[0]) {
			e.stopPropagation();
			$box.focus();
		}
	}

	function setClass(str) {
		if (setClass.str !== str) {
			$box.add($overlay).removeClass(setClass.str).addClass(str);
			setClass.str = str;
		}
	}

	function getRelated(rel) {
		index = 0;

		if (rel && rel !== false && rel !== 'nofollow') {
			$related = $('.' + boxElement).filter(function () {
				var options = $.data(this, colorbox);
				var settings = new Settings(this, options);
				return (settings.get('rel') === rel);
			});
			index = $related.index(settings.el);

			// Check direct calls to Colorbox.
			if (index === -1) {
				$related = $related.add(settings.el);
				index = $related.length - 1;
			}
		} else {
			$related = $(settings.el);
		}
	}

	function trigger(event) {
		// for external use
		$(document).trigger(event);
		// for internal use
		$events.triggerHandler(event);
	}

	var slideshow = (function(){
		var active,
			className = prefix + "Slideshow_",
			click = "click." + prefix,
			timeOut;

		function clear () {
			clearTimeout(timeOut);
		}

		function set() {
			if (settings.get('loop') || $related[index + 1]) {
				clear();
				timeOut = setTimeout(publicMethod.next, settings.get('slideshowSpeed'));
			}
		}

		function start() {
			$slideshow
				.html(settings.get('slideshowStop'))
				.unbind(click)
				.one(click, stop);

			$events
				.bind(event_complete, set)
				.bind(event_load, clear);

			$box.removeClass(className + "off").addClass(className + "on");
		}

		function stop() {
			clear();

			$events
				.unbind(event_complete, set)
				.unbind(event_load, clear);

			$slideshow
				.html(settings.get('slideshowStart'))
				.unbind(click)
				.one(click, function () {
					publicMethod.next();
					start();
				});

			$box.removeClass(className + "on").addClass(className + "off");
		}

		function reset() {
			active = false;
			$slideshow.hide();
			clear();
			$events
				.unbind(event_complete, set)
				.unbind(event_load, clear);
			$box.removeClass(className + "off " + className + "on");
		}

		return function(){
			if (active) {
				if (!settings.get('slideshow')) {
					$events.unbind(event_cleanup, reset);
					reset();
				}
			} else {
				if (settings.get('slideshow') && $related[1]) {
					active = true;
					$events.one(event_cleanup, reset);
					if (settings.get('slideshowAuto')) {
						start();
					} else {
						stop();
					}
					$slideshow.show();
				}
			}
		};

	}());


	function launch(element) {
		var options;

		if (!closing) {

			options = $(element).data(colorbox);

			settings = new Settings(element, options);

			getRelated(settings.get('rel'));

			if (!open) {
				open = active = true; // Prevents the page-change action from queuing up if the visitor holds down the left or right keys.

				setClass(settings.get('className'));

				// Show colorbox so the sizes can be calculated in older versions of jQuery
				$box.css({visibility:'hidden', display:'block', opacity:''});

				$loaded = $tag(div, 'LoadedContent', 'width:0; height:0; overflow:hidden; visibility:hidden');
				$content.css({width:'', height:''}).append($loaded);

				// Cache values needed for size calculations
				interfaceHeight = $topBorder.height() + $bottomBorder.height() + $content.outerHeight(true) - $content.height();
				interfaceWidth = $leftBorder.width() + $rightBorder.width() + $content.outerWidth(true) - $content.width();
				loadedHeight = $loaded.outerHeight(true);
				loadedWidth = $loaded.outerWidth(true);

				// Opens inital empty Colorbox prior to content being loaded.
				var initialWidth = setSize(settings.get('initialWidth'), 'x');
				var initialHeight = setSize(settings.get('initialHeight'), 'y');
				var maxWidth = settings.get('maxWidth');
				var maxHeight = settings.get('maxHeight');

				settings.w = Math.max((maxWidth !== false ? Math.min(initialWidth, setSize(maxWidth, 'x')) : initialWidth) - loadedWidth - interfaceWidth, 0);
				settings.h = Math.max((maxHeight !== false ? Math.min(initialHeight, setSize(maxHeight, 'y')) : initialHeight) - loadedHeight - interfaceHeight, 0);

				$loaded.css({width:'', height:settings.h});
				publicMethod.position();

				trigger(event_open);
				settings.get('onOpen');

				$groupControls.add($title).hide();

				$box.focus();

				if (settings.get('trapFocus')) {
					// Confine focus to the modal
					// Uses event capturing that is not supported in IE8-
					if (document.addEventListener) {

						document.addEventListener('focus', trapFocus, true);

						$events.one(event_closed, function () {
							document.removeEventListener('focus', trapFocus, true);
						});
					}
				}

				// Return focus on closing
				if (settings.get('returnFocus')) {
					$events.one(event_closed, function () {
						$(settings.el).focus();
					});
				}
			}

			var opacity = parseFloat(settings.get('opacity'));
			$overlay.css({
				opacity: opacity === opacity ? opacity : '',
				cursor: settings.get('overlayClose') ? 'pointer' : '',
				visibility: 'visible'
			}).show();

			if (settings.get('closeButton')) {
				$close.html(settings.get('close')).appendTo($content);
			} else {
				$close.appendTo('<div/>'); // replace with .detach() when dropping jQuery < 1.4
			}

			load();
		}
	}

	// Colorbox's markup needs to be added to the DOM prior to being called
	// so that the browser will go ahead and load the CSS background images.
	function appendHTML() {
		if (!$box) {
			init = false;
			$window = $(window);
			$box = $tag(div).attr({
				id: colorbox,
				'class': $.support.opacity === false ? prefix + 'IE' : '', // class for optional IE8 & lower targeted CSS.
				role: 'dialog',
				tabindex: '-1'
			}).hide();
			$overlay = $tag(div, "Overlay").hide();
			$loadingOverlay = $([$tag(div, "LoadingOverlay")[0],$tag(div, "LoadingGraphic")[0]]);
			$wrap = $tag(div, "Wrapper");
			$content = $tag(div, "Content").append(
				$title = $tag(div, "Title"),
				$current = $tag(div, "Current"),
				$prev = $('<button type="button"/>').attr({id:prefix+'Previous'}),
				$next = $('<button type="button"/>').attr({id:prefix+'Next'}),
				$slideshow = $('<button type="button"/>').attr({id:prefix+'Slideshow'}),
				$loadingOverlay
			);

			$close = $('<button type="button"/>').attr({id:prefix+'Close'});

			$wrap.append( // The 3x3 Grid that makes up Colorbox
				$tag(div).append(
					$tag(div, "TopLeft"),
					$topBorder = $tag(div, "TopCenter"),
					$tag(div, "TopRight")
				),
				$tag(div, false, 'clear:left').append(
					$leftBorder = $tag(div, "MiddleLeft"),
					$content,
					$rightBorder = $tag(div, "MiddleRight")
				),
				$tag(div, false, 'clear:left').append(
					$tag(div, "BottomLeft"),
					$bottomBorder = $tag(div, "BottomCenter"),
					$tag(div, "BottomRight")
				)
			).find('div div').css({'float': 'left'});

			$loadingBay = $tag(div, false, 'position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;');

			$groupControls = $next.add($prev).add($current).add($slideshow);
		}
		if (document.body && !$box.parent().length) {
			$(document.body).append($overlay, $box.append($wrap, $loadingBay));
		}
	}

	// Add Colorbox's event bindings
	function addBindings() {
		function clickHandler(e) {
			// ignore non-left-mouse-clicks and clicks modified with ctrl / command, shift, or alt.
			// See: http://jacklmoore.com/notes/click-events/
			if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				launch(this);
			}
		}

		if ($box) {
			if (!init) {
				init = true;

				// Anonymous functions here keep the public method from being cached, thereby allowing them to be redefined on the fly.
				$next.click(function () {
					publicMethod.next();
				});
				$prev.click(function () {
					publicMethod.prev();
				});
				$close.click(function () {
					publicMethod.close();
				});
				$overlay.click(function () {
					if (settings.get('overlayClose')) {
						publicMethod.close();
					}
				});

				// Key Bindings
				$(document).bind('keydown.' + prefix, function (e) {
					var key = e.keyCode;
					if (open && settings.get('escKey') && key === 27) {
						e.preventDefault();
						publicMethod.close();
					}
					if (open && settings.get('arrowKey') && $related[1] && !e.altKey) {
						if (key === 37) {
							e.preventDefault();
							$prev.click();
						} else if (key === 39) {
							e.preventDefault();
							$next.click();
						}
					}
				});

				if ($.isFunction($.fn.on)) {
					// For jQuery 1.7+
					$(document).on('click.'+prefix, '.'+boxElement, clickHandler);
				} else {
					// For jQuery 1.3.x -> 1.6.x
					// This code is never reached in jQuery 1.9, so do not contact me about 'live' being removed.
					// This is not here for jQuery 1.9, it's here for legacy users.
					$('.'+boxElement).live('click.'+prefix, clickHandler);
				}
			}
			return true;
		}
		return false;
	}

	// Don't do anything if Colorbox already exists.
	if ($[colorbox]) {
		return;
	}

	// Append the HTML when the DOM loads
	$(appendHTML);


	// ****************
	// PUBLIC FUNCTIONS
	// Usage format: $.colorbox.close();
	// Usage from within an iframe: parent.jQuery.colorbox.close();
	// ****************

	publicMethod = $.fn[colorbox] = $[colorbox] = function (options, callback) {
		var settings;
		var $obj = this;

		options = options || {};

		if ($.isFunction($obj)) { // assume a call to $.colorbox
			$obj = $('<a/>');
			options.open = true;
		}

		if (!$obj[0]) { // colorbox being applied to empty collection
			return $obj;
		}

		appendHTML();

		if (addBindings()) {

			if (callback) {
				options.onComplete = callback;
			}

			$obj.each(function () {
				var old = $.data(this, colorbox) || {};
				$.data(this, colorbox, $.extend(old, options));
			}).addClass(boxElement);

			settings = new Settings($obj[0], options);

			if (settings.get('open')) {
				launch($obj[0]);
			}
		}

		return $obj;
	};

	publicMethod.position = function (speed, loadedCallback) {
		var
		css,
		top = 0,
		left = 0,
		offset = $box.offset(),
		scrollTop,
		scrollLeft;

		$window.unbind('resize.' + prefix);

		// remove the modal so that it doesn't influence the document width/height
		$box.css({top: -9e4, left: -9e4});

		scrollTop = $window.scrollTop();
		scrollLeft = $window.scrollLeft();

		if (settings.get('fixed')) {
			offset.top -= scrollTop;
			offset.left -= scrollLeft;
			$box.css({position: 'fixed'});
		} else {
			top = scrollTop;
			left = scrollLeft;
			$box.css({position: 'absolute'});
		}

		// keeps the top and left positions within the browser's viewport.
		if (settings.get('right') !== false) {
			left += Math.max($window.width() - settings.w - loadedWidth - interfaceWidth - setSize(settings.get('right'), 'x'), 0);
		} else if (settings.get('left') !== false) {
			left += setSize(settings.get('left'), 'x');
		} else {
			left += Math.round(Math.max($window.width() - settings.w - loadedWidth - interfaceWidth, 0) / 2);
		}

		if (settings.get('bottom') !== false) {
			top += Math.max(winheight() - settings.h - loadedHeight - interfaceHeight - setSize(settings.get('bottom'), 'y'), 0);
		} else if (settings.get('top') !== false) {
			top += setSize(settings.get('top'), 'y');
		} else {
			top += Math.round(Math.max(winheight() - settings.h - loadedHeight - interfaceHeight, 0) / 2);
		}

		$box.css({top: offset.top, left: offset.left, visibility:'visible'});

		// this gives the wrapper plenty of breathing room so it's floated contents can move around smoothly,
		// but it has to be shrank down around the size of div#colorbox when it's done.  If not,
		// it can invoke an obscure IE bug when using iframes.
		$wrap[0].style.width = $wrap[0].style.height = "9999px";

		function modalDimensions() {
			$topBorder[0].style.width = $bottomBorder[0].style.width = $content[0].style.width = (parseInt($box[0].style.width,10) - interfaceWidth)+'px';
			$content[0].style.height = $leftBorder[0].style.height = $rightBorder[0].style.height = (parseInt($box[0].style.height,10) - interfaceHeight)+'px';
		}

		css = {width: settings.w + loadedWidth + interfaceWidth, height: settings.h + loadedHeight + interfaceHeight, top: top, left: left};

		// setting the speed to 0 if the content hasn't changed size or position
		if (speed) {
			var tempSpeed = 0;
			$.each(css, function(i){
				if (css[i] !== previousCSS[i]) {
					tempSpeed = speed;
					return;
				}
			});
			speed = tempSpeed;
		}

		previousCSS = css;

		if (!speed) {
			$box.css(css);
		}

		$box.dequeue().animate(css, {
			duration: speed || 0,
			complete: function () {
				modalDimensions();

				active = false;

				// shrink the wrapper down to exactly the size of colorbox to avoid a bug in IE's iframe implementation.
				$wrap[0].style.width = (settings.w + loadedWidth + interfaceWidth) + "px";
				$wrap[0].style.height = (settings.h + loadedHeight + interfaceHeight) + "px";

				if (settings.get('reposition')) {
					setTimeout(function () {  // small delay before binding onresize due to an IE8 bug.
						$window.bind('resize.' + prefix, publicMethod.position);
					}, 1);
				}

				if ($.isFunction(loadedCallback)) {
					loadedCallback();
				}
			},
			step: modalDimensions
		});
	};

	publicMethod.resize = function (options) {
		var scrolltop;

		if (open) {
			options = options || {};

			if (options.width) {
				settings.w = setSize(options.width, 'x') - loadedWidth - interfaceWidth;
			}

			if (options.innerWidth) {
				settings.w = setSize(options.innerWidth, 'x');
			}

			$loaded.css({width: settings.w});

			if (options.height) {
				settings.h = setSize(options.height, 'y') - loadedHeight - interfaceHeight;
			}

			if (options.innerHeight) {
				settings.h = setSize(options.innerHeight, 'y');
			}

			if (!options.innerHeight && !options.height) {
				scrolltop = $loaded.scrollTop();
				$loaded.css({height: "auto"});
				settings.h = $loaded.height();
			}

			$loaded.css({height: settings.h});

			if(scrolltop) {
				$loaded.scrollTop(scrolltop);
			}

			publicMethod.position(settings.get('transition') === "none" ? 0 : settings.get('speed'));
		}
	};

	publicMethod.prep = function (object) {
		if (!open) {
			return;
		}

		var callback, speed = settings.get('transition') === "none" ? 0 : settings.get('speed');

		$loaded.remove();

		$loaded = $tag(div, 'LoadedContent').append(object);

		function getWidth() {
			settings.w = settings.w || $loaded.width();
			settings.w = settings.mw && settings.mw < settings.w ? settings.mw : settings.w;
			return settings.w;
		}
		function getHeight() {
			settings.h = settings.h || $loaded.height();
			settings.h = settings.mh && settings.mh < settings.h ? settings.mh : settings.h;
			return settings.h;
		}

		$loaded.hide()
		.appendTo($loadingBay.show())// content has to be appended to the DOM for accurate size calculations.
		.css({width: getWidth(), overflow: settings.get('scrolling') ? 'auto' : 'hidden'})
		.css({height: getHeight()})// sets the height independently from the width in case the new width influences the value of height.
		.prependTo($content);

		$loadingBay.hide();

		// floating the IMG removes the bottom line-height and fixed a problem where IE miscalculates the width of the parent element as 100% of the document width.

		$(photo).css({'float': 'none'});

		setClass(settings.get('className'));

		callback = function () {
			var total = $related.length,
				iframe,
				complete;

			if (!open) {
				return;
			}

			function removeFilter() { // Needed for IE8 in versions of jQuery prior to 1.7.2
				if ($.support.opacity === false) {
					$box[0].style.removeAttribute('filter');
				}
			}

			complete = function () {
				clearTimeout(loadingTimer);
				$loadingOverlay.hide();
				trigger(event_complete);
				settings.get('onComplete');
			};


			$title.html(settings.get('title')).show();
			$loaded.show();

			if (total > 1) { // handle grouping
				if (typeof settings.get('current') === "string") {
					$current.html(settings.get('current').replace('{current}', index + 1).replace('{total}', total)).show();
				}

				$next[(settings.get('loop') || index < total - 1) ? "show" : "hide"]().html(settings.get('next'));
				$prev[(settings.get('loop') || index) ? "show" : "hide"]().html(settings.get('previous'));

				slideshow();

				// Preloads images within a rel group
				if (settings.get('preloading')) {
					$.each([getIndex(-1), getIndex(1)], function(){
						var img,
							i = $related[this],
							settings = new Settings(i, $.data(i, colorbox)),
							src = settings.get('href');

						if (src && isImage(settings, src)) {
							src = retinaUrl(settings, src);
							img = document.createElement('img');
							img.src = src;
						}
					});
				}
			} else {
				$groupControls.hide();
			}

			if (settings.get('iframe')) {

				iframe = settings.get('createIframe');

				if (!settings.get('scrolling')) {
					iframe.scrolling = "no";
				}

				$(iframe)
					.attr({
						src: settings.get('href'),
						'class': prefix + 'Iframe'
					})
					.one('load', complete)
					.appendTo($loaded);

				$events.one(event_purge, function () {
					iframe.src = "//about:blank";
				});

				if (settings.get('fastIframe')) {
					$(iframe).trigger('load');
				}
			} else {
				complete();
			}

			if (settings.get('transition') === 'fade') {
				$box.fadeTo(speed, 1, removeFilter);
			} else {
				removeFilter();
			}
		};

		if (settings.get('transition') === 'fade') {
			$box.fadeTo(speed, 0, function () {
				publicMethod.position(0, callback);
			});
		} else {
			publicMethod.position(speed, callback);
		}
	};

	function load () {
		var href, setResize, prep = publicMethod.prep, $inline, request = ++requests;

		active = true;

		photo = false;

		trigger(event_purge);
		trigger(event_load);
		settings.get('onLoad');

		settings.h = settings.get('height') ?
				setSize(settings.get('height'), 'y') - loadedHeight - interfaceHeight :
				settings.get('innerHeight') && setSize(settings.get('innerHeight'), 'y');

		settings.w = settings.get('width') ?
				setSize(settings.get('width'), 'x') - loadedWidth - interfaceWidth :
				settings.get('innerWidth') && setSize(settings.get('innerWidth'), 'x');

		// Sets the minimum dimensions for use in image scaling
		settings.mw = settings.w;
		settings.mh = settings.h;

		// Re-evaluate the minimum width and height based on maxWidth and maxHeight values.
		// If the width or height exceed the maxWidth or maxHeight, use the maximum values instead.
		if (settings.get('maxWidth')) {
			settings.mw = setSize(settings.get('maxWidth'), 'x') - loadedWidth - interfaceWidth;
			settings.mw = settings.w && settings.w < settings.mw ? settings.w : settings.mw;
		}
		if (settings.get('maxHeight')) {
			settings.mh = setSize(settings.get('maxHeight'), 'y') - loadedHeight - interfaceHeight;
			settings.mh = settings.h && settings.h < settings.mh ? settings.h : settings.mh;
		}

		href = settings.get('href');

		loadingTimer = setTimeout(function () {
			$loadingOverlay.show();
		}, 100);

		if (settings.get('inline')) {
			var $target = $(href).eq(0);
			// Inserts an empty placeholder where inline content is being pulled from.
			// An event is bound to put inline content back when Colorbox closes or loads new content.
			$inline = $('<div>').hide().insertBefore($target);

			$events.one(event_purge, function () {
				$inline.replaceWith($target);
			});

			prep($target);
		} else if (settings.get('iframe')) {
			// IFrame element won't be added to the DOM until it is ready to be displayed,
			// to avoid problems with DOM-ready JS that might be trying to run in that iframe.
			prep(" ");
		} else if (settings.get('html')) {
			prep(settings.get('html'));
		} else if (isImage(settings, href)) {

			href = retinaUrl(settings, href);

			photo = settings.get('createImg');

			$(photo)
			.addClass(prefix + 'Photo')
			.bind('error.'+prefix,function () {
				prep($tag(div, 'Error').html(settings.get('imgError')));
			})
			.one('load', function () {
				if (request !== requests) {
					return;
				}

				// A small pause because some browsers will occassionaly report a
				// img.width and img.height of zero immediately after the img.onload fires
				setTimeout(function(){
					var percent;

					if (settings.get('retinaImage') && window.devicePixelRatio > 1) {
						photo.height = photo.height / window.devicePixelRatio;
						photo.width = photo.width / window.devicePixelRatio;
					}

					if (settings.get('scalePhotos')) {
						setResize = function () {
							photo.height -= photo.height * percent;
							photo.width -= photo.width * percent;
						};
						if (settings.mw && photo.width > settings.mw) {
							percent = (photo.width - settings.mw) / photo.width;
							setResize();
						}
						if (settings.mh && photo.height > settings.mh) {
							percent = (photo.height - settings.mh) / photo.height;
							setResize();
						}
					}

					if (settings.h) {
						photo.style.marginTop = Math.max(settings.mh - photo.height, 0) / 2 + 'px';
					}

					if ($related[1] && (settings.get('loop') || $related[index + 1])) {
						photo.style.cursor = 'pointer';

						$(photo).bind('click.'+prefix, function () {
							publicMethod.next();
						});
					}

					photo.style.width = photo.width + 'px';
					photo.style.height = photo.height + 'px';
					prep(photo);
				}, 1);
			});

			photo.src = href;

		} else if (href) {
			$loadingBay.load(href, settings.get('data'), function (data, status) {
				if (request === requests) {
					prep(status === 'error' ? $tag(div, 'Error').html(settings.get('xhrError')) : $(this).contents());
				}
			});
		}
	}

	// Navigates to the next page/image in a set.
	publicMethod.next = function () {
		if (!active && $related[1] && (settings.get('loop') || $related[index + 1])) {
			index = getIndex(1);
			launch($related[index]);
		}
	};

	publicMethod.prev = function () {
		if (!active && $related[1] && (settings.get('loop') || index)) {
			index = getIndex(-1);
			launch($related[index]);
		}
	};

	// Note: to use this within an iframe use the following format: parent.jQuery.colorbox.close();
	publicMethod.close = function () {
		if (open && !closing) {

			closing = true;
			open = false;
			trigger(event_cleanup);
			settings.get('onCleanup');
			$window.unbind('.' + prefix);
			$overlay.fadeTo(settings.get('fadeOut') || 0, 0);

			$box.stop().fadeTo(settings.get('fadeOut') || 0, 0, function () {
				$box.hide();
				$overlay.hide();
				trigger(event_purge);
				$loaded.remove();

				setTimeout(function () {
					closing = false;
					trigger(event_closed);
					settings.get('onClosed');
				}, 1);
			});
		}
	};

	// Removes changes Colorbox made to the document, but does not remove the plugin.
	publicMethod.remove = function () {
		if (!$box) { return; }

		$box.stop();
		$[colorbox].close();
		$box.stop(false, true).remove();
		$overlay.remove();
		closing = false;
		$box = null;
		$('.' + boxElement)
			.removeData(colorbox)
			.removeClass(boxElement);

		$(document).unbind('click.'+prefix).unbind('keydown.'+prefix);
	};

	// A method for fetching the current element Colorbox is referencing.
	// returns a jQuery object.
	publicMethod.element = function () {
		return $(settings.el);
	};

	publicMethod.settings = defaults;

}(jQuery, document, window));
;
(function ($) {
    'use strict';

    // start coding from here common page JS functions



    var loadBlobVideo = function ($videos, index) {
        var video = $videos.get(index),
            src, xml;

        if (video) {
            src = video.getAttribute('data-video');
            xml = new XMLHttpRequest();

            xml.onload = function () {
                if (xml.status === 200) {
                    video.src = URL.createObjectURL(xml.response);

                    video = xml = src = null;

                    if ( index + 1 < $videos.length ) {
                        loadBlobVideo($videos, index + 1);
                    }
                }
            };

            xml.onerror = function (err) {
                console.error('Got error', err, 'loading original source file');

                video.src = src;

                video = xml = src = null;

                if ( index + 1 <  $videos.length ) {
                    loadBlobVideo($videos, index + 1);
                }
            };

            xml.open('GET', src, true);
            xml.responseType = 'blob';
            xml.send();
        } else {
            video = null;
        }
    };

    window.__globals = {
        $window: $(window),
        $body: $('body'),
        $pageHeader: $('.page-header'),
        themePath: window.drupalSettings.path.baseUrl + (window.isHTML ? '' : 'themes/afcons/'),
        ua: window.navigator.userAgent.toLowerCase(),
        bc: {},
        preloadImage: function (imgPath, $parent) {
            var $img;

            if (imgPath !== 'none') {
                $img = $('<img />').prop({
                    'class': 'loaded-img',
                    'src': imgPath
                });

                $parent.prepend($img);
            }
        },
        getPlayer: function (videoId) {
            var player;

            $.each(videojs.players, function (i, p) {
                if (p.options_['data-video-id'] === videoId) {
                    player = p;
                    return false;
                }
            });

            return player;
        },
        init_BC: function (autoPlay) {
            var player, playerDOMID;

            try {
                playerDOMID = this.id;

                this.setAttribute('data-bc-id', this.id);

                $(this).attr(JSON.parse(this.innerHTML));

                player = window.__globals.bc[this.id] = window.bc( this );

                player.ready(function () {
                    player.on('play', function () {
                        if (player.options_.hasOwnProperty('data-nopause')) return;

                        $.each(videojs.players, function (vdoId_, vdo) {
                            if ( vdoId_ !== playerDOMID && !vdo.options_.hasOwnProperty('data-nopause') ) {
                                vdo.pause();
                                vdo.currentTime(0);
                            }
                        });

                        $(player.el_).closest('.play-container').addClass('show-player');
                    });

                    player.on('pause', function () {
                        $(player.el_).closest('.play-container').removeClass('show-player');
                    });

                    if (autoPlay) {
                        player.play();
                    }
                });

                return player;
            } catch (e) {
                console.error('unable to initialize BrightCove video dynamically!', e);
            }
        }
    };

    window.__globals.jsonPath = window.__globals.themePath + 'assets/json/';

    window.__globals.isIOS = (function () {
        var ios = false;

        if (window.__globals.ua.indexOf('mac') !== -1 && window.__globals.ua.indexOf('safari') !== -1) {
            ios = 'safari';

            if (window.__globals.ua.indexOf('chrome') !== -1) {
                ios = 'chrome';
            }
        }

        return ios;
    })();

    if (window.__globals.isIOS) {
        window.__globals.$body.addClass('ios ' + window.__globals.isIOS);
    }

    window.__globals.$body.find('.menu-trigger').on('click', function (e) {
        window.__globals.$body.toggleClass('open-menu');
        $('.menuText').toggleClass('hide');
    });

    $(document.documentElement).removeClass('no-js').addClass('js');

    $('.play-trigger').on('click', function (e) {
        var $video = $(this).closest('.play-container').find('.video-js');

        if ( $video.attr('data-bc-id') ) {
            videojs.players[ $video.attr('data-bc-id') ].play();
        } else {
            window.__globals.init_BC.call($video.get(0), true);
        }

        $video = undefined;
    });

    $('.vjs-control').on('mousewheel DOMMouseScroll', function (e) {
        e.stopPropagation();
    });

    loadBlobVideo($('video[data-video]'), 0);

    window.addEventListener('scroll', function (e) {
        var wTop = window.__globals.$window.scrollTop(),
            oldTop = window.__globals.$window.data('scrollTop');

        if (wTop >= 0) {
            if (wTop > oldTop) {
                window.__globals.$pageHeader.removeClass('header-nav-down').addClass('header-nav-up');
            } else {
                window.__globals.$pageHeader.removeClass('header-nav-up').addClass('header-nav-down');
            }

            window.__globals.$window.data('scrollTop', wTop);
        }
    }, { passive: true });
    

    document.addEventListener('scroll', e => {
        var bTop = document.documentElement.scrollTop || document.body.scrollTop;
    
        if (bTop > 430) {
          $('body').addClass('fixedMenu');
        } else {
          $('body').removeClass('fixedMenu');
        }
    
      }, {
        passive: true
      });


    $('.lang-wrapper').each(function () {
        var $links = $(this).addClass('active').find('.links').hide();

        $(this).find('.lang-switcher').on('click', function (e) {
            e.stopPropagation();

            $links.slideToggle('fast');
        });
    });

    window.__globals.$body.on('click', function () {
        $('.lang-wrapper .links').slideUp('fast');
    });

    $('.floating-btn').each(function () {
        window.__globals.$body.addClass('has-floating-btn');
    });

      $('.afcons-slider').slick({
        dots: false,
        infinite: false,
        touchThreshold : 100,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.prevArrow').click(function (e) {
        e.preventDefault();
        $('.afcons-slider').slick('slickPrev');
    });

    $('.nextArrow').click(function (e) {
        e.preventDefault();
        $('.afcons-slider').slick('slickNext');
    });

    $('.poster').click(function(e){
        $(this).parent().addClass('jashActive');
        $(this).hide();
    
      
        $(this).siblings('.play-btn').hide();
        $(this).siblings('video').trigger('play');
    });

    $('.play-btn').click(function(e){
        $('video').trigger('pause')
        $(this).siblings('video').trigger('play')
        $(this).parent().addClass('jashActive');
        $(this).hide();
    
      
        $(this).siblings('.poster').hide();
        $(this).siblings('video').trigger('play');
    });
    $('.afcons-slider').on('afterChange', function(currentSlide){
       $('.bg').removeClass('jashActive');
        $('.poster').show();
        $('.play-btn').show();
     
    });
    setTimeout(function(){
        $('.gallery-pop-up').slideDown(400);
        $('.gallery-overlay').slideDown(400);
    }, 500);
    
    $('.gallery-pop-up .crossImg').click(function(e){
        $('.gallery-pop-up').slideUp(400);
        $('.gallery-overlay').slideUp(400);
        $('.bg').removeClass('jashActive');
        $('.poster').show();
        $('.play-btn').show();
    });

    
    // setTimeout(function(){
    //     $('.afcons-pop-up').slideDown(400);
    //     $('.afcons-slider').get(0).slick.setPosition()
    // }, 500);
    
    // $('.afcons-pop-up .crossImg').click(function(e){
    //     $('.afcons-pop-up').slideUp(400);
    //     $('.bg').removeClass('jashActive');
    //     $('.poster').show();
    //     $('.play-btn').show();
    // });



    setTimeout(function(){
        $('.gallery-pop-up').slideDown(400);
        $('.gallery-overlay').slideDown(400);
    }, 500);
    
    $('.gallery-pop-up .crossImg').click(function(e){
        $('.gallery-pop-up').slideUp(400);
        $('.gallery-overlay').slideUp(400);
        $('.bg').removeClass('jashActive');
        $('.poster').show();
        $('.play-btn').show();
    });
    setTimeout(function(){
        $('.gallery-pop-up').slideDown(400);
        $('.gallery-overlay').slideDown(400);
    }, 500);
    
    $('.gallery-pop-up .crossImg').click(function(e){
        $('.gallery-pop-up').slideUp(400);
        $('.gallery-overlay').slideUp(400);
        $('.bg').removeClass('jashActive');
        $('.poster').show();
        $('.play-btn').show();
    });
    setTimeout(function(){
        $('.gallery-pop-up').slideDown(400);
        $('.gallery-overlay').slideDown(400);
    }, 500);
    
    $('.gallery-pop-up .crossImg').click(function(e){
        $('.gallery-pop-up').slideUp(400);
        $('.gallery-overlay').slideUp(400);
        $('.bg').removeClass('jashActive');
        $('.poster').show();
        $('.play-btn').show();
    });
    setTimeout(function(){
        $('.gallery-pop-up').slideDown(400);
        $('.gallery-overlay').slideDown(400);
    }, 500);
    
    $('.gallery-pop-up .crossImg').click(function(e){
        $('.gallery-pop-up').slideUp(400);
        $('.gallery-overlay').slideUp(400);
        $('.bg').removeClass('jashActive');
        $('.poster').show();
        $('.play-btn').show();
    });
    setTimeout(function(){
        $('.gallery-pop-up').slideDown(400);
        $('.gallery-overlay').slideDown(400);
    }, 500);
    
    $('.gallery-pop-up .crossImg').click(function(e){
        $('.gallery-pop-up').slideUp(400);
        $('.gallery-overlay').slideUp(400);
        $('.bg').removeClass('jashActive');
        $('.poster').show();
        $('.play-btn').show();
    });
    
    $('.gallery_click').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.video_popup').slideDown(400);
        $('.video-gallery-overlay').slideDown(400);
    });
    
    $('.video_popup .crossImg').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.video-gallery-overlay').slideUp(400);
        $('.video_popup').slideUp(400);
        $('.bg').removeClass('jashActive');
        $('.poster').show();
        $('.play-btn').show();
    });

    var videoElem = document.querySelector(".video_popup video");
  
    $('.poster, .play-btn').on('click', function(e) {
        videoElem.play();
        videoElem.currentTime = 0;
      });
  
    $( '.video_popup .crossImg' ).on( 'click', function(e) {
      e.preventDefault();  
      videoElem.pause();
      videoElem.currentTime = 0;
    } );

    $('.tabLink').click(function () {
        var dataID = $(this).attr('data-video');
        $(this).addClass('active').siblings().removeClass('active');
    
        $('#video-' + dataID).show().siblings().hide();
        $('.overlay, .popUp-video, .crossImg').show();
    });

    $('.popUp-video .crossImg, .overlay').click(function(e){
        $('.videoSection').hide();
        $('.overlay').hide();
        $('.popUp-video, .popUp-video .crossImg').hide();
    });

    $('.investor-accordion-show-list .pdf_call').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('#pdf_popup').addClass('active');
        $('.overlay').show();
    });

    $('.no_pdf').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('#pdf_popup').removeClass('active');
        $('.overlay').hide();
    });

    
    $('.pdf_view a').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $(this).parent('.pdf_view').siblings('.pdf_container').toggleClass('active');
        $(this).parent('.pdf_view').siblings('.pdf_set').toggleClass('active');
        $(this).toggleClass('active');
    });
    // setTimeout(() => {
    //     $('.pdf_view a').click(function(e){
    //         e.preventDefault();
    //         e.stopPropagation();
    //         $(this).parent('.pdf_view').parent('.pdf_container').toggleClass('active');
    //         $(this).parent('.pdf_view').parent('.pdf_set').toggleClass('active');
    //         $(this).toggleClass('active');
    //     });
    // }, 200);

    $('.pdf_button').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        var tabID = $(this).attr('data-tab');
        $(this).addClass('active').siblings().removeClass('active');
        $('#tab-' + tabID).addClass('active').siblings().removeClass('active');
    });


    $(document).ready(function(){
        $('.pdf_container').each(function(){
            var containerLength = $(this).find('.pdf_item').length;
            
            if(containerLength > 6) {
                $(this).siblings('.pdf_view').addClass('active');
            } else {
                $(this).siblings('.pdf_view').removeClass('active');
            }
            
            console.log("Child length of .pdf_container: " + containerLength);
        });
    });

    
    $(document).ready(function(){
        $('select').on('change', function(){
            $('.pdf_container').each(function(){
                var containerLength = $(this).find('.pdf_item').length;
                
                if(containerLength > 6) {
                    $(this).siblings('.pdf_view').addClass('active');
                } else {
                    $(this).siblings('.pdf_view').removeClass('active');
                }
                
                console.log("Child length of .pdf_container: " + containerLength);
            });
        });
    });
    $(document).ready(function(){
        $('.pdf_block').each(function(){
            var containerLength = $(this).find('.pdf_item').length;
            
            if(containerLength > 4) {
                $(this).siblings('.pdf_view').addClass('active');
            } else {
                $(this).siblings('.pdf_view').removeClass('active');
            }
            
            console.log("Child length of .pdf_block: " + containerLength);
        });
    });

    
    $(document).ready(function(){
        $('select').on('change', function(){
            $('.pdf_block').each(function(){
                var containerLength1 = $(this).find('.pdf_item').length;
                
                if(containerLength1 > 4) {
                    $(this).siblings('.pdf_view').addClass('active');
                } else {
                    $(this).siblings('.pdf_view').removeClass('active');
                }
                
                console.log("Child length of .pdf_block: " + containerLength1);
            });
        });
    });
    
    $(document).ready(function(){
        $('.pdf_set ').each(function(){
            var containerLength2 = $(this).find('.pdf_item').length;
            
            if(containerLength2 > 2) {
                $(this).siblings('.pdf_view').addClass('active');
            } else {
                $(this).siblings('.pdf_view').removeClass('active');
            }
            
            console.log("Child length of .pdf_set : " + containerLength2);
        });
    });

    
    $(document).ready(function(){
        $('select').on('change', function(){
            $('.pdf_set ').each(function(){
                var containerLength2 = $(this).find('.pdf_item').length;
                
                if(containerLength2 > 2) {
                    $(this).siblings('.pdf_view').addClass('active');
                } else {
                    $(this).siblings('.pdf_view').removeClass('active');
                }
                
                console.log("Child length of pdf_set : " + containerLength2);
            });
        });
    });
    $(document).ready(function(){
        $('.pdf_button').on('click', function(){
            $('.pdf_set ').each(function(){
                var containerLength2 = $(this).find('.pdf_item').length;
                
                if(containerLength2 > 2) {
                    $(this).siblings('.pdf_view').addClass('active');
                } else {
                    $(this).siblings('.pdf_view').removeClass('active');
                }
                
                console.log("Child length of pdf_set : " + containerLength2);
            });
        });
    });
    

    $(document).ready(function(){
        $('.pdf_container_10').each(function(){
            var containerLength3 = $(this).find('.pdf_item').length;
            
            if(containerLength3 > 4) {
                $(this).siblings('.pdf_view').addClass('active');
            } else {
                $(this).siblings('.pdf_view').removeClass('active');
            }
            
            console.log("Child length of .pdf_container: " + containerLength3);
        });
    });

    
    $(document).ready(function(){
        $('select').on('change', function(){
            $('.pdf_container_10').each(function(){
                var containerLength3 = $(this).find('.pdf_item').length;
                
                if(containerLength3 > 4) {
                    $(this).siblings('.pdf_view').addClass('active');
                } else {
                    $(this).siblings('.pdf_view').removeClass('active');
                }
                
                console.log("Child length of .pdf_container: " + containerLength3);
            });
        });
    });
  
  
}.call(window, window.jQuery));


var iframe = document.getElementById('iframeFlipBook');
if(iframe){
var style = document.createElement('style');
style.textContent =
  '.clickToRead {' +
  '  display: none;' +
  '}' 
;
iframe.contentDocument.head.appendChild(style);
}



;
/* jquery.nicescroll v3.7.6 InuYaksa - MIT - https://nicescroll.areaaperta.com */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";var o=!1,t=!1,r=0,i=2e3,s=0,n=e,l=document,a=window,c=n(a),d=[],u=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||!1,h=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.mozCancelAnimationFrame||!1;if(u)a.cancelAnimationFrame||(h=function(e){});else{var p=0;u=function(e,o){var t=(new Date).getTime(),r=Math.max(0,16-(t-p)),i=a.setTimeout(function(){e(t+r)},r);return p=t+r,i},h=function(e){a.clearTimeout(e)}}var m=a.MutationObserver||a.WebKitMutationObserver||!1,f=Date.now||function(){return(new Date).getTime()},g={zindex:"auto",cursoropacitymin:0,cursoropacitymax:1,cursorcolor:"#424242",cursorwidth:"6px",cursorborder:"1px solid #fff",cursorborderradius:"5px",scrollspeed:40,mousescrollstep:27,touchbehavior:!1,emulatetouch:!1,hwacceleration:!0,usetransition:!0,boxzoom:!1,dblclickzoom:!0,gesturezoom:!0,grabcursorenabled:!0,autohidemode:!0,background:"",iframeautoresize:!0,cursorminheight:32,preservenativescrolling:!0,railoffset:!1,railhoffset:!1,bouncescroll:!0,spacebarenabled:!0,railpadding:{top:0,right:0,left:0,bottom:0},disableoutline:!0,horizrailenabled:!0,railalign:"right",railvalign:"bottom",enabletranslate3d:!0,enablemousewheel:!0,enablekeyboard:!0,smoothscroll:!0,sensitiverail:!0,enablemouselockapi:!0,cursorfixedheight:!1,directionlockdeadzone:6,hidecursordelay:400,nativeparentscrolling:!0,enablescrollonselection:!0,overflowx:!0,overflowy:!0,cursordragspeed:.3,rtlmode:"auto",cursordragontouch:!1,oneaxismousemode:"auto",scriptpath:function(){var e=l.currentScript||function(){var e=l.getElementsByTagName("script");return!!e.length&&e[e.length-1]}(),o=e?e.src.split("?")[0]:"";return o.split("/").length>0?o.split("/").slice(0,-1).join("/")+"/":""}(),preventmultitouchscrolling:!0,disablemutationobserver:!1,enableobserver:!0,scrollbarid:!1},v=!1,w=function(){if(v)return v;var e=l.createElement("DIV"),o=e.style,t=navigator.userAgent,r=navigator.platform,i={};return i.haspointerlock="pointerLockElement"in l||"webkitPointerLockElement"in l||"mozPointerLockElement"in l,i.isopera="opera"in a,i.isopera12=i.isopera&&"getUserMedia"in navigator,i.isoperamini="[object OperaMini]"===Object.prototype.toString.call(a.operamini),i.isie="all"in l&&"attachEvent"in e&&!i.isopera,i.isieold=i.isie&&!("msInterpolationMode"in o),i.isie7=i.isie&&!i.isieold&&(!("documentMode"in l)||7===l.documentMode),i.isie8=i.isie&&"documentMode"in l&&8===l.documentMode,i.isie9=i.isie&&"performance"in a&&9===l.documentMode,i.isie10=i.isie&&"performance"in a&&10===l.documentMode,i.isie11="msRequestFullscreen"in e&&l.documentMode>=11,i.ismsedge="msCredentials"in a,i.ismozilla="MozAppearance"in o,i.iswebkit=!i.ismsedge&&"WebkitAppearance"in o,i.ischrome=i.iswebkit&&"chrome"in a,i.ischrome38=i.ischrome&&"touchAction"in o,i.ischrome22=!i.ischrome38&&i.ischrome&&i.haspointerlock,i.ischrome26=!i.ischrome38&&i.ischrome&&"transition"in o,i.cantouch="ontouchstart"in l.documentElement||"ontouchstart"in a,i.hasw3ctouch=(a.PointerEvent||!1)&&(navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0),i.hasmstouch=!i.hasw3ctouch&&(a.MSPointerEvent||!1),i.ismac=/^mac$/i.test(r),i.isios=i.cantouch&&/iphone|ipad|ipod/i.test(r),i.isios4=i.isios&&!("seal"in Object),i.isios7=i.isios&&"webkitHidden"in l,i.isios8=i.isios&&"hidden"in l,i.isios10=i.isios&&a.Proxy,i.isandroid=/android/i.test(t),i.haseventlistener="addEventListener"in e,i.trstyle=!1,i.hastransform=!1,i.hastranslate3d=!1,i.transitionstyle=!1,i.hastransition=!1,i.transitionend=!1,i.trstyle="transform",i.hastransform="transform"in o||function(){for(var e=["msTransform","webkitTransform","MozTransform","OTransform"],t=0,r=e.length;t<r;t++)if(void 0!==o[e[t]]){i.trstyle=e[t];break}i.hastransform=!!i.trstyle}(),i.hastransform&&(o[i.trstyle]="translate3d(1px,2px,3px)",i.hastranslate3d=/translate3d/.test(o[i.trstyle])),i.transitionstyle="transition",i.prefixstyle="",i.transitionend="transitionend",i.hastransition="transition"in o||function(){i.transitionend=!1;for(var e=["webkitTransition","msTransition","MozTransition","OTransition","OTransition","KhtmlTransition"],t=["-webkit-","-ms-","-moz-","-o-","-o","-khtml-"],r=["webkitTransitionEnd","msTransitionEnd","transitionend","otransitionend","oTransitionEnd","KhtmlTransitionEnd"],s=0,n=e.length;s<n;s++)if(e[s]in o){i.transitionstyle=e[s],i.prefixstyle=t[s],i.transitionend=r[s];break}i.ischrome26&&(i.prefixstyle=t[1]),i.hastransition=i.transitionstyle}(),i.cursorgrabvalue=function(){var e=["grab","-webkit-grab","-moz-grab"];(i.ischrome&&!i.ischrome38||i.isie)&&(e=[]);for(var t=0,r=e.length;t<r;t++){var s=e[t];if(o.cursor=s,o.cursor==s)return s}return"url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize"}(),i.hasmousecapture="setCapture"in e,i.hasMutationObserver=!1!==m,e=null,v=i,i},b=function(e,p){function v(){var e=T.doc.css(P.trstyle);return!(!e||"matrix"!=e.substr(0,6))&&e.replace(/^.*\((.*)\)$/g,"$1").replace(/px/g,"").split(/, +/)}function b(){var e=T.win;if("zIndex"in e)return e.zIndex();for(;e.length>0;){if(9==e[0].nodeType)return!1;var o=e.css("zIndex");if(!isNaN(o)&&0!==o)return parseInt(o);e=e.parent()}return!1}function x(e,o,t){var r=e.css(o),i=parseFloat(r);if(isNaN(i)){var s=3==(i=I[r]||0)?t?T.win.outerHeight()-T.win.innerHeight():T.win.outerWidth()-T.win.innerWidth():1;return T.isie8&&i&&(i+=1),s?i:0}return i}function S(e,o,t,r){T._bind(e,o,function(r){var i={original:r=r||a.event,target:r.target||r.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==r.type?0:1,deltaX:0,deltaZ:0,preventDefault:function(){return r.preventDefault?r.preventDefault():r.returnValue=!1,!1},stopImmediatePropagation:function(){r.stopImmediatePropagation?r.stopImmediatePropagation():r.cancelBubble=!0}};return"mousewheel"==o?(r.wheelDeltaX&&(i.deltaX=-.025*r.wheelDeltaX),r.wheelDeltaY&&(i.deltaY=-.025*r.wheelDeltaY),!i.deltaY&&!i.deltaX&&(i.deltaY=-.025*r.wheelDelta)):i.deltaY=r.detail,t.call(e,i)},r)}function z(e,o,t,r){T.scrollrunning||(T.newscrolly=T.getScrollTop(),T.newscrollx=T.getScrollLeft(),D=f());var i=f()-D;if(D=f(),i>350?A=1:A+=(2-A)/10,e=e*A|0,o=o*A|0,e){if(r)if(e<0){if(T.getScrollLeft()>=T.page.maxw)return!0}else if(T.getScrollLeft()<=0)return!0;var s=e>0?1:-1;X!==s&&(T.scrollmom&&T.scrollmom.stop(),T.newscrollx=T.getScrollLeft(),X=s),T.lastdeltax-=e}if(o){if(function(){var e=T.getScrollTop();if(o<0){if(e>=T.page.maxh)return!0}else if(e<=0)return!0}()){if(M.nativeparentscrolling&&t&&!T.ispage&&!T.zoomactive)return!0;var n=T.view.h>>1;T.newscrolly<-n?(T.newscrolly=-n,o=-1):T.newscrolly>T.page.maxh+n?(T.newscrolly=T.page.maxh+n,o=1):o=0}var l=o>0?1:-1;B!==l&&(T.scrollmom&&T.scrollmom.stop(),T.newscrolly=T.getScrollTop(),B=l),T.lastdeltay-=o}(o||e)&&T.synched("relativexy",function(){var e=T.lastdeltay+T.newscrolly;T.lastdeltay=0;var o=T.lastdeltax+T.newscrollx;T.lastdeltax=0,T.rail.drag||T.doScrollPos(o,e)})}function k(e,o,t){var r,i;return!(t||!q)||(0===e.deltaMode?(r=-e.deltaX*(M.mousescrollstep/54)|0,i=-e.deltaY*(M.mousescrollstep/54)|0):1===e.deltaMode&&(r=-e.deltaX*M.mousescrollstep*50/80|0,i=-e.deltaY*M.mousescrollstep*50/80|0),o&&M.oneaxismousemode&&0===r&&i&&(r=i,i=0,t&&(r<0?T.getScrollLeft()>=T.page.maxw:T.getScrollLeft()<=0)&&(i=r,r=0)),T.isrtlmode&&(r=-r),z(r,i,t,!0)?void(t&&(q=!0)):(q=!1,e.stopImmediatePropagation(),e.preventDefault()))}var T=this;this.version="3.7.6",this.name="nicescroll",this.me=p;var E=n("body"),M=this.opt={doc:E,win:!1};if(n.extend(M,g),M.snapbackspeed=80,e)for(var L in M)void 0!==e[L]&&(M[L]=e[L]);if(M.disablemutationobserver&&(m=!1),this.doc=M.doc,this.iddoc=this.doc&&this.doc[0]?this.doc[0].id||"":"",this.ispage=/^BODY|HTML/.test(M.win?M.win[0].nodeName:this.doc[0].nodeName),this.haswrapper=!1!==M.win,this.win=M.win||(this.ispage?c:this.doc),this.docscroll=this.ispage&&!this.haswrapper?c:this.win,this.body=E,this.viewport=!1,this.isfixed=!1,this.iframe=!1,this.isiframe="IFRAME"==this.doc[0].nodeName&&"IFRAME"==this.win[0].nodeName,this.istextarea="TEXTAREA"==this.win[0].nodeName,this.forcescreen=!1,this.canshowonmouseevent="scroll"!=M.autohidemode,this.onmousedown=!1,this.onmouseup=!1,this.onmousemove=!1,this.onmousewheel=!1,this.onkeypress=!1,this.ongesturezoom=!1,this.onclick=!1,this.onscrollstart=!1,this.onscrollend=!1,this.onscrollcancel=!1,this.onzoomin=!1,this.onzoomout=!1,this.view=!1,this.page=!1,this.scroll={x:0,y:0},this.scrollratio={x:0,y:0},this.cursorheight=20,this.scrollvaluemax=0,"auto"==M.rtlmode){var C=this.win[0]==a?this.body:this.win,N=C.css("writing-mode")||C.css("-webkit-writing-mode")||C.css("-ms-writing-mode")||C.css("-moz-writing-mode");"horizontal-tb"==N||"lr-tb"==N||""===N?(this.isrtlmode="rtl"==C.css("direction"),this.isvertical=!1):(this.isrtlmode="vertical-rl"==N||"tb"==N||"tb-rl"==N||"rl-tb"==N,this.isvertical="vertical-rl"==N||"tb"==N||"tb-rl"==N)}else this.isrtlmode=!0===M.rtlmode,this.isvertical=!1;if(this.scrollrunning=!1,this.scrollmom=!1,this.observer=!1,this.observerremover=!1,this.observerbody=!1,!1!==M.scrollbarid)this.id=M.scrollbarid;else do{this.id="ascrail"+i++}while(l.getElementById(this.id));this.rail=!1,this.cursor=!1,this.cursorfreezed=!1,this.selectiondrag=!1,this.zoom=!1,this.zoomactive=!1,this.hasfocus=!1,this.hasmousefocus=!1,this.railslocked=!1,this.locked=!1,this.hidden=!1,this.cursoractive=!0,this.wheelprevented=!1,this.overflowx=M.overflowx,this.overflowy=M.overflowy,this.nativescrollingarea=!1,this.checkarea=0,this.events=[],this.saved={},this.delaylist={},this.synclist={},this.lastdeltax=0,this.lastdeltay=0,this.detected=w();var P=n.extend({},this.detected);this.canhwscroll=P.hastransform&&M.hwacceleration,this.ishwscroll=this.canhwscroll&&T.haswrapper,this.isrtlmode?this.isvertical?this.hasreversehr=!(P.iswebkit||P.isie||P.isie11):this.hasreversehr=!(P.iswebkit||P.isie&&!P.isie10&&!P.isie11):this.hasreversehr=!1,this.istouchcapable=!1,P.cantouch||!P.hasw3ctouch&&!P.hasmstouch?!P.cantouch||P.isios||P.isandroid||!P.iswebkit&&!P.ismozilla||(this.istouchcapable=!0):this.istouchcapable=!0,M.enablemouselockapi||(P.hasmousecapture=!1,P.haspointerlock=!1),this.debounced=function(e,o,t){T&&(T.delaylist[e]||!1||(T.delaylist[e]={h:u(function(){T.delaylist[e].fn.call(T),T.delaylist[e]=!1},t)},o.call(T)),T.delaylist[e].fn=o)},this.synched=function(e,o){T.synclist[e]?T.synclist[e]=o:(T.synclist[e]=o,u(function(){T&&(T.synclist[e]&&T.synclist[e].call(T),T.synclist[e]=null)}))},this.unsynched=function(e){T.synclist[e]&&(T.synclist[e]=!1)},this.css=function(e,o){for(var t in o)T.saved.css.push([e,t,e.css(t)]),e.css(t,o[t])},this.scrollTop=function(e){return void 0===e?T.getScrollTop():T.setScrollTop(e)},this.scrollLeft=function(e){return void 0===e?T.getScrollLeft():T.setScrollLeft(e)};var R=function(e,o,t,r,i,s,n){this.st=e,this.ed=o,this.spd=t,this.p1=r||0,this.p2=i||1,this.p3=s||0,this.p4=n||1,this.ts=f(),this.df=o-e};if(R.prototype={B2:function(e){return 3*(1-e)*(1-e)*e},B3:function(e){return 3*(1-e)*e*e},B4:function(e){return e*e*e},getPos:function(){return(f()-this.ts)/this.spd},getNow:function(){var e=(f()-this.ts)/this.spd,o=this.B2(e)+this.B3(e)+this.B4(e);return e>=1?this.ed:this.st+this.df*o|0},update:function(e,o){return this.st=this.getNow(),this.ed=e,this.spd=o,this.ts=f(),this.df=this.ed-this.st,this}},this.ishwscroll){this.doc.translate={x:0,y:0,tx:"0px",ty:"0px"},P.hastranslate3d&&P.isios&&this.doc.css("-webkit-backface-visibility","hidden"),this.getScrollTop=function(e){if(!e){var o=v();if(o)return 16==o.length?-o[13]:-o[5];if(T.timerscroll&&T.timerscroll.bz)return T.timerscroll.bz.getNow()}return T.doc.translate.y},this.getScrollLeft=function(e){if(!e){var o=v();if(o)return 16==o.length?-o[12]:-o[4];if(T.timerscroll&&T.timerscroll.bh)return T.timerscroll.bh.getNow()}return T.doc.translate.x},this.notifyScrollEvent=function(e){var o=l.createEvent("UIEvents");o.initUIEvent("scroll",!1,!1,a,1),o.niceevent=!0,e.dispatchEvent(o)};var _=this.isrtlmode?1:-1;P.hastranslate3d&&M.enabletranslate3d?(this.setScrollTop=function(e,o){T.doc.translate.y=e,T.doc.translate.ty=-1*e+"px",T.doc.css(P.trstyle,"translate3d("+T.doc.translate.tx+","+T.doc.translate.ty+",0)"),o||T.notifyScrollEvent(T.win[0])},this.setScrollLeft=function(e,o){T.doc.translate.x=e,T.doc.translate.tx=e*_+"px",T.doc.css(P.trstyle,"translate3d("+T.doc.translate.tx+","+T.doc.translate.ty+",0)"),o||T.notifyScrollEvent(T.win[0])}):(this.setScrollTop=function(e,o){T.doc.translate.y=e,T.doc.translate.ty=-1*e+"px",T.doc.css(P.trstyle,"translate("+T.doc.translate.tx+","+T.doc.translate.ty+")"),o||T.notifyScrollEvent(T.win[0])},this.setScrollLeft=function(e,o){T.doc.translate.x=e,T.doc.translate.tx=e*_+"px",T.doc.css(P.trstyle,"translate("+T.doc.translate.tx+","+T.doc.translate.ty+")"),o||T.notifyScrollEvent(T.win[0])})}else this.getScrollTop=function(){return T.docscroll.scrollTop()},this.setScrollTop=function(e){T.docscroll.scrollTop(e)},this.getScrollLeft=function(){return T.hasreversehr?T.detected.ismozilla?T.page.maxw-Math.abs(T.docscroll.scrollLeft()):T.page.maxw-T.docscroll.scrollLeft():T.docscroll.scrollLeft()},this.setScrollLeft=function(e){return setTimeout(function(){if(T)return T.hasreversehr&&(e=T.detected.ismozilla?-(T.page.maxw-e):T.page.maxw-e),T.docscroll.scrollLeft(e)},1)};this.getTarget=function(e){return!!e&&(e.target?e.target:!!e.srcElement&&e.srcElement)},this.hasParent=function(e,o){if(!e)return!1;for(var t=e.target||e.srcElement||e||!1;t&&t.id!=o;)t=t.parentNode||!1;return!1!==t};var I={thin:1,medium:3,thick:5};this.getDocumentScrollOffset=function(){return{top:a.pageYOffset||l.documentElement.scrollTop,left:a.pageXOffset||l.documentElement.scrollLeft}},this.getOffset=function(){if(T.isfixed){var e=T.win.offset(),o=T.getDocumentScrollOffset();return e.top-=o.top,e.left-=o.left,e}var t=T.win.offset();if(!T.viewport)return t;var r=T.viewport.offset();return{top:t.top-r.top,left:t.left-r.left}},this.updateScrollBar=function(e){var o,t;if(T.ishwscroll)T.rail.css({height:T.win.innerHeight()-(M.railpadding.top+M.railpadding.bottom)}),T.railh&&T.railh.css({width:T.win.innerWidth()-(M.railpadding.left+M.railpadding.right)});else{var r=T.getOffset();if(o={top:r.top,left:r.left-(M.railpadding.left+M.railpadding.right)},o.top+=x(T.win,"border-top-width",!0),o.left+=T.rail.align?T.win.outerWidth()-x(T.win,"border-right-width")-T.rail.width:x(T.win,"border-left-width"),(t=M.railoffset)&&(t.top&&(o.top+=t.top),t.left&&(o.left+=t.left)),T.railslocked||T.rail.css({top:o.top,left:o.left,height:(e?e.h:T.win.innerHeight())-(M.railpadding.top+M.railpadding.bottom)}),T.zoom&&T.zoom.css({top:o.top+1,left:1==T.rail.align?o.left-20:o.left+T.rail.width+4}),T.railh&&!T.railslocked){o={top:r.top,left:r.left},(t=M.railhoffset)&&(t.top&&(o.top+=t.top),t.left&&(o.left+=t.left));var i=T.railh.align?o.top+x(T.win,"border-top-width",!0)+T.win.innerHeight()-T.railh.height:o.top+x(T.win,"border-top-width",!0),s=o.left+x(T.win,"border-left-width");T.railh.css({top:i-(M.railpadding.top+M.railpadding.bottom),left:s,width:T.railh.width})}}},this.doRailClick=function(e,o,t){var r,i,s,n;T.railslocked||(T.cancelEvent(e),"pageY"in e||(e.pageX=e.clientX+l.documentElement.scrollLeft,e.pageY=e.clientY+l.documentElement.scrollTop),o?(r=t?T.doScrollLeft:T.doScrollTop,s=t?(e.pageX-T.railh.offset().left-T.cursorwidth/2)*T.scrollratio.x:(e.pageY-T.rail.offset().top-T.cursorheight/2)*T.scrollratio.y,T.unsynched("relativexy"),r(0|s)):(r=t?T.doScrollLeftBy:T.doScrollBy,s=t?T.scroll.x:T.scroll.y,n=t?e.pageX-T.railh.offset().left:e.pageY-T.rail.offset().top,i=t?T.view.w:T.view.h,r(s>=n?i:-i)))},T.newscrolly=T.newscrollx=0,T.hasanimationframe="requestAnimationFrame"in a,T.hascancelanimationframe="cancelAnimationFrame"in a,T.hasborderbox=!1,this.init=function(){if(T.saved.css=[],P.isoperamini)return!0;if(P.isandroid&&!("hidden"in l))return!0;M.emulatetouch=M.emulatetouch||M.touchbehavior,T.hasborderbox=a.getComputedStyle&&"border-box"===a.getComputedStyle(l.body)["box-sizing"];var e={"overflow-y":"hidden"};if((P.isie11||P.isie10)&&(e["-ms-overflow-style"]="none"),T.ishwscroll&&(this.doc.css(P.transitionstyle,P.prefixstyle+"transform 0ms ease-out"),P.transitionend&&T.bind(T.doc,P.transitionend,T.onScrollTransitionEnd,!1)),T.zindex="auto",T.ispage||"auto"!=M.zindex?T.zindex=M.zindex:T.zindex=b()||"auto",!T.ispage&&"auto"!=T.zindex&&T.zindex>s&&(s=T.zindex),T.isie&&0===T.zindex&&"auto"==M.zindex&&(T.zindex="auto"),!T.ispage||!P.isieold){var i=T.docscroll;T.ispage&&(i=T.haswrapper?T.win:T.doc),T.css(i,e),T.ispage&&(P.isie11||P.isie)&&T.css(n("html"),e),!P.isios||T.ispage||T.haswrapper||T.css(E,{"-webkit-overflow-scrolling":"touch"});var d=n(l.createElement("div"));d.css({position:"relative",top:0,float:"right",width:M.cursorwidth,height:0,"background-color":M.cursorcolor,border:M.cursorborder,"background-clip":"padding-box","-webkit-border-radius":M.cursorborderradius,"-moz-border-radius":M.cursorborderradius,"border-radius":M.cursorborderradius}),d.addClass("nicescroll-cursors"),T.cursor=d;var u=n(l.createElement("div"));u.attr("id",T.id),u.addClass("nicescroll-rails nicescroll-rails-vr");var h,p,f=["left","right","top","bottom"];for(var g in f)p=f[g],(h=M.railpadding[p]||0)&&u.css("padding-"+p,h+"px");u.append(d),u.width=Math.max(parseFloat(M.cursorwidth),d.outerWidth()),u.css({width:u.width+"px",zIndex:T.zindex,background:M.background,cursor:"default"}),u.visibility=!0,u.scrollable=!0,u.align="left"==M.railalign?0:1,T.rail=u,T.rail.drag=!1;var v=!1;!M.boxzoom||T.ispage||P.isieold||(v=l.createElement("div"),T.bind(v,"click",T.doZoom),T.bind(v,"mouseenter",function(){T.zoom.css("opacity",M.cursoropacitymax)}),T.bind(v,"mouseleave",function(){T.zoom.css("opacity",M.cursoropacitymin)}),T.zoom=n(v),T.zoom.css({cursor:"pointer",zIndex:T.zindex,backgroundImage:"url("+M.scriptpath+"zoomico.png)",height:18,width:18,backgroundPosition:"0 0"}),M.dblclickzoom&&T.bind(T.win,"dblclick",T.doZoom),P.cantouch&&M.gesturezoom&&(T.ongesturezoom=function(e){return e.scale>1.5&&T.doZoomIn(e),e.scale<.8&&T.doZoomOut(e),T.cancelEvent(e)},T.bind(T.win,"gestureend",T.ongesturezoom))),T.railh=!1;var w;if(M.horizrailenabled&&(T.css(i,{overflowX:"hidden"}),(d=n(l.createElement("div"))).css({position:"absolute",top:0,height:M.cursorwidth,width:0,backgroundColor:M.cursorcolor,border:M.cursorborder,backgroundClip:"padding-box","-webkit-border-radius":M.cursorborderradius,"-moz-border-radius":M.cursorborderradius,"border-radius":M.cursorborderradius}),P.isieold&&d.css("overflow","hidden"),d.addClass("nicescroll-cursors"),T.cursorh=d,(w=n(l.createElement("div"))).attr("id",T.id+"-hr"),w.addClass("nicescroll-rails nicescroll-rails-hr"),w.height=Math.max(parseFloat(M.cursorwidth),d.outerHeight()),w.css({height:w.height+"px",zIndex:T.zindex,background:M.background}),w.append(d),w.visibility=!0,w.scrollable=!0,w.align="top"==M.railvalign?0:1,T.railh=w,T.railh.drag=!1),T.ispage)u.css({position:"fixed",top:0,height:"100%"}),u.css(u.align?{right:0}:{left:0}),T.body.append(u),T.railh&&(w.css({position:"fixed",left:0,width:"100%"}),w.css(w.align?{bottom:0}:{top:0}),T.body.append(w));else{if(T.ishwscroll){"static"==T.win.css("position")&&T.css(T.win,{position:"relative"});var x="HTML"==T.win[0].nodeName?T.body:T.win;n(x).scrollTop(0).scrollLeft(0),T.zoom&&(T.zoom.css({position:"absolute",top:1,right:0,"margin-right":u.width+4}),x.append(T.zoom)),u.css({position:"absolute",top:0}),u.css(u.align?{right:0}:{left:0}),x.append(u),w&&(w.css({position:"absolute",left:0,bottom:0}),w.css(w.align?{bottom:0}:{top:0}),x.append(w))}else{T.isfixed="fixed"==T.win.css("position");var S=T.isfixed?"fixed":"absolute";T.isfixed||(T.viewport=T.getViewport(T.win[0])),T.viewport&&(T.body=T.viewport,/fixed|absolute/.test(T.viewport.css("position"))||T.css(T.viewport,{position:"relative"})),u.css({position:S}),T.zoom&&T.zoom.css({position:S}),T.updateScrollBar(),T.body.append(u),T.zoom&&T.body.append(T.zoom),T.railh&&(w.css({position:S}),T.body.append(w))}P.isios&&T.css(T.win,{"-webkit-tap-highlight-color":"rgba(0,0,0,0)","-webkit-touch-callout":"none"}),M.disableoutline&&(P.isie&&T.win.attr("hideFocus","true"),P.iswebkit&&T.win.css("outline","none"))}if(!1===M.autohidemode?(T.autohidedom=!1,T.rail.css({opacity:M.cursoropacitymax}),T.railh&&T.railh.css({opacity:M.cursoropacitymax})):!0===M.autohidemode||"leave"===M.autohidemode?(T.autohidedom=n().add(T.rail),P.isie8&&(T.autohidedom=T.autohidedom.add(T.cursor)),T.railh&&(T.autohidedom=T.autohidedom.add(T.railh)),T.railh&&P.isie8&&(T.autohidedom=T.autohidedom.add(T.cursorh))):"scroll"==M.autohidemode?(T.autohidedom=n().add(T.rail),T.railh&&(T.autohidedom=T.autohidedom.add(T.railh))):"cursor"==M.autohidemode?(T.autohidedom=n().add(T.cursor),T.railh&&(T.autohidedom=T.autohidedom.add(T.cursorh))):"hidden"==M.autohidemode&&(T.autohidedom=!1,T.hide(),T.railslocked=!1),P.cantouch||T.istouchcapable||M.emulatetouch||P.hasmstouch){T.scrollmom=new y(T);T.ontouchstart=function(e){if(T.locked)return!1;if(e.pointerType&&("mouse"===e.pointerType||e.pointerType===e.MSPOINTER_TYPE_MOUSE))return!1;if(T.hasmoving=!1,T.scrollmom.timer&&(T.triggerScrollEnd(),T.scrollmom.stop()),!T.railslocked){var o=T.getTarget(e);if(o&&/INPUT/i.test(o.nodeName)&&/range/i.test(o.type))return T.stopPropagation(e);var t="mousedown"===e.type;if(!("clientX"in e)&&"changedTouches"in e&&(e.clientX=e.changedTouches[0].clientX,e.clientY=e.changedTouches[0].clientY),T.forcescreen){var r=e;(e={original:e.original?e.original:e}).clientX=r.screenX,e.clientY=r.screenY}if(T.rail.drag={x:e.clientX,y:e.clientY,sx:T.scroll.x,sy:T.scroll.y,st:T.getScrollTop(),sl:T.getScrollLeft(),pt:2,dl:!1,tg:o},T.ispage||!M.directionlockdeadzone)T.rail.drag.dl="f";else{var i={w:c.width(),h:c.height()},s=T.getContentSize(),l=s.h-i.h,a=s.w-i.w;T.rail.scrollable&&!T.railh.scrollable?T.rail.drag.ck=l>0&&"v":!T.rail.scrollable&&T.railh.scrollable?T.rail.drag.ck=a>0&&"h":T.rail.drag.ck=!1}if(M.emulatetouch&&T.isiframe&&P.isie){var d=T.win.position();T.rail.drag.x+=d.left,T.rail.drag.y+=d.top}if(T.hasmoving=!1,T.lastmouseup=!1,T.scrollmom.reset(e.clientX,e.clientY),o&&t){if(!/INPUT|SELECT|BUTTON|TEXTAREA/i.test(o.nodeName))return P.hasmousecapture&&o.setCapture(),M.emulatetouch?(o.onclick&&!o._onclick&&(o._onclick=o.onclick,o.onclick=function(e){if(T.hasmoving)return!1;o._onclick.call(this,e)}),T.cancelEvent(e)):T.stopPropagation(e);/SUBMIT|CANCEL|BUTTON/i.test(n(o).attr("type"))&&(T.preventclick={tg:o,click:!1})}}},T.ontouchend=function(e){if(!T.rail.drag)return!0;if(2==T.rail.drag.pt){if(e.pointerType&&("mouse"===e.pointerType||e.pointerType===e.MSPOINTER_TYPE_MOUSE))return!1;T.rail.drag=!1;var o="mouseup"===e.type;if(T.hasmoving&&(T.scrollmom.doMomentum(),T.lastmouseup=!0,T.hideCursor(),P.hasmousecapture&&l.releaseCapture(),o))return T.cancelEvent(e)}else if(1==T.rail.drag.pt)return T.onmouseup(e)};var z=M.emulatetouch&&T.isiframe&&!P.hasmousecapture,k=.3*M.directionlockdeadzone|0;T.ontouchmove=function(e,o){if(!T.rail.drag)return!0;if(e.targetTouches&&M.preventmultitouchscrolling&&e.targetTouches.length>1)return!0;if(e.pointerType&&("mouse"===e.pointerType||e.pointerType===e.MSPOINTER_TYPE_MOUSE))return!0;if(2==T.rail.drag.pt){"changedTouches"in e&&(e.clientX=e.changedTouches[0].clientX,e.clientY=e.changedTouches[0].clientY);var t,r;if(r=t=0,z&&!o){var i=T.win.position();r=-i.left,t=-i.top}var s=e.clientY+t,n=s-T.rail.drag.y,a=e.clientX+r,c=a-T.rail.drag.x,d=T.rail.drag.st-n;if(T.ishwscroll&&M.bouncescroll)d<0?d=Math.round(d/2):d>T.page.maxh&&(d=T.page.maxh+Math.round((d-T.page.maxh)/2));else if(d<0?(d=0,s=0):d>T.page.maxh&&(d=T.page.maxh,s=0),0===s&&!T.hasmoving)return T.ispage||(T.rail.drag=!1),!0;var u=T.getScrollLeft();if(T.railh&&T.railh.scrollable&&(u=T.isrtlmode?c-T.rail.drag.sl:T.rail.drag.sl-c,T.ishwscroll&&M.bouncescroll?u<0?u=Math.round(u/2):u>T.page.maxw&&(u=T.page.maxw+Math.round((u-T.page.maxw)/2)):(u<0&&(u=0,a=0),u>T.page.maxw&&(u=T.page.maxw,a=0))),!T.hasmoving){if(T.rail.drag.y===e.clientY&&T.rail.drag.x===e.clientX)return T.cancelEvent(e);var h=Math.abs(n),p=Math.abs(c),m=M.directionlockdeadzone;if(T.rail.drag.ck?"v"==T.rail.drag.ck?p>m&&h<=k?T.rail.drag=!1:h>m&&(T.rail.drag.dl="v"):"h"==T.rail.drag.ck&&(h>m&&p<=k?T.rail.drag=!1:p>m&&(T.rail.drag.dl="h")):h>m&&p>m?T.rail.drag.dl="f":h>m?T.rail.drag.dl=p>k?"f":"v":p>m&&(T.rail.drag.dl=h>k?"f":"h"),!T.rail.drag.dl)return T.cancelEvent(e);T.triggerScrollStart(e.clientX,e.clientY,0,0,0),T.hasmoving=!0}return T.preventclick&&!T.preventclick.click&&(T.preventclick.click=T.preventclick.tg.onclick||!1,T.preventclick.tg.onclick=T.onpreventclick),T.rail.drag.dl&&("v"==T.rail.drag.dl?u=T.rail.drag.sl:"h"==T.rail.drag.dl&&(d=T.rail.drag.st)),T.synched("touchmove",function(){T.rail.drag&&2==T.rail.drag.pt&&(T.prepareTransition&&T.resetTransition(),T.rail.scrollable&&T.setScrollTop(d),T.scrollmom.update(a,s),T.railh&&T.railh.scrollable?(T.setScrollLeft(u),T.showCursor(d,u)):T.showCursor(d),P.isie10&&l.selection.clear())}),T.cancelEvent(e)}return 1==T.rail.drag.pt?T.onmousemove(e):void 0},T.ontouchstartCursor=function(e,o){if(!T.rail.drag||3==T.rail.drag.pt){if(T.locked)return T.cancelEvent(e);T.cancelScroll(),T.rail.drag={x:e.touches[0].clientX,y:e.touches[0].clientY,sx:T.scroll.x,sy:T.scroll.y,pt:3,hr:!!o};var t=T.getTarget(e);return!T.ispage&&P.hasmousecapture&&t.setCapture(),T.isiframe&&!P.hasmousecapture&&(T.saved.csspointerevents=T.doc.css("pointer-events"),T.css(T.doc,{"pointer-events":"none"})),T.cancelEvent(e)}},T.ontouchendCursor=function(e){if(T.rail.drag){if(P.hasmousecapture&&l.releaseCapture(),T.isiframe&&!P.hasmousecapture&&T.doc.css("pointer-events",T.saved.csspointerevents),3!=T.rail.drag.pt)return;return T.rail.drag=!1,T.cancelEvent(e)}},T.ontouchmoveCursor=function(e){if(T.rail.drag){if(3!=T.rail.drag.pt)return;if(T.cursorfreezed=!0,T.rail.drag.hr){T.scroll.x=T.rail.drag.sx+(e.touches[0].clientX-T.rail.drag.x),T.scroll.x<0&&(T.scroll.x=0);var o=T.scrollvaluemaxw;T.scroll.x>o&&(T.scroll.x=o)}else{T.scroll.y=T.rail.drag.sy+(e.touches[0].clientY-T.rail.drag.y),T.scroll.y<0&&(T.scroll.y=0);var t=T.scrollvaluemax;T.scroll.y>t&&(T.scroll.y=t)}return T.synched("touchmove",function(){T.rail.drag&&3==T.rail.drag.pt&&(T.showCursor(),T.rail.drag.hr?T.doScrollLeft(Math.round(T.scroll.x*T.scrollratio.x),M.cursordragspeed):T.doScrollTop(Math.round(T.scroll.y*T.scrollratio.y),M.cursordragspeed))}),T.cancelEvent(e)}}}if(T.onmousedown=function(e,o){if(!T.rail.drag||1==T.rail.drag.pt){if(T.railslocked)return T.cancelEvent(e);T.cancelScroll(),T.rail.drag={x:e.clientX,y:e.clientY,sx:T.scroll.x,sy:T.scroll.y,pt:1,hr:o||!1};var t=T.getTarget(e);return P.hasmousecapture&&t.setCapture(),T.isiframe&&!P.hasmousecapture&&(T.saved.csspointerevents=T.doc.css("pointer-events"),T.css(T.doc,{"pointer-events":"none"})),T.hasmoving=!1,T.cancelEvent(e)}},T.onmouseup=function(e){if(T.rail.drag)return 1!=T.rail.drag.pt||(P.hasmousecapture&&l.releaseCapture(),T.isiframe&&!P.hasmousecapture&&T.doc.css("pointer-events",T.saved.csspointerevents),T.rail.drag=!1,T.cursorfreezed=!1,T.hasmoving&&T.triggerScrollEnd(),T.cancelEvent(e))},T.onmousemove=function(e){if(T.rail.drag){if(1!==T.rail.drag.pt)return;if(P.ischrome&&0===e.which)return T.onmouseup(e);if(T.cursorfreezed=!0,T.hasmoving||T.triggerScrollStart(e.clientX,e.clientY,0,0,0),T.hasmoving=!0,T.rail.drag.hr){T.scroll.x=T.rail.drag.sx+(e.clientX-T.rail.drag.x),T.scroll.x<0&&(T.scroll.x=0);var o=T.scrollvaluemaxw;T.scroll.x>o&&(T.scroll.x=o)}else{T.scroll.y=T.rail.drag.sy+(e.clientY-T.rail.drag.y),T.scroll.y<0&&(T.scroll.y=0);var t=T.scrollvaluemax;T.scroll.y>t&&(T.scroll.y=t)}return T.synched("mousemove",function(){T.cursorfreezed&&(T.showCursor(),T.rail.drag.hr?T.scrollLeft(Math.round(T.scroll.x*T.scrollratio.x)):T.scrollTop(Math.round(T.scroll.y*T.scrollratio.y)))}),T.cancelEvent(e)}T.checkarea=0},P.cantouch||M.emulatetouch)T.onpreventclick=function(e){if(T.preventclick)return T.preventclick.tg.onclick=T.preventclick.click,T.preventclick=!1,T.cancelEvent(e)},T.onclick=!P.isios&&function(e){return!T.lastmouseup||(T.lastmouseup=!1,T.cancelEvent(e))},M.grabcursorenabled&&P.cursorgrabvalue&&(T.css(T.ispage?T.doc:T.win,{cursor:P.cursorgrabvalue}),T.css(T.rail,{cursor:P.cursorgrabvalue}));else{var L=function(e){if(T.selectiondrag){if(e){var o=T.win.outerHeight(),t=e.pageY-T.selectiondrag.top;t>0&&t<o&&(t=0),t>=o&&(t-=o),T.selectiondrag.df=t}if(0!==T.selectiondrag.df){var r=-2*T.selectiondrag.df/6|0;T.doScrollBy(r),T.debounced("doselectionscroll",function(){L()},50)}}};T.hasTextSelected="getSelection"in l?function(){return l.getSelection().rangeCount>0}:"selection"in l?function(){return"None"!=l.selection.type}:function(){return!1},T.onselectionstart=function(e){T.ispage||(T.selectiondrag=T.win.offset())},T.onselectionend=function(e){T.selectiondrag=!1},T.onselectiondrag=function(e){T.selectiondrag&&T.hasTextSelected()&&T.debounced("selectionscroll",function(){L(e)},250)}}if(P.hasw3ctouch?(T.css(T.ispage?n("html"):T.win,{"touch-action":"none"}),T.css(T.rail,{"touch-action":"none"}),T.css(T.cursor,{"touch-action":"none"}),T.bind(T.win,"pointerdown",T.ontouchstart),T.bind(l,"pointerup",T.ontouchend),T.delegate(l,"pointermove",T.ontouchmove)):P.hasmstouch?(T.css(T.ispage?n("html"):T.win,{"-ms-touch-action":"none"}),T.css(T.rail,{"-ms-touch-action":"none"}),T.css(T.cursor,{"-ms-touch-action":"none"}),T.bind(T.win,"MSPointerDown",T.ontouchstart),T.bind(l,"MSPointerUp",T.ontouchend),T.delegate(l,"MSPointerMove",T.ontouchmove),T.bind(T.cursor,"MSGestureHold",function(e){e.preventDefault()}),T.bind(T.cursor,"contextmenu",function(e){e.preventDefault()})):P.cantouch&&(T.bind(T.win,"touchstart",T.ontouchstart,!1,!0),T.bind(l,"touchend",T.ontouchend,!1,!0),T.bind(l,"touchcancel",T.ontouchend,!1,!0),T.delegate(l,"touchmove",T.ontouchmove,!1,!0)),M.emulatetouch&&(T.bind(T.win,"mousedown",T.ontouchstart,!1,!0),T.bind(l,"mouseup",T.ontouchend,!1,!0),T.bind(l,"mousemove",T.ontouchmove,!1,!0)),(M.cursordragontouch||!P.cantouch&&!M.emulatetouch)&&(T.rail.css({cursor:"default"}),T.railh&&T.railh.css({cursor:"default"}),T.jqbind(T.rail,"mouseenter",function(){if(!T.ispage&&!T.win.is(":visible"))return!1;T.canshowonmouseevent&&T.showCursor(),T.rail.active=!0}),T.jqbind(T.rail,"mouseleave",function(){T.rail.active=!1,T.rail.drag||T.hideCursor()}),M.sensitiverail&&(T.bind(T.rail,"click",function(e){T.doRailClick(e,!1,!1)}),T.bind(T.rail,"dblclick",function(e){T.doRailClick(e,!0,!1)}),T.bind(T.cursor,"click",function(e){T.cancelEvent(e)}),T.bind(T.cursor,"dblclick",function(e){T.cancelEvent(e)})),T.railh&&(T.jqbind(T.railh,"mouseenter",function(){if(!T.ispage&&!T.win.is(":visible"))return!1;T.canshowonmouseevent&&T.showCursor(),T.rail.active=!0}),T.jqbind(T.railh,"mouseleave",function(){T.rail.active=!1,T.rail.drag||T.hideCursor()}),M.sensitiverail&&(T.bind(T.railh,"click",function(e){T.doRailClick(e,!1,!0)}),T.bind(T.railh,"dblclick",function(e){T.doRailClick(e,!0,!0)}),T.bind(T.cursorh,"click",function(e){T.cancelEvent(e)}),T.bind(T.cursorh,"dblclick",function(e){T.cancelEvent(e)})))),M.cursordragontouch&&(this.istouchcapable||P.cantouch)&&(T.bind(T.cursor,"touchstart",T.ontouchstartCursor),T.bind(T.cursor,"touchmove",T.ontouchmoveCursor),T.bind(T.cursor,"touchend",T.ontouchendCursor),T.cursorh&&T.bind(T.cursorh,"touchstart",function(e){T.ontouchstartCursor(e,!0)}),T.cursorh&&T.bind(T.cursorh,"touchmove",T.ontouchmoveCursor),T.cursorh&&T.bind(T.cursorh,"touchend",T.ontouchendCursor)),M.emulatetouch||P.isandroid||P.isios?(T.bind(P.hasmousecapture?T.win:l,"mouseup",T.ontouchend),T.onclick&&T.bind(l,"click",T.onclick),M.cursordragontouch?(T.bind(T.cursor,"mousedown",T.onmousedown),T.bind(T.cursor,"mouseup",T.onmouseup),T.cursorh&&T.bind(T.cursorh,"mousedown",function(e){T.onmousedown(e,!0)}),T.cursorh&&T.bind(T.cursorh,"mouseup",T.onmouseup)):(T.bind(T.rail,"mousedown",function(e){e.preventDefault()}),T.railh&&T.bind(T.railh,"mousedown",function(e){e.preventDefault()}))):(T.bind(P.hasmousecapture?T.win:l,"mouseup",T.onmouseup),T.bind(l,"mousemove",T.onmousemove),T.onclick&&T.bind(l,"click",T.onclick),T.bind(T.cursor,"mousedown",T.onmousedown),T.bind(T.cursor,"mouseup",T.onmouseup),T.railh&&(T.bind(T.cursorh,"mousedown",function(e){T.onmousedown(e,!0)}),T.bind(T.cursorh,"mouseup",T.onmouseup)),!T.ispage&&M.enablescrollonselection&&(T.bind(T.win[0],"mousedown",T.onselectionstart),T.bind(l,"mouseup",T.onselectionend),T.bind(T.cursor,"mouseup",T.onselectionend),T.cursorh&&T.bind(T.cursorh,"mouseup",T.onselectionend),T.bind(l,"mousemove",T.onselectiondrag)),T.zoom&&(T.jqbind(T.zoom,"mouseenter",function(){T.canshowonmouseevent&&T.showCursor(),T.rail.active=!0}),T.jqbind(T.zoom,"mouseleave",function(){T.rail.active=!1,T.rail.drag||T.hideCursor()}))),M.enablemousewheel&&(T.isiframe||T.mousewheel(P.isie&&T.ispage?l:T.win,T.onmousewheel),T.mousewheel(T.rail,T.onmousewheel),T.railh&&T.mousewheel(T.railh,T.onmousewheelhr)),T.ispage||P.cantouch||/HTML|^BODY/.test(T.win[0].nodeName)||(T.win.attr("tabindex")||T.win.attr({tabindex:++r}),T.bind(T.win,"focus",function(e){o=T.getTarget(e).id||T.getTarget(e)||!1,T.hasfocus=!0,T.canshowonmouseevent&&T.noticeCursor()}),T.bind(T.win,"blur",function(e){o=!1,T.hasfocus=!1}),T.bind(T.win,"mouseenter",function(e){t=T.getTarget(e).id||T.getTarget(e)||!1,T.hasmousefocus=!0,T.canshowonmouseevent&&T.noticeCursor()}),T.bind(T.win,"mouseleave",function(e){t=!1,T.hasmousefocus=!1,T.rail.drag||T.hideCursor()})),T.onkeypress=function(e){if(T.railslocked&&0===T.page.maxh)return!0;e=e||a.event;var r=T.getTarget(e);if(r&&/INPUT|TEXTAREA|SELECT|OPTION/.test(r.nodeName)&&(!(r.getAttribute("type")||r.type||!1)||!/submit|button|cancel/i.tp))return!0;if(n(r).attr("contenteditable"))return!0;if(T.hasfocus||T.hasmousefocus&&!o||T.ispage&&!o&&!t){var i=e.keyCode;if(T.railslocked&&27!=i)return T.cancelEvent(e);var s=e.ctrlKey||!1,l=e.shiftKey||!1,c=!1;switch(i){case 38:case 63233:T.doScrollBy(72),c=!0;break;case 40:case 63235:T.doScrollBy(-72),c=!0;break;case 37:case 63232:T.railh&&(s?T.doScrollLeft(0):T.doScrollLeftBy(72),c=!0);break;case 39:case 63234:T.railh&&(s?T.doScrollLeft(T.page.maxw):T.doScrollLeftBy(-72),c=!0);break;case 33:case 63276:T.doScrollBy(T.view.h),c=!0;break;case 34:case 63277:T.doScrollBy(-T.view.h),c=!0;break;case 36:case 63273:T.railh&&s?T.doScrollPos(0,0):T.doScrollTo(0),c=!0;break;case 35:case 63275:T.railh&&s?T.doScrollPos(T.page.maxw,T.page.maxh):T.doScrollTo(T.page.maxh),c=!0;break;case 32:M.spacebarenabled&&(l?T.doScrollBy(T.view.h):T.doScrollBy(-T.view.h),c=!0);break;case 27:T.zoomactive&&(T.doZoom(),c=!0)}if(c)return T.cancelEvent(e)}},M.enablekeyboard&&T.bind(l,P.isopera&&!P.isopera12?"keypress":"keydown",T.onkeypress),T.bind(l,"keydown",function(e){(e.ctrlKey||!1)&&(T.wheelprevented=!0)}),T.bind(l,"keyup",function(e){e.ctrlKey||!1||(T.wheelprevented=!1)}),T.bind(a,"blur",function(e){T.wheelprevented=!1}),T.bind(a,"resize",T.onscreenresize),T.bind(a,"orientationchange",T.onscreenresize),T.bind(a,"load",T.lazyResize),P.ischrome&&!T.ispage&&!T.haswrapper){var C=T.win.attr("style"),N=parseFloat(T.win.css("width"))+1;T.win.css("width",N),T.synched("chromefix",function(){T.win.attr("style",C)})}if(T.onAttributeChange=function(e){T.lazyResize(T.isieold?250:30)},M.enableobserver&&(T.isie11||!1===m||(T.observerbody=new m(function(e){if(e.forEach(function(e){if("attributes"==e.type)return E.hasClass("modal-open")&&E.hasClass("modal-dialog")&&!n.contains(n(".modal-dialog")[0],T.doc[0])?T.hide():T.show()}),T.me.clientWidth!=T.page.width||T.me.clientHeight!=T.page.height)return T.lazyResize(30)}),T.observerbody.observe(l.body,{childList:!0,subtree:!0,characterData:!1,attributes:!0,attributeFilter:["class"]})),!T.ispage&&!T.haswrapper)){var R=T.win[0];!1!==m?(T.observer=new m(function(e){e.forEach(T.onAttributeChange)}),T.observer.observe(R,{childList:!0,characterData:!1,attributes:!0,subtree:!1}),T.observerremover=new m(function(e){e.forEach(function(e){if(e.removedNodes.length>0)for(var o in e.removedNodes)if(T&&e.removedNodes[o]===R)return T.remove()})}),T.observerremover.observe(R.parentNode,{childList:!0,characterData:!1,attributes:!1,subtree:!1})):(T.bind(R,P.isie&&!P.isie9?"propertychange":"DOMAttrModified",T.onAttributeChange),P.isie9&&R.attachEvent("onpropertychange",T.onAttributeChange),T.bind(R,"DOMNodeRemoved",function(e){e.target===R&&T.remove()}))}!T.ispage&&M.boxzoom&&T.bind(a,"resize",T.resizeZoom),T.istextarea&&(T.bind(T.win,"keydown",T.lazyResize),T.bind(T.win,"mouseup",T.lazyResize)),T.lazyResize(30)}if("IFRAME"==this.doc[0].nodeName){var _=function(){T.iframexd=!1;var o;try{(o="contentDocument"in this?this.contentDocument:this.contentWindow._doc).domain}catch(e){T.iframexd=!0,o=!1}if(T.iframexd)return"console"in a&&console.log("NiceScroll error: policy restriced iframe"),!0;if(T.forcescreen=!0,T.isiframe&&(T.iframe={doc:n(o),html:T.doc.contents().find("html")[0],body:T.doc.contents().find("body")[0]},T.getContentSize=function(){return{w:Math.max(T.iframe.html.scrollWidth,T.iframe.body.scrollWidth),h:Math.max(T.iframe.html.scrollHeight,T.iframe.body.scrollHeight)}},T.docscroll=n(T.iframe.body)),!P.isios&&M.iframeautoresize&&!T.isiframe){T.win.scrollTop(0),T.doc.height("");var t=Math.max(o.getElementsByTagName("html")[0].scrollHeight,o.body.scrollHeight);T.doc.height(t)}T.lazyResize(30),T.css(n(T.iframe.body),e),P.isios&&T.haswrapper&&T.css(n(o.body),{"-webkit-transform":"translate3d(0,0,0)"}),"contentWindow"in this?T.bind(this.contentWindow,"scroll",T.onscroll):T.bind(o,"scroll",T.onscroll),M.enablemousewheel&&T.mousewheel(o,T.onmousewheel),M.enablekeyboard&&T.bind(o,P.isopera?"keypress":"keydown",T.onkeypress),P.cantouch?(T.bind(o,"touchstart",T.ontouchstart),T.bind(o,"touchmove",T.ontouchmove)):M.emulatetouch&&(T.bind(o,"mousedown",T.ontouchstart),T.bind(o,"mousemove",function(e){return T.ontouchmove(e,!0)}),M.grabcursorenabled&&P.cursorgrabvalue&&T.css(n(o.body),{cursor:P.cursorgrabvalue})),T.bind(o,"mouseup",T.ontouchend),T.zoom&&(M.dblclickzoom&&T.bind(o,"dblclick",T.doZoom),T.ongesturezoom&&T.bind(o,"gestureend",T.ongesturezoom))};this.doc[0].readyState&&"complete"===this.doc[0].readyState&&setTimeout(function(){_.call(T.doc[0],!1)},500),T.bind(this.doc,"load",_)}},this.showCursor=function(e,o){if(T.cursortimeout&&(clearTimeout(T.cursortimeout),T.cursortimeout=0),T.rail){if(T.autohidedom&&(T.autohidedom.stop().css({opacity:M.cursoropacitymax}),T.cursoractive=!0),T.rail.drag&&1==T.rail.drag.pt||(void 0!==e&&!1!==e&&(T.scroll.y=e/T.scrollratio.y|0),void 0!==o&&(T.scroll.x=o/T.scrollratio.x|0)),T.cursor.css({height:T.cursorheight,top:T.scroll.y}),T.cursorh){var t=T.hasreversehr?T.scrollvaluemaxw-T.scroll.x:T.scroll.x;T.cursorh.css({width:T.cursorwidth,left:!T.rail.align&&T.rail.visibility?t+T.rail.width:t}),T.cursoractive=!0}T.zoom&&T.zoom.stop().css({opacity:M.cursoropacitymax})}},this.hideCursor=function(e){T.cursortimeout||T.rail&&T.autohidedom&&(T.hasmousefocus&&"leave"===M.autohidemode||(T.cursortimeout=setTimeout(function(){T.rail.active&&T.showonmouseevent||(T.autohidedom.stop().animate({opacity:M.cursoropacitymin}),T.zoom&&T.zoom.stop().animate({opacity:M.cursoropacitymin}),T.cursoractive=!1),T.cursortimeout=0},e||M.hidecursordelay)))},this.noticeCursor=function(e,o,t){T.showCursor(o,t),T.rail.active||T.hideCursor(e)},this.getContentSize=T.ispage?function(){return{w:Math.max(l.body.scrollWidth,l.documentElement.scrollWidth),h:Math.max(l.body.scrollHeight,l.documentElement.scrollHeight)}}:T.haswrapper?function(){return{w:T.doc[0].offsetWidth,h:T.doc[0].offsetHeight}}:function(){return{w:T.docscroll[0].scrollWidth,h:T.docscroll[0].scrollHeight}},this.onResize=function(e,o){if(!T||!T.win)return!1;var t=T.page.maxh,r=T.page.maxw,i=T.view.h,s=T.view.w;if(T.view={w:T.ispage?T.win.width():T.win[0].clientWidth,h:T.ispage?T.win.height():T.win[0].clientHeight},T.page=o||T.getContentSize(),T.page.maxh=Math.max(0,T.page.h-T.view.h),T.page.maxw=Math.max(0,T.page.w-T.view.w),T.page.maxh==t&&T.page.maxw==r&&T.view.w==s&&T.view.h==i){if(T.ispage)return T;var n=T.win.offset();if(T.lastposition){var l=T.lastposition;if(l.top==n.top&&l.left==n.left)return T}T.lastposition=n}return 0===T.page.maxh?(T.hideRail(),T.scrollvaluemax=0,T.scroll.y=0,T.scrollratio.y=0,T.cursorheight=0,T.setScrollTop(0),T.rail&&(T.rail.scrollable=!1)):(T.page.maxh-=M.railpadding.top+M.railpadding.bottom,T.rail.scrollable=!0),0===T.page.maxw?(T.hideRailHr(),T.scrollvaluemaxw=0,T.scroll.x=0,T.scrollratio.x=0,T.cursorwidth=0,T.setScrollLeft(0),T.railh&&(T.railh.scrollable=!1)):(T.page.maxw-=M.railpadding.left+M.railpadding.right,T.railh&&(T.railh.scrollable=M.horizrailenabled)),T.railslocked=T.locked||0===T.page.maxh&&0===T.page.maxw,T.railslocked?(T.ispage||T.updateScrollBar(T.view),!1):(T.hidden||(T.rail.visibility||T.showRail(),T.railh&&!T.railh.visibility&&T.showRailHr()),T.istextarea&&T.win.css("resize")&&"none"!=T.win.css("resize")&&(T.view.h-=20),T.cursorheight=Math.min(T.view.h,Math.round(T.view.h*(T.view.h/T.page.h))),T.cursorheight=M.cursorfixedheight?M.cursorfixedheight:Math.max(M.cursorminheight,T.cursorheight),T.cursorwidth=Math.min(T.view.w,Math.round(T.view.w*(T.view.w/T.page.w))),T.cursorwidth=M.cursorfixedheight?M.cursorfixedheight:Math.max(M.cursorminheight,T.cursorwidth),T.scrollvaluemax=T.view.h-T.cursorheight-(M.railpadding.top+M.railpadding.bottom),T.hasborderbox||(T.scrollvaluemax-=T.cursor[0].offsetHeight-T.cursor[0].clientHeight),T.railh&&(T.railh.width=T.page.maxh>0?T.view.w-T.rail.width:T.view.w,T.scrollvaluemaxw=T.railh.width-T.cursorwidth-(M.railpadding.left+M.railpadding.right)),T.ispage||T.updateScrollBar(T.view),T.scrollratio={x:T.page.maxw/T.scrollvaluemaxw,y:T.page.maxh/T.scrollvaluemax},T.getScrollTop()>T.page.maxh?T.doScrollTop(T.page.maxh):(T.scroll.y=T.getScrollTop()/T.scrollratio.y|0,T.scroll.x=T.getScrollLeft()/T.scrollratio.x|0,T.cursoractive&&T.noticeCursor()),T.scroll.y&&0===T.getScrollTop()&&T.doScrollTo(T.scroll.y*T.scrollratio.y|0),T)},this.resize=T.onResize;var O=0;this.onscreenresize=function(e){clearTimeout(O);var o=!T.ispage&&!T.haswrapper;o&&T.hideRails(),O=setTimeout(function(){T&&(o&&T.showRails(),T.resize()),O=0},120)},this.lazyResize=function(e){return clearTimeout(O),e=isNaN(e)?240:e,O=setTimeout(function(){T&&T.resize(),O=0},e),T},this.jqbind=function(e,o,t){T.events.push({e:e,n:o,f:t,q:!0}),n(e).on(o,t)},this.mousewheel=function(e,o,t){var r="jquery"in e?e[0]:e;if("onwheel"in l.createElement("div"))T._bind(r,"wheel",o,t||!1);else{var i=void 0!==l.onmousewheel?"mousewheel":"DOMMouseScroll";S(r,i,o,t||!1),"DOMMouseScroll"==i&&S(r,"MozMousePixelScroll",o,t||!1)}};var Y=!1;if(P.haseventlistener){try{var H=Object.defineProperty({},"passive",{get:function(){Y=!0}});a.addEventListener("test",null,H)}catch(e){}this.stopPropagation=function(e){return!!e&&((e=e.original?e.original:e).stopPropagation(),!1)},this.cancelEvent=function(e){return e.cancelable&&e.preventDefault(),e.stopImmediatePropagation(),e.preventManipulation&&e.preventManipulation(),!1}}else Event.prototype.preventDefault=function(){this.returnValue=!1},Event.prototype.stopPropagation=function(){this.cancelBubble=!0},a.constructor.prototype.addEventListener=l.constructor.prototype.addEventListener=Element.prototype.addEventListener=function(e,o,t){this.attachEvent("on"+e,o)},a.constructor.prototype.removeEventListener=l.constructor.prototype.removeEventListener=Element.prototype.removeEventListener=function(e,o,t){this.detachEvent("on"+e,o)},this.cancelEvent=function(e){return(e=e||a.event)&&(e.cancelBubble=!0,e.cancel=!0,e.returnValue=!1),!1},this.stopPropagation=function(e){return(e=e||a.event)&&(e.cancelBubble=!0),!1};this.delegate=function(e,o,t,r,i){var s=d[o]||!1;s||(s={a:[],l:[],f:function(e){for(var o=s.l,t=!1,r=o.length-1;r>=0;r--)if(!1===(t=o[r].call(e.target,e)))return!1;return t}},T.bind(e,o,s.f,r,i),d[o]=s),T.ispage?(s.a=[T.id].concat(s.a),s.l=[t].concat(s.l)):(s.a.push(T.id),s.l.push(t))},this.undelegate=function(e,o,t,r,i){var s=d[o]||!1;if(s&&s.l)for(var n=0,l=s.l.length;n<l;n++)s.a[n]===T.id&&(s.a.splice(n),s.l.splice(n),0===s.a.length&&(T._unbind(e,o,s.l.f),d[o]=null))},this.bind=function(e,o,t,r,i){var s="jquery"in e?e[0]:e;T._bind(s,o,t,r||!1,i||!1)},this._bind=function(e,o,t,r,i){T.events.push({e:e,n:o,f:t,b:r,q:!1}),Y&&i?e.addEventListener(o,t,{passive:!1,capture:r}):e.addEventListener(o,t,r||!1)},this._unbind=function(e,o,t,r){d[o]?T.undelegate(e,o,t,r):e.removeEventListener(o,t,r)},this.unbindAll=function(){for(var e=0;e<T.events.length;e++){var o=T.events[e];o.q?o.e.unbind(o.n,o.f):T._unbind(o.e,o.n,o.f,o.b)}},this.showRails=function(){return T.showRail().showRailHr()},this.showRail=function(){return 0===T.page.maxh||!T.ispage&&"none"==T.win.css("display")||(T.rail.visibility=!0,T.rail.css("display","block")),T},this.showRailHr=function(){return T.railh&&(0===T.page.maxw||!T.ispage&&"none"==T.win.css("display")||(T.railh.visibility=!0,T.railh.css("display","block"))),T},this.hideRails=function(){return T.hideRail().hideRailHr()},this.hideRail=function(){return T.rail.visibility=!1,T.rail.css("display","none"),T},this.hideRailHr=function(){return T.railh&&(T.railh.visibility=!1,T.railh.css("display","none")),T},this.show=function(){return T.hidden=!1,T.railslocked=!1,T.showRails()},this.hide=function(){return T.hidden=!0,T.railslocked=!0,T.hideRails()},this.toggle=function(){return T.hidden?T.show():T.hide()},this.remove=function(){T.stop(),T.cursortimeout&&clearTimeout(T.cursortimeout);for(var e in T.delaylist)T.delaylist[e]&&h(T.delaylist[e].h);T.doZoomOut(),T.unbindAll(),P.isie9&&T.win[0].detachEvent("onpropertychange",T.onAttributeChange),!1!==T.observer&&T.observer.disconnect(),!1!==T.observerremover&&T.observerremover.disconnect(),!1!==T.observerbody&&T.observerbody.disconnect(),T.events=null,T.cursor&&T.cursor.remove(),T.cursorh&&T.cursorh.remove(),T.rail&&T.rail.remove(),T.railh&&T.railh.remove(),T.zoom&&T.zoom.remove();for(var o=0;o<T.saved.css.length;o++){var t=T.saved.css[o];t[0].css(t[1],void 0===t[2]?"":t[2])}T.saved=!1,T.me.data("__nicescroll","");var r=n.nicescroll;r.each(function(e){if(this&&this.id===T.id){delete r[e];for(var o=++e;o<r.length;o++,e++)r[e]=r[o];--r.length&&delete r[r.length]}});for(var i in T)T[i]=null,delete T[i];T=null},this.scrollstart=function(e){return this.onscrollstart=e,T},this.scrollend=function(e){return this.onscrollend=e,T},this.scrollcancel=function(e){return this.onscrollcancel=e,T},this.zoomin=function(e){return this.onzoomin=e,T},this.zoomout=function(e){return this.onzoomout=e,T},this.isScrollable=function(e){var o=e.target?e.target:e;if("OPTION"==o.nodeName)return!0;for(;o&&1==o.nodeType&&o!==this.me[0]&&!/^BODY|HTML/.test(o.nodeName);){var t=n(o),r=t.css("overflowY")||t.css("overflowX")||t.css("overflow")||"";if(/scroll|auto/.test(r))return o.clientHeight!=o.scrollHeight;o=!!o.parentNode&&o.parentNode}return!1},this.getViewport=function(e){for(var o=!(!e||!e.parentNode)&&e.parentNode;o&&1==o.nodeType&&!/^BODY|HTML/.test(o.nodeName);){var t=n(o);if(/fixed|absolute/.test(t.css("position")))return t;var r=t.css("overflowY")||t.css("overflowX")||t.css("overflow")||"";if(/scroll|auto/.test(r)&&o.clientHeight!=o.scrollHeight)return t;if(t.getNiceScroll().length>0)return t;o=!!o.parentNode&&o.parentNode}return!1},this.triggerScrollStart=function(e,o,t,r,i){if(T.onscrollstart){var s={type:"scrollstart",current:{x:e,y:o},request:{x:t,y:r},end:{x:T.newscrollx,y:T.newscrolly},speed:i};T.onscrollstart.call(T,s)}},this.triggerScrollEnd=function(){if(T.onscrollend){var e=T.getScrollLeft(),o=T.getScrollTop(),t={type:"scrollend",current:{x:e,y:o},end:{x:e,y:o}};T.onscrollend.call(T,t)}};var B=0,X=0,D=0,A=1,q=!1;if(this.onmousewheel=function(e){if(T.wheelprevented||T.locked)return!1;if(T.railslocked)return T.debounced("checkunlock",T.resize,250),!1;if(T.rail.drag)return T.cancelEvent(e);if("auto"===M.oneaxismousemode&&0!==e.deltaX&&(M.oneaxismousemode=!1),M.oneaxismousemode&&0===e.deltaX&&!T.rail.scrollable)return!T.railh||!T.railh.scrollable||T.onmousewheelhr(e);var o=f(),t=!1;if(M.preservenativescrolling&&T.checkarea+600<o&&(T.nativescrollingarea=T.isScrollable(e),t=!0),T.checkarea=o,T.nativescrollingarea)return!0;var r=k(e,!1,t);return r&&(T.checkarea=0),r},this.onmousewheelhr=function(e){if(!T.wheelprevented){if(T.railslocked||!T.railh.scrollable)return!0;if(T.rail.drag)return T.cancelEvent(e);var o=f(),t=!1;return M.preservenativescrolling&&T.checkarea+600<o&&(T.nativescrollingarea=T.isScrollable(e),t=!0),T.checkarea=o,!!T.nativescrollingarea||(T.railslocked?T.cancelEvent(e):k(e,!0,t))}},this.stop=function(){return T.cancelScroll(),T.scrollmon&&T.scrollmon.stop(),T.cursorfreezed=!1,T.scroll.y=Math.round(T.getScrollTop()*(1/T.scrollratio.y)),T.noticeCursor(),T},this.getTransitionSpeed=function(e){return 80+e/72*M.scrollspeed|0},M.smoothscroll)if(T.ishwscroll&&P.hastransition&&M.usetransition&&M.smoothscroll){var j="";this.resetTransition=function(){j="",T.doc.css(P.prefixstyle+"transition-duration","0ms")},this.prepareTransition=function(e,o){var t=o?e:T.getTransitionSpeed(e),r=t+"ms";return j!==r&&(j=r,T.doc.css(P.prefixstyle+"transition-duration",r)),t},this.doScrollLeft=function(e,o){var t=T.scrollrunning?T.newscrolly:T.getScrollTop();T.doScrollPos(e,t,o)},this.doScrollTop=function(e,o){var t=T.scrollrunning?T.newscrollx:T.getScrollLeft();T.doScrollPos(t,e,o)},this.cursorupdate={running:!1,start:function(){var e=this;if(!e.running){e.running=!0;var o=function(){e.running&&u(o),T.showCursor(T.getScrollTop(),T.getScrollLeft()),T.notifyScrollEvent(T.win[0])};u(o)}},stop:function(){this.running=!1}},this.doScrollPos=function(e,o,t){var r=T.getScrollTop(),i=T.getScrollLeft();if(((T.newscrolly-r)*(o-r)<0||(T.newscrollx-i)*(e-i)<0)&&T.cancelScroll(),M.bouncescroll?(o<0?o=o/2|0:o>T.page.maxh&&(o=T.page.maxh+(o-T.page.maxh)/2|0),e<0?e=e/2|0:e>T.page.maxw&&(e=T.page.maxw+(e-T.page.maxw)/2|0)):(o<0?o=0:o>T.page.maxh&&(o=T.page.maxh),e<0?e=0:e>T.page.maxw&&(e=T.page.maxw)),T.scrollrunning&&e==T.newscrollx&&o==T.newscrolly)return!1;T.newscrolly=o,T.newscrollx=e;var s=T.getScrollTop(),n=T.getScrollLeft(),l={};l.x=e-n,l.y=o-s;var a=0|Math.sqrt(l.x*l.x+l.y*l.y),c=T.prepareTransition(a);T.scrollrunning||(T.scrollrunning=!0,T.triggerScrollStart(n,s,e,o,c),T.cursorupdate.start()),T.scrollendtrapped=!0,P.transitionend||(T.scrollendtrapped&&clearTimeout(T.scrollendtrapped),T.scrollendtrapped=setTimeout(T.onScrollTransitionEnd,c)),T.setScrollTop(T.newscrolly),T.setScrollLeft(T.newscrollx)},this.cancelScroll=function(){if(!T.scrollendtrapped)return!0;var e=T.getScrollTop(),o=T.getScrollLeft();return T.scrollrunning=!1,P.transitionend||clearTimeout(P.transitionend),T.scrollendtrapped=!1,T.resetTransition(),T.setScrollTop(e),T.railh&&T.setScrollLeft(o),T.timerscroll&&T.timerscroll.tm&&clearInterval(T.timerscroll.tm),T.timerscroll=!1,T.cursorfreezed=!1,T.cursorupdate.stop(),T.showCursor(e,o),T},this.onScrollTransitionEnd=function(){if(T.scrollendtrapped){var e=T.getScrollTop(),o=T.getScrollLeft();if(e<0?e=0:e>T.page.maxh&&(e=T.page.maxh),o<0?o=0:o>T.page.maxw&&(o=T.page.maxw),e!=T.newscrolly||o!=T.newscrollx)return T.doScrollPos(o,e,M.snapbackspeed);T.scrollrunning&&T.triggerScrollEnd(),T.scrollrunning=!1,T.scrollendtrapped=!1,T.resetTransition(),T.timerscroll=!1,T.setScrollTop(e),T.railh&&T.setScrollLeft(o),T.cursorupdate.stop(),T.noticeCursor(!1,e,o),T.cursorfreezed=!1}}}else this.doScrollLeft=function(e,o){var t=T.scrollrunning?T.newscrolly:T.getScrollTop();T.doScrollPos(e,t,o)},this.doScrollTop=function(e,o){var t=T.scrollrunning?T.newscrollx:T.getScrollLeft();T.doScrollPos(t,e,o)},this.doScrollPos=function(e,o,t){var r=T.getScrollTop(),i=T.getScrollLeft();((T.newscrolly-r)*(o-r)<0||(T.newscrollx-i)*(e-i)<0)&&T.cancelScroll();var s=!1;if(T.bouncescroll&&T.rail.visibility||(o<0?(o=0,s=!0):o>T.page.maxh&&(o=T.page.maxh,s=!0)),T.bouncescroll&&T.railh.visibility||(e<0?(e=0,s=!0):e>T.page.maxw&&(e=T.page.maxw,s=!0)),T.scrollrunning&&T.newscrolly===o&&T.newscrollx===e)return!0;T.newscrolly=o,T.newscrollx=e,T.dst={},T.dst.x=e-i,T.dst.y=o-r,T.dst.px=i,T.dst.py=r;var n=0|Math.sqrt(T.dst.x*T.dst.x+T.dst.y*T.dst.y),l=T.getTransitionSpeed(n);T.bzscroll={};var a=s?1:.58;T.bzscroll.x=new R(i,T.newscrollx,l,0,0,a,1),T.bzscroll.y=new R(r,T.newscrolly,l,0,0,a,1);f();var c=function(){if(T.scrollrunning){var e=T.bzscroll.y.getPos();T.setScrollLeft(T.bzscroll.x.getNow()),T.setScrollTop(T.bzscroll.y.getNow()),e<=1?T.timer=u(c):(T.scrollrunning=!1,T.timer=0,T.triggerScrollEnd())}};T.scrollrunning||(T.triggerScrollStart(i,r,e,o,l),T.scrollrunning=!0,T.timer=u(c))},this.cancelScroll=function(){return T.timer&&h(T.timer),T.timer=0,T.bzscroll=!1,T.scrollrunning=!1,T};else this.doScrollLeft=function(e,o){var t=T.getScrollTop();T.doScrollPos(e,t,o)},this.doScrollTop=function(e,o){var t=T.getScrollLeft();T.doScrollPos(t,e,o)},this.doScrollPos=function(e,o,t){var r=e>T.page.maxw?T.page.maxw:e;r<0&&(r=0);var i=o>T.page.maxh?T.page.maxh:o;i<0&&(i=0),T.synched("scroll",function(){T.setScrollTop(i),T.setScrollLeft(r)})},this.cancelScroll=function(){};this.doScrollBy=function(e,o){z(0,e)},this.doScrollLeftBy=function(e,o){z(e,0)},this.doScrollTo=function(e,o){var t=o?Math.round(e*T.scrollratio.y):e;t<0?t=0:t>T.page.maxh&&(t=T.page.maxh),T.cursorfreezed=!1,T.doScrollTop(e)},this.checkContentSize=function(){var e=T.getContentSize();e.h==T.page.h&&e.w==T.page.w||T.resize(!1,e)},T.onscroll=function(e){T.rail.drag||T.cursorfreezed||T.synched("scroll",function(){T.scroll.y=Math.round(T.getScrollTop()/T.scrollratio.y),T.railh&&(T.scroll.x=Math.round(T.getScrollLeft()/T.scrollratio.x)),T.noticeCursor()})},T.bind(T.docscroll,"scroll",T.onscroll),this.doZoomIn=function(e){if(!T.zoomactive){T.zoomactive=!0,T.zoomrestore={style:{}};var o=["position","top","left","zIndex","backgroundColor","marginTop","marginBottom","marginLeft","marginRight"],t=T.win[0].style;for(var r in o){var i=o[r];T.zoomrestore.style[i]=void 0!==t[i]?t[i]:""}T.zoomrestore.style.width=T.win.css("width"),T.zoomrestore.style.height=T.win.css("height"),T.zoomrestore.padding={w:T.win.outerWidth()-T.win.width(),h:T.win.outerHeight()-T.win.height()},P.isios4&&(T.zoomrestore.scrollTop=c.scrollTop(),c.scrollTop(0)),T.win.css({position:P.isios4?"absolute":"fixed",top:0,left:0,zIndex:s+100,margin:0});var n=T.win.css("backgroundColor");return(""===n||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(n))&&T.win.css("backgroundColor","#fff"),T.rail.css({zIndex:s+101}),T.zoom.css({zIndex:s+102}),T.zoom.css("backgroundPosition","0 -18px"),T.resizeZoom(),T.onzoomin&&T.onzoomin.call(T),T.cancelEvent(e)}},this.doZoomOut=function(e){if(T.zoomactive)return T.zoomactive=!1,T.win.css("margin",""),T.win.css(T.zoomrestore.style),P.isios4&&c.scrollTop(T.zoomrestore.scrollTop),T.rail.css({"z-index":T.zindex}),T.zoom.css({"z-index":T.zindex}),T.zoomrestore=!1,T.zoom.css("backgroundPosition","0 0"),T.onResize(),T.onzoomout&&T.onzoomout.call(T),T.cancelEvent(e)},this.doZoom=function(e){return T.zoomactive?T.doZoomOut(e):T.doZoomIn(e)},this.resizeZoom=function(){if(T.zoomactive){var e=T.getScrollTop();T.win.css({width:c.width()-T.zoomrestore.padding.w+"px",height:c.height()-T.zoomrestore.padding.h+"px"}),T.onResize(),T.setScrollTop(Math.min(T.page.maxh,e))}},this.init(),n.nicescroll.push(this)},y=function(e){var o=this;this.nc=e,this.lastx=0,this.lasty=0,this.speedx=0,this.speedy=0,this.lasttime=0,this.steptime=0,this.snapx=!1,this.snapy=!1,this.demulx=0,this.demuly=0,this.lastscrollx=-1,this.lastscrolly=-1,this.chkx=0,this.chky=0,this.timer=0,this.reset=function(e,t){o.stop(),o.steptime=0,o.lasttime=f(),o.speedx=0,o.speedy=0,o.lastx=e,o.lasty=t,o.lastscrollx=-1,o.lastscrolly=-1},this.update=function(e,t){var r=f();o.steptime=r-o.lasttime,o.lasttime=r;var i=t-o.lasty,s=e-o.lastx,n=o.nc.getScrollTop()+i,l=o.nc.getScrollLeft()+s;o.snapx=l<0||l>o.nc.page.maxw,o.snapy=n<0||n>o.nc.page.maxh,o.speedx=s,o.speedy=i,o.lastx=e,o.lasty=t},this.stop=function(){o.nc.unsynched("domomentum2d"),o.timer&&clearTimeout(o.timer),o.timer=0,o.lastscrollx=-1,o.lastscrolly=-1},this.doSnapy=function(e,t){var r=!1;t<0?(t=0,r=!0):t>o.nc.page.maxh&&(t=o.nc.page.maxh,r=!0),e<0?(e=0,r=!0):e>o.nc.page.maxw&&(e=o.nc.page.maxw,r=!0),r?o.nc.doScrollPos(e,t,o.nc.opt.snapbackspeed):o.nc.triggerScrollEnd()},this.doMomentum=function(e){var t=f(),r=e?t+e:o.lasttime,i=o.nc.getScrollLeft(),s=o.nc.getScrollTop(),n=o.nc.page.maxh,l=o.nc.page.maxw;o.speedx=l>0?Math.min(60,o.speedx):0,o.speedy=n>0?Math.min(60,o.speedy):0;var a=r&&t-r<=60;(s<0||s>n||i<0||i>l)&&(a=!1);var c=!(!o.speedy||!a)&&o.speedy,d=!(!o.speedx||!a)&&o.speedx;if(c||d){var u=Math.max(16,o.steptime);if(u>50){var h=u/50;o.speedx*=h,o.speedy*=h,u=50}o.demulxy=0,o.lastscrollx=o.nc.getScrollLeft(),o.chkx=o.lastscrollx,o.lastscrolly=o.nc.getScrollTop(),o.chky=o.lastscrolly;var p=o.lastscrollx,m=o.lastscrolly,g=function(){var e=f()-t>600?.04:.02;o.speedx&&(p=Math.floor(o.lastscrollx-o.speedx*(1-o.demulxy)),o.lastscrollx=p,(p<0||p>l)&&(e=.1)),o.speedy&&(m=Math.floor(o.lastscrolly-o.speedy*(1-o.demulxy)),o.lastscrolly=m,(m<0||m>n)&&(e=.1)),o.demulxy=Math.min(1,o.demulxy+e),o.nc.synched("domomentum2d",function(){if(o.speedx){o.nc.getScrollLeft();o.chkx=p,o.nc.setScrollLeft(p)}if(o.speedy){o.nc.getScrollTop();o.chky=m,o.nc.setScrollTop(m)}o.timer||(o.nc.hideCursor(),o.doSnapy(p,m))}),o.demulxy<1?o.timer=setTimeout(g,u):(o.stop(),o.nc.hideCursor(),o.doSnapy(p,m))};g()}else o.doSnapy(o.nc.getScrollLeft(),o.nc.getScrollTop())}},x=e.fn.scrollTop;e.cssHooks.pageYOffset={get:function(e,o,t){var r=n.data(e,"__nicescroll")||!1;return r&&r.ishwscroll?r.getScrollTop():x.call(e)},set:function(e,o){var t=n.data(e,"__nicescroll")||!1;return t&&t.ishwscroll?t.setScrollTop(parseInt(o)):x.call(e,o),this}},e.fn.scrollTop=function(e){if(void 0===e){var o=!!this[0]&&(n.data(this[0],"__nicescroll")||!1);return o&&o.ishwscroll?o.getScrollTop():x.call(this)}return this.each(function(){var o=n.data(this,"__nicescroll")||!1;o&&o.ishwscroll?o.setScrollTop(parseInt(e)):x.call(n(this),e)})};var S=e.fn.scrollLeft;n.cssHooks.pageXOffset={get:function(e,o,t){var r=n.data(e,"__nicescroll")||!1;return r&&r.ishwscroll?r.getScrollLeft():S.call(e)},set:function(e,o){var t=n.data(e,"__nicescroll")||!1;return t&&t.ishwscroll?t.setScrollLeft(parseInt(o)):S.call(e,o),this}},e.fn.scrollLeft=function(e){if(void 0===e){var o=!!this[0]&&(n.data(this[0],"__nicescroll")||!1);return o&&o.ishwscroll?o.getScrollLeft():S.call(this)}return this.each(function(){var o=n.data(this,"__nicescroll")||!1;o&&o.ishwscroll?o.setScrollLeft(parseInt(e)):S.call(n(this),e)})};var z=function(e){var o=this;if(this.length=0,this.name="nicescrollarray",this.each=function(e){return n.each(o,e),o},this.push=function(e){o[o.length]=e,o.length++},this.eq=function(e){return o[e]},e)for(var t=0;t<e.length;t++){var r=n.data(e[t],"__nicescroll")||!1;r&&(this[this.length]=r,this.length++)}return this};!function(e,o,t){for(var r=0,i=o.length;r<i;r++)t(e,o[r])}(z.prototype,["show","hide","toggle","onResize","resize","remove","stop","doScrollPos"],function(e,o){e[o]=function(){var e=arguments;return this.each(function(){this[o].apply(this,e)})}}),e.fn.getNiceScroll=function(e){return void 0===e?new z(this):this[e]&&n.data(this[e],"__nicescroll")||!1},(e.expr.pseudos||e.expr[":"]).nicescroll=function(e){return void 0!==n.data(e,"__nicescroll")},n.fn.niceScroll=function(e,o){void 0!==o||"object"!=typeof e||"jquery"in e||(o=e,e=!1);var t=new z;return this.each(function(){var r=n(this),i=n.extend({},o);if(e){var s=n(e);i.doc=s.length>1?n(e,r):s,i.win=r}!("doc"in i)||"win"in i||(i.win=r);var l=r.data("__nicescroll")||!1;l||(i.doc=i.doc||r,l=new b(i,r),r.data("__nicescroll",l)),t.push(l)}),1===t.length?t[0]:t},a.NiceScroll={getjQuery:function(){return e}},n.nicescroll||(n.nicescroll=new z,n.nicescroll.options=g)});;
(function(t,e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){module.exports=e(require("jquery"))}else{e(t.jQuery)}})(this,function(t){t.transit={version:"0.9.12",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};var e=document.createElement("div");var n={};function i(t){if(t in e.style)return t;var n=["Moz","Webkit","O","ms"];var i=t.charAt(0).toUpperCase()+t.substr(1);for(var r=0;r<n.length;++r){var s=n[r]+i;if(s in e.style){return s}}}function r(){e.style[n.transform]="";e.style[n.transform]="rotateY(90deg)";return e.style[n.transform]!==""}var s=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;n.transition=i("transition");n.transitionDelay=i("transitionDelay");n.transform=i("transform");n.transformOrigin=i("transformOrigin");n.filter=i("Filter");n.transform3d=r();var a={transition:"transitionend",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};var o=n.transitionEnd=a[n.transition]||null;for(var u in n){if(n.hasOwnProperty(u)&&typeof t.support[u]==="undefined"){t.support[u]=n[u]}}e=null;t.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeInCubic:"cubic-bezier(.550,.055,.675,.190)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};t.cssHooks["transit:transform"]={get:function(e){return t(e).data("transform")||new f},set:function(e,i){var r=i;if(!(r instanceof f)){r=new f(r)}if(n.transform==="WebkitTransform"&&!s){e.style[n.transform]=r.toString(true)}else{e.style[n.transform]=r.toString()}t(e).data("transform",r)}};t.cssHooks.transform={set:t.cssHooks["transit:transform"].set};t.cssHooks.filter={get:function(t){return t.style[n.filter]},set:function(t,e){t.style[n.filter]=e}};if(t.fn.jquery<"1.8"){t.cssHooks.transformOrigin={get:function(t){return t.style[n.transformOrigin]},set:function(t,e){t.style[n.transformOrigin]=e}};t.cssHooks.transition={get:function(t){return t.style[n.transition]},set:function(t,e){t.style[n.transition]=e}}}p("scale");p("scaleX");p("scaleY");p("translate");p("rotate");p("rotateX");p("rotateY");p("rotate3d");p("perspective");p("skewX");p("skewY");p("x",true);p("y",true);function f(t){if(typeof t==="string"){this.parse(t)}return this}f.prototype={setFromString:function(t,e){var n=typeof e==="string"?e.split(","):e.constructor===Array?e:[e];n.unshift(t);f.prototype.set.apply(this,n)},set:function(t){var e=Array.prototype.slice.apply(arguments,[1]);if(this.setter[t]){this.setter[t].apply(this,e)}else{this[t]=e.join(",")}},get:function(t){if(this.getter[t]){return this.getter[t].apply(this)}else{return this[t]||0}},setter:{rotate:function(t){this.rotate=b(t,"deg")},rotateX:function(t){this.rotateX=b(t,"deg")},rotateY:function(t){this.rotateY=b(t,"deg")},scale:function(t,e){if(e===undefined){e=t}this.scale=t+","+e},skewX:function(t){this.skewX=b(t,"deg")},skewY:function(t){this.skewY=b(t,"deg")},perspective:function(t){this.perspective=b(t,"px")},x:function(t){this.set("translate",t,null)},y:function(t){this.set("translate",null,t)},translate:function(t,e){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(t!==null&&t!==undefined){this._translateX=b(t,"px")}if(e!==null&&e!==undefined){this._translateY=b(e,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var t=(this.scale||"1,1").split(",");if(t[0]){t[0]=parseFloat(t[0])}if(t[1]){t[1]=parseFloat(t[1])}return t[0]===t[1]?t[0]:t},rotate3d:function(){var t=(this.rotate3d||"0,0,0,0deg").split(",");for(var e=0;e<=3;++e){if(t[e]){t[e]=parseFloat(t[e])}}if(t[3]){t[3]=b(t[3],"deg")}return t}},parse:function(t){var e=this;t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,n,i){e.setFromString(n,i)})},toString:function(t){var e=[];for(var i in this){if(this.hasOwnProperty(i)){if(!n.transform3d&&(i==="rotateX"||i==="rotateY"||i==="perspective"||i==="transformOrigin")){continue}if(i[0]!=="_"){if(t&&i==="scale"){e.push(i+"3d("+this[i]+",1)")}else if(t&&i==="translate"){e.push(i+"3d("+this[i]+",0)")}else{e.push(i+"("+this[i]+")")}}}}return e.join(" ")}};function c(t,e,n){if(e===true){t.queue(n)}else if(e){t.queue(e,n)}else{t.each(function(){n.call(this)})}}function l(e){var i=[];t.each(e,function(e){e=t.camelCase(e);e=t.transit.propertyMap[e]||t.cssProps[e]||e;e=h(e);if(n[e])e=h(n[e]);if(t.inArray(e,i)===-1){i.push(e)}});return i}function d(e,n,i,r){var s=l(e);if(t.cssEase[i]){i=t.cssEase[i]}var a=""+y(n)+" "+i;if(parseInt(r,10)>0){a+=" "+y(r)}var o=[];t.each(s,function(t,e){o.push(e+" "+a)});return o.join(", ")}t.fn.transition=t.fn.transit=function(e,i,r,s){var a=this;var u=0;var f=true;var l=t.extend(true,{},e);if(typeof i==="function"){s=i;i=undefined}if(typeof i==="object"){r=i.easing;u=i.delay||0;f=typeof i.queue==="undefined"?true:i.queue;s=i.complete;i=i.duration}if(typeof r==="function"){s=r;r=undefined}if(typeof l.easing!=="undefined"){r=l.easing;delete l.easing}if(typeof l.duration!=="undefined"){i=l.duration;delete l.duration}if(typeof l.complete!=="undefined"){s=l.complete;delete l.complete}if(typeof l.queue!=="undefined"){f=l.queue;delete l.queue}if(typeof l.delay!=="undefined"){u=l.delay;delete l.delay}if(typeof i==="undefined"){i=t.fx.speeds._default}if(typeof r==="undefined"){r=t.cssEase._default}i=y(i);var p=d(l,i,r,u);var h=t.transit.enabled&&n.transition;var b=h?parseInt(i,10)+parseInt(u,10):0;if(b===0){var g=function(t){a.css(l);if(s){s.apply(a)}if(t){t()}};c(a,f,g);return a}var m={};var v=function(e){var i=false;var r=function(){if(i){a.unbind(o,r)}if(b>0){a.each(function(){this.style[n.transition]=m[this]||null})}if(typeof s==="function"){s.apply(a)}if(typeof e==="function"){e()}};if(b>0&&o&&t.transit.useTransitionEnd){i=true;a.bind(o,r)}else{window.setTimeout(r,b)}a.each(function(){if(b>0){this.style[n.transition]=p}t(this).css(l)})};var z=function(t){this.offsetWidth;v(t)};c(a,f,z);return this};function p(e,i){if(!i){t.cssNumber[e]=true}t.transit.propertyMap[e]=n.transform;t.cssHooks[e]={get:function(n){var i=t(n).css("transit:transform");return i.get(e)},set:function(n,i){var r=t(n).css("transit:transform");r.setFromString(e,i);t(n).css({"transit:transform":r})}}}function h(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function b(t,e){if(typeof t==="string"&&!t.match(/^[\-0-9\.]+$/)){return t}else{return""+t+e}}function y(e){var n=e;if(typeof n==="string"&&!n.match(/^[\-0-9\.]+/)){n=t.fx.speeds[n]||t.fx.speeds._default}return b(n,"ms")}t.transit.getTransitionValue=d;return t});;
// https://d3js.org Version 4.13.0. Copyright 2018 Mike Bostock.
(function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(t.d3=t.d3||{})})(this,function(t){"use strict";function n(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function e(t){return 1===t.length&&(t=function(t){return function(e,r){return n(t(e),r)}}(t)),{left:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)<0?r=o+1:i=o}return r},right:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)>0?i=o:r=o+1}return r}}}function r(t,n){return[t,n]}function i(t){return null===t?NaN:+t}function o(t,n){var e,r,o=t.length,u=0,a=-1,c=0,s=0;if(null==n)for(;++a<o;)isNaN(e=i(t[a]))||(s+=(r=e-c)*(e-(c+=r/++u)));else for(;++a<o;)isNaN(e=i(n(t[a],a,t)))||(s+=(r=e-c)*(e-(c+=r/++u)));if(u>1)return s/(u-1)}function u(t,n){var e=o(t,n);return e?Math.sqrt(e):e}function a(t,n){var e,r,i,o=t.length,u=-1;if(null==n){for(;++u<o;)if(null!=(e=t[u])&&e>=e)for(r=i=e;++u<o;)null!=(e=t[u])&&(r>e&&(r=e),i<e&&(i=e))}else for(;++u<o;)if(null!=(e=n(t[u],u,t))&&e>=e)for(r=i=e;++u<o;)null!=(e=n(t[u],u,t))&&(r>e&&(r=e),i<e&&(i=e));return[r,i]}function c(t){return function(){return t}}function s(t){return t}function f(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),o=new Array(i);++r<i;)o[r]=t+r*e;return o}function l(t,n,e){var r,i,o,u,a=-1;if(n=+n,t=+t,e=+e,t===n&&e>0)return[t];if((r=n<t)&&(i=t,t=n,n=i),0===(u=h(t,n,e))||!isFinite(u))return[];if(u>0)for(t=Math.ceil(t/u),n=Math.floor(n/u),o=new Array(i=Math.ceil(n-t+1));++a<i;)o[a]=(t+a)*u;else for(t=Math.floor(t*u),n=Math.ceil(n*u),o=new Array(i=Math.ceil(t-n+1));++a<i;)o[a]=(t-a)/u;return r&&o.reverse(),o}function h(t,n,e){var r=(n-t)/Math.max(0,e),i=Math.floor(Math.log(r)/Math.LN10),o=r/Math.pow(10,i);return i>=0?(o>=Hs?10:o>=js?5:o>=Xs?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(o>=Hs?10:o>=js?5:o>=Xs?2:1)}function p(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/i;return o>=Hs?i*=10:o>=js?i*=5:o>=Xs&&(i*=2),n<t?-i:i}function d(t){return Math.ceil(Math.log(t.length)/Math.LN2)+1}function v(t,n,e){if(null==e&&(e=i),r=t.length){if((n=+n)<=0||r<2)return+e(t[0],0,t);if(n>=1)return+e(t[r-1],r-1,t);var r,o=(r-1)*n,u=Math.floor(o),a=+e(t[u],u,t);return a+(+e(t[u+1],u+1,t)-a)*(o-u)}}function g(t){for(var n,e,r,i=t.length,o=-1,u=0;++o<i;)u+=t[o].length;for(e=new Array(u);--i>=0;)for(n=(r=t[i]).length;--n>=0;)e[--u]=r[n];return e}function _(t,n){var e,r,i=t.length,o=-1;if(null==n){for(;++o<i;)if(null!=(e=t[o])&&e>=e)for(r=e;++o<i;)null!=(e=t[o])&&r>e&&(r=e)}else for(;++o<i;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=e;++o<i;)null!=(e=n(t[o],o,t))&&r>e&&(r=e);return r}function y(t){if(!(i=t.length))return[];for(var n=-1,e=_(t,m),r=new Array(e);++n<e;)for(var i,o=-1,u=r[n]=new Array(i);++o<i;)u[o]=t[o][n];return r}function m(t){return t.length}function x(t){return t}function b(t){return"translate("+(t+.5)+",0)"}function w(t){return"translate(0,"+(t+.5)+")"}function M(){return!this.__axis}function T(t,n){function e(e){var h=null==i?n.ticks?n.ticks.apply(n,r):n.domain():i,p=null==o?n.tickFormat?n.tickFormat.apply(n,r):x:o,d=Math.max(u,0)+c,v=n.range(),g=+v[0]+.5,_=+v[v.length-1]+.5,y=(n.bandwidth?function(t){var n=Math.max(0,t.bandwidth()-1)/2;return t.round()&&(n=Math.round(n)),function(e){return+t(e)+n}}:function(t){return function(n){return+t(n)}})(n.copy()),m=e.selection?e.selection():e,b=m.selectAll(".domain").data([null]),w=m.selectAll(".tick").data(h,n).order(),T=w.exit(),N=w.enter().append("g").attr("class","tick"),k=w.select("line"),S=w.select("text");b=b.merge(b.enter().insert("path",".tick").attr("class","domain").attr("stroke","#000")),w=w.merge(N),k=k.merge(N.append("line").attr("stroke","#000").attr(f+"2",s*u)),S=S.merge(N.append("text").attr("fill","#000").attr(f,s*d).attr("dy",t===$s?"0em":t===Zs?"0.71em":"0.32em")),e!==m&&(b=b.transition(e),w=w.transition(e),k=k.transition(e),S=S.transition(e),T=T.transition(e).attr("opacity",Qs).attr("transform",function(t){return isFinite(t=y(t))?l(t):this.getAttribute("transform")}),N.attr("opacity",Qs).attr("transform",function(t){var n=this.parentNode.__axis;return l(n&&isFinite(n=n(t))?n:y(t))})),T.remove(),b.attr("d",t===Gs||t==Ws?"M"+s*a+","+g+"H0.5V"+_+"H"+s*a:"M"+g+","+s*a+"V0.5H"+_+"V"+s*a),w.attr("opacity",1).attr("transform",function(t){return l(y(t))}),k.attr(f+"2",s*u),S.attr(f,s*d).text(p),m.filter(M).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===Ws?"start":t===Gs?"end":"middle"),m.each(function(){this.__axis=y})}var r=[],i=null,o=null,u=6,a=6,c=3,s=t===$s||t===Gs?-1:1,f=t===Gs||t===Ws?"x":"y",l=t===$s||t===Zs?b:w;return e.scale=function(t){return arguments.length?(n=t,e):n},e.ticks=function(){return r=Vs.call(arguments),e},e.tickArguments=function(t){return arguments.length?(r=null==t?[]:Vs.call(t),e):r.slice()},e.tickValues=function(t){return arguments.length?(i=null==t?null:Vs.call(t),e):i&&i.slice()},e.tickFormat=function(t){return arguments.length?(o=t,e):o},e.tickSize=function(t){return arguments.length?(u=a=+t,e):u},e.tickSizeInner=function(t){return arguments.length?(u=+t,e):u},e.tickSizeOuter=function(t){return arguments.length?(a=+t,e):a},e.tickPadding=function(t){return arguments.length?(c=+t,e):c},e}function N(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r)throw new Error("illegal type: "+t);r[t]=[]}return new k(r)}function k(t){this._=t}function S(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=Js,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}function E(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),tf.hasOwnProperty(n)?{space:tf[n],local:t}:t}function A(t){var n=E(t);return(n.local?function(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}:function(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===Ks&&n.documentElement.namespaceURI===Ks?n.createElement(t):n.createElementNS(e,t)}})(n)}function C(){}function z(t){return null==t?C:function(){return this.querySelector(t)}}function P(){return[]}function R(t){return null==t?P:function(){return this.querySelectorAll(t)}}function L(t){return new Array(t.length)}function q(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function D(t,n,e,r,i,o){for(var u,a=0,c=n.length,s=o.length;a<s;++a)(u=n[a])?(u.__data__=o[a],r[a]=u):e[a]=new q(t,o[a]);for(;a<c;++a)(u=n[a])&&(i[a]=u)}function U(t,n,e,r,i,o,u){var a,c,s,f={},l=n.length,h=o.length,p=new Array(l);for(a=0;a<l;++a)(c=n[a])&&(p[a]=s=uf+u.call(c,c.__data__,a,n),s in f?i[a]=c:f[s]=c);for(a=0;a<h;++a)(c=f[s=uf+u.call(t,o[a],a,o)])?(r[a]=c,c.__data__=o[a],f[s]=null):e[a]=new q(t,o[a]);for(a=0;a<l;++a)(c=n[a])&&f[p[a]]===c&&(i[a]=c)}function O(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function F(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function I(t,n){return t.style.getPropertyValue(n)||F(t).getComputedStyle(t,null).getPropertyValue(n)}function Y(t){return t.trim().split(/^|\s+/)}function B(t){return t.classList||new H(t)}function H(t){this._node=t,this._names=Y(t.getAttribute("class")||"")}function j(t,n){for(var e=B(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function X(t,n){for(var e=B(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function V(){this.textContent=""}function $(){this.innerHTML=""}function W(){this.nextSibling&&this.parentNode.appendChild(this)}function Z(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function G(){return null}function Q(){var t=this.parentNode;t&&t.removeChild(this)}function J(){return this.parentNode.insertBefore(this.cloneNode(!1),this.nextSibling)}function K(){return this.parentNode.insertBefore(this.cloneNode(!0),this.nextSibling)}function tt(t,n,e){return t=nt(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function nt(n,e,r){return function(i){var o=t.event;t.event=i;try{n.call(this,this.__data__,e,r)}finally{t.event=o}}}function et(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function rt(t,n,e){var r=af.hasOwnProperty(t.type)?tt:nt;return function(i,o,u){var a,c=this.__on,s=r(n,o,u);if(c)for(var f=0,l=c.length;f<l;++f)if((a=c[f]).type===t.type&&a.name===t.name)return this.removeEventListener(a.type,a.listener,a.capture),this.addEventListener(a.type,a.listener=s,a.capture=e),void(a.value=n);this.addEventListener(t.type,s,e),a={type:t.type,name:t.name,value:n,listener:s,capture:e},c?c.push(a):this.__on=[a]}}function it(n,e,r,i){var o=t.event;n.sourceEvent=t.event,t.event=n;try{return e.apply(r,i)}finally{t.event=o}}function ot(t,n,e){var r=F(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function ut(t,n){this._groups=t,this._parents=n}function at(){return new ut([[document.documentElement]],cf)}function ct(t){return"string"==typeof t?new ut([[document.querySelector(t)]],[document.documentElement]):new ut([[t]],cf)}function st(){return new ft}function ft(){this._="@"+(++sf).toString(36)}function lt(){for(var n,e=t.event;n=e.sourceEvent;)e=n;return e}function ht(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=n.clientX,r.y=n.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}var i=t.getBoundingClientRect();return[n.clientX-i.left-t.clientLeft,n.clientY-i.top-t.clientTop]}function pt(t){var n=lt();return n.changedTouches&&(n=n.changedTouches[0]),ht(t,n)}function dt(t,n,e){arguments.length<3&&(e=n,n=lt().changedTouches);for(var r,i=0,o=n?n.length:0;i<o;++i)if((r=n[i]).identifier===e)return ht(t,r);return null}function vt(){t.event.stopImmediatePropagation()}function gt(){t.event.preventDefault(),t.event.stopImmediatePropagation()}function _t(t){var n=t.document.documentElement,e=ct(t).on("dragstart.drag",gt,!0);"onselectstart"in n?e.on("selectstart.drag",gt,!0):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}function yt(t,n){var e=t.document.documentElement,r=ct(t).on("dragstart.drag",null);n&&(r.on("click.drag",gt,!0),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in e?r.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}function mt(t){return function(){return t}}function xt(t,n,e,r,i,o,u,a,c,s){this.target=t,this.type=n,this.subject=e,this.identifier=r,this.active=i,this.x=o,this.y=u,this.dx=a,this.dy=c,this._=s}function bt(){return!t.event.button}function wt(){return this.parentNode}function Mt(n){return null==n?{x:t.event.x,y:t.event.y}:n}function Tt(){return"ontouchstart"in this}function Nt(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function kt(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function St(){}function Et(t){var n;return t=(t+"").trim().toLowerCase(),(n=pf.exec(t))?(n=parseInt(n[1],16),new Rt(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1)):(n=df.exec(t))?At(parseInt(n[1],16)):(n=vf.exec(t))?new Rt(n[1],n[2],n[3],1):(n=gf.exec(t))?new Rt(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=_f.exec(t))?Ct(n[1],n[2],n[3],n[4]):(n=yf.exec(t))?Ct(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=mf.exec(t))?Lt(n[1],n[2]/100,n[3]/100,1):(n=xf.exec(t))?Lt(n[1],n[2]/100,n[3]/100,n[4]):bf.hasOwnProperty(t)?At(bf[t]):"transparent"===t?new Rt(NaN,NaN,NaN,0):null}function At(t){return new Rt(t>>16&255,t>>8&255,255&t,1)}function Ct(t,n,e,r){return r<=0&&(t=n=e=NaN),new Rt(t,n,e,r)}function zt(t){return t instanceof St||(t=Et(t)),t?(t=t.rgb(),new Rt(t.r,t.g,t.b,t.opacity)):new Rt}function Pt(t,n,e,r){return 1===arguments.length?zt(t):new Rt(t,n,e,null==r?1:r)}function Rt(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function Lt(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new Dt(t,n,e,r)}function qt(t,n,e,r){return 1===arguments.length?function(t){if(t instanceof Dt)return new Dt(t.h,t.s,t.l,t.opacity);if(t instanceof St||(t=Et(t)),!t)return new Dt;if(t instanceof Dt)return t;var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),u=NaN,a=o-i,c=(o+i)/2;return a?(u=n===o?(e-r)/a+6*(e<r):e===o?(r-n)/a+2:(n-e)/a+4,a/=c<.5?o+i:2-o-i,u*=60):a=c>0&&c<1?0:u,new Dt(u,a,c,t.opacity)}(t):new Dt(t,n,e,null==r?1:r)}function Dt(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function Ut(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}function Ot(t){if(t instanceof It)return new It(t.l,t.a,t.b,t.opacity);if(t instanceof Vt){var n=t.h*wf;return new It(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}t instanceof Rt||(t=zt(t));var e=jt(t.r),r=jt(t.g),i=jt(t.b),o=Yt((.4124564*e+.3575761*r+.1804375*i)/Tf),u=Yt((.2126729*e+.7151522*r+.072175*i)/Nf);return new It(116*u-16,500*(o-u),200*(u-Yt((.0193339*e+.119192*r+.9503041*i)/kf)),t.opacity)}function Ft(t,n,e,r){return 1===arguments.length?Ot(t):new It(t,n,e,null==r?1:r)}function It(t,n,e,r){this.l=+t,this.a=+n,this.b=+e,this.opacity=+r}function Yt(t){return t>Cf?Math.pow(t,1/3):t/Af+Sf}function Bt(t){return t>Ef?t*t*t:Af*(t-Sf)}function Ht(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function jt(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Xt(t,n,e,r){return 1===arguments.length?function(t){if(t instanceof Vt)return new Vt(t.h,t.c,t.l,t.opacity);t instanceof It||(t=Ot(t));var n=Math.atan2(t.b,t.a)*Mf;return new Vt(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}(t):new Vt(t,n,e,null==r?1:r)}function Vt(t,n,e,r){this.h=+t,this.c=+n,this.l=+e,this.opacity=+r}function $t(t,n,e,r){return 1===arguments.length?function(t){if(t instanceof Wt)return new Wt(t.h,t.s,t.l,t.opacity);t instanceof Rt||(t=zt(t));var n=t.r/255,e=t.g/255,r=t.b/255,i=(Df*r+Lf*n-qf*e)/(Df+Lf-qf),o=r-i,u=(Rf*(e-i)-zf*o)/Pf,a=Math.sqrt(u*u+o*o)/(Rf*i*(1-i)),c=a?Math.atan2(u,o)*Mf-120:NaN;return new Wt(c<0?c+360:c,a,i,t.opacity)}(t):new Wt(t,n,e,null==r?1:r)}function Wt(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function Zt(t,n,e,r,i){var o=t*t,u=o*t;return((1-3*t+3*o-u)*n+(4-6*o+3*u)*e+(1+3*t+3*o-3*u)*r+u*i)/6}function Gt(t){var n=t.length-1;return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1],u=r>0?t[r-1]:2*i-o,a=r<n-1?t[r+2]:2*o-i;return Zt((e-r/n)*n,u,i,o,a)}}function Qt(t){var n=t.length;return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n),i=t[(r+n-1)%n],o=t[r%n],u=t[(r+1)%n],a=t[(r+2)%n];return Zt((e-r/n)*n,i,o,u,a)}}function Jt(t){return function(){return t}}function Kt(t,n){return function(e){return t+e*n}}function tn(t,n){var e=n-t;return e?Kt(t,e>180||e<-180?e-360*Math.round(e/360):e):Jt(isNaN(t)?n:t)}function nn(t){return 1==(t=+t)?en:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):Jt(isNaN(n)?e:n)}}function en(t,n){var e=n-t;return e?Kt(t,e):Jt(isNaN(t)?n:t)}function rn(t){return function(n){var e,r,i=n.length,o=new Array(i),u=new Array(i),a=new Array(i);for(e=0;e<i;++e)r=Pt(n[e]),o[e]=r.r||0,u[e]=r.g||0,a[e]=r.b||0;return o=t(o),u=t(u),a=t(a),r.opacity=1,function(t){return r.r=o(t),r.g=u(t),r.b=a(t),r+""}}}function on(t,n){var e,r=n?n.length:0,i=t?Math.min(r,t.length):0,o=new Array(i),u=new Array(r);for(e=0;e<i;++e)o[e]=fn(t[e],n[e]);for(;e<r;++e)u[e]=n[e];return function(t){for(e=0;e<i;++e)u[e]=o[e](t);return u}}function un(t,n){var e=new Date;return t=+t,n-=t,function(r){return e.setTime(t+n*r),e}}function an(t,n){return t=+t,n-=t,function(e){return t+n*e}}function cn(t,n){var e,r={},i={};null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={});for(e in n)e in t?r[e]=fn(t[e],n[e]):i[e]=n[e];return function(t){for(e in r)i[e]=r[e](t);return i}}function sn(t,n){var e,r,i,o=Vf.lastIndex=$f.lastIndex=0,u=-1,a=[],c=[];for(t+="",n+="";(e=Vf.exec(t))&&(r=$f.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),a[u]?a[u]+=i:a[++u]=i),(e=e[0])===(r=r[0])?a[u]?a[u]+=r:a[++u]=r:(a[++u]=null,c.push({i:u,x:an(e,r)})),o=$f.lastIndex;return o<n.length&&(i=n.slice(o),a[u]?a[u]+=i:a[++u]=i),a.length<2?c[0]?function(t){return function(n){return t(n)+""}}(c[0].x):function(t){return function(){return t}}(n):(n=c.length,function(t){for(var e,r=0;r<n;++r)a[(e=c[r]).i]=e.x(t);return a.join("")})}function fn(t,n){var e,r=typeof n;return null==n||"boolean"===r?Jt(n):("number"===r?an:"string"===r?(e=Et(n))?(n=e,Hf):sn:n instanceof Et?Hf:n instanceof Date?un:Array.isArray(n)?on:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?cn:an)(t,n)}function ln(t,n){return t=+t,n-=t,function(e){return Math.round(t+n*e)}}function hn(t,n,e,r,i,o){var u,a,c;return(u=Math.sqrt(t*t+n*n))&&(t/=u,n/=u),(c=t*e+n*r)&&(e-=t*c,r-=n*c),(a=Math.sqrt(e*e+r*r))&&(e/=a,r/=a,c/=a),t*r<n*e&&(t=-t,n=-n,c=-c,u=-u),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*Wf,skewX:Math.atan(c)*Wf,scaleX:u,scaleY:a}}function pn(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}return function(o,u){var a=[],c=[];return o=t(o),u=t(u),function(t,r,i,o,u,a){if(t!==i||r!==o){var c=u.push("translate(",null,n,null,e);a.push({i:c-4,x:an(t,i)},{i:c-2,x:an(r,o)})}else(i||o)&&u.push("translate("+i+n+o+e)}(o.translateX,o.translateY,u.translateX,u.translateY,a,c),function(t,n,e,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:e.push(i(e)+"rotate(",null,r)-2,x:an(t,n)})):n&&e.push(i(e)+"rotate("+n+r)}(o.rotate,u.rotate,a,c),function(t,n,e,o){t!==n?o.push({i:e.push(i(e)+"skewX(",null,r)-2,x:an(t,n)}):n&&e.push(i(e)+"skewX("+n+r)}(o.skewX,u.skewX,a,c),function(t,n,e,r,o,u){if(t!==e||n!==r){var a=o.push(i(o)+"scale(",null,",",null,")");u.push({i:a-4,x:an(t,e)},{i:a-2,x:an(n,r)})}else 1===e&&1===r||o.push(i(o)+"scale("+e+","+r+")")}(o.scaleX,o.scaleY,u.scaleX,u.scaleY,a,c),o=u=null,function(t){for(var n,e=-1,r=c.length;++e<r;)a[(n=c[e]).i]=n.x(t);return a.join("")}}}function dn(t){return((t=Math.exp(t))+1/t)/2}function vn(t,n){var e,r,i=t[0],o=t[1],u=t[2],a=n[0],c=n[1],s=n[2],f=a-i,l=c-o,h=f*f+l*l;if(h<nl)r=Math.log(s/u)/Jf,e=function(t){return[i+t*f,o+t*l,u*Math.exp(Jf*t*r)]};else{var p=Math.sqrt(h),d=(s*s-u*u+tl*h)/(2*u*Kf*p),v=(s*s-u*u-tl*h)/(2*s*Kf*p),g=Math.log(Math.sqrt(d*d+1)-d),_=Math.log(Math.sqrt(v*v+1)-v);r=(_-g)/Jf,e=function(t){var n=t*r,e=dn(g),a=u/(Kf*p)*(e*function(t){return((t=Math.exp(2*t))-1)/(t+1)}(Jf*n+g)-function(t){return((t=Math.exp(t))-1/t)/2}(g));return[i+a*f,o+a*l,u*e/dn(Jf*n+g)]}}return e.duration=1e3*r,e}function gn(t){return function(n,e){var r=t((n=qt(n)).h,(e=qt(e)).h),i=en(n.s,e.s),o=en(n.l,e.l),u=en(n.opacity,e.opacity);return function(t){return n.h=r(t),n.s=i(t),n.l=o(t),n.opacity=u(t),n+""}}}function _n(t){return function(n,e){var r=t((n=Xt(n)).h,(e=Xt(e)).h),i=en(n.c,e.c),o=en(n.l,e.l),u=en(n.opacity,e.opacity);return function(t){return n.h=r(t),n.c=i(t),n.l=o(t),n.opacity=u(t),n+""}}}function yn(t){return function n(e){function r(n,r){var i=t((n=$t(n)).h,(r=$t(r)).h),o=en(n.s,r.s),u=en(n.l,r.l),a=en(n.opacity,r.opacity);return function(t){return n.h=i(t),n.s=o(t),n.l=u(Math.pow(t,e)),n.opacity=a(t),n+""}}return e=+e,r.gamma=n,r}(1)}function mn(){return pl||(gl(xn),pl=vl.now()+dl)}function xn(){pl=0}function bn(){this._call=this._time=this._next=null}function wn(t,n,e){var r=new bn;return r.restart(t,n,e),r}function Mn(){mn(),++cl;for(var t,n=Yf;n;)(t=pl-n._time)>=0&&n._call.call(null,t),n=n._next;--cl}function Tn(){pl=(hl=vl.now())+dl,cl=sl=0;try{Mn()}finally{cl=0,function(){var t,n,e=Yf,r=1/0;for(;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:Yf=n);Bf=t,kn(r)}(),pl=0}}function Nn(){var t=vl.now(),n=t-hl;n>ll&&(dl-=n,hl=t)}function kn(t){if(!cl){sl&&(sl=clearTimeout(sl));t-pl>24?(t<1/0&&(sl=setTimeout(Tn,t-vl.now()-dl)),fl&&(fl=clearInterval(fl))):(fl||(hl=vl.now(),fl=setInterval(Nn,ll)),cl=1,gl(Tn))}}function Sn(t,n,e){var r=new bn;return n=null==n?0:+n,r.restart(function(e){r.stop(),t(e+n)},n,e),r}function En(t,n,e,r,i,o){var u=t.__transition;if(u){if(e in u)return}else t.__transition={};(function(t,n,e){function r(c){var s,f,l,h;if(e.state!==xl)return o();for(s in a)if((h=a[s]).name===e.name){if(h.state===wl)return Sn(r);h.state===Ml?(h.state=Nl,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete a[s]):+s<n&&(h.state=Nl,h.timer.stop(),delete a[s])}if(Sn(function(){e.state===wl&&(e.state=Ml,e.timer.restart(i,e.delay,e.time),i(c))}),e.state=bl,e.on.call("start",t,t.__data__,e.index,e.group),e.state===bl){for(e.state=wl,u=new Array(l=e.tween.length),s=0,f=-1;s<l;++s)(h=e.tween[s].value.call(t,t.__data__,e.index,e.group))&&(u[++f]=h);u.length=f+1}}function i(n){for(var r=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(o),e.state=Tl,1),i=-1,a=u.length;++i<a;)u[i].call(null,r);e.state===Tl&&(e.on.call("end",t,t.__data__,e.index,e.group),o())}function o(){e.state=Nl,e.timer.stop(),delete a[n];for(var r in a)return;delete t.__transition}var u,a=t.__transition;a[n]=e,e.timer=wn(function(t){e.state=xl,e.timer.restart(r,e.delay,e.time),e.delay<=t&&r(t-e.delay)},0,e.time)})(t,e,{name:n,index:r,group:i,on:_l,tween:yl,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:ml})}function An(t,n){var e=zn(t,n);if(e.state>ml)throw new Error("too late; already scheduled");return e}function Cn(t,n){var e=zn(t,n);if(e.state>bl)throw new Error("too late; already started");return e}function zn(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}function Pn(t,n){var e,r,i,o=t.__transition,u=!0;if(o){n=null==n?null:n+"";for(i in o)(e=o[i]).name===n?(r=e.state>bl&&e.state<Tl,e.state=Nl,e.timer.stop(),r&&e.on.call("interrupt",t,t.__data__,e.index,e.group),delete o[i]):u=!1;u&&delete t.__transition}}function Rn(t,n,e){var r=t._id;return t.each(function(){var t=Cn(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)}),function(t){return zn(t,r).value[n]}}function Ln(t,n){var e;return("number"==typeof n?an:n instanceof Et?Hf:(e=Et(n))?(n=e,Hf):sn)(t,n)}function qn(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function Dn(t){return at().transition(t)}function Un(){return++Sl}function On(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}function Fn(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}function In(t){return(1-Math.cos(Pl*t))/2}function Yn(t){return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2}function Bn(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}function Hn(t){return(t=+t)<Ll?Hl*t*t:t<Dl?Hl*(t-=ql)*t+Ul:t<Fl?Hl*(t-=Ol)*t+Il:Hl*(t-=Yl)*t+Bl}function jn(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))return Ql.time=mn(),Ql;return e}function Xn(t){return function(){return t}}function Vn(){t.event.stopImmediatePropagation()}function $n(){t.event.preventDefault(),t.event.stopImmediatePropagation()}function Wn(t){return{type:t}}function Zn(){return!t.event.button}function Gn(){var t=this.ownerSVGElement||this;return[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]}function Qn(t){for(;!t.__brush;)if(!(t=t.parentNode))return;return t.__brush}function Jn(t){return t[0][0]===t[1][0]||t[0][1]===t[1][1]}function Kn(n){function e(t){var e=t.property("__brush",a).selectAll(".overlay").data([Wn("overlay")]);e.enter().append("rect").attr("class","overlay").attr("pointer-events","all").attr("cursor",uh.overlay).merge(e).each(function(){var t=Qn(this).extent;ct(this).attr("x",t[0][0]).attr("y",t[0][1]).attr("width",t[1][0]-t[0][0]).attr("height",t[1][1]-t[0][1])}),t.selectAll(".selection").data([Wn("selection")]).enter().append("rect").attr("class","selection").attr("cursor",uh.selection).attr("fill","#777").attr("fill-opacity",.3).attr("stroke","#fff").attr("shape-rendering","crispEdges");var i=t.selectAll(".handle").data(n.handles,function(t){return t.type});i.exit().remove(),i.enter().append("rect").attr("class",function(t){return"handle handle--"+t.type}).attr("cursor",function(t){return uh[t.type]}),t.each(r).attr("fill","none").attr("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush touchstart.brush",u)}function r(){var t=ct(this),n=Qn(this).selection;n?(t.selectAll(".selection").style("display",null).attr("x",n[0][0]).attr("y",n[0][1]).attr("width",n[1][0]-n[0][0]).attr("height",n[1][1]-n[0][1]),t.selectAll(".handle").style("display",null).attr("x",function(t){return"e"===t.type[t.type.length-1]?n[1][0]-h/2:n[0][0]-h/2}).attr("y",function(t){return"s"===t.type[0]?n[1][1]-h/2:n[0][1]-h/2}).attr("width",function(t){return"n"===t.type||"s"===t.type?n[1][0]-n[0][0]+h:h}).attr("height",function(t){return"e"===t.type||"w"===t.type?n[1][1]-n[0][1]+h:h})):t.selectAll(".selection,.handle").style("display","none").attr("x",null).attr("y",null).attr("width",null).attr("height",null)}function i(t,n){return t.__brush.emitter||new o(t,n)}function o(t,n){this.that=t,this.args=n,this.state=t.__brush,this.active=0}function u(){function e(){var t=pt(w);!L||x||b||(Math.abs(t[0]-D[0])>Math.abs(t[1]-D[1])?b=!0:x=!0),D=t,m=!0,$n(),o()}function o(){var t;switch(_=D[0]-q[0],y=D[1]-q[1],T){case th:case Kl:N&&(_=Math.max(C-a,Math.min(P-p,_)),s=a+_,d=p+_),k&&(y=Math.max(z-l,Math.min(R-v,y)),h=l+y,g=v+y);break;case nh:N<0?(_=Math.max(C-a,Math.min(P-a,_)),s=a+_,d=p):N>0&&(_=Math.max(C-p,Math.min(P-p,_)),s=a,d=p+_),k<0?(y=Math.max(z-l,Math.min(R-l,y)),h=l+y,g=v):k>0&&(y=Math.max(z-v,Math.min(R-v,y)),h=l,g=v+y);break;case eh:N&&(s=Math.max(C,Math.min(P,a-_*N)),d=Math.max(C,Math.min(P,p+_*N))),k&&(h=Math.max(z,Math.min(R,l-y*k)),g=Math.max(z,Math.min(R,v+y*k)))}d<s&&(N*=-1,t=a,a=p,p=t,t=s,s=d,d=t,M in ah&&F.attr("cursor",uh[M=ah[M]])),g<h&&(k*=-1,t=l,l=v,v=t,t=h,h=g,g=t,M in ch&&F.attr("cursor",uh[M=ch[M]])),S.selection&&(A=S.selection),x&&(s=A[0][0],d=A[1][0]),b&&(h=A[0][1],g=A[1][1]),A[0][0]===s&&A[0][1]===h&&A[1][0]===d&&A[1][1]===g||(S.selection=[[s,h],[d,g]],r.call(w),U.brush())}function u(){if(Vn(),t.event.touches){if(t.event.touches.length)return;c&&clearTimeout(c),c=setTimeout(function(){c=null},500),O.on("touchmove.brush touchend.brush touchcancel.brush",null)}else yt(t.event.view,m),I.on("keydown.brush keyup.brush mousemove.brush mouseup.brush",null);O.attr("pointer-events","all"),F.attr("cursor",uh.overlay),S.selection&&(A=S.selection),Jn(A)&&(S.selection=null,r.call(w)),U.end()}if(t.event.touches){if(t.event.changedTouches.length<t.event.touches.length)return $n()}else if(c)return;if(f.apply(this,arguments)){var a,s,l,h,p,d,v,g,_,y,m,x,b,w=this,M=t.event.target.__data__.type,T="selection"===(t.event.metaKey?M="overlay":M)?Kl:t.event.altKey?eh:nh,N=n===ih?null:sh[M],k=n===rh?null:fh[M],S=Qn(w),E=S.extent,A=S.selection,C=E[0][0],z=E[0][1],P=E[1][0],R=E[1][1],L=N&&k&&t.event.shiftKey,q=pt(w),D=q,U=i(w,arguments).beforestart();"overlay"===M?S.selection=A=[[a=n===ih?C:q[0],l=n===rh?z:q[1]],[p=n===ih?P:a,v=n===rh?R:l]]:(a=A[0][0],l=A[0][1],p=A[1][0],v=A[1][1]),s=a,h=l,d=p,g=v;var O=ct(w).attr("pointer-events","none"),F=O.selectAll(".overlay").attr("cursor",uh[M]);if(t.event.touches)O.on("touchmove.brush",e,!0).on("touchend.brush touchcancel.brush",u,!0);else{var I=ct(t.event.view).on("keydown.brush",function(){switch(t.event.keyCode){case 16:L=N&&k;break;case 18:T===nh&&(N&&(p=d-_*N,a=s+_*N),k&&(v=g-y*k,l=h+y*k),T=eh,o());break;case 32:T!==nh&&T!==eh||(N<0?p=d-_:N>0&&(a=s-_),k<0?v=g-y:k>0&&(l=h-y),T=th,F.attr("cursor",uh.selection),o());break;default:return}$n()},!0).on("keyup.brush",function(){switch(t.event.keyCode){case 16:L&&(x=b=L=!1,o());break;case 18:T===eh&&(N<0?p=d:N>0&&(a=s),k<0?v=g:k>0&&(l=h),T=nh,o());break;case 32:T===th&&(t.event.altKey?(N&&(p=d-_*N,a=s+_*N),k&&(v=g-y*k,l=h+y*k),T=eh):(N<0?p=d:N>0&&(a=s),k<0?v=g:k>0&&(l=h),T=nh),F.attr("cursor",uh[M]),o());break;default:return}$n()},!0).on("mousemove.brush",e,!0).on("mouseup.brush",u,!0);_t(t.event.view)}Vn(),Pn(w),r.call(w),U.start()}}function a(){var t=this.__brush||{selection:null};return t.extent=s.apply(this,arguments),t.dim=n,t}var c,s=Gn,f=Zn,l=N(e,"start","brush","end"),h=6;return e.move=function(t,e){t.selection?t.on("start.brush",function(){i(this,arguments).beforestart().start()}).on("interrupt.brush end.brush",function(){i(this,arguments).end()}).tween("brush",function(){function t(t){u.selection=1===t&&Jn(s)?null:f(t),r.call(o),a.brush()}var o=this,u=o.__brush,a=i(o,arguments),c=u.selection,s=n.input("function"==typeof e?e.apply(this,arguments):e,u.extent),f=fn(c,s);return c&&s?t:t(1)}):t.each(function(){var t=arguments,o=this.__brush,u=n.input("function"==typeof e?e.apply(this,t):e,o.extent),a=i(this,t).beforestart();Pn(this),o.selection=null==u||Jn(u)?null:u,r.call(this),a.start().brush().end()})},o.prototype={beforestart:function(){return 1==++this.active&&(this.state.emitter=this,this.starting=!0),this},start:function(){return this.starting&&(this.starting=!1,this.emit("start")),this},brush:function(){return this.emit("brush"),this},end:function(){return 0==--this.active&&(delete this.state.emitter,this.emit("end")),this},emit:function(t){it(new function(t,n,e){this.target=t,this.type=n,this.selection=e}(e,t,n.output(this.state.selection)),l.apply,l,[t,this.that,this.args])}},e.extent=function(t){return arguments.length?(s="function"==typeof t?t:Xn([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),e):s},e.filter=function(t){return arguments.length?(f="function"==typeof t?t:Xn(!!t),e):f},e.handleSize=function(t){return arguments.length?(h=+t,e):h},e.on=function(){var t=l.on.apply(l,arguments);return t===l?e:t},e}function te(t){return function(){return t}}function ne(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function ee(){return new ne}function re(t){return t.source}function ie(t){return t.target}function oe(t){return t.radius}function ue(t){return t.startAngle}function ae(t){return t.endAngle}function ce(){}function se(t,n){var e=new ce;if(t instanceof ce)t.each(function(t,n){e.set(n,t)});else if(Array.isArray(t)){var r,i=-1,o=t.length;if(null==n)for(;++i<o;)e.set(i,t[i]);else for(;++i<o;)e.set(n(r=t[i],i,t),r)}else if(t)for(var u in t)e.set(u,t[u]);return e}function fe(){return{}}function le(t,n,e){t[n]=e}function he(){return se()}function pe(t,n,e){t.set(n,e)}function de(){}function ve(t,n){var e=new de;if(t instanceof de)t.each(function(t){e.add(t)});else if(t){var r=-1,i=t.length;if(null==n)for(;++r<i;)e.add(t[r]);else for(;++r<i;)e.add(n(t[r],r,t))}return e}function ge(t){return new Function("d","return {"+t.map(function(t,n){return JSON.stringify(t)+": d["+n+"]"}).join(",")+"}")}function _e(t){function n(t,n){function e(){if(s)return Mh;if(f)return f=!1,wh;var n,e,r=a;if(t.charCodeAt(r)===Th){for(;a++<u&&t.charCodeAt(a)!==Th||t.charCodeAt(++a)===Th;);return(n=a)>=u?s=!0:(e=t.charCodeAt(a++))===Nh?f=!0:e===kh&&(f=!0,t.charCodeAt(a)===Nh&&++a),t.slice(r+1,n-1).replace(/""/g,'"')}for(;a<u;){if((e=t.charCodeAt(n=a++))===Nh)f=!0;else if(e===kh)f=!0,t.charCodeAt(a)===Nh&&++a;else if(e!==o)continue;return t.slice(r,n)}return s=!0,t.slice(r,u)}var r,i=[],u=t.length,a=0,c=0,s=u<=0,f=!1;for(t.charCodeAt(u-1)===Nh&&--u,t.charCodeAt(u-1)===kh&&--u;(r=e())!==Mh;){for(var l=[];r!==wh&&r!==Mh;)l.push(r),r=e();n&&null==(l=n(l,c++))||i.push(l)}return i}function e(n){return n.map(r).join(t)}function r(t){return null==t?"":i.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}var i=new RegExp('["'+t+"\n\r]"),o=t.charCodeAt(0);return{parse:function(t,e){var r,i,o=n(t,function(t,n){if(r)return r(t,n-1);i=t,r=e?function(t,n){var e=ge(t);return function(r,i){return n(e(r),i,t)}}(t,e):ge(t)});return o.columns=i||[],o},parseRows:n,format:function(n,e){return null==e&&(e=function(t){var n=Object.create(null),e=[];return t.forEach(function(t){for(var r in t)r in n||e.push(n[r]=r)}),e}(n)),[e.map(r).join(t)].concat(n.map(function(n){return e.map(function(t){return r(n[t])}).join(t)})).join("\n")},formatRows:function(t){return t.map(e).join("\n")}}}function ye(t){return function(){return t}}function me(){return 1e-6*(Math.random()-.5)}function xe(t,n,e,r){if(isNaN(n)||isNaN(e))return t;var i,o,u,a,c,s,f,l,h,p=t._root,d={data:r},v=t._x0,g=t._y0,_=t._x1,y=t._y1;if(!p)return t._root=d,t;for(;p.length;)if((s=n>=(o=(v+_)/2))?v=o:_=o,(f=e>=(u=(g+y)/2))?g=u:y=u,i=p,!(p=p[l=f<<1|s]))return i[l]=d,t;if(a=+t._x.call(null,p.data),c=+t._y.call(null,p.data),n===a&&e===c)return d.next=p,i?i[l]=d:t._root=d,t;do{i=i?i[l]=new Array(4):t._root=new Array(4),(s=n>=(o=(v+_)/2))?v=o:_=o,(f=e>=(u=(g+y)/2))?g=u:y=u}while((l=f<<1|s)==(h=(c>=u)<<1|a>=o));return i[h]=p,i[l]=d,t}function be(t,n,e,r,i){this.node=t,this.x0=n,this.y0=e,this.x1=r,this.y1=i}function we(t){return t[0]}function Me(t){return t[1]}function Te(t,n,e){var r=new Ne(null==n?we:n,null==e?Me:e,NaN,NaN,NaN,NaN);return null==t?r:r.addAll(t)}function Ne(t,n,e,r,i,o){this._x=t,this._y=n,this._x0=e,this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function ke(t){for(var n={data:t.data},e=n;t=t.next;)e=e.next={data:t.data};return n}function Se(t){return t.x+t.vx}function Ee(t){return t.y+t.vy}function Ae(t){return t.index}function Ce(t,n){var e=t.get(n);if(!e)throw new Error("missing: "+n);return e}function ze(t){return t.x}function Pe(t){return t.y}function Re(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]}function Le(t){return(t=Re(Math.abs(t)))?t[1]:NaN}function qe(t,n){var e=Re(t,n);if(!e)return t+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}function De(t){return new Ue(t)}function Ue(t){if(!(n=Bh.exec(t)))throw new Error("invalid format: "+t);var n,e=n[1]||" ",r=n[2]||">",i=n[3]||"-",o=n[4]||"",u=!!n[5],a=n[6]&&+n[6],c=!!n[7],s=n[8]&&+n[8].slice(1),f=n[9]||"";"n"===f?(c=!0,f="g"):Yh[f]||(f=""),(u||"0"===e&&"="===r)&&(u=!0,e="0",r="="),this.fill=e,this.align=r,this.sign=i,this.symbol=o,this.zero=u,this.width=a,this.comma=c,this.precision=s,this.type=f}function Oe(t){return t}function Fe(t){function n(t){function n(t){var n,r,u,f=g,x=_;if("c"===v)x=y(t)+x,t="";else{var b=(t=+t)<0;if(t=y(Math.abs(t),d),b&&0==+t&&(b=!1),f=(b?"("===s?s:"-":"-"===s||"("===s?"":s)+f,x=("s"===v?jh[8+Oh/3]:"")+x+(b&&"("===s?")":""),m)for(n=-1,r=t.length;++n<r;)if(48>(u=t.charCodeAt(n))||u>57){x=(46===u?i+t.slice(n+1):t.slice(n))+x,t=t.slice(0,n);break}}p&&!l&&(t=e(t,1/0));var w=f.length+t.length+x.length,M=w<h?new Array(h-w+1).join(a):"";switch(p&&l&&(t=e(M+t,M.length?h-x.length:1/0),M=""),c){case"<":t=f+t+x+M;break;case"=":t=f+M+t+x;break;case"^":t=M.slice(0,w=M.length>>1)+f+t+x+M.slice(w);break;default:t=M+f+t+x}return o(t)}var a=(t=De(t)).fill,c=t.align,s=t.sign,f=t.symbol,l=t.zero,h=t.width,p=t.comma,d=t.precision,v=t.type,g="$"===f?r[0]:"#"===f&&/[boxX]/.test(v)?"0"+v.toLowerCase():"",_="$"===f?r[1]:/[%p]/.test(v)?u:"",y=Yh[v],m=!v||/[defgprs%]/.test(v);return d=null==d?v?6:12:/[gprs]/.test(v)?Math.max(1,Math.min(21,d)):Math.max(0,Math.min(20,d)),n.toString=function(){return t+""},n}var e=t.grouping&&t.thousands?function(t,n){return function(e,r){for(var i=e.length,o=[],u=0,a=t[0],c=0;i>0&&a>0&&(c+a+1>r&&(a=Math.max(1,r-c)),o.push(e.substring(i-=a,i+a)),!((c+=a+1)>r));)a=t[u=(u+1)%t.length];return o.reverse().join(n)}}(t.grouping,t.thousands):Oe,r=t.currency,i=t.decimal,o=t.numerals?function(t){return function(n){return n.replace(/[0-9]/g,function(n){return t[+n]})}}(t.numerals):Oe,u=t.percent||"%";return{format:n,formatPrefix:function(t,e){var r=n((t=De(t),t.type="f",t)),i=3*Math.max(-8,Math.min(8,Math.floor(Le(e)/3))),o=Math.pow(10,-i),u=jh[8+i/3];return function(t){return r(o*t)+u}}}}function Ie(n){return Hh=Fe(n),t.format=Hh.format,t.formatPrefix=Hh.formatPrefix,Hh}function Ye(t){return Math.max(0,-Le(Math.abs(t)))}function Be(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Le(n)/3)))-Le(Math.abs(t)))}function He(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,Le(n)-Le(t))+1}function je(){return new Xe}function Xe(){this.reset()}function Ve(t,n,e){var r=t.s=n+e,i=r-n,o=r-i;t.t=n-o+(e-i)}function $e(t){return t>1?0:t<-1?Np:Math.acos(t)}function We(t){return t>1?kp:t<-1?-kp:Math.asin(t)}function Ze(t){return(t=Fp(t/2))*t}function Ge(){}function Qe(t,n){t&&jp.hasOwnProperty(t.type)&&jp[t.type](t,n)}function Je(t,n,e){var r,i=-1,o=t.length-e;for(n.lineStart();++i<o;)r=t[i],n.point(r[0],r[1],r[2]);n.lineEnd()}function Ke(t,n){var e=-1,r=t.length;for(n.polygonStart();++e<r;)Je(t[e],n,1);n.polygonEnd()}function tr(t,n){t&&Hp.hasOwnProperty(t.type)?Hp[t.type](t,n):Qe(t,n)}function nr(){$p.point=rr}function er(){ir(Xh,Vh)}function rr(t,n){$p.point=ir,Xh=t,Vh=n,$h=t*=Cp,Wh=Lp(n=(n*=Cp)/2+Sp),Zh=Fp(n)}function ir(t,n){n=(n*=Cp)/2+Sp;var e=(t*=Cp)-$h,r=e>=0?1:-1,i=r*e,o=Lp(n),u=Fp(n),a=Zh*u,c=Wh*o+a*Lp(i),s=a*r*Fp(i);Xp.add(Rp(s,c)),$h=t,Wh=o,Zh=u}function or(t){return[Rp(t[1],t[0]),We(t[2])]}function ur(t){var n=t[0],e=t[1],r=Lp(e);return[r*Lp(n),r*Fp(n),Fp(e)]}function ar(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function cr(t,n){return[t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0]]}function sr(t,n){t[0]+=n[0],t[1]+=n[1],t[2]+=n[2]}function fr(t,n){return[t[0]*n,t[1]*n,t[2]*n]}function lr(t){var n=Yp(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=n,t[1]/=n,t[2]/=n}function hr(t,n){ip.push(op=[Gh=t,Jh=t]),n<Qh&&(Qh=n),n>Kh&&(Kh=n)}function pr(t,n){var e=ur([t*Cp,n*Cp]);if(rp){var r=cr(rp,e),i=cr([r[1],-r[0],0],r);lr(i),i=or(i);var o,u=t-tp,a=u>0?1:-1,c=i[0]*Ap*a,s=zp(u)>180;s^(a*tp<c&&c<a*t)?(o=i[1]*Ap)>Kh&&(Kh=o):(c=(c+360)%360-180,s^(a*tp<c&&c<a*t)?(o=-i[1]*Ap)<Qh&&(Qh=o):(n<Qh&&(Qh=n),n>Kh&&(Kh=n))),s?t<tp?mr(Gh,t)>mr(Gh,Jh)&&(Jh=t):mr(t,Jh)>mr(Gh,Jh)&&(Gh=t):Jh>=Gh?(t<Gh&&(Gh=t),t>Jh&&(Jh=t)):t>tp?mr(Gh,t)>mr(Gh,Jh)&&(Jh=t):mr(t,Jh)>mr(Gh,Jh)&&(Gh=t)}else ip.push(op=[Gh=t,Jh=t]);n<Qh&&(Qh=n),n>Kh&&(Kh=n),rp=e,tp=t}function dr(){Zp.point=pr}function vr(){op[0]=Gh,op[1]=Jh,Zp.point=hr,rp=null}function gr(t,n){if(rp){var e=t-tp;Wp.add(zp(e)>180?e+(e>0?360:-360):e)}else np=t,ep=n;$p.point(t,n),pr(t,n)}function _r(){$p.lineStart()}function yr(){gr(np,ep),$p.lineEnd(),zp(Wp)>Mp&&(Gh=-(Jh=180)),op[0]=Gh,op[1]=Jh,rp=null}function mr(t,n){return(n-=t)<0?n+360:n}function xr(t,n){return t[0]-n[0]}function br(t,n){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}function wr(t,n){t*=Cp;var e=Lp(n*=Cp);Mr(e*Lp(t),e*Fp(t),Fp(n))}function Mr(t,n,e){cp+=(t-cp)/++up,sp+=(n-sp)/up,fp+=(e-fp)/up}function Tr(){Gp.point=Nr}function Nr(t,n){t*=Cp;var e=Lp(n*=Cp);mp=e*Lp(t),xp=e*Fp(t),bp=Fp(n),Gp.point=kr,Mr(mp,xp,bp)}function kr(t,n){t*=Cp;var e=Lp(n*=Cp),r=e*Lp(t),i=e*Fp(t),o=Fp(n),u=Rp(Yp((u=xp*o-bp*i)*u+(u=bp*r-mp*o)*u+(u=mp*i-xp*r)*u),mp*r+xp*i+bp*o);ap+=u,lp+=u*(mp+(mp=r)),hp+=u*(xp+(xp=i)),pp+=u*(bp+(bp=o)),Mr(mp,xp,bp)}function Sr(){Gp.point=wr}function Er(){Gp.point=Cr}function Ar(){zr(_p,yp),Gp.point=wr}function Cr(t,n){_p=t,yp=n,t*=Cp,n*=Cp,Gp.point=zr;var e=Lp(n);mp=e*Lp(t),xp=e*Fp(t),bp=Fp(n),Mr(mp,xp,bp)}function zr(t,n){t*=Cp;var e=Lp(n*=Cp),r=e*Lp(t),i=e*Fp(t),o=Fp(n),u=xp*o-bp*i,a=bp*r-mp*o,c=mp*i-xp*r,s=Yp(u*u+a*a+c*c),f=We(s),l=s&&-f/s;dp+=l*u,vp+=l*a,gp+=l*c,ap+=f,lp+=f*(mp+(mp=r)),hp+=f*(xp+(xp=i)),pp+=f*(bp+(bp=o)),Mr(mp,xp,bp)}function Pr(t){return function(){return t}}function Rr(t,n){function e(e,r){return e=t(e,r),n(e[0],e[1])}return t.invert&&n.invert&&(e.invert=function(e,r){return(e=n.invert(e,r))&&t.invert(e[0],e[1])}),e}function Lr(t,n){return[t>Np?t-Ep:t<-Np?t+Ep:t,n]}function qr(t,n,e){return(t%=Ep)?n||e?Rr(Ur(t),Or(n,e)):Ur(t):n||e?Or(n,e):Lr}function Dr(t){return function(n,e){return n+=t,[n>Np?n-Ep:n<-Np?n+Ep:n,e]}}function Ur(t){var n=Dr(t);return n.invert=Dr(-t),n}function Or(t,n){function e(t,n){var e=Lp(n),a=Lp(t)*e,c=Fp(t)*e,s=Fp(n),f=s*r+a*i;return[Rp(c*o-f*u,a*r-s*i),We(f*o+c*u)]}var r=Lp(t),i=Fp(t),o=Lp(n),u=Fp(n);return e.invert=function(t,n){var e=Lp(n),a=Lp(t)*e,c=Fp(t)*e,s=Fp(n),f=s*o-c*u;return[Rp(c*o+s*u,a*r+f*i),We(f*r-a*i)]},e}function Fr(t){function n(n){return n=t(n[0]*Cp,n[1]*Cp),n[0]*=Ap,n[1]*=Ap,n}return t=qr(t[0]*Cp,t[1]*Cp,t.length>2?t[2]*Cp:0),n.invert=function(n){return n=t.invert(n[0]*Cp,n[1]*Cp),n[0]*=Ap,n[1]*=Ap,n},n}function Ir(t,n,e,r,i,o){if(e){var u=Lp(n),a=Fp(n),c=r*e;null==i?(i=n+r*Ep,o=n-c/2):(i=Yr(u,i),o=Yr(u,o),(r>0?i<o:i>o)&&(i+=r*Ep));for(var s,f=i;r>0?f>o:f<o;f-=c)s=or([u,-a*Lp(f),-a*Fp(f)]),t.point(s[0],s[1])}}function Yr(t,n){(n=ur(n))[0]-=t,lr(n);var e=$e(-n[1]);return((-n[2]<0?-e:e)+Ep-Mp)%Ep}function Br(){var t,n=[];return{point:function(n,e){t.push([n,e])},lineStart:function(){n.push(t=[])},lineEnd:Ge,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var e=n;return n=[],t=null,e}}}function Hr(t,n){return zp(t[0]-n[0])<Mp&&zp(t[1]-n[1])<Mp}function jr(t,n,e,r){this.x=t,this.z=n,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Xr(t,n,e,r,i){var o,u,a=[],c=[];if(t.forEach(function(t){if(!((n=t.length-1)<=0)){var n,e,r=t[0],u=t[n];if(Hr(r,u)){for(i.lineStart(),o=0;o<n;++o)i.point((r=t[o])[0],r[1]);i.lineEnd()}else a.push(e=new jr(r,t,null,!0)),c.push(e.o=new jr(r,null,e,!1)),a.push(e=new jr(u,t,null,!1)),c.push(e.o=new jr(u,null,e,!0))}}),a.length){for(c.sort(n),Vr(a),Vr(c),o=0,u=c.length;o<u;++o)c[o].e=e=!e;for(var s,f,l=a[0];;){for(var h=l,p=!0;h.v;)if((h=h.n)===l)return;s=h.z,i.lineStart();do{if(h.v=h.o.v=!0,h.e){if(p)for(o=0,u=s.length;o<u;++o)i.point((f=s[o])[0],f[1]);else r(h.x,h.n.x,1,i);h=h.n}else{if(p)for(s=h.p.z,o=s.length-1;o>=0;--o)i.point((f=s[o])[0],f[1]);else r(h.x,h.p.x,-1,i);h=h.p}s=(h=h.o).z,p=!p}while(!h.v);i.lineEnd()}}}function Vr(t){if(n=t.length){for(var n,e,r=0,i=t[0];++r<n;)i.n=e=t[r],e.p=i,i=e;i.n=e=t[0],e.p=i}}function $r(t,n){var e=n[0],r=n[1],i=[Fp(e),-Lp(e),0],o=0,u=0;cd.reset();for(var a=0,c=t.length;a<c;++a)if(f=(s=t[a]).length)for(var s,f,l=s[f-1],h=l[0],p=l[1]/2+Sp,d=Fp(p),v=Lp(p),g=0;g<f;++g,h=y,d=x,v=b,l=_){var _=s[g],y=_[0],m=_[1]/2+Sp,x=Fp(m),b=Lp(m),w=y-h,M=w>=0?1:-1,T=M*w,N=T>Np,k=d*x;if(cd.add(Rp(k*M*Fp(T),v*b+k*Lp(T))),o+=N?w+M*Ep:w,N^h>=e^y>=e){var S=cr(ur(l),ur(_));lr(S);var E=cr(i,S);lr(E);var A=(N^w>=0?-1:1)*We(E[2]);(r>A||r===A&&(S[0]||S[1]))&&(u+=N^w>=0?1:-1)}}return(o<-Mp||o<Mp&&cd<-Mp)^1&u}function Wr(t,n,e,r){return function(i){function o(n,e){t(n,e)&&i.point(n,e)}function u(t,n){v.point(t,n)}function a(){x.point=u,v.lineStart()}function c(){x.point=o,v.lineEnd()}function s(t,n){d.push([t,n]),y.point(t,n)}function f(){y.lineStart(),d=[]}function l(){s(d[0][0],d[0][1]),y.lineEnd();var t,n,e,r,o=y.clean(),u=_.result(),a=u.length;if(d.pop(),h.push(d),d=null,a)if(1&o){if(e=u[0],(n=e.length-1)>0){for(m||(i.polygonStart(),m=!0),i.lineStart(),t=0;t<n;++t)i.point((r=e[t])[0],r[1]);i.lineEnd()}}else a>1&&2&o&&u.push(u.pop().concat(u.shift())),p.push(u.filter(Zr))}var h,p,d,v=n(i),_=Br(),y=n(_),m=!1,x={point:o,lineStart:a,lineEnd:c,polygonStart:function(){x.point=s,x.lineStart=f,x.lineEnd=l,p=[],h=[]},polygonEnd:function(){x.point=o,x.lineStart=a,x.lineEnd=c,p=g(p);var t=$r(h,r);p.length?(m||(i.polygonStart(),m=!0),Xr(p,Gr,t,e,i)):t&&(m||(i.polygonStart(),m=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),m&&(i.polygonEnd(),m=!1),p=h=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}};return x}}function Zr(t){return t.length>1}function Gr(t,n){return((t=t.x)[0]<0?t[1]-kp-Mp:kp-t[1])-((n=n.x)[0]<0?n[1]-kp-Mp:kp-n[1])}function Qr(t){function n(t,n){return Lp(t)*Lp(n)>i}function e(t,n,e){var r=[1,0,0],o=cr(ur(t),ur(n)),u=ar(o,o),a=o[0],c=u-a*a;if(!c)return!e&&t;var s=i*u/c,f=-i*a/c,l=cr(r,o),h=fr(r,s);sr(h,fr(o,f));var p=l,d=ar(h,p),v=ar(p,p),g=d*d-v*(ar(h,h)-1);if(!(g<0)){var _=Yp(g),y=fr(p,(-d-_)/v);if(sr(y,h),y=or(y),!e)return y;var m,x=t[0],b=n[0],w=t[1],M=n[1];b<x&&(m=x,x=b,b=m);var T=b-x,N=zp(T-Np)<Mp;if(!N&&M<w&&(m=w,w=M,M=m),N||T<Mp?N?w+M>0^y[1]<(zp(y[0]-x)<Mp?w:M):w<=y[1]&&y[1]<=M:T>Np^(x<=y[0]&&y[0]<=b)){var k=fr(p,(-d+_)/v);return sr(k,h),[y,or(k)]}}}function r(n,e){var r=u?t:Np-t,i=0;return n<-r?i|=1:n>r&&(i|=2),e<-r?i|=4:e>r&&(i|=8),i}var i=Lp(t),o=6*Cp,u=i>0,a=zp(i)>Mp;return Wr(n,function(t){var i,o,c,s,f;return{lineStart:function(){s=c=!1,f=1},point:function(l,h){var p,d=[l,h],v=n(l,h),g=u?v?0:r(l,h):v?r(l+(l<0?Np:-Np),h):0;if(!i&&(s=c=v)&&t.lineStart(),v!==c&&(!(p=e(i,d))||Hr(i,p)||Hr(d,p))&&(d[0]+=Mp,d[1]+=Mp,v=n(d[0],d[1])),v!==c)f=0,v?(t.lineStart(),p=e(d,i),t.point(p[0],p[1])):(p=e(i,d),t.point(p[0],p[1]),t.lineEnd()),i=p;else if(a&&i&&u^v){var _;g&o||!(_=e(d,i,!0))||(f=0,u?(t.lineStart(),t.point(_[0][0],_[0][1]),t.point(_[1][0],_[1][1]),t.lineEnd()):(t.point(_[1][0],_[1][1]),t.lineEnd(),t.lineStart(),t.point(_[0][0],_[0][1])))}!v||i&&Hr(i,d)||t.point(d[0],d[1]),i=d,c=v,o=g},lineEnd:function(){c&&t.lineEnd(),i=null},clean:function(){return f|(s&&c)<<1}}},function(n,e,r,i){Ir(i,t,o,r,n,e)},u?[0,-t]:[-Np,t-Np])}function Jr(t,n,e,r){function i(i,o){return t<=i&&i<=e&&n<=o&&o<=r}function o(i,o,a,s){var f=0,l=0;if(null==i||(f=u(i,a))!==(l=u(o,a))||c(i,o)<0^a>0)do{s.point(0===f||3===f?t:e,f>1?r:n)}while((f=(f+a+4)%4)!==l);else s.point(o[0],o[1])}function u(r,i){return zp(r[0]-t)<Mp?i>0?0:3:zp(r[0]-e)<Mp?i>0?2:1:zp(r[1]-n)<Mp?i>0?1:0:i>0?3:2}function a(t,n){return c(t.x,n.x)}function c(t,n){var e=u(t,1),r=u(n,1);return e!==r?e-r:0===e?n[1]-t[1]:1===e?t[0]-n[0]:2===e?t[1]-n[1]:n[0]-t[0]}return function(u){function c(t,n){i(t,n)&&w.point(t,n)}function s(o,u){var a=i(o,u);if(l&&h.push([o,u]),x)p=o,d=u,v=a,x=!1,a&&(w.lineStart(),w.point(o,u));else if(a&&m)w.point(o,u);else{var c=[_=Math.max(ld,Math.min(fd,_)),y=Math.max(ld,Math.min(fd,y))],s=[o=Math.max(ld,Math.min(fd,o)),u=Math.max(ld,Math.min(fd,u))];!function(t,n,e,r,i,o){var u,a=t[0],c=t[1],s=0,f=1,l=n[0]-a,h=n[1]-c;if(u=e-a,l||!(u>0)){if(u/=l,l<0){if(u<s)return;u<f&&(f=u)}else if(l>0){if(u>f)return;u>s&&(s=u)}if(u=i-a,l||!(u<0)){if(u/=l,l<0){if(u>f)return;u>s&&(s=u)}else if(l>0){if(u<s)return;u<f&&(f=u)}if(u=r-c,h||!(u>0)){if(u/=h,h<0){if(u<s)return;u<f&&(f=u)}else if(h>0){if(u>f)return;u>s&&(s=u)}if(u=o-c,h||!(u<0)){if(u/=h,h<0){if(u>f)return;u>s&&(s=u)}else if(h>0){if(u<s)return;u<f&&(f=u)}return s>0&&(t[0]=a+s*l,t[1]=c+s*h),f<1&&(n[0]=a+f*l,n[1]=c+f*h),!0}}}}}(c,s,t,n,e,r)?a&&(w.lineStart(),w.point(o,u),b=!1):(m||(w.lineStart(),w.point(c[0],c[1])),w.point(s[0],s[1]),a||w.lineEnd(),b=!1)}_=o,y=u,m=a}var f,l,h,p,d,v,_,y,m,x,b,w=u,M=Br(),T={point:c,lineStart:function(){T.point=s,l&&l.push(h=[]),x=!0,m=!1,_=y=NaN},lineEnd:function(){f&&(s(p,d),v&&m&&M.rejoin(),f.push(M.result())),T.point=c,m&&w.lineEnd()},polygonStart:function(){w=M,f=[],l=[],b=!0},polygonEnd:function(){var n=function(){for(var n=0,e=0,i=l.length;e<i;++e)for(var o,u,a=l[e],c=1,s=a.length,f=a[0],h=f[0],p=f[1];c<s;++c)o=h,u=p,h=(f=a[c])[0],p=f[1],u<=r?p>r&&(h-o)*(r-u)>(p-u)*(t-o)&&++n:p<=r&&(h-o)*(r-u)<(p-u)*(t-o)&&--n;return n}(),e=b&&n,i=(f=g(f)).length;(e||i)&&(u.polygonStart(),e&&(u.lineStart(),o(null,null,1,u),u.lineEnd()),i&&Xr(f,a,n,o,u),u.polygonEnd()),w=u,f=l=h=null}};return T}}function Kr(){pd.point=pd.lineEnd=Ge}function ti(t,n){Qp=t*=Cp,Jp=Fp(n*=Cp),Kp=Lp(n),pd.point=ni}function ni(t,n){t*=Cp;var e=Fp(n*=Cp),r=Lp(n),i=zp(t-Qp),o=Lp(i),u=r*Fp(i),a=Kp*e-Jp*r*o,c=Jp*e+Kp*r*o;hd.add(Rp(Yp(u*u+a*a),c)),Qp=t,Jp=e,Kp=r}function ei(t){return hd.reset(),tr(t,pd),+hd}function ri(t,n){return dd[0]=t,dd[1]=n,ei(vd)}function ii(t,n){return!(!t||!_d.hasOwnProperty(t.type))&&_d[t.type](t,n)}function oi(t,n){return 0===ri(t,n)}function ui(t,n){var e=ri(t[0],t[1]);return ri(t[0],n)+ri(n,t[1])<=e+Mp}function ai(t,n){return!!$r(t.map(ci),si(n))}function ci(t){return(t=t.map(si)).pop(),t}function si(t){return[t[0]*Cp,t[1]*Cp]}function fi(t,n,e){var r=f(t,n-Mp,e).concat(n);return function(t){return r.map(function(n){return[t,n]})}}function li(t,n,e){var r=f(t,n-Mp,e).concat(n);return function(t){return r.map(function(n){return[n,t]})}}function hi(){function t(){return{type:"MultiLineString",coordinates:n()}}function n(){return f(qp(o/_)*_,i,_).map(p).concat(f(qp(s/y)*y,c,y).map(d)).concat(f(qp(r/v)*v,e,v).filter(function(t){return zp(t%_)>Mp}).map(l)).concat(f(qp(a/g)*g,u,g).filter(function(t){return zp(t%y)>Mp}).map(h))}var e,r,i,o,u,a,c,s,l,h,p,d,v=10,g=v,_=90,y=360,m=2.5;return t.lines=function(){return n().map(function(t){return{type:"LineString",coordinates:t}})},t.outline=function(){return{type:"Polygon",coordinates:[p(o).concat(d(c).slice(1),p(i).reverse().slice(1),d(s).reverse().slice(1))]}},t.extent=function(n){return arguments.length?t.extentMajor(n).extentMinor(n):t.extentMinor()},t.extentMajor=function(n){return arguments.length?(o=+n[0][0],i=+n[1][0],s=+n[0][1],c=+n[1][1],o>i&&(n=o,o=i,i=n),s>c&&(n=s,s=c,c=n),t.precision(m)):[[o,s],[i,c]]},t.extentMinor=function(n){return arguments.length?(r=+n[0][0],e=+n[1][0],a=+n[0][1],u=+n[1][1],r>e&&(n=r,r=e,e=n),a>u&&(n=a,a=u,u=n),t.precision(m)):[[r,a],[e,u]]},t.step=function(n){return arguments.length?t.stepMajor(n).stepMinor(n):t.stepMinor()},t.stepMajor=function(n){return arguments.length?(_=+n[0],y=+n[1],t):[_,y]},t.stepMinor=function(n){return arguments.length?(v=+n[0],g=+n[1],t):[v,g]},t.precision=function(n){return arguments.length?(m=+n,l=fi(a,u,90),h=li(r,e,m),p=fi(s,c,90),d=li(o,i,m),t):m},t.extentMajor([[-180,-90+Mp],[180,90-Mp]]).extentMinor([[-180,-80-Mp],[180,80+Mp]])}function pi(t){return t}function di(){xd.point=vi}function vi(t,n){xd.point=gi,td=ed=t,nd=rd=n}function gi(t,n){md.add(rd*t-ed*n),ed=t,rd=n}function _i(){gi(td,nd)}function yi(t,n){kd+=t,Sd+=n,++Ed}function mi(){qd.point=xi}function xi(t,n){qd.point=bi,yi(ud=t,ad=n)}function bi(t,n){var e=t-ud,r=n-ad,i=Yp(e*e+r*r);Ad+=i*(ud+t)/2,Cd+=i*(ad+n)/2,zd+=i,yi(ud=t,ad=n)}function wi(){qd.point=yi}function Mi(){qd.point=Ni}function Ti(){ki(id,od)}function Ni(t,n){qd.point=ki,yi(id=ud=t,od=ad=n)}function ki(t,n){var e=t-ud,r=n-ad,i=Yp(e*e+r*r);Ad+=i*(ud+t)/2,Cd+=i*(ad+n)/2,zd+=i,Pd+=(i=ad*t-ud*n)*(ud+t),Rd+=i*(ad+n),Ld+=3*i,yi(ud=t,ad=n)}function Si(t){this._context=t}function Ei(t,n){Bd.point=Ai,Ud=Fd=t,Od=Id=n}function Ai(t,n){Fd-=t,Id-=n,Yd.add(Yp(Fd*Fd+Id*Id)),Fd=t,Id=n}function Ci(){this._string=[]}function zi(t){return"m0,"+t+"a"+t+","+t+" 0 1,1 0,"+-2*t+"a"+t+","+t+" 0 1,1 0,"+2*t+"z"}function Pi(t){return function(n){var e=new Ri;for(var r in t)e[r]=t[r];return e.stream=n,e}}function Ri(){}function Li(t,n,e){var r=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),null!=r&&t.clipExtent(null),tr(e,t.stream(Nd)),n(Nd.result()),null!=r&&t.clipExtent(r),t}function qi(t,n,e){return Li(t,function(e){var r=n[1][0]-n[0][0],i=n[1][1]-n[0][1],o=Math.min(r/(e[1][0]-e[0][0]),i/(e[1][1]-e[0][1])),u=+n[0][0]+(r-o*(e[1][0]+e[0][0]))/2,a=+n[0][1]+(i-o*(e[1][1]+e[0][1]))/2;t.scale(150*o).translate([u,a])},e)}function Di(t,n,e){return qi(t,[[0,0],n],e)}function Ui(t,n,e){return Li(t,function(e){var r=+n,i=r/(e[1][0]-e[0][0]),o=(r-i*(e[1][0]+e[0][0]))/2,u=-i*e[0][1];t.scale(150*i).translate([o,u])},e)}function Oi(t,n,e){return Li(t,function(e){var r=+n,i=r/(e[1][1]-e[0][1]),o=-i*e[0][0],u=(r-i*(e[1][1]+e[0][1]))/2;t.scale(150*i).translate([o,u])},e)}function Fi(t,n){return+n?function(t,n){function e(r,i,o,u,a,c,s,f,l,h,p,d,v,g){var _=s-r,y=f-i,m=_*_+y*y;if(m>4*n&&v--){var x=u+h,b=a+p,w=c+d,M=Yp(x*x+b*b+w*w),T=We(w/=M),N=zp(zp(w)-1)<Mp||zp(o-l)<Mp?(o+l)/2:Rp(b,x),k=t(N,T),S=k[0],E=k[1],A=S-r,C=E-i,z=y*A-_*C;(z*z/m>n||zp((_*A+y*C)/m-.5)>.3||u*h+a*p+c*d<jd)&&(e(r,i,o,u,a,c,S,E,N,x/=M,b/=M,w,v,g),g.point(S,E),e(S,E,N,x,b,w,s,f,l,h,p,d,v,g))}}return function(n){function r(e,r){e=t(e,r),n.point(e[0],e[1])}function i(){_=NaN,w.point=o,n.lineStart()}function o(r,i){var o=ur([r,i]),u=t(r,i);e(_,y,g,m,x,b,_=u[0],y=u[1],g=r,m=o[0],x=o[1],b=o[2],Hd,n),n.point(_,y)}function u(){w.point=r,n.lineEnd()}function a(){i(),w.point=c,w.lineEnd=s}function c(t,n){o(f=t,n),l=_,h=y,p=m,d=x,v=b,w.point=o}function s(){e(_,y,g,m,x,b,l,h,f,p,d,v,Hd,n),w.lineEnd=u,u()}var f,l,h,p,d,v,g,_,y,m,x,b,w={point:r,lineStart:i,lineEnd:u,polygonStart:function(){n.polygonStart(),w.lineStart=a},polygonEnd:function(){n.polygonEnd(),w.lineStart=i}};return w}}(t,n):function(t){return Pi({point:function(n,e){n=t(n,e),this.stream.point(n[0],n[1])}})}(t)}function Ii(t){return Yi(function(){return t})()}function Yi(t){function n(t){return t=s(t[0]*Cp,t[1]*Cp),[t[0]*v+u,a-t[1]*v]}function e(t,n){return t=o(t,n),[t[0]*v+u,a-t[1]*v]}function r(){s=Rr(c=qr(x,b,w),o);var t=o(y,m);return u=g-t[0]*v,a=_+t[1]*v,i()}function i(){return p=d=null,n}var o,u,a,c,s,f,l,h,p,d,v=150,g=480,_=250,y=0,m=0,x=0,b=0,w=0,M=null,T=sd,N=null,k=pi,S=.5,E=Fi(e,S);return n.stream=function(t){return p&&d===t?p:p=Xd(function(t){return Pi({point:function(n,e){var r=t(n,e);return this.stream.point(r[0],r[1])}})}(c)(T(E(k(d=t)))))},n.preclip=function(t){return arguments.length?(T=t,M=void 0,i()):T},n.postclip=function(t){return arguments.length?(k=t,N=f=l=h=null,i()):k},n.clipAngle=function(t){return arguments.length?(T=+t?Qr(M=t*Cp):(M=null,sd),i()):M*Ap},n.clipExtent=function(t){return arguments.length?(k=null==t?(N=f=l=h=null,pi):Jr(N=+t[0][0],f=+t[0][1],l=+t[1][0],h=+t[1][1]),i()):null==N?null:[[N,f],[l,h]]},n.scale=function(t){return arguments.length?(v=+t,r()):v},n.translate=function(t){return arguments.length?(g=+t[0],_=+t[1],r()):[g,_]},n.center=function(t){return arguments.length?(y=t[0]%360*Cp,m=t[1]%360*Cp,r()):[y*Ap,m*Ap]},n.rotate=function(t){return arguments.length?(x=t[0]%360*Cp,b=t[1]%360*Cp,w=t.length>2?t[2]%360*Cp:0,r()):[x*Ap,b*Ap,w*Ap]},n.precision=function(t){return arguments.length?(E=Fi(e,S=t*t),i()):Yp(S)},n.fitExtent=function(t,e){return qi(n,t,e)},n.fitSize=function(t,e){return Di(n,t,e)},n.fitWidth=function(t,e){return Ui(n,t,e)},n.fitHeight=function(t,e){return Oi(n,t,e)},function(){return o=t.apply(this,arguments),n.invert=o.invert&&function(t){return(t=s.invert((t[0]-u)/v,(a-t[1])/v))&&[t[0]*Ap,t[1]*Ap]},r()}}function Bi(t){var n=0,e=Np/3,r=Yi(t),i=r(n,e);return i.parallels=function(t){return arguments.length?r(n=t[0]*Cp,e=t[1]*Cp):[n*Ap,e*Ap]},i}function Hi(t,n){function e(t,n){var e=Yp(o-2*i*Fp(n))/i;return[e*Fp(t*=i),u-e*Lp(t)]}var r=Fp(t),i=(r+Fp(n))/2;if(zp(i)<Mp)return function(t){function n(t,n){return[t*e,Fp(n)/e]}var e=Lp(t);return n.invert=function(t,n){return[t/e,We(n*e)]},n}(t);var o=1+r*(2*i-r),u=Yp(o)/i;return e.invert=function(t,n){var e=u-n;return[Rp(t,zp(e))/i*Ip(e),We((o-(t*t+e*e)*i*i)/(2*i))]},e}function ji(){return Bi(Hi).scale(155.424).center([0,33.6442])}function Xi(){return ji().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}function Vi(t){return function(n,e){var r=Lp(n),i=Lp(e),o=t(r*i);return[o*i*Fp(n),o*Fp(e)]}}function $i(t){return function(n,e){var r=Yp(n*n+e*e),i=t(r),o=Fp(i),u=Lp(i);return[Rp(n*o,r*u),We(r&&e*o/r)]}}function Wi(t,n){return[t,Up(Bp((kp+n)/2))]}function Zi(t){function n(){var n=Np*a(),u=o(Fr(o.rotate()).invert([0,0]));return s(null==f?[[u[0]-n,u[1]-n],[u[0]+n,u[1]+n]]:t===Wi?[[Math.max(u[0]-n,f),e],[Math.min(u[0]+n,r),i]]:[[f,Math.max(u[1]-n,e)],[r,Math.min(u[1]+n,i)]])}var e,r,i,o=Ii(t),u=o.center,a=o.scale,c=o.translate,s=o.clipExtent,f=null;return o.scale=function(t){return arguments.length?(a(t),n()):a()},o.translate=function(t){return arguments.length?(c(t),n()):c()},o.center=function(t){return arguments.length?(u(t),n()):u()},o.clipExtent=function(t){return arguments.length?(null==t?f=e=r=i=null:(f=+t[0][0],e=+t[0][1],r=+t[1][0],i=+t[1][1]),n()):null==f?null:[[f,e],[r,i]]},n()}function Gi(t){return Bp((kp+t)/2)}function Qi(t,n){function e(t,n){o>0?n<-kp+Mp&&(n=-kp+Mp):n>kp-Mp&&(n=kp-Mp);var e=o/Op(Gi(n),i);return[e*Fp(i*t),o-e*Lp(i*t)]}var r=Lp(t),i=t===n?Fp(t):Up(r/Lp(n))/Up(Gi(n)/Gi(t)),o=r*Op(Gi(t),i)/i;return i?(e.invert=function(t,n){var e=o-n,r=Ip(i)*Yp(t*t+e*e);return[Rp(t,zp(e))/i*Ip(e),2*Pp(Op(o/r,1/i))-kp]},e):Wi}function Ji(t,n){return[t,n]}function Ki(t,n){function e(t,n){var e=o-n,r=i*t;return[e*Fp(r),o-e*Lp(r)]}var r=Lp(t),i=t===n?Fp(t):(r-Lp(n))/(n-t),o=r/i+t;return zp(i)<Mp?Ji:(e.invert=function(t,n){var e=o-n;return[Rp(t,zp(e))/i*Ip(e),o-Ip(i)*Yp(t*t+e*e)]},e)}function to(t,n){var e=Lp(n),r=Lp(t)*e;return[e*Fp(t)/r,Fp(n)/r]}function no(t,n,e,r){return 1===t&&1===n&&0===e&&0===r?pi:Pi({point:function(i,o){this.stream.point(i*t+e,o*n+r)}})}function eo(t,n){var e=n*n,r=e*e;return[t*(.8707-.131979*e+r*(r*(.003971*e-.001529*r)-.013791)),n*(1.007226+e*(.015085+r*(.028874*e-.044475-.005916*r)))]}function ro(t,n){return[Lp(n)*Fp(t),Fp(n)]}function io(t,n){var e=Lp(n),r=1+Lp(t)*e;return[e*Fp(t)/r,Fp(n)/r]}function oo(t,n){return[Up(Bp((kp+n)/2)),-t]}function uo(t,n){return t.parent===n.parent?1:2}function ao(t,n){return t+n.x}function co(t,n){return Math.max(t,n.y)}function so(t){var n=0,e=t.children,r=e&&e.length;if(r)for(;--r>=0;)n+=e[r].value;else n=1;t.value=n}function fo(t,n){var e,r,i,o,u,a=new vo(t),c=+t.value&&(a.value=t.value),s=[a];for(null==n&&(n=lo);e=s.pop();)if(c&&(e.value=+e.data.value),(i=n(e.data))&&(u=i.length))for(e.children=new Array(u),o=u-1;o>=0;--o)s.push(r=e.children[o]=new vo(i[o])),r.parent=e,r.depth=e.depth+1;return a.eachBefore(po)}function lo(t){return t.children}function ho(t){t.data=t.data.data}function po(t){var n=0;do{t.height=n}while((t=t.parent)&&t.height<++n)}function vo(t){this.data=t,this.depth=this.height=0,this.parent=null}function go(t){for(var n,e,r=0,i=(t=function(t){for(var n,e,r=t.length;r;)e=Math.random()*r--|0,n=t[r],t[r]=t[e],t[e]=n;return t}(Wd.call(t))).length,o=[];r<i;)n=t[r],e&&yo(e,n)?++r:(e=function(t){switch(t.length){case 1:return function(t){return{x:t.x,y:t.y,r:t.r}}(t[0]);case 2:return xo(t[0],t[1]);case 3:return bo(t[0],t[1],t[2])}}(o=function(t,n){var e,r;if(mo(n,t))return[n];for(e=0;e<t.length;++e)if(_o(n,t[e])&&mo(xo(t[e],n),t))return[t[e],n];for(e=0;e<t.length-1;++e)for(r=e+1;r<t.length;++r)if(_o(xo(t[e],t[r]),n)&&_o(xo(t[e],n),t[r])&&_o(xo(t[r],n),t[e])&&mo(bo(t[e],t[r],n),t))return[t[e],t[r],n];throw new Error}(o,n)),r=0);return e}function _o(t,n){var e=t.r-n.r,r=n.x-t.x,i=n.y-t.y;return e<0||e*e<r*r+i*i}function yo(t,n){var e=t.r-n.r+1e-6,r=n.x-t.x,i=n.y-t.y;return e>0&&e*e>r*r+i*i}function mo(t,n){for(var e=0;e<n.length;++e)if(!yo(t,n[e]))return!1;return!0}function xo(t,n){var e=t.x,r=t.y,i=t.r,o=n.x,u=n.y,a=n.r,c=o-e,s=u-r,f=a-i,l=Math.sqrt(c*c+s*s);return{x:(e+o+c/l*f)/2,y:(r+u+s/l*f)/2,r:(l+i+a)/2}}function bo(t,n,e){var r=t.x,i=t.y,o=t.r,u=n.x,a=n.y,c=n.r,s=e.x,f=e.y,l=e.r,h=r-u,p=r-s,d=i-a,v=i-f,g=c-o,_=l-o,y=r*r+i*i-o*o,m=y-u*u-a*a+c*c,x=y-s*s-f*f+l*l,b=p*d-h*v,w=(d*x-v*m)/(2*b)-r,M=(v*g-d*_)/b,T=(p*m-h*x)/(2*b)-i,N=(h*_-p*g)/b,k=M*M+N*N-1,S=2*(o+w*M+T*N),E=w*w+T*T-o*o,A=-(k?(S+Math.sqrt(S*S-4*k*E))/(2*k):E/S);return{x:r+w+M*A,y:i+T+N*A,r:A}}function wo(t,n,e){var r=t.x,i=t.y,o=n.r+e.r,u=t.r+e.r,a=n.x-r,c=n.y-i,s=a*a+c*c;if(s){var f=.5+((u*=u)-(o*=o))/(2*s),l=Math.sqrt(Math.max(0,2*o*(u+s)-(u-=s)*u-o*o))/(2*s);e.x=r+f*a+l*c,e.y=i+f*c-l*a}else e.x=r+u,e.y=i}function Mo(t,n){var e=n.x-t.x,r=n.y-t.y,i=t.r+n.r;return i*i-1e-6>e*e+r*r}function To(t){var n=t._,e=t.next._,r=n.r+e.r,i=(n.x*e.r+e.x*n.r)/r,o=(n.y*e.r+e.y*n.r)/r;return i*i+o*o}function No(t){this._=t,this.next=null,this.previous=null}function ko(t){if(!(i=t.length))return 0;var n,e,r,i,o,u,a,c,s,f,l;if(n=t[0],n.x=0,n.y=0,!(i>1))return n.r;if(e=t[1],n.x=-e.r,e.x=n.r,e.y=0,!(i>2))return n.r+e.r;wo(e,n,r=t[2]),n=new No(n),e=new No(e),r=new No(r),n.next=r.previous=e,e.next=n.previous=r,r.next=e.previous=n;t:for(a=3;a<i;++a){wo(n._,e._,r=t[a]),r=new No(r),c=e.next,s=n.previous,f=e._.r,l=n._.r;do{if(f<=l){if(Mo(c._,r._)){e=c,n.next=e,e.previous=n,--a;continue t}f+=c._.r,c=c.next}else{if(Mo(s._,r._)){(n=s).next=e,e.previous=n,--a;continue t}l+=s._.r,s=s.previous}}while(c!==s.next);for(r.previous=n,r.next=e,n.next=e.previous=e=r,o=To(n);(r=r.next)!==e;)(u=To(r))<o&&(n=r,o=u);e=n.next}for(n=[e._],r=e;(r=r.next)!==e;)n.push(r._);for(r=go(n),a=0;a<i;++a)n=t[a],n.x-=r.x,n.y-=r.y;return r.r}function So(t){if("function"!=typeof t)throw new Error;return t}function Eo(){return 0}function Ao(t){return function(){return t}}function Co(t){return Math.sqrt(t.value)}function zo(t){return function(n){n.children||(n.r=Math.max(0,+t(n)||0))}}function Po(t,n){return function(e){if(r=e.children){var r,i,o,u=r.length,a=t(e)*n||0;if(a)for(i=0;i<u;++i)r[i].r+=a;if(o=ko(r),a)for(i=0;i<u;++i)r[i].r-=a;e.r=o+a}}}function Ro(t){return function(n){var e=n.parent;n.r*=t,e&&(n.x=e.x+t*n.x,n.y=e.y+t*n.y)}}function Lo(t){t.x0=Math.round(t.x0),t.y0=Math.round(t.y0),t.x1=Math.round(t.x1),t.y1=Math.round(t.y1)}function qo(t,n,e,r,i){for(var o,u=t.children,a=-1,c=u.length,s=t.value&&(r-n)/t.value;++a<c;)(o=u[a]).y0=e,o.y1=i,o.x0=n,o.x1=n+=o.value*s}function Do(t){return t.id}function Uo(t){return t.parentId}function Oo(t,n){return t.parent===n.parent?1:2}function Fo(t){var n=t.children;return n?n[0]:t.t}function Io(t){var n=t.children;return n?n[n.length-1]:t.t}function Yo(t,n,e){var r=e/(n.i-t.i);n.c-=r,n.s+=e,t.c+=r,n.z+=e,n.m+=e}function Bo(t,n,e){return t.a.parent===n.parent?t.a:e}function Ho(t,n){this._=t,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=n}function jo(t,n,e,r,i){for(var o,u=t.children,a=-1,c=u.length,s=t.value&&(i-e)/t.value;++a<c;)(o=u[a]).x0=n,o.x1=r,o.y0=e,o.y1=e+=o.value*s}function Xo(t,n,e,r,i,o){for(var u,a,c,s,f,l,h,p,d,v,g,_=[],y=n.children,m=0,x=0,b=y.length,w=n.value;m<b;){c=i-e,s=o-r;do{f=y[x++].value}while(!f&&x<b);for(l=h=f,g=f*f*(v=Math.max(s/c,c/s)/(w*t)),d=Math.max(h/g,g/l);x<b;++x){if(f+=a=y[x].value,a<l&&(l=a),a>h&&(h=a),g=f*f*v,(p=Math.max(h/g,g/l))>d){f-=a;break}d=p}_.push(u={value:f,dice:c<s,children:y.slice(m,x)}),u.dice?qo(u,e,r,i,w?r+=s*f/w:o):jo(u,e,r,w?e+=c*f/w:i,o),w-=f,m=x}return _}function Vo(t,n,e){return(n[0]-t[0])*(e[1]-t[1])-(n[1]-t[1])*(e[0]-t[0])}function $o(t,n){return t[0]-n[0]||t[1]-n[1]}function Wo(t){for(var n=t.length,e=[0,1],r=2,i=2;i<n;++i){for(;r>1&&Vo(t[e[r-2]],t[e[r-1]],t[i])<=0;)--r;e[r++]=i}return e.slice(0,r)}function Zo(t){this._size=t,this._call=this._error=null,this._tasks=[],this._data=[],this._waiting=this._active=this._ended=this._start=0}function Go(t){if(!t._start)try{(function(t){for(;t._start=t._waiting&&t._active<t._size;){var n=t._ended+t._active,e=t._tasks[n],r=e.length-1,i=e[r];e[r]=function(t,n){return function(e,r){t._tasks[n]&&(--t._active,++t._ended,t._tasks[n]=null,null==t._error&&(null!=e?Qo(t,e):(t._data[n]=r,t._waiting?Go(t):Jo(t))))}}(t,n),--t._waiting,++t._active,e=i.apply(null,e),t._tasks[n]&&(t._tasks[n]=e||ev)}})(t)}catch(n){if(t._tasks[t._ended+t._active-1])Qo(t,n);else if(!t._data)throw n}}function Qo(t,n){var e,r=t._tasks.length;for(t._error=n,t._data=void 0,t._waiting=NaN;--r>=0;)if((e=t._tasks[r])&&(t._tasks[r]=null,e.abort))try{e.abort()}catch(n){}t._active=NaN,Jo(t)}function Jo(t){if(!t._active&&t._call){var n=t._data;t._data=void 0,t._call(t._error,n)}}function Ko(t){if(null==t)t=1/0;else if(!((t=+t)>=1))throw new Error("invalid concurrency");return new Zo(t)}function tu(){return Math.random()}function nu(t,n){function e(t){var n,e=s.status;if(!e&&function(t){var n=t.responseType;return n&&"text"!==n?t.response:t.responseText}(s)||e>=200&&e<300||304===e){if(o)try{n=o.call(r,s)}catch(t){return void a.call("error",r,t)}else n=s;a.call("load",r,n)}else a.call("error",r,t)}var r,i,o,u,a=N("beforesend","progress","load","error"),c=se(),s=new XMLHttpRequest,f=null,l=null,h=0;if("undefined"==typeof XDomainRequest||"withCredentials"in s||!/^(http(s)?:)?\/\//.test(t)||(s=new XDomainRequest),"onload"in s?s.onload=s.onerror=s.ontimeout=e:s.onreadystatechange=function(t){s.readyState>3&&e(t)},s.onprogress=function(t){a.call("progress",r,t)},r={header:function(t,n){return t=(t+"").toLowerCase(),arguments.length<2?c.get(t):(null==n?c.remove(t):c.set(t,n+""),r)},mimeType:function(t){return arguments.length?(i=null==t?null:t+"",r):i},responseType:function(t){return arguments.length?(u=t,r):u},timeout:function(t){return arguments.length?(h=+t,r):h},user:function(t){return arguments.length<1?f:(f=null==t?null:t+"",r)},password:function(t){return arguments.length<1?l:(l=null==t?null:t+"",r)},response:function(t){return o=t,r},get:function(t,n){return r.send("GET",t,n)},post:function(t,n){return r.send("POST",t,n)},send:function(n,e,o){return s.open(n,t,!0,f,l),null==i||c.has("accept")||c.set("accept",i+",*/*"),s.setRequestHeader&&c.each(function(t,n){s.setRequestHeader(n,t)}),null!=i&&s.overrideMimeType&&s.overrideMimeType(i),null!=u&&(s.responseType=u),h>0&&(s.timeout=h),null==o&&"function"==typeof e&&(o=e,e=null),null!=o&&1===o.length&&(o=function(t){return function(n,e){t(null==n?e:null)}}(o)),null!=o&&r.on("error",o).on("load",function(t){o(null,t)}),a.call("beforesend",r,s),s.send(null==e?null:e),r},abort:function(){return s.abort(),r},on:function(){var t=a.on.apply(a,arguments);return t===a?r:t}},null!=n){if("function"!=typeof n)throw new Error("invalid callback: "+n);return r.get(n)}return r}function eu(t,n){return function(e,r){var i=nu(e).mimeType(t).response(n);if(null!=r){if("function"!=typeof r)throw new Error("invalid callback: "+r);return i.get(r)}return i}}function ru(t,n){return function(e,r,i){arguments.length<3&&(i=r,r=null);var o=nu(e).mimeType(t);return o.row=function(t){return arguments.length?o.response(function(t,n){return function(e){return t(e.responseText,n)}}(n,r=t)):r},o.row(r),i?o.get(i):o}}function iu(t){function n(n){var o=n+"",u=e.get(o);if(!u){if(i!==yv)return i;e.set(o,u=r.push(n))}return t[(u-1)%t.length]}var e=se(),r=[],i=yv;return t=null==t?[]:_v.call(t),n.domain=function(t){if(!arguments.length)return r.slice();r=[],e=se();for(var i,o,u=-1,a=t.length;++u<a;)e.has(o=(i=t[u])+"")||e.set(o,r.push(i));return n},n.range=function(e){return arguments.length?(t=_v.call(e),n):t.slice()},n.unknown=function(t){return arguments.length?(i=t,n):i},n.copy=function(){return iu().domain(r).range(t).unknown(i)},n}function ou(){function t(){var t=i().length,r=u[1]<u[0],h=u[r-0],p=u[1-r];n=(p-h)/Math.max(1,t-c+2*s),a&&(n=Math.floor(n)),h+=(p-h-n*(t-c))*l,e=n*(1-c),a&&(h=Math.round(h),e=Math.round(e));var d=f(t).map(function(t){return h+n*t});return o(r?d.reverse():d)}var n,e,r=iu().unknown(void 0),i=r.domain,o=r.range,u=[0,1],a=!1,c=0,s=0,l=.5;return delete r.unknown,r.domain=function(n){return arguments.length?(i(n),t()):i()},r.range=function(n){return arguments.length?(u=[+n[0],+n[1]],t()):u.slice()},r.rangeRound=function(n){return u=[+n[0],+n[1]],a=!0,t()},r.bandwidth=function(){return e},r.step=function(){return n},r.round=function(n){return arguments.length?(a=!!n,t()):a},r.padding=function(n){return arguments.length?(c=s=Math.max(0,Math.min(1,n)),t()):c},r.paddingInner=function(n){return arguments.length?(c=Math.max(0,Math.min(1,n)),t()):c},r.paddingOuter=function(n){return arguments.length?(s=Math.max(0,Math.min(1,n)),t()):s},r.align=function(n){return arguments.length?(l=Math.max(0,Math.min(1,n)),t()):l},r.copy=function(){return ou().domain(i()).range(u).round(a).paddingInner(c).paddingOuter(s).align(l)},t()}function uu(t){var n=t.copy;return t.padding=t.paddingOuter,delete t.paddingInner,delete t.paddingOuter,t.copy=function(){return uu(n())},t}function au(t){return function(){return t}}function cu(t){return+t}function su(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:au(n)}function fu(t,n,e,r){var i=t[0],o=t[1],u=n[0],a=n[1];return o<i?(i=e(o,i),u=r(a,u)):(i=e(i,o),u=r(u,a)),function(t){return u(i(t))}}function lu(t,n,e,r){var i=Math.min(t.length,n.length)-1,o=new Array(i),u=new Array(i),a=-1;for(t[i]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++a<i;)o[a]=e(t[a],t[a+1]),u[a]=r(n[a],n[a+1]);return function(n){var e=Os(t,n,1,i)-1;return u[e](o[e](n))}}function hu(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())}function pu(t,n){function e(){return i=Math.min(a.length,c.length)>2?lu:fu,o=u=null,r}function r(n){return(o||(o=i(a,c,f?function(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return t<=n?0:t>=e?1:r(t)}}}(t):t,s)))(+n)}var i,o,u,a=mv,c=mv,s=fn,f=!1;return r.invert=function(t){return(u||(u=i(c,a,su,f?function(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return t<=0?n:t>=1?e:r(t)}}}(n):n)))(+t)},r.domain=function(t){return arguments.length?(a=gv.call(t,cu),e()):a.slice()},r.range=function(t){return arguments.length?(c=_v.call(t),e()):c.slice()},r.rangeRound=function(t){return c=_v.call(t),s=ln,e()},r.clamp=function(t){return arguments.length?(f=!!t,e()):f},r.interpolate=function(t){return arguments.length?(s=t,e()):s},e()}function du(n){var e=n.domain;return n.ticks=function(t){var n=e();return l(n[0],n[n.length-1],null==t?10:t)},n.tickFormat=function(n,r){return function(n,e,r){var i,o=n[0],u=n[n.length-1],a=p(o,u,null==e?10:e);switch((r=De(null==r?",f":r)).type){case"s":var c=Math.max(Math.abs(o),Math.abs(u));return null!=r.precision||isNaN(i=Be(a,c))||(r.precision=i),t.formatPrefix(r,c);case"":case"e":case"g":case"p":case"r":null!=r.precision||isNaN(i=He(a,Math.max(Math.abs(o),Math.abs(u))))||(r.precision=i-("e"===r.type));break;case"f":case"%":null!=r.precision||isNaN(i=Ye(a))||(r.precision=i-2*("%"===r.type))}return t.format(r)}(e(),n,r)},n.nice=function(t){null==t&&(t=10);var r,i=e(),o=0,u=i.length-1,a=i[o],c=i[u];return c<a&&(r=a,a=c,c=r,r=o,o=u,u=r),(r=h(a,c,t))>0?r=h(a=Math.floor(a/r)*r,c=Math.ceil(c/r)*r,t):r<0&&(r=h(a=Math.ceil(a*r)/r,c=Math.floor(c*r)/r,t)),r>0?(i[o]=Math.floor(a/r)*r,i[u]=Math.ceil(c/r)*r,e(i)):r<0&&(i[o]=Math.ceil(a*r)/r,i[u]=Math.floor(c*r)/r,e(i)),n},n}function vu(){var t=pu(su,an);return t.copy=function(){return hu(t,vu())},du(t)}function gu(){function t(t){return+t}var n=[0,1];return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=gv.call(e,cu),t):n.slice()},t.copy=function(){return gu().domain(n)},du(t)}function _u(t,n){var e,r=0,i=(t=t.slice()).length-1,o=t[r],u=t[i];return u<o&&(e=r,r=i,i=e,e=o,o=u,u=e),t[r]=n.floor(o),t[i]=n.ceil(u),t}function yu(t,n){return(n=Math.log(n/t))?function(e){return Math.log(e/t)/n}:au(n)}function mu(t,n){return t<0?function(e){return-Math.pow(-n,e)*Math.pow(-t,1-e)}:function(e){return Math.pow(n,e)*Math.pow(t,1-e)}}function xu(t){return isFinite(t)?+("1e"+t):t<0?0:t}function bu(t){return 10===t?xu:t===Math.E?Math.exp:function(n){return Math.pow(t,n)}}function wu(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t})}function Mu(t){return function(n){return-t(-n)}}function Tu(){function n(){return o=wu(i),u=bu(i),r()[0]<0&&(o=Mu(o),u=Mu(u)),e}var e=pu(yu,mu).domain([1,10]),r=e.domain,i=10,o=wu(10),u=bu(10);return e.base=function(t){return arguments.length?(i=+t,n()):i},e.domain=function(t){return arguments.length?(r(t),n()):r()},e.ticks=function(t){var n,e=r(),a=e[0],c=e[e.length-1];(n=c<a)&&(p=a,a=c,c=p);var s,f,h,p=o(a),d=o(c),v=null==t?10:+t,g=[];if(!(i%1)&&d-p<v){if(p=Math.round(p)-1,d=Math.round(d)+1,a>0){for(;p<d;++p)for(f=1,s=u(p);f<i;++f)if(!((h=s*f)<a)){if(h>c)break;g.push(h)}}else for(;p<d;++p)for(f=i-1,s=u(p);f>=1;--f)if(!((h=s*f)<a)){if(h>c)break;g.push(h)}}else g=l(p,d,Math.min(d-p,v)).map(u);return n?g.reverse():g},e.tickFormat=function(n,r){if(null==r&&(r=10===i?".0e":","),"function"!=typeof r&&(r=t.format(r)),n===1/0)return r;null==n&&(n=10);var a=Math.max(1,i*n/e.ticks().length);return function(t){var n=t/u(Math.round(o(t)));return n*i<i-.5&&(n*=i),n<=a?r(t):""}},e.nice=function(){return r(_u(r(),{floor:function(t){return u(Math.floor(o(t)))},ceil:function(t){return u(Math.ceil(o(t)))}}))},e.copy=function(){return hu(e,Tu().base(i))},e}function Nu(t,n){return t<0?-Math.pow(-t,n):Math.pow(t,n)}function ku(){var t=1,n=pu(function(n,e){return(e=Nu(e,t)-(n=Nu(n,t)))?function(r){return(Nu(r,t)-n)/e}:au(e)},function(n,e){return e=Nu(e,t)-(n=Nu(n,t)),function(r){return Nu(n+e*r,1/t)}}),e=n.domain;return n.exponent=function(n){return arguments.length?(t=+n,e(e())):t},n.copy=function(){return hu(n,ku().exponent(t))},du(n)}function Su(){function t(){var t=0,n=Math.max(1,i.length);for(o=new Array(n-1);++t<n;)o[t-1]=v(r,t/n);return e}function e(t){if(!isNaN(t=+t))return i[Os(o,t)]}var r=[],i=[],o=[];return e.invertExtent=function(t){var n=i.indexOf(t);return n<0?[NaN,NaN]:[n>0?o[n-1]:r[0],n<o.length?o[n]:r[r.length-1]]},e.domain=function(e){if(!arguments.length)return r.slice();r=[];for(var i,o=0,u=e.length;o<u;++o)null==(i=e[o])||isNaN(i=+i)||r.push(i);return r.sort(n),t()},e.range=function(n){return arguments.length?(i=_v.call(n),t()):i.slice()},e.quantiles=function(){return o.slice()},e.copy=function(){return Su().domain(r).range(i)},e}function Eu(){function t(t){if(t<=t)return u[Os(o,t,0,i)]}function n(){var n=-1;for(o=new Array(i);++n<i;)o[n]=((n+1)*r-(n-i)*e)/(i+1);return t}var e=0,r=1,i=1,o=[.5],u=[0,1];return t.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],n()):[e,r]},t.range=function(t){return arguments.length?(i=(u=_v.call(t)).length-1,n()):u.slice()},t.invertExtent=function(t){var n=u.indexOf(t);return n<0?[NaN,NaN]:n<1?[e,o[0]]:n>=i?[o[i-1],r]:[o[n-1],o[n]]},t.copy=function(){return Eu().domain([e,r]).range(u)},du(t)}function Au(){function t(t){if(t<=t)return e[Os(n,t,0,r)]}var n=[.5],e=[0,1],r=1;return t.domain=function(i){return arguments.length?(n=_v.call(i),r=Math.min(n.length,e.length-1),t):n.slice()},t.range=function(i){return arguments.length?(e=_v.call(i),r=Math.min(n.length,e.length-1),t):e.slice()},t.invertExtent=function(t){var r=e.indexOf(t);return[n[r-1],n[r]]},t.copy=function(){return Au().domain(n).range(e)},t}function Cu(t,n,e,r){function i(n){return t(n=new Date(+n)),n}return i.floor=i,i.ceil=function(e){return t(e=new Date(e-1)),n(e,1),t(e),e},i.round=function(t){var n=i(t),e=i.ceil(t);return t-n<e-t?n:e},i.offset=function(t,e){return n(t=new Date(+t),null==e?1:Math.floor(e)),t},i.range=function(e,r,o){var u,a=[];if(e=i.ceil(e),o=null==o?1:Math.floor(o),!(e<r&&o>0))return a;do{a.push(u=new Date(+e)),n(e,o),t(e)}while(u<e&&e<r);return a},i.filter=function(e){return Cu(function(n){if(n>=n)for(;t(n),!e(n);)n.setTime(n-1)},function(t,r){if(t>=t)if(r<0)for(;++r<=0;)for(;n(t,-1),!e(t););else for(;--r>=0;)for(;n(t,1),!e(t););})},e&&(i.count=function(n,r){return xv.setTime(+n),bv.setTime(+r),t(xv),t(bv),Math.floor(e(xv,bv))},i.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?i.filter(r?function(n){return r(n)%t==0}:function(n){return i.count(0,n)%t==0}):i:null}),i}function zu(t){return Cu(function(n){n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+7*n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Tv)/Nv})}function Pu(t){return Cu(function(n){n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+7*n)},function(t,n){return(n-t)/Nv})}function Ru(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function Lu(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function qu(t){return{y:t,m:0,d:1,H:0,M:0,S:0,L:0}}function Du(t){function n(t,n){return function(e){var r,i,o,u=[],a=-1,c=0,s=t.length;for(e instanceof Date||(e=new Date(+e));++a<s;)37===t.charCodeAt(a)&&(u.push(t.slice(c,a)),null!=(i=Mg[r=t.charAt(++a)])?r=t.charAt(++a):i="e"===r?" ":"0",(o=n[r])&&(r=o(e,i)),u.push(r),c=a+1);return u.push(t.slice(c,a)),u.join("")}}function e(t,n){return function(e){var i,o,u=qu(1900);if(r(u,t,e+="",0)!=e.length)return null;if("Q"in u)return new Date(u.Q);if("p"in u&&(u.H=u.H%12+12*u.p),"V"in u){if(u.V<1||u.V>53)return null;"w"in u||(u.w=1),"Z"in u?(i=(o=(i=Lu(qu(u.y))).getUTCDay())>4||0===o?og.ceil(i):og(i),i=eg.offset(i,7*(u.V-1)),u.y=i.getUTCFullYear(),u.m=i.getUTCMonth(),u.d=i.getUTCDate()+(u.w+6)%7):(i=(o=(i=n(qu(u.y))).getDay())>4||0===o?qv.ceil(i):qv(i),i=Pv.offset(i,7*(u.V-1)),u.y=i.getFullYear(),u.m=i.getMonth(),u.d=i.getDate()+(u.w+6)%7)}else("W"in u||"U"in u)&&("w"in u||(u.w="u"in u?u.u%7:"W"in u?1:0),o="Z"in u?Lu(qu(u.y)).getUTCDay():n(qu(u.y)).getDay(),u.m=0,u.d="W"in u?(u.w+6)%7+7*u.W-(o+5)%7:u.w+7*u.U-(o+6)%7);return"Z"in u?(u.H+=u.Z/100|0,u.M+=u.Z%100,Lu(u)):n(u)}}function r(t,n,e,r){for(var i,o,u=0,a=n.length,c=e.length;u<a;){if(r>=c)return-1;if(37===(i=n.charCodeAt(u++))){if(i=n.charAt(u++),!(o=T[i in Mg?n.charAt(u++):i])||(r=o(t,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}var i=t.dateTime,o=t.date,u=t.time,a=t.periods,c=t.days,s=t.shortDays,f=t.months,l=t.shortMonths,h=Fu(a),p=Iu(a),d=Fu(c),v=Iu(c),g=Fu(s),_=Iu(s),y=Fu(f),m=Iu(f),x=Fu(l),b=Iu(l),w={a:function(t){return s[t.getDay()]},A:function(t){return c[t.getDay()]},b:function(t){return l[t.getMonth()]},B:function(t){return f[t.getMonth()]},c:null,d:ua,e:ua,f:la,H:aa,I:ca,j:sa,L:fa,m:ha,M:pa,p:function(t){return a[+(t.getHours()>=12)]},Q:Ya,s:Ba,S:da,u:va,U:ga,V:_a,w:ya,W:ma,x:null,X:null,y:xa,Y:ba,Z:wa,"%":Ia},M={a:function(t){return s[t.getUTCDay()]},A:function(t){return c[t.getUTCDay()]},b:function(t){return l[t.getUTCMonth()]},B:function(t){return f[t.getUTCMonth()]},c:null,d:Ma,e:Ma,f:Ea,H:Ta,I:Na,j:ka,L:Sa,m:Aa,M:Ca,p:function(t){return a[+(t.getUTCHours()>=12)]},Q:Ya,s:Ba,S:za,u:Pa,U:Ra,V:La,w:qa,W:Da,x:null,X:null,y:Ua,Y:Oa,Z:Fa,"%":Ia},T={a:function(t,n,e){var r=g.exec(n.slice(e));return r?(t.w=_[r[0].toLowerCase()],e+r[0].length):-1},A:function(t,n,e){var r=d.exec(n.slice(e));return r?(t.w=v[r[0].toLowerCase()],e+r[0].length):-1},b:function(t,n,e){var r=x.exec(n.slice(e));return r?(t.m=b[r[0].toLowerCase()],e+r[0].length):-1},B:function(t,n,e){var r=y.exec(n.slice(e));return r?(t.m=m[r[0].toLowerCase()],e+r[0].length):-1},c:function(t,n,e){return r(t,i,n,e)},d:Gu,e:Gu,f:ea,H:Ju,I:Ju,j:Qu,L:na,m:Zu,M:Ku,p:function(t,n,e){var r=h.exec(n.slice(e));return r?(t.p=p[r[0].toLowerCase()],e+r[0].length):-1},Q:ia,s:oa,S:ta,u:Bu,U:Hu,V:ju,w:Yu,W:Xu,x:function(t,n,e){return r(t,o,n,e)},X:function(t,n,e){return r(t,u,n,e)},y:$u,Y:Vu,Z:Wu,"%":ra};return w.x=n(o,w),w.X=n(u,w),w.c=n(i,w),M.x=n(o,M),M.X=n(u,M),M.c=n(i,M),{format:function(t){var e=n(t+="",w);return e.toString=function(){return t},e},parse:function(t){var n=e(t+="",Ru);return n.toString=function(){return t},n},utcFormat:function(t){var e=n(t+="",M);return e.toString=function(){return t},e},utcParse:function(t){var n=e(t,Lu);return n.toString=function(){return t},n}}}function Uu(t,n,e){var r=t<0?"-":"",i=(r?-t:t)+"",o=i.length;return r+(o<e?new Array(e-o+1).join(n)+i:i)}function Ou(t){return t.replace(kg,"\\$&")}function Fu(t){return new RegExp("^(?:"+t.map(Ou).join("|")+")","i")}function Iu(t){for(var n={},e=-1,r=t.length;++e<r;)n[t[e].toLowerCase()]=e;return n}function Yu(t,n,e){var r=Tg.exec(n.slice(e,e+1));return r?(t.w=+r[0],e+r[0].length):-1}function Bu(t,n,e){var r=Tg.exec(n.slice(e,e+1));return r?(t.u=+r[0],e+r[0].length):-1}function Hu(t,n,e){var r=Tg.exec(n.slice(e,e+2));return r?(t.U=+r[0],e+r[0].length):-1}function ju(t,n,e){var r=Tg.exec(n.slice(e,e+2));return r?(t.V=+r[0],e+r[0].length):-1}function Xu(t,n,e){var r=Tg.exec(n.slice(e,e+2));return r?(t.W=+r[0],e+r[0].length):-1}function Vu(t,n,e){var r=Tg.exec(n.slice(e,e+4));return r?(t.y=+r[0],e+r[0].length):-1}function $u(t,n,e){var r=Tg.exec(n.slice(e,e+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function Wu(t,n,e){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e,e+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function Zu(t,n,e){var r=Tg.exec(n.slice(e,e+2));return r?(t.m=r[0]-1,e+r[0].length):-1}function Gu(t,n,e){var r=Tg.exec(n.slice(e,e+2));return r?(t.d=+r[0],e+r[0].length):-1}function Qu(t,n,e){var r=Tg.exec(n.slice(e,e+3));return r?(t.m=0,t.d=+r[0],e+r[0].length):-1}function Ju(t,n,e){var r=Tg.exec(n.slice(e,e+2));return r?(t.H=+r[0],e+r[0].length):-1}function Ku(t,n,e){var r=Tg.exec(n.slice(e,e+2));return r?(t.M=+r[0],e+r[0].length):-1}function ta(t,n,e){var r=Tg.exec(n.slice(e,e+2));return r?(t.S=+r[0],e+r[0].length):-1}function na(t,n,e){var r=Tg.exec(n.slice(e,e+3));return r?(t.L=+r[0],e+r[0].length):-1}function ea(t,n,e){var r=Tg.exec(n.slice(e,e+6));return r?(t.L=Math.floor(r[0]/1e3),e+r[0].length):-1}function ra(t,n,e){var r=Ng.exec(n.slice(e,e+1));return r?e+r[0].length:-1}function ia(t,n,e){var r=Tg.exec(n.slice(e));return r?(t.Q=+r[0],e+r[0].length):-1}function oa(t,n,e){var r=Tg.exec(n.slice(e));return r?(t.Q=1e3*+r[0],e+r[0].length):-1}function ua(t,n){return Uu(t.getDate(),n,2)}function aa(t,n){return Uu(t.getHours(),n,2)}function ca(t,n){return Uu(t.getHours()%12||12,n,2)}function sa(t,n){return Uu(1+Pv.count(Gv(t),t),n,3)}function fa(t,n){return Uu(t.getMilliseconds(),n,3)}function la(t,n){return fa(t,n)+"000"}function ha(t,n){return Uu(t.getMonth()+1,n,2)}function pa(t,n){return Uu(t.getMinutes(),n,2)}function da(t,n){return Uu(t.getSeconds(),n,2)}function va(t){var n=t.getDay();return 0===n?7:n}function ga(t,n){return Uu(Lv.count(Gv(t),t),n,2)}function _a(t,n){var e=t.getDay();return t=e>=4||0===e?Ov(t):Ov.ceil(t),Uu(Ov.count(Gv(t),t)+(4===Gv(t).getDay()),n,2)}function ya(t){return t.getDay()}function ma(t,n){return Uu(qv.count(Gv(t),t),n,2)}function xa(t,n){return Uu(t.getFullYear()%100,n,2)}function ba(t,n){return Uu(t.getFullYear()%1e4,n,4)}function wa(t){var n=t.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+Uu(n/60|0,"0",2)+Uu(n%60,"0",2)}function Ma(t,n){return Uu(t.getUTCDate(),n,2)}function Ta(t,n){return Uu(t.getUTCHours(),n,2)}function Na(t,n){return Uu(t.getUTCHours()%12||12,n,2)}function ka(t,n){return Uu(1+eg.count(xg(t),t),n,3)}function Sa(t,n){return Uu(t.getUTCMilliseconds(),n,3)}function Ea(t,n){return Sa(t,n)+"000"}function Aa(t,n){return Uu(t.getUTCMonth()+1,n,2)}function Ca(t,n){return Uu(t.getUTCMinutes(),n,2)}function za(t,n){return Uu(t.getUTCSeconds(),n,2)}function Pa(t){var n=t.getUTCDay();return 0===n?7:n}function Ra(t,n){return Uu(ig.count(xg(t),t),n,2)}function La(t,n){var e=t.getUTCDay();return t=e>=4||0===e?cg(t):cg.ceil(t),Uu(cg.count(xg(t),t)+(4===xg(t).getUTCDay()),n,2)}function qa(t){return t.getUTCDay()}function Da(t,n){return Uu(og.count(xg(t),t),n,2)}function Ua(t,n){return Uu(t.getUTCFullYear()%100,n,2)}function Oa(t,n){return Uu(t.getUTCFullYear()%1e4,n,4)}function Fa(){return"+0000"}function Ia(){return"%"}function Ya(t){return+t}function Ba(t){return Math.floor(+t/1e3)}function Ha(n){return bg=Du(n),t.timeFormat=bg.format,t.timeParse=bg.parse,t.utcFormat=bg.utcFormat,t.utcParse=bg.utcParse,bg}function ja(t){return new Date(t)}function Xa(t){return t instanceof Date?+t:+new Date(+t)}function Va(t,n,r,i,o,u,a,c,s){function f(e){return(a(e)<e?g:u(e)<e?_:o(e)<e?y:i(e)<e?m:n(e)<e?r(e)<e?x:b:t(e)<e?w:M)(e)}function l(n,r,i,o){if(null==n&&(n=10),"number"==typeof n){var u=Math.abs(i-r)/n,a=e(function(t){return t[2]}).right(T,u);a===T.length?(o=p(r/Dg,i/Dg,n),n=t):a?(o=(a=T[u/T[a-1][2]<T[a][2]/u?a-1:a])[1],n=a[0]):(o=Math.max(p(r,i,n),1),n=c)}return null==o?n:n.every(o)}var h=pu(su,an),d=h.invert,v=h.domain,g=s(".%L"),_=s(":%S"),y=s("%I:%M"),m=s("%I %p"),x=s("%a %d"),b=s("%b %d"),w=s("%B"),M=s("%Y"),T=[[a,1,Cg],[a,5,5*Cg],[a,15,15*Cg],[a,30,30*Cg],[u,1,zg],[u,5,5*zg],[u,15,15*zg],[u,30,30*zg],[o,1,Pg],[o,3,3*Pg],[o,6,6*Pg],[o,12,12*Pg],[i,1,Rg],[i,2,2*Rg],[r,1,Lg],[n,1,qg],[n,3,3*qg],[t,1,Dg]];return h.invert=function(t){return new Date(d(t))},h.domain=function(t){return arguments.length?v(gv.call(t,Xa)):v().map(ja)},h.ticks=function(t,n){var e,r=v(),i=r[0],o=r[r.length-1],u=o<i;return u&&(e=i,i=o,o=e),e=l(t,i,o,n),e=e?e.range(i,o+1):[],u?e.reverse():e},h.tickFormat=function(t,n){return null==n?f:s(n)},h.nice=function(t,n){var e=v();return(t=l(t,e[0],e[e.length-1],n))?v(_u(e,t)):h},h.copy=function(){return hu(h,Va(t,n,r,i,o,u,a,c,s))},h}function $a(t){return t.match(/.{6}/g).map(function(t){return"#"+t})}function Wa(t){var n=t.length;return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}}function Za(t){function n(n){var o=(n-e)/(r-e);return t(i?Math.max(0,Math.min(1,o)):o)}var e=0,r=1,i=!1;return n.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],n):[e,r]},n.clamp=function(t){return arguments.length?(i=!!t,n):i},n.interpolator=function(e){return arguments.length?(t=e,n):t},n.copy=function(){return Za(t).domain([e,r]).clamp(i)},du(n)}function Ga(t){return function(){return t}}function Qa(t){return t>=1?i_:t<=-1?-i_:Math.asin(t)}function Ja(t){return t.innerRadius}function Ka(t){return t.outerRadius}function tc(t){return t.startAngle}function nc(t){return t.endAngle}function ec(t){return t&&t.padAngle}function rc(t,n,e,r,i,o,u){var a=t-e,c=n-r,s=(u?o:-o)/n_(a*a+c*c),f=s*c,l=-s*a,h=t+f,p=n+l,d=e+f,v=r+l,g=(h+d)/2,_=(p+v)/2,y=d-h,m=v-p,x=y*y+m*m,b=i-o,w=h*v-d*p,M=(m<0?-1:1)*n_(Jg(0,b*b*x-w*w)),T=(w*m-y*M)/x,N=(-w*y-m*M)/x,k=(w*m+y*M)/x,S=(-w*y+m*M)/x,E=T-g,A=N-_,C=k-g,z=S-_;return E*E+A*A>C*C+z*z&&(T=k,N=S),{cx:T,cy:N,x01:-f,y01:-l,x11:T*(i/b-1),y11:N*(i/b-1)}}function ic(t){this._context=t}function oc(t){return new ic(t)}function uc(t){return t[0]}function ac(t){return t[1]}function cc(){function t(t){var a,c,s,f=t.length,l=!1;for(null==i&&(u=o(s=ee())),a=0;a<=f;++a)!(a<f&&r(c=t[a],a,t))===l&&((l=!l)?u.lineStart():u.lineEnd()),l&&u.point(+n(c,a,t),+e(c,a,t));if(s)return u=null,s+""||null}var n=uc,e=ac,r=Ga(!0),i=null,o=oc,u=null;return t.x=function(e){return arguments.length?(n="function"==typeof e?e:Ga(+e),t):n},t.y=function(n){return arguments.length?(e="function"==typeof n?n:Ga(+n),t):e},t.defined=function(n){return arguments.length?(r="function"==typeof n?n:Ga(!!n),t):r},t.curve=function(n){return arguments.length?(o=n,null!=i&&(u=o(i)),t):o},t.context=function(n){return arguments.length?(null==n?i=u=null:u=o(i=n),t):i},t}function sc(){function t(t){var n,f,l,h,p,d=t.length,v=!1,g=new Array(d),_=new Array(d);for(null==a&&(s=c(p=ee())),n=0;n<=d;++n){if(!(n<d&&u(h=t[n],n,t))===v)if(v=!v)f=n,s.areaStart(),s.lineStart();else{for(s.lineEnd(),s.lineStart(),l=n-1;l>=f;--l)s.point(g[l],_[l]);s.lineEnd(),s.areaEnd()}v&&(g[n]=+e(h,n,t),_[n]=+i(h,n,t),s.point(r?+r(h,n,t):g[n],o?+o(h,n,t):_[n]))}if(p)return s=null,p+""||null}function n(){return cc().defined(u).curve(c).context(a)}var e=uc,r=null,i=Ga(0),o=ac,u=Ga(!0),a=null,c=oc,s=null;return t.x=function(n){return arguments.length?(e="function"==typeof n?n:Ga(+n),r=null,t):e},t.x0=function(n){return arguments.length?(e="function"==typeof n?n:Ga(+n),t):e},t.x1=function(n){return arguments.length?(r=null==n?null:"function"==typeof n?n:Ga(+n),t):r},t.y=function(n){return arguments.length?(i="function"==typeof n?n:Ga(+n),o=null,t):i},t.y0=function(n){return arguments.length?(i="function"==typeof n?n:Ga(+n),t):i},t.y1=function(n){return arguments.length?(o=null==n?null:"function"==typeof n?n:Ga(+n),t):o},t.lineX0=t.lineY0=function(){return n().x(e).y(i)},t.lineY1=function(){return n().x(e).y(o)},t.lineX1=function(){return n().x(r).y(i)},t.defined=function(n){return arguments.length?(u="function"==typeof n?n:Ga(!!n),t):u},t.curve=function(n){return arguments.length?(c=n,null!=a&&(s=c(a)),t):c},t.context=function(n){return arguments.length?(null==n?a=s=null:s=c(a=n),t):a},t}function fc(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function lc(t){return t}function hc(t){this._curve=t}function pc(t){function n(n){return new hc(t(n))}return n._curve=t,n}function dc(t){var n=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(pc(t)):n()._curve},t}function vc(){return dc(cc().curve(u_))}function gc(){var t=sc().curve(u_),n=t.curve,e=t.lineX0,r=t.lineX1,i=t.lineY0,o=t.lineY1;return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.lineStartAngle=function(){return dc(e())},delete t.lineX0,t.lineEndAngle=function(){return dc(r())},delete t.lineX1,t.lineInnerRadius=function(){return dc(i())},delete t.lineY0,t.lineOuterRadius=function(){return dc(o())},delete t.lineY1,t.curve=function(t){return arguments.length?n(pc(t)):n()._curve},t}function _c(t,n){return[(n=+n)*Math.cos(t-=Math.PI/2),n*Math.sin(t)]}function yc(t){return t.source}function mc(t){return t.target}function xc(t){function n(){var n,a=a_.call(arguments),c=e.apply(this,a),s=r.apply(this,a);if(u||(u=n=ee()),t(u,+i.apply(this,(a[0]=c,a)),+o.apply(this,a),+i.apply(this,(a[0]=s,a)),+o.apply(this,a)),n)return u=null,n+""||null}var e=yc,r=mc,i=uc,o=ac,u=null;return n.source=function(t){return arguments.length?(e=t,n):e},n.target=function(t){return arguments.length?(r=t,n):r},n.x=function(t){return arguments.length?(i="function"==typeof t?t:Ga(+t),n):i},n.y=function(t){return arguments.length?(o="function"==typeof t?t:Ga(+t),n):o},n.context=function(t){return arguments.length?(u=null==t?null:t,n):u},n}function bc(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n=(n+r)/2,e,n,i,r,i)}function wc(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n,e=(e+i)/2,r,e,r,i)}function Mc(t,n,e,r,i){var o=_c(n,e),u=_c(n,e=(e+i)/2),a=_c(r,e),c=_c(r,i);t.moveTo(o[0],o[1]),t.bezierCurveTo(u[0],u[1],a[0],a[1],c[0],c[1])}function Tc(){}function Nc(t,n,e){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+e)/6)}function kc(t){this._context=t}function Sc(t){this._context=t}function Ec(t){this._context=t}function Ac(t,n){this._basis=new kc(t),this._beta=n}function Cc(t,n,e){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-e),t._x2,t._y2)}function zc(t,n){this._context=t,this._k=(1-n)/6}function Pc(t,n){this._context=t,this._k=(1-n)/6}function Rc(t,n){this._context=t,this._k=(1-n)/6}function Lc(t,n,e){var r=t._x1,i=t._y1,o=t._x2,u=t._y2;if(t._l01_a>e_){var a=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,c=3*t._l01_a*(t._l01_a+t._l12_a);r=(r*a-t._x0*t._l12_2a+t._x2*t._l01_2a)/c,i=(i*a-t._y0*t._l12_2a+t._y2*t._l01_2a)/c}if(t._l23_a>e_){var s=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,f=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*s+t._x1*t._l23_2a-n*t._l12_2a)/f,u=(u*s+t._y1*t._l23_2a-e*t._l12_2a)/f}t._context.bezierCurveTo(r,i,o,u,t._x2,t._y2)}function qc(t,n){this._context=t,this._alpha=n}function Dc(t,n){this._context=t,this._alpha=n}function Uc(t,n){this._context=t,this._alpha=n}function Oc(t){this._context=t}function Fc(t){return t<0?-1:1}function Ic(t,n,e){var r=t._x1-t._x0,i=n-t._x1,o=(t._y1-t._y0)/(r||i<0&&-0),u=(e-t._y1)/(i||r<0&&-0),a=(o*i+u*r)/(r+i);return(Fc(o)+Fc(u))*Math.min(Math.abs(o),Math.abs(u),.5*Math.abs(a))||0}function Yc(t,n){var e=t._x1-t._x0;return e?(3*(t._y1-t._y0)/e-n)/2:n}function Bc(t,n,e){var r=t._x0,i=t._y0,o=t._x1,u=t._y1,a=(o-r)/3;t._context.bezierCurveTo(r+a,i+a*n,o-a,u-a*e,o,u)}function Hc(t){this._context=t}function jc(t){this._context=new Xc(t)}function Xc(t){this._context=t}function Vc(t){this._context=t}function $c(t){var n,e,r=t.length-1,i=new Array(r),o=new Array(r),u=new Array(r);for(i[0]=0,o[0]=2,u[0]=t[0]+2*t[1],n=1;n<r-1;++n)i[n]=1,o[n]=4,u[n]=4*t[n]+2*t[n+1];for(i[r-1]=2,o[r-1]=7,u[r-1]=8*t[r-1]+t[r],n=1;n<r;++n)e=i[n]/o[n-1],o[n]-=e,u[n]-=e*u[n-1];for(i[r-1]=u[r-1]/o[r-1],n=r-2;n>=0;--n)i[n]=(u[n]-i[n+1])/o[n];for(o[r-1]=(t[r]+i[r-1])/2,n=0;n<r-1;++n)o[n]=2*t[n+1]-i[n+1];return[i,o]}function Wc(t,n){this._context=t,this._t=n}function Zc(t,n){if((i=t.length)>1)for(var e,r,i,o=1,u=t[n[0]],a=u.length;o<i;++o)for(r=u,u=t[n[o]],e=0;e<a;++e)u[e][1]+=u[e][0]=isNaN(r[e][1])?r[e][0]:r[e][1]}function Gc(t){for(var n=t.length,e=new Array(n);--n>=0;)e[n]=n;return e}function Qc(t,n){return t[n]}function Jc(t){var n=t.map(Kc);return Gc(t).sort(function(t,e){return n[t]-n[e]})}function Kc(t){for(var n,e=0,r=-1,i=t.length;++r<i;)(n=+t[r][1])&&(e+=n);return e}function ts(t){return function(){return t}}function ns(t){return t[0]}function es(t){return t[1]}function rs(){this._=null}function is(t){t.U=t.C=t.L=t.R=t.P=t.N=null}function os(t,n){var e=n,r=n.R,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function us(t,n){var e=n,r=n.L,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function as(t){for(;t.L;)t=t.L;return t}function cs(t,n,e,r){var i=[null,null],o=D_.push(i)-1;return i.left=t,i.right=n,e&&fs(i,t,n,e),r&&fs(i,n,t,r),L_[t.index].halfedges.push(o),L_[n.index].halfedges.push(o),i}function ss(t,n,e){var r=[n,e];return r.left=t,r}function fs(t,n,e,r){t[0]||t[1]?t.left===e?t[1]=r:t[0]=r:(t[0]=r,t.left=n,t.right=e)}function ls(t,n,e,r,i){var o,u=t[0],a=t[1],c=u[0],s=u[1],f=0,l=1,h=a[0]-c,p=a[1]-s;if(o=n-c,h||!(o>0)){if(o/=h,h<0){if(o<f)return;o<l&&(l=o)}else if(h>0){if(o>l)return;o>f&&(f=o)}if(o=r-c,h||!(o<0)){if(o/=h,h<0){if(o>l)return;o>f&&(f=o)}else if(h>0){if(o<f)return;o<l&&(l=o)}if(o=e-s,p||!(o>0)){if(o/=p,p<0){if(o<f)return;o<l&&(l=o)}else if(p>0){if(o>l)return;o>f&&(f=o)}if(o=i-s,p||!(o<0)){if(o/=p,p<0){if(o>l)return;o>f&&(f=o)}else if(p>0){if(o<f)return;o<l&&(l=o)}return!(f>0||l<1)||(f>0&&(t[0]=[c+f*h,s+f*p]),l<1&&(t[1]=[c+l*h,s+l*p]),!0)}}}}}function hs(t,n,e,r,i){var o=t[1];if(o)return!0;var u,a,c=t[0],s=t.left,f=t.right,l=s[0],h=s[1],p=f[0],d=f[1],v=(l+p)/2,g=(h+d)/2;if(d===h){if(v<n||v>=r)return;if(l>p){if(c){if(c[1]>=i)return}else c=[v,e];o=[v,i]}else{if(c){if(c[1]<e)return}else c=[v,i];o=[v,e]}}else if(u=(l-p)/(d-h),a=g-u*v,u<-1||u>1)if(l>p){if(c){if(c[1]>=i)return}else c=[(e-a)/u,e];o=[(i-a)/u,i]}else{if(c){if(c[1]<e)return}else c=[(i-a)/u,i];o=[(e-a)/u,e]}else if(h<d){if(c){if(c[0]>=r)return}else c=[n,u*n+a];o=[r,u*r+a]}else{if(c){if(c[0]<n)return}else c=[r,u*r+a];o=[n,u*n+a]}return t[0]=c,t[1]=o,!0}function ps(t,n){var e=t.site,r=n.left,i=n.right;return e===i&&(i=r,r=e),i?Math.atan2(i[1]-r[1],i[0]-r[0]):(e===r?(r=n[1],i=n[0]):(r=n[0],i=n[1]),Math.atan2(r[0]-i[0],i[1]-r[1]))}function ds(t,n){return n[+(n.left!==t.site)]}function vs(t,n){return n[+(n.left===t.site)]}function gs(t){var n=t.P,e=t.N;if(n&&e){var r=n.site,i=t.site,o=e.site;if(r!==o){var u=i[0],a=i[1],c=r[0]-u,s=r[1]-a,f=o[0]-u,l=o[1]-a,h=2*(c*l-s*f);if(!(h>=-I_)){var p=c*c+s*s,d=f*f+l*l,v=(l*p-s*d)/h,g=(c*d-f*p)/h,_=U_.pop()||new function(){is(this),this.x=this.y=this.arc=this.site=this.cy=null};_.arc=t,_.site=i,_.x=v+u,_.y=(_.cy=g+a)+Math.sqrt(v*v+g*g),t.circle=_;for(var y=null,m=q_._;m;)if(_.y<m.y||_.y===m.y&&_.x<=m.x){if(!m.L){y=m.P;break}m=m.L}else{if(!m.R){y=m;break}m=m.R}q_.insert(y,_),y||(P_=_)}}}}function _s(t){var n=t.circle;n&&(n.P||(P_=n.N),q_.remove(n),U_.push(n),is(n),t.circle=null)}function ys(t){var n=O_.pop()||new function(){is(this),this.edge=this.site=this.circle=null};return n.site=t,n}function ms(t){_s(t),R_.remove(t),O_.push(t),is(t)}function xs(t){var n=t.circle,e=n.x,r=n.cy,i=[e,r],o=t.P,u=t.N,a=[t];ms(t);for(var c=o;c.circle&&Math.abs(e-c.circle.x)<F_&&Math.abs(r-c.circle.cy)<F_;)o=c.P,a.unshift(c),ms(c),c=o;a.unshift(c),_s(c);for(var s=u;s.circle&&Math.abs(e-s.circle.x)<F_&&Math.abs(r-s.circle.cy)<F_;)u=s.N,a.push(s),ms(s),s=u;a.push(s),_s(s);var f,l=a.length;for(f=1;f<l;++f)s=a[f],c=a[f-1],fs(s.edge,c.site,s.site,i);c=a[0],(s=a[l-1]).edge=cs(c.site,s.site,null,i),gs(c),gs(s)}function bs(t){for(var n,e,r,i,o=t[0],u=t[1],a=R_._;a;)if((r=ws(a,u)-o)>F_)a=a.L;else{if(!((i=o-function(t,n){var e=t.N;if(e)return ws(e,n);var r=t.site;return r[1]===n?r[0]:1/0}(a,u))>F_)){r>-F_?(n=a.P,e=a):i>-F_?(n=a,e=a.N):n=e=a;break}if(!a.R){n=a;break}a=a.R}(function(t){L_[t.index]={site:t,halfedges:[]}})(t);var c=ys(t);if(R_.insert(n,c),n||e){if(n===e)return _s(n),e=ys(n.site),R_.insert(c,e),c.edge=e.edge=cs(n.site,c.site),gs(n),void gs(e);if(e){_s(n),_s(e);var s=n.site,f=s[0],l=s[1],h=t[0]-f,p=t[1]-l,d=e.site,v=d[0]-f,g=d[1]-l,_=2*(h*g-p*v),y=h*h+p*p,m=v*v+g*g,x=[(g*y-p*m)/_+f,(h*m-v*y)/_+l];fs(e.edge,s,d,x),c.edge=cs(s,t,null,x),e.edge=cs(t,d,null,x),gs(n),gs(e)}else c.edge=cs(n.site,c.site)}}function ws(t,n){var e=t.site,r=e[0],i=e[1],o=i-n;if(!o)return r;var u=t.P;if(!u)return-1/0;var a=(e=u.site)[0],c=e[1],s=c-n;if(!s)return a;var f=a-r,l=1/o-1/s,h=f/s;return l?(-h+Math.sqrt(h*h-2*l*(f*f/(-2*s)-c+s/2+i-o/2)))/l+r:(r+a)/2}function Ms(t,n,e){return(t[0]-e[0])*(n[1]-t[1])-(t[0]-n[0])*(e[1]-t[1])}function Ts(t,n){return n[1]-t[1]||n[0]-t[0]}function Ns(t,n){var e,r,i,o=t.sort(Ts).pop();for(D_=[],L_=new Array(t.length),R_=new rs,q_=new rs;;)if(i=P_,o&&(!i||o[1]<i.y||o[1]===i.y&&o[0]<i.x))o[0]===e&&o[1]===r||(bs(o),e=o[0],r=o[1]),o=t.pop();else{if(!i)break;xs(i.arc)}if(function(){for(var t,n,e,r,i=0,o=L_.length;i<o;++i)if((t=L_[i])&&(r=(n=t.halfedges).length)){var u=new Array(r),a=new Array(r);for(e=0;e<r;++e)u[e]=e,a[e]=ps(t,D_[n[e]]);for(u.sort(function(t,n){return a[n]-a[t]}),e=0;e<r;++e)a[e]=n[u[e]];for(e=0;e<r;++e)n[e]=a[e]}}(),n){var u=+n[0][0],a=+n[0][1],c=+n[1][0],s=+n[1][1];(function(t,n,e,r){for(var i,o=D_.length;o--;)hs(i=D_[o],t,n,e,r)&&ls(i,t,n,e,r)&&(Math.abs(i[0][0]-i[1][0])>F_||Math.abs(i[0][1]-i[1][1])>F_)||delete D_[o]})(u,a,c,s),function(t,n,e,r){var i,o,u,a,c,s,f,l,h,p,d,v,g=L_.length,_=!0;for(i=0;i<g;++i)if(o=L_[i]){for(u=o.site,a=(c=o.halfedges).length;a--;)D_[c[a]]||c.splice(a,1);for(a=0,s=c.length;a<s;)d=(p=vs(o,D_[c[a]]))[0],v=p[1],l=(f=ds(o,D_[c[++a%s]]))[0],h=f[1],(Math.abs(d-l)>F_||Math.abs(v-h)>F_)&&(c.splice(a,0,D_.push(ss(u,p,Math.abs(d-t)<F_&&r-v>F_?[t,Math.abs(l-t)<F_?h:r]:Math.abs(v-r)<F_&&e-d>F_?[Math.abs(h-r)<F_?l:e,r]:Math.abs(d-e)<F_&&v-n>F_?[e,Math.abs(l-e)<F_?h:n]:Math.abs(v-n)<F_&&d-t>F_?[Math.abs(h-n)<F_?l:t,n]:null))-1),++s);s&&(_=!1)}if(_){var y,m,x,b=1/0;for(i=0,_=null;i<g;++i)(o=L_[i])&&(x=(y=(u=o.site)[0]-t)*y+(m=u[1]-n)*m)<b&&(b=x,_=o);if(_){var w=[t,n],M=[t,r],T=[e,r],N=[e,n];_.halfedges.push(D_.push(ss(u=_.site,w,M))-1,D_.push(ss(u,M,T))-1,D_.push(ss(u,T,N))-1,D_.push(ss(u,N,w))-1)}}for(i=0;i<g;++i)(o=L_[i])&&(o.halfedges.length||delete L_[i])}(u,a,c,s)}this.edges=D_,this.cells=L_,R_=q_=D_=L_=null}function ks(t){return function(){return t}}function Ss(t,n,e){this.k=t,this.x=n,this.y=e}function Es(t){return t.__zoom||Y_}function As(){t.event.stopImmediatePropagation()}function Cs(){t.event.preventDefault(),t.event.stopImmediatePropagation()}function zs(){return!t.event.button}function Ps(){var t,n,e=this;return e instanceof SVGElement?(t=(e=e.ownerSVGElement||e).width.baseVal.value,n=e.height.baseVal.value):(t=e.clientWidth,n=e.clientHeight),[[0,0],[t,n]]}function Rs(){return this.__zoom||Y_}function Ls(){return-t.event.deltaY*(t.event.deltaMode?120:1)/500}function qs(){return"ontouchstart"in this}function Ds(t,n,e){var r=t.invertX(n[0][0])-e[0][0],i=t.invertX(n[1][0])-e[1][0],o=t.invertY(n[0][1])-e[0][1],u=t.invertY(n[1][1])-e[1][1];return t.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),u>o?(o+u)/2:Math.min(0,o)||Math.max(0,u))}var Us=e(n),Os=Us.right,Fs=Us.left,Is=Array.prototype,Ys=Is.slice,Bs=Is.map,Hs=Math.sqrt(50),js=Math.sqrt(10),Xs=Math.sqrt(2),Vs=Array.prototype.slice,$s=1,Ws=2,Zs=3,Gs=4,Qs=1e-6,Js={value:function(){}};k.prototype=N.prototype={constructor:k,on:function(t,n){var e,r=this._,i=function(t,n){return t.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}})}(t+"",r),o=-1,u=i.length;{if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++o<u;)if(e=(t=i[o]).type)r[e]=S(r[e],t.name,n);else if(null==n)for(e in r)r[e]=S(r[e],t.name,null);return this}for(;++o<u;)if((e=(t=i[o]).type)&&(e=function(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}(r[e],t.name)))return e}},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new k(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,e=(r=this._[t]).length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};var Ks="http://www.w3.org/1999/xhtml",tf={svg:"http://www.w3.org/2000/svg",xhtml:Ks,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},nf=function(t){return function(){return this.matches(t)}};if("undefined"!=typeof document){var ef=document.documentElement;if(!ef.matches){var rf=ef.webkitMatchesSelector||ef.msMatchesSelector||ef.mozMatchesSelector||ef.oMatchesSelector;nf=function(t){return function(){return rf.call(this,t)}}}}var of=nf;q.prototype={constructor:q,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var uf="$";H.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var af={};if(t.event=null,"undefined"!=typeof document){"onmouseenter"in document.documentElement||(af={mouseenter:"mouseover",mouseleave:"mouseout"})}var cf=[null];ut.prototype=at.prototype={constructor:ut,select:function(t){"function"!=typeof t&&(t=z(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u,a=n[i],c=a.length,s=r[i]=new Array(c),f=0;f<c;++f)(o=a[f])&&(u=t.call(o,o.__data__,f,a))&&("__data__"in o&&(u.__data__=o.__data__),s[f]=u);return new ut(r,this._parents)},selectAll:function(t){"function"!=typeof t&&(t=R(t));for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var u,a=n[o],c=a.length,s=0;s<c;++s)(u=a[s])&&(r.push(t.call(u,u.__data__,s,a)),i.push(u));return new ut(r,i)},filter:function(t){"function"!=typeof t&&(t=of(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u=n[i],a=u.length,c=r[i]=[],s=0;s<a;++s)(o=u[s])&&t.call(o,o.__data__,s,u)&&c.push(o);return new ut(r,this._parents)},data:function(t,n){if(!t)return p=new Array(this.size()),s=-1,this.each(function(t){p[++s]=t}),p;var e=n?U:D,r=this._parents,i=this._groups;"function"!=typeof t&&(t=function(t){return function(){return t}}(t));for(var o=i.length,u=new Array(o),a=new Array(o),c=new Array(o),s=0;s<o;++s){var f=r[s],l=i[s],h=l.length,p=t.call(f,f&&f.__data__,s,r),d=p.length,v=a[s]=new Array(d),g=u[s]=new Array(d);e(f,l,v,g,c[s]=new Array(h),p,n);for(var _,y,m=0,x=0;m<d;++m)if(_=v[m]){for(m>=x&&(x=m+1);!(y=g[x])&&++x<d;);_._next=y||null}}return u=new ut(u,r),u._enter=a,u._exit=c,u},enter:function(){return new ut(this._enter||this._groups.map(L),this._parents)},exit:function(){return new ut(this._exit||this._groups.map(L),this._parents)},merge:function(t){for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),u=new Array(r),a=0;a<o;++a)for(var c,s=n[a],f=e[a],l=s.length,h=u[a]=new Array(l),p=0;p<l;++p)(c=s[p]||f[p])&&(h[p]=c);for(;a<r;++a)u[a]=n[a];return new ut(u,this._parents)},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,u=i[o];--o>=0;)(r=i[o])&&(u&&u!==r.nextSibling&&u.parentNode.insertBefore(r,u),u=r);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=O);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var u,a=e[o],c=a.length,s=i[o]=new Array(c),f=0;f<c;++f)(u=a[f])&&(s[f]=u);s.sort(n)}return new ut(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){var t=new Array(this.size()),n=-1;return this.each(function(){t[++n]=this}),t},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var u=r[i];if(u)return u}return null},size:function(){var t=0;return this.each(function(){++t}),t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],u=0,a=o.length;u<a;++u)(i=o[u])&&t.call(i,i.__data__,u,o);return this},attr:function(t,n){var e=E(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}}:"function"==typeof n?e.local?function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}:function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}:e.local?function(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}:function(t,n){return function(){this.setAttribute(t,n)}})(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?function(t){return function(){this.style.removeProperty(t)}}:"function"==typeof n?function(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}:function(t,n,e){return function(){this.style.setProperty(t,n,e)}})(t,n,null==e?"":e)):I(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?function(t){return function(){delete this[t]}}:"function"==typeof n?function(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}:function(t,n){return function(){this[t]=n}})(t,n)):this.node()[t]},classed:function(t,n){var e=Y(t+"");if(arguments.length<2){for(var r=B(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?function(t,n){return function(){(n.apply(this,arguments)?j:X)(this,t)}}:n?function(t){return function(){j(this,t)}}:function(t){return function(){X(this,t)}})(e,n))},text:function(t){return arguments.length?this.each(null==t?V:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}:function(t){return function(){this.textContent=t}})(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?$:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}:function(t){return function(){this.innerHTML=t}})(t)):this.node().innerHTML},raise:function(){return this.each(W)},lower:function(){return this.each(Z)},append:function(t){var n="function"==typeof t?t:A(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})},insert:function(t,n){var e="function"==typeof t?t:A(t),r=null==n?G:"function"==typeof n?n:z(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})},remove:function(){return this.each(Q)},clone:function(t){return this.select(t?K:J)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=function(t){return t.trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}})}(t+""),u=o.length;if(!(arguments.length<2)){for(a=n?rt:et,null==e&&(e=!1),r=0;r<u;++r)this.each(a(o[r],n,e));return this}var a=this.node().__on;if(a)for(var c,s=0,f=a.length;s<f;++s)for(r=0,c=a[s];r<u;++r)if((i=o[r]).type===c.type&&i.name===c.name)return c.value},dispatch:function(t,n){return this.each(("function"==typeof n?function(t,n){return function(){return ot(this,t,n.apply(this,arguments))}}:function(t,n){return function(){return ot(this,t,n)}})(t,n))}};var sf=0;ft.prototype=st.prototype={constructor:ft,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}},xt.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};var ff="\\s*([+-]?\\d+)\\s*",lf="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",hf="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",pf=/^#([0-9a-f]{3})$/,df=/^#([0-9a-f]{6})$/,vf=new RegExp("^rgb\\("+[ff,ff,ff]+"\\)$"),gf=new RegExp("^rgb\\("+[hf,hf,hf]+"\\)$"),_f=new RegExp("^rgba\\("+[ff,ff,ff,lf]+"\\)$"),yf=new RegExp("^rgba\\("+[hf,hf,hf,lf]+"\\)$"),mf=new RegExp("^hsl\\("+[lf,hf,hf]+"\\)$"),xf=new RegExp("^hsla\\("+[lf,hf,hf,lf]+"\\)$"),bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Nt(St,Et,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}}),Nt(Rt,Pt,kt(St,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new Rt(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Rt(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}})),Nt(Dt,qt,kt(St,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new Dt(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Dt(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new Rt(Ut(t>=240?t-240:t+120,i,r),Ut(t,i,r),Ut(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));var wf=Math.PI/180,Mf=180/Math.PI,Tf=.95047,Nf=1,kf=1.08883,Sf=4/29,Ef=6/29,Af=3*Ef*Ef,Cf=Ef*Ef*Ef;Nt(It,Ft,kt(St,{brighter:function(t){return new It(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new It(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200;return t=Nf*Bt(t),n=Tf*Bt(n),e=kf*Bt(e),new Rt(Ht(3.2404542*n-1.5371385*t-.4985314*e),Ht(-.969266*n+1.8760108*t+.041556*e),Ht(.0556434*n-.2040259*t+1.0572252*e),this.opacity)}})),Nt(Vt,Xt,kt(St,{brighter:function(t){return new Vt(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new Vt(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return Ot(this).rgb()}}));var zf=-.29227,Pf=-.90649,Rf=1.97294,Lf=Rf*Pf,qf=1.78277*Rf,Df=1.78277*zf- -.14861*Pf;Nt(Wt,$t,kt(St,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new Wt(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Wt(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*wf,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(t),i=Math.sin(t);return new Rt(255*(n+e*(-.14861*r+1.78277*i)),255*(n+e*(zf*r+Pf*i)),255*(n+e*(Rf*r)),this.opacity)}}));var Uf,Of,Ff,If,Yf,Bf,Hf=function t(n){function e(t,n){var e=r((t=Pt(t)).r,(n=Pt(n)).r),i=r(t.g,n.g),o=r(t.b,n.b),u=en(t.opacity,n.opacity);return function(n){return t.r=e(n),t.g=i(n),t.b=o(n),t.opacity=u(n),t+""}}var r=nn(n);return e.gamma=t,e}(1),jf=rn(Gt),Xf=rn(Qt),Vf=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,$f=new RegExp(Vf.source,"g"),Wf=180/Math.PI,Zf={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1},Gf=pn(function(t){return"none"===t?Zf:(Uf||(Uf=document.createElement("DIV"),Of=document.documentElement,Ff=document.defaultView),Uf.style.transform=t,t=Ff.getComputedStyle(Of.appendChild(Uf),null).getPropertyValue("transform"),Of.removeChild(Uf),t=t.slice(7,-1).split(","),hn(+t[0],+t[1],+t[2],+t[3],+t[4],+t[5]))},"px, ","px)","deg)"),Qf=pn(function(t){return null==t?Zf:(If||(If=document.createElementNS("http://www.w3.org/2000/svg","g")),If.setAttribute("transform",t),(t=If.transform.baseVal.consolidate())?(t=t.matrix,hn(t.a,t.b,t.c,t.d,t.e,t.f)):Zf)},", ",")",")"),Jf=Math.SQRT2,Kf=2,tl=4,nl=1e-12,el=gn(tn),rl=gn(en),il=_n(tn),ol=_n(en),ul=yn(tn),al=yn(en),cl=0,sl=0,fl=0,ll=1e3,hl=0,pl=0,dl=0,vl="object"==typeof performance&&performance.now?performance:Date,gl="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};bn.prototype=wn.prototype={constructor:bn,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function");e=(null==e?mn():+e)+(null==n?0:+n),this._next||Bf===this||(Bf?Bf._next=this:Yf=this,Bf=this),this._call=t,this._time=e,kn()},stop:function(){this._call&&(this._call=null,this._time=1/0,kn())}};var _l=N("start","end","interrupt"),yl=[],ml=0,xl=1,bl=2,wl=3,Ml=4,Tl=5,Nl=6,kl=at.prototype.constructor,Sl=0,El=at.prototype;qn.prototype=Dn.prototype={constructor:qn,select:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=z(t));for(var r=this._groups,i=r.length,o=new Array(i),u=0;u<i;++u)for(var a,c,s=r[u],f=s.length,l=o[u]=new Array(f),h=0;h<f;++h)(a=s[h])&&(c=t.call(a,a.__data__,h,s))&&("__data__"in a&&(c.__data__=a.__data__),l[h]=c,En(l[h],n,e,h,l,zn(a,e)));return new qn(o,this._parents,n,e)},selectAll:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=R(t));for(var r=this._groups,i=r.length,o=[],u=[],a=0;a<i;++a)for(var c,s=r[a],f=s.length,l=0;l<f;++l)if(c=s[l]){for(var h,p=t.call(c,c.__data__,l,s),d=zn(c,e),v=0,g=p.length;v<g;++v)(h=p[v])&&En(h,n,e,v,p,d);o.push(p),u.push(c)}return new qn(o,u,n,e)},filter:function(t){"function"!=typeof t&&(t=of(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u=n[i],a=u.length,c=r[i]=[],s=0;s<a;++s)(o=u[s])&&t.call(o,o.__data__,s,u)&&c.push(o);return new qn(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),u=new Array(r),a=0;a<o;++a)for(var c,s=n[a],f=e[a],l=s.length,h=u[a]=new Array(l),p=0;p<l;++p)(c=s[p]||f[p])&&(h[p]=c);for(;a<r;++a)u[a]=n[a];return new qn(u,this._parents,this._name,this._id)},selection:function(){return new kl(this._groups,this._parents)},transition:function(){for(var t=this._name,n=this._id,e=Un(),r=this._groups,i=r.length,o=0;o<i;++o)for(var u,a=r[o],c=a.length,s=0;s<c;++s)if(u=a[s]){var f=zn(u,n);En(u,t,e,s,a,{time:f.time+f.delay+f.duration,delay:0,duration:f.duration,ease:f.ease})}return new qn(r,this._parents,t,e)},call:El.call,nodes:El.nodes,node:El.node,size:El.size,empty:El.empty,each:El.each,on:function(t,n){var e=this._id;return arguments.length<2?zn(this.node(),e).on.on(t):this.each(function(t,n,e){var r,i,o=function(t){return(t+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t})}(n)?An:Cn;return function(){var u=o(this,t),a=u.on;a!==r&&(i=(r=a).copy()).on(n,e),u.on=i}}(e,t,n))},attr:function(t,n){var e=E(t),r="transform"===e?Qf:Ln;return this.attrTween(t,"function"==typeof n?(e.local?function(t,n,e){var r,i,o;return function(){var u,a=e(this);if(null!=a)return(u=this.getAttributeNS(t.space,t.local))===a?null:u===r&&a===i?o:o=n(r=u,i=a);this.removeAttributeNS(t.space,t.local)}}:function(t,n,e){var r,i,o;return function(){var u,a=e(this);if(null!=a)return(u=this.getAttribute(t))===a?null:u===r&&a===i?o:o=n(r=u,i=a);this.removeAttribute(t)}})(e,r,Rn(this,"attr."+t,n)):null==n?(e.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}})(e):(e.local?function(t,n,e){var r,i;return function(){var o=this.getAttributeNS(t.space,t.local);return o===e?null:o===r?i:i=n(r=o,e)}}:function(t,n,e){var r,i;return function(){var o=this.getAttribute(t);return o===e?null:o===r?i:i=n(r=o,e)}})(e,r,n+""))},attrTween:function(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!=typeof n)throw new Error;var r=E(t);return this.tween(e,(r.local?function(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttributeNS(t.space,t.local,r(n))}}return e._value=n,e}:function(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttribute(t,r(n))}}return e._value=n,e})(r,n))},style:function(t,n,e){var r="transform"==(t+="")?Gf:Ln;return null==n?this.styleTween(t,function(t,n){var e,r,i;return function(){var o=I(this,t),u=(this.style.removeProperty(t),I(this,t));return o===u?null:o===e&&u===r?i:i=n(e=o,r=u)}}(t,r)).on("end.style."+t,function(t){return function(){this.style.removeProperty(t)}}(t)):this.styleTween(t,"function"==typeof n?function(t,n,e){var r,i,o;return function(){var u=I(this,t),a=e(this);return null==a&&(this.style.removeProperty(t),a=I(this,t)),u===a?null:u===r&&a===i?o:o=n(r=u,i=a)}}(t,r,Rn(this,"style."+t,n)):function(t,n,e){var r,i;return function(){var o=I(this,t);return o===e?null:o===r?i:i=n(r=o,e)}}(t,r,n+""),e)},styleTween:function(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error;return this.tween(r,function(t,n,e){function r(){var r=this,i=n.apply(r,arguments);return i&&function(n){r.style.setProperty(t,i(n),e)}}return r._value=n,r}(t,n,null==e?"":e))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var n=t(this);this.textContent=null==n?"":n}}(Rn(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},remove:function(){return this.on("end.remove",function(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}(this._id))},tween:function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,i=zn(this.node(),e).tween,o=0,u=i.length;o<u;++o)if((r=i[o]).name===t)return r.value;return null}return this.each((null==n?function(t,n){var e,r;return function(){var i=Cn(this,t),o=i.tween;if(o!==e)for(var u=0,a=(r=e=o).length;u<a;++u)if(r[u].name===n){(r=r.slice()).splice(u,1);break}i.tween=r}}:function(t,n,e){var r,i;if("function"!=typeof e)throw new Error;return function(){var o=Cn(this,t),u=o.tween;if(u!==r){i=(r=u).slice();for(var a={name:n,value:e},c=0,s=i.length;c<s;++c)if(i[c].name===n){i[c]=a;break}c===s&&i.push(a)}o.tween=i}})(e,t,n))},delay:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?function(t,n){return function(){An(this,t).delay=+n.apply(this,arguments)}}:function(t,n){return n=+n,function(){An(this,t).delay=n}})(n,t)):zn(this.node(),n).delay},duration:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?function(t,n){return function(){Cn(this,t).duration=+n.apply(this,arguments)}}:function(t,n){return n=+n,function(){Cn(this,t).duration=n}})(n,t)):zn(this.node(),n).duration},ease:function(t){var n=this._id;return arguments.length?this.each(function(t,n){if("function"!=typeof n)throw new Error;return function(){Cn(this,t).ease=n}}(n,t)):zn(this.node(),n).ease}};var Al=function t(n){function e(t){return Math.pow(t,n)}return n=+n,e.exponent=t,e}(3),Cl=function t(n){function e(t){return 1-Math.pow(1-t,n)}return n=+n,e.exponent=t,e}(3),zl=function t(n){function e(t){return((t*=2)<=1?Math.pow(t,n):2-Math.pow(2-t,n))/2}return n=+n,e.exponent=t,e}(3),Pl=Math.PI,Rl=Pl/2,Ll=4/11,ql=6/11,Dl=8/11,Ul=.75,Ol=9/11,Fl=10/11,Il=.9375,Yl=21/22,Bl=63/64,Hl=1/Ll/Ll,jl=function t(n){function e(t){return t*t*((n+1)*t-n)}return n=+n,e.overshoot=t,e}(1.70158),Xl=function t(n){function e(t){return--t*t*((n+1)*t+n)+1}return n=+n,e.overshoot=t,e}(1.70158),Vl=function t(n){function e(t){return((t*=2)<1?t*t*((n+1)*t-n):(t-=2)*t*((n+1)*t+n)+2)/2}return n=+n,e.overshoot=t,e}(1.70158),$l=2*Math.PI,Wl=function t(n,e){function r(t){return n*Math.pow(2,10*--t)*Math.sin((i-t)/e)}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=$l);return r.amplitude=function(n){return t(n,e*$l)},r.period=function(e){return t(n,e)},r}(1,.3),Zl=function t(n,e){function r(t){return 1-n*Math.pow(2,-10*(t=+t))*Math.sin((t+i)/e)}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=$l);return r.amplitude=function(n){return t(n,e*$l)},r.period=function(e){return t(n,e)},r}(1,.3),Gl=function t(n,e){function r(t){return((t=2*t-1)<0?n*Math.pow(2,10*t)*Math.sin((i-t)/e):2-n*Math.pow(2,-10*t)*Math.sin((i+t)/e))/2}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=$l);return r.amplitude=function(n){return t(n,e*$l)},r.period=function(e){return t(n,e)},r}(1,.3),Ql={time:null,delay:0,duration:250,ease:Fn};at.prototype.interrupt=function(t){return this.each(function(){Pn(this,t)})},at.prototype.transition=function(t){var n,e;t instanceof qn?(n=t._id,t=t._name):(n=Un(),(e=Ql).time=mn(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var u,a=r[o],c=a.length,s=0;s<c;++s)(u=a[s])&&En(u,t,n,s,a,e||jn(u,n));return new qn(r,this._parents,t,n)};var Jl=[null],Kl={name:"drag"},th={name:"space"},nh={name:"handle"},eh={name:"center"},rh={name:"x",handles:["e","w"].map(Wn),input:function(t,n){return t&&[[t[0],n[0][1]],[t[1],n[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},ih={name:"y",handles:["n","s"].map(Wn),input:function(t,n){return t&&[[n[0][0],t[0]],[n[1][0],t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},oh={name:"xy",handles:["n","e","s","w","nw","ne","se","sw"].map(Wn),input:function(t){return t},output:function(t){return t}},uh={overlay:"crosshair",selection:"move",n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},ah={e:"w",w:"e",nw:"ne",ne:"nw",se:"sw",sw:"se"},ch={n:"s",s:"n",nw:"sw",ne:"se",se:"ne",sw:"nw"},sh={overlay:1,selection:1,n:null,e:1,s:null,w:-1,nw:-1,ne:1,se:1,sw:-1},fh={overlay:1,selection:1,n:-1,e:null,s:1,w:null,nw:-1,ne:-1,se:1,sw:1},lh=Math.cos,hh=Math.sin,ph=Math.PI,dh=ph/2,vh=2*ph,gh=Math.max,_h=Array.prototype.slice,yh=Math.PI,mh=2*yh,xh=mh-1e-6;ne.prototype=ee.prototype={constructor:ne,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,n,e,r,i){t=+t,n=+n,e=+e,r=+r,i=+i;var o=this._x1,u=this._y1,a=e-t,c=r-n,s=o-t,f=u-n,l=s*s+f*f;if(i<0)throw new Error("negative radius: "+i);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(l>1e-6)if(Math.abs(f*a-c*s)>1e-6&&i){var h=e-o,p=r-u,d=a*a+c*c,v=h*h+p*p,g=Math.sqrt(d),_=Math.sqrt(l),y=i*Math.tan((yh-Math.acos((d+l-v)/(2*g*_)))/2),m=y/_,x=y/g;Math.abs(m-1)>1e-6&&(this._+="L"+(t+m*s)+","+(n+m*f)),this._+="A"+i+","+i+",0,0,"+ +(f*h>s*p)+","+(this._x1=t+x*a)+","+(this._y1=n+x*c)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,e,r,i,o){t=+t,n=+n;var u=(e=+e)*Math.cos(r),a=e*Math.sin(r),c=t+u,s=n+a,f=1^o,l=o?r-i:i-r;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+c+","+s:(Math.abs(this._x1-c)>1e-6||Math.abs(this._y1-s)>1e-6)&&(this._+="L"+c+","+s),e&&(l<0&&(l=l%mh+mh),l>xh?this._+="A"+e+","+e+",0,1,"+f+","+(t-u)+","+(n-a)+"A"+e+","+e+",0,1,"+f+","+(this._x1=c)+","+(this._y1=s):l>1e-6&&(this._+="A"+e+","+e+",0,"+ +(l>=yh)+","+f+","+(this._x1=t+e*Math.cos(i))+","+(this._y1=n+e*Math.sin(i))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}};ce.prototype=se.prototype={constructor:ce,has:function(t){return"$"+t in this},get:function(t){return this["$"+t]},set:function(t,n){return this["$"+t]=n,this},remove:function(t){var n="$"+t;return n in this&&delete this[n]},clear:function(){for(var t in this)"$"===t[0]&&delete this[t]},keys:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(n.slice(1));return t},values:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(this[n]);return t},entries:function(){var t=[];for(var n in this)"$"===n[0]&&t.push({key:n.slice(1),value:this[n]});return t},size:function(){var t=0;for(var n in this)"$"===n[0]&&++t;return t},empty:function(){for(var t in this)if("$"===t[0])return!1;return!0},each:function(t){for(var n in this)"$"===n[0]&&t(this[n],n.slice(1),this)}};var bh=se.prototype;de.prototype=ve.prototype={constructor:de,has:bh.has,add:function(t){return t+="",this["$"+t]=t,this},remove:bh.remove,clear:bh.clear,values:bh.keys,size:bh.size,empty:bh.empty,each:bh.each};var wh={},Mh={},Th=34,Nh=10,kh=13,Sh=_e(","),Eh=Sh.parse,Ah=Sh.parseRows,Ch=Sh.format,zh=Sh.formatRows,Ph=_e("\t"),Rh=Ph.parse,Lh=Ph.parseRows,qh=Ph.format,Dh=Ph.formatRows,Uh=Te.prototype=Ne.prototype;Uh.copy=function(){var t,n,e=new Ne(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root;if(!r)return e;if(!r.length)return e._root=ke(r),e;for(t=[{source:r,target:e._root=new Array(4)}];r=t.pop();)for(var i=0;i<4;++i)(n=r.source[i])&&(n.length?t.push({source:n,target:r.target[i]=new Array(4)}):r.target[i]=ke(n));return e},Uh.add=function(t){var n=+this._x.call(null,t),e=+this._y.call(null,t);return xe(this.cover(n,e),n,e,t)},Uh.addAll=function(t){var n,e,r,i,o=t.length,u=new Array(o),a=new Array(o),c=1/0,s=1/0,f=-1/0,l=-1/0;for(e=0;e<o;++e)isNaN(r=+this._x.call(null,n=t[e]))||isNaN(i=+this._y.call(null,n))||(u[e]=r,a[e]=i,r<c&&(c=r),r>f&&(f=r),i<s&&(s=i),i>l&&(l=i));for(f<c&&(c=this._x0,f=this._x1),l<s&&(s=this._y0,l=this._y1),this.cover(c,s).cover(f,l),e=0;e<o;++e)xe(this,u[e],a[e],t[e]);return this},Uh.cover=function(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this;var e=this._x0,r=this._y0,i=this._x1,o=this._y1;if(isNaN(e))i=(e=Math.floor(t))+1,o=(r=Math.floor(n))+1;else{if(!(e>t||t>i||r>n||n>o))return this;var u,a,c=i-e,s=this._root;switch(a=(n<(r+o)/2)<<1|t<(e+i)/2){case 0:do{u=new Array(4),u[a]=s,s=u}while(c*=2,i=e+c,o=r+c,t>i||n>o);break;case 1:do{u=new Array(4),u[a]=s,s=u}while(c*=2,e=i-c,o=r+c,e>t||n>o);break;case 2:do{u=new Array(4),u[a]=s,s=u}while(c*=2,i=e+c,r=o-c,t>i||r>n);break;case 3:do{u=new Array(4),u[a]=s,s=u}while(c*=2,e=i-c,r=o-c,e>t||r>n)}this._root&&this._root.length&&(this._root=s)}return this._x0=e,this._y0=r,this._x1=i,this._y1=o,this},Uh.data=function(){var t=[];return this.visit(function(n){if(!n.length)do{t.push(n.data)}while(n=n.next)}),t},Uh.extent=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},Uh.find=function(t,n,e){var r,i,o,u,a,c,s,f=this._x0,l=this._y0,h=this._x1,p=this._y1,d=[],v=this._root;for(v&&d.push(new be(v,f,l,h,p)),null==e?e=1/0:(f=t-e,l=n-e,h=t+e,p=n+e,e*=e);c=d.pop();)if(!(!(v=c.node)||(i=c.x0)>h||(o=c.y0)>p||(u=c.x1)<f||(a=c.y1)<l))if(v.length){var g=(i+u)/2,_=(o+a)/2;d.push(new be(v[3],g,_,u,a),new be(v[2],i,_,g,a),new be(v[1],g,o,u,_),new be(v[0],i,o,g,_)),(s=(n>=_)<<1|t>=g)&&(c=d[d.length-1],d[d.length-1]=d[d.length-1-s],d[d.length-1-s]=c)}else{var y=t-+this._x.call(null,v.data),m=n-+this._y.call(null,v.data),x=y*y+m*m;if(x<e){var b=Math.sqrt(e=x);f=t-b,l=n-b,h=t+b,p=n+b,r=v.data}}return r},Uh.remove=function(t){if(isNaN(o=+this._x.call(null,t))||isNaN(u=+this._y.call(null,t)))return this;var n,e,r,i,o,u,a,c,s,f,l,h,p=this._root,d=this._x0,v=this._y0,g=this._x1,_=this._y1;if(!p)return this;if(p.length)for(;;){if((s=o>=(a=(d+g)/2))?d=a:g=a,(f=u>=(c=(v+_)/2))?v=c:_=c,n=p,!(p=p[l=f<<1|s]))return this;if(!p.length)break;(n[l+1&3]||n[l+2&3]||n[l+3&3])&&(e=n,h=l)}for(;p.data!==t;)if(r=p,!(p=p.next))return this;return(i=p.next)&&delete p.next,r?(i?r.next=i:delete r.next,this):n?(i?n[l]=i:delete n[l],(p=n[0]||n[1]||n[2]||n[3])&&p===(n[3]||n[2]||n[1]||n[0])&&!p.length&&(e?e[h]=p:this._root=p),this):(this._root=i,this)},Uh.removeAll=function(t){for(var n=0,e=t.length;n<e;++n)this.remove(t[n]);return this},Uh.root=function(){return this._root},Uh.size=function(){var t=0;return this.visit(function(n){if(!n.length)do{++t}while(n=n.next)}),t},Uh.visit=function(t){var n,e,r,i,o,u,a=[],c=this._root;for(c&&a.push(new be(c,this._x0,this._y0,this._x1,this._y1));n=a.pop();)if(!t(c=n.node,r=n.x0,i=n.y0,o=n.x1,u=n.y1)&&c.length){var s=(r+o)/2,f=(i+u)/2;(e=c[3])&&a.push(new be(e,s,f,o,u)),(e=c[2])&&a.push(new be(e,r,f,s,u)),(e=c[1])&&a.push(new be(e,s,i,o,f)),(e=c[0])&&a.push(new be(e,r,i,s,f))}return this},Uh.visitAfter=function(t){var n,e=[],r=[];for(this._root&&e.push(new be(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var i=n.node;if(i.length){var o,u=n.x0,a=n.y0,c=n.x1,s=n.y1,f=(u+c)/2,l=(a+s)/2;(o=i[0])&&e.push(new be(o,u,a,f,l)),(o=i[1])&&e.push(new be(o,f,a,c,l)),(o=i[2])&&e.push(new be(o,u,l,f,s)),(o=i[3])&&e.push(new be(o,f,l,c,s))}r.push(n)}for(;n=r.pop();)t(n.node,n.x0,n.y0,n.x1,n.y1);return this},Uh.x=function(t){return arguments.length?(this._x=t,this):this._x},Uh.y=function(t){return arguments.length?(this._y=t,this):this._y};var Oh,Fh=10,Ih=Math.PI*(3-Math.sqrt(5)),Yh={"":function(t,n){t:for(var e,r=(t=t.toPrecision(n)).length,i=1,o=-1;i<r;++i)switch(t[i]){case".":o=e=i;break;case"0":0===o&&(o=i),e=i;break;case"e":break t;default:o>0&&(o=0)}return o>0?t.slice(0,o)+t.slice(e+1):t},"%":function(t,n){return(100*t).toFixed(n)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},g:function(t,n){return t.toPrecision(n)},o:function(t){return Math.round(t).toString(8)},p:function(t,n){return qe(100*t,n)},r:qe,s:function(t,n){var e=Re(t,n);if(!e)return t+"";var r=e[0],i=e[1],o=i-(Oh=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,u=r.length;return o===u?r:o>u?r+new Array(o-u+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+Re(t,Math.max(0,n+o-1))[0]},X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}},Bh=/^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;De.prototype=Ue.prototype,Ue.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(null==this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(null==this.precision?"":"."+Math.max(0,0|this.precision))+this.type};var Hh,jh=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];Ie({decimal:".",thousands:",",grouping:[3],currency:["$",""]}),Xe.prototype={constructor:Xe,reset:function(){this.s=this.t=0},add:function(t){Ve(wp,t,this.t),Ve(this,wp.s,this.s),this.s?this.t+=wp.t:this.s=wp.t},valueOf:function(){return this.s}};var Xh,Vh,$h,Wh,Zh,Gh,Qh,Jh,Kh,tp,np,ep,rp,ip,op,up,ap,cp,sp,fp,lp,hp,pp,dp,vp,gp,_p,yp,mp,xp,bp,wp=new Xe,Mp=1e-6,Tp=1e-12,Np=Math.PI,kp=Np/2,Sp=Np/4,Ep=2*Np,Ap=180/Np,Cp=Np/180,zp=Math.abs,Pp=Math.atan,Rp=Math.atan2,Lp=Math.cos,qp=Math.ceil,Dp=Math.exp,Up=Math.log,Op=Math.pow,Fp=Math.sin,Ip=Math.sign||function(t){return t>0?1:t<0?-1:0},Yp=Math.sqrt,Bp=Math.tan,Hp={Feature:function(t,n){Qe(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)Qe(e[r].geometry,n)}},jp={Sphere:function(t,n){n.sphere()},Point:function(t,n){t=t.coordinates,n.point(t[0],t[1],t[2])},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)t=e[r],n.point(t[0],t[1],t[2])},LineString:function(t,n){Je(t.coordinates,n,0)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)Je(e[r],n,0)},Polygon:function(t,n){Ke(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)Ke(e[r],n)},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)Qe(e[r],n)}},Xp=je(),Vp=je(),$p={point:Ge,lineStart:Ge,lineEnd:Ge,polygonStart:function(){Xp.reset(),$p.lineStart=nr,$p.lineEnd=er},polygonEnd:function(){var t=+Xp;Vp.add(t<0?Ep+t:t),this.lineStart=this.lineEnd=this.point=Ge},sphere:function(){Vp.add(Ep)}},Wp=je(),Zp={point:hr,lineStart:dr,lineEnd:vr,polygonStart:function(){Zp.point=gr,Zp.lineStart=_r,Zp.lineEnd=yr,Wp.reset(),$p.polygonStart()},polygonEnd:function(){$p.polygonEnd(),Zp.point=hr,Zp.lineStart=dr,Zp.lineEnd=vr,Xp<0?(Gh=-(Jh=180),Qh=-(Kh=90)):Wp>Mp?Kh=90:Wp<-Mp&&(Qh=-90),op[0]=Gh,op[1]=Jh}},Gp={sphere:Ge,point:wr,lineStart:Tr,lineEnd:Sr,polygonStart:function(){Gp.lineStart=Er,Gp.lineEnd=Ar},polygonEnd:function(){Gp.lineStart=Tr,Gp.lineEnd=Sr}};Lr.invert=Lr;var Qp,Jp,Kp,td,nd,ed,rd,id,od,ud,ad,cd=je(),sd=Wr(function(){return!0},function(t){var n,e=NaN,r=NaN,i=NaN;return{lineStart:function(){t.lineStart(),n=1},point:function(o,u){var a=o>0?Np:-Np,c=zp(o-e);zp(c-Np)<Mp?(t.point(e,r=(r+u)/2>0?kp:-kp),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(a,r),t.point(o,r),n=0):i!==a&&c>=Np&&(zp(e-i)<Mp&&(e-=i*Mp),zp(o-a)<Mp&&(o-=a*Mp),r=function(t,n,e,r){var i,o,u=Fp(t-e);return zp(u)>Mp?Pp((Fp(n)*(o=Lp(r))*Fp(e)-Fp(r)*(i=Lp(n))*Fp(t))/(i*o*u)):(n+r)/2}(e,r,o,u),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(a,r),n=0),t.point(e=o,r=u),i=a},lineEnd:function(){t.lineEnd(),e=r=NaN},clean:function(){return 2-n}}},function(t,n,e,r){var i;if(null==t)i=e*kp,r.point(-Np,i),r.point(0,i),r.point(Np,i),r.point(Np,0),r.point(Np,-i),r.point(0,-i),r.point(-Np,-i),r.point(-Np,0),r.point(-Np,i);else if(zp(t[0]-n[0])>Mp){var o=t[0]<n[0]?Np:-Np;i=e*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)}else r.point(n[0],n[1])},[-Np,-kp]),fd=1e9,ld=-fd,hd=je(),pd={sphere:Ge,point:Ge,lineStart:function(){pd.point=ti,pd.lineEnd=Kr},lineEnd:Ge,polygonStart:Ge,polygonEnd:Ge},dd=[null,null],vd={type:"LineString",coordinates:dd},gd={Feature:function(t,n){return ii(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)if(ii(e[r].geometry,n))return!0;return!1}},_d={Sphere:function(){return!0},Point:function(t,n){return oi(t.coordinates,n)},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(oi(e[r],n))return!0;return!1},LineString:function(t,n){return ui(t.coordinates,n)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(ui(e[r],n))return!0;return!1},Polygon:function(t,n){return ai(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(ai(e[r],n))return!0;return!1},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)if(ii(e[r],n))return!0;return!1}},yd=je(),md=je(),xd={point:Ge,lineStart:Ge,lineEnd:Ge,polygonStart:function(){xd.lineStart=di,xd.lineEnd=_i},polygonEnd:function(){xd.lineStart=xd.lineEnd=xd.point=Ge,yd.add(zp(md)),md.reset()},result:function(){var t=yd/2;return yd.reset(),t}},bd=1/0,wd=bd,Md=-bd,Td=Md,Nd={point:function(t,n){t<bd&&(bd=t),t>Md&&(Md=t),n<wd&&(wd=n),n>Td&&(Td=n)},lineStart:Ge,lineEnd:Ge,polygonStart:Ge,polygonEnd:Ge,result:function(){var t=[[bd,wd],[Md,Td]];return Md=Td=-(wd=bd=1/0),t}},kd=0,Sd=0,Ed=0,Ad=0,Cd=0,zd=0,Pd=0,Rd=0,Ld=0,qd={point:yi,lineStart:mi,lineEnd:wi,polygonStart:function(){qd.lineStart=Mi,qd.lineEnd=Ti},polygonEnd:function(){qd.point=yi,qd.lineStart=mi,qd.lineEnd=wi},result:function(){var t=Ld?[Pd/Ld,Rd/Ld]:zd?[Ad/zd,Cd/zd]:Ed?[kd/Ed,Sd/Ed]:[NaN,NaN];return kd=Sd=Ed=Ad=Cd=zd=Pd=Rd=Ld=0,t}};Si.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._context.moveTo(t,n),this._point=1;break;case 1:this._context.lineTo(t,n);break;default:this._context.moveTo(t+this._radius,n),this._context.arc(t,n,this._radius,0,Ep)}},result:Ge};var Dd,Ud,Od,Fd,Id,Yd=je(),Bd={point:Ge,lineStart:function(){Bd.point=Ei},lineEnd:function(){Dd&&Ai(Ud,Od),Bd.point=Ge},polygonStart:function(){Dd=!0},polygonEnd:function(){Dd=null},result:function(){var t=+Yd;return Yd.reset(),t}};Ci.prototype={_radius:4.5,_circle:zi(4.5),pointRadius:function(t){return(t=+t)!==this._radius&&(this._radius=t,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._string.push("M",t,",",n),this._point=1;break;case 1:this._string.push("L",t,",",n);break;default:null==this._circle&&(this._circle=zi(this._radius)),this._string.push("M",t,",",n,this._circle)}},result:function(){if(this._string.length){var t=this._string.join("");return this._string=[],t}return null}},Ri.prototype={constructor:Ri,point:function(t,n){this.stream.point(t,n)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var Hd=16,jd=Lp(30*Cp),Xd=Pi({point:function(t,n){this.stream.point(t*Cp,n*Cp)}}),Vd=Vi(function(t){return Yp(2/(1+t))});Vd.invert=$i(function(t){return 2*We(t/2)});var $d=Vi(function(t){return(t=$e(t))&&t/Fp(t)});$d.invert=$i(function(t){return t}),Wi.invert=function(t,n){return[t,2*Pp(Dp(n))-kp]},Ji.invert=Ji,to.invert=$i(Pp),eo.invert=function(t,n){var e,r=n,i=25;do{var o=r*r,u=o*o;r-=e=(r*(1.007226+o*(.015085+u*(.028874*o-.044475-.005916*u)))-n)/(1.007226+o*(.045255+u*(.259866*o-.311325-.005916*11*u)))}while(zp(e)>Mp&&--i>0);return[t/(.8707+(o=r*r)*(o*(o*o*o*(.003971-.001529*o)-.013791)-.131979)),r]},ro.invert=$i(We),io.invert=$i(function(t){return 2*Pp(t)}),oo.invert=function(t,n){return[-n,2*Pp(Dp(t))-kp]},vo.prototype=fo.prototype={constructor:vo,count:function(){return this.eachAfter(so)},each:function(t){var n,e,r,i,o=this,u=[o];do{for(n=u.reverse(),u=[];o=n.pop();)if(t(o),e=o.children)for(r=0,i=e.length;r<i;++r)u.push(e[r])}while(u.length);return this},eachAfter:function(t){for(var n,e,r,i=this,o=[i],u=[];i=o.pop();)if(u.push(i),n=i.children)for(e=0,r=n.length;e<r;++e)o.push(n[e]);for(;i=u.pop();)t(i);return this},eachBefore:function(t){for(var n,e,r=this,i=[r];r=i.pop();)if(t(r),n=r.children)for(e=n.length-1;e>=0;--e)i.push(n[e]);return this},sum:function(t){return this.eachAfter(function(n){for(var e=+t(n.data)||0,r=n.children,i=r&&r.length;--i>=0;)e+=r[i].value;n.value=e})},sort:function(t){return this.eachBefore(function(n){n.children&&n.children.sort(t)})},path:function(t){for(var n=this,e=function(t,n){if(t===n)return t;var e=t.ancestors(),r=n.ancestors(),i=null;for(t=e.pop(),n=r.pop();t===n;)i=t,t=e.pop(),n=r.pop();return i}(n,t),r=[n];n!==e;)n=n.parent,r.push(n);for(var i=r.length;t!==e;)r.splice(i,0,t),t=t.parent;return r},ancestors:function(){for(var t=this,n=[t];t=t.parent;)n.push(t);return n},descendants:function(){var t=[];return this.each(function(n){t.push(n)}),t},leaves:function(){var t=[];return this.eachBefore(function(n){n.children||t.push(n)}),t},links:function(){var t=this,n=[];return t.each(function(e){e!==t&&n.push({source:e.parent,target:e})}),n},copy:function(){return fo(this).eachBefore(ho)}};var Wd=Array.prototype.slice,Zd="$",Gd={depth:-1},Qd={};Ho.prototype=Object.create(vo.prototype);var Jd=(1+Math.sqrt(5))/2,Kd=function t(n){function e(t,e,r,i,o){Xo(n,t,e,r,i,o)}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(Jd),tv=function t(n){function e(t,e,r,i,o){if((u=t._squarify)&&u.ratio===n)for(var u,a,c,s,f,l=-1,h=u.length,p=t.value;++l<h;){for(c=(a=u[l]).children,s=a.value=0,f=c.length;s<f;++s)a.value+=c[s].value;a.dice?qo(a,e,r,i,r+=(o-r)*a.value/p):jo(a,e,r,e+=(i-e)*a.value/p,o),p-=a.value}else t._squarify=u=Xo(n,t,e,r,i,o),u.ratio=n}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(Jd),nv=[].slice,ev={};Zo.prototype=Ko.prototype={constructor:Zo,defer:function(t){if("function"!=typeof t)throw new Error("invalid callback");if(this._call)throw new Error("defer after await");if(null!=this._error)return this;var n=nv.call(arguments,1);return n.push(t),++this._waiting,this._tasks.push(n),Go(this),this},abort:function(){return null==this._error&&Qo(this,new Error("abort")),this},await:function(t){if("function"!=typeof t)throw new Error("invalid callback");if(this._call)throw new Error("multiple await");return this._call=function(n,e){t.apply(null,[n].concat(e))},Jo(this),this},awaitAll:function(t){if("function"!=typeof t)throw new Error("invalid callback");if(this._call)throw new Error("multiple await");return this._call=t,Jo(this),this}};var rv=function t(n){function e(t,e){return t=null==t?0:+t,e=null==e?1:+e,1===arguments.length?(e=t,t=0):e-=t,function(){return n()*e+t}}return e.source=t,e}(tu),iv=function t(n){function e(t,e){var r,i;return t=null==t?0:+t,e=null==e?1:+e,function(){var o;if(null!=r)o=r,r=null;else do{r=2*n()-1,o=2*n()-1,i=r*r+o*o}while(!i||i>1);return t+e*o*Math.sqrt(-2*Math.log(i)/i)}}return e.source=t,e}(tu),ov=function t(n){function e(){var t=iv.source(n).apply(this,arguments);return function(){return Math.exp(t())}}return e.source=t,e}(tu),uv=function t(n){function e(t){return function(){for(var e=0,r=0;r<t;++r)e+=n();return e}}return e.source=t,e}(tu),av=function t(n){function e(t){var e=uv.source(n)(t);return function(){return e()/t}}return e.source=t,e}(tu),cv=function t(n){function e(t){return function(){return-Math.log(1-n())/t}}return e.source=t,e}(tu),sv=eu("text/html",function(t){return document.createRange().createContextualFragment(t.responseText)}),fv=eu("application/json",function(t){return JSON.parse(t.responseText)}),lv=eu("text/plain",function(t){return t.responseText}),hv=eu("application/xml",function(t){var n=t.responseXML;if(!n)throw new Error("parse error");return n}),pv=ru("text/csv",Eh),dv=ru("text/tab-separated-values",Rh),vv=Array.prototype,gv=vv.map,_v=vv.slice,yv={name:"implicit"},mv=[0,1],xv=new Date,bv=new Date,wv=Cu(function(){},function(t,n){t.setTime(+t+n)},function(t,n){return n-t});wv.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?Cu(function(n){n.setTime(Math.floor(n/t)*t)},function(n,e){n.setTime(+n+e*t)},function(n,e){return(e-n)/t}):wv:null};var Mv=wv.range,Tv=6e4,Nv=6048e5,kv=Cu(function(t){t.setTime(1e3*Math.floor(t/1e3))},function(t,n){t.setTime(+t+1e3*n)},function(t,n){return(n-t)/1e3},function(t){return t.getUTCSeconds()}),Sv=kv.range,Ev=Cu(function(t){t.setTime(Math.floor(t/Tv)*Tv)},function(t,n){t.setTime(+t+n*Tv)},function(t,n){return(n-t)/Tv},function(t){return t.getMinutes()}),Av=Ev.range,Cv=Cu(function(t){var n=t.getTimezoneOffset()*Tv%36e5;n<0&&(n+=36e5),t.setTime(36e5*Math.floor((+t-n)/36e5)+n)},function(t,n){t.setTime(+t+36e5*n)},function(t,n){return(n-t)/36e5},function(t){return t.getHours()}),zv=Cv.range,Pv=Cu(function(t){t.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Tv)/864e5},function(t){return t.getDate()-1}),Rv=Pv.range,Lv=zu(0),qv=zu(1),Dv=zu(2),Uv=zu(3),Ov=zu(4),Fv=zu(5),Iv=zu(6),Yv=Lv.range,Bv=qv.range,Hv=Dv.range,jv=Uv.range,Xv=Ov.range,Vv=Fv.range,$v=Iv.range,Wv=Cu(function(t){t.setDate(1),t.setHours(0,0,0,0)},function(t,n){t.setMonth(t.getMonth()+n)},function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())},function(t){return t.getMonth()}),Zv=Wv.range,Gv=Cu(function(t){t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,n){t.setFullYear(t.getFullYear()+n)},function(t,n){return n.getFullYear()-t.getFullYear()},function(t){return t.getFullYear()});Gv.every=function(t){return isFinite(t=Math.floor(t))&&t>0?Cu(function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)},function(n,e){n.setFullYear(n.getFullYear()+e*t)}):null};var Qv=Gv.range,Jv=Cu(function(t){t.setUTCSeconds(0,0)},function(t,n){t.setTime(+t+n*Tv)},function(t,n){return(n-t)/Tv},function(t){return t.getUTCMinutes()}),Kv=Jv.range,tg=Cu(function(t){t.setUTCMinutes(0,0,0)},function(t,n){t.setTime(+t+36e5*n)},function(t,n){return(n-t)/36e5},function(t){return t.getUTCHours()}),ng=tg.range,eg=Cu(function(t){t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+n)},function(t,n){return(n-t)/864e5},function(t){return t.getUTCDate()-1}),rg=eg.range,ig=Pu(0),og=Pu(1),ug=Pu(2),ag=Pu(3),cg=Pu(4),sg=Pu(5),fg=Pu(6),lg=ig.range,hg=og.range,pg=ug.range,dg=ag.range,vg=cg.range,gg=sg.range,_g=fg.range,yg=Cu(function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCMonth(t.getUTCMonth()+n)},function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())},function(t){return t.getUTCMonth()}),mg=yg.range,xg=Cu(function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n)},function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()},function(t){return t.getUTCFullYear()});xg.every=function(t){return isFinite(t=Math.floor(t))&&t>0?Cu(function(n){n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)},function(n,e){n.setUTCFullYear(n.getUTCFullYear()+e*t)}):null};var bg,wg=xg.range,Mg={"-":"",_:" ",0:"0"},Tg=/^\s*\d+/,Ng=/^%/,kg=/[\\^$*+?|[\]().{}]/g;Ha({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});var Sg="%Y-%m-%dT%H:%M:%S.%LZ",Eg=Date.prototype.toISOString?function(t){return t.toISOString()}:t.utcFormat(Sg),Ag=+new Date("2000-01-01T00:00:00.000Z")?function(t){var n=new Date(t);return isNaN(n)?null:n}:t.utcParse(Sg),Cg=1e3,zg=60*Cg,Pg=60*zg,Rg=24*Pg,Lg=7*Rg,qg=30*Rg,Dg=365*Rg,Ug=$a("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),Og=$a("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"),Fg=$a("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"),Ig=$a("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"),Yg=al($t(300,.5,0),$t(-240,.5,1)),Bg=al($t(-100,.75,.35),$t(80,1.5,.8)),Hg=al($t(260,.75,.35),$t(80,1.5,.8)),jg=$t(),Xg=Wa($a("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),Vg=Wa($a("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),$g=Wa($a("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),Wg=Wa($a("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")),Zg=Math.abs,Gg=Math.atan2,Qg=Math.cos,Jg=Math.max,Kg=Math.min,t_=Math.sin,n_=Math.sqrt,e_=1e-12,r_=Math.PI,i_=r_/2,o_=2*r_;ic.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}};var u_=pc(oc);hc.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}};var a_=Array.prototype.slice,c_={draw:function(t,n){var e=Math.sqrt(n/r_);t.moveTo(e,0),t.arc(0,0,e,0,o_)}},s_={draw:function(t,n){var e=Math.sqrt(n/5)/2;t.moveTo(-3*e,-e),t.lineTo(-e,-e),t.lineTo(-e,-3*e),t.lineTo(e,-3*e),t.lineTo(e,-e),t.lineTo(3*e,-e),t.lineTo(3*e,e),t.lineTo(e,e),t.lineTo(e,3*e),t.lineTo(-e,3*e),t.lineTo(-e,e),t.lineTo(-3*e,e),t.closePath()}},f_=Math.sqrt(1/3),l_=2*f_,h_={draw:function(t,n){var e=Math.sqrt(n/l_),r=e*f_;t.moveTo(0,-e),t.lineTo(r,0),t.lineTo(0,e),t.lineTo(-r,0),t.closePath()}},p_=Math.sin(r_/10)/Math.sin(7*r_/10),d_=Math.sin(o_/10)*p_,v_=-Math.cos(o_/10)*p_,g_={draw:function(t,n){var e=Math.sqrt(.8908130915292852*n),r=d_*e,i=v_*e;t.moveTo(0,-e),t.lineTo(r,i);for(var o=1;o<5;++o){var u=o_*o/5,a=Math.cos(u),c=Math.sin(u);t.lineTo(c*e,-a*e),t.lineTo(a*r-c*i,c*r+a*i)}t.closePath()}},__={draw:function(t,n){var e=Math.sqrt(n),r=-e/2;t.rect(r,r,e,e)}},y_=Math.sqrt(3),m_={draw:function(t,n){var e=-Math.sqrt(n/(3*y_));t.moveTo(0,2*e),t.lineTo(-y_*e,-e),t.lineTo(y_*e,-e),t.closePath()}},x_=Math.sqrt(3)/2,b_=1/Math.sqrt(12),w_=3*(b_/2+1),M_={draw:function(t,n){var e=Math.sqrt(n/w_),r=e/2,i=e*b_,o=r,u=e*b_+e,a=-o,c=u;t.moveTo(r,i),t.lineTo(o,u),t.lineTo(a,c),t.lineTo(-.5*r-x_*i,x_*r+-.5*i),t.lineTo(-.5*o-x_*u,x_*o+-.5*u),t.lineTo(-.5*a-x_*c,x_*a+-.5*c),t.lineTo(-.5*r+x_*i,-.5*i-x_*r),t.lineTo(-.5*o+x_*u,-.5*u-x_*o),t.lineTo(-.5*a+x_*c,-.5*c-x_*a),t.closePath()}},T_=[c_,s_,h_,__,g_,m_,M_];kc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Nc(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Nc(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},Sc.prototype={areaStart:Tc,areaEnd:Tc,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n;break;case 1:this._point=2,this._x3=t,this._y3=n;break;case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6);break;default:Nc(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},Ec.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var e=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(e,r):this._context.moveTo(e,r);break;case 3:this._point=4;default:Nc(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},Ac.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,n=this._y,e=t.length-1;if(e>0)for(var r,i=t[0],o=n[0],u=t[e]-i,a=n[e]-o,c=-1;++c<=e;)r=c/e,this._basis.point(this._beta*t[c]+(1-this._beta)*(i+r*u),this._beta*n[c]+(1-this._beta)*(o+r*a));this._x=this._y=null,this._basis.lineEnd()},point:function(t,n){this._x.push(+t),this._y.push(+n)}};var N_=function t(n){function e(t){return 1===n?new kc(t):new Ac(t,n)}return e.beta=function(n){return t(+n)},e}(.85);zc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:Cc(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:Cc(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var k_=function t(n){function e(t){return new zc(t,n)}return e.tension=function(n){return t(+n)},e}(0);Pc.prototype={areaStart:Tc,areaEnd:Tc,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:Cc(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var S_=function t(n){function e(t){return new Pc(t,n)}return e.tension=function(n){return t(+n)},e}(0);Rc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Cc(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var E_=function t(n){function e(t){return new Rc(t,n)}return e.tension=function(n){return t(+n)},e}(0);qc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;default:Lc(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var A_=function t(n){function e(t){return n?new qc(t,n):new zc(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);Dc.prototype={areaStart:Tc,areaEnd:Tc,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:Lc(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var C_=function t(n){function e(t){return n?new Dc(t,n):new Pc(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);Uc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Lc(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var z_=function t(n){function e(t){return n?new Uc(t,n):new Rc(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);Oc.prototype={areaStart:Tc,areaEnd:Tc,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n))}},Hc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Bc(this,this._t0,Yc(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var e=NaN;if(t=+t,n=+n,t!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,Bc(this,Yc(this,e=Ic(this,t,n)),e);break;default:Bc(this,this._t0,e=Ic(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e}}},(jc.prototype=Object.create(Hc.prototype)).point=function(t,n){Hc.prototype.point.call(this,n,t)},Xc.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,e,r,i,o){this._context.bezierCurveTo(n,t,r,e,o,i)}},Vc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,e=t.length;if(e)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===e)this._context.lineTo(t[1],n[1]);else for(var r=$c(t),i=$c(n),o=0,u=1;u<e;++o,++u)this._context.bezierCurveTo(r[0][o],i[0][o],r[1][o],i[1][o],t[u],n[u]);(this._line||0!==this._line&&1===e)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}},Wc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else{var e=this._x*(1-this._t)+t*this._t;this._context.lineTo(e,this._y),this._context.lineTo(e,n)}}this._x=t,this._y=n}},rs.prototype={constructor:rs,insert:function(t,n){var e,r,i;if(t){if(n.P=t,n.N=t.N,t.N&&(t.N.P=n),t.N=n,t.R){for(t=t.R;t.L;)t=t.L;t.L=n}else t.R=n;e=t}else this._?(t=as(this._),n.P=null,n.N=t,t.P=t.L=n,e=t):(n.P=n.N=null,this._=n,e=null);for(n.L=n.R=null,n.U=e,n.C=!0,t=n;e&&e.C;)e===(r=e.U).L?(i=r.R)&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.R&&(os(this,e),e=(t=e).U),e.C=!1,r.C=!0,us(this,r)):(i=r.L)&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.L&&(us(this,e),e=(t=e).U),e.C=!1,r.C=!0,os(this,r)),e=t.U;this._.C=!1},remove:function(t){t.N&&(t.N.P=t.P),t.P&&(t.P.N=t.N),t.N=t.P=null;var n,e,r,i=t.U,o=t.L,u=t.R;if(e=o?u?as(u):o:u,i?i.L===t?i.L=e:i.R=e:this._=e,o&&u?(r=e.C,e.C=t.C,e.L=o,o.U=e,e!==u?(i=e.U,e.U=t.U,t=e.R,i.L=t,e.R=u,u.U=e):(e.U=i,i=e,t=e.R)):(r=t.C,t=e),t&&(t.U=i),!r)if(t&&t.C)t.C=!1;else{do{if(t===this._)break;if(t===i.L){if((n=i.R).C&&(n.C=!1,i.C=!0,os(this,i),n=i.R),n.L&&n.L.C||n.R&&n.R.C){n.R&&n.R.C||(n.L.C=!1,n.C=!0,us(this,n),n=i.R),n.C=i.C,i.C=n.R.C=!1,os(this,i),t=this._;break}}else if((n=i.L).C&&(n.C=!1,i.C=!0,us(this,i),n=i.L),n.L&&n.L.C||n.R&&n.R.C){n.L&&n.L.C||(n.R.C=!1,n.C=!0,os(this,n),n=i.L),n.C=i.C,i.C=n.L.C=!1,us(this,i),t=this._;break}n.C=!0,t=i,i=i.U}while(!t.C);t&&(t.C=!1)}}};var P_,R_,L_,q_,D_,U_=[],O_=[],F_=1e-6,I_=1e-12;Ns.prototype={constructor:Ns,polygons:function(){var t=this.edges;return this.cells.map(function(n){var e=n.halfedges.map(function(e){return ds(n,t[e])});return e.data=n.site.data,e})},triangles:function(){var t=[],n=this.edges;return this.cells.forEach(function(e,r){if(o=(i=e.halfedges).length)for(var i,o,u,a=e.site,c=-1,s=n[i[o-1]],f=s.left===a?s.right:s.left;++c<o;)u=f,f=(s=n[i[c]]).left===a?s.right:s.left,u&&f&&r<u.index&&r<f.index&&Ms(a,u,f)<0&&t.push([a.data,u.data,f.data])}),t},links:function(){return this.edges.filter(function(t){return t.right}).map(function(t){return{source:t.left.data,target:t.right.data}})},find:function(t,n,e){for(var r,i,o=this,u=o._found||0,a=o.cells.length;!(i=o.cells[u]);)if(++u>=a)return null;var c=t-i.site[0],s=n-i.site[1],f=c*c+s*s;do{i=o.cells[r=u],u=null,i.halfedges.forEach(function(e){var r=o.edges[e],a=r.left;if(a!==i.site&&a||(a=r.right)){var c=t-a[0],s=n-a[1],l=c*c+s*s;l<f&&(f=l,u=a.index)}})}while(null!==u);return o._found=r,null==e||f<=e*e?i.site:null}},Ss.prototype={constructor:Ss,scale:function(t){return 1===t?this:new Ss(this.k*t,this.x,this.y)},translate:function(t,n){return 0===t&0===n?this:new Ss(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Y_=new Ss(1,0,0);Es.prototype=Ss.prototype,t.version="4.13.0",t.bisect=Os,t.bisectRight=Os,t.bisectLeft=Fs,t.ascending=n,t.bisector=e,t.cross=function(t,n,e){var i,o,u,a,c=t.length,s=n.length,f=new Array(c*s);for(null==e&&(e=r),i=u=0;i<c;++i)for(a=t[i],o=0;o<s;++o,++u)f[u]=e(a,n[o]);return f},t.descending=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN},t.deviation=u,t.extent=a,t.histogram=function(){function t(t){var i,o,u=t.length,a=new Array(u);for(i=0;i<u;++i)a[i]=n(t[i],i,t);var c=e(a),s=c[0],l=c[1],h=r(a,s,l);Array.isArray(h)||(h=p(s,l,h),h=f(Math.ceil(s/h)*h,Math.floor(l/h)*h,h));for(var d=h.length;h[0]<=s;)h.shift(),--d;for(;h[d-1]>l;)h.pop(),--d;var v,g=new Array(d+1);for(i=0;i<=d;++i)(v=g[i]=[]).x0=i>0?h[i-1]:s,v.x1=i<d?h[i]:l;for(i=0;i<u;++i)s<=(o=a[i])&&o<=l&&g[Os(h,o,0,d)].push(t[i]);return g}var n=s,e=a,r=d;return t.value=function(e){return arguments.length?(n="function"==typeof e?e:c(e),t):n},t.domain=function(n){return arguments.length?(e="function"==typeof n?n:c([n[0],n[1]]),t):e},t.thresholds=function(n){return arguments.length?(r="function"==typeof n?n:Array.isArray(n)?c(Ys.call(n)):c(n),t):r},t},t.thresholdFreedmanDiaconis=function(t,e,r){return t=Bs.call(t,i).sort(n),Math.ceil((r-e)/(2*(v(t,.75)-v(t,.25))*Math.pow(t.length,-1/3)))},t.thresholdScott=function(t,n,e){return Math.ceil((e-n)/(3.5*u(t)*Math.pow(t.length,-1/3)))},t.thresholdSturges=d,t.max=function(t,n){var e,r,i=t.length,o=-1;if(null==n){for(;++o<i;)if(null!=(e=t[o])&&e>=e)for(r=e;++o<i;)null!=(e=t[o])&&e>r&&(r=e)}else for(;++o<i;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=e;++o<i;)null!=(e=n(t[o],o,t))&&e>r&&(r=e);return r},t.mean=function(t,n){var e,r=t.length,o=r,u=-1,a=0;if(null==n)for(;++u<r;)isNaN(e=i(t[u]))?--o:a+=e;else for(;++u<r;)isNaN(e=i(n(t[u],u,t)))?--o:a+=e;if(o)return a/o},t.median=function(t,e){var r,o=t.length,u=-1,a=[];if(null==e)for(;++u<o;)isNaN(r=i(t[u]))||a.push(r);else for(;++u<o;)isNaN(r=i(e(t[u],u,t)))||a.push(r);return v(a.sort(n),.5)},t.merge=g,t.min=_,t.pairs=function(t,n){null==n&&(n=r);for(var e=0,i=t.length-1,o=t[0],u=new Array(i<0?0:i);e<i;)u[e]=n(o,o=t[++e]);return u},t.permute=function(t,n){for(var e=n.length,r=new Array(e);e--;)r[e]=t[n[e]];return r},t.quantile=v,t.range=f,t.scan=function(t,e){if(r=t.length){var r,i,o=0,u=0,a=t[u];for(null==e&&(e=n);++o<r;)(e(i=t[o],a)<0||0!==e(a,a))&&(a=i,u=o);return 0===e(a,a)?u:void 0}},t.shuffle=function(t,n,e){for(var r,i,o=(null==e?t.length:e)-(n=null==n?0:+n);o;)i=Math.random()*o--|0,r=t[o+n],t[o+n]=t[i+n],t[i+n]=r;return t},t.sum=function(t,n){var e,r=t.length,i=-1,o=0;if(null==n)for(;++i<r;)(e=+t[i])&&(o+=e);else for(;++i<r;)(e=+n(t[i],i,t))&&(o+=e);return o},t.ticks=l,t.tickIncrement=h,t.tickStep=p,t.transpose=y,t.variance=o,t.zip=function(){return y(arguments)},t.axisTop=function(t){return T($s,t)},t.axisRight=function(t){return T(Ws,t)},t.axisBottom=function(t){return T(Zs,t)},t.axisLeft=function(t){return T(Gs,t)},t.brush=function(){return Kn(oh)},t.brushX=function(){return Kn(rh)},t.brushY=function(){return Kn(ih)},t.brushSelection=function(t){var n=t.__brush;return n?n.dim.output(n.selection):null},t.chord=function(){function t(t){var o,u,a,c,s,l,h=t.length,p=[],d=f(h),v=[],g=[],_=g.groups=new Array(h),y=new Array(h*h);for(o=0,s=-1;++s<h;){for(u=0,l=-1;++l<h;)u+=t[s][l];p.push(u),v.push(f(h)),o+=u}for(e&&d.sort(function(t,n){return e(p[t],p[n])}),r&&v.forEach(function(n,e){n.sort(function(n,i){return r(t[e][n],t[e][i])})}),c=(o=gh(0,vh-n*h)/o)?n:vh/h,u=0,s=-1;++s<h;){for(a=u,l=-1;++l<h;){var m=d[s],x=v[m][l],b=t[m][x],w=u,M=u+=b*o;y[x*h+m]={index:m,subindex:x,startAngle:w,endAngle:M,value:b}}_[m]={index:m,startAngle:a,endAngle:u,value:p[m]},u+=c}for(s=-1;++s<h;)for(l=s-1;++l<h;){var T=y[l*h+s],N=y[s*h+l];(T.value||N.value)&&g.push(T.value<N.value?{source:N,target:T}:{source:T,target:N})}return i?g.sort(i):g}var n=0,e=null,r=null,i=null;return t.padAngle=function(e){return arguments.length?(n=gh(0,e),t):n},t.sortGroups=function(n){return arguments.length?(e=n,t):e},t.sortSubgroups=function(n){return arguments.length?(r=n,t):r},t.sortChords=function(n){return arguments.length?(null==n?i=null:(i=function(t){return function(n,e){return t(n.source.value+n.target.value,e.source.value+e.target.value)}}(n))._=n,t):i&&i._},t},t.ribbon=function(){function t(){var t,a=_h.call(arguments),c=n.apply(this,a),s=e.apply(this,a),f=+r.apply(this,(a[0]=c,a)),l=i.apply(this,a)-dh,h=o.apply(this,a)-dh,p=f*lh(l),d=f*hh(l),v=+r.apply(this,(a[0]=s,a)),g=i.apply(this,a)-dh,_=o.apply(this,a)-dh;if(u||(u=t=ee()),u.moveTo(p,d),u.arc(0,0,f,l,h),l===g&&h===_||(u.quadraticCurveTo(0,0,v*lh(g),v*hh(g)),u.arc(0,0,v,g,_)),u.quadraticCurveTo(0,0,p,d),u.closePath(),t)return u=null,t+""||null}var n=re,e=ie,r=oe,i=ue,o=ae,u=null;return t.radius=function(n){return arguments.length?(r="function"==typeof n?n:te(+n),t):r},t.startAngle=function(n){return arguments.length?(i="function"==typeof n?n:te(+n),t):i},t.endAngle=function(n){return arguments.length?(o="function"==typeof n?n:te(+n),t):o},t.source=function(e){return arguments.length?(n=e,t):n},t.target=function(n){return arguments.length?(e=n,t):e},t.context=function(n){return arguments.length?(u=null==n?null:n,t):u},t},t.nest=function(){function t(n,i,u,a){if(i>=o.length)return null!=e&&n.sort(e),null!=r?r(n):n;for(var c,s,f,l=-1,h=n.length,p=o[i++],d=se(),v=u();++l<h;)(f=d.get(c=p(s=n[l])+""))?f.push(s):d.set(c,[s]);return d.each(function(n,e){a(v,e,t(n,i,u,a))}),v}function n(t,e){if(++e>o.length)return t;var i,a=u[e-1];return null!=r&&e>=o.length?i=t.entries():(i=[],t.each(function(t,r){i.push({key:r,values:n(t,e)})})),null!=a?i.sort(function(t,n){return a(t.key,n.key)}):i}var e,r,i,o=[],u=[];return i={object:function(n){return t(n,0,fe,le)},map:function(n){return t(n,0,he,pe)},entries:function(e){return n(t(e,0,he,pe),0)},key:function(t){return o.push(t),i},sortKeys:function(t){return u[o.length-1]=t,i},sortValues:function(t){return e=t,i},rollup:function(t){return r=t,i}}},t.set=ve,t.map=se,t.keys=function(t){var n=[];for(var e in t)n.push(e);return n},t.values=function(t){var n=[];for(var e in t)n.push(t[e]);return n},t.entries=function(t){var n=[];for(var e in t)n.push({key:e,value:t[e]});return n},t.color=Et,t.rgb=Pt,t.hsl=qt,t.lab=Ft,t.hcl=Xt,t.cubehelix=$t,t.dispatch=N,t.drag=function(){function n(t){t.on("mousedown.drag",e).filter(g).on("touchstart.drag",o).on("touchmove.drag",u).on("touchend.drag touchcancel.drag",a).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function e(){if(!h&&p.apply(this,arguments)){var n=c("mouse",d.apply(this,arguments),pt,this,arguments);n&&(ct(t.event.view).on("mousemove.drag",r,!0).on("mouseup.drag",i,!0),_t(t.event.view),vt(),l=!1,s=t.event.clientX,f=t.event.clientY,n("start"))}}function r(){if(gt(),!l){var n=t.event.clientX-s,e=t.event.clientY-f;l=n*n+e*e>x}_.mouse("drag")}function i(){ct(t.event.view).on("mousemove.drag mouseup.drag",null),yt(t.event.view,l),gt(),_.mouse("end")}function o(){if(p.apply(this,arguments)){var n,e,r=t.event.changedTouches,i=d.apply(this,arguments),o=r.length;for(n=0;n<o;++n)(e=c(r[n].identifier,i,dt,this,arguments))&&(vt(),e("start"))}}function u(){var n,e,r=t.event.changedTouches,i=r.length;for(n=0;n<i;++n)(e=_[r[n].identifier])&&(gt(),e("drag"))}function a(){var n,e,r=t.event.changedTouches,i=r.length;for(h&&clearTimeout(h),h=setTimeout(function(){h=null},500),n=0;n<i;++n)(e=_[r[n].identifier])&&(vt(),e("end"))}function c(e,r,i,o,u){var a,c,s,f=i(r,e),l=y.copy();if(it(new xt(n,"beforestart",a,e,m,f[0],f[1],0,0,l),function(){return null!=(t.event.subject=a=v.apply(o,u))&&(c=a.x-f[0]||0,s=a.y-f[1]||0,!0)}))return function t(h){var p,d=f;switch(h){case"start":_[e]=t,p=m++;break;case"end":delete _[e],--m;case"drag":f=i(r,e),p=m}it(new xt(n,h,a,e,p,f[0]+c,f[1]+s,f[0]-d[0],f[1]-d[1],l),l.apply,l,[h,o,u])}}var s,f,l,h,p=bt,d=wt,v=Mt,g=Tt,_={},y=N("start","drag","end"),m=0,x=0;return n.filter=function(t){return arguments.length?(p="function"==typeof t?t:mt(!!t),n):p},n.container=function(t){return arguments.length?(d="function"==typeof t?t:mt(t),n):d},n.subject=function(t){return arguments.length?(v="function"==typeof t?t:mt(t),n):v},n.touchable=function(t){return arguments.length?(g="function"==typeof t?t:mt(!!t),n):g},n.on=function(){var t=y.on.apply(y,arguments);return t===y?n:t},n.clickDistance=function(t){return arguments.length?(x=(t=+t)*t,n):Math.sqrt(x)},n},t.dragDisable=_t,t.dragEnable=yt,t.dsvFormat=_e,t.csvParse=Eh,t.csvParseRows=Ah,t.csvFormat=Ch,t.csvFormatRows=zh,t.tsvParse=Rh,t.tsvParseRows=Lh,t.tsvFormat=qh,t.tsvFormatRows=Dh,t.easeLinear=function(t){return+t},t.easeQuad=On,t.easeQuadIn=function(t){return t*t},t.easeQuadOut=function(t){return t*(2-t)},t.easeQuadInOut=On,t.easeCubic=Fn,t.easeCubicIn=function(t){return t*t*t},t.easeCubicOut=function(t){return--t*t*t+1},t.easeCubicInOut=Fn,t.easePoly=zl,t.easePolyIn=Al,t.easePolyOut=Cl,t.easePolyInOut=zl,t.easeSin=In,t.easeSinIn=function(t){return 1-Math.cos(t*Rl)},t.easeSinOut=function(t){return Math.sin(t*Rl)},t.easeSinInOut=In,t.easeExp=Yn,t.easeExpIn=function(t){return Math.pow(2,10*t-10)},t.easeExpOut=function(t){return 1-Math.pow(2,-10*t)},t.easeExpInOut=Yn,t.easeCircle=Bn,t.easeCircleIn=function(t){return 1-Math.sqrt(1-t*t)},t.easeCircleOut=function(t){return Math.sqrt(1- --t*t)},t.easeCircleInOut=Bn,t.easeBounce=Hn,t.easeBounceIn=function(t){return 1-Hn(1-t)},t.easeBounceOut=Hn,t.easeBounceInOut=function(t){return((t*=2)<=1?1-Hn(1-t):Hn(t-1)+1)/2},t.easeBack=Vl,t.easeBackIn=jl,t.easeBackOut=Xl,t.easeBackInOut=Vl,t.easeElastic=Zl,t.easeElasticIn=Wl,t.easeElasticOut=Zl,t.easeElasticInOut=Gl,t.forceCenter=function(t,n){function e(){var e,i,o=r.length,u=0,a=0;for(e=0;e<o;++e)u+=(i=r[e]).x,a+=i.y;for(u=u/o-t,a=a/o-n,e=0;e<o;++e)(i=r[e]).x-=u,i.y-=a}var r;return null==t&&(t=0),null==n&&(n=0),e.initialize=function(t){r=t},e.x=function(n){return arguments.length?(t=+n,e):t},e.y=function(t){return arguments.length?(n=+t,e):n},e},t.forceCollide=function(t){function n(){for(var t,n,r,c,s,f,l,h=i.length,p=0;p<a;++p)for(n=Te(i,Se,Ee).visitAfter(e),t=0;t<h;++t)r=i[t],f=o[r.index],l=f*f,c=r.x+r.vx,s=r.y+r.vy,n.visit(function(t,n,e,i,o){var a=t.data,h=t.r,p=f+h;if(!a)return n>c+p||i<c-p||e>s+p||o<s-p;if(a.index>r.index){var d=c-a.x-a.vx,v=s-a.y-a.vy,g=d*d+v*v;g<p*p&&(0===d&&(d=me(),g+=d*d),0===v&&(v=me(),g+=v*v),g=(p-(g=Math.sqrt(g)))/g*u,r.vx+=(d*=g)*(p=(h*=h)/(l+h)),r.vy+=(v*=g)*p,a.vx-=d*(p=1-p),a.vy-=v*p)}})}function e(t){if(t.data)return t.r=o[t.data.index];for(var n=t.r=0;n<4;++n)t[n]&&t[n].r>t.r&&(t.r=t[n].r)}function r(){if(i){var n,e,r=i.length;for(o=new Array(r),n=0;n<r;++n)e=i[n],o[e.index]=+t(e,n,i)}}var i,o,u=1,a=1;return"function"!=typeof t&&(t=ye(null==t?1:+t)),n.initialize=function(t){i=t,r()},n.iterations=function(t){return arguments.length?(a=+t,n):a},n.strength=function(t){return arguments.length?(u=+t,n):u},n.radius=function(e){return arguments.length?(t="function"==typeof e?e:ye(+e),r(),n):t},n},t.forceLink=function(t){function n(n){for(var e=0,r=t.length;e<p;++e)for(var i,a,c,f,l,h,d,v=0;v<r;++v)a=(i=t[v]).source,f=(c=i.target).x+c.vx-a.x-a.vx||me(),l=c.y+c.vy-a.y-a.vy||me(),f*=h=((h=Math.sqrt(f*f+l*l))-u[v])/h*n*o[v],l*=h,c.vx-=f*(d=s[v]),c.vy-=l*d,a.vx+=f*(d=1-d),a.vy+=l*d}function e(){if(a){var n,e,l=a.length,h=t.length,p=se(a,f);for(n=0,c=new Array(l);n<h;++n)(e=t[n]).index=n,"object"!=typeof e.source&&(e.source=Ce(p,e.source)),"object"!=typeof e.target&&(e.target=Ce(p,e.target)),c[e.source.index]=(c[e.source.index]||0)+1,c[e.target.index]=(c[e.target.index]||0)+1;for(n=0,s=new Array(h);n<h;++n)e=t[n],s[n]=c[e.source.index]/(c[e.source.index]+c[e.target.index]);o=new Array(h),r(),u=new Array(h),i()}}function r(){if(a)for(var n=0,e=t.length;n<e;++n)o[n]=+l(t[n],n,t)}function i(){if(a)for(var n=0,e=t.length;n<e;++n)u[n]=+h(t[n],n,t)}var o,u,a,c,s,f=Ae,l=function(t){return 1/Math.min(c[t.source.index],c[t.target.index])},h=ye(30),p=1;return null==t&&(t=[]),n.initialize=function(t){a=t,e()},n.links=function(r){return arguments.length?(t=r,e(),n):t},n.id=function(t){return arguments.length?(f=t,n):f},n.iterations=function(t){return arguments.length?(p=+t,n):p},n.strength=function(t){return arguments.length?(l="function"==typeof t?t:ye(+t),r(),n):l},n.distance=function(t){return arguments.length?(h="function"==typeof t?t:ye(+t),i(),n):h},n},t.forceManyBody=function(){function t(t){var n,a=i.length,c=Te(i,ze,Pe).visitAfter(e);for(u=t,n=0;n<a;++n)o=i[n],c.visit(r)}function n(){if(i){var t,n,e=i.length;for(a=new Array(e),t=0;t<e;++t)n=i[t],a[n.index]=+c(n,t,i)}}function e(t){var n,e,r,i,o,u=0,c=0;if(t.length){for(r=i=o=0;o<4;++o)(n=t[o])&&(e=Math.abs(n.value))&&(u+=n.value,c+=e,r+=e*n.x,i+=e*n.y);t.x=r/c,t.y=i/c}else{(n=t).x=n.data.x,n.y=n.data.y;do{u+=a[n.data.index]}while(n=n.next)}t.value=u}function r(t,n,e,r){if(!t.value)return!0;var i=t.x-o.x,c=t.y-o.y,h=r-n,p=i*i+c*c;if(h*h/l<p)return p<f&&(0===i&&(i=me(),p+=i*i),0===c&&(c=me(),p+=c*c),p<s&&(p=Math.sqrt(s*p)),o.vx+=i*t.value*u/p,o.vy+=c*t.value*u/p),!0;if(!(t.length||p>=f)){(t.data!==o||t.next)&&(0===i&&(i=me(),p+=i*i),0===c&&(c=me(),p+=c*c),p<s&&(p=Math.sqrt(s*p)));do{t.data!==o&&(h=a[t.data.index]*u/p,o.vx+=i*h,o.vy+=c*h)}while(t=t.next)}}var i,o,u,a,c=ye(-30),s=1,f=1/0,l=.81;return t.initialize=function(t){i=t,n()},t.strength=function(e){return arguments.length?(c="function"==typeof e?e:ye(+e),n(),t):c},t.distanceMin=function(n){return arguments.length?(s=n*n,t):Math.sqrt(s)},t.distanceMax=function(n){return arguments.length?(f=n*n,t):Math.sqrt(f)},t.theta=function(n){return arguments.length?(l=n*n,t):Math.sqrt(l)},t},t.forceRadial=function(t,n,e){function r(t){for(var r=0,i=o.length;r<i;++r){var c=o[r],s=c.x-n||1e-6,f=c.y-e||1e-6,l=Math.sqrt(s*s+f*f),h=(a[r]-l)*u[r]*t/l;c.vx+=s*h,c.vy+=f*h}}function i(){if(o){var n,e=o.length;for(u=new Array(e),a=new Array(e),n=0;n<e;++n)a[n]=+t(o[n],n,o),u[n]=isNaN(a[n])?0:+c(o[n],n,o)}}var o,u,a,c=ye(.1);return"function"!=typeof t&&(t=ye(+t)),null==n&&(n=0),null==e&&(e=0),r.initialize=function(t){o=t,i()},r.strength=function(t){return arguments.length?(c="function"==typeof t?t:ye(+t),i(),r):c},r.radius=function(n){return arguments.length?(t="function"==typeof n?n:ye(+n),i(),r):t},r.x=function(t){return arguments.length?(n=+t,r):n},r.y=function(t){return arguments.length?(e=+t,r):e},r},t.forceSimulation=function(t){function n(){e(),p.call("tick",o),u<a&&(h.stop(),p.call("end",o))}function e(){var n,e,r=t.length;for(u+=(s-u)*c,l.each(function(t){t(u)}),n=0;n<r;++n)null==(e=t[n]).fx?e.x+=e.vx*=f:(e.x=e.fx,e.vx=0),null==e.fy?e.y+=e.vy*=f:(e.y=e.fy,e.vy=0)}function r(){for(var n,e=0,r=t.length;e<r;++e){if(n=t[e],n.index=e,isNaN(n.x)||isNaN(n.y)){var i=Fh*Math.sqrt(e),o=e*Ih;n.x=i*Math.cos(o),n.y=i*Math.sin(o)}(isNaN(n.vx)||isNaN(n.vy))&&(n.vx=n.vy=0)}}function i(n){return n.initialize&&n.initialize(t),n}var o,u=1,a=.001,c=1-Math.pow(a,1/300),s=0,f=.6,l=se(),h=wn(n),p=N("tick","end");return null==t&&(t=[]),r(),o={tick:e,restart:function(){return h.restart(n),o},stop:function(){return h.stop(),o},nodes:function(n){return arguments.length?(t=n,r(),l.each(i),o):t},alpha:function(t){return arguments.length?(u=+t,o):u},alphaMin:function(t){return arguments.length?(a=+t,o):a},alphaDecay:function(t){return arguments.length?(c=+t,o):+c},alphaTarget:function(t){return arguments.length?(s=+t,o):s},velocityDecay:function(t){return arguments.length?(f=1-t,o):1-f},force:function(t,n){return arguments.length>1?(null==n?l.remove(t):l.set(t,i(n)),o):l.get(t)},find:function(n,e,r){var i,o,u,a,c,s=0,f=t.length;for(null==r?r=1/0:r*=r,s=0;s<f;++s)(u=(i=n-(a=t[s]).x)*i+(o=e-a.y)*o)<r&&(c=a,r=u);return c},on:function(t,n){return arguments.length>1?(p.on(t,n),o):p.on(t)}}},t.forceX=function(t){function n(t){for(var n,e=0,u=r.length;e<u;++e)(n=r[e]).vx+=(o[e]-n.x)*i[e]*t}function e(){if(r){var n,e=r.length;for(i=new Array(e),o=new Array(e),n=0;n<e;++n)i[n]=isNaN(o[n]=+t(r[n],n,r))?0:+u(r[n],n,r)}}var r,i,o,u=ye(.1);return"function"!=typeof t&&(t=ye(null==t?0:+t)),n.initialize=function(t){r=t,e()},n.strength=function(t){return arguments.length?(u="function"==typeof t?t:ye(+t),e(),n):u},n.x=function(r){return arguments.length?(t="function"==typeof r?r:ye(+r),e(),n):t},n},t.forceY=function(t){function n(t){for(var n,e=0,u=r.length;e<u;++e)(n=r[e]).vy+=(o[e]-n.y)*i[e]*t}function e(){if(r){var n,e=r.length;for(i=new Array(e),o=new Array(e),n=0;n<e;++n)i[n]=isNaN(o[n]=+t(r[n],n,r))?0:+u(r[n],n,r)}}var r,i,o,u=ye(.1);return"function"!=typeof t&&(t=ye(null==t?0:+t)),n.initialize=function(t){r=t,e()},n.strength=function(t){return arguments.length?(u="function"==typeof t?t:ye(+t),e(),n):u},n.y=function(r){return arguments.length?(t="function"==typeof r?r:ye(+r),e(),n):t},n},t.formatDefaultLocale=Ie,t.formatLocale=Fe,t.formatSpecifier=De,t.precisionFixed=Ye,t.precisionPrefix=Be,t.precisionRound=He,t.geoArea=function(t){return Vp.reset(),tr(t,$p),2*Vp},t.geoBounds=function(t){var n,e,r,i,o,u,a;if(Kh=Jh=-(Gh=Qh=1/0),ip=[],tr(t,Zp),e=ip.length){for(ip.sort(xr),n=1,o=[r=ip[0]];n<e;++n)br(r,(i=ip[n])[0])||br(r,i[1])?(mr(r[0],i[1])>mr(r[0],r[1])&&(r[1]=i[1]),mr(i[0],r[1])>mr(r[0],r[1])&&(r[0]=i[0])):o.push(r=i);for(u=-1/0,n=0,r=o[e=o.length-1];n<=e;r=i,++n)i=o[n],(a=mr(r[1],i[0]))>u&&(u=a,Gh=i[0],Jh=r[1])}return ip=op=null,Gh===1/0||Qh===1/0?[[NaN,NaN],[NaN,NaN]]:[[Gh,Qh],[Jh,Kh]]},t.geoCentroid=function(t){up=ap=cp=sp=fp=lp=hp=pp=dp=vp=gp=0,tr(t,Gp);var n=dp,e=vp,r=gp,i=n*n+e*e+r*r;return i<Tp&&(n=lp,e=hp,r=pp,ap<Mp&&(n=cp,e=sp,r=fp),(i=n*n+e*e+r*r)<Tp)?[NaN,NaN]:[Rp(e,n)*Ap,We(r/Yp(i))*Ap]},t.geoCircle=function(){function t(){var t=r.apply(this,arguments),a=i.apply(this,arguments)*Cp,c=o.apply(this,arguments)*Cp;return n=[],e=qr(-t[0]*Cp,-t[1]*Cp,0).invert,Ir(u,a,c,1),t={type:"Polygon",coordinates:[n]},n=e=null,t}var n,e,r=Pr([0,0]),i=Pr(90),o=Pr(6),u={point:function(t,r){n.push(t=e(t,r)),t[0]*=Ap,t[1]*=Ap}};return t.center=function(n){return arguments.length?(r="function"==typeof n?n:Pr([+n[0],+n[1]]),t):r},t.radius=function(n){return arguments.length?(i="function"==typeof n?n:Pr(+n),t):i},t.precision=function(n){return arguments.length?(o="function"==typeof n?n:Pr(+n),t):o},t},t.geoClipAntimeridian=sd,t.geoClipCircle=Qr,t.geoClipExtent=function(){var t,n,e,r=0,i=0,o=960,u=500;return e={stream:function(e){return t&&n===e?t:t=Jr(r,i,o,u)(n=e)},extent:function(a){return arguments.length?(r=+a[0][0],i=+a[0][1],o=+a[1][0],u=+a[1][1],t=n=null,e):[[r,i],[o,u]]}}},t.geoClipRectangle=Jr,t.geoContains=function(t,n){return(t&&gd.hasOwnProperty(t.type)?gd[t.type]:ii)(t,n)},t.geoDistance=ri,t.geoGraticule=hi,t.geoGraticule10=function(){return hi()()},t.geoInterpolate=function(t,n){var e=t[0]*Cp,r=t[1]*Cp,i=n[0]*Cp,o=n[1]*Cp,u=Lp(r),a=Fp(r),c=Lp(o),s=Fp(o),f=u*Lp(e),l=u*Fp(e),h=c*Lp(i),p=c*Fp(i),d=2*We(Yp(Ze(o-r)+u*c*Ze(i-e))),v=Fp(d),g=d?function(t){var n=Fp(t*=d)/v,e=Fp(d-t)/v,r=e*f+n*h,i=e*l+n*p,o=e*a+n*s;return[Rp(i,r)*Ap,Rp(o,Yp(r*r+i*i))*Ap]}:function(){return[e*Ap,r*Ap]};return g.distance=d,g},t.geoLength=ei,t.geoPath=function(t,n){function e(t){return t&&("function"==typeof o&&i.pointRadius(+o.apply(this,arguments)),tr(t,r(i))),i.result()}var r,i,o=4.5;return e.area=function(t){return tr(t,r(xd)),xd.result()},e.measure=function(t){return tr(t,r(Bd)),Bd.result()},e.bounds=function(t){return tr(t,r(Nd)),Nd.result()},e.centroid=function(t){return tr(t,r(qd)),qd.result()},e.projection=function(n){return arguments.length?(r=null==n?(t=null,pi):(t=n).stream,e):t},e.context=function(t){return arguments.length?(i=null==t?(n=null,new Ci):new Si(n=t),"function"!=typeof o&&i.pointRadius(o),e):n},e.pointRadius=function(t){return arguments.length?(o="function"==typeof t?t:(i.pointRadius(+t),+t),e):o},e.projection(t).context(n)},t.geoAlbers=Xi,t.geoAlbersUsa=function(){function t(t){var n=t[0],e=t[1];return a=null,i.point(n,e),a||(o.point(n,e),a)||(u.point(n,e),a)}function n(){return e=r=null,t}var e,r,i,o,u,a,c=Xi(),s=ji().rotate([154,0]).center([-2,58.5]).parallels([55,65]),f=ji().rotate([157,0]).center([-3,19.9]).parallels([8,18]),l={point:function(t,n){a=[t,n]}};return t.invert=function(t){var n=c.scale(),e=c.translate(),r=(t[0]-e[0])/n,i=(t[1]-e[1])/n;return(i>=.12&&i<.234&&r>=-.425&&r<-.214?s:i>=.166&&i<.234&&r>=-.214&&r<-.115?f:c).invert(t)},t.stream=function(t){return e&&r===t?e:e=function(t){var n=t.length;return{point:function(e,r){for(var i=-1;++i<n;)t[i].point(e,r)},sphere:function(){for(var e=-1;++e<n;)t[e].sphere()},lineStart:function(){for(var e=-1;++e<n;)t[e].lineStart()},lineEnd:function(){for(var e=-1;++e<n;)t[e].lineEnd()},polygonStart:function(){for(var e=-1;++e<n;)t[e].polygonStart()},polygonEnd:function(){for(var e=-1;++e<n;)t[e].polygonEnd()}}}([c.stream(r=t),s.stream(t),f.stream(t)])},t.precision=function(t){return arguments.length?(c.precision(t),s.precision(t),f.precision(t),n()):c.precision()},t.scale=function(n){return arguments.length?(c.scale(n),s.scale(.35*n),f.scale(n),t.translate(c.translate())):c.scale()},t.translate=function(t){if(!arguments.length)return c.translate();var e=c.scale(),r=+t[0],a=+t[1];return i=c.translate(t).clipExtent([[r-.455*e,a-.238*e],[r+.455*e,a+.238*e]]).stream(l),o=s.translate([r-.307*e,a+.201*e]).clipExtent([[r-.425*e+Mp,a+.12*e+Mp],[r-.214*e-Mp,a+.234*e-Mp]]).stream(l),u=f.translate([r-.205*e,a+.212*e]).clipExtent([[r-.214*e+Mp,a+.166*e+Mp],[r-.115*e-Mp,a+.234*e-Mp]]).stream(l),n()},t.fitExtent=function(n,e){return qi(t,n,e)},t.fitSize=function(n,e){return Di(t,n,e)},t.fitWidth=function(n,e){return Ui(t,n,e)},t.fitHeight=function(n,e){return Oi(t,n,e)},t.scale(1070)},t.geoAzimuthalEqualArea=function(){return Ii(Vd).scale(124.75).clipAngle(179.999)},t.geoAzimuthalEqualAreaRaw=Vd,t.geoAzimuthalEquidistant=function(){return Ii($d).scale(79.4188).clipAngle(179.999)},t.geoAzimuthalEquidistantRaw=$d,t.geoConicConformal=function(){return Bi(Qi).scale(109.5).parallels([30,30])},t.geoConicConformalRaw=Qi,t.geoConicEqualArea=ji,t.geoConicEqualAreaRaw=Hi,t.geoConicEquidistant=function(){return Bi(Ki).scale(131.154).center([0,13.9389])},t.geoConicEquidistantRaw=Ki,t.geoEquirectangular=function(){return Ii(Ji).scale(152.63)},t.geoEquirectangularRaw=Ji,t.geoGnomonic=function(){return Ii(to).scale(144.049).clipAngle(60)},t.geoGnomonicRaw=to,t.geoIdentity=function(){function t(){return i=o=null,u}var n,e,r,i,o,u,a=1,c=0,s=0,f=1,l=1,h=pi,p=null,d=pi;return u={stream:function(t){return i&&o===t?i:i=h(d(o=t))},postclip:function(i){return arguments.length?(d=i,p=n=e=r=null,t()):d},clipExtent:function(i){return arguments.length?(d=null==i?(p=n=e=r=null,pi):Jr(p=+i[0][0],n=+i[0][1],e=+i[1][0],r=+i[1][1]),t()):null==p?null:[[p,n],[e,r]]},scale:function(n){return arguments.length?(h=no((a=+n)*f,a*l,c,s),t()):a},translate:function(n){return arguments.length?(h=no(a*f,a*l,c=+n[0],s=+n[1]),t()):[c,s]},reflectX:function(n){return arguments.length?(h=no(a*(f=n?-1:1),a*l,c,s),t()):f<0},reflectY:function(n){return arguments.length?(h=no(a*f,a*(l=n?-1:1),c,s),t()):l<0},fitExtent:function(t,n){return qi(u,t,n)},fitSize:function(t,n){return Di(u,t,n)},fitWidth:function(t,n){return Ui(u,t,n)},fitHeight:function(t,n){return Oi(u,t,n)}}},t.geoProjection=Ii,t.geoProjectionMutator=Yi,t.geoMercator=function(){return Zi(Wi).scale(961/Ep)},t.geoMercatorRaw=Wi,t.geoNaturalEarth1=function(){return Ii(eo).scale(175.295)},t.geoNaturalEarth1Raw=eo,t.geoOrthographic=function(){return Ii(ro).scale(249.5).clipAngle(90+Mp)},t.geoOrthographicRaw=ro,t.geoStereographic=function(){return Ii(io).scale(250).clipAngle(142)},t.geoStereographicRaw=io,t.geoTransverseMercator=function(){var t=Zi(oo),n=t.center,e=t.rotate;return t.center=function(t){return arguments.length?n([-t[1],t[0]]):(t=n(),[t[1],-t[0]])},t.rotate=function(t){return arguments.length?e([t[0],t[1],t.length>2?t[2]+90:90]):(t=e(),[t[0],t[1],t[2]-90])},e([0,0,90]).scale(159.155)},t.geoTransverseMercatorRaw=oo,t.geoRotation=Fr,t.geoStream=tr,t.geoTransform=function(t){return{stream:Pi(t)}},t.cluster=function(){function t(t){var o,u=0;t.eachAfter(function(t){var e=t.children;e?(t.x=function(t){return t.reduce(ao,0)/t.length}(e),t.y=function(t){return 1+t.reduce(co,0)}(e)):(t.x=o?u+=n(t,o):0,t.y=0,o=t)});var a=function(t){for(var n;n=t.children;)t=n[0];return t}(t),c=function(t){for(var n;n=t.children;)t=n[n.length-1];return t}(t),s=a.x-n(a,c)/2,f=c.x+n(c,a)/2;return t.eachAfter(i?function(n){n.x=(n.x-t.x)*e,n.y=(t.y-n.y)*r}:function(n){n.x=(n.x-s)/(f-s)*e,n.y=(1-(t.y?n.y/t.y:1))*r})}var n=uo,e=1,r=1,i=!1;return t.separation=function(e){return arguments.length?(n=e,t):n},t.size=function(n){return arguments.length?(i=!1,e=+n[0],r=+n[1],t):i?null:[e,r]},t.nodeSize=function(n){return arguments.length?(i=!0,e=+n[0],r=+n[1],t):i?[e,r]:null},t},t.hierarchy=fo,t.pack=function(){function t(t){return t.x=e/2,t.y=r/2,n?t.eachBefore(zo(n)).eachAfter(Po(i,.5)).eachBefore(Ro(1)):t.eachBefore(zo(Co)).eachAfter(Po(Eo,1)).eachAfter(Po(i,t.r/Math.min(e,r))).eachBefore(Ro(Math.min(e,r)/(2*t.r))),t}var n=null,e=1,r=1,i=Eo;return t.radius=function(e){return arguments.length?(n=function(t){return null==t?null:So(t)}(e),t):n},t.size=function(n){return arguments.length?(e=+n[0],r=+n[1],t):[e,r]},t.padding=function(n){return arguments.length?(i="function"==typeof n?n:Ao(+n),t):i},t},t.packSiblings=function(t){return ko(t),t},t.packEnclose=go,t.partition=function(){function t(t){var o=t.height+1;return t.x0=t.y0=r,t.x1=n,t.y1=e/o,t.eachBefore(function(t,n){return function(e){e.children&&qo(e,e.x0,t*(e.depth+1)/n,e.x1,t*(e.depth+2)/n);var i=e.x0,o=e.y0,u=e.x1-r,a=e.y1-r;u<i&&(i=u=(i+u)/2),a<o&&(o=a=(o+a)/2),e.x0=i,e.y0=o,e.x1=u,e.y1=a}}(e,o)),i&&t.eachBefore(Lo),t}var n=1,e=1,r=0,i=!1;return t.round=function(n){return arguments.length?(i=!!n,t):i},t.size=function(r){return arguments.length?(n=+r[0],e=+r[1],t):[n,e]},t.padding=function(n){return arguments.length?(r=+n,t):r},t},t.stratify=function(){function t(t){var r,i,o,u,a,c,s,f=t.length,l=new Array(f),h={};for(i=0;i<f;++i)r=t[i],a=l[i]=new vo(r),null!=(c=n(r,i,t))&&(c+="")&&(h[s=Zd+(a.id=c)]=s in h?Qd:a);for(i=0;i<f;++i)if(a=l[i],null!=(c=e(t[i],i,t))&&(c+="")){if(!(u=h[Zd+c]))throw new Error("missing: "+c);if(u===Qd)throw new Error("ambiguous: "+c);u.children?u.children.push(a):u.children=[a],a.parent=u}else{if(o)throw new Error("multiple roots");o=a}if(!o)throw new Error("no root");if(o.parent=Gd,o.eachBefore(function(t){t.depth=t.parent.depth+1,--f}).eachBefore(po),o.parent=null,f>0)throw new Error("cycle");return o}var n=Do,e=Uo;return t.id=function(e){return arguments.length?(n=So(e),t):n},t.parentId=function(n){return arguments.length?(e=So(n),t):e},t},t.tree=function(){function t(t){var c=function(t){for(var n,e,r,i,o,u=new Ho(t,0),a=[u];n=a.pop();)if(r=n._.children)for(n.children=new Array(o=r.length),i=o-1;i>=0;--i)a.push(e=n.children[i]=new Ho(r[i],i)),e.parent=n;return(u.parent=new Ho(null,0)).children=[u],u}(t);if(c.eachAfter(n),c.parent.m=-c.z,c.eachBefore(e),a)t.eachBefore(r);else{var s=t,f=t,l=t;t.eachBefore(function(t){t.x<s.x&&(s=t),t.x>f.x&&(f=t),t.depth>l.depth&&(l=t)});var h=s===f?1:i(s,f)/2,p=h-s.x,d=o/(f.x+h+p),v=u/(l.depth||1);t.eachBefore(function(t){t.x=(t.x+p)*d,t.y=t.depth*v})}return t}function n(t){var n=t.children,e=t.parent.children,r=t.i?e[t.i-1]:null;if(n){(function(t){for(var n,e=0,r=0,i=t.children,o=i.length;--o>=0;)(n=i[o]).z+=e,n.m+=e,e+=n.s+(r+=n.c)})(t);var o=(n[0].z+n[n.length-1].z)/2;r?(t.z=r.z+i(t._,r._),t.m=t.z-o):t.z=o}else r&&(t.z=r.z+i(t._,r._));t.parent.A=function(t,n,e){if(n){for(var r,o=t,u=t,a=n,c=o.parent.children[0],s=o.m,f=u.m,l=a.m,h=c.m;a=Io(a),o=Fo(o),a&&o;)c=Fo(c),(u=Io(u)).a=t,(r=a.z+l-o.z-s+i(a._,o._))>0&&(Yo(Bo(a,t,e),t,r),s+=r,f+=r),l+=a.m,s+=o.m,h+=c.m,f+=u.m;a&&!Io(u)&&(u.t=a,u.m+=l-f),o&&!Fo(c)&&(c.t=o,c.m+=s-h,e=t)}return e}(t,r,t.parent.A||e[0])}function e(t){t._.x=t.z+t.parent.m,t.m+=t.parent.m}function r(t){t.x*=o,t.y=t.depth*u}var i=Oo,o=1,u=1,a=null;return t.separation=function(n){return arguments.length?(i=n,t):i},t.size=function(n){return arguments.length?(a=!1,o=+n[0],u=+n[1],t):a?null:[o,u]},t.nodeSize=function(n){return arguments.length?(a=!0,o=+n[0],u=+n[1],t):a?[o,u]:null},t},t.treemap=function(){function t(t){return t.x0=t.y0=0,t.x1=i,t.y1=o,t.eachBefore(n),u=[0],r&&t.eachBefore(Lo),t}function n(t){var n=u[t.depth],r=t.x0+n,i=t.y0+n,o=t.x1-n,h=t.y1-n;o<r&&(r=o=(r+o)/2),h<i&&(i=h=(i+h)/2),t.x0=r,t.y0=i,t.x1=o,t.y1=h,t.children&&(n=u[t.depth+1]=a(t)/2,r+=l(t)-n,i+=c(t)-n,o-=s(t)-n,h-=f(t)-n,o<r&&(r=o=(r+o)/2),h<i&&(i=h=(i+h)/2),e(t,r,i,o,h))}var e=Kd,r=!1,i=1,o=1,u=[0],a=Eo,c=Eo,s=Eo,f=Eo,l=Eo;return t.round=function(n){return arguments.length?(r=!!n,t):r},t.size=function(n){return arguments.length?(i=+n[0],o=+n[1],t):[i,o]},t.tile=function(n){return arguments.length?(e=So(n),t):e},t.padding=function(n){return arguments.length?t.paddingInner(n).paddingOuter(n):t.paddingInner()},t.paddingInner=function(n){return arguments.length?(a="function"==typeof n?n:Ao(+n),t):a},t.paddingOuter=function(n){return arguments.length?t.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n):t.paddingTop()},t.paddingTop=function(n){return arguments.length?(c="function"==typeof n?n:Ao(+n),t):c},t.paddingRight=function(n){return arguments.length?(s="function"==typeof n?n:Ao(+n),t):s},t.paddingBottom=function(n){return arguments.length?(f="function"==typeof n?n:Ao(+n),t):f},t.paddingLeft=function(n){return arguments.length?(l="function"==typeof n?n:Ao(+n),t):l},t},t.treemapBinary=function(t,n,e,r,i){function o(t,n,e,r,i,u,a){if(t>=n-1){var s=c[t];return s.x0=r,s.y0=i,s.x1=u,void(s.y1=a)}for(var l=f[t],h=e/2+l,p=t+1,d=n-1;p<d;){var v=p+d>>>1;f[v]<h?p=v+1:d=v}h-f[p-1]<f[p]-h&&t+1<p&&--p;var g=f[p]-l,_=e-g;if(u-r>a-i){var y=(r*_+u*g)/e;o(t,p,g,r,i,y,a),o(p,n,_,y,i,u,a)}else{var m=(i*_+a*g)/e;o(t,p,g,r,i,u,m),o(p,n,_,r,m,u,a)}}var u,a,c=t.children,s=c.length,f=new Array(s+1);for(f[0]=a=u=0;u<s;++u)f[u+1]=a+=c[u].value;o(0,s,t.value,n,e,r,i)},t.treemapDice=qo,t.treemapSlice=jo,t.treemapSliceDice=function(t,n,e,r,i){(1&t.depth?jo:qo)(t,n,e,r,i)},t.treemapSquarify=Kd,t.treemapResquarify=tv,t.interpolate=fn,t.interpolateArray=on,t.interpolateBasis=Gt,t.interpolateBasisClosed=Qt,t.interpolateDate=un,t.interpolateNumber=an,t.interpolateObject=cn,t.interpolateRound=ln,t.interpolateString=sn,t.interpolateTransformCss=Gf,t.interpolateTransformSvg=Qf,t.interpolateZoom=vn,t.interpolateRgb=Hf,t.interpolateRgbBasis=jf,t.interpolateRgbBasisClosed=Xf,t.interpolateHsl=el,t.interpolateHslLong=rl,t.interpolateLab=function(t,n){var e=en((t=Ft(t)).l,(n=Ft(n)).l),r=en(t.a,n.a),i=en(t.b,n.b),o=en(t.opacity,n.opacity);return function(n){return t.l=e(n),t.a=r(n),t.b=i(n),t.opacity=o(n),t+""}},t.interpolateHcl=il,t.interpolateHclLong=ol,t.interpolateCubehelix=ul,t.interpolateCubehelixLong=al,t.quantize=function(t,n){for(var e=new Array(n),r=0;r<n;++r)e[r]=t(r/(n-1));return e},t.path=ee,t.polygonArea=function(t){for(var n,e=-1,r=t.length,i=t[r-1],o=0;++e<r;)n=i,i=t[e],o+=n[1]*i[0]-n[0]*i[1];return o/2},t.polygonCentroid=function(t){for(var n,e,r=-1,i=t.length,o=0,u=0,a=t[i-1],c=0;++r<i;)n=a,a=t[r],c+=e=n[0]*a[1]-a[0]*n[1],o+=(n[0]+a[0])*e,u+=(n[1]+a[1])*e;return c*=3,[o/c,u/c]},t.polygonHull=function(t){if((e=t.length)<3)return null;var n,e,r=new Array(e),i=new Array(e);for(n=0;n<e;++n)r[n]=[+t[n][0],+t[n][1],n];for(r.sort($o),n=0;n<e;++n)i[n]=[r[n][0],-r[n][1]];var o=Wo(r),u=Wo(i),a=u[0]===o[0],c=u[u.length-1]===o[o.length-1],s=[];for(n=o.length-1;n>=0;--n)s.push(t[r[o[n]][2]]);for(n=+a;n<u.length-c;++n)s.push(t[r[u[n]][2]]);return s},t.polygonContains=function(t,n){for(var e,r,i=t.length,o=t[i-1],u=n[0],a=n[1],c=o[0],s=o[1],f=!1,l=0;l<i;++l)e=(o=t[l])[0],(r=o[1])>a!=s>a&&u<(c-e)*(a-r)/(s-r)+e&&(f=!f),c=e,s=r;return f},t.polygonLength=function(t){for(var n,e,r=-1,i=t.length,o=t[i-1],u=o[0],a=o[1],c=0;++r<i;)n=u,e=a,n-=u=(o=t[r])[0],e-=a=o[1],c+=Math.sqrt(n*n+e*e);return c},t.quadtree=Te,t.queue=Ko,t.randomUniform=rv,t.randomNormal=iv,t.randomLogNormal=ov,t.randomBates=av,t.randomIrwinHall=uv,t.randomExponential=cv,t.request=nu,t.html=sv,t.json=fv,t.text=lv,t.xml=hv,t.csv=pv,t.tsv=dv,t.scaleBand=ou,t.scalePoint=function(){return uu(ou().paddingInner(1))},t.scaleIdentity=gu,t.scaleLinear=vu,t.scaleLog=Tu,t.scaleOrdinal=iu,t.scaleImplicit=yv,t.scalePow=ku,t.scaleSqrt=function(){return ku().exponent(.5)},t.scaleQuantile=Su,t.scaleQuantize=Eu,t.scaleThreshold=Au,t.scaleTime=function(){return Va(Gv,Wv,Lv,Pv,Cv,Ev,kv,wv,t.timeFormat).domain([new Date(2e3,0,1),new Date(2e3,0,2)])},t.scaleUtc=function(){return Va(xg,yg,ig,eg,tg,Jv,kv,wv,t.utcFormat).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)])},t.schemeCategory10=Ug,t.schemeCategory20b=Og,t.schemeCategory20c=Fg,t.schemeCategory20=Ig,t.interpolateCubehelixDefault=Yg,t.interpolateRainbow=function(t){(t<0||t>1)&&(t-=Math.floor(t));var n=Math.abs(t-.5);return jg.h=360*t-100,jg.s=1.5-1.5*n,jg.l=.8-.9*n,jg+""},t.interpolateWarm=Bg,t.interpolateCool=Hg,t.interpolateViridis=Xg,t.interpolateMagma=Vg,t.interpolateInferno=$g,t.interpolatePlasma=Wg,t.scaleSequential=Za,t.create=function(t){return ct(A(t).call(document.documentElement))},t.creator=A,t.local=st,t.matcher=of,t.mouse=pt,t.namespace=E,t.namespaces=tf,t.clientPoint=ht,t.select=ct,t.selectAll=function(t){return"string"==typeof t?new ut([document.querySelectorAll(t)],[document.documentElement]):new ut([null==t?[]:t],cf)},t.selection=at,t.selector=z,t.selectorAll=R,t.style=I,t.touch=dt,t.touches=function(t,n){null==n&&(n=lt().touches);for(var e=0,r=n?n.length:0,i=new Array(r);e<r;++e)i[e]=ht(t,n[e]);return i},t.window=F,t.customEvent=it,t.arc=function(){function t(){var t,s,f=+n.apply(this,arguments),l=+e.apply(this,arguments),h=o.apply(this,arguments)-i_,p=u.apply(this,arguments)-i_,d=Zg(p-h),v=p>h;if(c||(c=t=ee()),l<f&&(s=l,l=f,f=s),l>e_)if(d>o_-e_)c.moveTo(l*Qg(h),l*t_(h)),c.arc(0,0,l,h,p,!v),f>e_&&(c.moveTo(f*Qg(p),f*t_(p)),c.arc(0,0,f,p,h,v));else{var g,_,y=h,m=p,x=h,b=p,w=d,M=d,T=a.apply(this,arguments)/2,N=T>e_&&(i?+i.apply(this,arguments):n_(f*f+l*l)),k=Kg(Zg(l-f)/2,+r.apply(this,arguments)),S=k,E=k;if(N>e_){var A=Qa(N/f*t_(T)),C=Qa(N/l*t_(T));(w-=2*A)>e_?(A*=v?1:-1,x+=A,b-=A):(w=0,x=b=(h+p)/2),(M-=2*C)>e_?(C*=v?1:-1,y+=C,m-=C):(M=0,y=m=(h+p)/2)}var z=l*Qg(y),P=l*t_(y),R=f*Qg(b),L=f*t_(b);if(k>e_){var q=l*Qg(m),D=l*t_(m),U=f*Qg(x),O=f*t_(x);if(d<r_){var F=w>e_?function(t,n,e,r,i,o,u,a){var c=e-t,s=r-n,f=u-i,l=a-o,h=(f*(n-o)-l*(t-i))/(l*c-f*s);return[t+h*c,n+h*s]}(z,P,U,O,q,D,R,L):[R,L],I=z-F[0],Y=P-F[1],B=q-F[0],H=D-F[1],j=1/t_(function(t){return t>1?0:t<-1?r_:Math.acos(t)}((I*B+Y*H)/(n_(I*I+Y*Y)*n_(B*B+H*H)))/2),X=n_(F[0]*F[0]+F[1]*F[1]);S=Kg(k,(f-X)/(j-1)),E=Kg(k,(l-X)/(j+1))}}M>e_?E>e_?(g=rc(U,O,z,P,l,E,v),_=rc(q,D,R,L,l,E,v),c.moveTo(g.cx+g.x01,g.cy+g.y01),E<k?c.arc(g.cx,g.cy,E,Gg(g.y01,g.x01),Gg(_.y01,_.x01),!v):(c.arc(g.cx,g.cy,E,Gg(g.y01,g.x01),Gg(g.y11,g.x11),!v),c.arc(0,0,l,Gg(g.cy+g.y11,g.cx+g.x11),Gg(_.cy+_.y11,_.cx+_.x11),!v),c.arc(_.cx,_.cy,E,Gg(_.y11,_.x11),Gg(_.y01,_.x01),!v))):(c.moveTo(z,P),c.arc(0,0,l,y,m,!v)):c.moveTo(z,P),f>e_&&w>e_?S>e_?(g=rc(R,L,q,D,f,-S,v),_=rc(z,P,U,O,f,-S,v),c.lineTo(g.cx+g.x01,g.cy+g.y01),S<k?c.arc(g.cx,g.cy,S,Gg(g.y01,g.x01),Gg(_.y01,_.x01),!v):(c.arc(g.cx,g.cy,S,Gg(g.y01,g.x01),Gg(g.y11,g.x11),!v),c.arc(0,0,f,Gg(g.cy+g.y11,g.cx+g.x11),Gg(_.cy+_.y11,_.cx+_.x11),v),c.arc(_.cx,_.cy,S,Gg(_.y11,_.x11),Gg(_.y01,_.x01),!v))):c.arc(0,0,f,b,x,v):c.lineTo(R,L)}else c.moveTo(0,0);if(c.closePath(),t)return c=null,t+""||null}var n=Ja,e=Ka,r=Ga(0),i=null,o=tc,u=nc,a=ec,c=null;return t.centroid=function(){var t=(+n.apply(this,arguments)+ +e.apply(this,arguments))/2,r=(+o.apply(this,arguments)+ +u.apply(this,arguments))/2-r_/2;return[Qg(r)*t,t_(r)*t]},t.innerRadius=function(e){return arguments.length?(n="function"==typeof e?e:Ga(+e),t):n},t.outerRadius=function(n){return arguments.length?(e="function"==typeof n?n:Ga(+n),t):e},t.cornerRadius=function(n){return arguments.length?(r="function"==typeof n?n:Ga(+n),t):r},t.padRadius=function(n){return arguments.length?(i=null==n?null:"function"==typeof n?n:Ga(+n),t):i},t.startAngle=function(n){return arguments.length?(o="function"==typeof n?n:Ga(+n),t):o},t.endAngle=function(n){return arguments.length?(u="function"==typeof n?n:Ga(+n),t):u},t.padAngle=function(n){return arguments.length?(a="function"==typeof n?n:Ga(+n),t):a},t.context=function(n){return arguments.length?(c=null==n?null:n,t):c},t},t.area=sc,t.line=cc,t.pie=function(){function t(t){var a,c,s,f,l,h=t.length,p=0,d=new Array(h),v=new Array(h),g=+i.apply(this,arguments),_=Math.min(o_,Math.max(-o_,o.apply(this,arguments)-g)),y=Math.min(Math.abs(_)/h,u.apply(this,arguments)),m=y*(_<0?-1:1);for(a=0;a<h;++a)(l=v[d[a]=a]=+n(t[a],a,t))>0&&(p+=l);for(null!=e?d.sort(function(t,n){return e(v[t],v[n])}):null!=r&&d.sort(function(n,e){return r(t[n],t[e])}),a=0,s=p?(_-h*m)/p:0;a<h;++a,g=f)c=d[a],f=g+((l=v[c])>0?l*s:0)+m,v[c]={data:t[c],index:a,value:l,startAngle:g,endAngle:f,padAngle:y};return v}var n=lc,e=fc,r=null,i=Ga(0),o=Ga(o_),u=Ga(0);return t.value=function(e){return arguments.length?(n="function"==typeof e?e:Ga(+e),t):n},t.sortValues=function(n){return arguments.length?(e=n,r=null,t):e},t.sort=function(n){return arguments.length?(r=n,e=null,t):r},t.startAngle=function(n){return arguments.length?(i="function"==typeof n?n:Ga(+n),t):i},t.endAngle=function(n){return arguments.length?(o="function"==typeof n?n:Ga(+n),t):o},t.padAngle=function(n){return arguments.length?(u="function"==typeof n?n:Ga(+n),t):u},t},t.areaRadial=gc,t.radialArea=gc,t.lineRadial=vc,t.radialLine=vc,t.pointRadial=_c,t.linkHorizontal=function(){return xc(bc)},t.linkVertical=function(){return xc(wc)},t.linkRadial=function(){var t=xc(Mc);return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t},t.symbol=function(){function t(){var t;if(r||(r=t=ee()),n.apply(this,arguments).draw(r,+e.apply(this,arguments)),t)return r=null,t+""||null}var n=Ga(c_),e=Ga(64),r=null;return t.type=function(e){return arguments.length?(n="function"==typeof e?e:Ga(e),t):n},t.size=function(n){return arguments.length?(e="function"==typeof n?n:Ga(+n),t):e},t.context=function(n){return arguments.length?(r=null==n?null:n,t):r},t},t.symbols=T_,t.symbolCircle=c_,t.symbolCross=s_,t.symbolDiamond=h_,t.symbolSquare=__,t.symbolStar=g_,t.symbolTriangle=m_,t.symbolWye=M_,t.curveBasisClosed=function(t){return new Sc(t)},t.curveBasisOpen=function(t){return new Ec(t)},t.curveBasis=function(t){return new kc(t)},t.curveBundle=N_,t.curveCardinalClosed=S_,t.curveCardinalOpen=E_,t.curveCardinal=k_,t.curveCatmullRomClosed=C_,t.curveCatmullRomOpen=z_,t.curveCatmullRom=A_,t.curveLinearClosed=function(t){return new Oc(t)},t.curveLinear=oc,t.curveMonotoneX=function(t){return new Hc(t)},t.curveMonotoneY=function(t){return new jc(t)},t.curveNatural=function(t){return new Vc(t)},t.curveStep=function(t){return new Wc(t,.5)},t.curveStepAfter=function(t){return new Wc(t,1)},t.curveStepBefore=function(t){return new Wc(t,0)},t.stack=function(){function t(t){var o,u,a=n.apply(this,arguments),c=t.length,s=a.length,f=new Array(s);for(o=0;o<s;++o){for(var l,h=a[o],p=f[o]=new Array(c),d=0;d<c;++d)p[d]=l=[0,+i(t[d],h,d,t)],l.data=t[d];p.key=h}for(o=0,u=e(f);o<s;++o)f[u[o]].index=o;return r(f,u),f}var n=Ga([]),e=Gc,r=Zc,i=Qc;return t.keys=function(e){return arguments.length?(n="function"==typeof e?e:Ga(a_.call(e)),t):n},t.value=function(n){return arguments.length?(i="function"==typeof n?n:Ga(+n),t):i},t.order=function(n){return arguments.length?(e=null==n?Gc:"function"==typeof n?n:Ga(a_.call(n)),t):e},t.offset=function(n){return arguments.length?(r=null==n?Zc:n,t):r},t},t.stackOffsetExpand=function(t,n){if((r=t.length)>0){for(var e,r,i,o=0,u=t[0].length;o<u;++o){for(i=e=0;e<r;++e)i+=t[e][o][1]||0;if(i)for(e=0;e<r;++e)t[e][o][1]/=i}Zc(t,n)}},t.stackOffsetDiverging=function(t,n){if((a=t.length)>1)for(var e,r,i,o,u,a,c=0,s=t[n[0]].length;c<s;++c)for(o=u=0,e=0;e<a;++e)(i=(r=t[n[e]][c])[1]-r[0])>=0?(r[0]=o,r[1]=o+=i):i<0?(r[1]=u,r[0]=u+=i):r[0]=o},t.stackOffsetNone=Zc,t.stackOffsetSilhouette=function(t,n){if((e=t.length)>0){for(var e,r=0,i=t[n[0]],o=i.length;r<o;++r){for(var u=0,a=0;u<e;++u)a+=t[u][r][1]||0;i[r][1]+=i[r][0]=-a/2}Zc(t,n)}},t.stackOffsetWiggle=function(t,n){if((i=t.length)>0&&(r=(e=t[n[0]]).length)>0){for(var e,r,i,o=0,u=1;u<r;++u){for(var a=0,c=0,s=0;a<i;++a){for(var f=t[n[a]],l=f[u][1]||0,h=(l-(f[u-1][1]||0))/2,p=0;p<a;++p){var d=t[n[p]];h+=(d[u][1]||0)-(d[u-1][1]||0)}c+=l,s+=h*l}e[u-1][1]+=e[u-1][0]=o,c&&(o-=s/c)}e[u-1][1]+=e[u-1][0]=o,Zc(t,n)}},t.stackOrderAscending=Jc,t.stackOrderDescending=function(t){return Jc(t).reverse()},t.stackOrderInsideOut=function(t){var n,e,r=t.length,i=t.map(Kc),o=Gc(t).sort(function(t,n){return i[n]-i[t]}),u=0,a=0,c=[],s=[];for(n=0;n<r;++n)e=o[n],u<a?(u+=i[e],c.push(e)):(a+=i[e],s.push(e));return s.reverse().concat(c)},t.stackOrderNone=Gc,t.stackOrderReverse=function(t){return Gc(t).reverse()},t.timeInterval=Cu,t.timeMillisecond=wv,t.timeMilliseconds=Mv,t.utcMillisecond=wv,t.utcMilliseconds=Mv,t.timeSecond=kv,t.timeSeconds=Sv,t.utcSecond=kv,t.utcSeconds=Sv,t.timeMinute=Ev,t.timeMinutes=Av,t.timeHour=Cv,t.timeHours=zv,t.timeDay=Pv,t.timeDays=Rv,t.timeWeek=Lv,t.timeWeeks=Yv,t.timeSunday=Lv,t.timeSundays=Yv,t.timeMonday=qv,t.timeMondays=Bv,t.timeTuesday=Dv,t.timeTuesdays=Hv,t.timeWednesday=Uv,t.timeWednesdays=jv,t.timeThursday=Ov,t.timeThursdays=Xv,t.timeFriday=Fv,t.timeFridays=Vv,t.timeSaturday=Iv,t.timeSaturdays=$v,t.timeMonth=Wv,t.timeMonths=Zv,t.timeYear=Gv,t.timeYears=Qv,t.utcMinute=Jv,t.utcMinutes=Kv,t.utcHour=tg,t.utcHours=ng,t.utcDay=eg,t.utcDays=rg,t.utcWeek=ig,t.utcWeeks=lg,t.utcSunday=ig,t.utcSundays=lg,t.utcMonday=og,t.utcMondays=hg,t.utcTuesday=ug,t.utcTuesdays=pg,t.utcWednesday=ag,t.utcWednesdays=dg,t.utcThursday=cg,t.utcThursdays=vg,t.utcFriday=sg,t.utcFridays=gg,t.utcSaturday=fg,t.utcSaturdays=_g,t.utcMonth=yg,t.utcMonths=mg,t.utcYear=xg,t.utcYears=wg,t.timeFormatDefaultLocale=Ha,t.timeFormatLocale=Du,t.isoFormat=Eg,t.isoParse=Ag,t.now=mn,t.timer=wn,t.timerFlush=Mn,t.timeout=Sn,t.interval=function(t,n,e){var r=new bn,i=n;return null==n?(r.restart(t,n,e),r):(n=+n,e=null==e?mn():+e,r.restart(function o(u){u+=i,r.restart(o,i+=n,e),t(u)},n,e),r)},t.transition=Dn,t.active=function(t,n){var e,r,i=t.__transition;if(i){n=null==n?null:n+"";for(r in i)if((e=i[r]).state>xl&&e.name===n)return new qn([[t]],Jl,n,+r)}return null},t.interrupt=Pn,t.voronoi=function(){function t(t){return new Ns(t.map(function(r,i){var o=[Math.round(n(r,i,t)/F_)*F_,Math.round(e(r,i,t)/F_)*F_];return o.index=i,o.data=r,o}),r)}var n=ns,e=es,r=null;return t.polygons=function(n){return t(n).polygons()},t.links=function(n){return t(n).links()},t.triangles=function(n){return t(n).triangles()},t.x=function(e){return arguments.length?(n="function"==typeof e?e:ts(+e),t):n},t.y=function(n){return arguments.length?(e="function"==typeof n?n:ts(+n),t):e},t.extent=function(n){return arguments.length?(r=null==n?null:[[+n[0][0],+n[0][1]],[+n[1][0],+n[1][1]]],t):r&&[[r[0][0],r[0][1]],[r[1][0],r[1][1]]]},t.size=function(n){return arguments.length?(r=null==n?null:[[0,0],[+n[0],+n[1]]],t):r&&[r[1][0]-r[0][0],r[1][1]-r[0][1]]},t},t.zoom=function(){function n(t){t.property("__zoom",Rs).on("wheel.zoom",c).on("mousedown.zoom",s).on("dblclick.zoom",f).filter(x).on("touchstart.zoom",l).on("touchmove.zoom",h).on("touchend.zoom touchcancel.zoom",p).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function e(t,n){return(n=Math.max(b[0],Math.min(b[1],n)))===t.k?t:new Ss(n,t.x,t.y)}function r(t,n,e){var r=n[0]-e[0]*t.k,i=n[1]-e[1]*t.k;return r===t.x&&i===t.y?t:new Ss(t.k,r,i)}function i(t){return[(+t[0][0]+ +t[1][0])/2,(+t[0][1]+ +t[1][1])/2]}function o(t,n,e){t.on("start.zoom",function(){u(this,arguments).start()}).on("interrupt.zoom end.zoom",function(){u(this,arguments).end()}).tween("zoom",function(){var t=arguments,r=u(this,t),o=_.apply(this,t),a=e||i(o),c=Math.max(o[1][0]-o[0][0],o[1][1]-o[0][1]),s=this.__zoom,f="function"==typeof n?n.apply(this,t):n,l=T(s.invert(a).concat(c/s.k),f.invert(a).concat(c/f.k));return function(t){if(1===t)t=f;else{var n=l(t),e=c/n[2];t=new Ss(e,a[0]-n[0]*e,a[1]-n[1]*e)}r.zoom(null,t)}})}function u(t,n){for(var e,r=0,i=k.length;r<i;++r)if((e=k[r]).that===t)return e;return new a(t,n)}function a(t,n){this.that=t,this.args=n,this.index=-1,this.active=0,this.extent=_.apply(t,n)}function c(){if(g.apply(this,arguments)){var t=u(this,arguments),n=this.__zoom,i=Math.max(b[0],Math.min(b[1],n.k*Math.pow(2,m.apply(this,arguments)))),o=pt(this);if(t.wheel)t.mouse[0][0]===o[0]&&t.mouse[0][1]===o[1]||(t.mouse[1]=n.invert(t.mouse[0]=o)),clearTimeout(t.wheel);else{if(n.k===i)return;t.mouse=[o,n.invert(o)],Pn(this),t.start()}Cs(),t.wheel=setTimeout(function(){t.wheel=null,t.end()},A),t.zoom("mouse",y(r(e(n,i),t.mouse[0],t.mouse[1]),t.extent,w))}}function s(){if(!v&&g.apply(this,arguments)){var n=u(this,arguments),e=ct(t.event.view).on("mousemove.zoom",function(){if(Cs(),!n.moved){var e=t.event.clientX-o,i=t.event.clientY-a;n.moved=e*e+i*i>C}n.zoom("mouse",y(r(n.that.__zoom,n.mouse[0]=pt(n.that),n.mouse[1]),n.extent,w))},!0).on("mouseup.zoom",function(){e.on("mousemove.zoom mouseup.zoom",null),yt(t.event.view,n.moved),Cs(),n.end()},!0),i=pt(this),o=t.event.clientX,a=t.event.clientY;_t(t.event.view),As(),n.mouse=[i,this.__zoom.invert(i)],Pn(this),n.start()}}function f(){if(g.apply(this,arguments)){var i=this.__zoom,u=pt(this),a=i.invert(u),c=i.k*(t.event.shiftKey?.5:2),s=y(r(e(i,c),u,a),_.apply(this,arguments),w);Cs(),M>0?ct(this).transition().duration(M).call(o,s,u):ct(this).call(n.transform,s)}}function l(){if(g.apply(this,arguments)){var n,e,r,i,o=u(this,arguments),a=t.event.changedTouches,c=a.length;for(As(),e=0;e<c;++e)i=[i=dt(this,a,(r=a[e]).identifier),this.__zoom.invert(i),r.identifier],o.touch0?o.touch1||(o.touch1=i):(o.touch0=i,n=!0);if(d&&(d=clearTimeout(d),!o.touch1))return o.end(),void((i=ct(this).on("dblclick.zoom"))&&i.apply(this,arguments));n&&(d=setTimeout(function(){d=null},E),Pn(this),o.start())}}function h(){var n,i,o,a,c=u(this,arguments),s=t.event.changedTouches,f=s.length;for(Cs(),d&&(d=clearTimeout(d)),n=0;n<f;++n)o=dt(this,s,(i=s[n]).identifier),c.touch0&&c.touch0[2]===i.identifier?c.touch0[0]=o:c.touch1&&c.touch1[2]===i.identifier&&(c.touch1[0]=o);if(i=c.that.__zoom,c.touch1){var l=c.touch0[0],h=c.touch0[1],p=c.touch1[0],v=c.touch1[1],g=(g=p[0]-l[0])*g+(g=p[1]-l[1])*g,_=(_=v[0]-h[0])*_+(_=v[1]-h[1])*_;i=e(i,Math.sqrt(g/_)),o=[(l[0]+p[0])/2,(l[1]+p[1])/2],a=[(h[0]+v[0])/2,(h[1]+v[1])/2]}else{if(!c.touch0)return;o=c.touch0[0],a=c.touch0[1]}c.zoom("touch",y(r(i,o,a),c.extent,w))}function p(){var n,e,r=u(this,arguments),i=t.event.changedTouches,o=i.length;for(As(),v&&clearTimeout(v),v=setTimeout(function(){v=null},E),n=0;n<o;++n)e=i[n],r.touch0&&r.touch0[2]===e.identifier?delete r.touch0:r.touch1&&r.touch1[2]===e.identifier&&delete r.touch1;r.touch1&&!r.touch0&&(r.touch0=r.touch1,delete r.touch1),r.touch0?r.touch0[1]=this.__zoom.invert(r.touch0[0]):r.end()}var d,v,g=zs,_=Ps,y=Ds,m=Ls,x=qs,b=[0,1/0],w=[[-1/0,-1/0],[1/0,1/0]],M=250,T=vn,k=[],S=N("start","zoom","end"),E=500,A=150,C=0;return n.transform=function(t,n){var e=t.selection?t.selection():t;e.property("__zoom",Rs),t!==e?o(t,n):e.interrupt().each(function(){u(this,arguments).start().zoom(null,"function"==typeof n?n.apply(this,arguments):n).end()})},n.scaleBy=function(t,e){n.scaleTo(t,function(){return this.__zoom.k*("function"==typeof e?e.apply(this,arguments):e)})},n.scaleTo=function(t,o){n.transform(t,function(){var t=_.apply(this,arguments),n=this.__zoom,u=i(t),a=n.invert(u),c="function"==typeof o?o.apply(this,arguments):o;return y(r(e(n,c),u,a),t,w)})},n.translateBy=function(t,e,r){n.transform(t,function(){return y(this.__zoom.translate("function"==typeof e?e.apply(this,arguments):e,"function"==typeof r?r.apply(this,arguments):r),_.apply(this,arguments),w)})},n.translateTo=function(t,e,r){n.transform(t,function(){var t=_.apply(this,arguments),n=this.__zoom,o=i(t);return y(Y_.translate(o[0],o[1]).scale(n.k).translate("function"==typeof e?-e.apply(this,arguments):-e,"function"==typeof r?-r.apply(this,arguments):-r),t,w)})},a.prototype={start:function(){return 1==++this.active&&(this.index=k.push(this)-1,this.emit("start")),this},zoom:function(t,n){return this.mouse&&"mouse"!==t&&(this.mouse[1]=n.invert(this.mouse[0])),this.touch0&&"touch"!==t&&(this.touch0[1]=n.invert(this.touch0[0])),this.touch1&&"touch"!==t&&(this.touch1[1]=n.invert(this.touch1[0])),this.that.__zoom=n,this.emit("zoom"),this},end:function(){return 0==--this.active&&(k.splice(this.index,1),this.index=-1,this.emit("end")),this},emit:function(t){it(new function(t,n,e){this.target=t,this.type=n,this.transform=e}(n,t,this.that.__zoom),S.apply,S,[t,this.that,this.args])}},n.wheelDelta=function(t){return arguments.length?(m="function"==typeof t?t:ks(+t),n):m},n.filter=function(t){return arguments.length?(g="function"==typeof t?t:ks(!!t),n):g},n.touchable=function(t){return arguments.length?(x="function"==typeof t?t:ks(!!t),n):x},n.extent=function(t){return arguments.length?(_="function"==typeof t?t:ks([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),n):_},n.scaleExtent=function(t){return arguments.length?(b[0]=+t[0],b[1]=+t[1],n):[b[0],b[1]]},n.translateExtent=function(t){return arguments.length?(w[0][0]=+t[0][0],w[1][0]=+t[1][0],w[0][1]=+t[0][1],w[1][1]=+t[1][1],n):[[w[0][0],w[0][1]],[w[1][0],w[1][1]]]},n.constrain=function(t){return arguments.length?(y=t,n):y},n.duration=function(t){return arguments.length?(M=+t,n):M},n.interpolate=function(t){return arguments.length?(T=t,n):T},n.on=function(){var t=S.on.apply(S,arguments);return t===S?n:t},n.clickDistance=function(t){return arguments.length?(C=(t=+t)*t,n):Math.sqrt(C)},n},t.zoomTransform=Es,t.zoomIdentity=Y_,Object.defineProperty(t,"__esModule",{value:!0})});;
/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */
function hexToRgb(e){var a=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(a,function(e,a,t,i){return a+a+t+t+i+i});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function clamp(e,a,t){return Math.min(Math.max(e,a),t)}function isInArray(e,a){return a.indexOf(e)>-1}var pJS=function(e,a){var t=document.querySelector("#"+e+" > .particles-js-canvas-el");this.pJS={canvas:{el:t,w:t.offsetWidth,h:t.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var i=this.pJS;a&&Object.deepExtend(i,a),i.tmp.obj={size_value:i.particles.size.value,size_anim_speed:i.particles.size.anim.speed,move_speed:i.particles.move.speed,line_linked_distance:i.particles.line_linked.distance,line_linked_width:i.particles.line_linked.width,mode_grab_distance:i.interactivity.modes.grab.distance,mode_bubble_distance:i.interactivity.modes.bubble.distance,mode_bubble_size:i.interactivity.modes.bubble.size,mode_repulse_distance:i.interactivity.modes.repulse.distance},i.fn.retinaInit=function(){i.retina_detect&&window.devicePixelRatio>1?(i.canvas.pxratio=window.devicePixelRatio,i.tmp.retina=!0):(i.canvas.pxratio=1,i.tmp.retina=!1),i.canvas.w=i.canvas.el.offsetWidth*i.canvas.pxratio,i.canvas.h=i.canvas.el.offsetHeight*i.canvas.pxratio,i.particles.size.value=i.tmp.obj.size_value*i.canvas.pxratio,i.particles.size.anim.speed=i.tmp.obj.size_anim_speed*i.canvas.pxratio,i.particles.move.speed=i.tmp.obj.move_speed*i.canvas.pxratio,i.particles.line_linked.distance=i.tmp.obj.line_linked_distance*i.canvas.pxratio,i.interactivity.modes.grab.distance=i.tmp.obj.mode_grab_distance*i.canvas.pxratio,i.interactivity.modes.bubble.distance=i.tmp.obj.mode_bubble_distance*i.canvas.pxratio,i.particles.line_linked.width=i.tmp.obj.line_linked_width*i.canvas.pxratio,i.interactivity.modes.bubble.size=i.tmp.obj.mode_bubble_size*i.canvas.pxratio,i.interactivity.modes.repulse.distance=i.tmp.obj.mode_repulse_distance*i.canvas.pxratio},i.fn.canvasInit=function(){i.canvas.ctx=i.canvas.el.getContext("2d")},i.fn.canvasSize=function(){i.canvas.el.width=i.canvas.w,i.canvas.el.height=i.canvas.h,i&&i.interactivity.events.resize&&window.addEventListener("resize",function(){i.canvas.w=i.canvas.el.offsetWidth,i.canvas.h=i.canvas.el.offsetHeight,i.tmp.retina&&(i.canvas.w*=i.canvas.pxratio,i.canvas.h*=i.canvas.pxratio),i.canvas.el.width=i.canvas.w,i.canvas.el.height=i.canvas.h,i.particles.move.enable||(i.fn.particlesEmpty(),i.fn.particlesCreate(),i.fn.particlesDraw(),i.fn.vendors.densityAutoParticles()),i.fn.vendors.densityAutoParticles()})},i.fn.canvasPaint=function(){i.canvas.ctx.fillRect(0,0,i.canvas.w,i.canvas.h)},i.fn.canvasClear=function(){i.canvas.ctx.clearRect(0,0,i.canvas.w,i.canvas.h)},i.fn.particle=function(e,a,t){if(this.radius=(i.particles.size.random?Math.random():1)*i.particles.size.value,i.particles.size.anim.enable&&(this.size_status=!1,this.vs=i.particles.size.anim.speed/100,i.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=t?t.x:Math.random()*i.canvas.w,this.y=t?t.y:Math.random()*i.canvas.h,this.x>i.canvas.w-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>i.canvas.h-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),i.particles.move.bounce&&i.fn.vendors.checkOverlap(this,t),this.color={},"object"==typeof e.value)if(e.value instanceof Array){var s=e.value[Math.floor(Math.random()*i.particles.color.value.length)];this.color.rgb=hexToRgb(s)}else void 0!=e.value.r&&void 0!=e.value.g&&void 0!=e.value.b&&(this.color.rgb={r:e.value.r,g:e.value.g,b:e.value.b}),void 0!=e.value.h&&void 0!=e.value.s&&void 0!=e.value.l&&(this.color.hsl={h:e.value.h,s:e.value.s,l:e.value.l});else"random"==e.value?this.color.rgb={r:Math.floor(256*Math.random())+0,g:Math.floor(256*Math.random())+0,b:Math.floor(256*Math.random())+0}:"string"==typeof e.value&&(this.color=e,this.color.rgb=hexToRgb(this.color.value));this.opacity=(i.particles.opacity.random?Math.random():1)*i.particles.opacity.value,i.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=i.particles.opacity.anim.speed/100,i.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var n={};switch(i.particles.move.direction){case"top":n={x:0,y:-1};break;case"top-right":n={x:.5,y:-.5};break;case"right":n={x:1,y:-0};break;case"bottom-right":n={x:.5,y:.5};break;case"bottom":n={x:0,y:1};break;case"bottom-left":n={x:-.5,y:1};break;case"left":n={x:-1,y:0};break;case"top-left":n={x:-.5,y:-.5};break;default:n={x:0,y:0}}i.particles.move.straight?(this.vx=n.x,this.vy=n.y,i.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=n.x+Math.random()-.5,this.vy=n.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var r=i.particles.shape.type;if("object"==typeof r){if(r instanceof Array){var c=r[Math.floor(Math.random()*r.length)];this.shape=c}}else this.shape=r;if("image"==this.shape){var o=i.particles.shape;this.img={src:o.image.src,ratio:o.image.width/o.image.height},this.img.ratio||(this.img.ratio=1),"svg"==i.tmp.img_type&&void 0!=i.tmp.source_svg&&(i.fn.vendors.createSvgImg(this),i.tmp.pushing&&(this.img.loaded=!1))}},i.fn.particle.prototype.draw=function(){function e(){i.canvas.ctx.drawImage(r,a.x-t,a.y-t,2*t,2*t/a.img.ratio)}var a=this;if(void 0!=a.radius_bubble)var t=a.radius_bubble;else var t=a.radius;if(void 0!=a.opacity_bubble)var s=a.opacity_bubble;else var s=a.opacity;if(a.color.rgb)var n="rgba("+a.color.rgb.r+","+a.color.rgb.g+","+a.color.rgb.b+","+s+")";else var n="hsla("+a.color.hsl.h+","+a.color.hsl.s+"%,"+a.color.hsl.l+"%,"+s+")";switch(i.canvas.ctx.fillStyle=n,i.canvas.ctx.beginPath(),a.shape){case"circle":i.canvas.ctx.arc(a.x,a.y,t,0,2*Math.PI,!1);break;case"edge":i.canvas.ctx.rect(a.x-t,a.y-t,2*t,2*t);break;case"triangle":i.fn.vendors.drawShape(i.canvas.ctx,a.x-t,a.y+t/1.66,2*t,3,2);break;case"polygon":i.fn.vendors.drawShape(i.canvas.ctx,a.x-t/(i.particles.shape.polygon.nb_sides/3.5),a.y-t/.76,2.66*t/(i.particles.shape.polygon.nb_sides/3),i.particles.shape.polygon.nb_sides,1);break;case"star":i.fn.vendors.drawShape(i.canvas.ctx,a.x-2*t/(i.particles.shape.polygon.nb_sides/4),a.y-t/1.52,2*t*2.66/(i.particles.shape.polygon.nb_sides/3),i.particles.shape.polygon.nb_sides,2);break;case"image":if("svg"==i.tmp.img_type)var r=a.img.obj;else var r=i.tmp.img_obj;r&&e()}i.canvas.ctx.closePath(),i.particles.shape.stroke.width>0&&(i.canvas.ctx.strokeStyle=i.particles.shape.stroke.color,i.canvas.ctx.lineWidth=i.particles.shape.stroke.width,i.canvas.ctx.stroke()),i.canvas.ctx.fill()},i.fn.particlesCreate=function(){for(var e=0;e<i.particles.number.value;e++)i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value))},i.fn.particlesUpdate=function(){for(var e=0;e<i.particles.array.length;e++){var a=i.particles.array[e];if(i.particles.move.enable){var t=i.particles.move.speed/2;a.x+=a.vx*t,a.y+=a.vy*t}if(i.particles.opacity.anim.enable&&(1==a.opacity_status?(a.opacity>=i.particles.opacity.value&&(a.opacity_status=!1),a.opacity+=a.vo):(a.opacity<=i.particles.opacity.anim.opacity_min&&(a.opacity_status=!0),a.opacity-=a.vo),a.opacity<0&&(a.opacity=0)),i.particles.size.anim.enable&&(1==a.size_status?(a.radius>=i.particles.size.value&&(a.size_status=!1),a.radius+=a.vs):(a.radius<=i.particles.size.anim.size_min&&(a.size_status=!0),a.radius-=a.vs),a.radius<0&&(a.radius=0)),"bounce"==i.particles.move.out_mode)var s={x_left:a.radius,x_right:i.canvas.w,y_top:a.radius,y_bottom:i.canvas.h};else var s={x_left:-a.radius,x_right:i.canvas.w+a.radius,y_top:-a.radius,y_bottom:i.canvas.h+a.radius};switch(a.x-a.radius>i.canvas.w?(a.x=s.x_left,a.y=Math.random()*i.canvas.h):a.x+a.radius<0&&(a.x=s.x_right,a.y=Math.random()*i.canvas.h),a.y-a.radius>i.canvas.h?(a.y=s.y_top,a.x=Math.random()*i.canvas.w):a.y+a.radius<0&&(a.y=s.y_bottom,a.x=Math.random()*i.canvas.w),i.particles.move.out_mode){case"bounce":a.x+a.radius>i.canvas.w?a.vx=-a.vx:a.x-a.radius<0&&(a.vx=-a.vx),a.y+a.radius>i.canvas.h?a.vy=-a.vy:a.y-a.radius<0&&(a.vy=-a.vy)}if(isInArray("grab",i.interactivity.events.onhover.mode)&&i.fn.modes.grabParticle(a),(isInArray("bubble",i.interactivity.events.onhover.mode)||isInArray("bubble",i.interactivity.events.onclick.mode))&&i.fn.modes.bubbleParticle(a),(isInArray("repulse",i.interactivity.events.onhover.mode)||isInArray("repulse",i.interactivity.events.onclick.mode))&&i.fn.modes.repulseParticle(a),i.particles.line_linked.enable||i.particles.move.attract.enable)for(var n=e+1;n<i.particles.array.length;n++){var r=i.particles.array[n];i.particles.line_linked.enable&&i.fn.interact.linkParticles(a,r),i.particles.move.attract.enable&&i.fn.interact.attractParticles(a,r),i.particles.move.bounce&&i.fn.interact.bounceParticles(a,r)}}},i.fn.particlesDraw=function(){i.canvas.ctx.clearRect(0,0,i.canvas.w,i.canvas.h),i.fn.particlesUpdate();for(var e=0;e<i.particles.array.length;e++){var a=i.particles.array[e];a.draw()}},i.fn.particlesEmpty=function(){i.particles.array=[]},i.fn.particlesRefresh=function(){cancelRequestAnimFrame(i.fn.checkAnimFrame),cancelRequestAnimFrame(i.fn.drawAnimFrame),i.tmp.source_svg=void 0,i.tmp.img_obj=void 0,i.tmp.count_svg=0,i.fn.particlesEmpty(),i.fn.canvasClear(),i.fn.vendors.start()},i.fn.interact.linkParticles=function(e,a){var t=e.x-a.x,s=e.y-a.y,n=Math.sqrt(t*t+s*s);if(n<=i.particles.line_linked.distance){var r=i.particles.line_linked.opacity-n/(1/i.particles.line_linked.opacity)/i.particles.line_linked.distance;if(r>0){var c=i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle="rgba("+c.r+","+c.g+","+c.b+","+r+")",i.canvas.ctx.lineWidth=i.particles.line_linked.width,i.canvas.ctx.beginPath(),i.canvas.ctx.moveTo(e.x,e.y),i.canvas.ctx.lineTo(a.x,a.y),i.canvas.ctx.stroke(),i.canvas.ctx.closePath()}}},i.fn.interact.attractParticles=function(e,a){var t=e.x-a.x,s=e.y-a.y,n=Math.sqrt(t*t+s*s);if(n<=i.particles.line_linked.distance){var r=t/(1e3*i.particles.move.attract.rotateX),c=s/(1e3*i.particles.move.attract.rotateY);e.vx-=r,e.vy-=c,a.vx+=r,a.vy+=c}},i.fn.interact.bounceParticles=function(e,a){var t=e.x-a.x,i=e.y-a.y,s=Math.sqrt(t*t+i*i),n=e.radius+a.radius;n>=s&&(e.vx=-e.vx,e.vy=-e.vy,a.vx=-a.vx,a.vy=-a.vy)},i.fn.modes.pushParticles=function(e,a){i.tmp.pushing=!0;for(var t=0;e>t;t++)i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value,{x:a?a.pos_x:Math.random()*i.canvas.w,y:a?a.pos_y:Math.random()*i.canvas.h})),t==e-1&&(i.particles.move.enable||i.fn.particlesDraw(),i.tmp.pushing=!1)},i.fn.modes.removeParticles=function(e){i.particles.array.splice(0,e),i.particles.move.enable||i.fn.particlesDraw()},i.fn.modes.bubbleParticle=function(e){function a(){e.opacity_bubble=e.opacity,e.radius_bubble=e.radius}function t(a,t,s,n,c){if(a!=t)if(i.tmp.bubble_duration_end){if(void 0!=s){var o=n-p*(n-a)/i.interactivity.modes.bubble.duration,l=a-o;d=a+l,"size"==c&&(e.radius_bubble=d),"opacity"==c&&(e.opacity_bubble=d)}}else if(r<=i.interactivity.modes.bubble.distance){if(void 0!=s)var v=s;else var v=n;if(v!=a){var d=n-p*(n-a)/i.interactivity.modes.bubble.duration;"size"==c&&(e.radius_bubble=d),"opacity"==c&&(e.opacity_bubble=d)}}else"size"==c&&(e.radius_bubble=void 0),"opacity"==c&&(e.opacity_bubble=void 0)}if(i.interactivity.events.onhover.enable&&isInArray("bubble",i.interactivity.events.onhover.mode)){var s=e.x-i.interactivity.mouse.pos_x,n=e.y-i.interactivity.mouse.pos_y,r=Math.sqrt(s*s+n*n),c=1-r/i.interactivity.modes.bubble.distance;if(r<=i.interactivity.modes.bubble.distance){if(c>=0&&"mousemove"==i.interactivity.status){if(i.interactivity.modes.bubble.size!=i.particles.size.value)if(i.interactivity.modes.bubble.size>i.particles.size.value){var o=e.radius+i.interactivity.modes.bubble.size*c;o>=0&&(e.radius_bubble=o)}else{var l=e.radius-i.interactivity.modes.bubble.size,o=e.radius-l*c;o>0?e.radius_bubble=o:e.radius_bubble=0}if(i.interactivity.modes.bubble.opacity!=i.particles.opacity.value)if(i.interactivity.modes.bubble.opacity>i.particles.opacity.value){var v=i.interactivity.modes.bubble.opacity*c;v>e.opacity&&v<=i.interactivity.modes.bubble.opacity&&(e.opacity_bubble=v)}else{var v=e.opacity-(i.particles.opacity.value-i.interactivity.modes.bubble.opacity)*c;v<e.opacity&&v>=i.interactivity.modes.bubble.opacity&&(e.opacity_bubble=v)}}}else a();"mouseleave"==i.interactivity.status&&a()}else if(i.interactivity.events.onclick.enable&&isInArray("bubble",i.interactivity.events.onclick.mode)){if(i.tmp.bubble_clicking){var s=e.x-i.interactivity.mouse.click_pos_x,n=e.y-i.interactivity.mouse.click_pos_y,r=Math.sqrt(s*s+n*n),p=((new Date).getTime()-i.interactivity.mouse.click_time)/1e3;p>i.interactivity.modes.bubble.duration&&(i.tmp.bubble_duration_end=!0),p>2*i.interactivity.modes.bubble.duration&&(i.tmp.bubble_clicking=!1,i.tmp.bubble_duration_end=!1)}i.tmp.bubble_clicking&&(t(i.interactivity.modes.bubble.size,i.particles.size.value,e.radius_bubble,e.radius,"size"),t(i.interactivity.modes.bubble.opacity,i.particles.opacity.value,e.opacity_bubble,e.opacity,"opacity"))}},i.fn.modes.repulseParticle=function(e){function a(){var a=Math.atan2(d,p);if(e.vx=u*Math.cos(a),e.vy=u*Math.sin(a),"bounce"==i.particles.move.out_mode){var t={x:e.x+e.vx,y:e.y+e.vy};t.x+e.radius>i.canvas.w?e.vx=-e.vx:t.x-e.radius<0&&(e.vx=-e.vx),t.y+e.radius>i.canvas.h?e.vy=-e.vy:t.y-e.radius<0&&(e.vy=-e.vy)}}if(i.interactivity.events.onhover.enable&&isInArray("repulse",i.interactivity.events.onhover.mode)&&"mousemove"==i.interactivity.status){var t=e.x-i.interactivity.mouse.pos_x,s=e.y-i.interactivity.mouse.pos_y,n=Math.sqrt(t*t+s*s),r={x:t/n,y:s/n},c=i.interactivity.modes.repulse.distance,o=100,l=clamp(1/c*(-1*Math.pow(n/c,2)+1)*c*o,0,50),v={x:e.x+r.x*l,y:e.y+r.y*l};"bounce"==i.particles.move.out_mode?(v.x-e.radius>0&&v.x+e.radius<i.canvas.w&&(e.x=v.x),v.y-e.radius>0&&v.y+e.radius<i.canvas.h&&(e.y=v.y)):(e.x=v.x,e.y=v.y)}else if(i.interactivity.events.onclick.enable&&isInArray("repulse",i.interactivity.events.onclick.mode))if(i.tmp.repulse_finish||(i.tmp.repulse_count++,i.tmp.repulse_count==i.particles.array.length&&(i.tmp.repulse_finish=!0)),i.tmp.repulse_clicking){var c=Math.pow(i.interactivity.modes.repulse.distance/6,3),p=i.interactivity.mouse.click_pos_x-e.x,d=i.interactivity.mouse.click_pos_y-e.y,m=p*p+d*d,u=-c/m*1;c>=m&&a()}else 0==i.tmp.repulse_clicking&&(e.vx=e.vx_i,e.vy=e.vy_i)},i.fn.modes.grabParticle=function(e){if(i.interactivity.events.onhover.enable&&"mousemove"==i.interactivity.status){var a=e.x-i.interactivity.mouse.pos_x,t=e.y-i.interactivity.mouse.pos_y,s=Math.sqrt(a*a+t*t);if(s<=i.interactivity.modes.grab.distance){var n=i.interactivity.modes.grab.line_linked.opacity-s/(1/i.interactivity.modes.grab.line_linked.opacity)/i.interactivity.modes.grab.distance;if(n>0){var r=i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle="rgba("+r.r+","+r.g+","+r.b+","+n+")",i.canvas.ctx.lineWidth=i.particles.line_linked.width,i.canvas.ctx.beginPath(),i.canvas.ctx.moveTo(e.x,e.y),i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x,i.interactivity.mouse.pos_y),i.canvas.ctx.stroke(),i.canvas.ctx.closePath()}}}},i.fn.vendors.eventsListeners=function(){"window"==i.interactivity.detect_on?i.interactivity.el=window:i.interactivity.el=i.canvas.el,(i.interactivity.events.onhover.enable||i.interactivity.events.onclick.enable)&&(i.interactivity.el.addEventListener("mousemove",function(e){if(i.interactivity.el==window)var a=e.clientX,t=e.clientY;else var a=e.offsetX||e.clientX,t=e.offsetY||e.clientY;i.interactivity.mouse.pos_x=a,i.interactivity.mouse.pos_y=t,i.tmp.retina&&(i.interactivity.mouse.pos_x*=i.canvas.pxratio,i.interactivity.mouse.pos_y*=i.canvas.pxratio),i.interactivity.status="mousemove"}),i.interactivity.el.addEventListener("mouseleave",function(e){i.interactivity.mouse.pos_x=null,i.interactivity.mouse.pos_y=null,i.interactivity.status="mouseleave"})),i.interactivity.events.onclick.enable&&i.interactivity.el.addEventListener("click",function(){if(i.interactivity.mouse.click_pos_x=i.interactivity.mouse.pos_x,i.interactivity.mouse.click_pos_y=i.interactivity.mouse.pos_y,i.interactivity.mouse.click_time=(new Date).getTime(),i.interactivity.events.onclick.enable)switch(i.interactivity.events.onclick.mode){case"push":i.particles.move.enable?i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb,i.interactivity.mouse):1==i.interactivity.modes.push.particles_nb?i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb,i.interactivity.mouse):i.interactivity.modes.push.particles_nb>1&&i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);break;case"remove":i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);break;case"bubble":i.tmp.bubble_clicking=!0;break;case"repulse":i.tmp.repulse_clicking=!0,i.tmp.repulse_count=0,i.tmp.repulse_finish=!1,setTimeout(function(){i.tmp.repulse_clicking=!1},1e3*i.interactivity.modes.repulse.duration)}})},i.fn.vendors.densityAutoParticles=function(){if(i.particles.number.density.enable){var e=i.canvas.el.width*i.canvas.el.height/1e3;i.tmp.retina&&(e/=2*i.canvas.pxratio);var a=e*i.particles.number.value/i.particles.number.density.value_area,t=i.particles.array.length-a;0>t?i.fn.modes.pushParticles(Math.abs(t)):i.fn.modes.removeParticles(t)}},i.fn.vendors.checkOverlap=function(e,a){for(var t=0;t<i.particles.array.length;t++){var s=i.particles.array[t],n=e.x-s.x,r=e.y-s.y,c=Math.sqrt(n*n+r*r);c<=e.radius+s.radius&&(e.x=a?a.x:Math.random()*i.canvas.w,e.y=a?a.y:Math.random()*i.canvas.h,i.fn.vendors.checkOverlap(e))}},i.fn.vendors.createSvgImg=function(e){var a=i.tmp.source_svg,t=/#([0-9A-F]{3,6})/gi,s=a.replace(t,function(a,t,i,s){if(e.color.rgb)var n="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+e.opacity+")";else var n="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+e.opacity+")";return n}),n=new Blob([s],{type:"image/svg+xml;charset=utf-8"}),r=window.URL||window.webkitURL||window,c=r.createObjectURL(n),o=new Image;o.addEventListener("load",function(){e.img.obj=o,e.img.loaded=!0,r.revokeObjectURL(c),i.tmp.count_svg++}),o.src=c},i.fn.vendors.destroypJS=function(){cancelAnimationFrame(i.fn.drawAnimFrame),t.remove(),pJSDom=null},i.fn.vendors.drawShape=function(e,a,t,i,s,n){var r=s*n,c=s/n,o=180*(c-2)/c,l=Math.PI-Math.PI*o/180;e.save(),e.beginPath(),e.translate(a,t),e.moveTo(0,0);for(var v=0;r>v;v++)e.lineTo(i,0),e.translate(i,0),e.rotate(l);e.fill(),e.restore()},i.fn.vendors.exportImg=function(){window.open(i.canvas.el.toDataURL("image/png"),"_blank")},i.fn.vendors.loadImg=function(e){if(i.tmp.img_error=void 0,""!=i.particles.shape.image.src)if("svg"==e){var a=new XMLHttpRequest;a.open("GET",i.particles.shape.image.src),a.onreadystatechange=function(e){4==a.readyState&&(200==a.status?(i.tmp.source_svg=e.currentTarget.response,i.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),i.tmp.img_error=!0))},a.send()}else{var t=new Image;t.addEventListener("load",function(){i.tmp.img_obj=t,i.fn.vendors.checkBeforeDraw()}),t.src=i.particles.shape.image.src}else console.log("Error pJS - No image.src"),i.tmp.img_error=!0},i.fn.vendors.draw=function(){"image"==i.particles.shape.type?"svg"==i.tmp.img_type?i.tmp.count_svg>=i.particles.number.value?(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame)):i.tmp.img_error||(i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw)):void 0!=i.tmp.img_obj?(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame)):i.tmp.img_error||(i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw)):(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame))},i.fn.vendors.checkBeforeDraw=function(){"image"==i.particles.shape.type?"svg"==i.tmp.img_type&&void 0==i.tmp.source_svg?i.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(i.tmp.checkAnimFrame),i.tmp.img_error||(i.fn.vendors.init(),i.fn.vendors.draw())):(i.fn.vendors.init(),i.fn.vendors.draw())},i.fn.vendors.init=function(){i.fn.retinaInit(),i.fn.canvasInit(),i.fn.canvasSize(),i.fn.canvasPaint(),i.fn.particlesCreate(),i.fn.vendors.densityAutoParticles(),i.particles.line_linked.color_rgb_line=hexToRgb(i.particles.line_linked.color)},i.fn.vendors.start=function(){isInArray("image",i.particles.shape.type)?(i.tmp.img_type=i.particles.shape.image.src.substr(i.particles.shape.image.src.length-3),i.fn.vendors.loadImg(i.tmp.img_type)):i.fn.vendors.checkBeforeDraw()},i.fn.vendors.eventsListeners(),i.fn.vendors.start()};Object.deepExtend=function(e,a){for(var t in a)a[t]&&a[t].constructor&&a[t].constructor===Object?(e[t]=e[t]||{},arguments.callee(e[t],a[t])):e[t]=a[t];return e},window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),window.cancelRequestAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),window.pJSDom=[],window.particlesJS=function(e,a){"string"!=typeof e&&(a=e,e="particles-js"),e||(e="particles-js");var t=document.getElementById(e),i="particles-js-canvas-el",s=t.getElementsByClassName(i);if(s.length)for(;s.length>0;)t.removeChild(s[0]);var n=document.createElement("canvas");n.className=i,n.style.width="100%",n.style.height="100%";var r=document.getElementById(e).appendChild(n);null!=r&&pJSDom.push(new pJS(e,a))},window.particlesJS.load=function(e,a,t){var i=new XMLHttpRequest;i.open("GET",a),i.onreadystatechange=function(a){if(4==i.readyState)if(200==i.status){var s=JSON.parse(a.currentTarget.response);window.particlesJS(e,s),t&&t()}else console.log("Error pJS - XMLHttpRequest status: "+i.status),console.log("Error pJS - File config not found")},i.send()};;
var SiriWave=function(){"use strict";function v(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function n(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function t(t,i,e){return i&&n(t.prototype,i),e&&n(t,e),t}var y=function(){function i(t){v(this,i),this.controller=t.controller,this.definition=t.definition}return t(i,[{key:"_globAttenuationEquation",value:function(t){return Math.pow(4/(4+Math.pow(t,4)),4)}},{key:"_xpos",value:function(t){return this.controller.$.width/2+t*(this.controller.$.width/4)}},{key:"_ypos",value:function(t){var i=this.controller.$.heightMax*this.controller.amplitude/this.definition.attenuation;return this.controller.$.height/2+this._globAttenuationEquation(t)*i*Math.sin(this.controller.frequency*t-this.controller.phase)}},{key:"draw",value:function(){var t=this.controller.ctx;t.moveTo(0,0),t.beginPath(),t.strokeStyle="rgba("+this.controller.color+","+this.definition.opacity+")",t.lineWidth=this.definition.lineWidth;for(var i=-2;i<=2;i+=.01){var e=this._ypos(i);1.9<=Math.abs(i)&&(e=this.controller.$.height/2),t.lineTo(this._xpos(i),e)}t.stroke()}}],[{key:"getDefinition",value:function(){return[{attenuation:-2,lineWidth:1,opacity:.1},{attenuation:-6,lineWidth:1,opacity:.2},{attenuation:4,lineWidth:1,opacity:.4},{attenuation:2,lineWidth:1,opacity:.6},{attenuation:1,lineWidth:1.5,opacity:1}]}}]),i}(),w=function(){function i(t){v(this,i),this.controller=t.controller,this.definition=t.definition,this.tick=0,this._respawn()}return t(i,[{key:"_respawn",value:function(){this.amplitude=.3+.7*Math.random(),this.seed=Math.random(),this.openClass=2+3*Math.random()|0}},{key:"_ypos",value:function(t){var i=-1*Math.abs(Math.sin(this.tick))*this.controller.amplitude*this.amplitude*this.controller.$.heightMax*Math.pow(1/(1+Math.pow(this.openClass*t,2)),2);return Math.abs(i)<.001&&this._respawn(),i}},{key:"_draw",value:function(t){var i=this.controller.ctx;this.tick+=this.controller.speed*(1-.5*Math.sin(this.seed*Math.PI)),i.beginPath();for(var e,n,o=this.controller.$.width/2+(-this.controller.$.width/4+this.seed*(this.controller.$.width/2)),a=this.controller.$.height/2,r=null,h=-3;h<=3;h+=.01)e=o+h*(this.controller.$.width/4),n=a+(t||1)*this._ypos(h),null==r&&(r=e),i.lineTo(e,n);var s=Math.abs(this._ypos(0)),l=i.createRadialGradient(o,a,1.15*s,o,a,.3*s);l.addColorStop(0,"rgba("+this.definition.color+", 0.4)"),l.addColorStop(1,"rgba("+this.definition.color+", 0.2)"),i.fillStyle=l,i.lineTo(r,a),i.closePath(),i.fill()}},{key:"draw",value:function(){this._draw(-1),this._draw(1)}}],[{key:"getDefinition",value:function(){return[{color:"32,133,252"},{color:"94,252,169"},{color:"253,71,103"}]}}]),i}();return function(){function f(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(v(this,f),this.phase=0,this.run=!1,this.$={},null==t.container&&(console.warn("No container defined, using body"),t.container=document.body),this.style=t.style||"ios",this.container=t.container,this.width=t.width||window.getComputedStyle(this.container).width.replace("px",""),this.height=t.height||window.getComputedStyle(this.container).height.replace("px",""),this.ratio=t.ratio||window.devicePixelRatio||1,this.$.width=this.ratio*this.width,this.$.height=this.ratio*this.height,this.$.heightMax=this.$.height/2-4,this.amplitude=null==t.amplitude?1:t.amplitude,this.speed=null==t.speed?.2:t.speed,this.frequency=null==t.frequency?6:t.frequency,this.color=this._hex2rgb(t.color||"#fff"),this.speedInterpolationSpeed=t.speedInterpolationSpeed||.005,this.amplitudeInterpolationSpeed=t.amplitudeInterpolationSpeed||.05,this.$.interpolation={speed:this.speed,amplitude:this.amplitude},this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.width=this.$.width,this.canvas.height=this.$.height,t.cover?this.canvas.style.width=this.canvas.style.height="100%":(this.canvas.style.width=this.$.width/this.ratio+"px",this.canvas.style.height=this.$.height/this.ratio+"px"),this.curves=[],"ios9"===this.style){var i=!0,e=!1,n=void 0;try{for(var o,a=w.getDefinition()[Symbol.iterator]();!(i=(o=a.next()).done);i=!0)for(var r=o.value,h=0;h<3*Math.random()|0;h++)this.curves.push(new w({controller:this,definition:r}))}catch(t){e=!0,n=t}finally{try{i||null==a.return||a.return()}finally{if(e)throw n}}}else{var s=!0,l=!1,c=void 0;try{for(var u,d=y.getDefinition()[Symbol.iterator]();!(s=(u=d.next()).done);s=!0){var p=u.value;this.curves.push(new y({controller:this,definition:p}))}}catch(t){l=!0,c=t}finally{try{s||null==d.return||d.return()}finally{if(l)throw c}}}this.container.appendChild(this.canvas),t.autostart&&this.start()}return t(f,[{key:"_hex2rgb",value:function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,i,e,n){return i+i+e+e+n+n});var i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return i?parseInt(i[1],16).toString()+","+parseInt(i[2],16).toString()+","+parseInt(i[3],16).toString():null}},{key:"_interpolate",value:function(t){var i=this[t+"InterpolationSpeed"];Math.abs(this.$.interpolation[t]-this[t])<=i?this[t]=this.$.interpolation[t]:this.$.interpolation[t]>this[t]?this[t]+=i:this[t]-=i}},{key:"_clear",value:function(){this.ctx.globalCompositeOperation="destination-out",this.ctx.fillRect(0,0,this.$.width,this.$.height),this.ctx.globalCompositeOperation="source-over"}},{key:"_draw",value:function(){for(var t=0,i=this.curves.length;t<i;t++)this.curves[t].draw()}},{key:"_startDrawCycle",value:function(){!1!==this.run&&(this._clear(),this._interpolate("amplitude"),this._interpolate("speed"),this._draw(),this.phase=(this.phase+Math.PI*this.speed)%(2*Math.PI),window.requestAnimationFrame?window.requestAnimationFrame(this._startDrawCycle.bind(this)):setTimeout(this._startDrawCycle.bind(this),20))}},{key:"start",value:function(){this.phase=0,this.run=!0,this._startDrawCycle()}},{key:"stop",value:function(){this.phase=0,this.run=!1}},{key:"setSpeed",value:function(t){this.$.interpolation.speed=t}},{key:"setAmplitude",value:function(t){this.$.interpolation.amplitude=Math.max(Math.min(t,1),0)}}]),f}()}();
;
/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&la(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==oa?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ma.length;){if(c=ma[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return ua++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:xa?M:ya?P:wa?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ea&&d-e===0,g=b&(Ga|Ha)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=ra(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=qa(j.x)>qa(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==Ea&&f.eventType!==Ga||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ha&&(i>Da||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=qa(l.x)>qa(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:pa(a.pointers[c].clientX),clientY:pa(a.pointers[c].clientY)},c++;return{timeStamp:ra(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:pa(a[0].clientX),y:pa(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:pa(c/b),y:pa(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Ia:qa(a)>=qa(b)?0>a?Ja:Ka:0>b?La:Ma}function H(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Ra)+I(a[1],a[0],Ra)}function K(a,b){return H(b[0],b[1],Ra)/H(a[0],a[1],Ra)}function L(){this.evEl=Ta,this.evWin=Ua,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Xa,this.evWin=Ya,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=$a,this.evWin=_a,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ga|Ha)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=bb,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ea|Fa)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ea)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ga|Ha)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a),this.primaryTouch=null,this.lastTouches=[]}function S(a,b){a&Ea?(this.primaryTouch=b.changedPointers[0].identifier,T.call(this,b)):a&(Ga|Ha)&&T.call(this,b)}function T(a){var b=a.changedPointers[0];if(b.identifier===this.primaryTouch){var c={x:b.clientX,y:b.clientY};this.lastTouches.push(c);var d=this.lastTouches,e=function(){var a=d.indexOf(c);a>-1&&d.splice(a,1)};setTimeout(e,cb)}}function U(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(db>=f&&db>=g)return!0}return!1}function V(a,b){this.manager=a,this.set(b)}function W(a){if(p(a,jb))return jb;var b=p(a,kb),c=p(a,lb);return b&&c?jb:b||c?b?kb:lb:p(a,ib)?ib:hb}function X(){if(!fb)return!1;var b={},c=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){b[d]=c?a.CSS.supports("touch-action",d):!0}),b}function Y(a){this.options=la({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=nb,this.simultaneous={},this.requireFail=[]}function Z(a){return a&sb?"cancel":a&qb?"end":a&pb?"move":a&ob?"start":""}function $(a){return a==Ma?"down":a==La?"up":a==Ja?"left":a==Ka?"right":""}function _(a,b){var c=b.manager;return c?c.get(a):a}function aa(){Y.apply(this,arguments)}function ba(){aa.apply(this,arguments),this.pX=null,this.pY=null}function ca(){aa.apply(this,arguments)}function da(){Y.apply(this,arguments),this._timer=null,this._input=null}function ea(){aa.apply(this,arguments)}function fa(){aa.apply(this,arguments)}function ga(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ha(a,b){return b=b||{},b.recognizers=l(b.recognizers,ha.defaults.preset),new ia(a,b)}function ia(a,b){this.options=la({},ha.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=a,this.input=y(this),this.touchAction=new V(this,this.options.touchAction),ja(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ja(a,b){var c=a.element;if(c.style){var d;g(a.options.cssProps,function(e,f){d=u(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""}),b||(a.oldCssProps={})}}function ka(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var la,ma=["","webkit","Moz","MS","ms","o"],na=b.createElement("div"),oa="function",pa=Math.round,qa=Math.abs,ra=Date.now;la="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var sa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),ta=h(function(a,b){return sa(a,b,!0)},"merge","Use `assign`."),ua=1,va=/mobile|tablet|ip(ad|hone|od)|android/i,wa="ontouchstart"in a,xa=u(a,"PointerEvent")!==d,ya=wa&&va.test(navigator.userAgent),za="touch",Aa="pen",Ba="mouse",Ca="kinect",Da=25,Ea=1,Fa=2,Ga=4,Ha=8,Ia=1,Ja=2,Ka=4,La=8,Ma=16,Na=Ja|Ka,Oa=La|Ma,Pa=Na|Oa,Qa=["x","y"],Ra=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Sa={mousedown:Ea,mousemove:Fa,mouseup:Ga},Ta="mousedown",Ua="mousemove mouseup";i(L,x,{handler:function(a){var b=Sa[a.type];b&Ea&&0===a.button&&(this.pressed=!0),b&Fa&&1!==a.which&&(b=Ga),this.pressed&&(b&Ga&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:Ba,srcEvent:a}))}});var Va={pointerdown:Ea,pointermove:Fa,pointerup:Ga,pointercancel:Ha,pointerout:Ha},Wa={2:za,3:Aa,4:Ba,5:Ca},Xa="pointerdown",Ya="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xa="MSPointerDown",Ya="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Va[d],f=Wa[a.pointerType]||a.pointerType,g=f==za,h=r(b,a.pointerId,"pointerId");e&Ea&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ga|Ha)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Za={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},$a="touchstart",_a="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Za[a.type];if(b===Ea&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Ga|Ha)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}}});var ab={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},bb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=ab[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}});var cb=2500,db=25;i(R,x,{handler:function(a,b,c){var d=c.pointerType==za,e=c.pointerType==Ba;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)S.call(this,b,c);else if(e&&U.call(this,c))return;this.callback(a,b,c)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var eb=u(na.style,"touchAction"),fb=eb!==d,gb="compute",hb="auto",ib="manipulation",jb="none",kb="pan-x",lb="pan-y",mb=X();V.prototype={set:function(a){a==gb&&(a=this.compute()),fb&&this.manager.element.style&&mb[a]&&(this.manager.element.style[eb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),W(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,jb)&&!mb[jb],f=p(d,lb)&&!mb[lb],g=p(d,kb)&&!mb[kb];if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}return g&&f?void 0:e||f&&c&Na||g&&c&Oa?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var nb=1,ob=2,pb=4,qb=8,rb=qb,sb=16,tb=32;Y.prototype={defaults:{},set:function(a){return la(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=_(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=_(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=_(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;qb>d&&b(c.options.event+Z(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=qb&&b(c.options.event+Z(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=tb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(tb|nb)))return!1;a++}return!0},recognize:function(a){var b=la({},a);return k(this.options.enable,[this,b])?(this.state&(rb|sb|tb)&&(this.state=nb),this.state=this.process(b),void(this.state&(ob|pb|qb|sb)&&this.tryEmit(b))):(this.reset(),void(this.state=tb))},process:function(a){},getTouchAction:function(){},reset:function(){}},i(aa,Y,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(ob|pb),e=this.attrTest(a);return d&&(c&Ha||!e)?b|sb:d||e?c&Ga?b|qb:b&ob?b|pb:ob:tb}}),i(ba,aa,{defaults:{event:"pan",threshold:10,pointers:1,direction:Pa},getTouchAction:function(){var a=this.options.direction,b=[];return a&Na&&b.push(lb),a&Oa&&b.push(kb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Na?(e=0===f?Ia:0>f?Ja:Ka,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ia:0>g?La:Ma,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return aa.prototype.attrTest.call(this,a)&&(this.state&ob||!(this.state&ob)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i(ca,aa,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&ob)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(da,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[hb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ga|Ha)&&!f)this.reset();else if(a.eventType&Ea)this.reset(),this._timer=e(function(){this.state=rb,this.tryEmit()},b.time,this);else if(a.eventType&Ga)return rb;return tb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===rb&&(a&&a.eventType&Ga?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=ra(),this.manager.emit(this.options.event,this._input)))}}),i(ea,aa,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&ob)}}),i(fa,aa,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Na|Oa,pointers:1},getTouchAction:function(){return ba.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Na|Oa)?b=a.overallVelocity:c&Na?b=a.overallVelocityX:c&Oa&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&qa(b)>this.options.velocity&&a.eventType&Ga},emit:function(a){var b=$(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(ga,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ib]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ea&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ga)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=rb,this.tryEmit()},b.interval,this),ob):rb}return tb},failTimeout:function(){return this._timer=e(function(){this.state=tb},this.options.interval,this),tb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==rb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ha.VERSION="2.0.8",ha.defaults={domEvents:!1,touchAction:gb,enable:!0,inputTarget:null,inputClass:null,preset:[[ea,{enable:!1}],[ca,{enable:!1},["rotate"]],[fa,{direction:Na}],[ba,{direction:Na},["swipe"]],[ga],[ga,{event:"doubletap",taps:2},["tap"]],[da]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ub=1,vb=2;ia.prototype={set:function(a){return la(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?vb:ub},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&rb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===vb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(ob|pb|qb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Y)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){if(a!==d&&b!==d){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this}},off:function(a,b){if(a!==d){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this}},emit:function(a,b){this.options.domEvents&&ka(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ja(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},la(ha,{INPUT_START:Ea,INPUT_MOVE:Fa,INPUT_END:Ga,INPUT_CANCEL:Ha,STATE_POSSIBLE:nb,STATE_BEGAN:ob,STATE_CHANGED:pb,STATE_ENDED:qb,STATE_RECOGNIZED:rb,STATE_CANCELLED:sb,STATE_FAILED:tb,DIRECTION_NONE:Ia,DIRECTION_LEFT:Ja,DIRECTION_RIGHT:Ka,DIRECTION_UP:La,DIRECTION_DOWN:Ma,DIRECTION_HORIZONTAL:Na,DIRECTION_VERTICAL:Oa,DIRECTION_ALL:Pa,Manager:ia,Input:x,TouchAction:V,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:aa,Tap:ga,Pan:ba,Swipe:fa,Pinch:ca,Rotate:ea,Press:da,on:m,off:n,each:g,merge:ta,extend:sa,assign:la,inherit:i,bindFn:j,prefixed:u});var wb="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};wb.Hammer=ha,"function"==typeof define&&define.amd?define(function(){return ha}):"undefined"!=typeof module&&module.exports?module.exports=ha:a[c]=ha}(window,document,"Hammer");

(function ($) {
    var diameter = window.innerHeight * (window.innerWidth < 1600 ? .85 : .75),
        radius = diameter / 2,
        innerRadius = radius - 120,
        w = window.innerWidth,
        h = window.innerHeight,
        rx = w / 2,
        ry = h / 2,
        rotate = 0,
        hovered = false,
        rotationTimer = 20000,
        m1, m01, rotateTimeout,
        mobileNebula = function (json) {
            var $container = $('.nebula-accordion-container:first'),
                $siri = $('.mobile-nebula-sinewave:first'),
                html = '',
                timer;

            $.each(json, function (index, obj) {
                if (obj.imports.length > 0) {
                    html += '<div class="nebula-accordion">' +
                        '<span class="nebula-accordion__trigger"></span>' +
                        '<h5 class="nebula-accordion__title">' + obj.name + '</h5>' +
                        '<div class="nebula-accordion__content">' +
                            '<ul>' +
                                $.map(obj.imports, function (v) {
                                    return '<li>' + v + '</li>';
                                }).join('') +
                            '</ul>' +
                        '</div>' +
                    '</div>';
                }
            });

            $container
                .html(html)
                .height = $container.outerHeight();

            $container.accordion = $container.find('> .nebula-accordion');
            $container.sectionParent = $container.closest('.mobile-nebula-section');

            $container.accordion.find('.nebula-accordion__trigger, .nebula-accordion__title').on('click', function (e) {
                var $accordion = $(this).closest('.nebula-accordion');

                if (timer) clearTimeout(timer);

                if (!$accordion.hasClass('active')) {
                    $container.sectionParent.addClass('active');
                    $container.accordion.each(function () {
                        var $this = $(this);

                        if ($accordion.get(0) === this) {
                            $this.find('.nebula-accordion__content').slideDown(function () {
                                $this.addClass('active');

                                timer = setTimeout(function () {
                                    $this.find('.nebula-accordion__trigger:first').trigger('click');
                                }, rotationTimer);
                            });
                        } else {
                            $this.find('.nebula-accordion__content').slideUp(function () {
                                $this.removeClass('active');
                            });
                        }
                    });
                } else {
                    $accordion.find('.nebula-accordion__content').slideUp(function () {
                        $accordion.add($container.sectionParent).removeClass('active');
                    });
                }
            });

            $siri.css('width', $container.height);

            window.wave = new SiriWave({
                container: $siri[0],
                width: $container.height,
                height: 60,
                autostart: true,
                speed: 0.01,
                cover: true,
                frequency: 2,
                amplitudeInterpolationSpeed: 10
            });
        };

    $hint = $('#nebula-slide .hint:first');

    var cluster = d3.cluster()
        .size([360, innerRadius]);

    var line = d3.radialLine()
        .curve(d3.curveBundle.beta(0.2))
        .radius(function (d) {
            return d.y;
        })
        .angle(function (d) {
            return d.x / 180 * Math.PI;
        });

    var div = d3.select('#nebula-container')
        .style('width', w + 'px')
        .style('height', h + 'px');

    var svg = div.append("svg");
    var svg_g = svg
        .attr("width", window.innerWidth)
        .attr("height", window.innerHeight)
        .append("g")
        .attr("transform", "translate(" + window.innerWidth / 2 + "," + window.innerHeight / 2 + ")");

    var link = svg_g.append("g").selectAll(".link"),
        node = svg_g.append("g").selectAll(".node"),
        circle;

    d3.json(window.__globals.jsonPath + 'afcons_' + document.documentElement.lang + '.json', function (error, classes) {
        if (error) throw error;

        mobileNebula(classes);

        var $nodes,
            root = packageHierarchy(classes)
            .sum(function (d) {
                return d.size;
            });

        cluster(root);

        link = link
            .data(packageImports(root.leaves()))
            .enter().append("path")
            .each(function (d) {
                d.source = d[0], d.target = d[d.length - 1];
                d.totalLength = this.getTotalLength();
            })
            .attr("d", line)
            .attr('stroke-dashoffset', function (d, index, paths) {
                return paths[index].getTotalLength();
            })
            .attr('stroke-dasharray', function (d, index, paths) {
                return paths[index].getTotalLength();
            })
            .attr('class', 'link withTransition');

        node = node
            .data(root.leaves())
            .enter().append("svg:g")
            .attr("class", function (d) {
                return d.data.class;
            })
            .attr("transform", function (d) {
                return "rotate(" + (d.x - 90) + ")translate(" + (d.y + 8) + ",0)" + (d.x < 180 ? "" : "rotate(180)");
            })
            .on('click', clicked)
            .on('mouseenter', function () {
                /* if (window.animatePaths.done && !hovered) {
                    hovered = true;
                } */
            })
            .append("text")
            .classed('active', true)
            .attr("dx", function (d) {
                return d.x < 180 ? 8 : -8;
            })
            .attr("dy", "0.31em")
            .attr("text-anchor", function (d) {
                return d.x < 180 ? "start" : "end";
            })
            .text(function (d) {
                return d.data.key;
            });

        circle = svg_g.selectAll("g.node")
            .append("circle")
            .attr("dx", function (d) {
                return d.x < 180 ? 8 : -8;
            })
            .attr("dy", ".31em")
            .attr("r", 2);

        $nodes = $('.node').filter(function () {
            var regAngles = /^rotate\((180|179|181|178|182|177|183|176|184|175|185)/;

            return regAngles.test(this.getAttribute('transform'));
        });

        m1 = $nodes.last().find('> circle:first').get(0);

        m01 = $nodes.first().find('> circle:first').get(0);

        m1 = getMouseXY(m1);

        m01 = getMouseXY(m01);

        onClick(true);
    });

    function getMouseXY(circle) {
        var dim = circle.getBoundingClientRect();

        dim = {
            pageX: dim.left,
            pageY: dim.top
        };

        return mouse(dim);
    }

    function mouseovered(d) {
        node.each(function (n) {
            n.target = n.source = false;
        });

        link
            .classed("link--target", function (l) {
                if (l.target === d) return l.source.source = true;
            })
            .classed("link--source", function (l) {
                if (l.source === d) return l.target.target = true;
            })
            .filter(function (l) {
                return l.target === d || l.source === d;
            })
            .raise();

        node
            .classed("node--target", function (n) {
                return (n === d && d.data.imports.length === 0) ? true : n.target;
            })
            .classed("node--source", function (n) {
                return (n === d && d.data.imports.length > 0) ? true : n.source
            });

        circle
            .classed('active', function (n) {
                return n === d;
            });
    }

    function mouseouted(d) {
        link
            .classed("link--target", false)
            .classed("link--source", false);

        node
            .classed('active', false)
            .classed("node--target", false)
            .classed("node--source", false);

        circle.classed('active', false);
    }

    function clicked(d) {
        if (window.animatePaths.done) {
            mouseouted(d);
            mouseovered(d);

            if ( rotateTimeout ) clearTimeout(rotateTimeout);

            hovered = true;

            $hint.animate({ opacity: .1 });

            onClick();

            rotateTimeout = setTimeout(function () {
                hovered = false;

                svg_g
                    .selectAll('text')
                    .classed('node--source', false)
                    .classed('node--target', false)
                    .classed('active', true);

                svg_g
                    .selectAll('circle')
                    .classed('active', false);

                svg
                    .selectAll('.link')
                    .classed('link--source', false)
                    .classed('link--target', false);

                $hint.animate({ opacity: 1 });

                onClick(true);
            }, rotationTimer);
        }
    }

    // Lazily construct the package hierarchy from class names.
    function packageHierarchy(classes) {
        var map = {};

        function find(name, data) {
            var node = map[name],
                i;
            if (!node) {
                node = map[name] = data || {
                    name: name,
                    children: []
                };
                if (name.length) {
                    node.parent = find(name.substring(0, i = name.lastIndexOf(".")));
                    node.parent.children.push(node);
                    node.key = name.substring(i + 1);
                    node.class = (node.imports.length > 0) ? 'node parent' : 'node';
                }
            }
            return node;
        }

        classes.forEach(function (d) {
            find(d.name, d);
        });

        return d3.hierarchy(map[""]);
    }

    // Return a list of imports for the given array of nodes.
    function packageImports(nodes) {
        var map = {},
            imports = [];

        // Compute a map from name to node.
        nodes.forEach(function (d) {
            map[d.data.name] = d;
        });

        // For each import, construct a link from the source to target node.
        nodes.forEach(function (d) {
            if (d.data.imports) d.data.imports.forEach(function (i) {
                try {
                    imports.push(map[d.data.name].path(map[i]));
                } catch (e) {}
            });
        });

        return imports;
    }

    window.animatePaths = function (cb) {
        var count = 0,
            totalPaths = $('.link')
                .one('transitionend', function () {
                    this.removeAttribute('stroke-dashoffset');

                    if (++count === totalPaths) {
                        window.animatePaths.done = true;

                        if (typeof cb === 'function') cb();
                    }
                })
                .attr('stroke-dashoffset', 0)
                .length;
    };

    function mouse(e) {
        return [e.pageX - rx, e.pageY - ry];
    }

    function onClick(automatic) {
        var _div = div._groups[0][0],
            m0 = automatic ? m01 : getMouseXY(d3.event.target.closest('g').querySelector('circle')),
            dm = Math.atan2(cross(m0, m1), dot(m0, m1)) * 180 / Math.PI,
            transitionFn = function (e) {
                var g;

                if (e.propertyName === 'transform' && e.target === _div) {
                    if (automatic && !hovered) {
                        setTimeout(function () {
                            onClick(true);
                        }, 0);
                    }

                    _div.removeEventListener('transitionend', transitionFn);

                    if (rotate > 360) rotate -= 360;
                    else if (rotate < 0) rotate += 360;

                    div.attr('class', 'noTransition');
                    div.style('transform', null);

                    g = svg_g
                        .attr("transform", "translate(" + rx + "," + ry + ")rotate(" + rotate + ")")
                        .selectAll("g.node")
                        .attr('transform', function (d) {
                            var transform = "rotate(" + (d.x - 90) + ")translate(" + (d.y + 8) + ",0)";

                            if ((d.x + rotate) % 360 < 180) {
                                transform += "rotate(0)";
                            }

                            return transform;
                        });

                    g.selectAll('text')
                        .attr("dx", function (d) {
                            return (d.x + rotate) % 360 < 180 ? 8 : -8;
                        })
                        .attr("text-anchor", function (d) {
                            return (d.x + rotate) % 360 < 180 ? "start" : "end";
                        })
                        .attr("transform", function (d) {
                            return (d.x + rotate) % 360 < 180 ? null : "rotate(180)";
                        });

                    if (!automatic) g.classed('fade', false);
                }
            };

        rotate += dm;
        _div.removeEventListener('transitionend', transitionFn);

        if (!automatic) svg_g.selectAll('.node').classed('fade', true);

        div
            .attr('class', automatic ? 'linearTransition' : null)
            .style("transform", "rotate(" + dm + "deg)");

        _div.addEventListener('transitionend', transitionFn);
    }

    function cross(a, b) {
        return a[0] * b[1] - a[1] * b[0];
    }

    function dot(a, b) {
        return a[0] * b[0] + a[1] * b[1];
    }
}.call(window, window.jQuery));;
!function ($) {
    'use strict';

    var
        isAnimating = false,
        animationEnd = 'webkitAnimationEnd oanimationend oAnimationEnd msAnimationEnd animationend',
        $testimonialSlider = window.__globals.$body.find('.testimonial-slide__slider:visible'),
        $scrollUp = window.__globals.$body.find('.scroll-up:first'),
        $slideWrapper = window.__globals.$body.find('.slide-wrapper:first'),
        $slides = $slideWrapper.find('.slide'),
        translateY = 55 * window.innerWidth / 1366,
        parallaxDelay = 400,
        parallaxDelayDuration = 500,
        parallaxDuration = 600,
        hBanner,
        toggleHammer = function () {
            if ( window.innerWidth > 1000 && window.innerWidth > window.innerHeight ) {
                hBanner.get('swipe').set({
                    enable: true
                });
            } else {
                hBanner.get('swipe').set({
                    enable: false
                });
            }
        },
        parallaxObjectTransition = function (dir, currSlide, nextSlide, extraCurrClass, extraNextClass, noParallaxDelay) {
            try {

                var parallaxObjects = {};

                /**
                 * noParallax is a boolean flag to fix transition delay bug for slide 8 overlay
                 */

                if (typeof currSlide === 'number') {
                    parallaxObjects[currSlide] = $slides.eq(currSlide).data('parallax-objects').filter(extraCurrClass || '.parallax-object');
                }

                if (typeof nextSlide === 'number') {
                    parallaxObjects[nextSlide] = $slides.eq(nextSlide).data('parallax-objects').filter(extraNextClass || '.parallax-object');
                }

                if (dir === 'up') {
                    if ( parallaxObjects[currSlide] ) {
                        parallaxObjects[currSlide]
                            .transition({ y: translateY }, parallaxDuration);
                    }

                    if ( parallaxObjects[nextSlide] ) {
                        parallaxObjects[nextSlide]
                            .css({ y: translateY * -1 })
                            .transition({ y: 0, delay: noParallaxDelay ? 0 : parallaxDelay }, noParallaxDelay ? parallaxDuration : parallaxDelayDuration);
                    }
                } else {
                    if ( parallaxObjects[currSlide] ) {
                        parallaxObjects[currSlide]
                            .transition({ y: translateY * -1 }, parallaxDuration)
                    }

                    if ( parallaxObjects[nextSlide] ) {
                        parallaxObjects[nextSlide]
                            .transition({ y: 0, delay: parallaxDelay }, parallaxDelayDuration);
                    }
                }
            } catch (e) {
                console.error('Exception in parallax transition: ', e)
            }
        },
        scaleFadeSlides = function (scaleSlideIndex, fadeSlideIndex, cb) {
            $slides.eq(scaleSlideIndex)
                .one(animationEnd, function (e) {
                    $slideWrapper.attr('data-active', fadeSlideIndex);
                    $slides.eq(scaleSlideIndex).removeClass('active-slide animate-zoomIn').removeAttr('style');
                    $slides.eq(fadeSlideIndex).removeClass('next-active-slide');

                    if (typeof cb === 'function') cb();
                })
                .addClass('active-slide animate-zoomIn');

            $slides.eq(fadeSlideIndex).addClass('next-active-slide');
        },
        transitionSlides = function (currSlideIndex, nextSlideIndex, cb) {
            var i = 0,
                $currSlide = $slides.eq(currSlideIndex),
                $nextSlide = $slides.eq(nextSlideIndex);

            $currSlide.add($nextSlide).one(animationEnd, function (e) {
                $(this).off(animationEnd).removeClass('animate-center-to-bottom animate-center-to-top animate-bottom-to-center animate-top-to-center');

                if (++i === 2) {
                    $slideWrapper.attr('data-active', nextSlideIndex);

                    if (typeof cb === 'function') {
                        cb();
                    }
                }
            });

            if (currSlideIndex < nextSlideIndex) { // scroll up
                $currSlide.addClass('animate-center-to-bottom');
                $nextSlide.addClass('animate-top-to-center');
            } else {
                $currSlide.addClass('animate-center-to-top');
                $nextSlide.addClass('animate-bottom-to-center');
            }

            $currSlide = $nextSlide = undefined;
        },
        slides = {
            '0': {
                scroll_up: function (nextSlide, cb) {
                    parallaxObjectTransition('up', 0, nextSlide);

                    transitionSlides(0, nextSlide, function () {
                        if (typeof cb === 'function') {
                            cb();
                        }
                    });
                }
            },
            '1': {
                scroll_up: function (nextSlide, cb) {
                    var init = (typeof window.animatePaths === 'function' && window.animatePaths.done),
                        overlayStatus = $slides.eq(1).attr('data-overlay') === 'true';

                    if ( overlayStatus ) {
                        if (!init) {
                            $slides.eq(1).find('#nebula-container').addClass('done');

                            setTimeout(function () {
                                window.animatePaths(cb);
                            }, 600);
                        } else if (typeof cb === 'function') {
                            setTimeout(cb, 600);
                        }

                        $slides.eq(1).attr('data-overlay', false);
                    } else {
                        scaleFadeSlides(1, nextSlide, cb);
                    }
                },
                scroll_down: function (nextSlide, cb) {
                    var overlayStatus = $slides.eq(1).attr('data-overlay') === 'true';

                    if ( overlayStatus ) {
                        parallaxObjectTransition('down', 1, nextSlide);

                        transitionSlides(1, nextSlide, function () {
                            if (typeof cb === 'function') {
                                cb();
                            }
                        });
                    } else {
                        $slides.eq(1).attr('data-overlay', true);
                        setTimeout(cb, 600);
                    }
                }
            },
            '2': {
                scroll_up: function (nextSlide, cb) {
                    parallaxObjectTransition('up', '2', nextSlide);

                    transitionSlides(2, nextSlide, function () {
                        if (typeof cb === 'function') {
                            cb();
                        }
                    });
                },
                scroll_down: function (nextSlide, cb) {
                    transitionSlides(2, nextSlide, function () {
                        if (typeof cb === 'function') {
                            cb();
                        }
                    });
                }
            },
            '3': {
                scroll_up: function (nextSlide, cb) {
                    $slides.eq(nextSlide).attr('data-overlay', 'true')

                    parallaxObjectTransition('up', 3, nextSlide, undefined, '.parallax-object.slide-overlay__text')

                    transitionSlides(3, nextSlide, function () {
                        if (typeof cb === 'function') {
                            cb();
                        }
                    });
                },
                scroll_down: function (nextSlide, cb) {
                    parallaxObjectTransition('down', 3, nextSlide.toString())

                    transitionSlides(3, nextSlide, function () {
                        if (typeof cb === 'function') {
                            cb();
                        }
                    });
                }
            },
            '4': {
                scroll_up: function (nextSlide, cb) {
                    var overlayStatus = $slides.eq(4).attr('data-overlay') === 'true';

                    if (overlayStatus) {
                        $slides.eq(4)
                            .attr('data-overlay', 'false')
                            .find('.slide-overlay').one(animationEnd, function (e) {
                                $(this).off(animationEnd);

                                if (typeof cb === 'function') {
                                    cb();
                                }
                            });
                    } else {
                        parallaxObjectTransition('up', 4, nextSlide, '.project-slide__content_container.parallax-object', undefined);

                        transitionSlides(4, nextSlide, function () {
                            if (typeof cb === 'function') {
                                cb();
                            }
                        });
                    }
                },
                scroll_down: function (nextSlide, cb) {
                    var overlayStatus = $slides.eq(4).attr('data-overlay') === 'true';

                    if (overlayStatus) {
                        parallaxObjectTransition('down', 4, nextSlide, '.parallax-object.slide-overlay__text', undefined);

                        transitionSlides(4, nextSlide, function () {
                            if (typeof cb === 'function') {
                                cb();
                            }
                        });
                    } else {
                        $slides.eq(4)
                            .attr('data-overlay', 'true')
                            .find('.slide-overlay').one(animationEnd, function () {
                                $(this).off(animationEnd);

                                if (typeof cb === 'function') {
                                    cb();
                                }
                            });
                    }
                }
            },
            '5': {
                scroll_up: function (nextSlide, cb) {
                    parallaxObjectTransition('up', 5, nextSlide);

                    transitionSlides(5, nextSlide, function () {
                        if (typeof cb === 'function') {
                            cb();
                        }
                    });
                },
                scroll_down: function (nextSlide, cb) {
                    $slides.eq(5).find('.parallax-object')
                        .transition({ y: translateY * -1 }, parallaxDuration);

                    $slides.eq(nextSlide).attr('data-overlay', 'false')
                        .find()
                        .transition({ y: 0, delay: parallaxDelay }, parallaxDelayDuration);

                    parallaxObjectTransition('down', 5, nextSlide, undefined, '.project-slide__content_container.parallax-object');

                    transitionSlides(5, nextSlide, function () {
                        if (typeof cb === 'function') {
                            cb();
                        }
                    });
                }
            },
            '6': {
                scroll_up: function (nextSlide, cb) {
                    parallaxObjectTransition('up', 6, nextSlide);

                    transitionSlides(6, nextSlide, function () {
                        if (typeof cb === 'function') {
                            cb();
                        }
                    });
                },
                scroll_down: function (nextSlide, cb) {
                    parallaxObjectTransition('down', 6, nextSlide);

                    transitionSlides(6, nextSlide, function () {
                        if (typeof cb === 'function') {
                            cb();
                        }
                    });
                }
            },
            '7': {
                scroll_up: function (nextSlide, cb) {
                    parallaxObjectTransition('up', 7, nextSlide, undefined, '.project-slide__content_container.parallax-object');

                    transitionSlides(7, nextSlide, function () {
                        if (typeof cb === 'function') {
                            cb();
                        }
                    });
                },
                scroll_down: function (nextSlide, cb) {
                    parallaxObjectTransition('down', 7, nextSlide);

                    transitionSlides(7, nextSlide, function () {
                        if (typeof cb === 'function') {
                            cb();
                        }
                    });
                }
            },
            '8': {
                scroll_up: function (nextSlide, cb) {
                    var overlayStatus = $slides.eq(8).attr('data-overlay') === 'true';

                    if (!overlayStatus) {
                        parallaxObjectTransition('up', undefined, nextSlide, undefined, '.overlay-parallax-object.parallax-object', true);

                        $slides.eq(8)
                            .attr('data-overlay', 'true')
                            .find('.slide-overlay').one(animationEnd, function (e) {
                                $(this).off(animationEnd);

                                if (typeof cb === 'function') {
                                    cb();
                                }
                            });
                    } else {
                        parallaxObjectTransition('up', 8, nextSlide, '.overlay-parallax-object.parallax-object', '.newsroom-container.parallax-object');

                        transitionSlides(8, nextSlide, function () {
                            if (typeof cb === 'function') {
                                cb();
                            }
                        });
                    }
                },
                scroll_down: function (nextSlide, cb) {
                    var overlayStatus = $slides.eq(8).attr('data-overlay') === 'true';

                    if (overlayStatus) {
                        parallaxObjectTransition('down', 8, nextSlide.toString(), '.overlay-parallax-object.parallax-object');

                        $slides.eq(8)
                            .attr('data-overlay', 'false')
                            .find('.slide-overlay').one(animationEnd, function () {
                                $(this).off(animationEnd);

                                if (typeof cb === 'function') {
                                    cb();
                                }
                            });
                    } else {
                        parallaxObjectTransition('down', 8, nextSlide, '.project-slide__content_container.parallax-object');

                        transitionSlides(8, nextSlide, function () {
                            if (typeof cb === 'function') {
                                cb();
                            }
                        });
                    }
                }
            },
            '9': {
                scroll_up: function (nextSlide, cb) {
                    parallaxObjectTransition('up', 9, nextSlide);

                    transitionSlides(9, nextSlide, function () {
                        if (typeof cb === 'function') {
                            cb();
                        }
                    });
                },
                scroll_down: function (nextSlide, cb) {
                    parallaxObjectTransition('down', 9, nextSlide);

                    transitionSlides(9, nextSlide, function () {
                        if (typeof cb === 'function') {
                            cb();
                        }
                    });
                }
            },
            '10': {
                scroll_up: function (nextSlide, cb) {
                    parallaxObjectTransition('up', 10, nextSlide);

                    transitionSlides(10, nextSlide, function () {
                        if (typeof cb === 'function') {
                            cb();
                        }
                    });
                },
                scroll_down: function (nextSlide, cb) {
                    parallaxObjectTransition('down', 10, nextSlide);

                    transitionSlides(10, nextSlide, function () {
                        if (typeof cb === 'function') {
                            cb();
                        }
                    });
                }
            },
            '11': {
                scroll_up: function (nextSlide, cb) {
                    parallaxObjectTransition('up', 11, nextSlide);

                    transitionSlides(11, nextSlide, function () {
                        if (typeof cb === 'function') {
                            cb();
                        }
                    });
                },
                scroll_down: function (nextSlide, cb) {
                    parallaxObjectTransition('down', 11, nextSlide);

                    transitionSlides(11, nextSlide, function () {
                        if (typeof cb === 'function') {
                            cb();
                        }
                    });
                }
            },
            '12': {
                scroll_up: function (nextSlide, cb) {
                    parallaxObjectTransition('up', 12, nextSlide);

                    transitionSlides(12, nextSlide, function () {
                        if (typeof cb === 'function') {
                            cb();
                        }
                    });
                },
                scroll_down: function (nextSlide, cb) {
                    parallaxObjectTransition('down', 12, nextSlide);

                    transitionSlides(12, nextSlide, function () {

                        if (typeof cb === 'function') {
                            cb();
                        }
                    });
                }
            },
            '13': {
                scroll_up: function (nextSlide, cb) {
                    parallaxObjectTransition('up', 13, nextSlide);

                    transitionSlides(13, nextSlide, function () {
                        if (typeof cb === 'function') {
                            cb();
                        }
                    });
                },
                scroll_down: function (nextSlide, cb) {
                    parallaxObjectTransition('down', 13, nextSlide);

                    transitionSlides(13, nextSlide, function () {
                        if (typeof cb === 'function') {
                            cb();
                        }
                    });
                }
            },
            '14': {
                scroll_up: function (nextSlide, cb) {
                    parallaxObjectTransition('up', 14, nextSlide);

                    transitionSlides(14, nextSlide, function () {
                        if (typeof cb === 'function') {
                            cb();
                        }
                    });
                },
                scroll_down: function (nextSlide, cb) {
                    parallaxObjectTransition('down', 14, nextSlide);

                    transitionSlides(14, nextSlide, function () {
                        if (typeof cb === 'function') {
                            cb();
                        }
                    });
                }
            },
            '15': {
                /* scroll_up: function (nextSlide, cb) {
                    parallaxObjectTransition('up', 15, nextSlide);

                    transitionSlides(15, nextSlide, function () {
                        if (typeof cb === 'function') {
                            cb();
                        }
                    });
                }, */
                scroll_down: function (nextSlide, cb) {
                    parallaxObjectTransition('down', 15, nextSlide, '.newsroom-container.parallax-object', '.overlay-parallax-object.parallax-object');

                    transitionSlides(15, nextSlide, function () {
                        if (typeof cb === 'function') {
                            cb();
                        }
                    });
                }
            },
            /* '16': {
                scroll_down: function (nextSlide, cb) {
                    parallaxObjectTransition('down', 16, nextSlide);

                    transitionSlides(16, nextSlide, function () {
                        if (typeof cb === 'function') {
                            cb();
                        }
                    });
                }
            }, */
            length: $slides.length
        },
        animateSlide = function (dir) {
            var currSlide = +$slideWrapper.attr('data-active'),
                nextSlide;

            if (isAnimating) return false;

            /**
             * up - next
             * down - prev
             */

            isAnimating = true;

            nextSlide = dir === 'up' ? currSlide + 1 : currSlide - 1;

            if ( dir === 'up' ) {
                if ( currSlide === 4 && $slides.eq(4).attr('data-overlay') === 'true' ) {
                    nextSlide = 4;
                } else if ( currSlide === 8 ) {
                    if ( $slides.eq(8).attr('data-overlay') === 'true' ) {
                        nextSlide = 14;
                    } else {
                        nextSlide = currSlide;
                    }
                }
            } else if ( dir === 'down' ) {
                if ( currSlide === 14 ) {
                    nextSlide = 8;
                } else if ( currSlide === 8 && $slides.eq(8).attr('data-overlay') === 'true' ) {
                    nextSlide = currSlide;
                } else if ( currSlide === 4 && $slides.eq(4).attr('data-overlay') !== 'true' ) {
                    nextSlide = currSlide;
                }
            }

            if (
                (
                    (dir === 'up' && nextSlide < slides.length) ||
                    (dir === 'down' && nextSlide >= 0)
                ) &&
                typeof slides[currSlide]['scroll_' + dir] === 'function'
            ) {
                $scrollUp.removeClass('active');
                slides[currSlide]['scroll_' + dir](nextSlide, function () {
                    var className = (nextSlide === slides.length - 1) ? 'last-frame' : 'active';

                    $scrollUp.removeClass('active last-frame').addClass(className);
                    isAnimating = false;
                });
            } else {
                isAnimating = false;
            }
        };

    window.__globals.$body.find('.banner-slider').slick({
        fade: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 11000,
        arrows: true
    });

    $testimonialSlider
        .on('beforeChange', function (e, s, c, n) {
            $.each(videojs.players, function (id, _player) {
                _player.pause();
                _player.currentTime(0);
            });
        })
        /* .on('afterChange', function (e, s, i) {
            var bcID = s.$slides.eq(i).find('.show-player [data-bc-id]').attr('data-bc-id');

            if ( bcID && videojs.players[bcID] ) {
                // videojs.players[bcID].play();
            }
        }) */
        .slick({
            fade: true,
            arrows: false,
            infinite: true
        });

    window.__globals.$body.find('.newsroom-ticker')
        .slick({
            vertical: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000
        });

    window.__globals.$body.find('.testimonial-slide__nav[data-dir]').on('click', function (e) {
        $testimonialSlider.slick('slick' + this.getAttribute('data-dir'));
    });

    window.__globals.$body.find('.project-tile[data-slide-target]').on('click', function (e) {
        var currSlide = +$slideWrapper.attr('data-active'),
        nextSlide = +this.getAttribute('data-slide-target');

        isAnimating = true;
        transitionSlides(currSlide, nextSlide, function () {
            isAnimating = false;
        });
    });

    d3.json(window.__globals.jsonPath + 'dust.config.json', function (error, config) {
        particlesJS('bubbles', config);
    });

    if ('ontouchstart' in document) {
        hBanner = new Hammer($slideWrapper.get(0));

        hBanner.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

        hBanner.on('swipe', function (e) {
            var dir;

            if (e.direction === Hammer.DIRECTION_UP) {
                dir = 'down';
            } else if (e.direction === Hammer.DIRECTION_DOWN) {
                dir = 'up';
            }

            if (dir) animateSlide(dir);
        });

        toggleHammer();
        $(window).on('resize', toggleHammer);
    }

    $(document)
        .on('mousewheel.banner DOMMouseScroll.banner', function (event) {
            var dir = (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) ? 'down' : 'up';

            animateSlide(dir);
        })
        .on('keydown.banner', function (event) {
            var dir;

            if (!event.ctrlKey && !event.altKey && !event.shiftKey) {
                switch (event.keyCode) {
                    case 36: // Home
                    case 37: // left
                    case 38: // up
                    case 33: // page up
                    dir = 'up';
                    break;

                    case 35: // end
                    case 39: // right
                    case 40: // down
                    case 34: // page down
                    dir = 'down';
                    break;
                }

                if (dir) animateSlide(dir);
            }
        });


    $slides.each(function () {
        $(this).data('parallax-objects', $(this).find('.parallax-object'));
    });

    // mobile related JS
    window.__globals.$body.find('.mobile-projects-slider').each(function () {
        var $slider = $(this),
            $prev = $('<button class="prev" data-dir="Prev">Prev</button>'),
            $next = $('<button class="next" data-dir="Next">Next</button>');

        $slider
            .on('init', function () {
                $slider.append($prev, $next);
            })
            .slick({
                fade: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 10000
            });

        $prev.add($next).on('click', function (e) {
            $slider.slick('slick' + this.getAttribute('data-dir'));
        });
    });

    window.__globals.$body.find('.mobile-fixed-news-slider').slick({
        fade: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 10000
    });

    // init slider for more projects
    window.__globals.$body.find('.project-list').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true
    })

    window.__globals.$body.addClass('ready');
}.call(window, window.jQuery);;
(function ($) {
    'use strict';

    var init_BC = function ($parent, id) {
            try {
                $(this).attr(JSON.parse(this.innerHTML));

                bc[id] = window.bc( this );

                bc[id].ready(function () {
                    $parent.addClass('player-ready');

                    var onEnded = function (e) {
                        $parent.removeClass('playing');
                    };

                    bc[id].on('play', function (e) {
                        $parent.addClass('playing');
                    });

                    bc[id].on('pause', onEnded);
                    bc[id].on('ended', onEnded);

                    bc[id].play();
                });

            } catch (e) {
                console.error('Error in BrightCove initialization!', e);
            }
        },
        stop_bc_player = function () {
            bc && $.each(bc, function () {
                this.pause();
                this.currentTime(0);
            });
        },
        destroy_bc_players = function () {
            bc && $.each(bc, function (id) {
                this.dispose();

                delete bc[id];
            });

            bc = undefined;
        },
        $popUp = $('.community-initiative-popup-container'),
        bc = {};

    // init
    $popUp
        .on('mousewheel DOMMouseScroll keydown touchstart touchmove', function (e) {
            e.stopPropagation();
        })
        .fadeIn("fast", function () {
            $popUp.find(".popup-community-gallery-slider")
                .on('init', function (e, s) {
                    s.$slides.find('.popup-poster').on('click', function () {
                        var $parent = $(this).closest('.has-iframe').addClass('playing'),
                            videoKey = $parent.data('video-key');

                        if ( !videoKey ) {
                            $parent.find('.video-js')
                                .each(function () {
                                    $parent.data('video-key', this.id);

                                    init_BC.call(this, $parent, this.id);
                                });
                        } else {
                            bc[videoKey].ready(function () {
                                this.play();
                            });
                        }
                    })
                })
                .on('beforeChange', function () {
                    stop_bc_player();
                })
                .slick({
                    variableWidth: true,
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                variableWidth: false,
                                centerMode: false
                            }
                        }
                    ]
                });

            $(".close-icon-popup").one('click', function (e) {
                $popUp.fadeOut("fast", function () {
                    $popUp.find('.popup-community-gallery-slider').slick('unslick');
                    $popUp = destroy_bc_players = stop_bc_player = init_BC = undefined;
                });

                stop_bc_player();
                destroy_bc_players();
            });
        });
}.call(window, window.jQuery));;
(function ($) {
  $('.play-btn').click(function(e){
    $('video').trigger('pause')
    $(this).siblings('video').trigger('play')
})

$('.crossImg').click(function(e){
$('video').trigger('pause')
})

$('.prevArrow').click(function(e){
$('video').trigger('pause')
})

$('.nextArrow').click(function(e){
$('video').trigger('pause')
})

})(jQuery);;
