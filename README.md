# Fleur de Lys — Hammam & Spa d'Exception

[![Vercel](https://img.shields.io/badge/Deploy%20with-Vercel-black?logo=vercel)](https://vercel.com)
[![HTML5](https://img.shields.io/badge/Frontend-HTML5%20%2F%20CSS3%20%2F%20Vanilla%20JS-blue)](https://developer.mozilla.org)
[![GSAP](https://img.shields.io/badge/Animation-GSAP%203-88CE02?logo=greensock)](https://greensock.com)

> **Sanctuaire d'exception avec hammam traditionnel royal & rituels de bien-être à Bordj El Bahri, Alger.**

---

## ⚜ À Propos

**Fleur de Lys** est une maison de bien-être de prestige située à Bordj El Bahri, Alger. Le site web offre une expérience digitale immersive inspirée des codes du luxe et de l'architecture traditionnelle des bains maures :

- **Expérience Visuelle Haute Définition** : Galerie interactive plein écran avec défilement cinématique (GSAP Draggable) et prévisualisation plein écran (Fancybox).
- **Univers Spa Royal & Spa Oriental** : Intégration de photographies haute définition et capsules vidéo silencieuses en boucle.
- **Moteur Bilingue Fluide** : Switcher instantané Français / Anglais sans rechargement de page.
- **Concierge WhatsApp Intelligent** : Bouton d'action directe vers le concierge WhatsApp (+213 792 68 68 38), programmé pour apparaître élégamment dès l'accès au menu de soins.
- **Cartes de Partage Réseaux Sociaux & OpenGraph** : Balises OpenGraph et Twitter Cards haute résolution (1200x630) pour des partages élégants sur WhatsApp, Facebook, iMessage et Twitter/X.
- **Favicons Multi-Plateformes** : Logos vectoriels et PNGs adaptés pour dark mode et retina displays.

---

## 🚀 Déploiement sur Vercel (Recommandé)

Le projet est préconfiguré pour un déploiement instantané et sécurisé sur **[Vercel](https://vercel.com)** :

1. Connectez votre compte GitHub à Vercel.
2. Cliquez sur **Add New...** > **Project** et sélectionnez le dépôt **`Fleur-de-Lys`**.
3. Conservez les paramètres par défaut (**Framework Preset: Other** / **Root Directory: ./**).
4. Cliquez sur **Deploy**.

Le fichier `vercel.json` applique automatiquement :
- Les URLs propres (`cleanUrls: true`)
- Les en-têtes de sécurité HTTP (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`)
- La mise en cache optimisée sur le CDN mondial Edge (assets immutables pour les images et polices)

---

## 📁 Structure du Projet

```
Fleur-de-Lys/
├── index.html           # Page d'accueil avec hero cinématique & menu
├── about.html           # Histoire, philosophie & mission
├── services.html        # Carte complète des soins & rituels
├── gallery.html         # Galerie interactive (Spa Royal & Spa Oriental)
├── masters.html         # Maîtres praticiennes & savoir-faire
├── contacts.html        # Accès, plan, horaires & formulaire
├── gift-card.html       # Cartes privilèges & bons cadeaux
├── faq.html             # Questions fréquentes
├── blog.html            # Actualités & conseils bien-être
├── css/                 # Feuilles de styles optimisées
├── js/                  # Scripts d'animation GSAP & moteur bilingue (fleur_app.js)
├── img/                 # Photographies authentiques, vidéos & identité visuelle
├── fonts/               # Typographies de luxe (Gallient & Suisse Intl)
├── favicon.ico          # Favicon officiel Fleur de Lys
├── vercel.json          # Configuration de déploiement et sécurité Vercel
└── README.md
```

---

## 🔒 Sécurité & Confidentialité

- **Zero-Backend Attack Surface** : Architecture 100% statique hébergée sur Edge CDN mondial.
- **Aucune dépendance serveur vulnérable** : Aucun serveur Node exposé, aucune base de données non authentifiée.
- **En-têtes de sécurité conformes aux normes OWASP**.

---

## ⚜ Fleur de Lys Hammam & Spa
- **Localisation** : Bordj El Bahri, Alger, Algérie
- **Instagram** : [@spa.fleur.de.lys](https://www.instagram.com/spa.fleur.de.lys/)
- **Téléphone / WhatsApp** : +213 792 68 68 38
