# CCQ — version locale 0.2.0

Première présentation issue du PROMPT-MAITRE-PERSONNEL.md, datée du 19 octobre 2026. Publication non effectuée. Enrichie depuis le site GPT Sites fourni : sommaire, couverture et affiches récupérés le 19 octobre 2026. Cette version reste à valider avant publication.

## Utilisation

Node.js 22.12+ ou 24 requis. Sous PowerShell, utiliser npm.cmd si npm.ps1 est bloqué.

```text
npm.cmd ci
npm.cmd run dev
npm.cmd test
npm.cmd run build
npm.cmd run test:dist
npm.cmd run preview
```

Ouvrir l’URL affichée par Vite. Ne pas ouvrir index.html directement avec file:// : le contenu JSON nécessite HTTP.

## Modifier le contenu

- public/book.json : textes, références, FAQ et propositions de parcours.
- src/main.js : assemblage des sections et partage natif/copie du lien.
- src/components.js : composants et échappement HTML.
- src/style.css : mise en page responsive, bleu nuit et or.
- src/config.js : état documentaire des services. Les indicateurs sont tous désactivés ; les activer seuls ne crée aucun service. Implémenter puis tester le contact après validation.

Les quatre mouvements, les 19 titres et leurs pages sont repris du site de présentation. Résumés, questions et répartition des chapitres : adaptations éditoriales du site. La biographie est adaptée de la quatrième de couverture. Couverture et deux affiches sont hébergées localement dans public/assets. La vérification finale dans le livre reste à faire. Voir docs/ENRICHISSEMENT-SITE.md pour la provenance et les contrôles.

## Déploiement après validation humaine

GitHub Pages : créer ou choisir un dépôt autorisé, ajouter son remote et pousser la version validée. Dans Settings / Pages, sélectionner GitHub Actions. Exécuter manuellement le workflow « Publier la version validée sur Pages ». Aucun déploiement automatique sur push. Configurer si possible une validation de l’environnement github-pages. Le base './' et le chargement relatif de book.json permettent le sous-chemin du dépôt.

cPanel : npm.cmd ci puis npm.cmd run build
npm.cmd run test:dist ; sauvegarder l’existant, téléverser le contenu de dist/ dans le répertoire web retenu, sans node_modules ni les documents internes. Vérifier HTTPS, chemins, navigation et accès anonyme.

Sites : aucune modification de l’adresse historique. Hébergement à choisir et autoriser après revue.

Après connaissance de l’URL publique, compléter og:url, canonical et l’image Open Graph avec des URL absolues validées. Vérifier l’accès dans une fenêtre sans connexion. Ne pas annoncer le site publié avant ce contrôle.

## Maintenance

Après chaque modification : contrôler les sources et liens, lancer test et build, vérifier mobile et clavier. Conserver le ZIP de livraison et un journal des versions. La page ne collecte pas de données et n’intègre pas d’outil de suivi ; les journaux éventuels de l’hébergeur devront être documentés avant publication.

Voir docs/RAPPORT-CONTROLE.md, docs/SOURCES-ET-CONTENU.md et docs/ESPACE-LECTEURS.md.
