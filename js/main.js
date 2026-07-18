// ================================================================
//  main.js - 灯箱主逻辑（使用背景图方式）
// ================================================================

let currentFilter = 'all';
let currentWineIndex = 0;
let currentImageIndex = 0;
let isLightboxOpen = false;
let filteredData = [...wineData];

// ---------- DOM 引用 ----------
const totalCount = document.getElementById('totalCount');
const filterHint = document.getElementById('filterHint');
const lightbox = document.getElementById('lightbox');
const imageWrapper = document.getElementById('imageWrapper');
const lightboxLoader = document.getElementById('lightboxLoader');
const lightboxGallery = document.getElementById('lightboxGallery');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxSub = document.getElementById('lightboxSub');
const lightboxDetail = document.getElementById('lightboxDetail');
const lightboxSpecs = document.getElementById('lightboxSpecs');
const lightboxAwards = document.getElementById('lightboxAwards');
const lightboxServing = document.getElementById('lightboxServing');
const lightboxCounter = document.getElementById('lightboxCounter');
const lightboxCustomImage = document.getElementById('lightboxCustomImage');
const lightboxCustomText = document.getElementById('lightboxCustomText');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const closeBtn = document.getElementById('closeBtn');
const filterAll = document.getElementById('filterAll');
const filterJiang = document.getElementById('filterJiang');
const filterNong = document.getElementById('filterNong');
const filterQing = document.getElementById('filterQing');

// ---------- 获取图片列表 ----------
function getImageList(item) {
    const list = [];
    // 第一张必须是 largeImage
    if (item.largeImage) {
        list.push(item.largeImage);
    }
    // 然后才是 gallery 中的图片
    if (item.gallery && Array.isArray(item.gallery)) {
        item.gallery.forEach(url => {
            if (url && !list.includes(url)) list.push(url);
        });
    }
    // 如果仍然没有图片，使用 image 作为兜底
    if (list.length === 0 && item.image) {
        console.warn(`⚠️ ${item.name} 没有配置 largeImage，使用 image 作为主图`);
        list.push(item.image);
    }
    return list;
}

// ---------- 加载灯箱图片（使用背景图） ----------
function loadLightboxImage(wineIdx, imgIdx) {
    const item = filteredData[wineIdx];
    if (!item) {
        console.error('❌ 未找到酒款数据');
        return;
    }

    const images = getImageList(item);
    if (!images.length) {
        console.error(`❌ ${item.name} 没有任何图片配置`);
        imageWrapper.style.backgroundImage = 'none';
        imageWrapper.classList.add('error');
        return;
    }

    currentImageIndex = Math.min(imgIdx, images.length - 1);
    const url = images[currentImageIndex];

    console.log(`📸 [${item.name}] 加载图片 #${currentImageIndex + 1}: ${url}`);

    // 显示加载动画
    lightboxLoader.classList.add('show');
    imageWrapper.classList.remove('loaded', 'error');

    // 使用 Image 对象预加载
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = function () {
        // 设置背景图
        imageWrapper.style.backgroundImage = `url(${url})`;
        imageWrapper.classList.add('loaded');
        imageWrapper.classList.remove('error');
        lightboxLoader.classList.remove('show');
        console.log(`✅ [${item.name}] 图片加载成功`);
    };

    img.onerror = function () {
        console.error(`❌ [${item.name}] 图片加载失败: ${url}`);
        imageWrapper.style.backgroundImage = 'none';
        imageWrapper.classList.add('error');
        imageWrapper.classList.remove('loaded');
        lightboxLoader.classList.remove('show');
    };

    // 开始加载
    img.src = url;
}

// ---------- 渲染画廊缩略图 ----------
function renderGallery(item, activeIdx) {
    const images = getImageList(item);
    if (images.length <= 1) {
        lightboxGallery.innerHTML = '';
        return;
    }
    let html = '';
    images.forEach((url, idx) => {
        html += `<div class="gallery-thumb ${idx === activeIdx ? 'active' : ''}" data-img-index="${idx}">
                    <img src="${url}" alt="缩略图 ${idx + 1}" loading="lazy" 
                         onerror="this.style.opacity='0.2'; this.alt='加载失败'" />
                </div>`;
    });
    lightboxGallery.innerHTML = html;
    
    // 绑定点击事件
    lightboxGallery.querySelectorAll('.gallery-thumb').forEach(el => {
        el.addEventListener('click', function (e) {
            e.stopPropagation();
            const idx = parseInt(this.dataset.imgIndex);
            if (idx !== currentImageIndex) {
                currentImageIndex = idx;
                loadLightboxImage(currentWineIndex, currentImageIndex);
                renderGallery(filteredData[currentWineIndex], currentImageIndex);
            }
        });
    });
}

