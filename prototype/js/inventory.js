/* COVET · my shelf */

const STATUS_META = {
  vault: { label: "On your shelf", cls: "" },
  shipping: { label: "Shipping", cls: "ship" },
  sold: { label: "Sold back", cls: "sold" },
  stockout: { label: "Sold out · needs your pick", cls: "pick" },
  credited: { label: "Credited", cls: "sold" },
  refunded: { label: "Refunded", cls: "sold" },
};

/* stock-out choices, inline on the card (see markStockout in app.js) */
function stockoutPanel(item, drop) {
  const so = item.stockout || {};
  const subs = (so.subs || []).map((id) => allDrops().find((d) => d.id === id)).filter(Boolean);
  return `<div class="so-panel">
      <p class="micro"><b style="color:var(--ink)">It sold out before we could pack it.</b> Our fault, your pick: a piece of equal or greater value, or the full ${money(drop.value)} as credit.</p>
      ${subs.length ? `<div class="sub-row">${subs.map((d) => `
        <button class="sub-card" onclick="resolveStockout('${item.uid}','sub','${d.id}')">
          ${productArt(d, 34)}
          <b>${d.house} ${d.name}</b>
          <span>${money(d.value)} · in stock</span>
        </button>`).join("")}</div>` : ""}
      <div class="inv-actions"><button class="btn btn-gold" onclick="resolveStockout('${item.uid}','credit')">Take ${money(drop.value)} credit</button></div>
      <p class="micro">Prefer the ${money(so.price || 0)} back on your card? <a href="#" style="color:var(--gold)" onclick="resolveStockout('${item.uid}','refund');return false">Refund it</a>${so.by ? ` · No pick by ${so.by} and the credit applies automatically.` : ""}</p>
    </div>`;
}

function seedDemoInventory() {
  /* first visit: seed two pulls so the page demos well */
  if (localStorage.getItem("covet_inv_seeded")) return;
  localStorage.setItem("covet_inv_seeded", "1");
  if (getInv().length) return;
  setInv([
    { uid: "demo1", txn: "CVT-M3JR6P", caseId: "itgirl", dropId: "aventus10", boxName: "The It Girl Box", odds: 1.5, status: "vault", ts: "2026-08-09" },
    { uid: "demo2", txn: "CVT-M1KS8Q", caseId: "oldmoney", dropId: "layton75", boxName: "The Old Money Box", odds: 6, status: "shipping", ts: "2026-08-06" },
  ]);
}
function seedDemoStockout() {
  /* one sold-out pull so the shelf demos the stock-out choices */
  if (localStorage.getItem("covet_inv_so_seeded")) return;
  localStorage.setItem("covet_inv_so_seeded", "1");
  const list = getInv();
  list.unshift({ uid: "demo3", txn: "CVT-M7SO4T", caseId: "maincharacter", dropId: "br540_35", boxName: "The Main Character Box", odds: 2, status: "vault", ts: "2026-08-11" });
  setInv(list);
  markStockout("demo3", ["delinaex", "aventus100g"], 45);
}

function renderSealedBox() {
  /* a paid-but-unopened box waits on the shelf until she opens it */
  try {
    const paid = JSON.parse(localStorage.getItem("covet_paid_box"));
    if (!paid || !paid.id) return "";
    const k = getCase(paid.id);
    if (!k) return "";
    return `<div class="inv-card" style="border:2px dashed var(--gold);background:var(--gold-dim)">
      <div style="font-size:34px">🎀</div>
      <div style="flex:1">
        <b style="font-family:var(--serif);font-size:16px">${k.name}</b>
        <p class="micro" style="margin-top:4px">Paid for and still sealed. The reveal is waiting for you; nothing happens until you open it.</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px">
        <a class="btn btn-gold" href="case.html?c=${paid.id}">Open my box ♥</a>
        ${paid.price ? `<button class="btn btn-ghost" onclick="sellSealed()">Give it back · ${money(Math.floor(paid.price * 0.9))} credit</button>
        <p class="micro" style="max-width:240px;margin:6px auto 0;text-align:center">Give-back credit opens boxes only.</p>` : ""}
      </div>
    </div>`;
  } catch { return ""; }
}
function sellSealed() {
  try {
    const paid = JSON.parse(localStorage.getItem("covet_paid_box"));
    if (!paid || !paid.price) return;
    const credit = Math.floor(paid.price * 0.9);
    localStorage.removeItem("covet_paid_box");
    setWallet(getWallet() + credit);
    setLocked(getLocked() + credit); /* boxes-only credit: closes the card-to-cash pipe */
    renderInventory();
    openModal(`
      <span class="eyebrow">Given back, sealed</span>
      <h2>${money(credit)} landed</h2>
      <p class="modal-sub">Your unopened box went back on our shelf, and ${money(credit)} of the ${money(paid.price)} you paid is in your balance as box credit. It opens any box.</p>
      <div class="modal-actions">
        <a class="btn btn-gold" href="cases.html">Pick a different box</a>
        <button class="btn btn-quiet" onclick="closeModal()">Done</button>
      </div>
    `);
  } catch {}
}
function shipItem(uid) {
  const it = getInv().find((x) => x.uid === uid);
  if (it && isFreeCaseId(it.caseId) && freeShipGate()) return;
  if (!hasKyc()) { requireKyc(() => shipItem(uid)); return; } /* KYC: first free box or first shipment, whichever comes first */
  const untracked = it && isUntrackedDrop(it.caseId, it.dropId);
  requireAddress(() => {
    openModal(`
      <span class="eyebrow">Free shipping</span>
      <h2>Confirm delivery</h2>
      <p class="modal-sub">${untracked ? UNTRACKED_NOTE : "Ships sealed and insured, signature required."}</p>
      <p class="addr-chip">${addrLine()} <a href="#" onclick="openAddressModal(() => shipItem('${uid}'));return false">edit</a></p>
      <div class="modal-actions">
        <button class="btn btn-gold" onclick="confirmShip('${uid}')">Confirm · free</button>
        <button class="btn btn-quiet" onclick="closeModal()">Cancel</button>
      </div>
    `);
  });
}
function confirmShip(uid) {
  const list = getInv();
  const item = list.find((i) => i.uid === uid);
  if (item) {
    item.status = "shipping";
    if (isFreeCaseId(item.caseId)) bumpFreeShips();
  }
  setInv(list);
  renderInventory();
  openModal(`
    <span class="eyebrow">Confirmed</span>
    <h2>On its way soon</h2>
    <p class="modal-sub">${item && isUntrackedDrop(item.caseId, item.dropId)
      ? "Ships by plain mail within 2 business days, no tracking number. Usually arrives in 7 to 10 business days."
      : "Ships within 2 business days. Tracking lands in your inbox."}</p>
    <div class="modal-actions"><button class="btn btn-gold" onclick="closeModal()">Done</button></div>
  `);
}

