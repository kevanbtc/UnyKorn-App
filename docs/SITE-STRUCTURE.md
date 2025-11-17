# SITE-STRUCTURE.md
> UnykornX – XRPL-Native Banking, DEX & RWA Infrastructure

This document defines the public website structure and messaging for UnykornX as a **luxury fintech gateway** into the XRP Ledger's native DEX, stablecoins, and real-world assets.

The positioning is **not** "we built a new DEX" — it is:

> **UnykornX is a regulated, curated gateway on top of XRPL's native DEX (live since 2012).  
> XRPL provides the ledger, DEX, AMMs and transaction model. UnykornX adds vaults, curation, compliance and human-grade UX.**

---

## 0. Design Language & Tone

- **Look**: BlackRock/Stripe hybrid — serious, minimal, expensive.
- **Palette**:
  - Background: deep navy / charcoal
  - Primary accent: electric cyan or teal
  - Secondary accent: soft gold for "vault / RWA / premium"
- **Typography**:
  - Clean sans-serif (e.g. Inter, SF Pro, Neue Haas)
  - Large, confident headlines; short paragraphs; lots of white/negative space
- **Tone**:
  - Calm, precise, factual
  - "Battleship disguised as a landing page" — power under understatement
  - No hype words like "revolutionary" or "next-gen" unless quoting someone else

---

## 1. Global Navigation

Primary nav (desktop):

1. **Home**
2. **XRPL Infrastructure**
3. **DEX & Markets**
4. **Banking & Exchanges**
5. **NFT & Minting Studio**
6. **Compliance & Reporting**
7. **Developers**
8. **Contact / Partner**

Footer links:

- Docs
- XRPL Explorer / "View on XRPL"
- Legal / Privacy / Terms
- Status (optional later)

---

## 2. Home

**Goal**: In 10 seconds, a serious counterparty understands:
- We build **on XRPL**, not against it.
- We are a **regulated gateway and infrastructure layer**, not just another app.
- Real-world assets + DEX + compliance live here.

### 2.1 Hero

**Headline**  
> **UnykornX: XRPL-Native Banking & DEX Infrastructure**

**Subheadline**  
> A regulated gateway into the XRP Ledger's decentralized exchange, stablecoins, and real-world assets — backed by institutional nodes, vaults, and proof-of-reserves.

**Primary CTA**: `Book Institutional Demo`  
**Secondary CTA**: `Explore XRPL Infrastructure`

Hero visual: subtle diagram or animation showing:
- XRPL ledger blocks
- UnykornX "layer" on top
- Arrows to "Banks", "Exchanges", "Asset Issuers", "Funds"

---

### 2.2 Section – "What UnykornX Is"

Three columns:

1. **XRPL Infrastructure Layer**  
   Full-history XRPL nodes, private endpoints, and monitoring for institutions that need deterministic access to the ledger.

2. **Curated DEX & RWA Markets**  
   We do not run our own DEX. We curate, badge, and surface markets on XRPL's native order-book DEX and AMMs, focusing on vault-backed and compliant assets.

3. **Compliance-First Asset Rail**  
   KYC/KYB, permissioned domains, proof-of-reserves, and exportable audit trails that map directly to how regulators and treasuries think.

---

### 2.3 Section – "How It Works"

3-step horizontal flow:

1. **Connect to Our XRPL Infrastructure**  
   Private endpoints and APIs for ledger reads, transaction submission, and DEX access.

2. **Onboard Assets & Participants**  
   Stablecoins, RWAs, vault certificates, memberships or NFTs — all tied to real documentation and rules.

3. **Trade, Settle & Report**  
   Trades settle on XRPL's DEX/AMMs. UnykornX syncs positions, reserves, and docs into a reporting layer for finance, risk, and compliance.

---

### 2.4 Section – "Built for Serious Counterparties"

Three audience blocks:

- **Banks & Exchanges**  
  Add XRPL/XRP/XUSD and curated XRPL markets with a complete wallet + balance-sheet + DEX integration blueprint.

