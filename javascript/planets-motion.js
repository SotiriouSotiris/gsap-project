document.addEventListener("DOMContentLoaded", function() {
    function toggleZIndex(){
        let sun = document.getElementById('sun-wrapper');
        let moon = document.getElementById('moon-wrapper');
        if(sun.style.zIndex == 30){
            sun.style.zIndex = 10;
            moon.style.zIndex = 30;
        }else{
            sun.style.zIndex = 30;
            moon.style.zIndex = 10;
        }
    }

    gsap.registerPlugin(MotionPathPlugin)

    gsap.set('#sun', {xPercent: -50, yPercent: -50, transformOrigin: "50% 50%"})
    gsap.set('#moon', {xPercent: -50, yPercent: -50, transformOrigin: "50% 50%"})

    document.getElementById('sun-wrapper').style.zIndex = 30;
    document.getElementById('moon-wrapper').style.zIndex = 10;
    
    
    let master = gsap.timeline();
    master.add(sunTimeline(), 0)
    master.add(moonTimeline(), 0)

    function sunTimeline(){
        let tl = gsap.timeline({ defaults: { ease: "none", duration: 10 }, repeat: -1, yoyo: true, repeatDelay: 0, onRepeat: toggleZIndex})
                    .to("#sun", {
                        motionPath: {
                            path: ".sun_path",
                        },
                    }, 0);
        return tl;
    }

    function moonTimeline(){
        let tl = gsap.timeline({ defaults: { ease: "none", duration: 10 }, repeat: -1, yoyo: true, repeatDelay: 0 })
                    .to("#moon", {
                        motionPath: {
                            path: ".moon_path",
                        },
                    }, 0);

        return tl;
    }
});