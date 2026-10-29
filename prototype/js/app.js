/* COVET · shared shell: header, footer, wallet, modals, gate, ticker,
   confetti, wishlist hearts, giveaway shares, waitlist */

/* ---------- item glyphs ---------- */
function bottleSVG(size = 26) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 48 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="19" y="2" width="10" height="9" rx="1.5" stroke="currentColor" stroke-width="2"/>
    <path d="M21 11 L21 17 Q10 20 10 30 L10 54 Q10 60 16 60 L32 60 Q38 60 38 54 L38 30 Q38 20 27 17 L27 11" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
    <line x1="16" y1="38" x2="32" y2="38" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  </svg>`;
}
function bagSVG(size = 26) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 64 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M24 24 Q24 8 32 8 Q40 8 40 24" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M10 24 L54 24 L50 52 Q49.5 56 45 56 L19 56 Q14.5 56 14 52 Z" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/>
    <rect x="29" y="29" width="6" height="3.6" rx="1.2" stroke="currentColor" stroke-width="1.5"/>
  </svg>`;
}
function accessorySVG(size = 26) { /* sunglasses: the generic accessory */
  return `<svg width="${size}" height="${size}" viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="17" cy="22" r="11" stroke="currentColor" stroke-width="2.4"/>
    <circle cx="47" cy="22" r="11" stroke="currentColor" stroke-width="2.4"/>
    <path d="M28 20 Q32 16 36 20" stroke="currentColor" stroke-width="2.4" fill="none"/>
    <path d="M6 20 L2 14 M58 20 L62 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`;
}
function heelSVG(size = 26) { /* stiletto pump, side profile, toe left */
  return `<svg width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M6 50 Q6 44 14 44 L22 44 Q31 44 37 36 L47 21 Q51 16 55 19 L58 25 Q59 30 54 33 Q44 39 35 50 Q31 54 23 54 L11 54 Q6 54 6 50 Z" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/>
    <path d="M51 35 L54 58 M57 29 L58 58 M54 58 L58 58" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14 50 L28 50" stroke="currentColor" stroke-width="1.2" opacity="0.45"/>
  </svg>`;
}
function necklaceSVG(size = 26) { /* draped chain + pendant */
  return `<svg width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M10 8 Q32 40 54 8" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-dasharray="0.5 4.5"/>
    <line x1="32" y1="26" x2="32" y2="34" stroke="currentColor" stroke-width="1.8"/>
    <path d="M32 34 L39 42 L32 52 L25 42 Z" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/>
    <path d="M28.5 42 L35.5 42" stroke="currentColor" stroke-width="1.4" opacity="0.5"/>
  </svg>`;
}
function earringsSVG(size = 26) { /* a pair: hook + drop each */
  return `<svg width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M16 10 Q22 6 22 14" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="20" y1="14" x2="20" y2="26" stroke="currentColor" stroke-width="1.8"/>
    <circle cx="20" cy="36" r="9" stroke="currentColor" stroke-width="2.4"/>
    <path d="M42 10 Q48 6 48 14" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="46" y1="14" x2="46" y2="26" stroke="currentColor" stroke-width="1.8"/>
    <circle cx="46" cy="36" r="9" stroke="currentColor" stroke-width="2.4"/>
    <circle cx="17.5" cy="33.5" r="2" fill="currentColor" opacity="0.45"/>
    <circle cx="43.5" cy="33.5" r="2" fill="currentColor" opacity="0.45"/>
  </svg>`;
}
function braceletSVG(size = 26) { /* open bangle with ball ends */
  return `<svg width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M18 14 A 22 22 0 1 0 46 14" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <circle cx="18" cy="13" r="4.5" stroke="currentColor" stroke-width="2.2"/>
    <circle cx="46" cy="13" r="4.5" stroke="currentColor" stroke-width="2.2"/>
    <path d="M14 40 Q18 46 24 48" stroke="currentColor" stroke-width="1.4" opacity="0.4"/>
  </svg>`;
}
function jewelrySVG(drop, size = 26) {
  const hint = ((drop && (drop.conc || "")) + " " + (drop && (drop.name || ""))).toLowerCase();
  if (hint.includes("necklace") || hint.includes("pendant") || hint.includes("link")) return necklaceSVG(size);
  if (hint.includes("earring") || hint.includes("earstud") || hint.includes("stud")) return earringsSVG(size);
  return braceletSVG(size);
}
function itemSVG(drop, size = 26) {
  const k = drop && drop.kind;
  if (k === "bag") return bagSVG(size);
  if (k === "accessory") return accessorySVG(size);
  if (k === "jewelry") return jewelrySVG(drop, size);
  return bottleSVG(size);
}

/* ---------- wallet + shelf + giveaway state ---------- */
const LS_WALLET = "covet_wallet";
const LS_INV = "covet_inventory";
const LS_GATE = "covet_gate_ok";
const LS_ENTRIES = "covet_entries";

