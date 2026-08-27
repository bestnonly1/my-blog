'use strict';

const SITE_TITLE = 'My Blog';

// Inline script placed before the stylesheet so the saved theme is applied
// before first paint (no flash of the wrong theme).
const NO_FOUC_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

function renderHeader(pathPrefix) {
  return `
<header class="site-header">
  <a class="site-title" href="${pathPrefix}index.html">${SITE_TITLE}</a>
  <button id="theme-toggle" class="theme-toggle" type="button" aria-pressed="false" aria-label="다크 모드 전환">🌙</button>
</header>`;
}

function renderFooter() {
  const year = new Date().getFullYear();
  return `
<footer class="site-footer">
  <p>&copy; ${year} ${SITE_TITLE}</p>
</footer>`;
}

function layout({ title, description, bodyHtml, pathPrefix, extraScripts = [] }) {
  const scripts = extraScripts
    .map((src) => `<script src="${pathPrefix}${src}" defer></script>`)
    .join('\n  ');

  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<script>${NO_FOUC_SCRIPT}</script>
<link rel="stylesheet" href="${pathPrefix}css/style.css">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
</head>
<body>
${renderHeader(pathPrefix)}
<main class="site-main">
${bodyHtml}
</main>
${renderFooter()}
<script src="${pathPrefix}js/theme.js" defer></script>
${scripts}
</body>
</html>`;
}

function renderTags(tags) {
  if (!tags || tags.length === 0) return '';
  return `<ul class="post-tags">${tags.map((tag) => `<li>${tag}</li>`).join('')}</ul>`;
}

function renderPostCard(post, pathPrefix) {
  return `<li class="post-card">
  <a class="post-card-title" href="${pathPrefix}posts/${post.slug}.html">${post.title}</a>
  <div class="post-meta"><time datetime="${post.date}">${post.date}</time></div>
  <p class="post-excerpt">${post.excerpt || ''}</p>
  ${renderTags(post.tags)}
</li>`;
}

function renderListPage(posts) {
  const pathPrefix = '';
  const cards = posts.map((post) => renderPostCard(post, pathPrefix)).join('\n');

  const bodyHtml = `
<section class="search-section">
  <input id="search-input" type="search" placeholder="글 검색 (제목, 태그, 요약)" aria-label="글 검색">
  <p id="search-empty" class="search-empty" hidden>검색 결과가 없습니다.</p>
</section>
<ul id="post-list" class="post-list">
${cards}
</ul>`;

  return layout({
    title: SITE_TITLE,
    description: '마크다운으로 작성된 글을 모아둔 블로그입니다.',
    bodyHtml,
    pathPrefix,
    extraScripts: ['js/search.js'],
  });
}

function renderPostPage(post) {
  const pathPrefix = '../';

  const bodyHtml = `
<article class="post">
  <h1>${post.title}</h1>
  <div class="post-meta"><time datetime="${post.date}">${post.date}</time></div>
  ${renderTags(post.tags)}
  <div class="post-content">
${post.contentHtml}
  </div>
  <p class="back-link"><a href="${pathPrefix}index.html">&larr; 목록으로</a></p>
</article>`;

  return layout({
    title: `${post.title} — ${SITE_TITLE}`,
    description: post.excerpt || SITE_TITLE,
    bodyHtml,
    pathPrefix,
  });
}

module.exports = { renderListPage, renderPostPage, renderPostCard };
