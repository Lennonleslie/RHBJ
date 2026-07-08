// ================================================================
//  酒品数据 — 中式美酒鉴赏
// ================================================================
const wineData = [{
    name: '飞天茅台',
    sub: '· 陈年',
    origin: '贵州茅台镇',
    description: '酱香典范，空杯留香。历经岁月沉淀，酒体醇厚丰满，回味悠长。',
    type: '酱香',
    year: '2015',
    seed: 'maotai'
}, {
    name: '五粮液',
    sub: '· 交杯',
    origin: '四川宜宾',
    description: '浓香王者，五粮精华。香气悠久，入口甘美，入喉净爽。',
    type: '浓香',
    year: '2018',
    seed: 'wuliangye'
}, {
    name: '汾酒',
    sub: '· 青花',
    origin: '山西杏花村',
    description: '清香鼻祖，一清到底。酒体纯净，落口甜绵，余味爽净。',
    type: '清香',
    year: '2020',
    seed: 'fenjiu'
}, {
    name: '郎酒',
    sub: '· 青花郎',
    origin: '四川古蔺',
    description: '酱香突出，优雅细腻。醇厚协调，回味悠长，空杯留香持久。',
    type: '酱香',
    year: '2016',
    seed: 'langjiu'
}, {
    name: '洋河大曲',
    sub: '· 蓝色经典',
    origin: '江苏宿迁',
    description: '浓香绵柔，甜净绵长。香气优雅，口感柔和，饮后舒适。',
    type: '浓香',
    year: '2019',
    seed: 'yanghe'
}, {
    name: '竹叶青',
    sub: '· 陈酿',
    origin: '山西汾阳',
    description: '清香型露酒，以汾酒为基，融合竹叶、砂仁等十余味草本。',
    type: '清香',
    year: '2017',
    seed: 'zhuyeqing'
}, {
    name: '习酒',
    sub: '· 窖藏',
    origin: '贵州习水',
    description: '酱香醇厚，陈香舒适。酒体微黄透明，酱香、陈香协调。',
    type: '酱香',
    year: '2014',
    seed: 'xijiu'
}, {
    name: '古井贡酒',
    sub: '· 年份原浆',
    origin: '安徽亳州',
    description: '浓香纯正，窖香浓郁。酒体丰满，绵甜爽净，回味悠长。',
    type: '浓香',
    year: '2018',
    seed: 'gujing'
}, {
    name: '红星二锅头',
    sub: '· 蓝瓶',
    origin: '北京',
    description: '清香纯正，醇厚甘冽。清香型白酒的经典代表，回味爽净。',
    type: '清香',
    year: '2021',
    seed: 'hongxing'
}, {
    name: '珍酒',
    sub: '· 珍十五',
    origin: '贵州遵义',
    description: '酱香优雅，陈香突出。酒体醇厚，细腻协调，余味悠长。',
    type: '酱香',
    year: '2016',
    seed: 'zhenjiu'
}, {
    name: '剑南春',
    sub: '· 水晶',
    origin: '四川绵竹',
    description: '浓香典雅，香气馥郁。酒体醇和，甘润爽口，各味协调。',
    type: '浓香',
    year: '2019',
    seed: 'jiannanchun'
}, {
    name: '牛栏山',
    sub: '· 陈酿',
    origin: '北京顺义',
    description: '清香淡雅，绵柔顺口。二锅头工艺，酒体纯净，落口甘甜。',
    type: '清香',
    year: '2020',
    seed: 'niulanshan'
}];

// ================================================================
//  图片工具
// ================================================================
const IMG_W = 500;
const IMG_H = 350;
const LARGE_W = 1200;
const LARGE_H = 800;

function getThumb(seed) {
    return `https://picsum.photos/seed/${seed}/${IMG_W}/${IMG_H}`;
}

function getLarge(seed) {
    return `https://picsum.photos/seed/${seed}/${LARGE_W}/${LARGE_H}`;
}

