console.log("Script loaded!");
alert("Дизайн работает!");

// Или лучше без алерта (чтобы не раздражало):
console.log("🤖 Kuzik Bot Script loaded successfully!");
console.log("Bot: @Kuzikfriendbot");
console.log("Site: https://bacaevali95-beep.github.io/Kuzik-bot-site/");

// Простая проверка
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM готов!");
    
    // Делаем кнопку анимированной
    const button = document.querySelector('.launch-button');
    if (button) {
        button.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        button.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        console.log("Кнопка настроена!");
    }
});
