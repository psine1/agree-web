

var Cont={val:0} , NewVal = 75 ;

var sliderCountNumber = gsap.timeline({repeat: -1});
sliderCountNumber.timeScale( 1 );  
sliderCountNumber
    .to(Cont, {duration: 1, val:NewVal,roundProps:"val",onUpdate:function(){
      document.querySelector(".dynNumber").innerHTML=Cont.val
    }, ease: "power3.easein"}, 0)

    .to(".circle-slider", {duration: 1, x: 150, ease: "power3.easein"}, 0)

    .to(Cont, {duration: 1, val:25,roundProps:"val",onUpdate:function(){
        document.querySelector(".dynNumber").innerHTML=Cont.val
      }, ease: "power3.easein"}, 1.8)

      .to(".circle-slider", {duration: 1, x: 50, ease: "power3.easein"}, 1.8)   
      
      .to(Cont, {duration: 1, val:50,roundProps:"val",onUpdate:function(){
        document.querySelector(".dynNumber").innerHTML=Cont.val
      }, ease: "power3.easein"}, 3)

      .to(".circle-slider", {duration: 1, x: 100, ease: "power3.easein"}, 3) 

      .to(Cont, {duration: 1, val:100,roundProps:"val",onUpdate:function(){
        document.querySelector(".dynNumber").innerHTML=Cont.val
      }, ease: "power3.easein"}, 4.5)

      .to(".circle-slider", {duration: 1, x: 200, ease: "power3.easein"}, 4.5)
      
      .to(Cont, {duration: 1, val:0,roundProps:"val",onUpdate:function(){
        document.querySelector(".dynNumber").innerHTML=Cont.val
      }, ease: "power3.easein"}, 6.3)

      .to(".circle-slider", {duration: 1, x: 0, ease: "power3.easein"}, 6.3)    
      
      .to(".circle-slider", {duration: 1, x: 0.05, ease: "power3.easein"}, 7.3)     
      
      //.from(".box-estado", {duration: 0.5, autoAlpha: 0, scale: 0.5, rotation: 20, transformOrigin: "0% 70%", ease: "power3.easein"}, 0.5)
      
    ;    