function getWallet() {
  const v = localStorage.getItem(LS_WALLET);
  return v == null ? 120 : parseFloat(v); /* seeded demo balance */
}
function setWallet(v) {
  localStorage.setItem(LS_WALLET, String(Math.round(v * 100) / 100));
  renderWallet();
}
/* saved payout methods (demo) */
const LS_METHODS = "covet_methods";
function getMethods() {
  try { return JSON.parse(localStorage.getItem(LS_METHODS)) || ["Visa •••• 4127 (original method)", "Bank transfer (ACH)"]; } catch { return ["Visa •••• 4127 (original method)"]; }
}
function addMethodModal() {
  openModal(`
    <span class="eyebrow">New payout method</span>
    <h2>Where should it land?</h2>
    <div class="addr-form" style="margin-bottom:16px">
      <div class="field"><label>Type</label><select id="nmType"><option>Bank account (ACH)</option><option>Debit card</option></select></div>
      <div class="field"><label>Nickname</label><input id="nmName" placeholder="Chase checking" maxlength="24" /></div>
      <div class="field"><label>Last 4 digits</label><input id="nmLast4" maxlength="4" placeholder="1234" /></div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-gold" onclick="saveNewMethod()">Save method</button>
      <button class="btn btn-quiet" onclick="openWithdrawModal()">Cancel</button>
    </div>
    <p class="micro after-note">Demo only: production collects this through the payment partner, never on Covet.</p>
  `);
}
function saveNewMethod() {
  const type = document.getElementById("nmType").value.includes("card") ? "Debit" : "ACH";
  const name = (document.getElementById("nmName").value || "New method").replace(/[<>&"]/g, "").trim();
  const last4 = (document.getElementById("nmLast4").value || "0000").replace(/\D/g, "").slice(0, 4);
  const list = getMethods();
  list.push(`${name} •••• ${last4} (${type})`);
  localStorage.setItem(LS_METHODS, JSON.stringify(list));
  openWithdrawModal();
}

/* withdrawals unlock with the first purchase on the account */
const LS_DEPOSITED = "covet_deposited";
function hasDeposited() { return localStorage.getItem(LS_DEPOSITED) === "1"; }

/* free-box farming guard: her first free pull ships on us; shipping the
   next ones unlocks with her first purchase. Credit always works. */
const LS_FREE_SHIPS = "covet_free_ships";
function freeShipsUsed() { return parseInt(localStorage.getItem(LS_FREE_SHIPS) || "0", 10); }
function bumpFreeShips() { localStorage.setItem(LS_FREE_SHIPS, String(freeShipsUsed() + 1)); }
function isFreeCaseId(caseId) { const k = getCase(caseId); return !!(k && k.free); }
/* free-box commons (candles, incense) go out by plain mail, no tracking number */
function isUntrackedDrop(caseId, dropId) {
  if (!isFreeCaseId(caseId)) return false;
  const d = getCase(caseId).drops.find((x) => x.id === dropId);
  return !!d && d.rarity !== "grail";
}
const UNTRACKED_NOTE = "Free box commons ship without tracking, usually arriving within 7 to 10 business days.";
function freeShipGate() {
  if (hasDeposited() || freeShipsUsed() < 1) return false;
  openModal(`
    <span class="eyebrow">Free box</span>
    <h2>Your first one shipped on us ♥</h2>
    <p class="modal-sub">Shipping for your next free pulls unlocks with your first box purchase. Until then it waits safe on your shelf, or trade it for credit toward that first box any time.</p>
    <div class="modal-actions">
      <a class="btn btn-gold" href="cases.html">Browse the boxes</a>
      <button class="btn btn-quiet" onclick="closeModal()">Keep it on my shelf</button>
    </div>
  `);
  return true;
}

/* free-box buyback credit is box credit: it spends on boxes, and only
   becomes transferable once it has been used in a purchase. Opening a
   box unlocks that much credit dollar-for-dollar. */
const LS_LOCKED = "covet_locked_credit";
function getLocked() {
  const v = parseFloat(localStorage.getItem(LS_LOCKED));
  return Math.min(isNaN(v) ? 0 : v, getWallet());
}
function setLocked(v) {
  localStorage.setItem(LS_LOCKED, String(Math.max(0, Math.round(v * 100) / 100)));
}
function spendOnBox(price) {
  setWallet(getWallet() - price);
  setLocked(getLocked() - price);
}

/* saved shipping address: collected once, editable anywhere it appears */
const LS_ADDR = "covet_address";
function getAddr() {
  try { return JSON.parse(localStorage.getItem(LS_ADDR)); } catch { return null; }
}
let _addrNext = null;
function requireAddress(next) {
  if (getAddr()) { next(); return; }
  openAddressModal(next);
}
function openAddressModal(next) {
  if (next) _addrNext = next;
  const a = getAddr() || {};
  openModal(`
    <span class="eyebrow">Shipping address</span>
    <h2>Where's it headed? ♥</h2>
    <div class="addr-form">
      <div class="field"><label>Full name</label><input id="adName" value="${a.name || ""}" placeholder="Riley Covet" /></div>
      <div class="field"><label>Street address</label><input id="adStreet" value="${a.street || ""}" placeholder="400 W 14th St" /></div>
      <div class="field"><label>Apt, suite (optional)</label><input id="adApt" value="${a.apt || ""}" placeholder="Apt 6B" /></div>
      <div class="addr-row">
        <div class="field" style="flex:2"><label>City</label><input id="adCity" value="${a.city || ""}" placeholder="New York" /></div>
        <div class="field" style="flex:1"><label>State</label><input id="adState" value="${a.state || ""}" maxlength="2" placeholder="NY" /></div>
        <div class="field" style="flex:1"><label>ZIP</label><input id="adZip" value="${a.zip || ""}" maxlength="10" placeholder="10014" /></div>
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-gold" onclick="saveAddressForm()">Save address</button>
      <button class="btn btn-quiet" onclick="closeModal()">Cancel</button>
    </div>
    <p class="micro after-note">All US addresses, Puerto Rico included. Saved for next time, editable whenever.</p>
  `);
}
function saveAddressForm() {
  const g = (id) => (document.getElementById(id)?.value || "").replace(/[<>&"]/g, "").trim();
  const a = { name: g("adName"), street: g("adStreet"), apt: g("adApt"), city: g("adCity"), state: g("adState").toUpperCase(), zip: g("adZip") };
  if (!a.name || !a.street || !a.city || !a.state || !a.zip) {
    document.querySelector(".addr-form").classList.add("addr-missing");
    return;
  }
  localStorage.setItem(LS_ADDR, JSON.stringify(a));
  const next = _addrNext; _addrNext = null;
  closeModal();
  if (next) setTimeout(next, 420);
}
function addrLine() {
  const a = getAddr();
  return a ? `${a.name} · ${a.street}${a.apt ? ", " + a.apt : ""}, ${a.city}, ${a.state} ${a.zip}` : "";
}

/* one-time identity check, once per account, at whichever comes first:
   the first free box or the first shipment (bank transfers are not in the MVP) */
const LS_KYC = "covet_kyc_ok";
function hasKyc() { return localStorage.getItem(LS_KYC) === "1"; }
let _kycNext = null;
function requireKyc(next) {
  if (hasKyc()) { next(); return; }
  _kycNext = next;
  openModal(`
    <span class="eyebrow">One quick thing</span>
    <h2>Let's make sure<br>it's really you ♥</h2>
    <p class="modal-sub">Before you do that, we verify your ID once. It's quick, and we won't ask again.</p>
    <div class="modal-actions">
      <button class="btn btn-gold" onclick="demoKycRun()">Verify me</button>
      <button class="btn btn-quiet" onclick="closeModal()">Not now</button>
    </div>
  `);
}
function demoKycRun() {
  openModal(`
    <span class="eyebrow">Verifying</span>
    <h2>One sec ♥</h2>
    <p class="modal-sub">Checking with our verification partner… (instant in the demo)</p>
  `, { locked: true });
  setTimeout(() => {
    localStorage.setItem(LS_KYC, "1");
    const next = _kycNext; _kycNext = null;
    closeModal();
    if (next) setTimeout(next, 420);
  }, 1200);
}

function getInv() {
  try { return JSON.parse(localStorage.getItem(LS_INV)) || []; } catch { return []; }
}
function setInv(list) {
  localStorage.setItem(LS_INV, JSON.stringify(list));
}
function txnId() {
  /* public id for every roll; production keys the full round record with it */
  return "CVT-" + (Date.now().toString(36) + Math.floor(Math.random() * 46656).toString(36)).toUpperCase().slice(-6);
}
function addPull(kase, drop) {
  reserveStock(drop); /* hold the unit the moment the roll lands */
  const list = getInv();
  list.unshift({
    uid: "p" + Date.now() + Math.floor(Math.random() * 999),
    txn: txnId(),
    caseId: kase.custom ? "custom" : kase.id, dropId: drop.id,
    boxName: kase.name,
    odds: drop.odds,
    seed: localStorage.getItem("covet_client_seed") || "",
    status: "vault",
    ts: new Date().toISOString().slice(0, 10),
  });
  setInv(list);
}
function renderWallet() {
  document.querySelectorAll("[data-wallet]").forEach((el) => (el.textContent = money(getWallet())));
}
function getEntries() {
  const v = localStorage.getItem(LS_ENTRIES);
  if (v == null) { localStorage.setItem(LS_ENTRIES, "12"); return 12; } /* welcome entries */
  return parseInt(v, 10);
}
function addEntries(n) {
  localStorage.setItem(LS_ENTRIES, String(getEntries() + n));
  return getEntries();
}
/* daily free entry: one click per day, no purchase needed */
const LS_DAILY = "covet_daily_entry";
function canClaimDaily() {
  return localStorage.getItem(LS_DAILY) !== new Date().toISOString().slice(0, 10);
}
/* daily free box: one open per day across all three options */
const LS_DAILYBOX = "covet_daily_box";
/* discovery cap: 3 lifetime free opens before her first purchase.
   The free box is how she discovers the site; a purchase unlocks it daily forever. */
const FREE_OPEN_CAP = 3;
const LS_FREE_OPENS = "covet_free_opens";
function freeOpensUsed() { return parseInt(localStorage.getItem(LS_FREE_OPENS) || "0", 10); }
function freeCapReached() { return !hasDeposited() && freeOpensUsed() >= FREE_OPEN_CAP; }
function canClaimDailyBox() {
  if (freeCapReached()) return false;
  return localStorage.getItem(LS_DAILYBOX) !== new Date().toISOString().slice(0, 10);
}
function markDailyBox() {
  localStorage.setItem(LS_DAILYBOX, new Date().toISOString().slice(0, 10));
  localStorage.setItem(LS_FREE_OPENS, String(freeOpensUsed() + 1));
  bumpStreak();
}
function openFreeCapModal() {
  openModal(`
    <span class="eyebrow">Free boxes</span>
    <h2>Three on us. The rest is on you ♥</h2>
    <p class="modal-sub">You've opened your ${FREE_OPEN_CAP} free boxes, so you know exactly how this works. Open any box, even the smallest one, and the daily free box unlocks forever, streaks and all.</p>
    <div class="modal-actions">
      <a class="btn btn-gold" href="cases.html">Browse the boxes</a>
      <button class="btn btn-quiet" onclick="closeModal()">Maybe later</button>
    </div>
    <p class="micro after-note">Your giveaway entries and streak are saved right where you left them.</p>
  `);
}
/* daily streak: consecutive days she's opened her free box */
const LS_STREAK = "covet_streak";
function getStreakRaw() {
  try {
    const st = JSON.parse(localStorage.getItem(LS_STREAK));
    if (st) return st;
    /* backfill: she claimed a daily box before streaks existed */
    const last = localStorage.getItem(LS_DAILYBOX);
    if (last) { const seed = { count: 1, last }; localStorage.setItem(LS_STREAK, JSON.stringify(seed)); return seed; }
    return { count: 0, last: "" };
  } catch { return { count: 0, last: "" }; }
}
/* days between two dates that were covered by a program pause: those
   days are forgiven, so pausing the dailies never breaks anyone's streak */
function pausedDaysBetween(fromDate, toDate) {
  try {
    const log = getDailyOverrides().pauseLog || [];
    const from = new Date(fromDate + "T00:00:00Z").getTime();
    const to = new Date(toDate + "T00:00:00Z").getTime();
    let n = 0;
    for (const w of log) {
      const ws = new Date(w.from + "T00:00:00Z").getTime();
      const we = w.to ? new Date(w.to + "T00:00:00Z").getTime() : to;
      const a = Math.max(from, ws), b = Math.min(to, we);
      if (b > a) n += Math.round((b - a) / 864e5);
    }
    return n;
  } catch { return 0; }
}
function streakGap(last, today) {
  /* a pause FREEZES the streak until her next open: if a pause began after
     her last open and she hasn't opened since, only the live days between
     her last open and the pause start can break the streak. Days during
     the pause AND after resume stay forgiven until she opens again. */
  try {
    const log = (getDailyOverrides().pauseLog || []).filter((w) => w.from >= last).sort((a, b) => (a.from < b.from ? -1 : 1));
    if (log.length) {
      return Math.round((new Date(log[0].from + "T00:00:00Z") - new Date(last + "T00:00:00Z")) / 864e5);
    }
  } catch {}
  const raw = Math.round((new Date(today + "T00:00:00Z") - new Date(last + "T00:00:00Z")) / 864e5);
  return raw - pausedDaysBetween(last, today);
}
function bumpStreak() {
  const today = new Date().toISOString().slice(0, 10);
  const st = getStreakRaw();
  if (st.last === today) return st.count;
  st.count = st.last && streakGap(st.last, today) <= 1 ? st.count + 1 : 1;
  st.last = today;
  localStorage.setItem(LS_STREAK, JSON.stringify(st));
  return st.count;
}
function streakDays() {
  const today = new Date().toISOString().slice(0, 10);
  const st = getStreakRaw();
  return st.last && streakGap(st.last, today) <= 1 ? st.count : 0;
}
function refreshDailyCta() {
  const claimed = !canClaimDaily();
  document.querySelectorAll("[data-dailycta]").forEach((b) => {
    b.textContent = claimed ? "Claimed · back tomorrow" : `Claim today's 5 free ${entriesWord(5)}`;
    b.disabled = claimed;
  });
  const ge = document.getElementById("giveEntries");
  if (ge) ge.textContent = getEntries();
}
function claimDaily() {
  if (!canClaimDaily()) return;
  localStorage.setItem(LS_DAILY, new Date().toISOString().slice(0, 10));
  const n = addEntries(5);
  refreshDailyCta();
  confettiBurst();
  openModal(`
    <span class="eyebrow">Claimed</span>
    <h2>5 more entries, yours</h2>
    <p class="modal-sub">That's ${n} entries in the draw for ${GIVEAWAY.prize}. Come back tomorrow for 5 more.</p>
    <div class="modal-actions">
      <a class="btn btn-gold" href="build.html">Browse while you're here</a>
      <button class="btn btn-quiet" onclick="closeModal()">Done</button>
    </div>
  `);
}

/* ---------- holiday themes: ops-switched event skins ---------- */
const HOLIDAYS = {
  christmas:  { label: "Christmas",     flake: "\u2744",        n: 22, entry: "cookie",  entries: "cookies" },
  halloween:  { label: "Halloween",     flake: "\ud83c\udf83", n: 9,  entry: "pumpkin", entries: "pumpkins" },
  stpatricks: { label: "St. Patrick's", flake: "\u2618\ufe0f", n: 14, entry: "clover",  entries: "clovers" },
};
function holidayTheme() { try { return localStorage.getItem("covet_holiday") || ""; } catch { return ""; } }
function entriesWord(n) {
  const h = HOLIDAYS[holidayTheme()];
  return h ? (n === 1 ? h.entry : h.entries) : (n === 1 ? "entry" : "entries");
}
/* swap "entries" for the themed word inside event-y surfaces only */
function themeEntryWords() {
  const h = HOLIDAYS[holidayTheme()];
  if (!h) return;
  document.querySelectorAll(".gw-banner, [data-dailycta], .overlay .modal, .streak-panel").forEach((root) => {
    const walk = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walk.nextNode())) {
      if (/entr(y|ies)/.test(node.nodeValue)) {
        node.nodeValue = node.nodeValue.replace(/entries/g, h.entries).replace(/entry/g, h.entry);
      }
    }
  });
}
function applyHoliday() {
  const key = holidayTheme(), h = HOLIDAYS[key];
  if (!h) return;
  document.body.setAttribute("data-holiday", key);
  const fall = document.createElement("div");
  fall.className = "holiday-fall";
  fall.setAttribute("aria-hidden", "true");
  let spans = "";
  for (let i = 0; i < h.n; i++) {
    const left = (i * 97) % 100, size = 11 + ((i * 53) % 12);
    const dur = 10 + ((i * 31) % 12), delay = -((i * 77) % 20);
    spans += `<span style="left:${left}%;font-size:${size}px;animation-duration:${dur}s;animation-delay:${delay}s">${h.flake}</span>`;
  }
  fall.innerHTML = spans;
  document.body.appendChild(fall);
  themeEntryWords();
}

/* ---------- shell injection ---------- */
function renderShell(active) {
  const header = `
    <div class="shell">
      <a class="wordmark" href="index.html">Cov<span>et</span></a>
      <nav class="site-nav">
        <a href="index.html" ${active === "home" ? 'class="active"' : ""}>Home</a>
        <a href="cases.html" ${active === "cases" ? 'class="active"' : ""}>Boxes</a>
        <a href="build.html" ${active === "build" ? 'class="active"' : ""}>Wishlist</a>
        <a href="inventory.html" ${active === "inventory" ? 'class="active"' : ""}>My Shelf</a>
        <a href="creators.html" ${active === "creators" ? 'class="active"' : ""}>Creators</a>
        <a href="profile.html" ${active === "profile" ? 'class="active"' : ""}>Profile</a>
      </nav>
      ${isSignedIn() ? "" : `<button class="head-auth" onclick="openAuthModal('in')">Sign in</button>`}
      <div class="wallet-chip">
        <button class="wc-bal" onclick="openWalletModal()">
          <span data-wallet></span>
        </button>
        <button class="wc-add" onclick="openAddFundsModal()" aria-label="Add funds">+</button>
      </div>
    </div>`;
  const footer = `
    <div class="shell">
      <div class="foot-grid">
        <div class="foot-brand">
          <a class="wordmark" href="index.html" style="font-size:19px">Cov<span>et</span></a>
          <p class="micro" style="margin-top:14px;max-width:30ch;color:rgba(255,255,255,0.55)">Every box holds something real. Ship it or sell it back.</p>
          <p class="foot-vow">♥ Every piece real and authenticated, always.</p>
          <button class="btn foot-support" onclick="openSupportModal()"><span class="fs-dot"></span> Live support · we're here</button>
          <p class="micro" style="margin-top:10px;color:rgba(255,255,255,0.45)">or <a href="mailto:support@covet.gg" style="color:inherit">support@covet.gg</a></p>
          <div class="foot-social">
            <a href="https://tiktok.com/@covet.gg" target="_blank" rel="noopener">TikTok</a>
            <a href="https://instagram.com/covet.gg" target="_blank" rel="noopener">Instagram</a>
          </div>
          <span class="age-badge">18+</span>
        </div>
        <div class="foot-col">
          <h5>Shop</h5>
          <a href="cases.html">The Boxes</a>
          <a href="build.html">My Wishlist</a>
          <a href="inventory.html">My Shelf</a>
          <a href="index.html#giveaway">${gwTerms().ThisP} Giveaway</a>
        </div>
        <div class="foot-col">
          <h5>Covet</h5>
          <a href="creators.html">Creators</a>
          <a href="fairness.html">Provably Fair</a>
          <a href="faq.html">FAQ</a>
          <a href="#" onclick="openShippingModal();return false">Shipping</a>
          <a href="buyback-policy.html">Buyback Policy</a>
          <a href="odds-disclosure.html">Odds Disclosure</a>
        </div>
        <div class="foot-col">
          <h5>Fine Print</h5>
          <a href="terms.html">Terms</a>
          <a href="privacy.html">Privacy</a>
          <a href="giveaway-rules.html">Giveaway Rules</a>
          <a href="modals.html" style="opacity:0.55">Modals</a>
          <a href="admin.html" style="opacity:0.55">Ops</a>
        </div>
      </div>
      <div class="foot-legal">
        <p>Covet is a retail experience. Every box is the purchase of one genuine, sealed product of a stated minimum value, selected at random from a published odds table. All items are verified authentic before listing. Our instant buyback is a repurchase offer at the price shown, credited to your balance. Buyback offers on free and promotional boxes are reduced and capped; your first free pull ships on us and further free-pull shipping unlocks with your first purchase; free-pull credit is spendable on boxes only until used in a purchase. Box opens are final; unspent deposits are refundable to your original payment method (see FAQ). ${gwTerms().Adj} giveaways require no purchase; see rules for a free entry route. If a revealed item becomes unavailable before fulfillment, you choose: your balance credited the item's full listed value, or the box price refunded to your original payment method.</p>
        <p>Available to residents 18 and older (19+ in Alabama and Nebraska). Not available in certain states and regions where randomized retail products are restricted. See <a href="terms.html" style="color:inherit;text-decoration:underline">who can use Covet</a> before purchase. © 2026 SD1 Entertainment LLC, doing business as Covet. All trademarks are property of their respective houses; Covet is an independent retailer and is not affiliated with any brand featured.</p>
      </div>
    </div>`;
  const h = document.querySelector(".site-head");
  const f = document.querySelector(".site-foot");
  if (h) h.innerHTML = header;
  if (f) f.innerHTML = footer;
  /* static pages mark weekly/monthly words with data-gw="<key of gwTerms()>" */
  const gw = gwTerms();
  document.querySelectorAll("[data-gw]").forEach((el) => { if (gw[el.dataset.gw]) el.textContent = gw[el.dataset.gw]; });
  /* dev-only: reset chip, top left. Click = reset daily claims. Shift-click = wipe everything. */
  document.body.insertAdjacentHTML("beforeend",
    `<button class="dev-reset" onclick="devReset(event)" title="Click: reset daily claims · Shift-click: full wipe">↺ reset</button>`);
  renderWallet();
}

/* ---------- box cards (home + boxes grid) ---------- */
function caseCardHTML(c) {
  const sorted = [...c.drops].sort((a, b) => b.value - a.value);
  const top3 = sorted.slice(0, 3);
  return `
  <a class="case-card" href="case.html?c=${c.id}" style="--tint:${c.tint}">
    <div class="cc-top"><span class="case-num">No. ${c.numeral}</span><span class="cc-price-wrap"><span class="cc-price">${money(c.price)}</span><span class="cc-toppull">top pull ${money(sorted[0].value)}</span></span></div>
    <h3>${c.short}</h3>
    <p class="cc-get">One of ${c.drops.length} real ${c.noun || (c.drops.filter((d) => !d.kind).length >= c.drops.length / 2 ? "bottles" : "pieces")} ships to you. Could be:</p>
    <div class="cc-drops">
      ${top3.map((d) => {
        const r = RARITY[d.rarity];
        return `<div class="cc-drop" style="--rar:${r.color}">${productArt(d, 40)}<span>${d.name}</span><b>${money(d.value)}</b></div>`;
      }).join("")}
    </div>
    <div class="cc-vals"><span>${money(Math.min(...c.drops.map((d) => buybackFor(c, d))))}+ back, guaranteed</span><span>Instant buyback, every pull</span></div>
    <span class="btn btn-gold">Unbox for ${money(c.price)}</span>
  </a>`;
}

/* ---------- wishlist hearts ---------- */
function heartBtn(dropId, size = "") {
  const drop = allDrops().find((d) => d.id === dropId);
  if (drop && drop.dtc) return "";
  const on = getWishlist().includes(canonicalId(dropId));
  return `<button class="heart-btn ${size} ${on ? "on" : ""}" onclick="event.preventDefault();event.stopPropagation();onHeart('${dropId}', this)" aria-label="Wishlist">${on ? "♥" : "♡"}</button>`;
}
function onHeart(dropId, el) {
  const state = toggleWishlist(dropId);
  if (state === null) {
    openModal(`
      <span class="eyebrow">Wishlist full</span>
      <h2>Eight is the limit</h2>
      <p class="modal-sub">A wishlist box holds up to 8 loves. Un-heart something first, or unbox this list as it is.</p>
      <div class="modal-actions">
        <a class="btn btn-gold" href="case.html?c=custom">Unbox my wishlist</a>
        <button class="btn btn-quiet" onclick="closeModal()">Okay</button>
      </div>`);
    return;
  }
  el.classList.toggle("on", state);
  el.textContent = state ? "♥" : "♡";
  el.animate([{ transform: "scale(1)" }, { transform: "scale(1.45)" }, { transform: "scale(1)" }], { duration: 350, easing: "cubic-bezier(0.34,1.56,0.64,1)" });
  refreshWishStats();
}

/* live wishlist stats shown anywhere on the site */
function refreshWishStats() {
  const ids = getWishlist();
  const box = wishlistBoxFrom(ids);
  document.querySelectorAll("[data-wishcount]").forEach((n) => (n.textContent = ids.length));
  document.querySelectorAll("[data-wishprice]").forEach((n) => (n.textContent = box ? money(box.price) : "·"));
  document.querySelectorAll("[data-wishcta]").forEach((b) => {
    b.textContent = "Build my wishlist";
    b.setAttribute("href", "build.html");
  });
}

/* ---------- confetti ---------- */
/* falling confetti: pieces drift down from the top of the screen */
function confettiBurst(colors = ["#e0417c", "#ffb3c9", "#eeb020", "#ffffff"]) {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  for (let i = 0; i < 36; i++) {
    const c = document.createElement("div");
    c.className = "confetti-piece";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = colors[i % colors.length];
    c.style.animationDuration = 1.6 + Math.random() * 1.4 + "s";
    c.style.animationDelay = Math.random() * 0.4 + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3600);
  }
}

/* reveal finished → result card, with the rarity shown in the background:
   the backdrop washes in the tier's color and the tier name sits above the
   card (every reveal style). One moment, not a separate step. */
function revealResult(kase, drop, opts) {
  openResultModal(kase, drop, opts);
}
/* the tier name always sits above the white card, in the normal flow: the
   pair centers together on tall screens and scrolls together on short ones */
function addRarityBackdrop(ov, drop) {
  const rar = RARITY[drop.rarity] || RARITY.reserve;
  ov.classList.add("rarity-ov");
  ov.style.setProperty("--rar", rar.color);
  ov.insertAdjacentHTML("afterbegin", `<div class="rarity-word" aria-hidden="true">${rar.label}</div>`);
}

/* ---------- modal system ---------- */
let activeOverlay = null;
function openModal(html, opts = {}) {
  closeModal();
  const ov = document.createElement("div");
  ov.className = "overlay";
  ov.innerHTML = `<div class="modal" style="${opts.style || ""}">
    ${opts.locked ? "" : '<button class="modal-close" onclick="closeModal()" aria-label="Close">×</button>'}
    ${html}
  </div>`;
  if (!opts.locked) ov.addEventListener("click", (e) => { if (e.target === ov) closeModal(); });
  document.body.appendChild(ov);
  requestAnimationFrame(() => requestAnimationFrame(() => ov.classList.add("show")));
  activeOverlay = ov;
  return ov;
}
function closeModal() {
  if (!activeOverlay) return;
  const ov = activeOverlay;
  activeOverlay = null;
  ov.classList.remove("show");
  setTimeout(() => ov.remove(), 400);
}

/* ---------- pull result modal ---------- */
function openResultModal(kase, drop, opts = {}) {
  const rar = RARITY[drop.rarity];
  const sparkle = "";
  confettiBurst([rar.color, "#ffb3c9", "#eeb020", "#ffffff"]);
  const ov = openModal(`
    <div class="result-glow" style="--rar:${rar.color}"></div>
    <span class="eyebrow" style="color:${rar.color}">${sparkle}${drop.odds}% pull<span class="sr-only"> · ${rar.label}</span></span>
    <div class="result-bottle" style="--rar:${rar.color}">${productArt(drop, 68)}</div>
    <h2>${drop.house}<br><em style="font-style:italic;font-weight:320">${drop.name}</em></h2>
    <p class="modal-sub">${drop.conc} · ${drop.size}${drop.kind === "bag" ? "" : " · sealed and authenticated"}</p>
    <div class="value-row" style="--rar:${rar.color}">
      <div><small>Market value</small><b>${money(drop.value)}</b></div>
      <div><small>Instant buyback</small><b style="color:var(--gold)">${money(buybackFor(kase, drop))}</b></div>
    </div>
    ${opts.entries ? `<p class="result-entries">♥ +${opts.entries} giveaway ${entriesWord(opts.entries)} banked · you're in Sunday's draw with <b>${getEntries()}</b></p>` : ""}
    ${(() => {
      /* free-box commons: the credit trade leads. Fillers are cute but the
         smart move (for her and for us) is stacking credit toward a real box. */
      const ship = opts.onShip || "shipFromResult()";
      const sell = opts.onSell || `openSellModal('${kase.custom ? "custom" : kase.id}','${drop.id}')`;
      const offer = money(buybackFor(kase, drop));
      /* fixed sides: Ship always left, buyback always right.
         Only the gold emphasis moves (credit leads on free commons). */
      const freeCommon = kase.free && drop.rarity === "signature";
      return `<div class="modal-actions">
            <button class="btn ${freeCommon ? "btn-ghost" : "btn-gold"}" onclick="${ship}">Ship it · free</button>
            <button class="btn ${freeCommon ? "btn-gold" : "btn-ghost"}" onclick="${sell}">${freeCommon ? `Trade for ${offer} credit · instant` : `Sell back ${offer}`}</button>
          </div>`;
    })()}
    ${opts.onAgain ? `<div style="margin-top:14px"><button class="btn btn-quiet" style="width:100%" onclick="${opts.onAgain}">Unbox another · ${money(kase.price)}</button></div>` : ""}
    <p class="micro after-note">${kase.free && drop.rarity === "signature"
      ? "Free-pull credit stacks every single day. A week of little trades opens a real box."
      : "Undecided? It waits on your shelf. Both options stay open."}</p>
    <p class="micro" style="margin-top:6px"><a href="fairness.html" style="color:var(--gold);text-decoration:none">verify this pull ↗</a></p>
  `);
  addRarityBackdrop(ov, drop);
  themeEntryWords();
}

/* ---------- shared reveal reel (case page + daily popup) ---------- */
const REEL_CARD_W = 132, REEL_GAP = 12, REEL_TILES = 72, REEL_WIN_INDEX = 62;
function reelTileHTML(drop) {
  const rar = RARITY[drop.rarity];
  return `<div class="reel-card" style="--rar:${rar.color}" data-drop="${drop.id}">
    ${productArt(drop, 52)}
    <div>
      <div class="rc-house">${drop.house}</div>
      <div class="rc-name">${drop.name}</div>
    </div>
    <div class="rc-tier" style="color:${rar.color}">${rar.label}</div>
  </div>`;
}
/* display-only sampling for the reel strip: flattens the odds so the
   dream items fly past constantly. The OUTCOME still uses true odds
   (rollDrop); this only decides what the spectator tiles show. */
function sampleShowDrop(kase, prev) {
  const weights = kase.drops.map((d) => Math.sqrt(d.odds) + 1.5);
  for (let attempt = 0; attempt < 2; attempt++) {
    let r = Math.random() * weights.reduce((a, b) => a + b, 0);
    for (let i = 0; i < kase.drops.length; i++) {
      r -= weights[i];
      if (r <= 0) {
        if (kase.drops[i] === prev && attempt === 0) break; /* re-roll doubles once */
        return kase.drops[i];
      }
    }
  }
  return kase.drops[kase.drops.length - 1];
}
function buildReelInto(reel, kase, winner) {
  const tiles = [];
  for (let i = 0; i < REEL_TILES; i++) {
    tiles.push(i === REEL_WIN_INDEX && winner ? winner : sampleShowDrop(kase, tiles[i - 1]));
  }
  reel.classList.remove("settled");
  reel.style.transition = "none";
  reel.style.transform = "translateX(0)";
  reel.innerHTML = tiles.map(reelTileHTML).join("");
  return reel;
}
function runReelSpin(reel, windowEl, onDone) {
  const step = REEL_CARD_W + REEL_GAP;
  const windowW = windowEl.offsetWidth;
  /* land the needle inside the winning card, off-center for organic feel */
  const jitter = (Math.random() * 0.64 - 0.32) * REEL_CARD_W;
  const target = REEL_WIN_INDEX * step + REEL_CARD_W / 2 - windowW / 2 + jitter;
  requestAnimationFrame(() => requestAnimationFrame(() => {
    reel.style.transition = "transform 6.4s cubic-bezier(0.08, 0.72, 0.12, 1)";
    reel.style.transform = `translateX(${-target}px)`;
  }));
  /* magnet pass: the card under the needle lifts as the reel flies by */
  let rafId;
  const needleTrack = () => {
    const m = new DOMMatrixReadOnly(getComputedStyle(reel).transform).m41;
    const centered = Math.round((-m + windowW / 2 - REEL_CARD_W / 2) / step);
    [...reel.children].forEach((c, i) => c.classList.toggle("near", i === centered));
    rafId = requestAnimationFrame(needleTrack);
  };
  rafId = requestAnimationFrame(needleTrack);
  reel.addEventListener("transitionend", function done(e) {
    /* magnet-pass cards fire bubbling transitionends; only the reel's own transform matters */
    if (e.target !== reel || e.propertyName !== "transform") return;
    reel.removeEventListener("transitionend", done);
    cancelAnimationFrame(rafId);
    [...reel.children].forEach((c) => c.classList.remove("near"));
    reel.classList.add("settled");
    reel.children[REEL_WIN_INDEX].classList.add("hit");
    setTimeout(onDone, 850);
  });
}

/* ---------- pending open: set the instant she pays or claims, cleared on
   reveal. If she closes mid-reveal, the next page load finishes the open
   to her shelf, so a paid-but-nothing state can never exist (and never
   becomes a chargeback). Production: the server owns this transaction. */
const LS_PENDING = "covet_pending_open";
function setPendingOpen(kaseId, paid) {
  localStorage.setItem(LS_PENDING, JSON.stringify({ id: kaseId, paid: paid || 0 }));
}
function clearPendingOpen() { localStorage.removeItem(LS_PENDING); }
function resolvePendingOpen() {
  let pend = null;
  try { pend = JSON.parse(localStorage.getItem(LS_PENDING)); } catch { return; }
  if (!pend) return;
  clearPendingOpen();
  const kase = getCase(pend.id);
  if (!kase) return;
  const winner = rollDrop(kase);
  addPull(kase, winner);
  if (pend.paid) addEntries(Math.floor(pend.paid));
  openModal(`
    <span class="eyebrow">While you were away</span>
    <h2>Your box couldn't wait ♥</h2>
    <p class="modal-sub">The reveal finished on its own: your <b style="color:var(--ink)">${winner.house} ${winner.name}</b> is safe on your shelf, both options open.</p>
    <div class="modal-actions">
      <a class="btn btn-gold" href="inventory.html">View my shelf</a>
      <button class="btn btn-quiet" onclick="closeModal()">Done</button>
    </div>
  `);
}

/* ---------- reveal styles: pick / spin / peel, switchable ---------- */
const REVEAL_MODES = [["pick", "Pick a Box"], ["spin", "Classic Spin"], ["peel", "Slow Unwrap"], ["vault", "The Vault"]];
function revealMode() {
  const m = localStorage.getItem("covet_reveal");
  return REVEAL_MODES.some(([k]) => k === m) ? m : "pick";
}
function setRevealMode(m) { localStorage.setItem("covet_reveal", m); renderRevealModes(); }
function renderRevealModes() {
  document.querySelectorAll(".reveal-modes").forEach((host) => {
    host.innerHTML = `<span class="rm-label">Reveal style</span>` + REVEAL_MODES.map(([k, label]) =>
      `<button class="rm-pill ${revealMode() === k ? "on" : ""}" onclick="setRevealMode('${k}')">${label}</button>`).join("");
  });
}

/* ---------- The Slow Unwrap: tap-to-peel tissue, item ghosts into view.
   Anticipation-dopamine + information-gap + IKEA effect: her own hands,
   her own pace, a silhouette that sharpens with every layer. ---------- */
function playTissuePeel(kase, cb) {
  const ov = document.createElement("div");
  ov.className = "gift-pop peelstage";
  let winner = null, layer = 0;
  ov.innerHTML = `
    <div class="peel-wrap">
      <p class="pick-title">Yours is <em>inside.</em></p>
      <div class="peel-stack" role="button" aria-label="Open it">
        <div class="pg-item"></div>
        <span class="peel-ring"></span>
        <div class="pg-wrap">
          <span class="sheetL"><svg viewBox="0 0 260 190" width="185" xmlns="http://www.w3.org/2000/svg">
            <defs><filter id="crumpA" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.009 0.014" numOctaves="3" seed="7" result="noise"/>
              <feDiffuseLighting in="noise" lighting-color="#f4cdd6" surfaceScale="5" diffuseConstant="1.12" result="diff"><feDistantLight azimuth="225" elevation="58"/></feDiffuseLighting>
              <feSpecularLighting in="noise" lighting-color="#ffffff" surfaceScale="6" specularConstant="0.5" specularExponent="14" result="spec"><feDistantLight azimuth="225" elevation="58"/></feSpecularLighting>
              <feComposite in="diff" in2="SourceGraphic" operator="in" result="diffc"/>
              <feComposite in="spec" in2="SourceGraphic" operator="in" result="specc"/>
              <feBlend in="diffc" in2="SourceGraphic" mode="multiply" result="base"/>
              <feBlend in="specc" in2="base" mode="screen"/>
            </filter></defs>
            <path d="M22 152 C4 128 12 92 40 84 C34 50 66 28 96 42 C106 12 152 8 172 32 C198 12 238 28 236 60 C258 74 258 112 238 130 C248 158 218 180 190 170 C172 190 124 192 102 176 C70 190 34 178 22 152 Z" fill="#ffdbe4" filter="url(#crumpA)"/>
          </svg></span>
          <span class="sheetR"><svg viewBox="0 0 260 190" width="185" xmlns="http://www.w3.org/2000/svg">
            <defs><filter id="crumpB" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.008 0.013" numOctaves="3" seed="23" result="noise"/>
              <feDiffuseLighting in="noise" lighting-color="#eec0cc" surfaceScale="5.5" diffuseConstant="1.12" result="diff"><feDistantLight azimuth="240" elevation="56"/></feDiffuseLighting>
              <feSpecularLighting in="noise" lighting-color="#ffffff" surfaceScale="6" specularConstant="0.5" specularExponent="15" result="spec"><feDistantLight azimuth="240" elevation="56"/></feSpecularLighting>
              <feComposite in="diff" in2="SourceGraphic" operator="in" result="diffc"/>
              <feComposite in="spec" in2="SourceGraphic" operator="in" result="specc"/>
              <feBlend in="diffc" in2="SourceGraphic" mode="multiply" result="base"/>
              <feBlend in="specc" in2="base" mode="screen"/>
            </filter></defs>
            <path d="M26 148 C6 126 14 88 44 80 C42 46 76 26 104 40 C118 14 160 12 178 36 C206 20 240 38 236 66 C256 84 252 120 232 134 C240 162 208 178 182 168 C162 186 116 188 96 172 C64 184 34 172 26 148 Z" fill="#ffccd8" filter="url(#crumpB)"/>
          </svg></span>
        </div>
        <div class="pg-lid"><span></span></div>
        <span class="pg-bow"><i></i></span>
        <div class="pg-body"><i></i></div>
      </div>
      <p class="pick-sub">click to open ♥</p>
    </div>`;
  document.body.appendChild(ov);
  requestAnimationFrame(() => requestAnimationFrame(() => ov.classList.add("in")));
  const sub = ov.querySelector(".pick-sub");
  ov.querySelector(".peel-stack").addEventListener("click", () => {
    if (layer >= 3) return;
    layer++;
    if (layer === 1) {
      winner = rollDrop(kase); /* fate at the first touch */
      ov.querySelector(".pg-item").innerHTML = productArt(winner, 132);
      ov.style.setProperty("--rar", RARITY[winner.rarity].color);
      sub.textContent = "now the lid ♥";
    }
    if (layer === 2) sub.textContent = "one more tap ♥";
    ov.classList.add("p" + layer);
    if (layer === 3) {
      const big = winner.rarity === "grail" || winner.rarity === "archive";
      if (big) setTimeout(() => ov.classList.add("bigpull"), 320);
      setTimeout(() => ov.classList.add("fade"), 1950);
      setTimeout(() => { ov.remove(); cb(winner); }, 2270);
    }
  });
}

/* ---------- The Lucky Pick: shuffle, choose, rarity-tell reveal ----------
   Pop Mart's pick ritual + a Genshin-style rarity color tell. Three sealed
   boxes tornado in and shuffle; she taps one; hers opens with a beam tinted
   by rarity, the item pops out. The roll happens AT the tap (production:
   server rolls on pick), so her choice is genuinely the moment of fate. */
function playLuckyPick(kase, cb) {
  const ov = document.createElement("div");
  ov.className = "gift-pop pickstage";
  ov.innerHTML = `
    <div class="pick-wrap">
      <p class="pick-title">Three boxes. One is <em>yours.</em></p>
      <div class="pick-row">
        ${[0, 1, 2].map((i) => `
          <button class="pick-box" data-i="${i}" aria-label="Box ${i + 1}">
            <span class="pb-lid"><i></i></span>
            <span class="pb-body"><i></i></span>
          </button>`).join("")}
      </div>
      <p class="pick-sub">trust your gut ♥</p>
    </div>`;
  document.body.appendChild(ov);
  requestAnimationFrame(() => requestAnimationFrame(() => ov.classList.add("mix")));
  setTimeout(() => ov.classList.add("ready"), 1150);
  ov.querySelectorAll(".pick-box").forEach((btn) => btn.addEventListener("click", () => {
    if (!ov.classList.contains("ready") || ov.classList.contains("opening")) return;
    ov.classList.add("opening");
    const winner = rollDrop(kase);
    const rar = RARITY[winner.rarity];
    const big = winner.rarity === "grail" || winner.rarity === "archive";
    btn.classList.add("chosen");
    btn.style.setProperty("--rar", rar.color);
    ov.querySelectorAll(".pick-box:not(.chosen)").forEach((b) => b.classList.add("gone"));
    setTimeout(() => {
      btn.classList.add("pop");
      btn.insertAdjacentHTML("beforeend",
        `<span class="pb-beam"></span><span class="pb-ring"></span><span class="pb-item">${productArt(winner, 96)}</span>`);
      if (big) setTimeout(() => ov.classList.add("bigpull"), 420);
    }, 520);
    setTimeout(() => ov.classList.add("fade"), 2500);
    setTimeout(() => { ov.remove(); cb(winner); }, 2820);
  }));
}

/* ---------- The Vault: a shelf of sealed jewelry boxes. She swipes,
   taps the one calling her, its lid swings open glowing, the pieces
   flicker inside and settle on hers. IcyBox's pick-your-box ritual in
   Covet's language. Roll happens AT the tap (production: server rolls
   on pick); every box holds identical odds, the choice is the ritual. */
function playVaultPick(kase, cb) {
  const ov = document.createElement("div");
  ov.className = "gift-pop vaultstage";
  const N = 8;
  ov.innerHTML = `
    <div class="vault-wrap">
      <p class="pick-title">One of these is <em>yours.</em></p>
      <div class="vault-scene">
        <div class="vault-ring">
          ${Array.from({ length: N }, (_, i) => `
          <button class="vb" data-i="${i}" aria-label="Box ${i + 1}">
            <span class="vb-glow"></span>
            <span class="vb-cone"></span>
            <span class="vb-item"></span>
            <span class="vb-name"></span>
            <span class="pb-lid"><i></i></span>
            <span class="pb-body"><i></i></span>
          </button>`).join("")}
        </div>
      </div>
      <p class="pick-sub">spin the carousel · tap the one calling you ♥</p>
    </div>`;
  document.body.appendChild(ov);
  const scene = ov.querySelector(".vault-scene");
  const boxes = [...ov.querySelectorAll(".vb")];
  const R = Math.min(300, Math.max(190, window.innerWidth * 0.21));
  const step = 360 / N;
  let angle = 0, dragging = false, lastX = 0, moved = 0, chosen = false, raf = 0;
  const layout = () => {
    for (let i = 0; i < N; i++) {
      const th = ((angle + i * step) * Math.PI) / 180;
      const x = Math.sin(th) * R;
      const z = Math.cos(th) * R;
      const depth = (z + R) / (2 * R); /* 0 back → 1 front */
      const b = boxes[i];
      if (b.classList.contains("chosen")) continue; /* frozen at center stage */
      b.style.transform = `translate(-50%, -50%) translateX(${x}px) translateY(${(1 - depth) * 26}px) scale(${0.58 + 0.42 * depth})`;
      b.style.zIndex = String(100 + Math.round(z));
      b.style.opacity = chosen ? "0" : String(0.4 + 0.6 * depth);
    }
  };
  const spin = () => {
    if (!chosen && !dragging) angle += 0.14; /* lazy idle turn */
    layout();
    raf = requestAnimationFrame(spin);
  };
  requestAnimationFrame(() => requestAnimationFrame(() => { ov.classList.add("mix"); spin(); }));
  setTimeout(() => ov.classList.add("ready"), 700);

  scene.addEventListener("pointerdown", (e) => { if (chosen) return; dragging = true; lastX = e.clientX; moved = 0; });
  window.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    angle += (e.clientX - lastX) * 0.35;
    moved += Math.abs(e.clientX - lastX);
    lastX = e.clientX;
  });
  window.addEventListener("pointerup", () => { dragging = false; });

  const choose = (btn, i) => {
    if (chosen || !ov.classList.contains("ready")) return;
    chosen = true;
    ov.classList.add("opening");
    /* glide the ring so her box arrives front and center */
    const target = -i * step;
    const from = angle;
    const delta = ((target - from) % 360 + 540) % 360 - 180; /* shortest way around */
    const t0 = performance.now();
    const glide = (t) => {
      const p = Math.min(1, (t - t0) / 520);
      angle = from + delta * (1 - Math.pow(1 - p, 3));
      if (p < 1) requestAnimationFrame(glide);
      else {
        boxes.forEach((b) => { if (b !== btn) b.classList.add("gone"); });
        btn.classList.add("chosen");
        btn.style.opacity = "1";
        btn.style.zIndex = "500";
        btn.style.transform = "translate(-50%, -50%) translateY(-6px) scale(1.5)";
        const winner = rollDrop(kase);
        const rar = RARITY[winner.rarity];
        const big = winner.rarity === "grail" || winner.rarity === "archive";
        const itemHost = btn.querySelector(".vb-item");
        const nameHost = btn.querySelector(".vb-name");
        /* the light from the open box follows whichever piece is showing:
           neutral as the lid lifts, each flickering piece's rarity color,
           then the winner's color once it lands. No early giveaway. */
        btn.style.setProperty("--rar", "#f3dfa6");
        /* flicker: fast then slowing, item name under each piece. Display-only
           picks from the box (not weighted, never staged next to the winner);
           the outcome was already rolled above. */
        const delays = [70, 70, 80, 90, 100, 115, 135, 160, 195, 240, 300];
        const pool = kase.drops.filter((d) => d !== winner);
        const show = (d, size) => {
          itemHost.innerHTML = productArt(d, size);
          nameHost.textContent = `${d.house} ${d.name}`;
          btn.style.setProperty("--rar", (RARITY[d.rarity] || rar).color);
          btn.classList.remove("tick"); void btn.offsetWidth; btn.classList.add("tick");
        };
        let at = 480;
        setTimeout(() => btn.classList.add("open"), at);
        for (const dl of delays) {
          at += dl;
          setTimeout(() => show((pool.length ? pool : kase.drops)[Math.floor(Math.random() * (pool.length || kase.drops.length))], 64), at);
        }
        const lockAt = at + 380;
        setTimeout(() => {
          show(winner, 64); /* same size as the flicker: the lock settles, it doesn't jump */
          btn.classList.add("landed");
          btn.insertAdjacentHTML("beforeend", `<span class="vb-lockring"></span>`);
          if (big) setTimeout(() => ov.classList.add("bigpull"), 380);
        }, lockAt);
        setTimeout(() => ov.classList.add("fade"), lockAt + 1250);
        setTimeout(() => { cancelAnimationFrame(raf); ov.remove(); cb(winner); }, lockAt + 1570);
      }
    };
    requestAnimationFrame(glide);
  };
  boxes.forEach((btn, i) => btn.addEventListener("click", () => { if (moved < 8) choose(btn, i); }));
}

