'use strict';

const fs = require('fs');
const path = require('path');

const { parseFrontMatter } = require('./lib/frontmatter');
const { markdownToHtml } = require('./lib/markdown');
const { renderListPage, renderPostPage } = require('./lib/templates');
const { buildSearchIndex } = require('./lib/search-index');

const ROOT = __dirname;
const POSTS_DIR = path.join(ROOT, 'posts');
const STATIC_DIR = path.join(ROOT, 'static');
const DIST_DIR = path.join(ROOT, 'dist');

function loadPosts() {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'));

  return files
    .map((filename) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf8');
      const { data, content } = parseFrontMatter(raw);
      const slug = filename.replace(/\.md$/, '');

      return {
        slug,
        title: data.title || slug,
        date: data.date || '',
        tags: Array.isArray(data.tags) ? data.tags : [],
        excerpt: data.excerpt || '',
        contentHtml: markdownToHtml(content),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

function build() {
  fs.rmSync(DIST_DIR, { recursive: true, force: true });
  fs.mkdirSync(DIST_DIR, { recursive: true });
  fs.mkdirSync(path.join(DIST_DIR, 'posts'), { recursive: true });

  const posts = loadPosts();

  fs.writeFileSync(path.join(DIST_DIR, 'index.html'), renderListPage(posts), 'utf8');

  for (const post of posts) {
    fs.writeFileSync(
      path.join(DIST_DIR, 'posts', `${post.slug}.html`),
      renderPostPage(post),
      'utf8'
    );
  }

  fs.writeFileSync(
    path.join(DIST_DIR, 'search-index.json'),
    JSON.stringify(buildSearchIndex(posts)),
    'utf8'
  );

  fs.cpSync(STATIC_DIR, DIST_DIR, { recursive: true });

  console.log(`Built ${posts.length} post(s) into ${path.relative(ROOT, DIST_DIR)}/`);
}

build();
