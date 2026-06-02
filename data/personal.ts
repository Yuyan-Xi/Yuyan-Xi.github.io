// ============================================================
// 🟢 个人信息中心 / Personal Info Central Config
// ============================================================
// 改这一个文件，全站对应位置都会更新。
// Each field below is annotated with where it appears on the page.
// 字段后面的注释告诉你它显示在网页的什么地方。
// ============================================================


// ──────────────────────────────────────────────
// 1. 基本信息 / BASIC
// ──────────────────────────────────────────────
export const BASIC = {
    // 浏览器标签页标题 / Browser tab title
    // index.html <title> 也要手动改一次（HTML 静态）
    siteTitle: 'Yuyan Xi',

    // Hero 大标题两行字 / Hero giant title (two lines)
    heroTitleLine1: 'YUYAN',
    heroTitleLine2: 'XI',

    // Profile 区域小字版的名字（带换行，会显示成 yuYan / xI 风格）
    // Profile section short name (with <br>, e.g. yuYan / xI)
    profileNameLine1: 'YUYAN',
    profileNameLine2: 'XI',

    // ExperienceModal 名片上的名字（你之前选了大小写错位风格）
    // Name shown on the experience modal card
    modalDisplayName: 'yuYan xI',

    // 生日 / Birthday（modal 上 + Profile 区"EST. xxxx"）
    birthday: '2004.10',          // 完整生日，显示在 ExperienceModal
    establishedYear: '2004',    // Profile 区 meta 行

    // 城市 / City — Profile 区 meta 行
    city: 'Shenzhen',

    // 职业 / Profession — Profile 区 meta 行的最后一项
    professionShort: 'VISUAL DESIGNER',

    // Hero 区 photo 上方的多行职业描述（每行一段）
    // Hero photo's caption lines below big title
    professionLines: [
        'Visual Designer',
        'Illustrator & Animator',
    ],

    // Hero 区大头照（hover 时从大字里露出来的图）
    // Hero photo URL (revealed on hover from giant title)
    heroPhotoUrl: 'https://picsum.photos/seed/reveal/400/600',

    // Profile 区域大照片 URL
    // Profile section main photo URL
    profilePhotoUrl: 'https://picsum.photos/seed/profile/800/1100',
};


// ──────────────────────────────────────────────
// 2. 经历时间线 / EXPERIENCE TIMELINE
// ──────────────────────────────────────────────
// 显示在 Profile 区域的卡片 + 点击后的 modal
// Renders Profile timeline cards (clickable -> modal)
//
// 字段含义 / Field meanings:
//   year    时间段（如 "2024 - 2025"）
//   role    职位（如 "Senior Visual Designer"）
//   company 公司或学校 / Company or school
//   color   主题色 HEX（每条不同色用来区分卡片）
//   desc    详细描述（modal 里展开），支持 \n 换行
//   tags    3 个标签，全大写最美
// ──────────────────────────────────────────────
export const EXPERIENCE = [
    {
        id: '1',
        year: '2024 - 2025',
        role: 'Senior Visual Designer',
        company: 'Global Design Agency',
        color: '#FF7F27',
        desc: '1. Led visual strategy for major marketing campaigns, resulting in a significant increase in user engagement and conversion rates.\n2. Developed comprehensive brand identity systems for international markets, ensuring visual consistency across various digital and physical touchpoints.\n3. Managed cross-functional design projects, including UI/UX, motion graphics, and high-end presentation design.',
        tags: ['VISUAL DESIGN', 'BRANDING', 'LEADERSHIP'],
    },
    {
        id: '2',
        year: '2021 - 2024',
        role: 'Master of Visual Communication',
        company: 'Prestigious Art University',
        color: '#005C4B',
        desc: 'Awarded academic scholarships and actively participated in international design competitions, focusing on advanced design theory and experimental visual language.',
        tags: ['MASTER DEGREE', 'THEORY', 'AWARDS'],
    },
    {
        id: '3',
        year: '2021 - 2022',
        role: 'Illustrator & Art Director',
        company: 'Creative Studio Ltd',
        color: '#FFCC00',
        desc: 'Created diverse illustrations for brand identities, posters, and key visuals, blending traditional techniques with modern digital aesthetics.',
        tags: ['ILLUSTRATION', 'ART DIRECTION', 'CREATIVE'],
    },
    {
        id: '4',
        year: '2017 - 2021',
        role: 'Junior Visual Designer',
        company: 'Innovative Tech Firm',
        color: '#55FF55',
        desc: '1. Built standardized component libraries and visual design systems, improving design efficiency by 30% across multiple product lines.\n2. Developed modular animation assets, reducing production cycles and ensuring a cohesive motion language throughout the application.',
        tags: ['SYSTEM DESIGN', 'EFFICIENCY', 'ANIMATION'],
    },
];