/* ---------- daily free box: opens in a popup, user stays on home ---------- */
/* the gift moment: unbox pressed → the room dims, her box arrives,
   wiggles, and opens — then the reel takes over. Confetti waits for
   the actual result so the payoff isn't spent early. */
function playGiftMoment(cb) {
  const ov = document.createElement("div");
  ov.className = "gift-pop";
  ov.innerHTML = `
    <div class="gpx">
      <div class="gpx-glow"></div>
      <span class="gpx-heart a" style="--fly:-70px">♥</span>
      <span class="gpx-heart b" style="--fly:55px">♥</span>
      <span class="gpx-heart c" style="--fly:-15px">♥</span>
      <span class="gpx-heart d" style="--fly:-105px">♥</span>
      <span class="gpx-heart e" style="--fly:90px">♥</span>
      <div class="gpx-beam"></div>
      <div class="gpx-lid"><span></span></div>
      <div class="gpx-box"><span></span></div>
    </div>`;
  document.body.appendChild(ov);
  setTimeout(() => ov.classList.add("open"), 1050);
  setTimeout(() => ov.classList.add("fade"), 1850);
  setTimeout(() => { ov.remove(); cb(); }, 2130);
}
let dailySpinning = false;
function openDailyBox(id) {
  {
    const k = getCase(id);
    if (!k || k.off) return;
  }
  if (freeCapReached()) { openFreeCapModal(); return; }
  const kase = getCase(id);
  if (canClaimDailyBox() && !hasKyc()) { requireKyc(() => openDailyBox(id)); return; }
  if (!canClaimDailyBox()) {
    openModal(`
      <span class="eyebrow">Free daily box</span>
      <h2>Back tomorrow</h2>
      <p class="modal-sub">Today's free box is already on your shelf. A fresh one unlocks at midnight, and your daily giveaway entries are still up for grabs.</p>
      <div class="modal-actions">
        <button class="btn btn-gold" onclick="openGiveawayModal()">The giveaway</button>
        <button class="btn btn-quiet" onclick="closeModal()">Done</button>
      </div>`);
    return;
  }
  /* most valuable first; each row still shows its exact roll range (computed
     in roll order), so any pull can be checked by hand */
  const rows = withRollRanges(kase).sort((a, b) => b.d.value - a.d.value).map(({ d, from, to }) => {
    const cum = to;
    const rar = RARITY[d.rarity];
    return `<div class="odds-row" style="--rar:${rar.color}">
      <div class="bottle-tile">${productArt(d, 36)}</div>
      <div class="odds-name"><b>${d.house} ${d.name}</b><span>${d.conc} · ${d.size}</span></div>
      <div class="hide-sm"><span class="rarity-chip">${rar.label}</span></div>
      <div class="odds-val">${money(d.value)}<span>market value</span></div>
      <div class="odds-pct"><b>${d.odds}%</b><div class="odds-bar"><i style="width:${Math.max(d.odds, 1.5)}%"></i></div><span class="odds-range">rolls ${from.toFixed(2)}–${cum.toFixed(2)}</span></div>
    </div>`;
  }).join("");
  openModal(`
    <span class="eyebrow">${kase.name} · free today${streakDays() > 0 ? ` · day ${streakDays() + (canClaimDailyBox() ? 1 : 0)}` : ""}</span>
    <h2>${kase.short}, <em style="font-style:italic;font-weight:320">on the house.</em></h2>
    <div class="reveal-stage daily-stage" id="dailyStage">
      <div class="reel-window">
        <div class="reel" id="dailyReel"></div>
        <div class="needle"></div>
      </div>
      <div class="reveal-controls">
        <button class="btn btn-gold btn-lg" id="dailyGo" onclick="spinDailyBox('${id}')">Unbox free today</button>
        <p class="micro">A real piece every time. Ship it free or take the instant buyback.</p>
        <div class="reveal-modes" style="justify-content:center;margin-top:10px"></div>
      </div>
    </div>
    <div class="daily-odds">
      <span class="eyebrow">Verifiable odds · every piece in today's box</span>
      <div class="odds-table">
        <div class="odds-row head">
          <span></span><span>Piece</span><span class="hide-sm">Rarity</span>
          <span>Value</span><span class="odds-pct">Odds</span>
        </div>
        ${rows}
      </div>
      <p class="micro" style="margin-top:12px">One free open per day, odds printed exactly as they run. Free pulls always ship free; sell one back and a little credit lands toward your next box.</p>
    </div>
  `, { style: "width:min(820px,94vw);max-height:88vh;overflow-y:auto" });
  buildReelInto(document.getElementById("dailyReel"), kase);
  renderRevealModes();
}
function spinDailyBox(id) {
  if (dailySpinning || !canClaimDailyBox()) return;
  dailySpinning = true;
  const kase = getCase(id);
  markDailyBox();
  setPendingOpen(id, 0);
  const day = streakDays();
  let streakBonus = 0;
  if (day > 0 && day % 7 === 0) { addEntries(5); streakBonus = 5; }
  const btn = document.getElementById("dailyGo");
  btn.disabled = true;
  const watchdog = setTimeout(() => { dailySpinning = false; }, 15000);
  const doneD = (winner) => {
    clearTimeout(watchdog);
    dailySpinning = false;
    clearPendingOpen();
    addPull(kase, winner);
    revealResult(kase, winner, streakBonus ? { entries: streakBonus } : {});
    if (window.renderDailyGrid) renderDailyGrid();
  };
  if (revealMode() === "vault") { playVaultPick(kase, doneD); return; }
  playGiftMoment(() => {
    const mode = revealMode();
    if (mode === "spin") {
      const stage = document.getElementById("dailyStage");
      if (!stage) { clearTimeout(watchdog); dailySpinning = false; return; }
      const winner = rollDrop(kase);
      const reel = buildReelInto(document.getElementById("dailyReel"), kase, winner);
      stage.classList.add("spinning");
      stage.scrollIntoView({ block: "nearest", behavior: "smooth" });
      runReelSpin(reel, stage.querySelector(".reel-window"), () => {
        stage.classList.remove("spinning");
        doneD(winner);
      });
      return;
    }
    (mode === "peel" ? playTissuePeel : playLuckyPick)(kase, doneD);
  });
}