// ---------- 更新文本信息 ----------
function updateLightboxInfo(wineIdx) {
    const item = filteredData[wineIdx];
    if (!item) return;

    lightboxTitle.innerHTML = `${item.name} <span class="sub-name">${item.sub || ''}</span>`;
    const typeStr = item.types ? item.types.join(' · ') : '';
    lightboxSub.textContent = `${item.origin} · ${typeStr} · ${item.year}`;
    lightboxDetail.textContent = item.detail || item.description || '暂无详细描述';

    // 规格
    if (item.specs && Object.keys(item.specs).length) {
        const labelMap = { alcohol: '酒精度', volume: '净含量', ingredients: '原料', type: '香型', standard: '执行标准' };
        lightboxSpecs.innerHTML = Object.entries(item.specs).map(([k, v]) =>
            `<span class="spec-item"><strong>${labelMap[k] || k}</strong>${v}</span>`
        ).join('');
        document.getElementById('lightboxSpecsWrap').style.display = 'block';
    } else {
        document.getElementById('lightboxSpecsWrap').style.display = 'none';
    }

    if (item.awards) {
        lightboxAwards.textContent = item.awards;
        document.getElementById('lightboxAwardsWrap').style.display = 'block';
    } else {
        document.getElementById('lightboxAwardsWrap').style.display = 'none';
    }

    if (item.serving) {
        lightboxServing.textContent = item.serving;
        document.getElementById('lightboxServingWrap').style.display = 'block';
    } else {
        document.getElementById('lightboxServingWrap').style.display = 'none';
    }

    if (item.custom) {
        lightboxCustomImage.src = item.custom.image || '';
        lightboxCustomImage.style.display = item.custom.image ? 'block' : 'none';
        lightboxCustomText.textContent = item.custom.text || '';
        lightboxCustomText.style.display = item.custom.text ? 'block' : 'none';
        lightboxCustom.style.display = 'flex';
    } else {
        lightboxCustom.style.display = 'none';
    }

    lightboxCounter.textContent = `${wineIdx + 1} / ${filteredData.length}`;
}

// ---------- 打开灯箱 ----------
function openLightbox(index) {
    if (filteredData.length === 0) return;
    currentWineIndex = Math.min(index, filteredData.length - 1);
    currentImageIndex = 0;
    isLightboxOpen = true;
    document.body.classList.add('no-scroll');
    lightbox.classList.add('active');

    const item = filteredData[currentWineIndex];
    loadLightboxImage(currentWineIndex, 0);
    renderGallery(item, 0);
    updateLightboxInfo(currentWineIndex);
}

// ---------- 关闭灯箱 ----------
function closeLightbox() {
    isLightboxOpen = false;
    document.body.classList.remove('no-scroll');
    lightbox.classList.remove('active');
    setTimeout(() => {
        if (!isLightboxOpen) {
            // 清空背景图
            imageWrapper.style.backgroundImage = 'none';
            imageWrapper.classList.remove('loaded', 'error');
            lightboxGallery.innerHTML = '';
        }
    }, 300);
}

// ---------- 切换画廊图片 ----------
function goPrevImage() {
    const item = filteredData[currentWineIndex];
    const images = getImageList(item);
    if (images.length <= 1) return;
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    loadLightboxImage(currentWineIndex, currentImageIndex);
    renderGallery(item, currentImageIndex);
}

function goNextImage() {
    const item = filteredData[currentWineIndex];
    const images = getImageList(item);
    if (images.length <= 1) return;
    currentImageIndex = (currentImageIndex + 1) % images.length;
    loadLightboxImage(currentWineIndex, currentImageIndex);
    renderGallery(item, currentImageIndex);
}

// ---------- 切换酒款 ----------
function goPrevWine() {
    if (filteredData.length === 0) return;
    currentWineIndex = (currentWineIndex - 1 + filteredData.length) % filteredData.length;
    currentImageIndex = 0;
    const item = filteredData[currentWineIndex];
    loadLightboxImage(currentWineIndex, 0);
    renderGallery(item, 0);
    updateLightboxInfo(currentWineIndex);
}

function goNextWine() {
    if (filteredData.length === 0) return;
    currentWineIndex = (currentWineIndex + 1) % filteredData.length;
    currentImageIndex = 0;
    const item = filteredData[currentWineIndex];
    loadLightboxImage(currentWineIndex, 0);
    renderGallery(item, 0);
    updateLightboxInfo(currentWineIndex);
}

// ---------- 主图点击切换画廊（左/右半区） ----------
imageWrapper.addEventListener('click', function (e) {
    if (!isLightboxOpen) return;
    const rect = this.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    if (x < 0.5) goPrevImage();
    else goNextImage();
});

// 触摸滑动切换画廊图片
let touchStartX = 0;
imageWrapper.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

imageWrapper.addEventListener('touchend', function (e) {
    if (!isLightboxOpen) return;
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 30) {
        if (diff > 0) goNextImage();
        else goPrevImage();
    }
}, { passive: true });

// ---------- 筛选 ----------
function setFilter(type) {
    currentFilter = type;
    document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
    if (type === 'all') filterAll.classList.add('active');
    else if (type === '酱香') filterJiang.classList.add('active');
    else if (type === '浓香') filterNong.classList.add('active');
    else if (type === '清香') filterQing.classList.add('active');

    filteredData = renderCards(wineData, type, totalCount, filterHint, openLightbox);
}

// ---------- 事件绑定 ----------
filterAll.addEventListener('click', () => setFilter('all'));
filterJiang.addEventListener('click', () => setFilter('酱香'));
filterNong.addEventListener('click', () => setFilter('浓香'));
filterQing.addEventListener('click', () => setFilter('清香'));

closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
});
prevBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    goPrevWine();
});
nextBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    goNextWine();
});

document.addEventListener('keydown', function (e) {
    if (!isLightboxOpen) return;
    switch (e.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            goPrevWine();
            break;
        case 'ArrowRight':
            e.preventDefault();
            goNextWine();
            break;
    }
});

// ---------- 初始化 ----------
setFilter('all');
console.log('🍶 醉仙居已启动');
console.log('📸 使用背景图方式加载图片');