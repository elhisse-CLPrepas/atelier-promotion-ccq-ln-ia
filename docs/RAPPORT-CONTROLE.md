# Rapport de contrôle — 19 octobre 2026

## État livré

Version 0.1.0 locale, non publiée et à validation éditoriale. Le dossier initial contenait uniquement le prompt maître (13 365 octets). Pas de dépôt Git préexistant, ni de README, AGENTS.md, ancien ZIP, guide Word ou ressources du livre.

Le fichier d’origine est préservé ; une copie documentaire constitue le jalon de sauvegarde. Le projet est maintenant structuré pour Vite, avec source éditable, FAQ, partage, documentation de maintenance et workflow Pages exclusivement manuel.

## Contrôles réalisés

- npm install : réussi, 14 paquets ajoutés, audit initial sans vulnérabilité signalée.
- npm run build : réussi avec Vite 7.3.7 ; base relative ./, JSON copié dans dist.
- Tests : 3 contrôles du contenu et de l’échappement réussis ; 1 contrôle des ressources de production et du sous-chemin réussi.
- Contrôles syntaxiques Node de main.js et components.js : réussis.
- Prévisualisation Vite : démarrée sur 127.0.0.1:5173 ; page et book.json contrôlés en HTTP 200, puis serveur arrêté pour maintenance.
- Pas de formulaire, pisteur ou base de participants ; contacts et données commerciales absents.
- Revue du code : HTML sémantique, ancre d’évitement, focus visible, FAQ native details/summary, styles 800/420 px et préférence de mouvement réduit.

## Limites explicites

Le navigateur de contrôle n’est pas disponible (inventaire vide, création iab refusée). Rendu visuel, clavier réel, partage natif, contraste mesuré et tests mobile restent à effectuer sur un navigateur. Les styles et attributs ne constituent pas une preuve de recette visuelle.

Les chemins de production ont été contrôlés statiquement sous une URL simulée /depot-ccq/ ; aucun dépôt GitHub Pages ni hébergement réel n’a été testé.

L’outil web n’a pas pu accéder à https://conscience-collective-quantique.elhisse.chatgpt.site/ ; son accessibilité publique reste indéterminée. Aucune modification distante.

Un essai de réinstallation pendant la prévisualisation a échoué sur le fichier natif Rollup verrouillé par Windows ; reprise après arrêt de Vite. Voir le résultat final de réinstallation consigné ci-dessous.

## Conditions avant publication

Récupérer et vérifier les 19 titres, le guide, les visuels officiels et la biographie ; valider les quatre parcours proposés. Remplacer la section sommaire provisoire par les titres exacts. Choisir l’hébergeur et l’URL, compléter les métadonnées absolues, effectuer la recette navigateur. Pour un contact actif, valider coordonnées, vendeur et offre et implémenter/tester le parcours.

Le prompt impose « Ne jamais publier sans validation humaine ». Cette livraison prépare la revue ; elle n’est ni une publication ni une autorisation d’annoncer des commandes disponibles.

Résultat final : npm ci réussi (14 paquets, 0 vulnérabilité signalée).

Correction supplémentaire : suppression du marqueur BOM ajouté par PowerShell dans package.json après détection d’un échec de lecture PostCSS. Construction et contrôle des ressources relancés après correction.