function devReset(e) {
  if (e.shiftKey) localStorage.clear();
  else { localStorage.removeItem(LS_DAILYBOX); localStorage.removeItem(LS_DAILY); localStorage.removeItem(LS_FREE_OPENS); localStorage.removeItem(LS_FREE_SHIPS); }
  location.reload();
}

/* ---------- this week's giveaway: strip + showcase, all from GIVEAWAY in data.js ---------- */
function giveawayPrize() {
  const g = GIVEAWAY;
  const drop = g.dropId ? allDrops().find((d) => d.id === g.dropId) : null;
  const prize = g.prize || (drop ? `a ${drop.house} ${drop.name}` : gwTerms().thisL + " prize");
  const value = g.value || (drop ? "$" + (Math.floor(drop.value / 100) * 100).toLocaleString() + "+" : "");
  const art = g.image
    ? `<img class="gw-photo" src="${g.image}" alt="" />`
    : drop ? productArt(drop, 96) : "";
  return {
    drop, prize, value, art,
    prizeCap: prize.charAt(0).toUpperCase() + prize.slice(1),
    house: g.house || (drop ? drop.house : ""),
    name: g.name || (drop ? drop.name : prize),
    tag: g.tag || (drop ? drop.conc : ""),
    ends: gwTerms().ends,
    lastWinner: g.lastWinner || "",
    lastPrize: g.lastPrize || "",
  };
}