- **Asset Issuers & RWA Sponsors**  
  Tokenize gold, water rights, real estate, and credit instruments with vault-backed NFTs, stablecoins, and documented reserves.

- **Funds, Desks & OTC**  
  Run strategies directly on XRPL's DEX with reliable endpoints, curated markets, and compliance hooks.

---

### 2.5 Section – "Why XRPL + UnykornX"

Bullets:

- **Native DEX since 2012**  
  XRPL's CLOB DEX executes trades every 3–5 seconds, with low fees and on-chain transparency.

- **UnykornX Curation & Vaults**  
  We separate signal from noise: registry, tagging, vault proofs, and permissioned domains for regulated assets.

- **Regulatory-Grade Documentation**  
  Chain-verifiable reserves plus off-ledger documentation stored, hashed or referenced for auditors and counterparties.

---

### 2.6 Final CTA

> **Turn XRPL into a compliant, revenue-producing rail for your institution.**

Button: `Talk to the Team`

---

## 3. XRPL Infrastructure Page

**Goal**: Show we deeply understand XRPL's ledger model and run real infra — not hitting public nodes and calling it a day.

### 3.1 Hero

> **XRPL Infrastructure Operated Like Banking Core**

> Full-history nodes, private endpoints, permissioned domains, and monitoring — purpose-built for markets, RWAs, and exchanges.

---

### 3.2 Section – "Ledger & State Data (Translated for Finance)"

Explain:

- Each ledger version: **Header + Transaction Set + State Data**
- State data holds:
  - Accounts, balances
  - Offers and books
  - Trust lines and tokens
  - NFTs, escrows, payment channels

UnykornX takes this and exposes:

- Account views ("balance sheet style")
- Market views (books, trades, AMM pools)
- NFT / certificate registries (vaults, RWAs, memberships)

---

### 3.3 Section – "Our Node Fleet"

Three cards:

1. **Core Nodes**  
   Full-history rippled servers for writes, consensus observation, and internal integrity checks.

2. **Read Layer (Clio-Like)**  
   Read-optimized servers for high-volume queries (books, trades, account_info), so bots, dashboards, and risk engines don't touch core nodes directly.

3. **Permissioned Domains (Optional)**  
   XRPL-style environments for:
   - Controlled KYC/KYB-only trading
   - Restricted RWAs
   - Rule-bound issuers and participants

---

### 3.4 Section – "Account & Wallet Architecture"

Explain:

- **Custodial vs non-custodial** support.
- Institutional pattern:
  - **Cold wallet** — long-term reserves; offline keys.
  - **Warm wallet** — buffer between cold and hot.
  - **Hot wallet** — live operations (deposits/withdrawals/DEX usage).
- Destination tags for mapping on-ledger deposits to off-ledger customer accounts.

Callout:

> Our templates follow XRPL best practices for reserves, key usage, and compromise scenarios, and plug directly into your internal ledger.

---

### 3.5 Section – "Transactions, Requests & Monitoring"

Grid:

- **Transactions (Writes)** – Payments, OfferCreate/Cancel, trust lines, NFT minting, escrows, payment channels.
- **Requests (Reads)** – account_info, book_offers, account_nfts, ledgers, tx history.
- **Monitoring** – Subscription to proposed and validated transactions, queue depth, ledger close timing.
- **Abstractions** – We map XRPL JSON into "positions, orders, balances, certificate states" aligned with finance and compliance teams.

---

## 4. DEX & Markets Page

**Goal**: Educate without "whitepaper speak." Emphasize we use XRPL's DEX, not replace it.

### 4.1 Hero

> **XRPL DEX, Curated by UnykornX**

> The XRP Ledger provides the order-book DEX and AMMs. UnykornX provides registry, filters, and interfaces for serious assets and counterparties.

---

### 4.2 Section – "How XRPL's DEX Works"

Key points:

