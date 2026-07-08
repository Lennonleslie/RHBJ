// ================================================================
//  data.js - 酒品数据（请替换为您的真实图片路径）
// ================================================================

const wineData = [{
    // ==========================================================
    //  ★★★ 模板案例：飞天茅台（完整配置，含所有字段） ★★★
    //  新增酒品时，复制此结构，按需填写或删除字段即可
    // ==========================================================

    // ----- 基础信息（必填） -----
    name: '飞天茅台',              // 酒名
    sub: '',                // 副标题/后缀（可为空字符串 ''）
    origin: '贵州茅台镇',          // 产地
    description: '酱香典范，空杯留香。历经岁月沉淀，酒体醇厚丰满，回味悠长。',  // 卡片上显示的简短描述（约30字）

    // ----- 分类与标签（用于筛选和展示） -----
    // types: 香型数组，支持多个（如 ['酱香', '浓香']），用于底部菜单筛选
    //        可选值：'酱香' | '浓香' | '清香'（未来可扩展）
    types: ['酱香'],

    // tags: 属性标签数组，仅用于卡片底部展示，不参与筛选
    //        可自由定义任意文字，如：'陈年'、'纯粮'、'限量'、'窖藏' 等
    tags: ['陈年', '纯粮', '限量'],

    year: '',                  // 年份（显示为 📅 2015）

    // ----- 图片资源（路径支持相对路径或网络URL） -----
    image: './images/wxQRcode.jpg',       // 卡片缩略图（建议 500×350）
    largeImage: './images/mtjd.jpg',  // 灯箱主图（建议 1200×800）

    // ----- 灯箱详细内容（以下均为可选字段） -----

    // detail: 详细描述（长文本，支持多段文字，约100-300字）
    detail: '飞天茅台酒是茅台酒中的经典之作，采用传统大曲酱香工艺，历经九次蒸煮、八次发酵、七次取酒，陶坛陈酿多年。酒体微黄透明，酱香突出，幽雅细腻，酒体醇厚，回味悠长，空杯留香持久。被誉为中国白酒的"国酒"代表。',

    // gallery: 画廊图片数组（用于灯箱中多图切换）
    //          第一张图会自动与 largeImage 去重，避免重复
    gallery: [
        './images/wxQRcode.jpg',
        './images/mtjd.jpg',
        './images/mtjd02.jpg',
    ],

    // specs: 规格信息（键值对形式，灯箱中自动渲染为「标签: 值」）
    //        常用键：alcohol（酒精度）、volume（净含量）、ingredients（原料）、
    //                type（香型）、standard（执行标准）
    //        可自由增删，未配置的键不会显示
    specs: {
        alcohol: '53%vol',
        volume: '500ml',
        ingredients: '高粱、小麦、水',
        type: '酱香型',
        standard: 'GB/T 18356'
    },

    // awards: 获奖/荣誉信息（单行文本，支持多段用分号或换行分隔）
    awards: '1915年巴拿马万国博览会金奖；中国名酒；国家非物质文化遗产',

    // serving: 品鉴/饮用建议（建议包含温度、品鉴方法、配餐建议等）
    serving: '适宜温度：20~25℃；建议使用小杯慢品，先闻香，再入口，酒液在口中停留3-5秒，感受酱香层次。配餐建议：红烧肉、酱鸭、海鲜。',

    // custom: 自定义区域（灯箱左下角，左图右文结构，适合放置二维码）
    //         image: 图片URL（建议 52×52 正方形，如二维码）
    //         text:  说明文字（简短，约20字以内）
    custom: {
        image: './images/wxlogo.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
}, {
    name: '飞天茅台',
    sub: '· 陈年',
    origin: '贵州茅台镇',
    description: '酱香典范，空杯留香。历经岁月沉淀，酒体醇厚丰满，回味悠长。',
    types: ['酱香'],
    tags: ['陈年', '纯粮', '限量'],
    year: '2015',
    // ★ 请替换为您的真实图片路径 ★
    image: './images/maotai_thumb.jpg',
    largeImage: './images/maotai_large.jpg',
    detail: '飞天茅台酒是茅台酒中的经典之作，采用传统大曲酱香工艺，历经九次蒸煮、八次发酵、七次取酒，陶坛陈酿多年。酒体微黄透明，酱香突出，幽雅细腻，酒体醇厚，回味悠长，空杯留香持久。被誉为中国白酒的"国酒"代表。',
    gallery: [
        './images/maotai_01.jpg',
        './images/maotai_02.jpg',
        './images/maotai_03.jpg',
    ],
    specs: {
        alcohol: '53%vol',
        volume: '500ml',
        ingredients: '高粱、小麦、水',
        type: '酱香型',
        standard: 'GB/T 18356'
    },
    awards: '1915年巴拿马万国博览会金奖；中国名酒；国家非物质文化遗产',
    serving: '适宜温度：20~25℃；建议使用小杯慢品，先闻香，再入口，酒液在口中停留3-5秒，感受酱香层次。配餐建议：红烧肉、酱鸭、海鲜。',
    custom: {
        image: './images/qrcode_maotai.png',
        text: '扫码关注「茅台酒文化」公众号 · 了解更多酱香故事'
    }
}, {
    name: '白云边',
    sub: '· 兼香',
    origin: '湖北荆州',
    description: '集酱浓于一身，诸味协调，回味悠长。兼香型白酒典范之作。',
    types: ['酱香', '浓香'],
    tags: ['陈年', '兼香', '纯粮'],
    year: '2018',
    image: './images/baiyunbian_thumb.jpg',
    largeImage: './images/baiyunbian_large.jpg',
    detail: '白云边酒是中国兼香型白酒的典范代表，以酱香为主体，浓香为辅助，两者和谐共生。采用传统固态发酵工艺，经陶坛长期陈酿，酒体醇厚丰满，酱浓协调，诸味和谐，回味悠长。',
    gallery: [
        './images/baiyunbian_01.jpg',
        './images/baiyunbian_02.jpg',
        './images/baiyunbian_03.jpg',
    ],
    specs: {
        alcohol: '53%vol',
        volume: '500ml',
        ingredients: '高粱、小麦、水',
        type: '兼香型',
        standard: 'GB/T 23547'
    },
    awards: '中国兼香型白酒代表品牌；中国优质酒；湖北省名酒',
    serving: '适宜温度：20~25℃；可先闻其复合香气，再小口慢品，感受酱浓交融的层次感。配餐建议：湖北菜、湘菜、卤味。',
    custom: {
        image: './images/qrcode_baiyunbian.png',
        text: '扫码了解「白云边」兼香工艺 · 品鉴酱浓和谐之美'
    }
}, {
    name: '汾酒',
    sub: '· 青花',
    origin: '山西杏花村',
    description: '清香鼻祖，一清到底。酒体纯净，落口甜绵，余味爽净。',
    types: ['清香'],
    tags: ['纯粮', '清雅'],
    year: '2020',
    image: './images/fenjiu_thumb.jpg',
    largeImage: './images/fenjiu_large.jpg',
    detail: '汾酒是中国清香型白酒的鼻祖，以"清、净、爽"著称。采用地缸固态发酵工艺，酒体纯净透明，清香纯正，醇甜柔和，落口甜绵，余味爽净。青花系列是汾酒的高端产品线，瓶身以青花瓷为设计灵感，典雅大气。',
    gallery: [
        './images/fenjiu_01.jpg',
        './images/fenjiu_02.jpg',
    ],
    specs: {
        alcohol: '53%vol',
        volume: '500ml',
        ingredients: '高粱、大麦、豌豆、水',
        type: '清香型',
        standard: 'GB/T 10781.2'
    },
    awards: '中国名酒；巴拿马万国博览会甲等大奖章；国家非物质文化遗产',
    serving: '适宜温度：15~20℃；可用小杯慢品，感受清香纯正的独特风格。配餐建议：清淡菜系、海鲜、白切鸡。',
    custom: {
        image: './images/qrcode_fenjiu.png',
        text: '扫码关注「汾酒文化」· 品味千年清香传承'
    }
}, {
    name: '五粮液',
    sub: '· 交杯',
    origin: '四川宜宾',
    description: '浓香王者，五粮精华。香气悠久，入口甘美，入喉净爽。',
    types: ['浓香'],
    tags: ['窖藏', '纯粮', '经典'],
    year: '2018',
    image: './images/wuliangye_thumb.jpg',
    largeImage: './images/wuliangye_large.jpg',
    detail: '五粮液以高粱、大米、糯米、小麦、玉米五种粮食为原料，采用"陈氏秘方"和"跑窖循环"工艺，在明代老窖池中发酵。酒体清澈透明，香气悠久，味醇厚，入口甘美，入喉净爽，各味谐调，恰到好处。',
    gallery: [
        './images/wuliangye_01.jpg',
        './images/wuliangye_02.jpg',
    ],
    specs: {
        alcohol: '52%vol',
        volume: '500ml',
        ingredients: '高粱、大米、糯米、小麦、玉米、水',
        type: '浓香型',
        standard: 'GB/T 10781.1'
    },
    awards: '巴拿马万国博览会金奖；中国酒业协会金奖；中国驰名商标',
    serving: '适宜温度：18~25℃；建议用透明玻璃杯品鉴，观其色，闻其香，品其味。配餐建议：川菜、火锅、烧烤。',
    custom: {
        image: './images/qrcode_wuliangye.png',
        text: '扫码关注「五粮液」官方号 · 品味五粮传奇'
    }
}, {
    name: '竹叶青',
    sub: '· 陈酿',
    origin: '山西汾阳',
    description: '清香型露酒，以汾酒为基，融合竹叶、砂仁等十余味草本。',
    types: ['清香'],
    tags: ['草本', '陈酿', '养生'],
    year: '2017',
    image: './images/zhuyeqing_thumb.jpg',
    largeImage: './images/zhuyeqing_large.jpg',
    detail: '竹叶青酒是以汾酒为基酒，配以竹叶、砂仁、当归、陈皮等十余味名贵草本，经浸泡、过滤、陈酿而成。酒体金黄透明，清香与草本香气协调，口感醇和，回味甘甜。',
    gallery: [
        './images/zhuyeqing_01.jpg',
        './images/zhuyeqing_02.jpg',
    ],
    specs: {
        alcohol: '45%vol',
        volume: '500ml',
        ingredients: '汾酒基酒、竹叶、砂仁、当归、陈皮等',
        type: '清香型露酒',
        standard: 'GB/T 27588'
    },
    awards: '中国名酒；国家非物质文化遗产；中国保健酒著名品牌',
    serving: '适宜温度：15~20℃；可冰镇或加冰饮用，也可温热饮用。配餐建议：清淡菜肴、养生药膳。',
    custom: {
        image: './images/qrcode_zhuyeqing.png',
        text: '扫码了解「竹叶青」草本养生文化'
    }
}, {
    name: '郎酒',
    sub: '· 青花郎',
    origin: '四川古蔺',
    description: '酱香突出，优雅细腻。醇厚协调，回味悠长，空杯留香持久。',
    types: ['酱香'],
    tags: ['陈年', '窖藏', '醇厚'],
    year: '2016',
    image: './images/langjiu_thumb.jpg',
    largeImage: './images/langjiu_large.jpg',
    detail: '青花郎是郎酒高端产品，产于赤水河畔的郎酒庄园。采用传统酱香工艺，经天宝洞、地宝洞天然溶洞长期陈酿，酒体酱香突出，优雅细腻，醇厚协调，回味悠长，空杯留香持久。',
    gallery: [
        './images/langjiu_01.jpg',
        './images/langjiu_02.jpg',
        './images/langjiu_03.jpg',
    ],
    specs: {
        alcohol: '53%vol',
        volume: '500ml',
        ingredients: '高粱、小麦、水',
        type: '酱香型',
        standard: 'GB/T 26760'
    },
    awards: '中国名酒；四川省名酒；青花郎荣获国际烈酒大赛金奖',
    serving: '适宜温度：20~25℃；建议使用小酒杯，观色、闻香、品味三步曲。配餐建议：川菜、湘菜、烧烤。',
    custom: {
        image: './images/qrcode_langjiu.png',
        text: '扫码探索「郎酒庄园」· 感受洞藏陈香魅力'
    }
}];