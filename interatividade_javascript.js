// Efeito de revelação de elementos ao rolar a página (Scroll Reveal)
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleciona os elementos para animar
    const animatedElements = document.querySelectorAll('.card, .quote-card, .stat-item, .tech-table');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Animação simples no título principal no Hover
    const glitchTitle = document.querySelector('.glitch-text');
    if (glitchTitle) {
        glitchTitle.addEventListener('mouseover', () => {
            glitchTitle.style.letterSpacing = '12px';
            glitchTitle.style.transition = 'letter-spacing 0.3s ease';
        });
        
        glitchTitle.addEventListener('mouseout', () => {
            glitchTitle.style.letterSpacing = '8px';
        });
    }
});