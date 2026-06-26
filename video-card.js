/* ============================================================
   <video-card> — Web Component (custom element)
   Génère le markup d'une carte vidéo et réutilise video.css
   (rendu en light DOM : les classes .vid* s'appliquent normalement).
   Aucun build, aucun fetch → marche en local (file://) et sur
   GitHub Pages. Il suffit d'inclure ce fichier + style.css + video.css.

   Usage :
     <video-card variant="replays-d" photo="assets/img/x.png"
                 alt="…" vues="12 345" titre="…"
                 jour="il y a 1 jour" duree="12 min"></video-card>

   Variantes : replays-d | cat | replays-m | live-d | live-m
               direct-m | petit | offline | photo
   Attributs (selon variante) :
     photo, alt, vues, titre, jour, duree, cats (séparées par virgule),
     handle, next (date du prochain live), sub (@pseudo),
     boutons (labels séparés par virgule), live (présence = point rouge)
   ============================================================ */
(function () {
  const EYE  = '<svg class="vid-eye" viewBox="0 0 24 16"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5 0 1 8 1 8s4 8 11 8 11-8 11-8-4-8-11-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"/></svg>';
  const PLAY = '<svg class="vid-play" viewBox="0 0 96 96"><circle cx="48" cy="48" r="48" fill="#41348a"/><path d="M38 30 70 48 38 66Z" fill="#fbfbfb"/></svg>';

  const esc = (s) => (s == null ? '' : String(s)).replace(/[&<>"]/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const list = (s) => (s || '').split(',').map((x) => x.trim()).filter(Boolean);
  const chips = (s) => list(s).map((c) => `<span class="vid-chip">${esc(c)}</span>`).join('');
  // "jour • durée" avec le point stylé .vid-dot
  const meta = (a, b) => [a, b].filter(Boolean).map(esc).join(' <span class="vid-dot"></span> ');

  class VideoCard extends HTMLElement {
    static get observedAttributes() { return ['variant']; }
    connectedCallback() { if (!this._done) { this.render(); this._done = true; } }

    render() {
      const g = (n) => this.getAttribute(n) || '';
      const variant = g('variant');
      const photo = g('photo'), alt = g('alt'), vues = g('vues'),
            titre = g('titre'), jour = g('jour'), duree = g('duree'),
            cats = g('cats'), handle = g('handle'), next = g('next'),
            sub = g('sub'), boutons = g('boutons');
      const hasLive = this.hasAttribute('live');

      // image de fond pour les variantes « grande carte »
      const setBg = () => { if (photo) this.style.backgroundImage = `url('${photo}')`; };
      const setImgRole = () => { if (alt) { this.setAttribute('role', 'img'); this.setAttribute('aria-label', alt); } };

      let cls = '', html = '';

      switch (variant) {
        case 'replays-d':
          cls = 'vid vid--replays-d'; setBg(); setImgRole();
          html = `
            <div class="vid-top"><span class="vid-view">${EYE}${esc(vues)}</span></div>
            <div class="vid-mid">${PLAY}</div>
            <div class="vid-bottom">
              <p class="vid-title">${esc(titre)}</p>
              <p class="vid-meta">${meta(jour, duree)}</p>
            </div>`;
          break;

        case 'cat':
          cls = 'vid vid--cat'; setBg(); setImgRole();
          html = `
            <div class="vid-top"><span class="vid-view">${EYE}${esc(vues)}</span></div>
            <div class="vid-mid">${PLAY}</div>
            <div class="vid-bottom">
              <p class="vid-title">${esc(titre)}</p>
              <div class="vid-row">
                <div class="vid-cats">${chips(cats)}</div>
                <p class="vid-meta">${meta(jour, duree)}</p>
              </div>
            </div>`;
          break;

        case 'replays-m':
          cls = 'vid vid--replays-m'; setBg(); setImgRole();
          html = `
            <div class="vid-top"><span class="vid-view vid-view--m">${EYE}${esc(vues)}</span></div>
            <div class="vid-mid">${PLAY}</div>
            <div class="vid-bottom">
              <p class="vid-title">${esc(titre)}</p>
              <p class="vid-meta">${meta(jour, duree)}</p>
            </div>`;
          break;

        case 'live-d':
        case 'live-m':
          cls = (variant === 'live-d') ? 'vid vid--live-d' : 'vid vid--live-m'; setBg(); setImgRole();
          html = `
            <div class="vid-live-row">
              <p class="vid-handle">${esc(handle)}</p>
              <p class="vid-next"><span>Prochain live</span><span>${esc(next)}</span></p>
            </div>`;
          break;

        case 'direct-m':
          cls = 'vid vid--direct-m'; setBg(); setImgRole();
          html = `
            <div class="vid-top"><span class="vid-view vid-view--m">${EYE}${esc(vues)}</span></div>
            <div class="vid-mid">${PLAY}</div>
            <div class="vid-bottom">
              <p class="vid-title">${esc(titre)}</p>
              <div class="vid-actions">
                ${list(boutons).map((b) => `<button class="vid-btn" type="button">${esc(b)}</button>`).join('')}
              </div>
            </div>`;
          break;

        case 'petit': {
          cls = 'vid-petit';
          const bg = photo ? ` style="background-image:url('${photo}')"` : '';
          html = `
            <div class="vid-petit__tile"${bg}>
              <span class="vid-petit__badge">${hasLive ? '<span class="vid-petit__live"></span>' : ''}${esc(vues)}</span>
            </div>
            <div class="vid-petit__body">
              <p class="vid-petit__title">${esc(titre)}</p>
              <div class="vid-petit__foot">
                <span class="vid-petit__handle">${esc(sub)}</span>
                <span class="vid-petit__date">${esc(jour)}</span>
              </div>
            </div>`;
          break;
        }

        case 'offline': {
          cls = 'vid-offline';
          const bg = photo ? ` style="background-image:url('${photo}')"` : '';
          html = `
            <div class="vid-offline__tile"${bg}>
              <span class="vid-offline__badge">${esc(vues)}</span>
            </div>
            <div class="vid-offline__body">
              <p class="vid-offline__title">${esc(titre)}</p>
              <div class="vid-offline__foot">
                <span class="vid-offline__handle">${esc(sub)}</span>
                <span class="vid-offline__date">${esc(jour)}</span>
              </div>
            </div>`;
          break;
        }

        case 'photo':
          cls = 'vid vid--photo'; setBg(); setImgRole();
          html = `
            <div class="vid-top"><span class="vid-view vid-view--full">${EYE}${esc(vues || 'X XXX')}</span></div>
            <div class="vid-mid">${PLAY}</div>
            <div class="vid-bottom">
              <p class="vid-title">${esc(titre || 'Titre de la vidéo')}</p>
              <div class="vid-row">
                <div class="vid-cats">${chips(cats)}</div>
                <p class="vid-meta">${meta(jour, duree)}</p>
              </div>
            </div>`;
          break;

        default:
          console.warn('<video-card> : variant inconnue =', variant);
          return;
      }

      this.className = cls;
      this.innerHTML = html;
    }
  }

  if (!customElements.get('video-card')) customElements.define('video-card', VideoCard);
})();
