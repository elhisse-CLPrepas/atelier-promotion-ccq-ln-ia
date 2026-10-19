import './style.css';
import { escapeHTML as e, section } from './components.js';
import { renderChapters, filterChapters } from './chapters.js';

async function start() {
  const response = await fetch(`${import.meta.env.BASE_URL}book.json`);
  if (!response.ok) throw new Error('Contenu indisponible');
  const b = await response.json();
  document.querySelector('#app').innerHTML = `
    <a class="skip" href="#contenu">Aller au contenu</a>
    <header><a class="wordmark" href="#accueil" aria-label="CCQ — Accueil">CCQ<span>Un livre · Une réflexion</span></a><nav aria-label="Navigation principale"><a href="#livre">Le livre</a><a href="#parcours">Parcours</a><a href="#chapitres">Chapitres</a><a href="#auteur">Auteur</a><a href="#faq">FAQ</a></nav></header>
    <main id="contenu"><section class="hero" id="accueil"><div class="hero-copy"><p class="eyebrow">Sciences · Conscience · Philosophie</p><h1>${e(b.title)}</h1><p class="subtitle">${e(b.subtitle)}</p><p>${e(b.promise)}</p><p class="byline">Un livre du ${e(b.author)}</p><a class="button" href="#chapitres">Découvrir les 19 chapitres <span aria-hidden="true">↗</span></a></div><figure class="book-cover"><img src="${import.meta.env.BASE_URL}${e(b.cover)}" alt="Couverture de Conscience Collective Quantique du Prof. Abderrahman EL HISSE" fetchpriority="high"><figcaption>Conscience Collective Quantique · Le livre</figcaption></figure></section>
    <div class="reading-note"><span>Un regard à construire</span><p>Une invitation à explorer des idées, avec une attention constante à ce qui relève des faits, des hypothèses et des analogies.</p></div>
    ${section('livre','01 / Le livre','Des questions pour penser ensemble.',`<div class="intro-grid"><div><p>${e(b.audience)}</p><p>Une lecture pour mettre les idées en perspective et nourrir une discussion argumentée.</p></div><ul class="benefits">${b.benefits.map(x=>`<li>${e(x)}</li>`).join('')}</ul></div>`)}
    ${section('parcours','02 / Vos chemins de lecture','Quatre portes d’entrée.',`<p class="muted">Quatre mouvements de lecture repris du site de présentation. Leur répartition par chapitres est une proposition éditoriale.</p><div class="pathways">${b.pathways.map((x,i)=>`<article><span class="number">0${i+1}</span><h3>${e(x.title)}</h3><p>${e(x.text)}</p></article>`).join('')}</div>`)}
    ${section('chapitres','03 / Le sommaire','19 chapitres, un horizon collectif.',renderChapters(b))}
    ${section('demarche','04 / La démarche','Lire avec curiosité et discernement.',`<div class="method"><article><h3>Faits scientifiques</h3><p>Identifier les résultats établis et leurs domaines de validité.</p></article><article><h3>Hypothèses</h3><p>Reconnaître les propositions qui restent à examiner ou à éprouver.</p></article><article><h3>Analogies philosophiques</h3><p>Explorer leur pouvoir de questionnement sans les confondre avec une démonstration.</p></article></div>`)}
    ${section('auteur','05 / L’auteur',e(b.author),`<div class="author"><div class="monogram" aria-hidden="true">AE</div><div><p>${e(b.authorBio)}</p><p class="muted">Présentation reprise du site, adaptée de la quatrième de couverture.</p><p class="muted">ISBN ${e(b.isbn)} · Dépôt légal ${e(b.legalDeposit)}</p></div></div>`)}
    ${section('faq','06 / Questions fréquentes','Avant de commencer la lecture.',`<div class="faq">${b.faq.map(([q,a])=>`<details><summary>${e(q)}</summary><p>${e(a)}</p></details>`).join('')}</div>`)}
    ${section('ressources','07 / À partager','Deux affiches pour faire découvrir le livre.',`<p>Visuels repris du site de présentation. L’affiche du cercle exprime une invitation au dialogue ; aucun espace privé n’est actuellement ouvert.</p><div class="poster-grid">${b.posters.map(p=>`<figure><a href="${import.meta.env.BASE_URL}${e(p.file)}" download><img src="${import.meta.env.BASE_URL}${e(p.file)}" alt="${e(p.title)}" loading="lazy"><figcaption>${e(p.title)} · Télécharger l’affiche ↗</figcaption></a></figure>`).join('')}</div>`)}
    <section class="share"><p class="eyebrow">Prolonger la réflexion</p><h2>Une idée se partage.</h2><p>Faites découvrir le livre à une personne curieuse de ces questions.</p><button id="share" type="button">Partager cette page</button><p id="share-status" role="status" aria-live="polite"></p></section></main>
    <footer><p><strong>CCQ</strong> · ${e(b.title)}</p><p>Environnement du projet : LN-IA</p><p>Cette page ne comporte ni formulaire de collecte, ni outil de suivi d’audience.</p><a href="#accueil">Retour en haut ↑</a></footer>`;
  document.querySelector('#chapter-search').addEventListener('input', event => filterChapters(b, event.target.value));
  filterChapters(b, '');
  document.querySelector('#share').addEventListener('click', async () => {
    const status = document.querySelector('#share-status');
    try {
      if (navigator.share) await navigator.share({title:b.title,url:location.href});
      else { await navigator.clipboard.writeText(location.href); status.textContent='Lien copié. Vous pouvez le partager.'; }
    } catch (error) { if(error.name !== 'AbortError') status.textContent='Copiez l’adresse dans la barre du navigateur pour partager cette page.'; }
  });
}
start().catch(() => { document.querySelector('#app').innerHTML='<main class="section"><h1>La page n’a pas pu être chargée.</h1><p>Vérifiez votre connexion puis rechargez la page.</p><button onclick="location.reload()">Réessayer</button></main>'; });
