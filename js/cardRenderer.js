// ================================================================
//  cardRenderer.js - 卡片渲染
// ================================================================

function getThumb(item) {
    return item.image || 'https://picsum.photos/500/350?random=1';
}

function getLarge(item) {
    return item.largeImage || 'https://picsum.photos/1200/800?random=1';
}

function getTypeClass(type) {
    if (type === '酱香') return 'jiang';
    if (type === '浓香') return 'nong';
    if (type === '清香') return 'qing';
    return '';
}

function renderCards(data, filterType, totalCount, filterHint, onCardClick) {
    let filteredData = data;
    if (filterType !== 'all') {
        filteredData = data.filter(item => item.types && item.types.includes(filterType));
    }

    if (totalCount) totalCount.textContent = filteredData.length;
    const typeMap = { '酱香': '酱香 · 醇厚', '浓香': '浓香 · 馥郁', '清香': '清香 · 雅致' };
    if (filterHint) {
        filterHint.textContent = filterType === 'all' ? '· 点击卡片品鉴 ·' : `· 当前筛选：${typeMap[filterType] || filterType} ·`;
    }

    const grid = document.getElementById('cardGrid');
    if (!grid) return filteredData;

    if (filteredData.length === 0) {
        grid.innerHTML = `<div class="empty-state"><span class="big">🍶</span>暂无此品类佳酿<br /><span style="font-size:0.8rem;opacity:0.5;">敬请期待更多陈年美酒</span></div>`;
        return filteredData;
    }

    let html = '';
    filteredData.forEach((item, index) => {
        const thumb = getThumb(item);
        let typesHtml = item.types.map(t => `<span class="type-tag ${getTypeClass(t)}">${t}</span>`).join('');
        let tagsHtml = item.tags ? item.tags.map(t => `<span class="attr-tag">${t}</span>`).join('') : '';
        html += `
            <div class="card" data-index="${index}">
                <div class="card-image">
                    <div class="placeholder">🍶</div>
                    <img src="${thumb}" alt="${item.name}" loading="lazy" />
                </div>
                <div class="card-content">
                    <div class="name">${item.name} <span class="sub-name">${item.sub || ''}</span></div>
                    <div class="origin">${item.origin}</div>
                    <div class="desc">${item.description}</div>
                    <div class="card-footer">
                        <div class="footer-row-1">
                            <div class="types-wrapper">${typesHtml}</div>
                            <span class="year">📅 ${item.year}</span>
                        </div>
                        ${tagsHtml ? `<div class="footer-row-2">${tagsHtml}</div>` : ''}
                    </div>
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;

    grid.querySelectorAll('.card').forEach(card => {
        const idx = parseInt(card.dataset.index);
        card.addEventListener('click', () => onCardClick && onCardClick(idx));
        const img = card.querySelector('img');
        if (img) {
            img.addEventListener('load', () => { const ph = card.querySelector('.placeholder'); if (ph) ph.style.display = 'none'; });
            img.addEventListener('error', () => {
                const ph = card.querySelector('.placeholder');
                if (ph) { ph.style.display = 'flex'; ph.textContent = '🍷'; ph.style.fontSize = '2.8rem'; ph.style.color = 'rgba(44,24,16,0.3)'; }
            });
        }
    });

    return filteredData;
}