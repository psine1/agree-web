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





/* Drag */    

console.clear();

gsap.registerPlugin(Draggable, InertiaPlugin);

var slideDelay = 4;
var slideDuration = 0.3;
var snapX;
var slides = document.querySelectorAll(".slide");
// var prevButton = document.querySelector("#prevButton");
// var nextButton = document.querySelector("#nextButton");
var progressWrap = gsap.utils.wrap(0, 1);
var numSlides = slides.length;

// let links = gsap.utils.toArray(".slide-link");

gsap.set(slides, {
  backgroundColor:
    "random([red, blue, green, purple, orange, yellow, lime, pink])",
  xPercent: (i) => i * 100
});

var wrap = gsap.utils.wrap(-100, (numSlides - 1) * 100);

let animation = gsap.timeline({repeat:-1});



animation.to(slides, {
  xPercent: "-=" + numSlides * 100,
  duration: numSlides,
  ease: "none",
  modifiers: {
    xPercent: wrap
  }
},0)

animation.to('.feature-card', {
 // rotate: 360,
  ease: "none",
  stagger: {
   amount: numSlides-1
  }
}, 0);

//animation.timeScale(0.5);

// comment these two lines to preview timeline animation
animation.pause();
setupDraggable();

function setupDraggable() {
  var proxy = document.createElement("div");
  var slideAnimation = gsap.to({}, {});
  var slideWidth = 0;
  var wrapWidth = 0;
  resize();

  var draggable = new Draggable(proxy, {
    type: "x",
    trigger: ".slides-container",
    inertia: true,
    maxDuration: 0.75,
    minDuration: 0.1,
    onPress: updateDraggable,
    onDrag: updateProgress,
    onThrowUpdate: updateProgress,
    allowContextMenu : true,
    allowNativeTouchScrolling: true,
    snap: {
      x: value => snapX(value, draggable.deltaX < 0 ? -1 : 1)
    }
  });

  window.addEventListener("resize", resize);
	// document.querySelector("#prevButton").addEventListener("click", () => animateSlides(-1));
	// document.querySelector("#nextButton").addEventListener("click", () => animateSlides(1));
  
  gsap.utils.toArray(".slide-link").forEach((link, i) => {
    link.addEventListener("click", () => gotoSection(i));
  });
  
  function updateDraggable() {
    slideAnimation.kill();
    this.update();
  }
  
  function gotoSection(index) {
    slideAnimation.kill();
    let currentIndex = animation.progress() * numSlides;
    let direction = index - currentIndex;
    let x = snapX(gsap.getProperty(proxy, "x") + direction * -slideWidth);
    slideAnimation = gsap.to(proxy, {
      x: x,
      duration: slideDuration,
      onUpdate: updateProgress,
    })
  }
  
  
  function animateSlides(direction) {
    slideAnimation.kill();
    var x = snapX(gsap.getProperty(proxy, "x") + direction * -slideWidth);
    slideAnimation = gsap.to(proxy, {
      x: x,
      duration: slideDuration,
      onUpdate: updateProgress,
    })
  }

  function updateProgress() {
    
    // console.log(gsap.getProperty(proxy, "x") / -wrapWidth, "wrapped", progressWrap(gsap.getProperty(proxy, "x") / -wrapWidth))
    animation.progress(progressWrap(gsap.getProperty(proxy, "x") / -wrapWidth));
    //console.log( animation.progress );
  }

  function resize() {
    var norm = (gsap.getProperty(proxy, "x") / wrapWidth) || 0;

    slideWidth = slides[0].offsetWidth;
    wrapWidth = slideWidth * numSlides;
    snapX = snapDirectional(slideWidth);

    gsap.set(proxy, {
      x: norm * wrapWidth
    });
    animateSlides(0);
    slideAnimation.progress(1);
  }
}


function snapDirectional(increment) {
  let snap = gsap.utils.snap(increment);
  return (value, direction, threshold = 1e-3) => {
    let snapped = snap(value);
    return !direction || Math.abs(snapped - value) < threshold || ((snapped - value < 0) === direction < 0) ? snapped : snap(direction < 0 ? value - increment : value + increment);
  };
}