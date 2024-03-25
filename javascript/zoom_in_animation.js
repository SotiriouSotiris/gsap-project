gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
    const tl = gsap.timeline();
    const tl2 = gsap.timeline();

    tl.to(".planets", {
        scale: 50,
        ease: "power1.inOut"
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
        animation: tl,
        markers: true
    });

    ScrollTrigger.create({
        trigger: ".main",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        animation: tl2,
        markers: true
    });
});
