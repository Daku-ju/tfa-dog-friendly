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
/*
const buttons = document.querySelectorAll('.logo--download')
for (let button of buttons){
    button.addEventListener("hover",()=>{
        gsap.to('.logo--download',{
            scale: 1.12, 
            duration: 0.5,
            
        })
        button.addEventListener("mouseenter", () => hover.play());
        button.addEventListener("mouseleave", () => hover.reverse());
    })
}
*/

gsap.utils.toArray(".logo--download").forEach(img => {
    let hover = gsap.to(img, {
        scale: 1.12, 
        duration: 0.5, 
        paused: true, 
        ease: "power1.inOut"});
        img.addEventListener("mouseenter", () => hover.play());
        img.addEventListener("mouseleave", () => hover.reverse());
  });



/*
let download = document.querySelector(".logo");

let animation = gsap.to(".logo--download", {
    paused: true,
    scale:2,
});
download.addEventListener("mouseenter", () => animation.play());
download.addEventListener("mouseleave", () => animation.reverse());
*/
/*
gsap.to(".logo--download",{
    scale:2,
    scrollTrigger:{ 
        trigger: ".testimony--com3",
        start: "bottom center",       
 }
})
*/
/*
gsap.from(".patte", {
    opacity :0, 
    duration :1 , 
    stagger: 0.3,
    scrollTrigger:{ 
        trigger: ".test--svg",
        start: "bottom bottom",
        
}
})*/
