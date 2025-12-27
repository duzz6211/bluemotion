/**
 * 블루모션 브랜드 웹사이트 - 메인 JavaScript
 */

// ========================================
// SVG 픽토그램 아이콘 시스템
// ========================================
const icons = {
    clipboard: `<svg class="icon" viewBox="0 0 24 24"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>`,
    fileText: `<svg class="icon" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>`,
    book: `<svg class="icon" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
    graduationCap: `<svg class="icon" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`,
    building: `<svg class="icon" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M8 10h.01"></path><path d="M16 10h.01"></path><path d="M8 14h.01"></path><path d="M16 14h.01"></path></svg>`,
    waves: `<svg class="icon" viewBox="0 0 24 24"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>`,
    leaf: `<svg class="icon" viewBox="0 0 24 24"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>`,
    user: `<svg class="icon" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
    users: `<svg class="icon" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    check: `<svg class="icon" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    checkCircle: `<svg class="icon" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
    award: `<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
    target: `<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`,
    shield: `<svg class="icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    shieldCheck: `<svg class="icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>`,
    heart: `<svg class="icon" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
    activity: `<svg class="icon" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
    dumbbell: `<svg class="icon" viewBox="0 0 24 24"><path d="m6.5 6.5 11 11"></path><path d="m21 21-1-1"></path><path d="m3 3 1 1"></path><path d="m18 22 4-4"></path><path d="m2 6 4-4"></path><path d="m3 10 7-7"></path><path d="m14 21 7-7"></path></svg>`,
    smile: `<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
    baby: `<svg class="icon" viewBox="0 0 24 24"><path d="M9 12h.01"></path><path d="M15 12h.01"></path><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"></path><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"></path></svg>`,
    phone: `<svg class="icon" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
    mail: `<svg class="icon" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
    mapPin: `<svg class="icon" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
    clock: `<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
    car: `<svg class="icon" viewBox="0 0 24 24"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"></path><circle cx="6.5" cy="16.5" r="2.5"></circle><circle cx="16.5" cy="16.5" r="2.5"></circle></svg>`,
    bus: `<svg class="icon" viewBox="0 0 24 24"><path d="M8 6v6"></path><path d="M16 6v6"></path><path d="M2 12h20"></path><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H6c-1.1 0-2.1.8-2.4 1.8l-1.4 5c-.1.4-.2.8-.2 1.2 0 .4.1.8.2 1.2.3 1.1.8 2.8.8 2.8h3"></path><circle cx="7" cy="18" r="2"></circle><circle cx="17" cy="18" r="2"></circle></svg>`,
    messageCircle: `<svg class="icon" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`,
    handshake: `<svg class="icon" viewBox="0 0 24 24"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>`,
    trending: `<svg class="icon" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
    sparkles: `<svg class="icon" viewBox="0 0 24 24"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>`,
    calendar: `<svg class="icon" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
    globe: `<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    star: `<svg class="icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
    instagram: `<svg class="icon" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
    youtube: `<svg class="icon" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>`,
    facebook: `<svg class="icon" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`
};

// 이모티콘 → 아이콘 매핑
const emojiToIconMap = {
    '📋': 'clipboard', '🏢': 'building', '🌊': 'waves', '📚': 'book',
    '🤝': 'handshake', '🌱': 'leaf', '👤': 'user', '✅': 'checkCircle',
    '✓': 'check', '👨‍🏫': 'graduationCap', '🎯': 'target', '🛡️': 'shield',
    '💪': 'dumbbell', '🧘': 'activity', '😊': 'smile', '👶': 'baby',
    '📞': 'phone', '📧': 'mail', '📍': 'mapPin', '🕐': 'clock',
    '🚗': 'car', '🚌': 'bus', '💬': 'messageCircle', '📈': 'trending',
    '⭐': 'star', '🌐': 'globe'
};

// 이모티콘을 아이콘으로 변환
function replaceEmojisWithIcons() {
    document.querySelectorAll('.feature-icon, .info-icon').forEach(el => {
        const text = el.textContent.trim();
        if (emojiToIconMap[text] && icons[emojiToIconMap[text]]) {
            el.innerHTML = icons[emojiToIconMap[text]];
        }
    });
}

// ========================================
// 컴포넌트 로드 함수 (GitHub Pages 호환)
// ========================================

// 현재 페이지 기준 base path 계산 (상대 경로 사용)
function getBasePath() {
    const path = window.location.pathname;
    // 하위 폴더에 있는지 확인 (fmta/, bluemotion/ 등)
    const folders = ['fmta', 'bluemotion', 'floating', 'special-maternity', 'education', 'shop', 'news'];
    for (const folder of folders) {
        if (path.includes('/' + folder + '/')) {
            return '../';
        }
    }
    return './';
}

async function loadComponent(elementId, componentPath) {
    const element = document.getElementById(elementId);
    if (!element) return false;
    
    // 상대 경로로 처리 (basePath 기반)
    const basePath = getBasePath();
    let relativePath = basePath + componentPath;
    
    try {
        const response = await fetch(relativePath);
        if (!response.ok) throw new Error('Component not found');
        let html = await response.text();
        
        element.innerHTML = html;
        return true;
    } catch (error) {
        console.error(`Failed to load component: ${relativePath}`, error);
        return false;
    }
}

// 현재 페이지에 맞는 네비게이션 활성화
function setActiveNavigation() {
    const currentPath = window.location.pathname;
    
    // 메인 네비게이션 활성화
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href && currentPath.includes(href.split('/')[1])) {
            link.classList.add('active');
        }
    });
    
    // 서브 네비게이션 활성화
    document.querySelectorAll('.sub-nav-link, .sidebar-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href && currentPath.endsWith(href.replace(/^\.\.\//, '').replace(/^\//, ''))) {
            link.classList.add('active');
        }
    });
}

// 모바일 메뉴 토글 초기화 (Overlay 방식)
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            const isActive = mainNav.classList.toggle('active');
            this.classList.toggle('active');
            
            // 메뉴 열림 시 배경 스크롤 방지
            if (isActive) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // 메뉴 내 링크 클릭 시 메뉴 닫기
        mainNav.querySelectorAll('.nav-link, .dropdown-link').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // ESC 키로 메뉴 닫기
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// 헤더 스크롤 효과 초기화
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// 부드러운 스크롤 초기화
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// 메인 초기화 함수
async function init() {
    // 컴포넌트 로드 (상대 경로 사용 - 하위 폴더 HTML용)
    // 루트 index.html은 직접 nav/footer가 삽입되어 있으므로 요소가 없음
    const navLoaded = await loadComponent('nav-container', 'components/nav.html');
    const footerLoaded = await loadComponent('footer-container', 'components/footer.html');
    
    // 컴포넌트 로드 여부와 관계없이 초기화 (루트 index.html은 직접 삽입됨)
    initMobileMenu();
    initHeaderScroll();
    setActiveNavigation();
    
    initSmoothScroll();
    
    // 이모티콘을 아이콘으로 변환
    replaceEmojisWithIcons();
    
    // 이미지 갤러리 초기화
    initImageGallery();
    initExpandableGallery();
}

// DOM 로드 완료 후 실행
document.addEventListener('DOMContentLoaded', init);

// ========================================
// Image Gallery & Lightbox System
// ========================================

// 라이트박스 HTML 생성
function createLightbox() {
    if (document.getElementById('lightbox')) return;
    
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close" aria-label="닫기">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            <div class="lightbox-counter"><span class="current">1</span> / <span class="total">1</span></div>
            <div class="lightbox-carousel">
                <button class="lightbox-nav prev" aria-label="이전">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <div class="lightbox-slides"></div>
                <button class="lightbox-nav next" aria-label="다음">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>
            <div class="lightbox-indicators"></div>
        </div>
    `;
    document.body.appendChild(lightbox);
    
    // 이벤트 바인딩
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-nav.prev');
    const nextBtn = lightbox.querySelector('.lightbox-nav.next');
    
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', () => navigateLightbox(-1));
    nextBtn.addEventListener('click', () => navigateLightbox(1));
    
    // 배경 클릭 시 닫기
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
            closeLightbox();
        }
    });
    
    // ESC 키로 닫기
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    });
}

