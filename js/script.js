/* =========================================================
   script.js - 苏州安驰电子科技有限公司
   ========================================================= */

// ── 元素引用 ──────────────────────────────────────────────
const menuToggle  = document.querySelector('.menu-toggle');
const sidebar     = document.querySelector('.sidebar');
const closeBtn    = document.querySelector('.close-btn');
const overlay     = document.querySelector('.overlay');
const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
const header      = document.querySelector('.header');

// ── 侧边菜单 ──────────────────────────────────────────────
function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    menuToggle.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    // 菜单打开时确保导航栏可见
    header.classList.remove('nav-hidden');
}

function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
}

menuToggle.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

sidebarLinks.forEach(link => link.addEventListener('click', closeSidebar));

// ── 手机端导航滚动隐藏/显示 ──────────────────────────────
(function () {
    let lastScrollY = window.scrollY;
    let ticking = false;
    const SCROLL_THRESHOLD = 8; // 触发隐藏/显示的最小滚动距离(px)

    function isMobile() {
        return window.innerWidth <= 768;
    }

    function handleScroll() {
        if (!isMobile()) {
            header.classList.remove('nav-hidden');
            return;
        }

        // 菜单打开时不响应滚动隐藏
        if (sidebar.classList.contains('active')) return;

        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY;

        if (Math.abs(delta) < SCROLL_THRESHOLD) return;

        if (delta > 0 && currentScrollY > 60) {
            // 向下滚动 → 隐藏
            header.classList.add('nav-hidden');
        } else {
            // 向上滚动 → 显示
            header.classList.remove('nav-hidden');
        }

        lastScrollY = currentScrollY;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(handleScroll);
            ticking = true;
        }
    }, { passive: true });

    // 窗口尺寸变化时重置
    window.addEventListener('resize', () => {
        if (!isMobile()) {
            header.classList.remove('nav-hidden');
        }
    });
}());

// ── 回到顶部 ──────────────────────────────────────────────
const backTopBtn = document.querySelector('.float-btn--backtop');

backTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── 右侧联系悬浮框 ────────────────────────────────────────
const contactBtn   = document.querySelector('.float-btn--contact');
const contactPopup = contactBtn.querySelector('.float-popup');

function showPopup()  { contactPopup.classList.add('active'); }
function hidePopup()  { contactPopup.classList.remove('active'); }

contactBtn.addEventListener('mouseenter', showPopup);
contactBtn.addEventListener('mouseleave', hidePopup);
// 鼠标移入弹窗本身也保持显示（通过父元素事件冒泡已覆盖，无需额外监听）

// ── 轮播图 ────────────────────────────────────────────────
const carousel      = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const indicators    = document.querySelectorAll('.indicator');
const prevBtn       = document.querySelector('.carousel-control.prev');
const nextBtn       = document.querySelector('.carousel-control.next');

const AUTO_PLAY_DELAY = 5000;
let currentIndex = 0;
let autoPlayTimer = null;

if (carousel && carouselItems.length > 0) {

    /** 切换到指定索引的幻灯片 */
    function showSlide(index) {
        carouselItems[currentIndex].classList.remove('active');
        indicators[currentIndex].classList.remove('active');
        indicators[currentIndex].setAttribute('aria-selected', 'false');

        currentIndex = (index + carouselItems.length) % carouselItems.length;

        carouselItems[currentIndex].classList.add('active');
        indicators[currentIndex].classList.add('active');
        indicators[currentIndex].setAttribute('aria-selected', 'true');
    }

    function nextSlide() { showSlide(currentIndex + 1); }
    function prevSlide() { showSlide(currentIndex - 1); }

    function startAutoPlay() {
        stopAutoPlay();
        autoPlayTimer = setInterval(nextSlide, AUTO_PLAY_DELAY);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
    }

    // 按钮点击
    nextBtn.addEventListener('click', () => { stopAutoPlay(); nextSlide(); startAutoPlay(); });
    prevBtn.addEventListener('click', () => { stopAutoPlay(); prevSlide(); startAutoPlay(); });

    // 指示器点击
    indicators.forEach((dot, i) => {
        dot.addEventListener('click', () => { stopAutoPlay(); showSlide(i); startAutoPlay(); });
    });

    // 鼠标悬停暂停自动播放
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);

    // 键盘支持（方向键控制）
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') { stopAutoPlay(); nextSlide(); startAutoPlay(); }
        if (e.key === 'ArrowLeft')  { stopAutoPlay(); prevSlide(); startAutoPlay(); }
    });

    // 启动
    startAutoPlay();
}