// ──────────────────────────────────────────────
// 3. 技能 / SKILLS
// ──────────────────────────────────────────────
// 显示在 Skills 区的 4 张玻璃卡 + hover 时飞出来的预览
// Renders glass cards in Skills section + hover preview
//
// 字段含义 / Field meanings:
//   title       技能名（卡片正面大字）
//   percent     熟练度（0-100，影响进度条）
//   percentText 显示的百分比文本（一般就是 "92%"）
//   color       主题色 HEX
//   tags        软件/方向，逗号分隔
//   previewImg  hover 时飞入的图片 URL（静态图）
//   videoUrl    hover 时飞入的视频 URL（如果填了优先于 previewImg）
//   previewText 飞入图右下角的小字标签
//   previewRotate 飞入卡片的旋转角度
// ──────────────────────────────────────────────
export const SKILLS = [
    {
        id: 's1',
        title: 'Visual Design',
        percent: 92,
        percentText: '92%',
        color: '#F59E0B',
        tags: '运营设计, 平面设计, 品牌设计',
        previewImg: 'https://jsd.cdn.zzko.cn/gh/jayneysil520-dev/jayneysil@main/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260108181225_278_2.jpg',
        previewRotate: -6,
        previewText: 'HELLO?',
    },
    {
        id: 's2',
        title: 'AIGC Design',
        percent: 87,
        percentText: '87%',
        color: '#3B82F6',
        tags: 'LIBLIB, Comfy UI, Web UI',
        previewImg: 'https://jsd.cdn.zzko.cn/gh/jayneysil520-dev/jayneysil@main/capa-grass.png',
        previewRotate: 8,
        previewText: 'GRASS',
    },
    {
        id: 's3',
        title: '3D Design',
        percent: 82,
        percentText: '82%',
        color: '#EA580C',
        tags: 'C4D, Blender, Rendering',
        previewImg: 'https://jsd.cdn.zzko.cn/gh/jayneysil520-dev/jayneysil@main/capa-%E7%99%BD%E7%BE%8A.png',
        previewRotate: -12,
        previewText: 'Myself',
    },
    {
        id: 's4',
        title: 'Animation Design',
        percent: 80,
        percentText: '80%',
        color: '#8B5CF6',
        tags: 'After Effects, Premiere Pro',
        videoUrl: 'https://jsd.cdn.zzko.cn/gh/jayneysil520-dev/jayneysil@main/1%E6%9C%889%E6%97%A5.mp4',
        previewRotate: 5,
        previewText: 'Tokyo Run',
    },
];


// ──────────────────────────────────────────────
// 4. 软件图标 / SOFTWARES
// ──────────────────────────────────────────────
// Skills 区下方那一排 6 个软件图标按钮
// The 6 software icon buttons under skill cards
//
// 字段含义 / Field meanings:
//   name        按钮上显示的简写
//   iconUrl     hover 时飞出来的图标 URL
//   color       主题色（hover 背景透色）
//   previewRotate hover 飞入卡片旋转角度
//   y           按钮自身基础 Y 偏移（让一排不齐，更随意）
//   previewY    hover 飞入图的 Y 偏移
// ──────────────────────────────────────────────
export const SOFTWARES = [
    {
        name: 'Fig',
        iconUrl: 'https://jsd.cdn.zzko.cn/gh/devicons/devicon/icons/figma/figma-original.svg',
        color: '#F24E1E',
        previewRotate: 15,
        y: 0,
        previewY: 0,
    },
    {
        name: 'Ps',
        iconUrl: 'https://jsd.cdn.zzko.cn/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
        color: '#31A8FF',
        previewRotate: -10,
        y: 5,
        previewY: -10,
    },
    {
        name: 'Ai',
        iconUrl: 'https://jsd.cdn.zzko.cn/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg',
        color: '#FF9A00',
        previewRotate: 8,
        y: -2,
        previewY: 6,
    },
    {
        name: 'Ae',
        iconUrl: 'https://jsd.cdn.zzko.cn/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg',
        color: '#9999FF',
        previewRotate: -15,
        y: 12,
        previewY: 0,
    },
    {
        name: 'Bl',
        iconUrl: 'https://jsd.cdn.zzko.cn/gh/devicons/devicon/icons/blender/blender-original.svg',
        color: '#F5792A',
        previewRotate: 12,
        y: -2,
        previewY: -8,
    },
    {
        name: 'C4D',
        iconUrl: 'https://jsd.cdn.zzko.cn/gh/jayneysil520-dev/jayneysil@main/1197px-C4D_Logo.png',
        color: '#2A55F5',
        previewRotate: -8,
        y: 6,
        previewY: 4,
    },
];


// ──────────────────────────────────────────────
// 5. 联系方式 / CONTACT
// ──────────────────────────────────────────────
// Contact 区的悬浮卡（邮箱/微信/小红书）
// Floating cards in Contact section (email / wechat / red note)
//
// 想再加一种联系方式：先在这里加字段，再去 sections/Contact.tsx 复制一张卡进去
// To add a new channel: add field here, then duplicate a card block in Contact.tsx
// ──────────────────────────────────────────────
export const CONTACT = {
    email: 'hello@example.com',
    wechatId: 'YourID',
    wechatQrUrl: 'https://picsum.photos/seed/wechat/400/400',  // 微信二维码图片 URL
    xiaohongshuId: '0000000000',
};
