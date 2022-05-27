import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.from(".patte", {
    opacity :0, 
    duration :1 , 
    stagger: 0.3,
    scrollTrigger:{ 
        trigger: ".test--svg",
        start: "bottom bottom",
        
}
})
