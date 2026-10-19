import {readFileSync,writeFileSync} from 'node:fs';
const b=JSON.parse(readFileSync('public/book.json','utf8')), source=JSON.parse(readFileSync('docs/site-book.json','utf8'));
for(const c of b.chapters){const ref=source.chapters.find(x=>x.id===c.number);if(!ref||ref.title!==c.title||ref.page!==c.page)throw Error('Divergence de sommaire '+c.number);}
b.posters=[{file:'assets/affiche-conscience-collective-quantique.png',title:'Présentation du livre'},{file:'assets/affiche-club-de-lecture.png',title:'Invitation au dialogue entre lecteurs'}];
writeFileSync('public/book.json',JSON.stringify(b,null,2)+'\n');
let main=readFileSync('src/main.js','utf8');
main=main.replace('    <section class="share">',`    \${section('ressources','07 / À partager','Deux affiches pour faire découvrir le livre.',\`<p>Visuels repris du site de présentation. L’affiche du cercle exprime une invitation au dialogue ; aucun espace privé n’est actuellement ouvert.</p><div class="poster-grid">\${b.posters.map(p=>\`<figure><a href="\${import.meta.env.BASE_URL}\${e(p.file)}" download><img src="\${import.meta.env.BASE_URL}\${e(p.file)}" alt="\${e(p.title)}" loading="lazy"><figcaption>\${e(p.title)} · Télécharger l’affiche ↗</figcaption></a></figure>\`).join('')}</div>\`)}
    <section class="share">`);
writeFileSync('src/main.js',main);
let readme=readFileSync('README.md','utf8').replace('version locale 0.1.0','version locale 0.2.0').replace('Les titres des chapitres et les ressources originales manquent : cette version reste à valider.','Enrichie depuis le site GPT Sites fourni : sommaire, couverture et affiches récupérés le 19 octobre 2026. Cette version reste à valider avant publication.');
const start=readme.indexOf('Les quatre parcours sont');const end=readme.indexOf('## Déploiement',start);
readme=readme.slice(0,start)+'Les quatre mouvements, les 19 titres et leurs pages sont repris du site de présentation. Résumés, questions et répartition des chapitres : adaptations éditoriales du site. La biographie est adaptée de la quatrième de couverture. Couverture et deux affiches sont hébergées localement dans public/assets. La vérification finale dans le livre reste à faire. Voir docs/ENRICHISSEMENT-SITE.md pour la provenance et les contrôles.\n\n'+readme.slice(end);
writeFileSync('README.md',readme);
const pkg=JSON.parse(readFileSync('package.json','utf8'));pkg.version='0.2.0';writeFileSync('package.json',JSON.stringify(pkg,null,2)+'\n');
const lock=JSON.parse(readFileSync('package-lock.json','utf8'));lock.version='0.2.0';lock.packages[''].version='0.2.0';writeFileSync('package-lock.json',JSON.stringify(lock,null,2)+'\n');