// 라이트박스 상태
let lightboxImages = [];
let lightboxIndex = 0;

// 라이트박스 열기
function openLightbox(images, startIndex = 0) {
    createLightbox();
    
    const lightbox = document.getElementById('lightbox');
    const slidesContainer = lightbox.querySelector('.lightbox-slides');
    const indicatorsContainer = lightbox.querySelector('.lightbox-indicators');
    const totalSpan = lightbox.querySelector('.lightbox-counter .total');
    
    lightboxImages = images;
    lightboxIndex = startIndex;
    
    // 슬라이드 생성
    slidesContainer.innerHTML = images.map((src, i) => `
        <div class="lightbox-slide ${i === startIndex ? 'active' : ''}">
            <img src="${src}" alt="이미지 ${i + 1}">
        </div>
    `).join('');
    
    // 인디케이터 생성
    indicatorsContainer.innerHTML = images.map((_, i) => `
        <button class="lightbox-indicator ${i === startIndex ? 'active' : ''}" data-index="${i}"></button>
    `).join('');
    
    // 인디케이터 클릭 이벤트
    indicatorsContainer.querySelectorAll('.lightbox-indicator').forEach(btn => {
        btn.addEventListener('click', () => {
            goToSlide(parseInt(btn.dataset.index));
        });
    });
    
    totalSpan.textContent = images.length;
    updateLightboxUI();
    
    // 라이트박스 표시
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 라이트박스 닫기
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// 슬라이드 이동
function navigateLightbox(direction) {
    const newIndex = lightboxIndex + direction;
    if (newIndex >= 0 && newIndex < lightboxImages.length) {
        goToSlide(newIndex);
    }
}

// 특정 슬라이드로 이동
function goToSlide(index) {
    lightboxIndex = index;
    
    const lightbox = document.getElementById('lightbox');
    const slides = lightbox.querySelectorAll('.lightbox-slide');
    const indicators = lightbox.querySelectorAll('.lightbox-indicator');
    
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
    
    updateLightboxUI();
}

// 라이트박스 UI 업데이트
function updateLightboxUI() {
    const lightbox = document.getElementById('lightbox');
    const currentSpan = lightbox.querySelector('.lightbox-counter .current');
    const prevBtn = lightbox.querySelector('.lightbox-nav.prev');
    const nextBtn = lightbox.querySelector('.lightbox-nav.next');
    
    currentSpan.textContent = lightboxIndex + 1;
    prevBtn.style.visibility = lightboxIndex === 0 ? 'hidden' : 'visible';
    nextBtn.style.visibility = lightboxIndex === lightboxImages.length - 1 ? 'hidden' : 'visible';
}

// 이미지 갤러리 초기화
function initImageGallery() {
    document.querySelectorAll('.image-gallery').forEach(gallery => {
        const images = [];
        
        // 메인 이미지
        const mainImg = gallery.querySelector('.gallery-main img');
        if (mainImg) images.push(mainImg.src);
        
        // 썸네일 이미지
        gallery.querySelectorAll('.gallery-thumb img').forEach(img => {
            images.push(img.src);
        });
        
        // data-images 속성에서 추가 이미지 가져오기
        const extraImages = gallery.dataset.images;
        if (extraImages) {
            images.push(...extraImages.split(',').map(s => s.trim()));
        }
        
        // 클릭 시 라이트박스 열기
        gallery.addEventListener('click', (e) => {
            e.preventDefault();
            
            // 클릭된 이미지의 인덱스 찾기
            let startIndex = 0;
            const clickedImg = e.target.closest('img');
            if (clickedImg) {
                const imgIndex = images.indexOf(clickedImg.src);
                if (imgIndex !== -1) startIndex = imgIndex;
            }
            
            openLightbox(images, startIndex);
        });
    });
}

// 확장형 갤러리 초기화
function initExpandableGallery() {
    document.querySelectorAll('.expandable-gallery').forEach(gallery => {
        const toggle = gallery.querySelector('.expandable-toggle');
        const preview = gallery.querySelector('.expandable-preview');
        
        if (toggle) {
            toggle.addEventListener('click', (e) => {
                e.stopPropagation();
                gallery.classList.toggle('expanded');
                
                const isExpanded = gallery.classList.contains('expanded');
                toggle.innerHTML = isExpanded 
                    ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"></polyline></svg> 접기`
                    : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg> 더보기 (+${gallery.querySelectorAll('.expandable-item').length})`;
            });
        }
        
        // 확장된 이미지 클릭 시 라이트박스
        const allImages = [];
        const previewImg = preview?.querySelector('img');
        if (previewImg) allImages.push(previewImg.src);
        
        gallery.querySelectorAll('.expandable-item img').forEach(img => {
            allImages.push(img.src);
        });
        
        // 프리뷰 클릭
        if (preview) {
            preview.addEventListener('click', (e) => {
                if (e.target.closest('.expandable-toggle')) return;
                openLightbox(allImages, 0);
            });
        }
        
        // 확장된 이미지 클릭
        gallery.querySelectorAll('.expandable-item').forEach((item, index) => {
            item.addEventListener('click', () => {
                openLightbox(allImages, index + 1);
            });
        });
    });
}
