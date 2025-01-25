
let score = 0;

const scoreDisplay = document.getElementById('score');
const clickButton = document.getElementById('clickButton');
const clickSound = document.getElementById('clickSound');
const star = document.getElementById('star');

clickButton.addEventListener('click', () => {
    // Увеличиваем счетчик
    score++;
    scoreDisplay.textContent = score;

     //Воспроизводим звук
    clickSound.currentTime = 0; // Сброс времени воспроизведения
    clickSound.volume = 0.2;
    clickSound.play();

    // Анимация звезды
    star.style.opacity = 1;
    star.style.animation = 'fly 1s forwards';
    
    // Сбрасываем анимацию
    setTimeout(() => {
        star.style.opacity = 0;
        star.style.animation = '';
    }, 1000);
});