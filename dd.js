
let currentSlide = 0;
const slideInterval = 5000; // Tempo em milissegundos para mudar o slide automaticamente
let intervalId;

const slider = document.querySelector('.slider');

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Função para iniciar o autoplay
function startAutoplay() {
    intervalId = setInterval(() => {
        showSlide(currentSlide + 1);
    }, slideInterval);
}

// Função para parar o autoplay (opcional)
function stopAutoplay() {
    clearInterval(intervalId);
}

// Iniciar o slider e o autoplay
showSlide(currentSlide);
startAutoplay();

// Adicionar eventos para parar o autoplay ao passar o mouse (opcional)
slider.addEventListener('mouseenter', stopAutoplay);
slider.addEventListener('mouseleave', startAutoplay);