/* live countdown to the next draw (weekly or monthly, see gwNextDraw in data.js) */
function tickGiveawayCountdown() {
  const el = document.getElementById("giveCountdown");
  if (!el) return;
  const ms = Math.max(0, gwNextDraw() - new Date());
  const d = Math.floor(ms / 864e5), h = Math.floor(ms % 864e5 / 36e5), m = Math.floor(ms % 36e5 / 6e4);
  el.textContent = `${d}d ${h}h ${m}m`;
}

/* the thin strip under the hero: a teaser that scrolls to the showcase */
function mountGiveawayStrip(mountId) {
  const el = document.getElementById(mountId);
  if (!el) return;
  const p = giveawayPrize();
  el.innerHTML = `
    <span class="pill">${gwTerms().thisP} giveaway</span>
    <span><b>${p.prizeCap}.</b> Every $1 opened = 1 entry · 5 free entries daily</span>
    <button class="strip-claim" data-dailycta onclick="event.stopPropagation();claimDaily()">Claim today's 5 free entries</button>`;
  refreshDailyCta();
}

/* the showcase: copy on the left, prize card on the right */
function mountGiveawayBanner(mountId) {
  const mount = document.getElementById(mountId);
  if (!mount) return;
  const p = giveawayPrize();
  mount.innerHTML = `
    <section class="gw-banner" id="gwBanner">
      <div class="lux-quilt"></div>
      <div class="gw-glow"></div>
      <div class="gw-copy">
        <div class="gw-eyebrows">
          <span class="lux-eyebrow">${gwTerms().thisP} giveaway</span>
          <span class="lux-eyebrow gw-eyebrow-free">Free to enter</span>
        </div>
        <h2 class="gw-h1"><span class="gw-lead">Win</span><span class="lux-foil gw-prize">${p.prize}.</span></h2>
        <p class="gw-lede">The real thing, <strong>free to enter.</strong> Authenticated and shipped free to one winner, drawn ${p.ends}. Every entry counts the same.</p>
        <ul class="gw-ways">
          <li>Stop by daily <span class="gw-dots"></span> <b>+5 free</b></li>
          <li>Open any box <span class="gw-dots"></span> <b>$1 = 1 entry</b></li>
        </ul>
        <div class="gw-cta-row">
          <button class="lux-cta" data-dailycta onclick="claimDaily()">Claim today's 5 free entries</button>
          <button class="lux-more" onclick="openGiveawayModal()">Giveaway details →</button>
        </div>
        <p class="gw-entries">you're in with <b id="giveEntries">·</b> entries ♥</p>
        <p class="gw-fine">winner drawn by random.org · no purchase necessary${p.lastWinner ? `<br>last ${gwTerms().period}: ${p.lastWinner} took ${p.lastPrize} ♥` : ""}</p>
      </div>
      <div class="gw-stage" aria-hidden="true">
        <div class="lux-card gw-card">
          <span class="lux-rarity">${gwTerms().thisP} prize</span>
          <div class="lux-art gw-art">${p.art}</div>
          ${p.house ? `<p class="gw-house">${p.house}</p>` : ""}
          <h3>${p.name}</h3>
          ${p.tag ? `<p class="lux-tag">${p.tag}</p>` : ""}
          <div class="gw-divide"></div>
          <div class="gw-rv">Resale value</div>
          <div class="gw-rvv">${p.value}</div>
        </div>
        <div class="gw-countdown">Drawn in <em id="giveCountdown">·</em></div>
      </div>
    </section>`;
  refreshDailyCta();
  tickGiveawayCountdown();
  setInterval(tickGiveawayCountdown, 30000);
  if (typeof themeEntryWords === "function") themeEntryWords(); /* holiday word swap runs before this mounts */
}

