# Footer — module réutilisable

Footer responsive de Olympic Connect / « JO goatesque ».

## Fichiers
- **footer.html** — le markup à coller dans le `<body>`.
- **footer.css** — les styles à coller dans le `<style>` (ou à lier via `<link>`).
- **preview.html** — page de démo autonome pour visualiser le footer (ouvre-la dans le navigateur).
- **README.md** — ce fichier.

## Comportement responsive
- **Fond navy** : toujours pleine largeur (s'élargit avec l'écran).
- **Contenu** : plafonné à **1400px** et centré → au-delà, le contenu se fige, seul le fond grandit.
- **Desktop actif dès 800px** ; en dessous de 800px → layout empilé (mobile).

## Comment l'intégrer (copier-coller)
1. Coller le contenu de **footer.css** dans le `<style>` de la page (juste avant `</style>`).
2. Coller le contenu de **footer.html** dans le `<body>`, à l'endroit voulu (en bas, après `</main>`).
3. Vérifier que la page a bien la police `NewBlack` et les variables `--navy` / `--paper` / `--blue`.
   Les pages `jo_html` les ont déjà. Sinon, dé-commenter le bloc de secours en haut de **footer.css**.

## Chemins d'assets
Les `src` pointent vers `assets/...` (racine `jo_html/`).
Si tu places la page ailleurs, ajuste les préfixes (`../assets/...`, etc.).
