var tpj=jQuery;
			
			var revapi5;
			tpj(document).ready(function() {
				if(tpj("#discover").revolution == undefined){
					revslider_showDoubleJqueryError("#discover");
				}else{
					revapi5 = tpj("#discover").show().revolution({
						sliderType:"standard",
jsFileLocation:"//cdf-emballage.ch/revslider/revslider/public/assets/js/",
						sliderLayout:"fullwidth",
						dottedOverlay:"none",
						delay:9000,
						navigation: {
							onHoverStop:"off",
						},
						viewPort: {
							enable:true,
							outof:"wait",
                            visible_area:"80%",
                            presize:false
						},
						responsiveLevels:[1240,1024,778,480],
						visibilityLevels:[1240,1024,778,480],
						gridwidth:[1240,1024,778,480],
						gridheight:[955,833,717,1863],
						lazyType:"single",
						parallax: {
							type:"scroll",
							origo:"slidercenter",
							speed:400,
							levels:[5,20,30,40,50,-4,-6,-8,45,46,47,48,49,50,51,55],
							disable_onmobile:"on"
						},
						shadow:0,
						spinner:"off",
						stopLoop:"on",
						stopAfterLoops:0,
						stopAtSlide:1,
						shuffle:"off",
						autoHeight:"off",
						disableProgressBar:"on",
						hideThumbsOnMobile:"off",
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						debugMode:false,
						fallbacks: {
							simplifyAll:"off",
							nextSlideOnWindowFocus:"off",
							disableFocusListener:false,
						}
					});
var is_safari = (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1);


revapi5.bind("revolution.slide.onloaded",function (e) {
    var npe = document.getElementsByClassName("nopointerevent");
    for (var i=0;i<npe.length;i++) {
		npe[i].parentNode.parentNode.parentNode.style.pointerEvents = "none";
        npe[i].parentNode.parentNode.parentNode.style.zIndex = 100;
	}
                                   
	jQuery('.ddd_mousebox').on('mousemove',function(e) {       
		var sto = revapi5.offset(),
	        dim = this.getBoundingClientRect(),
	        tpos = jQuery(this.parentNode.parentNode.parentNode).position(),
	        pos = {top:e.pageY-sto.top-tpos.top,left:e.pageX-tpos.left},
	        perc = {wp:(pos.left/dim.width)-0.5, hp:(pos.top/dim.height)-0.5};
        getOverlaps(this);
        punchgs.TweenLite.to(this.overlapps,0.4,{force3D:"true",overwrite:"auto",transformOrigin:"50% 50% 100%", z:"300px",rotationY:0-((perc.wp)*5),rotationX:((perc.hp)*5),zIndex:30});
        punchgs.TweenLite.set(this.parentNode.parentNode.parentNode,{zIndex:10});
        if (is_safari)
		    punchgs.TweenLite.to(this,0.4,{force3D:"true",overwrite:"auto",z:"10px",transformOrigin:"50% 50%", rotationY:0-((perc.wp)*10),rotationX:((perc.hp)*10)});
        else
           punchgs.TweenLite.to(this,0.4,{force3D:"true",overwrite:"auto",z:"10px",transformOrigin:"50% 50%", rotationY:0-((perc.wp)*10),rotationX:((perc.hp)*10),boxShadow:"0 50px 100px rgba(15,20,40,0.35),0 20px 45px rgba(15,20,40,0.35)"});
	});

	jQuery('.ddd_mousebox').on('mouseleave',function(e) {
		punchgs.TweenLite.set(this.parentNode.parentNode.parentNode,{zIndex:5});
	   punchgs.TweenLite.to(this,0.5,{force3D:"true",overwrite:"auto",z:"0px",transformOrigin:"50% 50%", rotationY:0,rotationX:0,boxShadow:"0,0,0,0 rgba(0,0,0,0)"});
       punchgs.TweenLite.to(this.overlapps,0.5,{force3D:"true",z:"0px",overwrite:"auto",transformOrigin:"50% 50% 100%", rotationY:0,rotationX:0});
	});
     
});
                                   
function getOverlaps(el) {
  if (el.overlapps == undefined) {
    el.overlapps = [];
	var jel = jQuery(el),
        jpel = jQuery(el.parentNode.parentNode.parentNode),
        pos_e = jpel.position();
    pos_e.bottom = jel.height()+pos_e.top;
    pos_e.right = jel.width()+pos_e.left;                                   

    revapi5.find('.tp-caption').each(function() {

       var cel = jQuery(this.parentNode.parentNode.parentNode),
           pos_cel = cel.position();                       

	   if (this!==el && pos_cel.top>=pos_e.top && pos_cel.top<=pos_e.bottom && pos_cel.left>=pos_e.left && pos_cel.left<=pos_e.right)  el.overlapps.push(cel);
    });

  } 
}				}
			});	/*ready*/