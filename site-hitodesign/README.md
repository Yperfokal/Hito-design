# HITO Design — nouveau site

Prototype responsive construit à partir de l’audit du 22 juin 2026 et de la direction visuelle validée.

## Contenu inclus

- Accueil premium et responsive
- Quatre missions : Design global, Architecture intérieure, AMO et Formation
- Sélection de projets avec fiches interactives
- Méthode en quatre étapes
- Présentation de Chris Reati
- Formulaire de contact avec validation et état de confirmation
- Navigation mobile accessible
- Métadonnées de référencement essentielles

## Avant la mise en production

Le formulaire est volontairement en mode prototype : il valide les champs et affiche une confirmation, mais n'envoie encore aucun message. Il faudra fournir l'adresse e-mail destinataire pour connecter l'envoi via un service de formulaire ou une fonction Vercel.

Il est également recommandé de remplacer les images de portfolio par les fichiers originaux en haute résolution lorsqu'ils seront disponibles.

## Déploiement sur Vercel

1. Placer ce dossier dans un dépôt GitHub, GitLab ou Bitbucket.
2. Dans Vercel, choisir **Add New Project** puis importer le dépôt.
3. Sélectionner le framework **Vite**.
4. Utiliser `npm run build` comme commande de construction et `dist` comme dossier de sortie.
5. Déployer une première adresse de prévisualisation.
6. Après validation, ouvrir **Project Settings → Domains** et ajouter le nom de domaine.
7. Appliquer les enregistrements DNS indiqués par Vercel.

Le dossier `dist/` contient déjà une version de production vérifiée.

## Aperçu local

```bash
npm install
npm run dev
```

Puis ouvrir l'adresse indiquée par Vite dans un navigateur.
