AOS.init({
    duration: 1000,
    once: true
});

// ナビゲーションの透明度制御
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(0,0,0,0.8)';
    } else {
        nav.style.background = 'rgba(0,0,0,0.5)';
    }
});