function openGiveawayModal() {
  const claimed = !canClaimDaily();
  openModal(`
    <span class="eyebrow">${gwTerms().thisP} giveaway</span>
    <div class="result-bottle" style="--rar:#e0417c">${bagArt({ s: "flap", b: "#15130f", h: "#d4af6a" }, 58)}</div>
    <h2>A vintage Chanel<br><em style="font-style:italic;font-weight:320">Classic Flap.</em></h2>
    <p class="modal-sub">Authenticated and ships free. Every $1 you open in boxes earns 1 entry, and 5 free entries wait daily. One winner, drawn ${gwTerms().ends}, decided by random.org.</p>
    <div class="value-row" style="--rar:#e0417c">
      <div><small>Your entries</small><b>${getEntries()}</b></div>
      <div><small>Drawn</small><b style="font-size:16px">${gwTerms().ends}</b></div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-gold" ${claimed ? "disabled" : ""} onclick="claimDaily()">${claimed ? "Claimed · back tomorrow" : "Claim today's 5 free entries"}</button>
      <button class="btn btn-quiet" onclick="closeModal()">Close</button>
    </div>
    <p class="micro after-note">No purchase necessary. Every entry counts the same. Full details in the giveaway rules.</p>
  `);
}


/* ---------- instant sell modal ---------- */
function openSellModal(caseId, dropId, uid) {
  const kase = getCase(caseId);
  const drop = kase.drops.find((d) => d.id === dropId) || allDrops().find((d) => d.id === dropId);
  const offer = buybackFor(kase, drop);
  const isFree = !!kase.free;
  openModal(`
    <span class="eyebrow">Buyback offer</span>
    <h2>${money(offer)}</h2>
    <p class="modal-sub">We will repurchase your ${drop.house} ${drop.name} right now for ${money(offer)}.${isFree
      ? " Free pulls are made for keeping: shipping is always free. Or take the little credit and chase tomorrow's box."
      : " The amount credits to your balance instantly, ready for your next box."}</p>
    <div class="modal-actions">
      <button class="btn btn-gold" onclick="acceptBuyback('${uid || ""}', ${offer}, ${isFree})">Accept buyback</button>
      <button class="btn btn-quiet" onclick="closeModal()">Keep it</button>
    </div>
  `);
}
function acceptBuyback(uid, offer, isFree) {
  setWallet(getWallet() + offer);
  if (isFree) setLocked(getLocked() + offer);
  if (uid) {
    const list = getInv();
    const item = list.find((i) => i.uid === uid);
    if (item) {
      item.status = "sold";
      releaseStock(item.dropId); /* sold back: the unit returns to stock */
    }
    setInv(list);
    if (typeof renderInventory === "function") renderInventory();
  }
  closeModal();
}
function shipFromResult() {
  const first = getInv()[0];
  const isFree = first && isFreeCaseId(first.caseId);
  if (isFree && freeShipGate()) return;
  if (!hasKyc()) { requireKyc(shipFromResult); return; } /* KYC: first free box or first shipment, whichever comes first */
  requireAddress(() => {
    const list = getInv();
    if (list.length && list[0].status === "vault") {
      list[0].status = "shipping";
      setInv(list);
      if (isFree) bumpFreeShips();
    }
    openModal(`
      <span class="eyebrow">Shipping · free</span>
      <h2>On its way soon</h2>
      <p class="modal-sub">${first && isUntrackedDrop(first.caseId, first.dropId)
        ? `Your pull ships free within 5 business days. ${UNTRACKED_NOTE}`
        : "Your pull ships free with tracking within 5 business days. Pieces over $500 go insured with signature on delivery."}</p>
      <p class="addr-chip">${addrLine()} <a href="#" onclick="openAddressModal(shipFromResultDone);return false">edit</a></p>
      <div class="modal-actions">
        <a class="btn btn-gold" href="inventory.html">View my shelf</a>
        <button class="btn btn-quiet" onclick="closeModal()">Close</button>
      </div>
    `);
  });
}
function shipFromResultDone() { /* address edited after ship: just reshow confirmation */
  openModal(`
    <span class="eyebrow">Updated</span>
    <h2>Address saved ♥</h2>
    <p class="modal-sub">This shipment and everything after it heads to:</p>
    <p class="addr-chip">${addrLine()}</p>
    <div class="modal-actions"><button class="btn btn-gold" onclick="closeModal()">Done</button></div>
  `);
}

/* ---------- shipping info modal ---------- */
function openShippingModal() {
  openModal(`
    <span class="eyebrow">Shipping · always free</span>
    <h2>From our vault<br>to your door ♥</h2>
    <div class="ship-rows">
      <div class="ship-row"><b>Free, every order</b><span>Every pull ships free, no minimum, no code. Buyback means never paying to ship something you don't want.</span></div>
      <div class="ship-row"><b>Packed in 2 business days</b><span>Authenticated, sealed, and handed to the carrier within 2 business days. Tracking lands in your inbox the moment it moves.</span></div>
      <div class="ship-row"><b>Free-box commons go by mail</b><span>Free box commons ship without tracking, usually 7 to 10 business days. Free-box grails ship tracked and insured like everything else.</span></div>
      <div class="ship-row"><b>High-value protection</b><span>Pieces over $500 ship insured for their full value, signature on delivery, always.</span></div>
      <div class="ship-row"><b>Ship on your schedule</b><span>Pulls wait on your shelf as long as you like. Ship one, or batch several into a single box whenever you're ready.</span></div>
      <div class="ship-row"><b>Anywhere in the US</b><span>All 50 states, DC, and Puerto Rico. More regions are on the way; your shelf holds pieces until then.</span></div>
      <div class="ship-row"><b>Perfume travels by ground</b><span>Federal safety rules route fragrance by ground carrier. Mainland arrives on schedule; fragrance to Puerto Rico can take longer.</span></div>
    </div>
    <div class="modal-actions">
      <a class="btn btn-gold" href="inventory.html">My shelf</a>
      <button class="btn btn-quiet" onclick="closeModal()">Done</button>
    </div>
    <p class="micro after-note">Wrong address? Ping live support before it ships and we'll fix it.</p>
  `);
}

