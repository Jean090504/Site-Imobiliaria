<script>
    // Adjust scroll position for fixed navbar
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const yOffset = -80; // Adjust according to your navbar height
            const yPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: yPosition, behavior: 'smooth' });
        });
    });

    new universalParallax().init({
        speed: 6.0
    });

    // Move the LinkedIn icon tooltip to the left
    document.querySelectorAll('.tooltip-container').forEach(container => {
        container.addEventListener('mouseover', function () {
            this.querySelector('.tooltip').style.right = '60px';
        });
    });

    // Change arrow direction for button hover
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('mouseover', function () {
            const svg = this.querySelector('svg');
            svg.style.transform = 'translateX(-1.2em) rotate(-45deg) scale(1.1)';
        });

    button.addEventListener('mouseout', function() {
            const svg = this.querySelector('svg');
    svg.style.transform = 'translateX(0) rotate(0) scale(1)';
        });
    });
</script>


