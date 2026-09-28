# Covet · design prototype

Static clickable prototype for Covet, a luxury mystery-box site. Plain HTML/CSS/JS, no frameworks, no build step. **All data is mock and all numbers are design placeholders**, see "Production notes" before wiring anything real.

## Run it

```
python3 -m http.server 4177 --directory .
```

Then open http://localhost:4177. Any static server works.

## Pages

| Page | What it is |
|---|---|
| `index.html` | Home: hero, giveaway banner, live pulls feed, daily free boxes, interactive wishlist section, giveaway showcase, featured boxes, luckiest wall, how it works, trust strip |
| `cases.html` | All 11 curated boxes + wishlist card |
| `case.html?c=<id>` | Box detail: reveal reel + full odds table. Also handles `c=custom` (wishlist box) and free daily boxes (`c=dailyscent`, `c=dailybeauty`) |
| `build.html` | Wishlist builder: search, category filters, heart grid, floating side rail, bottom slider list with custom odds |
| `inventory.html` | My Shelf: pulled items with Ship / Instant-sell states |
| `profile.html` | Profile: best pull flex card, creator code, claim earnings, log out |
| `creators.html` | Creator/affiliate program + instant code claim |
| `fairness.html` | Provably-fair explainer with a working SHA-256 verifier |
| `modals.html` | Internal design gallery of every modal state (linked discreetly in the footer; remove before launch) |

## Code layout

- `js/data.js` — catalog: `CASES` (curated boxes), `FREE_BOXES` (daily), `EXTRA_DROPS` (wishlist-only beauty/clothes), wishlist storage + custom-odds math (`normalizeWishPcts`, `setWishPct`, `wishlistBoxFrom`), giveaway config.
- `js/art.js` — `productArt(drop, width)`: parametric SVG product renders per SKU (`ART` map). **Swap this one function for the supplier API's image feed in production.** Also wishlist canonicalization (`canonicalId`, `allDropsUnique`) so size variants collapse to one product.
- `js/app.js` — shared shell (header/footer), wallet, modal system, result/buyback/withdraw/gate/giveaway/referral modals, confetti, wishlist hearts, daily-entry + daily-box claims, box cards renderer.
- `js/reveal.js` — the reveal reel and box page logic, including free-box handling.
- `js/inventory.js` — shelf rendering.
- All state is `localStorage` under `covet_*` keys. Cache-busters (`?v=N`) on asset links.

## Business rules the design encodes (keep these)

- Language: it's a **box**, you **unbox** it. Banned words anywhere in copy: gambling, casino, bet, jackpot, winnings, cash out, wagered.
- Wallet is **dollars**, always. "Credit" is a label for spend-first balance, never a separate currency.
- Buyback = repurchase offer; per-item price shown up front in every odds table. Floor: worst pull ≥ 70% of box price at buyback (curated boxes).
- **Withdrawals: $20 minimum**, and credits/deposits unlock for withdrawal only after **one cash-funded (paid) open**. Free-box opens do not count toward the unlock.
- Daily free boxes: one open per day across the options; commons intentionally sit below the withdrawal minimum.
- Giveaway: $1 opened = 1 entry (cash-funded opens only, cap ~500/week in official rules), share-a-pull = extra entries, **free daily entry claim is the no-purchase route** and must have equal dignity. Never sell entries directly.
- Creator codes: instant claim, apply at **sign-up for new accounts only**; earnings = 0.5% / 1% / 2% (tiers by referral count) of referrals' **cash-funded** opens, paid in credit, 12-month attribution, clawed back on refund/withdrawal, never earned on credit-funded opens, no self-referral.
- Age/state gate: 18+, block WA and ID at minimum (see state notes with counsel).

## Production notes

- **Every odds table is a layout placeholder.** Most mock boxes have expected value above the box price. Generate real odds from: per-item wholesale cost (supplier API) → instant-sell offer ≤ wholesale (except the floor item) → price ≈ 1.65× expected wholesale.
- Product art: replace `productArt()` output with real product photos from the fulfillment API.
- KYC at first withdrawal (not signup); W-9 for creators over $600/yr.
- The reveal outcome must come server-side from the provably-fair seed scheme described on `fairness.html`.
