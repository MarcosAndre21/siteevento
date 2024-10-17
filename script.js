// Navegação suave ao clicar nos links
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

// Animação nas redes sociais
const socialIcons = document.querySelectorAll('.social-icons img');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'rotate(360deg)';
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'rotate(0deg)';
    });
});

// Contagem regressiva
const eventDate = new Date("Novemb 06, 2024 18:00:00").getTime();
const countdownEl = document.getElementById('countdown');
setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdown);
        countdownEl.innerHTML = "O evento já começou!";
    }
}, 1000);

// Modal para patrocinadores
function openModal(patrocinador) {
    const modal = document.getElementById('modal');
    const modalInfo = document.getElementById('modal-info');
    modalInfo.textContent = `Mais informações sobre o patrocinador: ${patrocinador}`;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Botão Voltar ao Topo
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
