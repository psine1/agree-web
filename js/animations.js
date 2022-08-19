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

/*
    window.mobileCheck = function() {
        let check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
      };
*/

/* Drag */    

/*
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
//  backgroundColor:
 //   "random([red, blue, green, purple, orange, yellow, lime, pink])", 
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

*/