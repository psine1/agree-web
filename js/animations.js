this.addEventListener("DOMContentLoaded", preloadImages, true);

var loadedImages = 0;
//ACA HAY QUE CARGAR LAS IMAGENES QUE SE USEN
var imageArray = new Array("images/smartphone-hero.png", "images/panel-hero.png"

 );

function preloadImages(e) {
    for (var i = 0; i < imageArray.length; i++) {
        var tempImage = new Image();
        tempImage.addEventListener("load", trackProgress, true);
        tempImage.src = imageArray[i];
    }
}

function trackProgress() {
    loadedImages++;
    if (loadedImages == imageArray.length) {
        imagesLoaded();
    }
}

function imagesLoaded() {
    
    document.getElementById('loader-container').style.display = 'none'; 
    document.getElementById('app').style.display = 'block'; 
    
    initAnimations();

}


var tl_Global = gsap.timeline();
tl_Global.timeScale( 1 );  
tl_Global
    .fromTo("[class*='smartphone-hero']", {autoAlpha: 0, x: 300}, {duration: 0.5, autoAlpha: 1, x: 200, ease: "power3.out"}, 0)
    .to("[class*='smartphone-hero']", {duration: 1, x: 0, ease: "power3.out"}, 1)

    .fromTo("[class*='panel-hero']", 3, {clip:"rect(0px 414px 407px 0px)"}, {clip:"rect(0px 414px 407px 0px)", ease:Power3.easeOut}, 1.1) 
    .from("[class*='panel-hero'] img", {duration: 1, x: -500, ease: "power3.out"}, 1.1)
    .from("[class*='scoring-hero'] img", {duration: 0.7, autoAlpha: 0, scale: 1.3, ease: "power3.out"}, 2)
    .from("[class*='estado-hero'] img", {duration: 0.7, autoAlpha: 0, scale: 1.3, ease: "power3.out"}, 2.2)

    ;



    function initAnimations(){
        tl_Global.restart(); 
    }