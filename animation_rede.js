const redes = document.querySelector('.redes');
const gatilho = document.querySelector('header');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            redes.classList.add('column');
        } else {
            redes.classList.remove('column');
        }
    });
}, {
    threshold: 0.3 // ativa quando 30% da section aparece
});

observer.observe(gatilho);