"use strict";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

//anim gsap
var images = document.querySelectorAll('.img--animation');
for (let image of images){
    gsap.from(image,{
        opacity:0,
        duration: 0.7, 
        ease: "power 4",
        scrollTrigger:{ 
            trigger: image,
            start: "bottom bottom",       
        }
    })
}

var transX = document.querySelectorAll('.anim--transl');
for (let translationX of transX){
    gsap.from(translationX,{
        x : -900,
        duration: 0.5, 
        ease: "power 4",
        scrollTrigger:{ 
            trigger: translationX,
            start: "top top",         
        }
    })
}
var transY = document.querySelectorAll('.anim--translY');
for (let translationY of transY){
    gsap.from(translationY,{
        x: 700,
        duration: 0.5, 
        ease: "power 4",
        scrollTrigger:{ 
            trigger: translationY,
            start: "top top",         
        }
    })
}


gsap.from (".block--download",{
    x : -900,
    duration: 0.5, 
    ease: "power 4",
    scrollTrigger:{ 
        trigger: ".testimony--com3",
        start: "bottom center",       
    }

})

var graphs = document.querySelectorAll('.graph--anim');
for (let graph of graphs){
    gsap.from (graph,{
        opacity:0,
        y: 300,
        duration: 0.5,
       ease: "power 4",
       scrollTrigger:{ 
           trigger: graph,
           start: "top bottom",       
        }
    
    })
}


//grossir mes buttons en hover
gsap.utils.toArray(".logo--download").forEach(img => {
    let hover = gsap.to(img, {
        scale: 1.12, 
        duration: 0.5, 
        paused: true, 
        ease: "power1.inOut"});
        img.addEventListener("mouseenter", () => hover.play());
        img.addEventListener("mouseleave", () => hover.reverse());
  });


const SliderElement =document.querySelector('.slider') 
 if(SliderElement){
    //slides
    var slideIndex = 1;
    showSlides(slideIndex);

    let prevButton = document.querySelector(".prev");
    if(prevButton){
        prevButton.addEventListener('click', () => {
            plusSlides(-1);
        });
    }

    let nextButton = document.querySelector(".next");
    if(nextButton){
        nextButton.addEventListener('click', () => {
            plusSlides(1);
        });
    }


    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.querySelectorAll(".mySlides");
        if (n > slides.length) {
            slideIndex = 1;
        } 

        if (n < 1) {
            slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].classList.add("hide");
        }

        slides[slideIndex-1].classList.remove("hide"); 
    }
}


  



