document.addEventListener("DOMContentLoaded", function() {
    let sun = document.getElementById('sun');
    let sunBounds = sun.getBoundingClientRect();

    let sunCenterX = (sunBounds.left + sunBounds.width / 2);
    let sunCenterY = (sunBounds.top + sunBounds.height / 2);

    let sunRadius = (sunBounds.width / 2) + 50;

    for (let i = 1; i <= 12; i++) {
        let ray = document.getElementById('ray' + i);
        
        let angle = (i * (360 / 12)) * (Math.PI / 180);
        
        let rayEndX = sunCenterX + sunRadius * Math.cos(angle);
        let rayEndY = sunCenterY + sunRadius * Math.sin(angle);
        
        ray.style.width = Math.random() * 50 + 30 + 'px';
        ray.style.height = Math.random() * 10 + 10 + 'px';

        ray.style.left = (rayEndX - sunBounds.left) + 'px';
        ray.style.top = (rayEndY - sunBounds.top) + 'px';
        ray.style.transform = 'translate(-50%, -50%) rotate(' + (i * (360 / 12)) + 'deg)';
    }
});