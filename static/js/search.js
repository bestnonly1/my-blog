(function () {
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderCard(post) {
    var tagsHtml = '';
    if (post.tags && post.tags.length) {
      tagsHtml =
        '<ul class="post-tags">' +
        post.tags.map(function (tag) { return '<li>' + escapeHtml(tag) + '</li>'; }).join('') +
        '</ul>';
    }

    return (
      '<li class="post-card">' +
      '<a class="post-card-title" href="posts/' + encodeURIComponent(post.slug) + '.html">' + escapeHtml(post.title) + '</a>' +
      '<div class="post-meta"><time datetime="' + escapeHtml(post.date) + '">' + escapeHtml(post.date) + '</time></div>' +
      '<p class="post-excerpt">' + escapeHtml(post.excerpt || '') + '</p>' +
      tagsHtml +
      '</li>'
    );
  }

  function matches(post, query) {
    var haystack = [post.title, post.excerpt, (post.tags || []).join(' ')].join(' ').toLowerCase();
    return haystack.indexOf(query) !== -1;
  }

  document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('search-input');
    var list = document.getElementById('post-list');
    var emptyMessage = document.getElementById('search-empty');
    if (!input || !list) return;

    var index = null;
    var debounceTimer = null;

    fetch('search-index.json')
      .then(function (res) { return res.json(); })
      .then(function (data) { index = data; })
      .catch(function () {
        index = null;
      });

    function runSearch() {
      var query = input.value.trim().toLowerCase();

      if (!query) {
        list.hidden = false;
        emptyMessage.hidden = true;
        // Original server-rendered markup was replaced once we search;
        // an empty query just needs the full index re-rendered too,
        // so behavior stays correct even without a page reload.
        if (index) {
          list.innerHTML = index.map(renderCard).join('');
        }
        return;
      }

      if (!index) return;

      var filtered = index.filter(function (post) { return matches(post, query); });
      list.innerHTML = filtered.map(renderCard).join('');
      emptyMessage.hidden = filtered.length !== 0;
    }

    input.addEventListener('input', function () {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(runSearch, 150);
    });
  });
})();
