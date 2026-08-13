(function () {
  const ICONS = {
    arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    arrowUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M6 11l6-6 6 6"/></svg>',
    bed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9V5M2 12v5M22 9V6M22 12v5M2 12h20v3H2zM5 9a2 2 0 1 0 4 0M15 9a2 2 0 1 0 4 0"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 8-2 6-6 2 2-6z"/></svg>',
    food: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3v7a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3M6 12v9M18 3c-1.5 1.5-2 4-2 6s1 4 3 4 3-2 3-4c0-2-.5-4.5-2-6M19 13v8"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
    map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 4-6 2v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    route: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M9 19h6a3 3 0 0 0 3-3V8M12 7l-3-3 3-3"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
    sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
    ticket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4z"/><path d="M13 7v2M13 11v2M13 15v2"/></svg>',
    train: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="14" rx="2"/><path d="M4 11h16M8 18l-2 3M16 18l2 3M8 7h.01M16 7h.01"/></svg>',
    warning: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4M12 17h.01"/></svg>',
    camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>'
  };

  const isAttractionPage = location.pathname.indexOf("/attractions/") !== -1 || location.pathname.indexOf("\\attractions\\") !== -1;
  const base = isAttractionPage ? "../" : "";
  const getPath = (slug) => base + "attractions/" + slug + ".html";
  const icon = (name) => ICONS[name] || "";

  function renderShell() {
    const brand = '<a class="brand" href="' + base + 'index.html"><span class="brand-mark">' + icon("map") + "</span>Trip 旅行攻略</a>";
    const toggle = '<button class="nav-toggle" type="button" aria-label="打开导航菜单">' + icon("menu") + "</button>";
    const nav = '<nav class="main-nav"><a href="' + base + 'index.html">首页</a><a href="' + base + 'index.html#attractions">十大景点</a><a href="' + base + 'index.html#tools">实用工具</a><a href="' + base + 'index.html#about">关于</a></nav>';
    document.body.insertAdjacentHTML("afterbegin", '<header class="site-header"><div class="container header-inner">' + brand + toggle + nav + "</div></header>");

    const footerLinks = ATTRACTIONS.map(function (a) {
      return '<a href="' + getPath(a.slug) + '">' + a.name + "</a>";
    }).join("");
    const footer = '<footer class="site-footer" id="about"><div class="container"><div class="footer-grid"><div><div class="footer-brand">Trip 旅行攻略</div><p>中国 10 大热门旅行景点的精选攻略，帮你更快规划下一段旅程。</p></div><div class="footer-links">' + footerLinks + "</div></div><div class=\"footer-bottom\">所有门票、开放时间与预约政策均为参考信息，出行前请以官方最新公告为准。</div></div></footer>";
    document.body.insertAdjacentHTML("beforeend", footer);
    document.body.insertAdjacentHTML("beforeend", '<button class="back-to-top" type="button" aria-label="回到顶部">' + icon("arrowUp") + "</button>");
  }

  function renderHome() {
    const grid = document.getElementById("attractionGrid");
    if (!grid) return;
    grid.innerHTML = ATTRACTIONS.map(function (a) {
      return '<article class="attraction-card"><a class="card-image" href="' + getPath(a.slug) + '" aria-label="查看' + a.name + '攻略"><img src="' + base + a.image + '" alt="' + a.name + '插画"><span class="card-rating">' + icon("star") + " " + a.rating.toFixed(1) + '</span></a><div class="card-body"><span class="card-city">' + a.city + '</span><h3>' + a.name + "</h3><p>" + a.short + '</p><div class="card-meta">' + a.tags.slice(0, 3).map(function (t) { return "<span>" + t + "</span>"; }).join("") + '<span>' + a.duration + "</span></div><a class=\"card-link\" href=\"" + getPath(a.slug) + '">查看完整攻略' + icon("arrowRight") + "</a></div></article>";
    }).join("");
  }

  function factIcon(label) {
    if (label.indexOf("门票") !== -1) return "ticket";
    if (label.indexOf("开放") !== -1) return "calendar";
    if (label.indexOf("交通") !== -1) return "train";
    if (label.indexOf("预约") !== -1) return "info";
    return "map";
  }

  function renderAttraction(slug) {
    const app = document.getElementById("attractionApp");
    if (!app) return;
    const a = ATTRACTIONS.find(function (item) { return item.slug === slug; });
    if (!a) {
      app.innerHTML = '<div class="container" style="padding:80px 0"><h1>未找到景点</h1><p>请返回首页重新选择。</p></div>';
      return;
    }

    document.title = a.name + "攻略 | Trip 旅行攻略";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", a.short);

    const hero = '<section class="attraction-hero"><div class="hero-bg"><img src="' + base + a.image + '" alt="' + a.name + '场景插画"></div><div class="container hero-inner"><div class="breadcrumb"><a href="' + base + 'index.html">首页</a><span>/</span><span>' + a.city.split("·")[0].trim() + "</span></div><h1>" + a.name + "</h1><p class=\"hero-desc\">" + a.short + '</p><div class="hero-tags">' + a.tags.map(function (t) { return "<span>" + t + "</span>"; }).join("") + "</div></div></section>";

    const facts = '<div class="fact-strip">' + a.facts.map(function (f) {
      return '<div class="fact"><div class="fact-label">' + icon(factIcon(f.label)) + f.label + "</div><strong>" + f.value + "</strong></div>";
    }).join("") + "</div>";

    const navItems = [
      ["overview", "景点简介"],
      ["highlights", "核心亮点"],
      ["routes", "推荐路线"],
      ["tickets", "门票与时间"],
      ["transport", "交通指南"],
      ["food", "当地美食"],
      ["stay", "住宿建议"],
      ["tips", "注意事项"],
      ["faq", "常见问题"],
      ["related", "相关推荐"]
    ];
    const sectionNav = '<nav class="section-nav" aria-label="攻略章节导航">' + navItems.map(function (n) { return '<a href="#' + n[0] + '">' + n[1] + "</a>"; }).join("") + "</nav>";

    const overview = '<section class="detail-section" id="overview"><h2><small>01</small>景点简介</h2><p class="lead-text">' + a.intro + "</p></section>";

    const highlights = '<section class="detail-section" id="highlights"><h2><small>02</small>核心亮点</h2><div class="highlight-grid">' + a.highlights.map(function (h) {
      return '<div class="highlight-item"><h3>' + h.title + "</h3><p>" + h.text + "</p></div>";
    }).join("") + "</div></section>";

    const routes = '<section class="detail-section" id="routes"><h2><small>03</small>推荐路线</h2><div class="route-list">' + a.routes.map(function (r) {
      return '<div class="route-item"><div class="route-head"><h3>' + r.title + "</h3><span>" + r.time + '</span></div><ol>' + r.steps.map(function (s) { return "<li>" + s + "</li>"; }).join("") + "</ol></div>";
    }).join("") + "</div></section>";

    const tickets = '<section class="detail-section" id="tickets"><h2><small>04</small>门票与开放时间</h2><div class="table-wrap"><table class="data-table"><thead><tr><th>项目</th><th>参考价格</th><th>说明</th></tr></thead><tbody>' + a.tickets.map(function (t) {
      return "<tr><td>" + t.item + "</td><td>" + t.price + "</td><td>" + t.note + "</td></tr>";
    }).join("") + "</tbody></table></div><table class=\"data-table\" style=\"margin-top:18px\"><thead><tr><th>时段</th><th>开放时间</th></tr></thead><tbody>" + a.opening.map(function (o) {
      return "<tr><td>" + o.period + "</td><td>" + o.time + "</td></tr>";
    }).join("") + "</tbody></table><p class=\"note\">票价与开放时间可能调整，出行前请以官方最新公告为准。</p></section>";

    const transport = '<section class="detail-section" id="transport"><h2><small>05</small>交通指南</h2><div class="transport-grid">' + a.transport.map(function (t) {
      return '<div class="transport-item">' + icon("train") + "<div><h3>" + t.mode + "</h3><p>" + t.detail + "</p></div></div>";
    }).join("") + "</div></section>";

    const food = '<section class="detail-section" id="food"><h2><small>06</small>当地美食</h2><div class="food-grid">' + a.food.map(function (f, i) {
      return '<div class="food-item"><span class="food-index">' + (i + 1) + "</span><div><h3>" + f.name + "</h3><p>" + f.note + "</p></div></div>";
    }).join("") + "</div></section>";

    const stay = '<section class="detail-section" id="stay"><h2><small>07</small>住宿建议</h2><div class="stay-grid">' + a.stay.map(function (s) {
      return '<div class="stay-item"><h3>' + s.title + "</h3><p>" + s.text + "</p></div>";
    }).join("") + "</div></section>";

    const tips = '<section class="detail-section" id="tips"><h2><small>08</small>注意事项</h2><ul class="tips-list">' + a.tips.map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul></section>";

    const faq = '<section class="detail-section" id="faq"><h2><small>09</small>常见问题</h2><div class="faq-list">' + a.faq.map(function (f, i) {
      return '<div class="faq-item"><button class="faq-question" type="button" aria-expanded="false">' + f.q + icon("chevron") + '</button><div class="faq-answer"><p>' + f.a + "</p></div></div>";
    }).join("") + "</div></section>";

    const relatedItems = a.related.map(function (slug) {
      const r = ATTRACTIONS.find(function (item) { return item.slug === slug; });
      if (!r) return "";
      return '<a class="related-card" href="' + getPath(r.slug) + '"><img src="' + base + r.image + '" alt="' + r.name + '插画"><div class="related-body"><h3>' + r.name + "</h3><p>" + r.city + " · " + r.duration + "</p></div></a>";
    }).join("");
    const related = '<section class="detail-section" id="related"><h2><small>10</small>相关推荐</h2><div class="related-grid">' + relatedItems + "</div></section>";

    app.innerHTML = hero + facts + '<div class="container detail-layout">' + sectionNav + '<div class="detail-main">' + overview + highlights + routes + tickets + transport + food + stay + tips + faq + related + "</div></div>";
  }

  function setupCommon() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".main-nav");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        const open = nav.classList.toggle("open");
        toggle.innerHTML = open ? icon("close") : icon("menu");
      });
    }

    const backTop = document.querySelector(".back-to-top");
    if (backTop) {
      window.addEventListener("scroll", function () {
        backTop.classList.toggle("visible", window.scrollY > 480);
      }, { passive: true });
      backTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    const searchInput = document.getElementById("searchInput");
    const searchForm = document.getElementById("searchForm");
    if (searchInput) {
      searchInput.addEventListener("input", function () {
        const keyword = searchInput.value.trim().toLowerCase();
        document.querySelectorAll(".attraction-card").forEach(function (card) {
          card.style.display = card.textContent.toLowerCase().indexOf(keyword) !== -1 ? "" : "none";
        });
      });
    }
    if (searchForm) {
      searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        searchInput.focus();
      });
    }

    document.addEventListener("click", function (event) {
      const question = event.target.closest(".faq-question");
      if (!question) return;
      const item = question.closest(".faq-item");
      const answer = item.querySelector(".faq-answer");
      const isOpen = item.classList.toggle("open");
      question.setAttribute("aria-expanded", String(isOpen));
      answer.style.maxHeight = isOpen ? answer.scrollHeight + "px" : "0px";
    });

    if (document.body.dataset.page === "attraction") {
      const links = Array.from(document.querySelectorAll(".section-nav a"));
      const sections = links.map(function (link) {
        return document.getElementById(link.getAttribute("href").slice(1));
      }).filter(Boolean);
      if ("IntersectionObserver" in window && sections.length) {
        const observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              links.forEach(function (link) {
                link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
              });
            }
          });
        }, { rootMargin: "-30% 0px -60% 0px" });
        sections.forEach(function (section) { observer.observe(section); });
      }
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderShell();
    if (document.body.dataset.page === "home") renderHome();
    if (document.body.dataset.page === "attraction") renderAttraction(document.body.dataset.slug);
    setupCommon();
  });
})();
