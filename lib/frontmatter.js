'use strict';

// Parses a leading `---\n...\n---` front-matter block off raw markdown text.
// Supports flat key: value pairs, quoted strings, and simple [a, b, c] arrays.
// Not general YAML — just enough for title/date/tags/excerpt.
function parseFrontMatter(rawText) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(rawText);
  if (!match) {
    return { data: {}, content: rawText };
  }

  const [, frontMatterBlock, content] = match;
  const data = {};

  for (const line of frontMatterBlock.split(/\r?\n/)) {
    if (!line.trim()) continue;
    const separatorIndex = line.indexOf(':');
    if (separatorIndex === -1) continue;

    const key = line.slice(0, separatorIndex).trim();
    const rawValue = line.slice(separatorIndex + 1).trim();
    data[key] = parseValue(rawValue);
  }

  return { data, content };
}

function parseValue(rawValue) {
  if (rawValue.startsWith('[') && rawValue.endsWith(']')) {
    const inner = rawValue.slice(1, -1).trim();
    if (!inner) return [];
    return inner.split(',').map((item) => stripQuotes(item.trim()));
  }

  return stripQuotes(rawValue);
}

function stripQuotes(value) {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
}

module.exports = { parseFrontMatter };
