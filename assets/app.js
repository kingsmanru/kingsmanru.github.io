/* =========================================================
   Kingsman Odyssey — logique applicative
   Rendu des listes, filtres, modales, formulaires.
   ========================================================= */

(function () {
  "use strict";

  const D = window.KO_DATA;
  const { esc, qs, qsa, deadline, fmtDate } = window.KO;

  /* =============== TEMPLATES DE CARTES =============== */

  function bourseCard(b) {
    const dl = deadline(b.deadline);
    return `
    <article class="card" data-reveal data-bourse="${b.id}">
      <div class="card-img" style="aspect-ratio:auto;padding:18px 22px;display:flex;align-items:center;gap:14px;background:linear-gradient(135deg,#101a40,#1a2450)">
        <span class="flag-chip lg flag-${b.paysId}"></span>
        <span style="display:flex;flex-direction:column;gap:4px">
          <span class="badge ${b.financement === "100% financée" ? "badge-gold" : "badge-ghost"}">${esc(b.financement)}</span>
          <span style="color:#aab3cf;font-size:13px;font-weight:700">${esc(b.pays)}</span>
        </span>
        ${b.populaire ? `<span class="badge badge-gold badge-float corner-right">⭐ Populaire</span>` : ""}
      </div>
      <div class="card-body">
        <h3>${esc(b.titre)}</h3>
        <div class="card-meta"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>${esc(b.org)}</div>
        <div class="card-tags">
          ${b.niveaux.map((n) => `<span class="badge badge-level">${esc(n)}</span>`).join("")}
          <span class="badge ${dl.cls}">${dl.label}</span>
        </div>
        <div class="card-actions">
          <button class="btn btn-navy btn-sm" data-open-bourse="${b.id}">Voir la bourse</button>
          <a class="btn btn-outline-dark btn-sm" href="/contact/#consultation&bourse=${b.id}">Être accompagné</a>
        </div>
      </div>
    </article>`;
  }

  function crestHtml(u) {
    const initials = u.nom.split(/\s+/).filter(w => /^[A-ZÉ]/.test(w)).map(w => w[0]).slice(0, 3).join("");
    const flagCls = "flag-" + ((D.pays.find((p) => p.nom === u.pays) || {}).id || "");
    return `<div class="crest"><span class="flag-chip xl ${flagCls}"></span><span class="monogram">${esc(initials)}</span></div>`;
  }

  function universityCard(u) {
    return `
    <article class="card" data-reveal data-pays-filter="${esc(u.pays)}">
      <div class="card-img">
        ${u.img ? `<img src="${u.img}" alt="${esc(u.nom)}" loading="lazy">` : crestHtml(u)}
        <span class="badge badge-gold badge-float">${esc(u.rang)}</span>
      </div>
      <div class="card-body">
        <h3>${esc(u.nom)}</h3>
        <div class="card-meta">📍 ${esc(u.ville)}</div>
        <p class="card-desc">${esc(u.desc)}</p>
        <div class="card-tags">${u.domaines.map((d) => `<span class="badge badge-level">${esc(d)}</span>`).join("")}</div>
        <div class="card-actions">
          <a class="btn btn-navy btn-sm" href="/universite/?id=${u.id}">En savoir plus</a>
        </div>
      </div>
    </article>`;
  }

  function countryCard(p) {
    const nb = D.bourses.filter((b) => b.paysId === p.id).length;
    const badge = !p.disponible
      ? `<span class="badge badge-navy badge-float">Bientôt disponible</span>`
      : `<span class="badge badge-gold badge-float">Accompagnement ouvert${nb ? " · " + nb + " bourse" + (nb > 1 ? "s" : "") : ""}</span>`;
    const action = !p.disponible
      ? `<span class="card-desc" style="font-weight:700">Nos conseillers préparent l’ouverture de cette destination — <a class="link-arrow" href="/contact/">être prévenu(e)</a></span>`
      : `<a class="btn btn-navy btn-sm" href="/bourses/?pays=${encodeURIComponent(p.nom)}">Voir les bourses</a>`;
    return `
    <article class="card" data-reveal>
      <div class="card-img">
        ${p.img ? `<img src="${p.img}" alt="${esc(p.nom)}" loading="lazy">` : `<div class="dest-fallback"><span class="flag-chip xl flag-${p.id}"></span></div>`}
        ${badge}
      </div>
      <div class="card-body">
        <h3>${esc(p.nom)}</h3>
        <p class="card-desc">${esc(p.desc)}</p>
        <div class="card-tags">
          <span class="badge badge-level">🗣 ${esc(p.langues)}</span>
          <span class="badge badge-level">💱 ${esc(p.devise)}</span>
        </div>
        <div class="card-actions">${action}</div>
      </div>
    </article>`;
  }

  function articleCard(a) {
    return `
    <article class="card" data-reveal>
      <a href="/article/?id=${a.id}" class="card-img" aria-label="${esc(a.titre)}">
        <img src="${a.img}" alt="${esc(a.titre)}" loading="lazy">
        <span class="badge badge-gold badge-float">${esc(a.cat)}</span>
      </a>
      <div class="card-body">
        <div class="card-meta">🗓 ${fmtDate(a.date)} · ⏱ ${esc(a.lecture)} de lecture</div>
        <h3><a href="/article/?id=${a.id}" style="text-decoration:none;color:inherit">${esc(a.titre)}</a></h3>
        <p class="card-desc">${esc(a.resume)}</p>
        <a class="link-arrow" href="/article/?id=${a.id}">Lire l’article →</a>
      </div>
    </article>`;
  }

  function faqItem(f) {
    return `
    <div class="faq-item" data-reveal>
      <button type="button" aria-expanded="false">
        <span>${esc(f.q)}</span><span class="plus">+</span>
      </button>
      <div class="faq-a"><p>${esc(f.a)}</p></div>
    </div>`;
  }

  /* =============== MODALE BOURSE =============== */

  KO.openBourse = function (id) {
    const b = D.bourses.find((x) => x.id === id);
    if (!b) return;
    const dl = deadline(b.deadline);
    const facts = [
      ["Financement", b.financement],
      ["Montant", b.montant],
      ["Niveaux", b.niveaux.join(" · ")],
      [dl.days >= 0 ? "Date limite" : "Réouverture", dl.days >= 0 ? fmtDate(b.deadline) : (b.ouverture || "À confirmer")]
    ];
    const wrap = document.createElement("div");
    wrap.className = "modal-backdrop open";
    wrap.id = "koModal";
    wrap.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-label="${esc(b.titre)}">
      <div class="modal-head">
        <button class="modal-close" data-close aria-label="Fermer">×</button>
        <span class="flag-chip lg flag-${b.paysId}"></span>
        <h3 style="margin-top:12px">${esc(b.titre)}</h3>
        <div class="org">${esc(b.org)} · ${esc(b.pays)}</div>
      </div>
      <div class="modal-body">
        <span class="badge ${dl.cls}">${dl.label}</span>
        <p style="margin-top:16px">${esc(b.description)}</p>
        <div class="modal-facts">${facts.map(([k, v]) => `<div class="fact"><b>${k}</b><span>${esc(v)}</span></div>`).join("")}</div>
        <h4>Points couverts</h4>
        <ul>${b.avantages.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
        <h4>Conditions d’éligibilité</h4>
        <ul>${b.conditions.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
        <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:24px">
          <a class="btn btn-gold" href="/contact/#consultation&bourse=${b.id}">Être accompagné sur cette bourse</a>
        </div>
      </div>
    </div>`;
    document.body.appendChild(wrap);
    document.body.style.overflow = "hidden";
    const close = () => { wrap.remove(); document.body.style.overflow = ""; };
    wrap.addEventListener("click", (e) => { if (e.target === wrap || e.target.closest("[data-close]")) close(); });
    document.addEventListener("keydown", function escClose(e) {
      if (e.key === "Escape") { close(); document.removeEventListener("keydown", escClose); }
    });
  };

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-open-bourse]");
    if (btn) KO.openBourse(btn.dataset.openBourse);
  });

  /* flèches des mini-carrousels de l'accueil */
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-car]");
    if (!b) return;
    const t = document.getElementById(b.getAttribute("data-car"));
    if (!t) return;
    const s = t.firstElementChild;
    const stepv = s ? s.getBoundingClientRect().width + 18 : 340;
    const dir = b.classList.contains("car-prev") ? -1 : 1;
    t.scrollBy({ left: dir * stepv, behavior: "smooth" });
  });

  /* =============== FORMULAIRES =============== */

  function archiveLocal(type, data) {
    try {
      const arr = JSON.parse(localStorage.getItem("ko_messages") || "[]");
      arr.push({ type, data, at: new Date().toISOString() });
      localStorage.setItem("ko_messages", JSON.stringify(arr.slice(-50)));
    } catch (e) { /* stockage indisponible : sans effet */ }
  }

  /* ---------- envoi via FormSubmit ---------- */
  async function sendFormsubmit(payload) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 20000); /* ne jamais laisser l’UI bloquée */
    try {
      const r = await fetch("https://formsubmit.co/ajax/kingsmanodyssey@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(Object.assign({ _template: "table", _captcha: "false" }, payload)),
        signal: ctrl.signal
      });
      if (!r.ok) throw new Error("HTTP " + r.status);
      return await r.json().catch(() => ({}));
    } finally {
      clearTimeout(timer);
    }
  }

  function collectData(form) {
    const data = {};
    qsa("input, select, textarea", form).forEach((el) => {
      if (!el.name || el.type === "checkbox") return;
      /* en mode EN, les options affichent la traduction : on enregistre la valeur française */
      const opt = el.tagName === "SELECT" && el.selectedOptions && el.selectedOptions[0];
      if (opt && opt.dataset.frText !== undefined) {
        data[el.name] = opt.dataset.frText.trim();
      } else {
        data[el.name] = el.value.trim();
      }
    });
    return data;
  }

  function showSuccess(form, success, recapText, needsActivation) {
    qs(".form-success-recap", success).textContent = window.KO.trStr(recapText);
    let extra = qs(".form-success-extra", success);
    if (!extra) {
      extra = document.createElement("p");
      extra.className = "form-success-extra";
      extra.style.cssText = "font-size:13.5px;margin-top:10px";
      qs("h3", success).after(extra);
    }
    extra.textContent = needsActivation ? window.KO.trStr("⚠️ Première utilisation : un e-mail d’activation vient d’être envoyé à kingsmanodyssey@gmail.com — cliquez sur « Activate Form » dans cet e-mail pour activer la réception des prochaines demandes. Cette demande est déjà archivée localement.") : "";
    form.style.display = "none";
    success.classList.add("show");
    success.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  /* validation + branchement d’un formulaire simple */
  KO.initForm = function (form, opts) {
    if (!form) return;
    const success = qs(".form-success", form.parentElement) || qs(".form-success", form.closest(".form-zone") || document);
    const submitBtn = qs('button[type="submit"]', form);

    const validate = () => {
      let ok = true;
      qsa("[data-required]", form).forEach((el) => {
        const field = el.closest(".field") || el.closest(".checkbox-row");
        let bad = el.type === "checkbox" ? !el.checked : !el.value.trim();
        if (!bad && el.type === "email") bad = !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(el.value.trim());
        if (!bad && el.dataset.min) bad = parseFloat(el.value) < parseFloat(el.dataset.min);
        if (!bad && el.dataset.max) bad = parseFloat(el.value) > parseFloat(el.dataset.max);
        if (field) field.classList.toggle("invalid", bad);
        if (bad) ok = false;
      });
      return ok;
    };

    qsa("[data-required]", form).forEach((el) => {
      const field = el.closest(".field") || el.closest(".checkbox-row");
      if (!field) return;
      ["input", "change"].forEach((ev) =>
        el.addEventListener(ev, () => field.classList.remove("invalid")));
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!validate()) {
        KO.toast("Merci de compléter les champs signalés.", "err");
        return;
      }
      const data = collectData(form);
      const payload = Object.assign({ _subject: opts.subject }, data);
      const original = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = "Envoi en cours…";
      try {
        const j = await sendFormsubmit(Object.assign({ _subject: opts.subject }, data));
        const ok = String(j.success) === "true";
        const needsActivation = !ok && /activation/i.test(j.message || "");
        if (!ok && !needsActivation) throw new Error(j.message || "Refusé par le service d’envoi");
        archiveLocal(opts.type, data);
        form.reset();
        showSuccess(form, success, opts.recap(data), needsActivation);
        KO.toast(needsActivation ? "Demande archivée — activez la réception via l’e-mail envoyé à kingsmanodyssey@gmail.com" : "Message envoyé avec succès ✓", needsActivation ? "" : "ok");
      } catch (err) {
        console.error(err);
        KO.toast("L’envoi a échoué. Vérifiez votre connexion ou utilisez le bouton WhatsApp ci-dessous.", "err");
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = original;
      }
    });

    /* secours : envoi direct via WhatsApp (réception garantie) */
    if (opts.wa) {
      const waBtn = document.createElement("button");
      waBtn.type = "button";
      waBtn.setAttribute("data-wa-send", "1");
      waBtn.className = "btn btn-outline-dark";
      waBtn.style.cssText = "width:100%;margin-top:10px";
      waBtn.innerHTML = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg> Ou envoyer ma demande via WhatsApp`;
      waBtn.addEventListener("click", () => {
        if (!validate()) {
          KO.toast("Merci de compléter les champs signalés.", "err");
          return;
        }
        const data = collectData(form);
        archiveLocal(opts.type + "-whatsapp", data);
        const url = "https://wa.me/79939647936?text=" + encodeURIComponent(opts.wa(data));
        window.open(url, "_blank", "noopener");
        KO.toast("WhatsApp ouvert : appuyez sur « Envoyer » pour nous transmettre votre demande ✓", "ok");
      });
      submitBtn.after(waBtn);
    }
  };

  /* =============== PAGES =============== */
  KO.pages = KO.pages || {};

  /* ---------- Accueil ---------- */
  KO.pages.index = function () {
    const band = qs("#statsBand");
    if (band && "IntersectionObserver" in window) {
      const io = new IntersectionObserver((es) => {
        if (es.some((x) => x.isIntersecting)) { KO.animateCounters(); io.disconnect(); }
      }, { threshold: 0.3 });
      io.observe(band);
    } else { KO.animateCounters(); }

    const search = qs("#heroSearch");
    if (search) {
      search.addEventListener("submit", (e) => {
        e.preventDefault();
        const p = new URLSearchParams();
        const n = qs('[name="niveau"]', search).value;
        const c = qs('[name="pays"]', search).value;
        if (n) p.set("niveau", n);
        if (c) p.set("pays", c);
        location.href = "/bourses/" + (p.toString() ? "?" + p.toString() : "");
      });
    }

    const open = D.bourses.filter((b) => deadline(b.deadline).days >= 0);
    const grid = qs("#homeBourses");
    if (grid) grid.innerHTML = open.slice(0, 6).map(bourseCard).join("");

    qsa("#homeLevelPills .pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        qsa("#homeLevelPills .pill").forEach((x) => x.classList.remove("active"));
        pill.classList.add("active");
        const lvl = pill.dataset.level;
        const list = lvl ? open.filter((b) => b.niveaux.includes(lvl)).slice(0, 6) : open.slice(0, 6);
        grid.innerHTML = list.length ? list.map(bourseCard).join("")
          : `<div class="card" style="padding:30px;text-align:center;grid-column:1/-1">Aucune bourse ouverte pour ce niveau pour le moment — <a class="link-arrow" href="/bourses/">voir tout le catalogue</a></div>`;
        KO.initReveal();
      });
    });

    const univGrid = qs("#homeUniversites");
    if (univGrid) univGrid.innerHTML = D.universites.filter((u) => u.img).slice(0, 3).map(universityCard).join("");

    const destGrid = qs("#homeDestinations");
    if (destGrid) destGrid.innerHTML = D.pays.slice(0, 6).map(countryCard).join("");

    const artGrid = qs("#homeArticles");
    if (artGrid) artGrid.innerHTML = D.articles.slice(0, 3).map(articleCard).join("");

    const faqHost = qs("#homeFaq");
    if (faqHost) {
      faqHost.innerHTML = D.faq.slice(0, 4).map(faqItem).join("");
      KO.bindFaq(faqHost);
    }

    KO.initForm(qs("#newsletterForm"), {
      type: "newsletter",
      formName: "newsletter",
      subject: "Newsletter Kingsman Odyssey — nouvelle inscription",
      recap: (d) => `${d.email || "Votre adresse"} recevra nos prochaines opportunités.`
    });
  };

  /* ---------- Bourses ---------- */
  KO.pages.bourses = function () {
    const grid = qs("#boursesGrid");
    const countEl = qs("#boursesCount");
    const state = {
      q: KO.param("q") || "",
      pays: KO.param("pays") || "",
      niveau: KO.param("niveau") || "",
      fin: "",
      tri: "deadline"
    };

    const paysSel = qs("#fPays");
    paysSel.innerHTML = `<option value="">Tous les pays</option>` +
      D.pays.map((p) => `<option value="${esc(p.nom)}">${esc(p.nom)}</option>`).join("");

    qs("#fQ").value = state.q;
    paysSel.value = state.pays;

    function apply() {
      let list = D.bourses.slice();
      if (state.q) {
        const q = state.q.toLowerCase();
        list = list.filter((b) =>
          [b.titre, b.org, b.pays, b.description].join(" ").toLowerCase().includes(q));
      }
      if (state.pays) list = list.filter((b) => b.pays === state.pays);
      if (state.niveau) list = list.filter((b) => b.niveaux.includes(state.niveau));
      if (state.fin) list = list.filter((b) => b.financement === state.fin);
      if (state.tri === "deadline") {
        list.sort((a, b) => {
          const da = deadline(a.deadline).days, db = deadline(b.deadline).days;
          const openA = da >= 0 ? 0 : 1, openB = db >= 0 ? 0 : 1;
          if (openA !== openB) return openA - openB;
          return da - db;
        });
      } else if (state.tri === "populaires") {
        list.sort((a, b) => (b.populaire ? 1 : 0) - (a.populaire ? 1 : 0));
      }
      const T = (s) => (window.KO.trStr ? window.KO.trStr(s) : s);
      countEl.innerHTML = `<strong>${list.length}</strong> ${T(list.length > 1 ? "opportunités trouvées" : "opportunité trouvée")}`;
      grid.innerHTML = list.length ? list.map(bourseCard).join("")
        : `<div class="card" style="padding:44px;text-align:center;grid-column:1/-1">
             <div style="font-size:40px">🔍</div>
             <h3 style="margin-top:10px">Aucune bourse ne correspond</h3>
             <p class="card-desc">Essayez d’élargir vos critères, ou <a class="link-arrow" href="/contact/">demandez une recherche personnalisée</a>.</p>
           </div>`;
      KO.initReveal();
    }

    let t;
    qs("#fQ").addEventListener("input", (e) => {
      clearTimeout(t);
      t = setTimeout(() => { state.q = e.target.value.trim(); apply(); }, 250);
    });
    paysSel.addEventListener("change", (e) => { state.pays = e.target.value; apply(); });
    qs("#fFin").addEventListener("change", (e) => { state.fin = e.target.value; apply(); });
    qs("#fTri").addEventListener("change", (e) => { state.tri = e.target.value; apply(); });
    qsa("#levelPills .pill").forEach((pill) => {
      if (pill.dataset.level === state.niveau) pill.classList.add("active");
      pill.addEventListener("click", () => {
        qsa("#levelPills .pill").forEach((x) => x.classList.remove("active"));
        pill.classList.add("active");
        state.niveau = pill.dataset.level || "";
        apply();
      });
    });
    apply();
  };

  /* ---------- Universités ---------- */
  KO.pages.universites = function () {
    const grid = qs("#univGrid");
    const paysSel = qs("#univPays");
    paysSel.innerHTML = `<option value="">Tous les pays</option>` +
      D.universites.map((u) => u.pays).filter((v, i, a) => a.indexOf(v) === i)
        .map((p) => `<option value="${esc(p)}">${esc(p)}</option>`).join("");
    function apply() {
      const v = paysSel.value;
      const list = v ? D.universites.filter((u) => u.pays === v) : D.universites;
      grid.innerHTML = list.map(universityCard).join("");
      KO.initReveal();
    }
    paysSel.addEventListener("change", apply);
    apply();
  };

  /* ---------- Destinations ---------- */
  KO.pages.destinations = function () {
    qs("#destGrid").innerHTML = D.pays.map(countryCard).join("");
  };

  /* ---------- FAQ ---------- */
  KO.pages.faq = function () {
    const host = qs("#faqList");
    host.innerHTML = D.faq.map(faqItem).join("");
    KO.bindFaq(host);
    KO.initForm(qs("#newsletterForm"), {
      type: "newsletter",
      formName: "newsletter",
      subject: "Newsletter Kingsman Odyssey — nouvelle inscription",
      recap: (d) => `${d.email || "Votre adresse"} recevra nos prochaines opportunités.`
    });
  };

  /* ---------- Ressources ---------- */
  KO.pages.ressources = function () {
    qs("#articlesGrid").innerHTML = D.articles.map(articleCard).join("");
  };

  /* ---------- SEO dynamique (canonical + og:url selon ?id=) ---------- */
  function seoDynamic(canonicalUrl, title, description) {
    if (description) {
      let md = qs('meta[name="description"]', document.head) || document.createElement("meta");
      md.setAttribute("name", "description");
      md.setAttribute("content", description);
      if (!md.parentNode) document.head.appendChild(md);
    }
    const set = (rel, prop, content) => {
      let el;
      if (rel) {
        el = qs('link[rel="' + rel + '"]', document.head) || document.createElement("link");
        el.rel = rel;
        el.href = content;
      } else {
        el = qs('meta[property="' + prop + '"]', document.head) || document.createElement("meta");
        el.setAttribute("property", prop);
        el.setAttribute("content", content);
      }
      if (!el.parentNode) document.head.appendChild(el);
    };
    set("canonical", null, canonicalUrl);
    set(null, "og:url", canonicalUrl);
    set(null, "og:title", title);
  }

  /* ---------- Article ---------- */
  KO.pages.article = function () {
    const id = KO.param("id");
    const a = D.articles.find((x) => x.id === id);
    if (!a) { location.href = "/ressources/"; return; }
    const seoTitle = a.seoTitle || (a.titre.length <= 48 ? a.titre : a.titre.slice(0, a.titre.lastIndexOf(" ", 48)) + "…");
    document.title = a.seoTitle ? a.seoTitle : seoTitle + " — Kingsman Odyssey";
    seoDynamic("https://www.kingsmanodyssey.ru/article/?id=" + a.id, document.title, a.resume);
    qs("#artTitle").textContent = a.titre;
    qs("#artMeta").innerHTML = `🗓 ${fmtDate(a.date)} · ⏱ ${esc(a.lecture)} de lecture · ${esc(a.cat)}`;
    qs("#artImg").src = a.img;
    qs("#artImg").alt = a.titre;
    qs("#artBody").innerHTML = a.contenu.map((s, i) =>
      `<h3>${esc(s.h)}</h3><p class="${i === 0 ? "first-letter" : ""}">${esc(s.p)}</p>`).join("");
    qs("#artRelated").innerHTML = D.articles.filter((x) => x.id !== a.id).map(articleCard).join("");
  };

  /* ---------- Fiche université ---------- */
  KO.pages.universite = function () {
    const id = KO.param("id");
    const u = D.universites.find((x) => x.id === id);
    const det = D.universiteDetails[id];
    if (!u || !det) { location.href = "/universites/"; return; }
    document.title = u.nom + " — Kingsman Odyssey";
    seoDynamic("https://www.kingsmanodyssey.ru/universite/?id=" + u.id, document.title, u.desc + " " + (det.presentation || ""));
    qs("#uniTitle").textContent = u.nom;
    qs("#uniMeta").innerHTML = `📍 ${esc(u.ville)} · <span class="badge badge-gold" style="vertical-align:middle">${esc(u.rang)}</span>`;
    const imgHost = qs("#uniImg");
    if (u.img) { imgHost.innerHTML = `<img src="${u.img}" alt="${esc(u.nom)}">`; }
    else { imgHost.innerHTML = crestHtml(u); }
    qs("#uniBody").innerHTML = `
      <p class="first-letter">${esc(det.presentation)}</p>
      <p>${esc(det.longText)}</p>
      <h3>Points forts</h3>
      <ul class="list-check">${det.atouts.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
      <h3>Vie étudiante</h3>
      <p>${esc(det.vie)}</p>
      <h3>Frais de scolarité</h3>
      <p>${esc(det.frais)}</p>
      <h3>Langue</h3>
      <p>${esc(det.langue)}</p>`;
    qs("#uniFacts").innerHTML = `
      <div class="fact"><b>Fondation</b><span>${esc(det.fondation)}</span></div>
      <div class="fact"><b>Effectif</b><span>${esc(det.etudiants)}</span></div>
      <div class="fact"><b>Pays</b><span>${esc(u.pays)}</span></div>
      <div class="fact"><b>Site officiel</b><span><a href="${esc(u.site)}" target="_blank" rel="noopener" style="color:var(--navy)">Site ↗</a></span></div>`;
    const list = (det.bourses || []).map((bid) => D.bourses.find((b) => b.id === bid)).filter(Boolean);
    qs("#uniBourses").innerHTML = list.length
      ? list.map((b) => {
          const dl = deadline(b.deadline);
          return `<article class="card" style="padding:20px 22px" data-reveal>
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
              <span class="flag-chip flag-${b.paysId}"></span>
              <div><h3 style="font-size:17px;margin:0">${esc(b.titre)}</h3>
              <span class="badge ${dl.cls}" style="margin-top:4px">${dl.label}</span></div>
            </div>
            <p class="card-desc" style="margin:0">${esc(b.montant)}</p>
            <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap">
              <button class="btn btn-navy btn-sm" data-open-bourse="${b.id}">Voir la bourse</button>
              <a class="btn btn-outline-dark btn-sm" href="/contact/#consultation&bourse=${b.id}">Être accompagné</a>
            </div>
          </article>`;
        }).join("")
      : `<p class="card-desc">Aucune bourse référencée pour cette université pour le moment — <a class="link-arrow" href="/contact/">parlons de votre projet</a>.</p>`;
    qs("#uniRelated").innerHTML = D.universites.filter((x) => x.id !== u.id).slice(0, 3).map(universityCard).join("");
  };

  /* ---------- Contact / Réservation ---------- */
  KO.pages.contact = function () {
    const form = qs("#bookingForm");
    if (form) initWizard(form);
    KO.initForm(qs("#contactForm"), {
      type: "message",
      formName: "contact/",
      subject: "Nouveau message — site Kingsman Odyssey",
      recap: (d) => `Merci ${d["Nom complet"] || ""} ! Votre message a bien été reçu. Nous vous répondons à ${d["Adresse e-mail"] || "votre adresse"} sous 24 h ouvrées.`,
      wa: (d) => [
        "✉️ NOUVEAU MESSAGE — site Kingsman Odyssey",
        `👤 Nom : ${d["Nom complet"] || "-"}`,
        `📧 E-mail : ${d["Adresse e-mail"] || "-"}`,
        `📌 Sujet : ${d["Sujet"] || "-"}`,
        `📝 Message : ${d["Message"] || "-"}`
      ].join("\n")
    });
    KO.initForm(qs("#newsletterForm"), {
      type: "newsletter",
      formName: "newsletter",
      subject: "Newsletter Kingsman Odyssey — nouvelle inscription",
      recap: (d) => `${d.email || "Votre adresse"} recevra nos prochaines opportunités.`
    });
  };

  /* assistant de réservation : 3 étapes + récapitulatif + avertissement */
  function initWizard(form) {
    const steps = qsa(".wiz-step", form);
    const progress = qs("#wizProgress", form);
    let cur = 1;

    /* bouton de secours WhatsApp à l’étape finale */
    const waHost = qs("#waHost", form);
    if (waHost) {
      const waBtn = document.createElement("button");
      waBtn.type = "button";
      waBtn.setAttribute("data-wa-send", "1");
      waBtn.className = "btn btn-outline-dark";
      waBtn.style.cssText = "width:100%";
      waBtn.textContent = "Ou envoyer ma demande via WhatsApp";
      waHost.appendChild(waBtn);
    }

    function showStep(n) {
      cur = n;
      steps.forEach((s) => s.classList.toggle("active", +s.dataset.step === n));
      qsa("span", progress).forEach((seg, i) => seg.classList.toggle("done", i < Math.min(n, 3) || n >= 3));
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function validateStep(n) {
      let ok = true;
      qsa(`.wiz-step[data-step="${n}"] [data-required]`, form).forEach((el) => {
        const field = el.closest(".field") || el.closest(".checkbox-row");
        let bad = el.type === "checkbox" ? !el.checked : !el.value.trim();
        if (!bad && el.type === "email") bad = !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(el.value.trim());
        if (!bad && el.dataset.min) bad = parseFloat(el.value) < parseFloat(el.dataset.min);
        if (!bad && el.dataset.max) bad = parseFloat(el.value) > parseFloat(el.dataset.max);
        if (field) field.classList.toggle("invalid", bad);
        if (bad) ok = false;
      });
      return ok;
    }

    /* lit la valeur française d’origine d’un champ (options traduites en EN) */
    function val(name) {
      const el = form.elements[name];
      if (!el) return "";
      const opt = el.tagName === "SELECT" && el.selectedOptions && el.selectedOptions[0];
      if (opt && opt.dataset.frText !== undefined) return opt.dataset.frText.trim();
      return el.value.trim();
    }

    function buildRecap() {
      const groups = [
        ["Identité", [["Nom complet", `${val("Prénom")} ${val("Nom")}`.trim()], ["Âge", val("Âge")], ["Nationalité", val("Nationalité")], ["Résidence", val("Pays de résidence")]]],
        ["Contact", [["WhatsApp", val("WhatsApp")], ["Email", val("Adresse e-mail")]]],
        ["Profil académique", [["Niveau actuel", val("Niveau actuel")], ["Moyenne", val("Moyenne") ? val("Moyenne") + "/20" : ""], ["Domaine", val("Domaine actuel")]]],
        ["Projet d’études 🇷🇺", [["Situation", val("Situation")], ["Niveau visé", val("Niveau visé")], ["Domaine visé", val("Domaine souhaité")], ["Rentrée", val("Rentrée")], ["Objectif", val("Objectif")], ["Budget (hors frais KO)", val("Budget")]].concat(val("Précisions") ? [["Précisions", val("Précisions")]] : [])]
      ];
      const host = qs("#wizRecap", form);
      host.innerHTML = groups.map(([t, rows]) => `
        <div class="recap-group">
          <h5>${esc(t)}</h5>
          ${rows.map(([k, v]) => `<div class="row"><b>${esc(k)}</b><span>${esc(v || "—")}</span></div>`).join("")}
        </div>`).join("");
    }

    function submit() {
      for (let n = 1; n <= 3; n++) {
        if (!validateStep(n)) { showStep(n); KO.toast("Merci de compléter les champs signalés.", "err"); return; }
      }
      const data = collectData(form);
      const payload = Object.assign({ _subject: `Demande de consultation — ${data["Prénom"] || ""} ${data["Nom"] || ""}`.trim() }, data);
      const btn = qs('[data-submit]', form);
      const original = btn.textContent;
      btn.disabled = true;
      btn.textContent = "Envoi en cours…";
      sendFormsubmit(payload).then(function (j) {
        const ok = String(j.success) === "true";
        const needsActivation = !ok && /activation/i.test(j.message || "");
        if (!ok && !needsActivation) throw new Error(j.message || "Refusé par le service d’envoi");
        archiveLocal("consultation", data);
        const success = qs(".form-success", form.parentElement);
        showSuccess(form, success, "Merci " + (data["Prénom"] || "") + " ! Votre demande de consultation est bien enregistrée. Un conseiller vous contacte sous 24 h via WhatsApp ou e-mail.", needsActivation);
        KO.toast(needsActivation ? "Demande archivée — activez la réception via l’e-mail envoyé à kingsmanodyssey@gmail.com" : "Demande envoyée avec succès ✓", needsActivation ? "" : "ok");
      }).catch(function (err) {
        console.error(err);
        KO.toast("L’envoi a échoué. Utilisez le bouton WhatsApp ci-dessous, votre demande nous parviendra aussitôt.", "err");
      }).finally(() => { btn.disabled = false; btn.textContent = original; });
    }

    function sendViaWhatsApp() {
      for (let n = 1; n <= 3; n++) {
        if (!validateStep(n)) { showStep(n); KO.toast("Merci de compléter les champs signalés.", "err"); return; }
      }
      const d = collectData(form);
      archiveLocal("consultation-whatsapp", d);
      const txt = [
        "🎓 NOUVELLE DEMANDE DE CONSULTATION — Kingsman Odyssey",
        `👤 Nom : ${d["Prénom"] || "-"} ${d["Nom"] || ""}`.trimEnd(),
        `📧 E-mail : ${d["Adresse e-mail"] || "-"}`,
        `📱 WhatsApp : ${d["WhatsApp"] || "-"}`,
        `🎂 Âge : ${d["Âge"] || "-"} · 🌍 ${d["Nationalité"] || "-"} · Résidence : ${d["Pays de résidence"] || "-"}`,
        `📚 Profil : ${d["Niveau actuel"] || "-"} — ${d["Domaine actuel"] || "-"} — moyenne ${d["Moyenne"] || "-"}/20`,
        `🇷🇺 Projet Russie : ${d["Niveau visé"] || "-"} en ${d["Domaine souhaité"] || "-"} (rentrée ${d["Rentrée"] || "-"})`,
        `🎯 Objectif : ${d["Objectif"] || "-"} · 💰 Budget : ${d["Budget"] || "-"}`,
        d["Précisions"] ? `📝 Précisions : ${d["Précisions"]}` : ""
      ].filter(Boolean).join("\n");
      window.open("https://wa.me/79939647936?text=" + encodeURIComponent(txt), "_blank", "noopener");
      KO.toast("WhatsApp ouvert : appuyez sur « Envoyer » pour nous transmettre votre demande ✓", "ok");
    }

    /* navigation */
    form.addEventListener("click", (e) => {
      const next = e.target.closest("[data-next]");
      const back = e.target.closest("[data-back]");
      const toRecap = e.target.closest("[data-recap]");
      const modify = e.target.closest("[data-modify]");
      const understood = e.target.closest("[data-submit]");
      const wa = e.target.closest("[data-wa-send]");
      if (next) { if (validateStep(cur)) showStep(cur + 1); else KO.toast("Merci de compléter les champs signalés.", "err"); }
      else if (toRecap) { if (validateStep(cur)) { buildRecap(); showStep(4); } else KO.toast("Merci de compléter les champs signalés.", "err"); }
      else if (back) showStep(Math.max(1, cur - 1));
      else if (modify) showStep(1);
      else if (understood) submit();
      else if (wa) sendViaWhatsApp();
    });

    /* pré-remplissage : bourse ciblée (depuis les fiches bourses) */
    const hash = location.hash || "";
    if (hash.startsWith("#consultation")) {
      setTimeout(() => { const t = qs("#consultation"); if (t) t.scrollIntoView({ behavior: "smooth" }); }, 150);
      const m = hash.match(/bourse=([\w-]+)/);
      if (m) {
        const b = D.bourses.find((x) => x.id === m[1]);
        if (b) {
          const prec = form.elements["Précisions"];
          if (prec) prec.value = b.paysId === "russie"
            ? `Je souhaite être accompagné pour la bourse « ${b.titre} » (Russie).`
            : `Je m’intéresse à la bourse « ${b.titre} » (${b.pays}) et je souhaite être accompagné pour un projet d’études en Russie.`;
          KO.toast(`Bourse « ${b.titre} » ajoutée à votre demande`, "ok");
        }
      }
      const f = hash.match(/formule=([\wÀ-ÿ%20+]+)/);
      if (f) {
        const prec = form.elements["Précisions"];
        if (prec) prec.value = `Je souhaite être accompagné avec la formule « ${decodeURIComponent(f[1].replace(/\+|%20/g, " "))} ».`;
      }
    }
  }
})();
