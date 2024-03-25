gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
    const tl = gsap.timeline();
    const tl2 = gsap.timeline();
    const tl3 = gsap.timeline();

    tl.to(".planets", {
        scale: 50,
        ease: "power1.inOut"
    });

    ScrollTrigger.create({
        trigger: ".main",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        animation: tl,
    });

    tl2.to('.earth-wrapper', {
        left: "45%",
        zIndex: 40,
        ease: "power1.inOut"
    });

    ScrollTrigger.create({
        trigger: ".main",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        animation: tl2,
    });

    tl3.to('.second-scene' , {
        opacity: 1,
        ease: "power1.inOut"
    });

    ScrollTrigger.create({
        trigger: ".second-scene",
        start: "top 20%",
        end: "bottom bottom",
        scrub: true,
        animation: tl3,
        markers: true
    });
});
