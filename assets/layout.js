/* =========================================================
   Kingsman Odyssey — mise en page partagée
   Injecte le header, le footer, le menu mobile + helpers.
   ========================================================= */

(function () {
  "use strict";

  /* ---------- config Tailwind (Play CDN) ---------- */
  window.tailwind = window.tailwind || {};
  window.tailwind.config = {
    theme: {
      extend: {
        colors: { navy: "#0b1230", gold: "#c9a227", cream: "#f6f1e7" },
        fontFamily: {
          serif: ['"Playfair Display"', "Georgia", "serif"],
          sans: ['"Manrope"', "ui-sans-serif", "sans-serif"]
        }
      }
    }
  };

  /* ---------- helpers globaux ---------- */
  const KO = (window.KO = { lang: (localStorage.getItem("ko_lang") || "fr") });

  KO.esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  };

  KO.qs = (sel, el) => (el || document).querySelector(sel);
  KO.qsa = (sel, el) => Array.from((el || document).querySelectorAll(sel));

  KO.param = function (name) {
    return new URLSearchParams(location.search).get(name);
  };

  /* échéances : "32 jours restants" / "Date dépassée" */
  KO.deadline = function (iso) {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const d = new Date(iso + "T00:00:00");
    const days = Math.round((d - today) / 86400000);
    const T = (s) => (window.KO.trStr ? window.KO.trStr(s) : s);
    if (days < 0) return { days, label: T("Date dépassée"), cls: "badge-expired" };
    if (days === 0) return { days, label: T("Dernier jour !"), cls: "badge-gold" };
    return { days, label: T("Clôture : ") + KO.fmtDate(iso), cls: "badge-ok" };
  };

  KO.fmtDate = function (iso) {
    const loc = KO.lang === "en" ? "en-GB" : "fr-FR";
    return new Date(iso + "T00:00:00").toLocaleDateString(loc, {
      day: "numeric", month: "long", year: "numeric"
    });
  };

  /* ---------- toast ---------- */
  KO.toast = function (msg, type) {
    msg = window.KO.trStr ? window.KO.trStr(msg) : msg;
    let wrap = document.querySelector(".toast-wrap");
    if (!wrap) {
      wrap = document.createElement("div");
      wrap.className = "toast-wrap";
      document.body.appendChild(wrap);
    }
    const t = document.createElement("div");
    t.className = "toast " + (type || "");
    t.textContent = msg;
    wrap.appendChild(t);
    setTimeout(() => { t.style.opacity = "0"; t.style.transition = "opacity .4s"; }, 4200);
    setTimeout(() => t.remove(), 4700);
  };

  /* ---------- navigation ---------- */
  const NAV = [
    { href: "/", label: "Accueil" },
    { href: "/bourses/", label: "Bourses" },
    { href: "/universites/", label: "Universités" },
    { href: "/destinations/", label: "Destinations" },
    { href: "/services/", label: "Services" },
    { href: "/a-propos/", label: "À propos" },
    { href: "/faq/", label: "FAQ" },
    { href: "/ressources/", label: "Ressources" }
  ];

  function currentPage() {
    const seg = (location.pathname.split("/")[1] || "").toLowerCase().replace(/\.html$/, "");
    return seg === "" ? "/" : "/" + seg;
  }

  function renderHeader() {
    const host = document.getElementById("ko-header");
    if (!host) return;
    const cur = currentPage();
    const links = NAV.map((n) =>
      `<a href="${n.href}" class="${cur === n.href ? "active" : ""}">${n.label}</a>`
    ).join("");

    host.outerHTML = `
    <header class="site-header" id="siteHeader">
      <div class="ko-container header-inner">
        <a class="brand" href="/" aria-label="Kingsman Odyssey — Accueil">
          <img class="brand-emblem" src="/assets/img/logo-header.png" alt="Emblème Kingsman Odyssey">
          <span class="brand-text"><strong>Kingsman Odyssey</strong><small>Odyssée académique</small></span>
        </a>
        <nav class="main-nav" aria-label="Navigation principale">${links}</nav>
        <button class="lang-toggle" type="button" aria-label="FR / EN"></button>
        <a href="/contact/#consultation" class="btn btn-gold btn-sm nav-cta">Réserver une consultation</a>
        <button class="nav-burger" id="navBurger" aria-label="Ouvrir le menu" aria-expanded="false">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </div>
    </header>
    <div class="drawer-backdrop" id="drawerBackdrop"></div>
    <aside class="mobile-drawer" id="mobileDrawer" aria-label="Menu mobile">
      <div class="drawer-head">
        <span class="brand-text"><strong style="font-family:'Playfair Display',serif;color:#fff;font-size:17px">Kingsman Odyssey</strong></span>
        <button class="drawer-close" id="drawerClose" aria-label="Fermer le menu">×</button>
      </div>
      ${NAV.map((n) => `<a class="mlink ${cur === n.href ? "active" : ""}" href="${n.href}">${n.label}</a>`).join("")}
      <a href="/contact/#consultation" class="btn btn-gold">Réserver une consultation</a>
      <button class="lang-toggle" type="button" style="margin-top:14px;width:100%"></button>
    </aside>`;
  }

  function initDrawer() {
    const burger = document.getElementById("navBurger");
    const drawer = document.getElementById("mobileDrawer");
    const backdrop = document.getElementById("drawerBackdrop");
    const close = document.getElementById("drawerClose");
    if (!burger) return;
    const set = (open) => {
      drawer.classList.toggle("open", open);
      backdrop.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    };
    burger.addEventListener("click", () => set(true));
    close.addEventListener("click", () => set(false));
    backdrop.addEventListener("click", () => set(false));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") set(false); });
  }

  /* ---------- footer ---------- */
  function renderFooter() {
    const host = document.getElementById("ko-footer");
    if (!host) return;
    const year = new Date().getFullYear();
    host.outerHTML = `
    <footer class="site-footer">
      <div class="ko-container">
        <div class="footer-grid">
          <div>
            <div class="footer-brand">
              <img src="/assets/img/logo-header.png" alt="Emblème Kingsman Odyssey">
              <span><strong>Kingsman Odyssey</strong><small>Odyssée académique</small></span>
            </div>
            <p style="font-size:14.5px">« L’art du voyage, l’élégance de l’odyssée. » Votre partenaire de confiance pour la mobilité académique internationale.</p>
                        <div class="social-row">
              <a href="https://t.me/KingsmanOdyssey_bot" target="_blank" rel="noopener" aria-label="Bot Telegram"><svg viewBox="0 0 24 24"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg></a>
              <a href="https://chat.whatsapp.com/IqsLeVoZeImGjwp4BL0fhI" target="_blank" rel="noopener" aria-label="Groupe WhatsApp"><svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
              <a href="https://www.facebook.com/share/19bUD3J9sF/" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
              <a href="https://www.instagram.com/kingsman_odyssey" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
              <a href="https://www.linkedin.com/company/kingsmanodyssey/" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg></a>
            </div>
          </div>
          <div>
            <h4>Navigation</h4>
            <a href="/bourses/">Bourses d’études</a><br>
            <a href="/universites/">Universités partenaires</a><br>
            <a href="/destinations/">Destinations</a><br>
            <a href="/services/">Notre processus</a><br>
            <a href="/faq/">FAQ</a>
          </div>
          <div>
            <h4>Ressources</h4>
            <a href="/ressources/">Derniers articles</a><br>
            <a href="/ressources/">Guides pays</a><br>
            <a href="/a-propos/">À propos</a><br>
            <a href="/contact/">Nous contacter</a>
          </div>
          <div>
            <h4>Contact</h4>
            <div class="contact-line">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>
              <a href="mailto:kingsmanodyssey@gmail.com">kingsmanodyssey@gmail.com</a>
            </div>
            <div class="contact-line">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="https://wa.me/79939647936" target="_blank" rel="noopener">WhatsApp / Telegram : +7 (993) 964-79-36</a>
            </div>
            <div class="contact-line">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              <span>Tous les jours · 10h – 22h (GMT+3)</span>
            </div>
          </div>
        </div>
        <div style="text-align:center;padding:16px 0 0">
          <a href="/legal/?id=conditions">Conditions d'utilisation</a> ·
          <a href="/legal/?id=confidentialite">Politique de confidentialité</a> ·
          <a href="/legal/?id=mentions">Mentions légales</a>
        </div>
        <div class="footer-bottom">
          <span>© ${year} Kingsman Odyssey — Tous droits réservés.</span>
          <span>« L’art du voyage, l’élégance de l’odyssée »</span>
        </div>
      </div>
    </footer>
    <button class="to-top" id="toTop" aria-label="Retour en haut">↑</button>`;
  }

  function initToTop() {
    const btn = document.getElementById("toTop");
    if (!btn) return;
    const onScroll = () => btn.classList.toggle("show", window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---------- animations d’apparition ---------- */
  KO.initReveal = function () {
    if (KO._revealInit) return;      /* idempotent : observe aussi les futurs rendus */
    KO._revealInit = true;
    if (!("IntersectionObserver" in window)) {
      const all = document.querySelectorAll("[data-reveal]");
      all.forEach((el) => el.classList.add("revealed"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("revealed"); io.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    const observeAll = (root) => {
      if (!root || !root.matches) return;
      const targets = root.matches("[data-reveal]") ? [root] : [];
      root.querySelectorAll && root.querySelectorAll("[data-reveal]:not(.revealed)").forEach((el) => targets.push(el));
      targets.forEach((el) => {
        if (!el.dataset.revealObs) { el.dataset.revealObs = "1"; io.observe(el); }
      });
    };
    observeAll(document.documentElement);
    new MutationObserver((muts) => {
      muts.forEach((m) => m.addedNodes.forEach((n) => { if (n.nodeType === 1) observeAll(n); }));
    }).observe(document.body, { childList: true, subtree: true });
  };

  /* ---------- FAQ accordéon ---------- */
  KO.bindFaq = function (root) {
    KO.qsa(".faq-item", root).forEach((item) => {
      const btn = KO.qs("button", item);
      const a = KO.qs(".faq-a", item);
      btn.addEventListener("click", () => {
        const open = item.classList.toggle("open");
        a.style.maxHeight = open ? a.scrollHeight + "px" : "0";
      });
    });
  };

  /* ---------- compteurs animés ---------- */
  KO.animateCounters = function () {
    KO.qsa("[data-count]").forEach((el) => {
      const target = parseInt(el.dataset.count, 10) || 0;
      const suffix = el.dataset.suffix || "";
      const t0 = performance.now(), dur = 1400;
      const tick = (t) => {
        const k = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - k, 3);
        el.textContent = Math.round(target * eased) + (k === 1 ? suffix : "");
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  };

  /* ---------- démarrage ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    renderHeader();
    renderFooter();
    initDrawer();
    initToTop();

    const header = document.getElementById("siteHeader");
    if (header) {
      const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    KO.initReveal();

    /* lancement page spécifique */
    const page = (document.body.dataset.page || "").replace(/\/$/, "");
    if (page && typeof KO.pages === "object" && KO.pages[page]) {
      try { KO.pages[page](); } catch (e) { console.error("[KO] erreur page", page, e); }
    }
  });
})();
