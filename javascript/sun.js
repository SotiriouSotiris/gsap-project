function initialiseSun(min_ray_width, min_ray_height) {
    let sun = document.getElementById('sun');
    let sunBounds = sun.getBoundingClientRect();
    let num_rays = 21;
    let sunCenterX = (sunBounds.left + sunBounds.width / 2);
    let sunCenterY = (sunBounds.top + sunBounds.height / 2);

    let sunRadius = (sunBounds.width / 2) + 50;

    for (let i = 1; i <= num_rays; i++) {
        let ray = document.getElementById('ray' + i);
        
        let angle = (i * (360 / num_rays)) * (Math.PI / 180);
        
        let rayEndX = sunCenterX + sunRadius * Math.cos(angle);
        let rayEndY = sunCenterY + sunRadius * Math.sin(angle);
        
        ray.style.width = Math.random() * 50 + min_ray_width + 'px';
        ray.style.height = Math.random() * 10 + min_ray_height + 'px';

        ray.style.left = (rayEndX - sunBounds.left) + 'px';
        ray.style.top = (rayEndY - sunBounds.top) + 'px';
        ray.style.transform = 'translate(-50%, -50%) rotate(' + (i * (360 / num_rays)) + 'deg)';
    }
}

let previousWidth = window.innerWidth;
let width = window.innerWidth;

function adjustBasedOnWindowSize() {
    previousWidth = width;
    width = window.innerWidth;
    if(width < 720 && previousWidth >= 720){
        initialiseSun(30, 10);
    }else if(width > 720 && previousWidth <= 720){
        initialiseSun(40, 12.5);
    }
}