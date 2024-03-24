// Ensure GSAP and ScrollTrigger are loaded before using them
gsap.registerPlugin(ScrollTrigger);

// Wait for the DOM content to be loaded
document.addEventListener("DOMContentLoaded", function() {
    const tl = gsap.timeline();

    // Define the animation to zoom into the earth
    tl.to(".earth", {
        scale: 1.5, // Zoom factor
        duration: 5, // Duration of the zoom animation
        ease: "power1.inOut" // Easing function
    });

    // Create a ScrollTrigger to control the animation
    ScrollTrigger.create({
        trigger: ".scroll_wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: true, // Smooth scrolling effect
        animation: tl, // Assign the timeline to the ScrollTrigger
        markers: true // Display markers to help debug the ScrollTrigger
    });
});
