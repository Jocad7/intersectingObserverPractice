const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');

const imgLoad = (entries, observador) => {
    // console.log(entries);
    // console.log(observador);
    entries.forEach(entry => {
        if(entry.isIntersecting){
            console.log('La imagen esta en pantalla')
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
};

const observador = new IntersectionObserver(imgLoad, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.02  
});

observador.observe(img1);
observador.observe(img2);