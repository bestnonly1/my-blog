'use strict';

function buildSearchIndex(posts) {
  return posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt || '',
    tags: post.tags || [],
    date: post.date,
  }));
}

module.exports = { buildSearchIndex };
