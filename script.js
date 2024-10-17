// Script para adicionar interatividade (navegação suave e animações)

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Adiciona animação para os ícones de redes sociais
const socialIcons = document.querySelectorAll('.social-icons img');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'rotate(360deg)';
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'rotate(0deg)';
    });
});
