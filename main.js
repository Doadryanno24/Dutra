// Defina a data de início do relacionamento
const startDate = new Date('2022-07-07'); // Altere para a data desejada
const timeElapsedElement = document.getElementById('time-elapsed');

// Função para calcular o tempo decorrido
function updateTimeElapsed() {
    const now = new Date();
    const totalSeconds = Math.floor((now - startDate) / 1000);

    const years = Math.floor(totalSeconds / (365 * 24 * 60 * 60));
    const months = Math.floor((totalSeconds % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60));
    const days = Math.floor((totalSeconds % (30 * 24 * 60 * 60)) / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    timeElapsedElement.textContent = `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

// Atualiza o contador a cada segundo
setInterval(updateTimeElapsed, 1000);

// Atualiza o contador ao carregar a página
updateTimeElapsed();

// Função para criar corações caindo
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw'; // Posição horizontal aleatória
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Duração aleatória da animação
    document.body.appendChild(heart);

    // Remover o coração após a animação
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// Criar corações a cada 300ms
setInterval(createHeart, 300);