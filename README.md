# CCQ — version locale 0.1.0

Première présentation issue du PROMPT-MAITRE-PERSONNEL.md, datée du 19 octobre 2026. Publication non effectuée. Les titres des chapitres et les ressources originales manquent : cette version reste à valider.

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

Les quatre parcours sont des reformulations proposées, pas des intitulés extraits du livre. Aucun titre de chapitre n’a été inventé. Ajouter les titres vérifiés dans book.json et adapter la section correspondante dans main.js lorsque les sources seront fournies. La biographie détaillée attend l’accord de l’auteur. Le visuel abstrait CSS est une illustration et ne remplace pas la couverture officielle.

## Déploiement après validation humaine

GitHub Pages : créer ou choisir un dépôt autorisé, ajouter son remote et pousser la version validée. Dans Settings / Pages, sélectionner GitHub Actions. Exécuter manuellement le workflow « Publier la version validée sur Pages ». Aucun déploiement automatique sur push. Configurer si possible une validation de l’environnement github-pages. Le base './' et le chargement relatif de book.json permettent le sous-chemin du dépôt.

cPanel : npm.cmd ci puis npm.cmd run build
npm.cmd run test:dist ; sauvegarder l’existant, téléverser le contenu de dist/ dans le répertoire web retenu, sans node_modules ni les documents internes. Vérifier HTTPS, chemins, navigation et accès anonyme.

Sites : aucune modification de l’adresse historique. Hébergement à choisir et autoriser après revue.

Après connaissance de l’URL publique, compléter og:url, canonical et l’image Open Graph avec des URL absolues validées. Vérifier l’accès dans une fenêtre sans connexion. Ne pas annoncer le site publié avant ce contrôle.

## Maintenance

Après chaque modification : contrôler les sources et liens, lancer test et build, vérifier mobile et clavier. Conserver le ZIP de livraison et un journal des versions. La page ne collecte pas de données et n’intègre pas d’outil de suivi ; les journaux éventuels de l’hébergeur devront être documentés avant publication.

Voir docs/RAPPORT-CONTROLE.md, docs/SOURCES-ET-CONTENU.md et docs/ESPACE-LECTEURS.md.
