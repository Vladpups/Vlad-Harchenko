// УЛУЧШЕНИЕ 1: Кнопка "Наверх"
const scrollToTopButton = document.querySelector('.scrollToTop');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// УЛУЧШЕНИЕ 2: Анимация плавного появления страницы
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});

// УЛУЧШЕНИЕ 3: Анимация при наведении на социальные сети
const socialIcons = document.querySelectorAll('.social-icon img');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.classList.add('hovered');
    });
    icon.addEventListener('mouseleave', () => {
        icon.classList.remove('hovered');
    });
});

// УЛУЧШЕНИЕ 4: Модальное окно с работами
const works = document.querySelectorAll('.works a');
works.forEach(work => {
    work.addEventListener('click', (e) => {
        e.preventDefault();
        alert(`Открыта работа: ${work.textContent}`);
    });
});

// УЛУЧШЕНИЕ 5: Счетчик просмотров при нажатии на работы
let viewCount = [105, 141, 194];
works.forEach((work, index) => {
    work.addEventListener('click', () => {
        viewCount[index]++;
        work.textContent = `${work.textContent.split(' - ')[0]} - ${viewCount[index]} просмотров`;
    });
});
