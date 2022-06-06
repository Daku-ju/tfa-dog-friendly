"use strict";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

var images = document.querySelectorAll('.img--animation');
for (let image of images){
    gsap.from(image,{
        opacity:0,
        duration: 0.5, 
        ease: "power 4",
        scrollTrigger:{ 
            trigger: image,
            start: "bottom bottom",       
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



gsap.utils.toArray(".logo--download").forEach(img => {
    let hover = gsap.to(img, {
        scale: 1.12, 
        duration: 0.5, 
        paused: true, 
        ease: "power1.inOut"});
        img.addEventListener("mouseenter", () => hover.play());
        img.addEventListener("mouseleave", () => hover.reverse());
  });