- **CLOB (Central Limit Order Book)**: Orders are Offers.
- **Pairs**: XRP/token, token/token, with XRP auto-bridging.
- **Execution**: Every 3–5 seconds at ledger close; best price wins.
- **Partial fills & remainder offers**.

Show simple diagram: order books on both sides; new Offer consuming existing ones; remainder sitting on the book.

---

### 4.3 Section – "Market Types on UnykornX"

Cards:

1. **Core Liquidity Pairs**  
   XRP ↔ fiat-backed tokens (e.g. XUSD), XRP ↔ institutional tokens.

2. **RWA Markets**  
   Gold, water rights, real estate, claims, other vaulted assets — all registered and documented.

3. **Membership & Certificate Markets**  
   NFTs and tokens representing rights, access, vault certificates.

Each card has small labels:
- `Curated`
- `Vault-Backed` (where applicable)
- `Regulated Access` (where applicable)

---

### 4.4 Section – "Algorithmic Trading & Market Data"

Explain:

- XRPL is ideal for:
  - Arbitrage (on-chain and cross-exchange)
  - Quant and algo strategies
- UnykornX provides:
  - Low-latency, stable DEX feeds (order books, trades, pools)
  - Risk and slippage helpers
  - Optional policy filters: allowed pairs, issuers, domains.

---

### 4.5 Section – "AMMs Alongside Order Books"

Points:

- XRPL natively supports AMMs.
- AMMs live alongside the order books.
- UnykornX:
  - Surfaces pool metrics and health
  - Curates which pools are shown to which users
  - Ties AMM participation to identity and compliance (if required)

---

## 5. Banking & Exchanges Page

**Goal**: "List XRP/XUSD/RWA tokens via UnykornX without reinventing XRPL integration."

### 5.1 Hero

> **Banks & Exchanges: XRPL Integration Without Guesswork**

> Cold/warm/hot wallet patterns, destination tags, internal ledgers, and DEX connectivity — pre-modeled and wired for compliance.

---

### 5.2 Section – "What You Get"

Bullets:

- XRPL wallet architecture (cold/warm/hot) with risk patterns.
- On-ledger ↔ off-ledger balance-sheet mapping.
- Deposit/withdrawal flow templates.
- Optional DEX and AMM access patterns.

---

### 5.3 Section – "Flow of Funds"

Diagram + copy mirroring XRPL's official guidance, but tailored:

1. **Deposit**  
   Customer sends XRP or tokens to your cold wallet with a destination tag.  
   → UnykornX detects and maps to internal customer account.

2. **Internal Trading / DEX Access**  
   Customers trade off-ledger (your internal books) or via XRPL DEX using your hot wallet.

3. **Rebalancing**  
   Periodic movement between cold/warm/hot via XRPL Payment tx to minimize hot exposure.

4. **Withdrawal**  
   Debit off-ledger balance → submit on-ledger Payment to customer's XRPL address.

---

### 5.4 Section – "Compliance and Reporting for Custodians"

- Tagging and grouping of:
  - Customer funds vs. house funds
  - On-ledger vs. off-ledger exposure
- Reconciliation tools:
  - Sum of customer credits ≤ on-ledger reserves
- Export formats:
  - CSV, JSON, PDF compliance reports

---

## 6. NFT & Minting Studio Page

**Goal**: Wrap Authorized Minter, NFToken flows, and vault NFTs into a productized "Minting Studio".

### 6.1 Hero

> **UnykornX Minting Studio**

> Authorized minting, vault-backed certificates, and curated NFT markets on XRPL.

---

### 6.2 Section – "Roles"

- **Issuer / Creator** – Owns the brand, artwork, or underlying asset.
- **Authorized Minter** – Technical minter (could be you or UnykornX) that mints NFTs under issuer's authority.
- **Marketplace / DEX** – Where NFTs are offered and traded.

---

### 6.3 Section – "Use Cases"

Cards:

