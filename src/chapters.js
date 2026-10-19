import { escapeHTML as e } from './components.js';
export const normalize = value => String(value).normalize('NFD').replace(/\p{Diacritic}/gu,'').toLowerCase().trim();
export const matchingChapters = (book, query) => { const term=normalize(query); return book.chapters.filter(c=>normalize(`${c.number} ${c.title} ${c.summary} ${c.question}`).includes(term)); };
export function renderChapters(book) {
  return `<label for="chapter-search">Rechercher un thème ou un chapitre</label><input id="chapter-search" type="search" placeholder="Conscience, temps, intelligence artificielle…" autocomplete="off" aria-controls="chapter-list"><p id="search-count" role="status"></p><div id="chapter-list">${book.pathways.map((path,i)=>`<div class="chapter-group" data-movement="${i+1}"><h3>${e(path.title)}</h3>${book.chapters.filter(c=>c.movement===i+1).map(c=>`<details class="chapter" id="chapitre-${c.number}" data-number="${c.number}"><summary><span class="chapter-number">${String(c.number).padStart(2,'0')}</span><span>${e(c.title)}</span><span class="chapter-page">p. ${c.page}</span></summary><div class="chapter-body"><p>${e(c.summary)}</p><p><strong>Pour en discuter :</strong> ${e(c.question)}</p></div></details>`).join('')}</div>`).join('')}</div><p class="muted">${e(book.source.note)} <a href="${e(book.source.url)}" target="_blank" rel="noopener noreferrer">Consulter le site de présentation ↗</a></p>`;
}
export function filterChapters(book, query) {
  const matches=matchingChapters(book,query), numbers=new Set(matches.map(c=>c.number));
  document.querySelectorAll('.chapter').forEach(detail=>{detail.hidden=!numbers.has(Number(detail.dataset.number)); if(normalize(query)) detail.open=!detail.hidden;});
  document.querySelectorAll('.chapter-group').forEach(group=>{group.hidden=![...group.querySelectorAll('.chapter')].some(c=>!c.hidden);});
  document.querySelector('#search-count').textContent=matches.length?`${matches.length} chapitre${matches.length>1?'s':''} sur ${book.chapterCount}`:'Aucun chapitre trouvé. Essayez un autre mot.';
}
