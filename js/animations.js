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


 

        var animRiesgo = gsap.timeline({repeat: 0});
        animRiesgo.timeScale( 1 );  
        animRiesgo
        .to(".panel-bar-1-anim", {duration: 0.7, scaleY: 1.1, yoyo: true, repeat: -1, transformOrigin: "0% 100%", ease: "none"}, 0)    
        .to(".panel-bar-2-anim", {duration: 0.7, scaleY: 0.8, yoyo: true, repeat: -1, transformOrigin: "0% 100%", ease: "none"}, 0)    
        .to(".panel-bar-3-anim", {duration: 0.7, scaleY: 1.1, yoyo: true, repeat: -1, transformOrigin: "0% 100%", ease: "none"}, 0)    
        .to(".panel-bar-4-anim", {duration: 0.7, scaleY: 0.7, yoyo: true, repeat: -1, transformOrigin: "0% 100%", ease: "none"}, 0)    
        .to(".panel-bar-5-anim", {duration: 0.7, scaleY: 1.5, yoyo: true, repeat: -1, transformOrigin: "0% 100%", ease: "none"}, 0)    

        .to(".panel-ball-1-anim", {duration: 1, x: 30, yoyo: true, repeat: -1, repeatDelay: 1, transformOrigin: "0% 100%", ease: "none"}, 0)    
        .to(".panel-ball-2-anim", {duration: 1, x: -50, yoyo: true, repeat: -1, repeatDelay: 1.5, transformOrigin: "0% 100%", ease: "none"}, 0)    
        .to(".panel-ball-3-anim", {duration: 1, x: 80, yoyo: true, repeat: -1, repeatDelay: 2, transformOrigin: "0% 100%", ease: "none"}, 0)  
        ;


        var animRiesgo = gsap.timeline({repeat: 0});
        animRiesgo.timeScale( 1 );  
        animRiesgo
        .to(".mobile-left-workspace", {duration: 1.5, rotation: -2, yoyo: true, repeat: -1, transformOrigin: "0% 100%", ease: "none"}, 0)    
        .to(".mobile-right-workspace", {duration: 1.5, rotation: 2, yoyo: true, repeat: -1, transformOrigin: "0% 100%", ease: "none"}, 0)    
        ;        




        var swiper = new Swiper(".mySwiper", {
          slidesPerView: 1,
          spaceBetween: 10,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          },
        });





        TweenMax.set(".wrappie", {transformOrigin:"left top"});

        function sizeAll() {
          var w = window.innerWidth;
            
          if ( w > 1024) {
             TweenMax.set(".wrappie",  {scale:1}); 
            }
            
            if ( w < 546) {
              TweenMax.set(".wrappie",  {scale:w/100*.16}); 
             }            


        }
        
        
        $(window).resize(sizeAll);
        
        sizeAll();


 

        var animModal = gsap.timeline({paused: true});
        animModal
        .from(".wrap-modal", {duration: 0.3, autoAlpha: 0, ease: "none"}, 0)
        .from(".inner-modal", {duration: 0.3, autoAlpha: 0, y: 50, ease: "none"}, 0.2);


        $('.modal').click(function(){
          animModal.restart();
        });


        $('.wrap-modal').click(function(){
          animModal.reverse();
        });        



/* mobile toggle */        

(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery