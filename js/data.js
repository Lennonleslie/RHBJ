// ================================================================
//  data.js - 酒品数据（请替换为您的真实图片路径）
// ================================================================

const wineData = [
/*
{
    // ==========================================================
    //  ★★★ 模板案例：飞天茅台（完整配置，含所有字段） ★★★
    //  新增酒品时，复制此结构，按需填写或删除字段即可
    // ==========================================================

    // ----- 基础信息（必填） -----
    name: '酒名',              // 酒名
    sub: '后缀',                // 副标题/后缀（可为空字符串 ''）
    origin: '产地',          // 产地
    description: '酱香典范，空杯留香。历经岁月沉淀，酒体醇厚丰满，回味悠长。',  // 卡片上显示的简短描述（约30字）

    // ----- 分类与标签（用于筛选和展示） -----
    // types: 香型数组，支持多个（如 ['酱香', '浓香']），用于底部菜单筛选
    //        可选值：'酱香' | '浓香' | '清香'（未来可扩展）
    types: ['香型', '香型2'],

    // tags: 属性标签数组，仅用于卡片底部展示，不参与筛选
    //        可自由定义任意文字，如：'陈年'、'纯粮'、'限量'、'窖藏' 等
    tags: ['展示1', '展示2', '展示3'],

    year: '',                  // 年份（显示为 📅 2015）

    // ----- 图片资源（路径支持相对路径或网络URL） -----
    image: './images/mtjd.jpg',       // 卡片缩略图（建议 500×350）
    largeImage: './images/mtjd.jpg',  // 灯箱主图（建议 1200×800）

    // ----- 灯箱详细内容（以下均为可选字段） -----

    // detail: 详细描述（长文本，支持多段文字，约100-300字）
    detail: '飞天茅台酒是茅台酒中的经典之作，采用传统大曲酱香工艺，历经九次蒸煮、八次发酵、七次取酒，陶坛陈酿多年。酒体微黄透明，酱香突出，幽雅细腻，酒体醇厚，回味悠长，空杯留香持久。被誉为中国白酒的"国酒"代表。',

    // gallery: 画廊图片数组（用于灯箱中多图切换）
    //          第一张图会自动与 largeImage 去重，避免重复
    gallery: [
        './images/wxQRcode.jpg',
        // './images/wxQRcode.jpg',
        // './images/wxQRcode.jpg',
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
        // image: './images/wxlogo.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{
    name: '茅台',
    sub: '· 子鼠',
    origin: '贵州茅台镇',
    description: '酱香典范，空杯留香。历经岁月沉淀，酒体醇厚丰满，回味悠长。',
    types: ['酱香'],
    tags: ['陈年', '纯粮', '限量'],
    year: '',
    image: './images/mt01zs.jpg',
    largeImage: './images/mt01zs.jpg',
    detail: '飞天茅台酒是茅台酒中的经典之作，采用传统大曲酱香工艺，历经九次蒸煮、八次发酵、七次取酒，陶坛陈酿多年。酒体微黄透明，酱香突出，幽雅细腻，酒体醇厚，回味悠长，空杯留香持久。被誉为中国白酒的"国酒"代表。',
    gallery: [
        './images/wxQRcode.jpg',
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
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
*/
{name: '飞天茅台',
    sub: '',
    origin: '',
    description: '价格:1200/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/飞天茅台.png',
    largeimage: './images_a/飞天茅台.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/飞天茅台.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '茅台1935',
    sub: '',
    origin: '',
    description: '价格:1000/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/茅台1935.png',
    largeimage: './images_a/茅台1935.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/茅台1935.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '茅台金王子',
    sub: '',
    origin: '',
    description: '价格:600/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/茅台金王子.png',
    largeimage: './images_a/茅台金王子.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/茅台金王子.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '酱香经典王子',
    sub: '',
    origin: '',
    description: '价格:680/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/酱香经典王子.png',
    largeimage: './images_a/酱香经典王子.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/酱香经典王子.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '茅台四大金刚',
    sub: '',
    origin: '',
    description: '价格:1500/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/茅台四大金刚.png',
    largeimage: './images_a/茅台四大金刚.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/茅台四大金刚.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '茅台15年',
    sub: '',
    origin: '',
    description: '价格:1500/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/茅台15年.png',
    largeimage: './images_a/茅台15年.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/茅台15年.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '茅台30年',
    sub: '',
    origin: '',
    description: '价格:2000/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/茅台30年.png',
    largeimage: './images_a/茅台30年.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/茅台30年.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '茅台50年',
    sub: '',
    origin: '',
    description: '价格:3000/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/茅台50年.png',
    largeimage: './images_a/茅台50年.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/茅台50年.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '燕京八景',
    sub: '',
    origin: '',
    description: '价格:800/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/燕京八景.png',
    largeimage: './images_a/燕京八景.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/燕京八景.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '出口茅台',
    sub: '',
    origin: '规格:12瓶装/每件',
    description: '一手货源价格:1500',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/出口茅台.png',
    largeimage: './images_a/出口茅台.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/出口茅台.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '公斤茅台',
    sub: '',
    origin: '',
    description: '价格:1280/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/公斤茅台.png',
    largeimage: './images_a/公斤茅台.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/公斤茅台.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '习酒1988',
    sub: '',
    origin: '',
    description: '价格:800/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/习酒1988.png',
    largeimage: './images_a/习酒1988.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/习酒1988.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '习酒君品',
    sub: '',
    origin: '',
    description: '价格:1500/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/习酒君品.png',
    largeimage: './images_a/习酒君品.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/习酒君品.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '五粮液1618',
    sub: '',
    origin: '',
    description: '价格:1000/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/五粮液1618.png',
    largeimage: './images_a/五粮液1618.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/五粮液1618.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '五粮液八代',
    sub: '',
    origin: '',
    description: '价格:800/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/五粮液八代.png',
    largeimage: './images_a/五粮液八代.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/五粮液八代.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '国窖1573',
    sub: '',
    origin: '',
    description: '价格:780/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/国窖1573.png',
    largeimage: './images_a/国窖1573.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/国窖1573.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '剑南春',
    sub: '',
    origin: '',
    description: '价格:680/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/剑南春.png',
    largeimage: './images_a/剑南春.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/剑南春.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '茅台彩釉珍品',
    sub: '',
    origin: '',
    description: '价格:1200/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/茅台彩釉珍品.png',
    largeimage: './images_a/茅台彩釉珍品.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/茅台彩釉珍品.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '茅台珍品',
    sub: '',
    origin: '',
    description: '价格:1200/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/茅台珍品.png',
    largeimage: './images_a/茅台珍品.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/茅台珍品.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '茅台迎宾_紫',
    sub: '',
    origin: '',
    description: '价格:600/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/茅台迎宾_紫.png',
    largeimage: './images_a/茅台迎宾_紫.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/茅台迎宾_紫.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '茅台迎宾_红',
    sub: '',
    origin: '',
    description: '价格:600/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/茅台迎宾_红.png',
    largeimage: './images_a/茅台迎宾_红.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/茅台迎宾_红.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '12生肖_鼠',
    sub: '',
    origin: '',
    description: '价格:2500/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/12生肖_鼠.png',
    largeimage: './images_a/12生肖_鼠.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/12生肖_鼠.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '12生肖_牛',
    sub: '',
    origin: '',
    description: '价格:2500/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/12生肖_牛.png',
    largeimage: './images_a/12生肖_牛.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/12生肖_牛.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '12生肖_虎',
    sub: '',
    origin: '',
    description: '价格:2500/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/12生肖_虎.png',
    largeimage: './images_a/12生肖_虎.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/12生肖_虎.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '12生肖_兔',
    sub: '',
    origin: '',
    description: '价格:2500/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/12生肖_兔.png',
    largeimage: './images_a/12生肖_兔.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/12生肖_兔.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '12生肖_龙',
    sub: '',
    origin: '',
    description: '价格:2500/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/12生肖_龙.png',
    largeimage: './images_a/12生肖_龙.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/12生肖_龙.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '12生肖_蛇',
    sub: '',
    origin: '',
    description: '价格:2500/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/12生肖_蛇.png',
    largeimage: './images_a/12生肖_蛇.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/12生肖_蛇.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '12生肖_马',
    sub: '',
    origin: '',
    description: '价格:2500/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/12生肖_马.png',
    largeimage: './images_a/12生肖_马.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/12生肖_马.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '12生肖_羊',
    sub: '',
    origin: '',
    description: '价格:2500/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/12生肖_羊.png',
    largeimage: './images_a/12生肖_羊.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/12生肖_羊.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '12生肖_猴',
    sub: '',
    origin: '',
    description: '价格:2500/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/12生肖_猴.png',
    largeimage: './images_a/12生肖_猴.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/12生肖_猴.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '12生肖_鸡',
    sub: '',
    origin: '',
    description: '价格:2500/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/12生肖_鸡.png',
    largeimage: './images_a/12生肖_鸡.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/12生肖_鸡.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '12生肖_狗',
    sub: '',
    origin: '',
    description: '价格:2500/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/12生肖_狗.png',
    largeimage: './images_a/12生肖_狗.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/12生肖_狗.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '12生肖_猪',
    sub: '',
    origin: '',
    description: '价格:2500/一件6瓶',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/12生肖_猪.png',
    largeimage: './images_a/12生肖_猪.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/12生肖_猪.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
{name: '12生肖全家福',
    sub: '',
    origin: '',
    description: '价格:6800/12瓶一件（12生肖各一瓶）',
    types: ['酱香'],
    tags: [''],
    year: '',
    image: './images_a/12生肖全家福.png',
    largeimage: './images_a/12生肖全家福.png',
    detail: '',
    gallery: [
        './images/wxQRcode.jpg',
        './images_a/12生肖全家福.png',
    ],
    specs: {
        alcohol: '',
        volume: '',
        ingredients: '',
        type: '',
        standard: ''
    },
    awards: '',
    serving: '',
    custom: {
        image: './images/wxQRcode.jpg',
        text: '扫码添加微信 · 了解更多酱香故事'
    }
},
];