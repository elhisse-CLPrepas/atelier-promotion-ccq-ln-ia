import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { config } from '../src/config.js';
import { escapeHTML } from '../src/components.js';
const book = JSON.parse(readFileSync(new URL('../public/book.json', import.meta.url)));
test('Le sommaire importé contient 19 titres numérotés et quatre mouvements',()=>{assert.equal(book.chapters.length,19);assert.deepEqual(book.chapters.map(c=>c.number),Array.from({length:19},(_,i)=>i+1));assert.equal(book.pathways.length,4);assert.ok(book.chapters.every(c=>c.page>0 && c.title && c.summary && c.question));});
test('Aucun service incomplet activé',()=>{assert.equal(config.offerActive,false);assert.equal(config.contactActive,false);assert.equal(config.communityActive,false);assert.equal(config.whatsapp,'');});
test('Le contenu éditable est échappé avant insertion HTML',()=>{assert.equal(escapeHTML('<script>"&'), '&lt;script&gt;&quot;&amp;');});

import { matchingChapters } from '../src/chapters.js';
test('La recherche ignore les accents et signale un résultat vide',()=>{assert.ok(matchingChapters(book,'realite').some(c=>c.number===6));assert.ok(matchingChapters(book,'intelligence artificielle').some(c=>c.number===18));assert.equal(matchingChapters(book,'zzzintrouvable').length,0);assert.equal(matchingChapters(book,'').length,19);});
