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
gsap.from(".patte", {
    opacity :0, 
    duration :1 , 
    stagger: 0.3,
    scrollTrigger:{ 
        trigger: ".test--svg",
        start: "bottom bottom",
        
}
})*/
