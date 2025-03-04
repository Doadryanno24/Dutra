// Defina a data de início do relacionamento
const startDate = new Date('2024-07-07'); // Data de início
const timeElapsedElement = document.getElementById('time-elapsed');

// Função para calcular o tempo decorrido
function updateTimeElapsed() {
    const now = new Date();
    
    // Cálculo de anos, meses e dias
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    // Ajuste se o dia atual for menor que o dia de início
    if (days < 0) {
        months--;
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate(); // Adiciona os dias do mês anterior
    }

    // Ajuste se o mês atual for menor que o mês de início
    if (months < 0) {
        years--;
        months += 12; // Adiciona 12 meses
    }

    // Ajuste se as horas forem negativas
    if (hours < 0) {
        days--;
        hours += 24; // Adiciona 24 horas
    }

    // Ajuste se os minutos forem negativos
    if (minutes < 0) {
        hours--;
        minutes += 60; // Adiciona 60 minutos
    }

    // Ajuste se os segundos forem negativos
    if (seconds < 0) {
        minutes--;
        seconds += 60; // Adiciona 60 segundos
    }

    // Cálculo dos dias até o próximo dia 7
    let nextMonthDate = new Date(now.getFullYear(), now.getMonth(), 7);
    if (now.getDate() > 7) {
        nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
    }
    const daysUntilNextMonth = Math.ceil((nextMonthDate - now) / (1000 * 60 * 60 * 24));

    // Atualiza o conteúdo do elemento
    timeElapsedElement.textContent = `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos. Faltam
    ${daysUntilNextMonth} dias para o próximo mês de namoro!`;
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