// ================================================================
//  状态
// ================================================================
let currentFilter = 'all';
let currentIndex = 0;
let isLightboxOpen = false;
let filteredData = [...wineData];

// DOM 引用
const grid = document.getElementById('cardGrid');
const totalCount = document.getElementById('totalCount');
const filterHint = document.getElementById('filterHint');

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxSub = document.getElementById('lightboxSub');
const lightboxCounter = document.getElementById('lightboxCounter');
const lightboxLoader = document.getElementById('lightboxLoader');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const closeBtn = document.getElementById('closeBtn');

const filterAll = document.getElementById('filterAll');
const filterJiang = document.getElementById('filterJiang');
const filterNong = document.getElementById('filterNong');
const filterQing = document.getElementById('filterQing');

// ================================================================
//  渲染卡片
// ================================================================
function renderCards(filterType = 'all') {
    // 过滤数据
    let data = wineData;
    if (filterType !== 'all') {
        data = wineData.filter(item => item.type === filterType);
    }
    filteredData = data;
    totalCount.textContent = data.length;

    // 更新提示
    const typeMap = { '酱香': '酱香 · 醇厚', '浓香': '浓香 · 馥郁', '清香': '清香 · 雅致' };
    if (filterType === 'all') {
        filterHint.textContent = '· 点击卡片品鉴 ·';
    } else {
        filterHint.textContent = `· 当前筛选：${typeMap[filterType] || filterType} ·`;
    }

    if (data.length === 0) {
        grid.innerHTML = `
                <div class="empty-state">
                    <span class="big">🍶</span>
                    暂无此品类佳酿<br />
                    <span style="font-size:0.8rem;opacity:0.5;">敬请期待更多陈年美酒</span>
                </div>
            `;
        return;
    }

    let html = '';
    data.forEach((item, index) => {
        const thumb = getThumb(item.seed);
        const typeClass = item.type === '酱香' ? 'jiang' : item.type === '浓香' ? 'nong' : 'qing';
        html += `
                <div class="card" data-index="${index}" data-type="${item.type}" role="listitem">
                    <div class="card-image">
                        <div class="placeholder">🍶</div>
                        <img src="${thumb}" alt="${item.name}" loading="lazy" />
                    </div>
                    <div class="card-content">
                        <div class="name">${item.name} <span class="sub-name">${item.sub || ''}</span></div>
                        <div class="origin">${item.origin}</div>
                        <div class="desc">${item.description}</div>
                        <div class="card-footer">
                            <span class="type-tag ${typeClass}">${item.type}</span>
                            <span class="year">📅 ${item.year}</span>
                        </div>
                    </div>
                </div>
            `;
    });

    grid.innerHTML = html;

    // 绑定卡片点击事件 (使用事件代理)
    grid.querySelectorAll('.card').forEach(card => {
        const idx = parseInt(card.dataset.index);
        card.addEventListener('click', () => {
            // 获取在过滤后数据中的真实索引
            openLightbox(idx);
        });

        // 图片加载完成后隐藏占位
        const img = card.querySelector('img');
        if (img) {
            img.addEventListener('load', () => {
                const ph = card.querySelector('.placeholder');
                if (ph) ph.style.display = 'none';
            });
            img.addEventListener('error', () => {
                const ph = card.querySelector('.placeholder');
                if (ph) {
                    ph.style.display = 'flex';
                    ph.style.background = '#b8a58e';
                    ph.textContent = '🍷';
                    ph.style.fontSize = '2.8rem';
                    ph.style.color = 'rgba(44,24,16,0.3)';
                }
            });
        }
    });
}

// ================================================================
//  灯箱 (看图模式)
// ================================================================
function openLightbox(index) {
    if (filteredData.length === 0) return;
    currentIndex = Math.min(index, filteredData.length - 1);
    isLightboxOpen = true;
    document.body.classList.add('no-scroll');
    lightbox.classList.add('active');
    loadLightboxImage(currentIndex);
    updateLightboxInfo(currentIndex);
}

