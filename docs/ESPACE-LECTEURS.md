# Espace lecteurs — spécifications préparatoires

Statut : non développé, non ouvert. Aucun fichier de participants livré.

Objectif : questions-réponses modérées, échanges et rencontres pour les possesseurs du livre, y compris les bénéficiaires d’un cadeau. Règles d’accès à valider par l’auteur.

Architecture : service serveur avec authentification, base privée, rôles lecteur/modérateur/administrateur et autorisations vérifiées côté serveur. Ne pas placer une liste de membres ou des secrets dans Vite ou un dépôt public.

Données minimales proposées : identifiant opaque, pseudonyme, courriel si nécessaire pour l’authentification, date d’inscription, état d’accès. Éviter les adresses postales et justificatifs d’achat persistants. Les besoins réels déterminent les champs retenus.

Avant ouverture : identifier le responsable, le prestataire et les destinataires ; définir durées de conservation, procédure de suppression/export, sauvegardes, modération et traitement des abus. Distinguer demande de réponse et consentement facultatif aux nouvelles. Aucun consentement précoché.

Recette : tester refus d’accès anonyme, cloisonnement des comptes, récupération d’accès, suppression et modération. Préparer une notice de confidentialité adaptée et la faire valider avant collecte.
