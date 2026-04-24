# 苏州安驰电子科技有限公司 - 全新UI设计方案

## 一、设计定位

### 品牌调性
- **专业可靠**：工业级品质，技术领先
- **现代简洁**：去除冗余，聚焦核心价值
- **科技蓝调**：蓝色系传递信任与专业

### 用户画像
- B2B 客户：智能制造企业、系统集成商
- 决策者：技术负责人、采购经理
- 需求：快速了解产品、建立信任、便捷联系

---

## 二、设计系统

### 2.1 色彩系统

```css
/* 主色调 - 科技蓝 */
--primary-900: #0a2540;    /* 深海蓝 - 页脚、重点文字 */
--primary-800: #0d3b66;    /* 深蓝 - 导航背景 */
--primary-700: #005b96;    /* 品牌蓝 - 主按钮、链接 */
--primary-600: #0077c2;    /* 亮蓝 - 悬停态 */
--primary-500: #0095f6;    /* 活力蓝 - 强调 */
--primary-100: #e6f4ff;    /* 浅蓝 - 背景 */
--primary-50:  #f0f9ff;    /* 极浅蓝 - 卡片背景 */

/* 中性色 */
--gray-900: #1a1a1a;       /* 主标题 */
--gray-700: #4a4a4a;       /* 正文 */
--gray-500: #6b7280;       /* 次要文字 */
--gray-300: #d1d5db;       /* 边框 */
--gray-100: #f3f4f6;       /* 背景 */
--gray-50:  #f9fafb;       /* 卡片背景 */

/* 功能色 */
--success: #10b981;        /* 成功 */
--warning: #f59e0b;        /* 警告 */
--error:   #ef4444;        /* 错误 */
```

### 2.2 字体系统

```css
/* 字体栈 */
--font-display: "Inter", "PingFang SC", "Microsoft YaHei", sans-serif;
--font-body:    "Inter", "PingFang SC", "Microsoft YaHei", sans-serif;

/* 字号层级 */
--text-xs:   0.75rem;   /* 12px - 标签 */
--text-sm:   0.875rem;  /* 14px - 辅助文字 */
--text-base: 1rem;      /* 16px - 正文 */
--text-lg:   1.125rem;  /* 18px - 小标题 */
--text-xl:   1.25rem;   /* 20px - 卡片标题 */
--text-2xl:  1.5rem;    /* 24px - 板块标题 */
--text-3xl:  1.875rem;  /* 30px - 页面标题 */
--text-4xl:  2.25rem;   /* 36px - Banner标题 */
--text-5xl:  3rem;      /* 48px - 大标题 */

/* 字重 */
--font-normal:   400;
--font-medium:   500;
--font-semibold: 600;
--font-bold:     700;

/* 行高 */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

### 2.3 间距系统

```css
/* 8px 基准 */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### 2.4 圆角与阴影

```css
/* 圆角 */
--radius-sm:  4px;
--radius-md:  8px;
--radius-lg:  12px;
--radius-xl:  16px;
--radius-full: 9999px;

/* 阴影 */
--shadow-sm:  0 1px 2px rgba(0,0,0,0.05);
--shadow-md:  0 4px 6px -1px rgba(0,0,0,0.1);
--shadow-lg:  0 10px 15px -3px rgba(0,0,0,0.1);
--shadow-xl:  0 20px 25px -5px rgba(0,0,0,0.1);
--shadow-glow: 0 0 20px rgba(0,91,150,0.15);
```

---

## 三、组件规范

### 3.1 按钮

**主按钮**
- 背景：`--primary-700`
- 文字：白色，14px，font-medium
- 内边距：12px 24px
- 圆角：`--radius-md`
- 悬停：背景 `--primary-600`，上移 1px，阴影 `--shadow-md`

**次按钮**
- 背景：白色
- 边框：1px solid `--primary-700`
- 文字：`--primary-700`，14px
- 悬停：背景 `--primary-50`

**幽灵按钮**
- 背景：透明
- 文字：白色
- 边框：1px solid rgba(255,255,255,0.3)
- 悬停：背景 rgba(255,255,255,0.1)

### 3.2 卡片

**产品卡片**
- 背景：白色
- 边框：1px solid `--gray-100`
- 圆角：`--radius-lg`
- 阴影：`--shadow-sm`
- 悬停：阴影 `--shadow-lg`，上移 4px
- 内边距：32px

