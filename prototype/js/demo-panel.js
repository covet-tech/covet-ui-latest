/* COVET · review panel for the box page (REVIEW TOOL, NOT PART OF THE SITE)
   Active only with ?demo=1 in the URL, e.g. case.html?c=handbag&demo=1.
   The page and the whole opening flow stay exactly as customers see them;
   this only adds a small floating panel that decides the next pull's tier.
   Do not ship: remove this file and its <script> tag before launch. */
(function () {
  const params = new URLSearchParams(location.search);
  if (params.get("demo") !== "1") return;

  /* skip the 18+ gate and ID check so reviews run straight through */
  try { localStorage.setItem("covet_gate_ok", "1"); localStorage.setItem("covet_kyc_ok", "1"); } catch {}

  const boxId = params.get("c");
  const kase = getCase(boxId);
  if (!kase) return;
  const KEY = "covet_demo_tier";
  const tiers = ["auto", "signature", "reserve", "archive", "grail"];
  let tier = "auto";
  try { tier = sessionStorage.getItem(KEY) || "auto"; } catch {}
  if (tier !== "auto" && !kase.drops.some((d) => d.rarity === tier)) tier = "auto";

  /* force the tier of this box's pulls; every other roll stays real */
  const realRoll = rollDrop;
  window.rollDrop = (k, roll) => {
    if (roll == null && tier !== "auto" && k && k.id === kase.id) {
      const pool = k.drops.filter((d) => d.rarity === tier);
      if (pool.length) return pool[Math.floor(Math.random() * pool.length)];
    }
    return realRoll(k, roll);
  };

  const css = document.createElement("style");
  css.textContent = `
    .demo-panel { position: fixed; z-index: 90; right: max(14px, env(safe-area-inset-right, 0px)); bottom: max(14px, env(safe-area-inset-bottom, 0px));
      width: min(300px, calc(100vw - 28px)); background: var(--surface, #fff); color: var(--ink, #29192b);
      border: 2px dashed #8a6bd1; border-radius: 16px; padding: 12px 14px; box-shadow: 0 14px 34px rgba(41, 25, 43, 0.18);
      font: 13px/1.4 var(--sans, sans-serif); display: flex; flex-direction: column; gap: 9px; }
    .demo-panel .dp-tag { font: 700 9.5px var(--sans, sans-serif); letter-spacing: 0.14em; text-transform: uppercase; color: #8a6bd1; }
    .demo-panel .dp-row { display: flex; flex-wrap: wrap; gap: 6px; }
    .demo-panel .dp-chip { border: 1.5px solid var(--line-soft, #eee); background: transparent; color: var(--ink, #29192b); border-radius: 100px;
      padding: 6px 11px; font: 600 12px var(--sans, sans-serif); cursor: pointer; }
    .demo-panel .dp-chip.on { color: #fff; background: var(--c, #29192b); border-color: var(--c, #29192b); }
    .demo-panel .dp-chip:disabled { opacity: 0.35; cursor: default; }
    .demo-panel .dp-chip:focus-visible, .demo-panel select:focus-visible { outline: 2px solid #8a6bd1; outline-offset: 2px; }
    .demo-panel select { padding: 7px 10px; border-radius: 10px; border: 1px solid var(--line-soft, #eee); background: var(--bg, #fff); color: var(--ink, #29192b); font: inherit; }
    .demo-panel .dp-note { font-size: 11.5px; color: var(--muted, #777); }
    .demo-panel .dp-min { position: absolute; top: 8px; right: 10px; border: 0; background: none; cursor: pointer; color: var(--muted, #777); font-size: 15px; }
    .demo-panel.min > :not(.dp-tag):not(.dp-min) { display: none; }`;
  document.head.appendChild(css);

  const panel = document.createElement("aside");
  panel.className = "demo-panel";
  panel.setAttribute("aria-label", "Review panel");
  const label = (t) => (t === "auto" ? "By odds" : RARITY[t].label);
  const color = (t) => (t === "auto" ? "#29192b" : RARITY[t].color);
  panel.innerHTML = `
    <span class="dp-tag">Review tool · not part of the site</span>
    <button class="dp-min" type="button" aria-label="Minimize">–</button>
    <div>Next pull lands as:</div>
    <div class="dp-row">${tiers.map((t) => `<button type="button" class="dp-chip ${t === tier ? "on" : ""}" data-t="${t}" style="--c:${color(t)}"
      ${t !== "auto" && !kase.drops.some((d) => d.rarity === t) ? "disabled title='This box has no item in this tier'" : ""}>${label(t)}</button>`).join("")}</div>
    <label class="dp-note" for="dpBox">Box</label>
    <select id="dpBox">${CASES.map((c) => `<option value="${c.id}" ${c.id === kase.id ? "selected" : ""}>${c.name}</option>`).join("")}</select>
    <div class="dp-note">Everything else on this page is the real customer flow: pick a reveal style below the Unbox button, then unbox.</div>`;
  document.body.appendChild(panel);
  if (innerWidth < 600) panel.classList.add("min"); /* phones: start tucked away */

  panel.addEventListener("click", (e) => {
    const chip = e.target.closest(".dp-chip");
    if (chip && !chip.disabled) {
      tier = chip.dataset.t;
      try { sessionStorage.setItem(KEY, tier); } catch {}
      panel.querySelectorAll(".dp-chip").forEach((c) => c.classList.toggle("on", c === chip));
    }
    if (e.target.closest(".dp-min")) panel.classList.toggle("min");
  });
  panel.querySelector("#dpBox").addEventListener("change", (e) => {
    location.href = `case.html?c=${encodeURIComponent(e.target.value)}&demo=1`;
  });
})();
