const eye = document.querySelector('.iris');

window.addEventListener('mousemove', (e) => {
    const x = -(window.innerWidth / 2 - e.pageX) / 35;

    const y = -(window.innerHeight / 2 - e.pageY) / 35;

    eye.style.transform = `rotate(-45deg) 
    translateY(${y}px translate(${x}px))`
});