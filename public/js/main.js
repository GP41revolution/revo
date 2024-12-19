AOS.init({
    duration: 1000,
    once: true
});

// ナビゲーションの透明度制御
// window.addEventListener('scroll', function () {
//     const nav = document.querySelector('.nav');
//     if (window.scrollY > 100) {
//         nav.style.background = 'rgba(0,0,0,0.8)';
//     } else {
//         nav.style.background = 'rgba(0,0,0,0.5)';
//     }
// });

window.addEventListener('scroll', function () {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 0) {
        nav.classList.add('scrolled'); // スクロールしたらクラスを追加
    } else {
        nav.classList.remove('scrolled'); // スクロールしていなければクラスを削除
    }
});


// ハンバーガーメニューの制御
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-link');

// ハンバーガーメニューのクリックイベント
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// メニューリンクのクリックイベント
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// 画面外クリックでメニューを閉じる
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});








// パララックス効果
document.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(window.pageYOffset * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// モーダルギャラリー
const createModal = (src) => {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <img src="${src}" alt="拡大画像">
            <button class="modal-close">×</button>
        </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal') || e.target.classList.contains('modal-close')) {
            modal.remove();
        }
    });
};


const counters = document.querySelectorAll('.count-up');
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-value');
        const count = +counter.innerText;
        const speed = 50; // アニメーション速度

        if (count < target) {
            counter.innerText = Math.ceil(count + target / speed);
            setTimeout(updateCount, 10);
        }
    };
    updateCount();
});





function createWaterDrop() {
    const waterDrop = document.createElement('div');
    waterDrop.classList.add('water-drop');

    // ランダムな位置に水滴を配置
    const randomX = Math.random() * window.innerWidth;
    waterDrop.style.left = `${randomX}px`;

    document.body.appendChild(waterDrop);

    // 水滴を生成してアニメーションを適用
    setTimeout(() => {
        waterDrop.remove(); // アニメーションが終わったら水滴を削除
    }, 1000); // アニメーションの時間と合わせて削除

}

// 1秒ごとに水滴を生成
setInterval(createWaterDrop, 1000);
