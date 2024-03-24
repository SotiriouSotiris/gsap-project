document.addEventListener("DOMContentLoaded", function() {
    initialiseSun(30 ,10);
    initialiseStars();
    window.addEventListener("resize", function() {
        adjustBasedOnWindowSize();
    });
});