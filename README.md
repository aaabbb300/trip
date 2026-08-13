# Trip 旅行攻略网站

一个使用纯 HTML、CSS 和 JavaScript 构建的静态旅行攻略网站，内置中国 10 大热门旅行景点的详细攻略页面。无需构建工具，也不需要联网，双击 `index.html` 即可在浏览器中打开。

## 项目结构

```text
trip/
├── README.md
├── 旅行攻略网站需求.md
├── index.html
├── attractions/
│   ├── great-wall.html
│   ├── forbidden-city.html
│   ├── west-lake.html
│   ├── zhangjiajie.html
│   ├── guilin.html
│   ├── huangshan.html
│   ├── chengdu-panda-base.html
│   ├── terracotta-army.html
│   ├── potala-palace.html
│   └── sanya.html
├── assets/
│   ├── css/styles.css
│   ├── img/
│   └── js/
│       ├── attractions-data.js
│       └── site.js
```

## 10 大热门景点

1. 北京 · 八达岭长城
2. 北京 · 故宫博物院
3. 杭州 · 西湖
4. 湖南 · 张家界国家森林公园
5. 广西 · 桂林漓江与阳朔
6. 安徽 · 黄山
7. 四川 · 成都大熊猫繁育研究基地
8. 陕西 · 秦始皇兵马俑博物馆
9. 西藏 · 布达拉宫
10. 海南 · 三亚

每个景点页面都包含景点简介、核心亮点、推荐路线、门票与开放时间、交通指南、当地美食、住宿建议、注意事项和常见问题。

## 本地预览

直接打开 `trip/index.html` 即可访问首页，点击任意景点卡片进入对应攻略页。

## 技术说明

- 纯 HTML + CSS + JavaScript，无第三方依赖
- 所有景点数据集中在 `assets/js/attractions-data.js`
- 页面骨架使用 `data-page` 与 `data-slug` 区分首页和景点详情页
- 支持搜索、景点卡片筛选、粘性导航、FAQ 折叠、回到顶部等交互

## 后续可迭代方向

- 接入真实图片与高清景点图库
- 增加天气、票务预订、酒店比价等第三方 API
- 增加用户评论、收藏和行程分享功能
- 改造成 Vue / React 单页应用并部署到 GitHub Pages
