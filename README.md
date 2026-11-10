# Tiziri — Bijoux kabyles

Site vitrine d'une boutique (fictive) de bijoux kabyles en argent émaillé, inspirés du savoir-faire d'Ath Yenni.

Projet réalisé en **HTML5, CSS3 et JavaScript** (sans framework).

## Pages

| Page | Fichier | Contenu |
|------|---------|---------|
| Accueil | `index.html` | Présentation de la boutique, pièces phares, les couleurs de l'émail |
| Collection | `collection.html` | Catalogue de 9 bijoux avec filtres par catégorie (JavaScript) |
| Savoir-faire | `savoir-faire.html` | Histoire du bijou kabyle et étapes de fabrication |
| Contact | `contact.html` | Formulaire de contact avec validation en JavaScript |

## Structure du projet

```
bijoux-kabyles/
├── index.html
├── collection.html
├── savoir-faire.html
├── contact.html
├── css/
│   └── style.css      # Feuille de style commune à toutes les pages
├── js/
│   └── main.js        # Menu mobile, filtres de la collection, validation du formulaire
├── images/            # Illustrations des bijoux en SVG (dessinées pour le projet)
└── README.md
```

## Fonctionnalités

- Navigation commune sur toutes les pages, avec la page active mise en évidence
- Design responsive (ordinateur, tablette, téléphone) avec menu « burger » sur mobile
- Filtrage des bijoux par catégorie sans rechargement de la page
- Formulaire de contact avec vérification des champs (nom, e-mail, message)
- Mise en page avec Flexbox et CSS Grid, variables CSS pour les couleurs

## Lancer le site

Aucune installation nécessaire : ouvrir `index.html` dans un navigateur.

Ou via GitHub Pages : *Settings → Pages → Branch : main → Save*.

## Auteure

Melinda — projet de cours.
