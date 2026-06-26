# Header — module réutilisable

Header responsive de Olympic Connect / « JO goatesque » (JO Milano Cortina 2026, Figma node `509:1191`).

## Fichiers
- **header.html** — le markup à coller dans le `<body>` (tout en haut).
- **header.css** — les styles à coller dans le `<style>` (ou à lier via `<link>`).
- **preview.html** — page de démo autonome pour visualiser le header (ouvre-la dans le navigateur).
- **README.md** — ce fichier.

## Comportement responsive
- **Fond teal `#00627c`** : toujours pleine largeur (s'élargit avec l'écran).
- **Contenu** : plafonné à **1400px** et centré → au-delà, le contenu se fige, seul le fond grandit.
- **Desktop actif dès 1080px** ; en dessous de 1080px → le menu central est masqué (reste logo + Olympic Connect + SOS + drapeau). Sous 680px, logo et onglet réduits.

## Structure
- Gauche : logo Milano Cortina + onglet actif « Olympic Connect » (pill indigo).
- Centre : menu (Résultats · Les Sports · Map et Agenda · Billeterie · Shop).
- Droite : bouton SOS (rouge) + bouton drapeau (langue FR).
- Sous la nav : bannière dégradée (swoosh teal → vert).

## Comment l'intégrer (copier-coller)
1. Coller le contenu de **header.css** dans le `<style>` de la page (ou lier via `<link>`).
2. Coller le contenu de **header.html** dans le `<body>`, tout en haut (avant `<main>`).
3. Vérifier que la page a bien la police `NewBlack Typeface` et les variables `--indigo-900` / `--blue-50` / `--blanc`.
   Si la page hôte ne les a pas, dé-commenter le bloc de secours en haut de **header.css**.

## Chemins d'assets
Les `src` pointent vers `assets/...` (racine du site).
Logo = `assets/img/jo-header-logo.png` · dégradé = `assets/img/jo-header-gradient.png`
(la bannière est une `<img class="jh-banner">` — comme le `footer-deco` — pour rester
portable : un `background:url()` en CSS se résoudrait relativement au fichier `.css`).
Si tu places la page ailleurs, ajuste les préfixes (`../assets/...`, etc.).