/* ---------- wallet + withdraw modals ---------- */
function openWalletModal() {
  openModal(`
    <span class="eyebrow">Balance</span>
    <h2>${money(getWallet())}</h2>
    <p class="modal-sub">Your balance holds buyback credits and deposits. Spend it on any box.${getLocked() > 0
      ? ` <b style="color:var(--ink)">${money(getLocked())} is free-box credit</b>: it spends on any box, and opening frees it up.`
      : ""}</p>
    <div class="modal-actions">
      <button class="btn btn-gold" onclick="openAddFundsModal()">Add funds</button>
    </div>
  `);
}
const TOPUP_MIN = 10, TOPUP_MAX = 1000; /* per top-up */
function openAddFundsModal() {
  openModal(`
    <span class="eyebrow">Add funds · step 1 of 2</span>
    <h2>How much?</h2>
    <p class="modal-sub">Funds are available instantly and spend on any box.</p>
    <div class="modal-actions" style="flex-wrap:wrap">
      ${[25, 50, 100].map((a) => `<button class="btn btn-ghost" style="min-width:90px;flex:1 1 28%" onclick="openPayMethodModal(${a})">$${a}</button>`).join("")}
    </div>
    <div class="field" style="text-align:left;margin-top:18px">
      <label>Or a custom amount · $${TOPUP_MIN} to $${TOPUP_MAX.toLocaleString()}</label>
      <input id="tuAmount" type="number" min="${TOPUP_MIN}" max="${TOPUP_MAX}" placeholder="75" />
    </div>
    <p class="micro" id="tuErr" style="display:none;color:var(--gold);margin-top:-6px;margin-bottom:12px">Top-ups run from $${TOPUP_MIN} to $${TOPUP_MAX.toLocaleString()}.</p>
    <button class="btn btn-gold" style="width:100%" onclick="openPayMethodModal(parseFloat(document.getElementById('tuAmount').value||0))">Continue</button>
  `);
}
function openPayMethodModal(amount) {
  if (!amount || amount < TOPUP_MIN || amount > TOPUP_MAX) {
    const err = document.getElementById("tuErr");
    if (err) err.style.display = ""; else openAddFundsModal();
    return;
  }
  openModal(`
    <span class="eyebrow">Add funds · step 2 of 2</span>
    <h2>Pay ${money(amount)} with</h2>
    <div class="modal-actions" style="flex-direction:column">
      <button class="btn btn-ghost" style="width:100%" onclick="confirmAddFunds(${amount}, 'Visa •••• 4127')">💳 &nbsp;Visa •••• 4127</button>
      <button class="btn btn-ghost" style="width:100%" onclick="confirmAddFunds(${amount}, 'Apple Pay')"> Pay &nbsp;Apple Pay</button>
      <button class="btn btn-ghost" style="width:100%" onclick="confirmAddFunds(${amount}, 'PayPal')">🅿️ &nbsp;PayPal</button>
    </div>
    <p class="micro after-note"><a href="#" onclick="openAddFundsModal();return false" style="color:var(--gold)">← Change amount</a></p>
  `);
}
function confirmAddFunds(amount, method) {
  setWallet(getWallet() + amount);
  localStorage.setItem(LS_DEPOSITED, "1");
  openModal(`
    <span class="eyebrow">Done</span>
    <h2>${money(amount)} added</h2>
    <p class="modal-sub">Charged to ${method || "your card"}. Your balance is now ${money(getWallet())}. Go find something you love.</p>
    <div class="modal-actions">
      <a class="btn btn-gold" href="cases.html">Browse boxes</a>
      <button class="btn btn-quiet" onclick="closeModal()">Close</button>
    </div>
  `);
}
/* NOT IN THE MVP: bank transfers are out of scope and nothing on the site
   opens these screens. Kept only for a later phase. */
function openWithdrawModal() {
  if (hasDeposited() && !hasKyc()) { requireKyc(openWithdrawModal); return; }
  if (!hasDeposited()) {
    openModal(`
      <span class="eyebrow">Transfer to bank</span>
      <h2>One step first ♥</h2>
      <p class="modal-sub">Bank transfers unlock after your first purchase. Add funds once and your balance is yours to move any time, or keep it growing with your free daily box.</p>
      <div class="modal-actions">
        <button class="btn btn-gold" onclick="openAddFundsModal()">Add funds</button>
        <button class="btn btn-quiet" onclick="closeModal()">Later</button>
      </div>
      <p class="micro after-note">Standard for every account: it keeps the giveaway and free boxes fair for everyone.</p>
    `);
    return;
  }
  const bal = getWallet();
  const avail = Math.max(0, bal - getLocked());
  openModal(`
    <span class="eyebrow">Transfer to bank</span>
    <h2>Transfer your balance</h2>
    <p class="modal-sub">Funds return to your original payment method within 3 to 5 business days. Transfer fees may apply. Transfers start at $20.${getLocked() > 0
      ? ` ${money(getLocked())} of your balance is free-box credit: spend it on any box and it counts toward what you can transfer.`
      : ""}</p>
    <div class="field" style="text-align:left">
      <label>Amount · transferable ${money(avail)} · $20 minimum</label>
      <input id="wdAmount" type="number" min="20" max="${avail}" value="${Math.floor(avail)}" />
    </div>
    <div class="field" style="text-align:left">
      <label>Destination</label>
      <select>${getMethods().map((m) => `<option>${m}</option>`).join("")}</select>
      <button class="btn-reset" style="margin-top:8px;font-size:11.5px;font-weight:700;color:var(--gold);cursor:pointer;background:none;border:0;padding:0" onclick="addMethodModal()">+ Add new method</button>
    </div>
    <div class="modal-actions">
      <button class="btn btn-gold" onclick="confirmWithdraw()">Transfer to bank</button>
      <button class="btn btn-quiet" onclick="closeModal()">Cancel</button>
    </div>
  `);
}
function confirmWithdraw() {
  const amt = Math.min(parseFloat(document.getElementById("wdAmount").value || 0), Math.max(0, getWallet() - getLocked()));
  if (amt < 20) {
    openModal(`
      <span class="eyebrow">Almost there</span>
      <h2>Transfers start at $20</h2>
      <p class="modal-sub">Your balance is ${money(getWallet())}. Keep it growing with your daily free box, or put it toward your next open.</p>
      <div class="modal-actions">
        <a class="btn btn-gold" href="cases.html">Browse boxes</a>
        <button class="btn btn-quiet" onclick="closeModal()">Okay</button>
      </div>`);
    return;
  }
  setWallet(getWallet() - amt);
  openModal(`
    <span class="eyebrow">Requested</span>
    <h2>${money(amt)} on its way</h2>
    <p class="modal-sub">Transfer confirmed. Expect it on your Visa •••• 4127 within 3 to 5 business days. Remaining balance: ${money(getWallet())}.</p>
    <div class="modal-actions">
      <button class="btn btn-gold" onclick="closeModal()">Done</button>
    </div>
  `);
}

/* ---------- stock-out resolution: lives on the shelf card, no popup ----------
   Ops marks a pull unfulfillable (plus an email): the shelf item flips to
   "Needs your pick" with the choices inline: a substitute of equal or greater
   value, the full value as credit, or the box price back on her card. The
   refund link is legally required (FTC Mail Order Rule) and deliberately
   quiet. No pick within 5 days and the full-value credit applies. */
function markStockout(uid, subIds, price) {
  const list = getInv();
  const it = list.find((i) => i.uid === uid);
  if (!it) return;
  it.status = "stockout";
  it.stockout = { subs: subIds || [], price, by: new Date(Date.now() + 5 * 864e5).toISOString().slice(0, 10) };
  setInv(list);
}
function resolveStockout(uid, kind, subId) {
  const list = getInv();
  const it = list.find((i) => i.uid === uid);
  if (!it || it.status !== "stockout") return;
  const drop = allDrops().find((d) => d.id === it.dropId);
  if (kind === "sub") {
    it.subFor = drop ? `${drop.house} ${drop.name}` : "";
    it.dropId = subId;
    it.status = "shipping";
  } else if (kind === "credit") {
    it.creditAmt = drop ? drop.value : 0;
    setWallet(getWallet() + it.creditAmt);
    it.status = "credited";
  } else {
    it.status = "refunded";
  }
  setInv(list);
  if (typeof renderInventory === "function") renderInventory();
}

/* ---------- creator W-9: required before payouts cross $600/yr ---------- */
function hasW9() { return localStorage.getItem("covet_w9_ok") === "1"; }
function openW9Modal(next) {
  openModal(`
    <span class="eyebrow">One tax form, one time</span>
    <h2>The IRS says hi ♥</h2>
    <p class="modal-sub">Your creator earnings are crossing $600 this year, which means US law needs a W-9 on file before we can keep paying you. Two minutes with our tax partner, once. Your info goes to the tax partner, not to Covet's servers.</p>
    <div class="modal-actions">
      <button class="btn btn-gold" onclick="demoW9Run(${next ? "window._w9Next" : "null"})">Complete my W-9 · 2 min</button>
      <button class="btn btn-quiet" onclick="closeModal()">Later (payouts pause at $600)</button>
    </div>
    <p class="micro after-note">Earnings keep accruing either way. Only the payout waits for the form.</p>
  `);
  if (next) window._w9Next = next;
}
function demoW9Run(next) {
  localStorage.setItem("covet_w9_ok", "1");
  openModal(`
    <span class="eyebrow">All set</span>
    <h2>W-9 on file</h2>
    <p class="modal-sub">You're clear for payouts at any amount.</p>
    <div class="modal-actions"><button class="btn btn-gold" onclick="closeModal();(${next ? "window._w9Next" : "(()=>{})"})?.()">Done</button></div>
  `);
}

/* ---------- giveaway winner: ship the prize or take credit ---------- */
function openGiveawayWinModal(prize, value, credit) {
  confettiBurst(["#eeb020", "#ffb3c9", "#e02d56", "#ffffff"]);
  openModal(`
    <div class="result-glow" style="--rar:#eeb020"></div>
    <span class="eyebrow" style="color:#b07c1e">${gwTerms().thisP} giveaway</span>
    <h2>It's you.<br><em style="font-style:italic;font-weight:320">You won ♥</em></h2>
    <p class="modal-sub">The <b style="color:var(--ink)">${prize}</b>, market value ${money(value)}, is yours. Ship it free and insured, or take ${money(credit)} in Covet credit instead, yours the second you tap.</p>
    <div class="modal-actions">
      <button class="btn btn-gold" onclick="giveawayWinShip('${prize.replace(/'/g, "\\'")}')">Ship my prize · free</button>
      <button class="btn btn-ghost" onclick="giveawayWinCredit(${credit})">Take ${money(credit)} credit</button>
    </div>
    <p class="micro after-note">Pick within 7 days or we'll email you a reminder (then another, we're not letting you miss this). Shipping is insured with signature on delivery.</p>
  `, { locked: true });
}
function giveawayWinShip(prize) {
  requireAddress(() => {
    openModal(`
      <span class="eyebrow">On its way</span>
      <h2>Go film the unboxing ♥</h2>
      <p class="modal-sub">Your ${prize} ships insured with signature on delivery. Tracking lands in your inbox, and tagging @covet.gg when it arrives would make our whole month.</p>
      <p class="addr-chip">${addrLine()}</p>
      <div class="modal-actions"><button class="btn btn-gold" onclick="closeModal()">Done</button></div>
    `);
  });
}
function giveawayWinCredit(credit) {
  setWallet(getWallet() + credit);
  confettiBurst();
  openModal(`
    <span class="eyebrow">Credited</span>
    <h2>${money(credit)} landed</h2>
    <p class="modal-sub">Your balance is now ${money(getWallet())}. Spend it on any box. Congratulations, love.</p>
    <div class="modal-actions">
      <a class="btn btn-gold" href="cases.html">Put it to work</a>
      <button class="btn btn-quiet" onclick="closeModal()">Done</button>
    </div>
  `);
}

