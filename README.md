# UnykornX – XRPL-Native Banking & DEX Infrastructure

UnykornX is a **regulated gateway and infrastructure layer** built on top of the **XRP Ledger's native decentralized exchange (DEX)**.

We do **not** run our own DEX.

Instead, we operate:

- XRPL node and ledger infrastructure,
- Curated access to XRPL's **central limit order book (CLOB) DEX** and AMMs,
- Vault- and document-backed tokenization rails for **stablecoins and real-world assets (RWAs)**,
- Compliance and reporting layers for **banks, exchanges, asset issuers and funds**.

XRPL provides the ledger, transactions, DEX, AMMs and NFT framework.  
UnykornX adds: **infrastructure, curation, vaults, and compliance.**

---

## Core Positioning

> **"UnykornX is an XRPL-native banking & DEX infrastructure layer that lets institutions plug into XRPL's public rails with regulatory-grade controls and documentation."**

Key shifts from older language:

- Not "UnykornX DEX" → it is **"XRPL DEX layer operated by UnykornX"**.
- Not "next-gen DEX" → XRPL's DEX has been live since 2012.
- AMMs are **optional liquidity**, not the main product.
- UnykornX = curation, vault-backing, compliance, and enterprise UX.

---

## What Lives in This Workspace

This repo is the **application + documentation workspace** for UnykornX's XRPL integration and front-facing stack.

High-level components:

- **XRPL Documentation & Narrative**
  - `DEX-AMM-EXCHANGE.md`  
    – Reframed as "XRPL DEX Layer", explaining:
    - CLOB order books
    - Offers and auto-bridging
    - AMMs as optional liquidity
    - Limitations (no native leverage/stop orders; not HFT)
    - Risk & curation (anyone can issue any token)
  - Supporting docs on:
    - Algorithmic trading on XRPL
    - Wallets, accounts, destination tags
    - On-ledger vs off-ledger balances

- **Website & Positioning**
  - `SITE-STRUCTURE.md`  
    – Full 8-page website blueprint for unykornx.com:
      - Home
      - XRPL Infrastructure
      - DEX & Markets
      - Banking & Exchanges
      - NFT & Minting Studio
      - Compliance & Reporting
      - Developers
      - Contact / Partner
    – Includes page objectives, sections, and tone for a luxury fintech site.
  - Brand notes:
    - Dark theme with electric cyan/gold accents
    - "Battleship, not brochure" ethos

- **Readme & Repo Meta**
  - This `README.md` you're reading, aligning the workspace with XRPL-authentic messaging.

(If you've added more docs/code, list them here in your preferred structure.)

---

## System Overview

At a high level, UnykornX provides:

1. **XRPL Node & Ledger Infrastructure**
   - Full-history XRPL nodes for writes and consensus monitoring.
   - Read-optimized nodes (Clio-like) for analytics, DEX data, and dashboards.
   - Optional permissioned XRPL-style domains for regulated flows.

2. **Custody & Wallet Architecture**
   - Cold/warm/hot wallet patterns following XRPL best practices.
   - Destination tag-based mapping of deposits to internal balances.
   - On-ledger vs off-ledger balance-sheet reconciliation.

3. **DEX & Market Access**
   - Access to XRPL's **CLOB DEX** and AMMs.
   - Curation layer for:
     - Core pairs (XRP/XUSD, XRP/fiat-backed, etc.)
     - RWA markets (gold, water, real estate, claims).
     - NFT & membership certificates.
   - Market data feeds and helpers for algorithmic trading.

4. **Tokenization & NFTs**
   - Support for:
     - Stablecoins / IOUs backed by vault documentation.
     - NFTs as vault certificates, memberships, and brand assets.
   - Authorized Minter flows where UnykornX or a partner mints on behalf of issuers.

5. **Compliance & Reporting**
   - Identity and access controls (KYC/KYB tiers).
   - Asset registry with backing and documentation references.
   - Proof-of-reserves views combining on-ledger balances with off-ledger docs.
   - Exportable reports for regulators, auditors, and banks.

---

## Website Structure (Public-Facing)

See `SITE-STRUCTURE.md` for full details. In short:

- **Home** – Positioning, audiences, and quick value story.
- **XRPL Infrastructure** – Nodes, ledger, custody model, monitoring.
- **DEX & Markets** – CLOB DEX, AMMs, curated markets, algo-trading hooks.
- **Banking & Exchanges** – Wallet patterns, deposits, withdrawals, internal ledgers.
- **NFT & Minting Studio** – Authorized minter, vault certificates, membership NFTs.
- **Compliance & Reporting** – Identity, rules, reserves, audit/report exports.
- **Developers** – APIs, XRPL docs, quickstart for integration.
- **Contact / Partner** – Institutional pipeline.

This repo is the **source of truth** for copy and structure used when building the actual site (Webflow / Framer / Next.js / Amplify).

---

## Development & Deployment (High-Level)

_This section is intentionally high-level; adjust once the technical stack is fully wired._

- **Frontend options**
  - Webflow / Framer for marketing site, fed by `SITE-STRUCTURE.md` content.
  - Next.js or similar React framework for app/dashboard surfaces.

- **Backend / Infra**
  - XRPL nodes and read-layers managed under separate infra repos.
  - This workspace links to the XRPL infra rather than running nodes directly.

- **Hosting**
  - Marketing site: could be deployed via AWS Amplify, Vercel or similar.
  - App/Dashboard: same or separate infra, depending on architecture.

---

## For Contributors

When making changes:

- Keep messaging **XRPL-authentic**:
  - We build **on** XRPL's native DEX and features.
  - We do **not** misrepresent UnykornX as "a new DEX."
- Maintain the **luxury fintech** tone:
  - Short, precise, confident.
  - Focus on facts, architecture, and trust.

Key docs to consider updating together:

- `README.md`
- `SITE-STRUCTURE.md`
- `DEX-AMM-EXCHANGE.md`
- Any new pages or flows in the docs / app.

---

## Next Steps

- Implement the public site using `SITE-STRUCTURE.md` as the blueprint.
- Wire content management so these docs stay the **single source of truth**.
- Connect real XRPL infra: node endpoints, XRPL explorers, and live market data into the app and, where appropriate, the public site.

UnykornX exists to make XRPL feel like a **serious, bankable rail** for people who move real assets — this repo is the narrative and structure to match that reality.