1. **Vault Certificates**  
   NFTs that point to vault documentation (IPFS URLs), representing ounces of gold, water rights shares, or fractional real estate.

2. **Membership & Access Tokens**  
   NFTs granting access to products, services, communities, or events.

3. **Creator / Brand Drops**  
   Authorized minter handles the minting, the issuer receives royalties via XRPL's transfer fee mechanics.

---

### 6.4 Section – "Flow: Authorized Minter"

1. Issuer grants Authorized Minter permissions (`asfAuthorizedNFTokenMinter`).
2. Authorized Minter mints NFTs on behalf of issuer:
   - Flags (transferable, burnable)
   - Transfer fee (royalties)
   - NFTokenTaxon (collection/series)
   - URI (usually IPFS)
3. NFTs listed on:
   - XRPL NFT markets
   - UnykornX curated interfaces
4. Royalties flow to issuer; distribution splits handled off-ledger or via custom logic.

---

## 7. Compliance & Reporting Page

**Goal**: This is the "show me your spine" page for regulators, banks and funds.

### 7.1 Hero

> **Compliance-Grade By Design**

> Identity, rules, reserves, and reporting are not add-ons — they are the frame around everything UnykornX runs on XRPL.

---

### 7.2 Section – "Identity & Access"

- KYC/KYB tiered onboarding (light view on public site).
- Permissioned domains for:
  - Restricted asset classes
  - Jurisdictional constraints
  - Whitelisted/blacklisted participants

---

### 7.3 Section – "Asset Rules & Classifications"

- Asset registry with:
  - Issuer identity
  - Backing type (cash, securities, commodities, RWAs)
  - Documentation pointers (legal docs, opinions, vault statements)
  - Trading rules (who can hold, where it can trade)

---

### 7.4 Section – "Proof-of-Reserves & Documentation"

- On-ledger:
  - Account balances
  - Token supplies
  - NFToken distributions
- Off-ledger:
  - Cheques, bank statements, vault reports, legal opinions (stored + hashed, e.g. IPFS or similar)
- Combined in:
  - Reserve dashboards
  - Exportable reports for auditors, banks, regulators

---

### 7.5 Section – "Regulatory & Tax Reporting Hooks"

- Trade, position and transaction exports
- Support for:
  - Capital gains / P&L summaries
  - Jurisdiction-specific reporting (high level on site; full detail in private docs)

---

## 8. Developers Page

**Goal**: Show that this is an infra stack devs can actually build on, with XRPL authenticity.

### 8.1 Hero

> **Develop on XRPL with UnykornX Infrastructure**

> Private endpoints, curated markets, and clean abstractions over XRPL's JSON APIs.

---

### 8.2 Section – "Quickstart"

Steps (high-level):

1. Create developer account / request API access.
2. Get `wss` / `https` endpoint and credentials.
3. Send your first `account_info` / `submit` calls.
4. Read DEX books, submit test Offers, query NFTs.

---

### 8.3 Section – "Core API Areas"

- Accounts & Wallets
- DEX & Order Books
- AMMs & Pools
- NFTs & Minting
- Compliance & Registry

Each links to internal docs or external XRPL docs as appropriate.

---

### 8.4 Section – "XRPL Documentation Hub"

Curated links to XRPL.org:

- Transactions & Requests
- DEX / Offers / AMMs
- NFTs & Authorized Minter
- Algorithmic Trading
- Wallets & Accounts

With one-sentence explanation of how UnykornX layers on top of each.

---

## 9. Contact / Partner Page

Simple, no fluff.

Sections:

- **Who Should Contact Us**
  - Banks & licensed exchanges
  - Asset issuers (gold, water, real estate, claims)
  - Funds, OTC desks, market makers

- **What to Expect**
  - Technical deep-dive
  - Legal/compliance overview
  - Path to pilot / sandbox integration

Form:
- Name, org, role
- Email
- Type of institution
- Brief description

---

_End of SITE-STRUCTURE.md_
