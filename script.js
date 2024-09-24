// Кнопка "Наверх"
const scrollToTopButton = document.querySelector('.scrollToTop');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Модальное окно для видео
const modal = document.getElementById('videoModal');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.querySelector('.close');
const videoLinks = document.querySelectorAll('.works a');
const youtubeVideo = document.getElementById('youtubeVideo');

videoLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const videoId = link.getAttribute('data-video-id');
        youtubeVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    youtubeVideo.src = ''; // Остановить видео
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        youtubeVideo.src = ''; // Остановить видео
    }
});

// Плавная загрузка
window.onload = () => {
    document.body.classList.add('loaded');
};