function renderInventory() {
  const host = document.getElementById("invHost");
  const hideDone = localStorage.getItem("covet_hide_done") === "1";
  const chk = document.getElementById("hideDone");
  if (chk) chk.checked = hideDone;
  const list = hideDone ? getInv().filter((i) => i.status === "vault" || i.status === "stockout") : getInv();
  const sealed = renderSealedBox();
  if (!list.length) {
    host.innerHTML = sealed + `<div class="empty-state">
      <div class="display">${sealed ? "One box, still sealed." : "Nothing here yet."}</div>
      <p>${sealed ? "Open it above and the pull lands right here." : "Unbox your first bottle and it will land here, sealed, with both options waiting."}</p>
      ${sealed ? "" : `<a class="btn btn-gold" style="margin-top:24px" href="cases.html">Browse boxes</a>`}
    </div>`;
    return;
  }
  host.innerHTML = sealed + `<div class="inv-grid">` + list.map((item) => {
    const kase = getCase(item.caseId);
    const drop = kase.drops.find((d) => d.id === item.dropId) || allDrops().find((d) => d.id === item.dropId);
    if (!drop) return "";
    const rar = RARITY[drop.rarity];
    const st = STATUS_META[item.status] || STATUS_META.vault;
    const boxName = item.boxName || kase.name;
    const actions = item.status === "vault"
      ? `<div class="inv-actions">
          <button class="btn btn-gold" onclick="shipItem('${item.uid}')">Ship it</button>
          <button class="btn btn-ghost" onclick="openSellModal('${item.caseId}','${drop.id}','${item.uid}')">Sell ${money(buybackFor(getCase(item.caseId), drop))}</button>
        </div>`
      : item.status === "stockout"
        ? stockoutPanel(item, drop)
      : item.status === "credited"
        ? `<p class="micro">Sold out, so ${money(item.creditAmt || drop.value)} went straight to your balance. Sorry about this one ♥</p>`
      : item.status === "refunded"
        ? `<p class="micro">Sold out, so the ${money((item.stockout && item.stockout.price) || 0)} you paid is heading back to your card in 3 to 5 business days.</p>`
      : item.status === "shipping"
        ? (item.subFor ? `<p class="micro">Swapped in for your sold-out ${item.subFor}.</p>` : "") + (isUntrackedDrop(item.caseId, drop.id)
          ? `<p class="micro">On its way by plain mail, no tracking number. Usually 7 to 10 business days.</p>`
          : `<p class="micro">Tracking arrives by email. Ships sealed, insured, signature required.</p>`)
        : `<p class="micro">Repurchased at ${money(buybackFor(getCase(item.caseId), drop))}. Credit is in your balance.</p>`;
    return `<div class="inv-card${item.status === "stockout" ? " needs-pick" : ""}" style="--rar:${rar.color}">
      <span class="status-badge ${st.cls}">${st.label}</span>
      <div class="inv-top">
        <div class="bottle-tile" style="--rar:${rar.color}">${productArt(drop, 38)}</div>
        <div class="inv-name"><b>${drop.house} ${drop.name}</b><span>${drop.conc} · ${drop.size} · <span class="rarity-chip" style="--rar:${rar.color}">${rar.label}</span></span></div>
      </div>
      <div class="inv-line"><span>Pulled ${item.ts} · ${boxName}${item.txn ? ` · <span style="letter-spacing:0.04em">#${item.txn}</span>` : ""}</span><b>${money(drop.value)}</b></div>
      ${actions}
    </div>`;
  }).join("") + `</div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  seedDemoInventory();
  seedDemoStockout();
  renderInventory();
});
