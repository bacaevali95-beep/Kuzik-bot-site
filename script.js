// Основные константы
const BOT_USERNAME = "@Kuzikfriendbot";
const BOT_LINK = "https://t.me/Kuzikfriendbot";

// Создаем анимированные частицы
function createParticles() {
    const bgAnimation = document.getElementById('bgAnimation');
    const particles = 20; // Уменьшили для производительности
    
    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Случайный размер и позиция
        const size = Math.random() * 40 + 10;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
        
        bgAnimation.appendChild(particle);
    }
}

// Показываем уведомление
function showNotification(text) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');
    
    notificationText.textContent = text;
    notification.style.display = 'block';
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}

// Копирование username
function copyUsername() {
    navigator.clipboard.writeText(BOT_USERNAME).then(() => {
        showNotification("✅ Username скопирован: " + BOT_USERNAME);
    });
}

// Копирование ссылки
function copyLink() {
    navigator.clipboard.writeText(BOT_LINK).then(() => {
        showNotification("✅ Ссылка скопирована!");
    });
}

// Копирование команды
function copyCommand(command) {
    navigator.clipboard.writeText(command).then(() => {
        showNotification(`📋 Команда скопирована: ${command}`);
    });
}

// Показываем модальное окно
function showModal() {
    setTimeout(() => {
        document.getElementById('successModal').style.display = 'flex';
    }, 300);
}

// Закрываем модальное окно
function closeModal() {
    document.getElementById('successModal').style.display = 'none';
}

// Анимация счетчиков
function animateCounters() {
    const counters = [
        { element: document.getElementById('userCount'), target: 1000 },
        { element: document.getElementById('analysisCount'), target: 5000 },
        { element: document.getElementById('wordsCount'), target: 10000 }
    ];
    
    counters.forEach(counter => {
        if (counter.element) {
            let current = 0;
            const increment = Math.ceil(counter.target / 50);
            const updateInterval = 20;
            
            const updateCounter = () => {
                current += increment;
                if (current >= counter.target) {
                    counter.element.textContent = counter.target + '+';
                } else {
                    counter.element.textContent = current + '+';
                    setTimeout(updateCounter, updateInterval);
                }
            };
            
            updateCounter();
        }
    });
}

// Анимация печатания заголовка
function typeWriterAnimation() {
    const title = document.getElementById('animatedTitle');
    if (!title) return;
    
    const originalText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    setTimeout(typeWriter, 1000);
}

// Параллакс эффект
function setupParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const bgAnimation = document.getElementById('bgAnimation');
        if (bgAnimation) {
            bgAnimation.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
}

// Эффекты при наведении
function setupHoverEffects() {
    // Карточки функций
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Кнопки
    document.querySelectorAll('.copy-btn, .demo-btn, .nav-link').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Консольное приветствие
function consoleGreeting() {
    console.log('%c🤖 Kuzik Bot Website', 'font-size: 24px; color: #00ff88; font-weight: bold;');
    console.log('%cСайт успешно загружен!', 'color: #0088cc;');
    console.log(`%cБот: ${BOT_USERNAME}`, 'color: #2575fc;');
    console.log('%cGitHub: https://github.com/bacaevali95-beep', 'color: #6a11cb;');
}

// Основная инициализация
function init() {
    createParticles();
    animateCounters();
    typeWriterAnimation();
    setupParallax();
    setupHoverEffects();
    consoleGreeting();
    
    // Показываем приветственное уведомление
    setTimeout(() => {
        showNotification("👋 Добро пожаловать на сайт Kuzik Bot!");
    }, 1500);
    
    // Добавляем обработчик для второй кнопки запуска
    const footerButton = document.getElementById('footerButton');
    if (footerButton) {
        footerButton.addEventListener('click', showModal);
    }
}

// Запускаем при полной загрузке страницы
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
