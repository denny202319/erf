class SlideshowClass extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{swiperContainer:".twae-slideshow.swiper-container"}}}getDefaultElements(){const selectors=this.getSettings("selectors");return{$swiperContainer:this.$element.find(selectors.swiperContainer)}}bindEvents(){var selector;this.elements.$swiperContainer.each((function(index){var selectorID=".twae-slideshow#"+jQuery(this).attr("id"),swiperElement=jQuery(selectorID).not(".swiper-container-initialized")[0],auto_height=!0,Navigation,nextButton=jQuery(swiperElement).find(".twae-icon-right-open")[0],prevButton=jQuery(swiperElement).find(".twae-icon-left-open")[0],lang_dir,autoplay,swiper;if("rtl"==jQuery(swiperElement).attr("dir"))var Navigation={nextEl:prevButton,prevEl:nextButton};else Navigation={nextEl:nextButton,prevEl:prevButton};var swiperConfig={autoplay:jQuery(swiperElement).data("slideshow_autoplay"),delay:5e3,slidesPerView:1,direction:"horizontal",navigation:Navigation,autoHeight:!0,on:{slideChange:function(){const vr_layout=jQuery(".twae-vertical.twae-wrapper");if(vr_layout.length>0){const animation=vr_layout.find(".twae-content.aos-init").data("aos");"none"!==animation&&"object"==typeof AOS&&setTimeout(()=>{AOS.refresh()},500)}}}};if("undefined"==typeof Swiper){const asyncSwiper=elementorFrontend.utils.swiper;new asyncSwiper(swiperElement,swiperConfig).then(newSwiperInstance=>{swiper=newSwiperInstance})}else swiper=new Swiper(swiperElement,swiperConfig)}))}}jQuery(window).on("elementor/frontend/init",()=>{const addHandler=$element=>{elementorFrontend.elementsHandler.addHandler(SlideshowClass,{$element:$element})};elementorFrontend.hooks.addAction("frontend/element_ready/timeline-widget-addon.default",addHandler)});;