function initialiseStars(){
    for(let i=0; i<100; i++){
        let wrapper = document.getElementById('stars-wrapper');
        let star = document.createElement('div');
        star.className = 'star';
        star.style.left = (Math.random() * 100) + '%';
        star.style.top = (Math.random() * 100) + '%';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.boxShadow = '0 0 5px ' + Math.random() * 1.5 + 'px white';
        wrapper.appendChild(star);
    }
}