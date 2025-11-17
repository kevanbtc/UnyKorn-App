# 📋 UnykornX Project Navigation

**Status Legend:**
🟢 Complete | 🟡 In Progress | 🔴 Not Started | 🔵 Reference | ⚡ Quick Action

---

## 🗺️ Master Directory

### 📘 Core Documentation

| Document | Status | Purpose | Quick Links |
|----------|--------|---------|-------------|
| 📖 [README.md](../README.md) | 🟢 | Project overview, XRPL positioning | [Positioning](#positioning) |
| 🏗️ [ARCHITECTURE.md](./ARCHITECTURE.md) | 🟢 | System design & tech stack | [Stack](#tech-stack) |
| 📋 [SITE-STRUCTURE.md](./SITE-STRUCTURE.md) | 🟢 | 8-page website blueprint | [Pages](#page-structure) |
| 📝 [FINAL-SUMMARY.md](./FINAL-SUMMARY.md) | 🟢 | Strategic repositioning docs | [Messaging](#messaging) |
| 🚀 [DEPLOYMENT-ARCHITECTURE.md](./DEPLOYMENT-ARCHITECTURE.md) | 🟢 | 3-layer AWS deployment guide | [Deploy](#deployment) |

### 🔧 Technical Specifications

| Document | Status | Purpose | Quick Links |
|----------|--------|---------|-------------|
| 🌐 [XRPL-INFRASTRUCTURE.md](./XRPL-INFRASTRUCTURE.md) | 🟢 | Node fleet, custody, vaults | [Nodes](#xrpl-nodes) |
| 💱 [DEX-AMM-EXCHANGE.md](./DEX-AMM-EXCHANGE.md) | 🟢 | DEX integration (since 2012) | [DEX](#dex-mechanics) |
| 💰 [STABLECOINS-IOU.md](./STABLECOINS-IOU.md) | 🟢 | IOU mechanics, treasury | [Stablecoins](#stablecoins) |
| 🏦 [RWA-ENGINE.md](./RWA-ENGINE.md) | 🟢 | Real-world asset tokenization | [RWA](#rwa-flow) |
| 🤖 [AI-SWARM.md](./AI-SWARM.md) | 🟢 | Multi-agent MCP orchestration | [Swarm](#ai-agents) |
| ⚖️ [COMPLIANCE-DISCLOSURES.md](./COMPLIANCE-DISCLOSURES.md) | 🟢 | Legal, regulatory, disclosures | [Legal](#compliance) |

### 💻 Implementation Guides

| Document | Status | Purpose | Quick Links |
|----------|--------|---------|-------------|
| 🎨 [CODE-TEMPLATES.md](./CODE-TEMPLATES.md) | 🟢 | React components (NavBar, Footer, ChatDock) | [Components](#components) |
| 🔐 [SECURITY/UNYKORNX_WALLETS_PRIVATE.md](../SECURITY/UNYKORNX_WALLETS_PRIVATE.md) | 🟢 | Wallet seeds & private keys (git-ignored) | [Wallets](#wallets) |
| 📦 [infra/scripts/](../infra/scripts/) | 🟡 | Deployment scripts, automation | [Scripts](#scripts) |

---

## 🎯 Quick Navigation by Task

### 🚀 Deployment Phase
```
┌─────────────────────────────────────────────────┐
│ Current Stage: Amplify Setup                    │
├─────────────────────────────────────────────────┤
│ ✅ 1. GitHub Repo Created (kevanbtc/UnyKorn-App) │
│ 🟡 2. Connect to AWS Amplify                     │
│ ⏳ 3. Build Component Library                    │
│ ⏳ 4. Launch EC2 Reserves API                    │
│ ⏳ 5. Wire MCP/AI Swarm                          │
│ ⏳ 6. Configure Custom Domain                    │
└─────────────────────────────────────────────────┘
```

**Next Action:** [Connect GitHub to Amplify](#amplify-setup)

### 🧱 Component Architecture
```
┌──────────────────────────────────────────────────┐
│ Frontend Structure (Next.js App Router)          │
├──────────────────────────────────────────────────┤
│                                                  │
│  app/                                            │
│  ├── layout.tsx ────────────┐                   │
│  │   └── NavBar             │ 🟢 Template Ready │
│  │   └── Footer             │ 🟢 Template Ready │
│  │   └── ChatDock ──────────┼─ 🔴 Needs Swarm  │
│  │                           │                   │
│  ├── page.tsx (Home)         │ 🟡 Basic Content │
│  ├── xrpl-infrastructure/    │ 🟡 Basic Content │
│  ├── dex-markets/            │ 🟡 Basic Content │
│  ├── banking-treasury/       │ 🟡 Basic Content │
│  ├── nft-studio/             │ 🟡 Basic Content │
│  ├── compliance/             │ 🟡 Basic Content │
│  ├── developers/             │ 🟡 Basic Content │
│  └── contact/                │ 🟡 Basic Content │
│                               │                   │
│  components/                  │ 🔴 Not Created   │
│  ├── NavBar.tsx              │                   │
│  ├── Footer.tsx              │                   │
│  ├── Section.tsx             │                   │
│  └── ChatDock.tsx            │                   │
│                               │                   │
│  api/                         │ 🔴 Not Created   │
│  └── chat/                    │                   │
│      └── route.ts ───────────┼─ Proxy to Swarm  │
│                               │                   │
└───────────────────────────────┴───────────────────┘
```

### 🏗️ System Architecture
```
┌─────────────────────────────────────────────────────────────────┐
│                     UnykornX System Map                          │
└─────────────────────────────────────────────────────────────────┘

    🌐 USERS
     │
     ↓
┌────────────────┐
│  AWS Amplify   │ ← Front-end hosting (Next.js)
│  + CloudFront  │   Auto-deploy from GitHub
└────┬───────────┘   Custom domain: digitalgiant.app
     │
     ├──→ 📱 Static Pages (8 pages)
     │    └─ Home, XRPL Infra, DEX, Banking, NFT, Compliance, Devs, Contact
     │
     ├──→ 🤖 ChatDock Component
     │    └─ POST /api/chat → Proxy to AI Swarm
     │
     └──→ 📊 Live Data Endpoints
          └─ GET /api/reserves → EC2 web-main-01

     ↓
┌────────────────────────────────────────────────────┐
│  EC2 web-main-01 (t3.small Ubuntu 22.04)          │
│  + Nginx reverse proxy                             │
│  + Node.js API server                              │
│  + Elastic IP (stable addressing)                  │
└────┬───────────────────────────────────────────────┘
     │
     ├──→ GET /api/public/reserves
     │    └─ Returns: Santander PoF, Ruby Collection, TCA, etc.
     │
     ├──→ GET /api/public/xrpl/nodes
     │    └─ Returns: Fleet status (core, treasury, member-api)
     │
     └──→ SSL via Let's Encrypt (certbot)

     ↓
┌────────────────────────────────────────────────────┐
│  XRPL Node Fleet (existing infrastructure)        │
├────────────────────────────────────────────────────┤
│  • donkx-xrpl-core (full-history rippled)         │
│  • Treasury node (vault management)                │
│  • Member-API node (read-optimized)                │
└────┬───────────────────────────────────────────────┘
     │
     └──→ XRP Ledger Mainnet

     ↓
┌────────────────────────────────────────────────────┐
│  MCP / AI Swarm (backend infrastructure)          │
├────────────────────────────────────────────────────┤
│  POST /ai/chat                                     │
│  └─ Multi-agent orchestration:                    │
│     • XRPL Expert (node queries, DEX mechanics)   │
│     • Reserve Analyst (PoF data, RWA status)      │
│     • Compliance Navigator (legal, disclosures)   │
│     • Developer Assistant (docs, API examples)    │
└────────────────────────────────────────────────────┘
```

---

## 🎨 Component Relationship Map

```
┌──────────────────────────────────────────────────────────┐
│                 Component Dependency Tree                 │
└──────────────────────────────────────────────────────────┘

app/layout.tsx (Root)
 │
 ├─→ 🎨 NavBar.tsx
 │    ├─ usePathname() ← Next.js hook
 │    ├─ Active state detection
 │    └─ Links to all 8 pages
 │
 ├─→ 🧩 {children} ← Page content
 │    │
 │    ├─→ app/page.tsx (Home)
 │    │    └─→ Section.tsx (reusable container)
 │    │
 │    ├─→ app/xrpl-infrastructure/page.tsx
 │    │    ├─→ Section.tsx
 │    │    └─→ fetch reserves API (server component)
 │    │
 │    ├─→ app/dex-markets/page.tsx
 │    │    └─→ Section.tsx
 │    │
 │    ├─→ app/banking-treasury/page.tsx
 │    │    └─→ Section.tsx
 │    │
 │    ├─→ app/nft-studio/page.tsx
 │    │    └─→ Section.tsx
 │    │
 │    ├─→ app/compliance/page.tsx
 │    │    └─→ Section.tsx
 │    │
 │    ├─→ app/developers/page.tsx
 │    │    └─→ Section.tsx
 │    │
 │    └─→ app/contact/page.tsx
 │         └─→ Section.tsx
 │
 ├─→ 🦶 Footer.tsx
 │    ├─ 4-column grid (Product, Resources, Company, Explorers)
 │    └─ External links (XRPL.org, XRPScan, etc.)
 │
 └─→ 💬 ChatDock.tsx
      ├─ useState() for open/closed, messages, input
      ├─ POST /api/chat ← Proxy to swarm
      └─ Floating UI (bottom-right, z-50)

API Routes:
 │
 └─→ app/api/chat/route.ts
      ├─ NextRequest/NextResponse
      ├─ process.env.SWARM_ENDPOINT
      └─ Proxy messages to AI swarm backend
```

---

## 🌊 XRPL Infrastructure Topology

```
┌──────────────────────────────────────────────────────────────────┐
│              XRPL Node Fleet & Data Flow                          │
└──────────────────────────────────────────────────────────────────┘

         XRP LEDGER MAINNET
                │
                ↓
    ┌───────────────────────────┐
    │  donkx-xrpl-core          │ ← Full-history rippled
    │  Role: Write & Consensus  │   • Submit transactions
    │  Port: 51234/54321         │   • Watch consensus
    └───────┬───────────────────┘   • Integrity checks
            │
            ├─→ Treasury Operations
            │    └─ Vault management
            │       └─ Reserve line tracking
            │
            └─→ Member API Layer
                 └─ Read-optimized queries
                    ├─ GET account_info
                    ├─ GET book_offers (DEX)
                    ├─ GET account_lines (IOUs)
                    └─ GET ledger (state)

         ↓ DATA FLOWS TO ↓

┌──────────────────────────────────────────────────────────────────┐
│                     Reserve Registry                              │
├──────────────────────────────────────────────────────────────────┤
│  Santander PoF Line:                                             │
│    • EUR 200,000,000                                             │
│    • Status: PENDING_BANK_VERIFICATION                           │
│    • Usage: 65% (€130M allocated)                                │
│                                                                   │
│  Ruby Collection RWA:                                            │
│    • USD 376,000,000                                             │
│    • Status: CUSTODIED_APPRAISED                                 │
│    • Vault: Singapore Freeport                                   │
│                                                                   │
│  TCA Tranche:                                                    │
│    • USD 50,000,000                                              │
│    • Status: PENDING_ONCHAIN_MAPPING                             │
│    • Lockup: 2025-12-31                                          │
└──────────────────────────────────────────────────────────────────┘

         ↓ EXPOSED VIA ↓

┌──────────────────────────────────────────────────────────────────┐
│              Public Read-Only API (EC2 web-main-01)              │
├──────────────────────────────────────────────────────────────────┤
│  GET /api/public/reserves                                        │
│  GET /api/public/xrpl/nodes                                      │
│  Rate-limited: 100 req/min                                       │
│  CORS: digitalgiant.app only                                     │
└──────────────────────────────────────────────────────────────────┘
```

---

## 🚀 Deployment Workflow Tree

```
┌──────────────────────────────────────────────────────────────────┐
│            UnykornX Deployment Checklist                          │
└──────────────────────────────────────────────────────────────────┘

📦 PHASE 1: GitHub + Amplify
 ├─ ✅ Create GitHub repo (kevanbtc/UnyKorn-App)
 ├─ ✅ Push Next.js site structure
 ├─ 🟡 Connect repo to AWS Amplify
 │   ├─ Choose "Deploy from GitHub"
 │   ├─ Authorize GitHub access
 │   ├─ Select kevanbtc/UnyKorn-App
 │   └─ Auto-detect Next.js build settings
 ├─ ⏳ Verify build & deploy
 │   └─ Get live URL: https://main.xxxxx.amplifyapp.com
 └─ ⏳ Test 8 pages render correctly

🧱 PHASE 2: Component Library
 ├─ ⏳ Create app/components/ folder
 ├─ ⏳ Copy from CODE-TEMPLATES.md:
 │   ├─ NavBar.tsx
 │   ├─ Footer.tsx
 │   ├─ Section.tsx
 │   └─ ChatDock.tsx
 ├─ ⏳ Update layout.tsx to import components
 ├─ ⏳ Add dark theme (bg-[#050814])
 └─ ⏳ Test locally: npm run dev

🖥️ PHASE 3: EC2 Reserves API
 ├─ ⏳ Launch t3.small Ubuntu 22.04
 ├─ ⏳ Attach Elastic IP
 ├─ ⏳ Install: Nginx, Node.js, PM2
 ├─ ⏳ Build reserves API:
 │   ├─ GET /api/public/reserves
 │   └─ GET /api/public/xrpl/nodes
 ├─ ⏳ Configure Nginx reverse proxy
 ├─ ⏳ Setup SSL (certbot --nginx)
 └─ ⏳ Test endpoints with curl/Postman

🔗 PHASE 4: Wire Live Data
 ├─ ⏳ Add env var to Amplify:
 │   └─ NEXT_PUBLIC_RESERVES_ENDPOINT=https://EC2_IP/api/public
 ├─ ⏳ Update xrpl-infrastructure/page.tsx
 │   └─ Fetch reserves data (server component)
 ├─ ⏳ Display cards with reserve lines
 └─ ⏳ Test live data on deployed site

🤖 PHASE 5: MCP / AI Swarm
 ├─ ⏳ Deploy swarm orchestrator backend
 ├─ ⏳ Build POST /ai/chat endpoint:
 │   ├─ XRPL Expert agent
 │   ├─ Reserve Analyst agent
 │   ├─ Compliance Navigator agent
 │   └─ Developer Assistant agent
 ├─ ⏳ Add env var to Amplify:
 │   └─ SWARM_ENDPOINT=https://swarm-backend/ai/chat
 ├─ ⏳ Create app/api/chat/route.ts proxy
 ├─ ⏳ Wire ChatDock component
 └─ ⏳ Test end-to-end chat flow

🌐 PHASE 6: Custom Domain
 ├─ ⏳ In Amplify console:
 │   └─ Domain management → Add domain
 ├─ ⏳ In IONOS DNS:
 │   ├─ Add A record: @ → Elastic IP
 │   └─ Add CNAME: www → Amplify URL
 ├─ ⏳ Wait for DNS propagation (5-60 min)
 ├─ ⏳ Verify SSL auto-provisioned
 └─ ✅ Site live at digitalgiant.app

🎉 DONE: Production site live with:
    • 8-page luxury fintech design
    • Live XRPL reserve data
    • AI swarm chat assistant
    • Custom domain + SSL
```

---

## 📚 Documentation Cross-Reference

### By Feature
| Feature | Docs | Code | API |
|---------|------|------|-----|
| **XRPL Nodes** | [XRPL-INFRASTRUCTURE.md](./XRPL-INFRASTRUCTURE.md) | - | GET /xrpl/nodes |
| **Reserves** | [RWA-ENGINE.md](./RWA-ENGINE.md) | - | GET /reserves |
| **DEX Integration** | [DEX-AMM-EXCHANGE.md](./DEX-AMM-EXCHANGE.md) | - | - |
| **Stablecoins** | [STABLECOINS-IOU.md](./STABLECOINS-IOU.md) | - | - |
| **AI Swarm** | [AI-SWARM.md](./AI-SWARM.md) | ChatDock.tsx | POST /ai/chat |
| **Components** | [CODE-TEMPLATES.md](./CODE-TEMPLATES.md) | app/components/ | - |
| **Deployment** | [DEPLOYMENT-ARCHITECTURE.md](./DEPLOYMENT-ARCHITECTURE.md) | infra/scripts/ | - |

### By Role
| Role | Primary Docs | Focus Areas |
|------|--------------|-------------|
| **Developer** | CODE-TEMPLATES, DEPLOYMENT-ARCHITECTURE | Components, APIs, deployment |
| **Architect** | ARCHITECTURE, XRPL-INFRASTRUCTURE | System design, node topology |
| **Product** | SITE-STRUCTURE, FINAL-SUMMARY | Messaging, features, positioning |
| **Compliance** | COMPLIANCE-DISCLOSURES | Legal, regulatory, risk |
| **Operations** | DEPLOYMENT-ARCHITECTURE, infra/scripts | EC2, Amplify, domain config |

---

## 🔑 Key Concepts

### Strategic Positioning
```
❌ OLD: "We built a DEX"
✅ NEW: "We provide regulated access to XRPL's existing DEX (live since 2012)"

We are an infrastructure provider, not a token issuer.
We are a regulated gateway, not a new blockchain.
We are banking-grade operations, not a crypto startup.
```

### Three-Layer Architecture
```
Layer 1: Glossy Front Door
  └─ AWS Amplify + Next.js
     └─ Public-facing site, ChatDock UI

Layer 2: Backbone API
  └─ EC2 web-main-01 + Nginx
     └─ Read-only reserves data, node status

Layer 3: AI Brains
  └─ MCP Swarm Backend
     └─ Multi-agent orchestration
```

### Security Model
```
🔒 SECURITY/ folder: Git-ignored, never deployed
📊 Public API: Read-only, sanitized data only
🔑 Wallet seeds: Never exposed in any endpoint
🚦 Rate limiting: 100 req/min per IP
🌐 CORS: Restricted to digitalgiant.app
```

---

## ⚡ Quick Actions

### Start Local Development
```bash
cd "c:\Users\Kevan\UnyKorn-App"
npm install
npm run dev
# Visit http://localhost:3000
```

### Deploy to GitHub
```bash
git add .
git commit -m "Update: [describe change]"
git push origin main
# Amplify auto-deploys within 5 min
```

### View Build Logs
1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Select UnyKorn-App
3. Click "Deployments" → Latest build
4. View real-time logs

### Check Live Site
- Amplify URL: `https://main.[app-id].amplifyapp.com`
- Custom domain (after Phase 6): `https://digitalgiant.app`

---

## 🆘 Troubleshooting

### Build fails in Amplify
1. Check [build logs](https://console.aws.amazon.com/amplify)
2. Common issues:
   - Missing `package.json` dependencies
   - TypeScript errors (run `npm run build` locally first)
   - Environment variables not set

### ChatDock not working
1. Verify `SWARM_ENDPOINT` env var set in Amplify
2. Check `/api/chat/route.ts` exists
3. Test swarm backend independently
4. Check browser console for errors

### Reserves API not loading
1. Verify EC2 instance running
2. Check Nginx status: `sudo systemctl status nginx`
3. Test endpoint: `curl https://EC2_IP/api/public/reserves`
4. Verify `NEXT_PUBLIC_RESERVES_ENDPOINT` env var in Amplify

---

## 📞 Support

**Documentation Issues:** Check this TABLE-OF-CONTENTS.md first
**Code Issues:** See CODE-TEMPLATES.md for reference implementations
**Deployment Issues:** See DEPLOYMENT-ARCHITECTURE.md step-by-step guide
**Architecture Questions:** See ARCHITECTURE.md system overview

---

**Last Updated:** November 17, 2025
**Project Status:** 🟡 Phase 1 Complete (GitHub + basic site), Phase 2 In Progress (Amplify deployment)