/* ---------- variant picker: sizes, shades, colors, anything ---------- */
function openVariantModal(itemName, options, cb) {
  window._vChoice = null;
  openModal(`
    <span class="eyebrow">Before it ships</span>
    <h2>Which one is yours? ♥</h2>
    <p class="modal-sub">Your ${itemName} comes in a few versions. Pick yours and it ships exactly right.</p>
    <div class="variant-row">
      ${options.map((o) => `<button class="variant-pill" onclick="window._vChoice='${o}';document.querySelectorAll('.variant-pill').forEach((b)=>b.classList.toggle('on', b.textContent==='${o}'));document.getElementById('vGo').disabled=false">${o}</button>`).join("")}
    </div>
    <div class="modal-actions">
      <button class="btn btn-gold" id="vGo" disabled onclick="closeModal();(${cb ? "window._vCb" : "(()=>{})"})(window._vChoice)">That's the one</button>
      <button class="btn btn-quiet" onclick="closeModal()">Decide later · it waits on my shelf</button>
    </div>
    <p class="micro after-note">Not sure? Size guides live on the item page, and support can swap it before it ships.</p>
  `);
  if (cb) window._vCb = cb;
}

/* ---------- sign in / sign up ---------- */
function isSignedIn() {
  try { return !!localStorage.getItem("covet_signed_in"); } catch { return false; }
}
function authDone() {
  localStorage.setItem("covet_signed_in", "1");
  closeModal();
  const b = document.querySelector(".head-auth");
  if (b) b.remove();
}
function openAuthModal(mode = "in") {
  const isIn = mode === "in";
  openModal(`
    <span class="eyebrow">${isIn ? "Welcome back" : "Join Covet"}</span>
    <h2>${isIn ? "Hi again, love ♥" : "Let's get you in ♥"}</h2>
    <div class="addr-form" style="margin-bottom:16px">
      ${isIn ? "" : `<div class="field"><label>First name</label><input placeholder="Riley" /></div>`}
      <div class="field"><label>Email</label><input type="email" placeholder="you@email.com" /></div>
      <div class="field"><label>Password</label><input type="password" placeholder="••••••••" /></div>
      ${isIn ? "" : `<div class="field"><label>Creator code · optional</label><input id="auCode" placeholder="RILEY5" maxlength="12" style="text-transform:uppercase" oninput="document.getElementById('auCodeHint').style.display = this.value.trim() ? '' : 'none'" /></div>
      <p class="micro" id="auCodeHint" style="display:none;color:var(--gold);text-align:left;margin:-6px 0 4px">♥ $5 off your first box over $25, applied automatically. Your girl gets credit on every box you ever open.</p>`}
    </div>
    <button class="btn btn-gold" style="width:100%" onclick="authDone()">${isIn ? "Sign in" : "Create my account"}</button>
    <div class="auth-or"><span>or</span></div>
    <div class="modal-actions" style="flex-direction:column;margin-top:0">
      <button class="btn btn-ghost" style="width:100%" onclick="authDone()"> Continue with Apple</button>
      <button class="btn btn-ghost" style="width:100%" onclick="authDone()">G · Continue with Google</button>
      <button class="btn btn-quiet" style="width:100%" onclick="openAuthModal('${isIn ? "up" : "in"}')">${isIn ? "New here? Create an account" : "I have an account · Sign in"}</button>
    </div>
    <p class="micro after-note">${isIn
      ? `<a href="#" style="color:var(--gold)" onclick="openResetModal();return false">Forgot your password? Reset it here</a>`
      : `By joining you confirm you are 18+ and agree to the Terms of Service and Privacy Policy.`}</p>
  `);
}
function openResetModal() {
  openModal(`
    <span class="eyebrow">Reset password</span>
    <h2>It happens to everyone ♥</h2>
    <p class="modal-sub">Tell us your email and we'll send a reset link. It works for 30 minutes.</p>
    <div class="addr-form" style="margin-bottom:16px">
      <div class="field"><label>Email</label><input id="rsEmail" type="email" placeholder="you@email.com" /></div>
    </div>
    <button class="btn btn-gold" style="width:100%" onclick="sendReset()">Send reset link</button>
    <div class="modal-actions" style="margin-top:12px">
      <button class="btn btn-quiet" style="width:100%" onclick="openAuthModal('in')">Back to sign in</button>
    </div>
  `);
}
function sendReset() {
  const email = (document.getElementById("rsEmail").value || "").trim();
  if (!email.includes("@")) { document.getElementById("rsEmail").focus(); return; }
  openModal(`
    <span class="eyebrow">Check your inbox</span>
    <h2>Link sent</h2>
    <p class="modal-sub">If an account exists for ${email}, a reset link is on its way. Check spam if it hides. Still stuck? Live support has you.</p>
    <div class="modal-actions">
      <button class="btn btn-gold" onclick="openAuthModal('in')">Back to sign in</button>
    </div>
  `);
}

/* ---------- age / state gate ---------- */
/* states we don't serve, per the legal plan (gambling-statute readings) */
const GATE_BLOCKED = ["Washington", "Idaho", "Hawaii", "Kentucky", "South Carolina"];
const GATE_AGE_19 = ["Alabama", "Nebraska"];
function openGateModal(force = false) {
  const states = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming","Washington DC","Puerto Rico","Outside the US"];
  openModal(`
    <span class="eyebrow">Before you enter</span>
    <h2>Covet is 18+</h2>
    <p class="modal-sub">Boxes are randomized retail purchases of genuine products. Please confirm your age and eligibility.</p>
    <div class="field" style="text-align:left">
      <label>Your state or region</label>
      <select id="gateState" onchange="gateCheck()">
        <option value="">Choose your state…</option>
        ${states.map((x) => `<option>${x}</option>`).join("")}
      </select>
    </div>
    <div class="gate-row">
      <input type="checkbox" id="gateAge" onchange="gateCheck()" />
      <label for="gateAge">I am <span id="gateAgeNum">18</span> or older, and I am physically located in the state selected above, where randomized retail products are permitted.</label>
    </div>
    <div class="gate-row">
      <input type="checkbox" id="gateTos" onchange="gateCheck()" />
      <label for="gateTos">I agree to the <a href="#" onclick="return false" style="color:var(--gold)">Terms of Service</a> and <a href="#" onclick="return false" style="color:var(--gold)">Privacy Policy</a>, and I have read the odds disclosure and buyback policy.</label>
    </div>
    <p class="micro" id="gateBlockedMsg" style="display:none;color:var(--gold);margin-bottom:14px">Covet isn't available in that state yet. We're so sorry, love.</p>
    <div class="modal-actions">
      <button class="btn btn-gold" id="gateEnter" disabled onclick="localStorage.setItem('${LS_GATE}','1');closeModal()">Enter Covet</button>
      <a class="btn btn-quiet" href="https://www.google.com">Leave</a>
    </div>
  `, { locked: !force ? true : false });
}
function gateCheck() {
  const st = document.getElementById("gateState").value;
  const blocked = GATE_BLOCKED.includes(st) || st === "Outside the US";
  /* age of majority is 19 in Alabama and Nebraska; the attestation follows the state */
  document.getElementById("gateAgeNum").textContent = GATE_AGE_19.includes(st) ? "19" : "18";
  document.getElementById("gateBlockedMsg").style.display = blocked ? "" : "none";
  document.getElementById("gateEnter").disabled =
    blocked || !st ||
    !document.getElementById("gateAge").checked ||
    !document.getElementById("gateTos").checked;
}

/* ---------- ticker ---------- */
function renderTicker() {
  const host = document.querySelector(".ticker-inner");
  if (!host) return;
  const items = tickerItems(14);
  const html = items
    .map((t) => `<div class="tick">
      <span class="t-art">${productArt(t.drop, 36)}</span>
      <b>${t.drop.house} ${t.drop.name}</b>
      <span class="tick-val">${money(t.drop.value)}</span>
      <span>· ${t.who} · ${t.kase.short}</span>
    </div>`)
    .join("");
  host.innerHTML = html + html; /* duplicated for seamless loop */
}

/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded", (e) => {
  try {
    const mt = JSON.parse(localStorage.getItem("covet_maintenance"));
    if (mt && mt.on && document.body.dataset.page !== "admin") {
      e.stopImmediatePropagation(); /* page scripts expect elements the curtain removed */
      document.title = "Be right back · Covet";
      document.body.innerHTML = `<div style="min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:40px 24px;background:var(--bg)">
        <div style="font-size:72px;animation:floaty 3s ease-in-out infinite">🎀</div>
        <span class="eyebrow" style="margin-top:18px">Covet</span>
        <h1 class="display" style="margin-top:8px">We'll be right back.</h1>
        <p class="lede" style="margin:14px auto 0;max-width:44ch">${(mt.msg || "We're fluffing the tissue paper and restocking the shelves. Give us a minute, love.").replace(/[<>&]/g, "")}</p>
        <p class="micro" style="margin-top:22px">Nothing is lost. Your balance, your shelf, and your streak are exactly where you left them.</p>
      </div><style>@keyframes floaty { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }</style>`;
      return;
    }
  } catch {}
  renderShell(document.body.dataset.page);
  applyHoliday();
  renderTicker();
  refreshWishStats();
  resolvePendingOpen();
  /* a payment finished (maybe in another tab) but the box was never revealed */
  try {
    const paid = JSON.parse(localStorage.getItem("covet_paid_box"));
    const onItsPage = document.body.dataset.page === undefined && location.search.includes(paid && paid.id);
    if (paid && paid.id && !location.search.includes("c=" + paid.id)) {
      const k = getCase(paid.id);
      if (k) openModal(`
        <span class="eyebrow">Paid & waiting</span>
        <h2>Your box is ready ♥</h2>
        <p class="modal-sub">Your payment went through, and your <b style="color:var(--ink)">${k.name}</b> is sitting there sealed. Nothing happens until you open it; the reveal waits for you.</p>
        <div class="modal-actions">
          <a class="btn btn-gold" href="case.html?c=${paid.id}">Open my box</a>
          <button class="btn btn-quiet" onclick="closeModal()">In a minute</button>
        </div>`);
    }
  } catch {}
  refreshDailyCta();
  if (!localStorage.getItem(LS_GATE) && !document.body.hasAttribute("data-no-gate")) {
    setTimeout(() => openGateModal(), 600);
  }
});

/* ---------- live support chat (demo) ---------- */
function openSupportModal() {
  openModal(`
    <span class="eyebrow"><span class="fs-dot" style="display:inline-block;vertical-align:middle;margin-right:6px"></span> Live support</span>
    <h2>We're here ♥</h2>
    <p class="modal-sub">A real human, usually within a few hours and often minutes. Shipping, buybacks, your balance, anything.</p>
    <div class="sup-chat" id="supChat">
      <div class="sup-msg them">hi love! what can we help with today? ♥</div>
    </div>
    <div class="sup-input">
      <input id="supText" placeholder="Type a message…" onkeydown="if(event.key==='Enter')sendSupportMsg()" />
      <button class="btn btn-gold" style="padding:13px 22px;font-size:11px" onclick="sendSupportMsg()">Send</button>
    </div>
    <p class="micro after-note">Prefer email? support@covet.gg</p>
  `);
}
function sendSupportMsg() {
  const inp = document.getElementById("supText");
  const txt = inp.value.trim();
  if (!txt) return;
  const chat = document.getElementById("supChat");
  chat.insertAdjacentHTML("beforeend", `<div class="sup-msg me">${txt.replace(/</g, "&lt;")}</div>`);
  inp.value = "";
  chat.scrollTop = chat.scrollHeight;
  setTimeout(() => {
    if (!document.getElementById("supChat")) return;
    chat.insertAdjacentHTML("beforeend", `<div class="sup-msg them">got it! a real human is jumping in right now ♥ <span style="opacity:0.55">(demo)</span></div>`);
    chat.scrollTop = chat.scrollHeight;
  }, 900);
}

/* ---------- rotating box spotlight: the lux banner ---------- */
