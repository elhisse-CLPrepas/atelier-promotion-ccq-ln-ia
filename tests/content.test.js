import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { config } from '../src/config.js';
import { escapeHTML } from '../src/components.js';
const book = JSON.parse(readFileSync(new URL('../public/book.json', import.meta.url)));
test('Les sources absentes ne sont pas remplacées par des titres inventés',()=>{assert.equal(book.chapterCount,19);assert.deepEqual(book.chapters,[]);assert.equal(book.pathways.length,4);});
test('Aucun service incomplet activé',()=>{assert.equal(config.offerActive,false);assert.equal(config.contactActive,false);assert.equal(config.communityActive,false);assert.equal(config.whatsapp,'');});
test('Le contenu éditable est échappé avant insertion HTML',()=>{assert.equal(escapeHTML('<script>"&'), '&lt;script&gt;&quot;&amp;');});
