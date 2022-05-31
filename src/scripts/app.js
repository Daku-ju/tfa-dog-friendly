import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

var images = document.querySelectorAll('.img--animation');
for (let image of images){
    gsap.from(image,{
        translateX: 400,
        duration: 0.5, 
        ease: "power 4",
        scrollTrigger:{ 
            trigger: image,
            start: "bottom bottom",       
 }
 })

}



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
