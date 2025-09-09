// Ajusta a posição da rolagem para a navbar fixa
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const yOffset = -80; // Ajuste de acordo com a altura da sua navbar
        const yPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: yPosition, behavior: 'smooth' });
    });
});

// Inicia o efeito Parallax
new universalParallax().init({
    speed: 6.0
});

// Move o tooltip do ícone do LinkedIn para a esquerda
document.querySelectorAll('.tooltip-container').forEach(container => {
    container.addEventListener('mouseover', function () {
        this.querySelector('.tooltip').style.right = '60px';
    });
});

// Muda a direção da seta para o hover do botão
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('mouseover', function () {
        const svg = this.querySelector('svg');
        if (svg) { // Verifica se o SVG existe antes de aplicar o estilo
            svg.style.transform = 'translateX(1.2em) rotate(45deg) scale(1.1)';
        }
    });

    button.addEventListener('mouseout', function () {
        const svg = this.querySelector('svg');
        if (svg) { // Verifica se o SVG existe antes de aplicar o estilo
            svg.style.transform = 'translateX(0) rotate(0) scale(1)';
        }
    });
});
