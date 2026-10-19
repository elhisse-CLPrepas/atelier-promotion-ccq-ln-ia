import './style.css';
import { escapeHTML as e, section } from './components.js';

async function start() {
  const response = await fetch(`${import.meta.env.BASE_URL}book.json`);
  if (!response.ok) throw new Error('Contenu indisponible');
  const b = await response.json();
  document.querySelector('#app').innerHTML = `
    <a class="skip" href="#contenu">Aller au contenu</a>
    <header><a class="wordmark" href="#accueil" aria-label="CCQ — Accueil">CCQ<span>Un livre · Une réflexion</span></a><nav aria-label="Navigation principale"><a href="#livre">Le livre</a><a href="#parcours">Parcours</a><a href="#chapitres">Chapitres</a><a href="#auteur">Auteur</a><a href="#faq">FAQ</a></nav></header>
    <main id="contenu"><section class="hero" id="accueil"><div class="hero-copy"><p class="eyebrow">Sciences · Conscience · Philosophie</p><h1>${e(b.title)}</h1><p class="subtitle">${e(b.subtitle)}</p><p>${e(b.promise)}</p><p class="byline">Un livre du ${e(b.author)}</p><a class="button" href="#chapitres">Découvrir les 19 chapitres <span aria-hidden="true">↗</span></a></div><div class="illustration" role="img" aria-label="Illustration abstraite de cercles reliés, évocation de la réflexion collective"><div class="orbit one"></div><div class="orbit two"></div><div class="orbit three"></div><span class="star">✦</span><p>Conscience<br><em>Information</em><br>Devenir collectif</p><small>Illustration éditoriale · CCQ</small></div></section>
    <div class="reading-note"><span>Un regard à construire</span><p>Une invitation à explorer des idées, avec une attention constante à ce qui relève des faits, des hypothèses et des analogies.</p></div>
    ${section('livre','01 / Le livre','Des questions pour penser ensemble.',`<div class="intro-grid"><div><p>${e(b.audience)}</p><p>Une lecture pour mettre les idées en perspective et nourrir une discussion argumentée.</p></div><ul class="benefits">${b.benefits.map(x=>`<li>${e(x)}</li>`).join('')}</ul></div>`)}
    ${section('parcours','02 / Vos chemins de lecture','Quatre portes d’entrée.',`<p class="muted">Propositions éditoriales de découverte, à valider avec l’auteur ; elles ne remplacent pas le sommaire du livre.</p><div class="pathways">${b.pathways.map((x,i)=>`<article><span class="number">0${i+1}</span><h3>${e(x.title)}</h3><p>${e(x.text)}</p></article>`).join('')}</div>`)}
    ${section('chapitres','03 / Le sommaire','19 chapitres, un horizon collectif.',`<div class="chapter-panel"><div class="chapter-count">19<span>chapitres annoncés</span></div><div><h3>De la conscience individuelle aux scénarios de civilisation</h3><p>Le sommaire détaillé sera présenté ici après vérification des titres dans la version finale du livre.</p><p class="muted">Les titres des chapitres ne sont pas encore disponibles sur cette page.</p></div></div>`)}
    ${section('demarche','04 / La démarche','Lire avec curiosité et discernement.',`<div class="method"><article><h3>Faits scientifiques</h3><p>Identifier les résultats établis et leurs domaines de validité.</p></article><article><h3>Hypothèses</h3><p>Reconnaître les propositions qui restent à examiner ou à éprouver.</p></article><article><h3>Analogies philosophiques</h3><p>Explorer leur pouvoir de questionnement sans les confondre avec une démonstration.</p></article></div>`)}
    ${section('auteur','05 / L’auteur',e(b.author),`<div class="author"><div class="monogram" aria-hidden="true">AE</div><div><p>Auteur de <em>${e(b.title)}</em>.</p><p>Un parcours de réflexion sur la conscience, la physique moderne et notre devenir collectif.</p><p class="muted">ISBN ${e(b.isbn)} · Dépôt légal ${e(b.legalDeposit)}</p></div></div>`)}
    ${section('faq','06 / Questions fréquentes','Avant de commencer la lecture.',`<div class="faq">${b.faq.map(([q,a])=>`<details><summary>${e(q)}</summary><p>${e(a)}</p></details>`).join('')}</div>`)}
    <section class="share"><p class="eyebrow">Prolonger la réflexion</p><h2>Une idée se partage.</h2><p>Faites découvrir le livre à une personne curieuse de ces questions.</p><button id="share" type="button">Partager cette page</button><p id="share-status" role="status" aria-live="polite"></p></section></main>
    <footer><p><strong>CCQ</strong> · ${e(b.title)}</p><p>Environnement du projet : LN-IA</p><p>Cette page ne comporte ni formulaire de collecte, ni outil de suivi d’audience.</p><a href="#accueil">Retour en haut ↑</a></footer>`;
  document.querySelector('#share').addEventListener('click', async () => {
    const status = document.querySelector('#share-status');
    try {
      if (navigator.share) await navigator.share({title:b.title,url:location.href});
      else { await navigator.clipboard.writeText(location.href); status.textContent='Lien copié. Vous pouvez le partager.'; }
    } catch (error) { if(error.name !== 'AbortError') status.textContent='Copiez l’adresse dans la barre du navigateur pour partager cette page.'; }
  });
}
start().catch(() => { document.querySelector('#app').innerHTML='<main class="section"><h1>La page n’a pas pu être chargée.</h1><p>Vérifiez votre connexion puis rechargez la page.</p><button onclick="location.reload()">Réessayer</button></main>'; });