**特点卡片**
- 图标：48px，圆形，背景 `--primary-100`
- 标题：20px，font-semibold，`--gray-900`
- 描述：16px，`--gray-500`

### 3.3 导航

**顶部导航**
- 高度：72px
- 背景：白色（滚动后加阴影）
- Logo：左侧，24px 字体
- 菜单：居中，14px，间距 32px
- 联系按钮：右侧，主按钮样式

**移动端导航**
- 汉堡菜单：右侧
- 侧边栏：全屏，背景 `--primary-800`
- 菜单项：18px，白色，间距 24px

---

## 四、布局规范

### 4.1 容器

```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

@media (min-width: 768px) {
  .container { padding: 0 32px; }
}

@media (min-width: 1024px) {
  .container { padding: 0 48px; }
}
```

### 4.2 栅格系统

- 12 列栅格
- 列间距：24px（桌面）/ 16px（移动端）
- 响应式断点：sm(640px)、md(768px)、lg(1024px)、xl(1280px)

### 4.3 板块间距

- 大板块：padding 96px 0
- 中板块：padding 64px 0
- 小板块：padding 48px 0

---

## 五、交互规范

### 5.1 过渡动画

```css
/* 快速反馈 */
--transition-fast: 150ms ease;

/* 标准过渡 */
--transition-base: 300ms ease;

/* 慢速强调 */
--transition-slow: 500ms ease;
```

### 5.2 微交互

- 按钮悬停：上移 1-2px + 阴影增强
- 卡片悬停：上移 4px + 阴影增强
- 链接悬停：颜色变化 + 下划线动画
- 图标悬停：缩放 1.05

### 5.3 页面加载

- 内容淡入：opacity 0→1，duration 600ms
- 卡片依次出现：stagger 100ms

---

## 六、响应式断点

| 断点 | 宽度 | 布局调整 |
|------|------|----------|
| Mobile | < 640px | 单列，汉堡菜单，紧凑间距 |
| Tablet | 640-1023px | 双列，侧边栏导航 |
| Desktop | 1024-1279px | 三列，完整导航 |
| Large | ≥ 1280px | 最大容器宽度，宽松间距 |

---

## 七、页面结构

### 首页 (index.html)

1. **Hero Banner**
   - 全屏高度（减去导航）
   - 深色背景 + 渐变遮罩
   - 大标题 + 副标题 + CTA 按钮
   - 背景：工业场景图/视频

2. **核心数据**
   - 4 列统计：年数、客户数、产品数、服务覆盖
   - 大数字 + 描述

3. **产品展示**
   - 标题 + 副标题
   - 6 个产品卡片（2x3 网格）
   - 图标 + 标题 + 描述 + 了解更多

4. **解决方案**
   - 左图右文布局
   - 行业场景：智能制造、轨道交通、物联网等

5. **企业优势**
   - 3 列图标卡片
   - 研发、品质、服务

6. **合作伙伴**
   - Logo 墙（灰度 → 悬停彩色）
   - 无限滚动动画

7. **联系我们**
   - 深色背景
   - 电话、邮箱、地址
   - 地图（可选）

8. **页脚**
   - 多列链接
   - 社交媒体
   - 版权信息

### 产品页 (products.html)

1. 页面标题 + 面包屑
2. 产品分类筛选
3. 产品网格（4 列）
4. 每个产品：图片、名称、简介、规格参数、咨询按钮

### 合作伙伴页 (partners.html)

1. 页面标题
2. 合作理念介绍
3. 合作伙伴网格
4. 成为合作伙伴 CTA

### 关于我们页 (about.html)

1. 公司简介
2. 发展历程（时间线）
3. 企业文化
4. 资质荣誉
5. 团队介绍

### 联系我们页 (contact.html)

1. 联系信息卡片
2. 在线表单
3. 地图嵌入

---

## 八、设计原则

1. **一致性**：组件、色彩、间距全站统一
2. **层次清晰**：标题、正文、辅助文字有明显区分
3. **呼吸感**：充足的留白，不拥挤
4. **聚焦行动**：每个板块有明确的 CTA
5. **移动优先**：从移动端开始设计，逐步增强

---

## 九、技术实现建议

- **CSS 框架**：Tailwind CSS（推荐）或自定义 CSS
- **图标**：Lucide Icons 或 Heroicons
- **字体**：Inter（Google Fonts）
- **图片**：WebP 格式，懒加载
- **动画**：CSS transitions + Intersection Observer

---

*设计版本：v1.0*  
*更新日期：2026-04-18*