function closeLightbox() {
    isLightboxOpen = false;
    document.body.classList.remove('no-scroll');
    lightbox.classList.remove('active');
    setTimeout(() => {
        if (!isLightboxOpen) {
            lightboxImage.src = '';
            lightboxImage.classList.remove('loaded');
            lightboxImage.classList.add('loading');
        }
    }, 400);
}

function loadLightboxImage(index) {
    const item = filteredData[index];
    if (!item) return;
    const largeUrl = getLarge(item.seed);

    lightboxLoader.classList.add('show');
    lightboxImage.classList.remove('loaded');
    lightboxImage.classList.add('loading');

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function () {
        lightboxImage.src = largeUrl;
        lightboxImage.classList.remove('loading');
        lightboxImage.classList.add('loaded');
        lightboxLoader.classList.remove('show');
    };
    img.onerror = function () {
        const fallback = getThumb(item.seed);
        lightboxImage.src = fallback;
        lightboxImage.classList.remove('loading');
        lightboxImage.classList.add('loaded');
        lightboxLoader.classList.remove('show');
    };
    img.src = largeUrl;
}

function updateLightboxInfo(index) {
    const item = filteredData[index];
    if (!item) return;
    lightboxTitle.textContent = item.name + (item.sub || '');
    lightboxSub.textContent = `${item.origin} · ${item.type}香 · ${item.year}`;
    lightboxCounter.textContent = `${index + 1} / ${filteredData.length}`;
}

function goPrev() {
    if (filteredData.length === 0) return;
    currentIndex = (currentIndex - 1 + filteredData.length) % filteredData.length;
    loadLightboxImage(currentIndex);
    updateLightboxInfo(currentIndex);
}

function goNext() {
    if (filteredData.length === 0) return;
    currentIndex = (currentIndex + 1) % filteredData.length;
    loadLightboxImage(currentIndex);
    updateLightboxInfo(currentIndex);
}

// ================================================================
//  筛选逻辑
// ================================================================
function setFilter(type) {
    currentFilter = type;
    // 更新按钮状态
    document.querySelectorAll('.menu-btn').forEach(btn => btn.classList.remove('active'));
    if (type === 'all') {
        filterAll.classList.add('active');
    } else if (type === '酱香') {
        filterJiang.classList.add('active');
    } else if (type === '浓香') {
        filterNong.classList.add('active');
    } else if (type === '清香') {
        filterQing.classList.add('active');
    }
    renderCards(type);
}

// ================================================================
//  事件绑定
// ================================================================

// 筛选按钮
filterAll.addEventListener('click', () => setFilter('all'));
filterJiang.addEventListener('click', () => setFilter('酱香'));
filterNong.addEventListener('click', () => setFilter('浓香'));
filterQing.addEventListener('click', () => setFilter('清香'));

// 灯箱控制
closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
});
prevBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    goPrev();
});
nextBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    goNext();
});

// 键盘
document.addEventListener('keydown', function (e) {
    if (!isLightboxOpen) return;
    switch (e.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            goPrev();
            break;
        case 'ArrowRight':
            e.preventDefault();
            goNext();
            break;
    }
});

// 触摸滑动
let touchStartX = 0;
lightbox.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });
lightbox.addEventListener('touchend', function (e) {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
        if (diff > 0) goNext();
        else goPrev();
    }
}, { passive: true });

// ================================================================
//  初始化
// ================================================================
renderCards('all');

// 预加载第一张大图
if (wineData.length > 0) {
    const preload = new Image();
    preload.src = getLarge(wineData[0].seed);
}

console.log('🍶 醉仙居 · 美酒鉴赏已开张！');
console.log(`📋 共 ${wineData.length} 款佳酿，分类：酱香 / 浓香 / 清香`);
console.log('💡 点击卡片品鉴 · 底部菜单筛选 · 键盘 ← → 切换');