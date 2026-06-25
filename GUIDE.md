# 🛠️ Guide de modification — Olympic Connect 2026

Petit mode d'emploi pour modifier le site **sans connaître le code**.
👉 Règle d'or : **ne déplace pas les fichiers** dans des sous-dossiers, et ne renomme pas `style.css`. Sinon les liens vers le style et les images se cassent.

---

## 1. Comment c'est rangé (simple)

- **Les pages** = les fichiers qui finissent par `.html` (ex. `replays.html`). Elles sont toutes **au même endroit** (à côté de `index.html`).
- **L'apparence** (couleurs, tailles, position) = les fichiers `.css`.
- **Les images et logos** = dans le dossier `assets/`.

Pour voir tes changements : dans VS Code, bouton **« Go Live »** en bas à droite (Live Server), puis recharge la page après chaque sauvegarde (`Cmd + S`).
Astuce : dans un fichier, **`Cmd + F`** pour chercher un mot (un titre, une couleur…).

---

## 2. Quelle page = quel fichier ?

| La page | Le fichier à ouvrir | Son style (CSS) |
|---|---|---|
| Accueil | `index.html` | `style.css` |
| Replays et Temps forts | `replays.html` | `style.css` + `pages.css` |
| Athlete Talks | `athlete-talks.html` | `style.css` + `pages.css` |
| Posts | `posts.html` | `style.css` + `pages.css` |
| Canaux | `canaux.html` | `style.css` + `pages.css` + `canaux.css` |
| Live | `live.html` | `style.css` + `pages.css` + `live.css` |
| Communauté | `communaute.html` | `style.css` + `pages.css` + `canaux.css` |
| Athlètes | `athletes.html` | `style.css` + `pages.css` |
| Messages | `messages.html` | `style.css` + `pages.css` |
| Engagement | `engagement.html` | `style.css` + `pages.css` |
| Profil | `profil.html` | `style.css` + `profil.css` |
| SOS (signaler) | `sos.html`, `sos-signalement.html`, `sos-confirmation.html` | `style.css` + `sos.css` |
| Se connecter | `connexion.html` | `style.css` + `auth.css` |
| S'inscrire | `inscription.html` | `style.css` + `auth.css` |

---

## 3. À quoi sert chaque fichier CSS

- **`style.css`** = le gros fichier de base : les **couleurs du site**, le **header** (barre du haut) et le **footer** (bas de page), + la page d'accueil.
  ➡️ Tout en haut, la partie `:root { … }` contient **toutes les couleurs** (voir §4).
- **`pages.css`** = le **grand titre** des pages (la grosse écriture « Anton »).
- **`sos.css`** = les pages **SOS**.
- **`auth.css`** = les pages **Se connecter / S'inscrire**.
- **`canaux.css`, `live.css`, `profil.css`** = le style **propre à ces pages**.

---

## 4. 🎨 « Je veux changer une COULEUR »

Ouvre **`style.css`**, tout en haut, dans `:root`. Chaque couleur a un nom :

| Nom dans le code | C'est quoi | Valeur actuelle |
|---|---|---|
| `--navy` | Le bleu foncé (header, titres) | `#0b0f4d` |
| `--blue` | Le bleu vif | `#1874ff` |
| `--rose` | Le rouge/rose des boutons SOS | `#e60949` |
| `--indigo` | Le violet | `#41348a` |
| `--bleu-jo` | Le bleu turquoise « JO » | `#016381` |
| `--ink` | Le texte noir | `#121212` |

➡️ Change juste le code couleur (`#xxxxxx`). Tu peux trouver un code couleur sur **google « color picker »**.
Exemple : pour changer le bleu foncé partout, remplace `--navy:#0b0f4d;` par `--navy:#1a1a6e;`.

---

## 5. ✏️ « Je veux changer un TEXTE »

1. Ouvre le fichier `.html` de la page (voir le tableau §2).
2. Cherche le texte (`Cmd + F`).
3. Change-le **entre les balises**. Ne touche pas aux `< >`.

Exemple, dans `replays.html` :
```html
<h1 class="page-title">Replays et Temps forts</h1>
```
→ tu changes seulement `Replays et Temps forts`.

---

## 6. ➕ « Je veux AJOUTER une page »

Le plus simple : **copie** une page qui ressemble (ex. `replays.html`), **renomme** la copie (ex. `ma-page.html`), puis change le titre et le texte dedans.

---

## 7. ⚠️ Le header (menu du haut) et le footer (bas de page)

Ils apparaissent sur **plusieurs pages**. Aujourd'hui, ils sont **recopiés dans chaque page** (c'est comme ça que marche le HTML simple : pas de « copier une seule fois »).
La **version de référence** est dans le dossier `components/` : `header.html` et `footer.html`.

➡️ Donc si tu veux modifier le menu ou le footer **partout d'un coup**, c'est pénible à la main.
**Dis-le moi** : je peux te mettre en place un petit système où on ne modifie le header/footer **qu'à un seul endroit** (et il se met à jour sur toutes les pages). C'est recommandé si tu prévois de les changer souvent.

---

## 8. 🚫 À NE PAS faire

- Déplacer les `.html` ou les `.css` dans des sous-dossiers → **casse les liens** (le site devient tout blanc / sans style).
- Renommer `style.css`, `assets/`, ou les fichiers liés.
- Supprimer les balises `< >` autour des textes.

En cas de doute : **demande-moi**, on le fait ensemble. 🙂
