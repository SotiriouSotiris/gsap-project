document.addEventListener("DOMContentLoaded", function() {
    initialiseSun(30 ,10);
    window.addEventListener("resize", function() {
        adjustBasedOnWindowSize();
    });
});