import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

test('Les ressources de production restent relatives au sous-chemin Pages', () => {
  const html = readFileSync('dist/index.html', 'utf8');
  const resources = [...html.matchAll(/(?:src|href)="(\.\/assets\/[^\"]+)"/g)].map(x => x[1]);
  assert.equal(resources.length, 2);
  for (const relative of resources) {
    const url = new URL(relative, 'https://example.org/depot-ccq/');
    assert.ok(url.pathname.startsWith('/depot-ccq/assets/'));
    assert.ok(existsSync(resolve('dist', relative)));
  }
  assert.ok(existsSync('dist/book.json'));
  const js = readFileSync(resolve('dist', resources.find(x => x.endsWith('.js'))), 'utf8');
  assert.ok(js.includes('book.json'));
  assert.ok(!html.includes('src="/assets/'));
});
