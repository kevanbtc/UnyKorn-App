# Component Templates for Next.js Site

## NavBar Component

```tsx
// app/components/NavBar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/xrpl-infrastructure', label: 'XRPL Infrastructure' },
  { href: '/dex-markets', label: 'DEX & Markets' },
  { href: '/banking-treasury', label: 'Banking & Treasury' },
  { href: '/nft-studio', label: 'NFT Studio' },
  { href: '/compliance', label: 'Compliance' },
  { href: '/developers', label: 'Developers' },
  { href: '/contact', label: 'Contact' },
];

export function NavBar() {
  const pathname = usePathname();
  
  return (
    <header className="border-b border-white/10 bg-black/40 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-[0.15em] uppercase">
          Unykorn<span className="text-cyan-400">XRPL</span>
        </Link>
        
        <nav className="hidden md:flex gap-6 text-sm">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? 'text-cyan-400'
                  : 'text-gray-400 hover:text-gray-100 transition-colors'
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        {/* Mobile menu button - implement later */}
        <button className="md:hidden text-gray-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
```

---

## Footer Component

```tsx
// app/components/Footer.tsx
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="font-semibold mb-3 tracking-wide text-cyan-400">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/xrpl-infrastructure" className="hover:text-gray-100">XRPL Infrastructure</Link></li>
              <li><Link href="/dex-markets" className="hover:text-gray-100">DEX & Markets</Link></li>
              <li><Link href="/banking-treasury" className="hover:text-gray-100">Banking & Treasury</Link></li>
              <li><Link href="/nft-studio" className="hover:text-gray-100">NFT Studio</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 tracking-wide text-cyan-400">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/developers" className="hover:text-gray-100">Developer Docs</Link></li>
              <li><a href="https://xrpl.org" target="_blank" rel="noopener" className="hover:text-gray-100">XRPL.org</a></li>
              <li><Link href="/compliance" className="hover:text-gray-100">Compliance</Link></li>
              <li><a href="https://github.com/your-org" target="_blank" rel="noopener" className="hover:text-gray-100">GitHub</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 tracking-wide text-cyan-400">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/contact" className="hover:text-gray-100">Contact</Link></li>
              <li><Link href="/legal" className="hover:text-gray-100">Legal</Link></li>
              <li><Link href="/privacy" className="hover:text-gray-100">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-gray-100">Terms</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 tracking-wide text-cyan-400">XRPL Explorers</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://xrpscan.com" target="_blank" rel="noopener" className="hover:text-gray-100">XRPScan</a></li>
              <li><a href="https://livenet.xrpl.org" target="_blank" rel="noopener" className="hover:text-gray-100">XRPL Explorer</a></li>
              <li><a href="https://bithomp.com" target="_blank" rel="noopener" className="hover:text-gray-100">Bithomp</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-center text-xs text-gray-500">
          <p>© 2025 UnykornX. Built on the XRP Ledger.</p>
          <p>Infrastructure provider | Not a token issuer | Not financial advice</p>
        </div>
      </div>
    </footer>
  );
}
```

---

## Section Component

```tsx
// app/components/Section.tsx
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function Section({ children, className = '', dark = false }: SectionProps) {
  return (
    <section 
      className={`
        py-16 
        ${dark ? 'bg-black/20' : 'bg-transparent'}
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
```

---

## ChatDock Component

```tsx
// app/components/ChatDock.tsx
'use client';

import { useState } from 'react';

type Message = { role: 'user' | 'assistant'; content: string };

export function ChatDock() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!input.trim()) return;
    
    const userMsg: Message = { role: 'user', content: input };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) throw new Error('Chat API failed');
      
      const data = await res.json();
      setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      setMessages([...newMessages, { 
        role: 'assistant', 
        content: 'Sorry, the AI swarm is temporarily unavailable. Please try again later.' 
      }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open ? (
        <div className="w-80 h-96 bg-black/95 border border-cyan-500/60 rounded-2xl flex flex-col shadow-2xl">
          {/* Header */}
          <div className="px-4 py-3 flex justify-between items-center border-b border-white/10">
            <span className="text-xs tracking-[0.2em] uppercase text-cyan-300 font-semibold">
              XRPL Copilot
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-gray-100 text-sm"
            >
              ✕
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 px-4 py-3 overflow-y-auto text-sm space-y-3">
            {messages.length === 0 && (
              <div className="text-gray-500 text-xs">
                Ask me about XRPL infrastructure, DEX mechanics, reserves, or compliance...
              </div>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === 'user' 
                    ? 'text-right' 
                    : 'text-left'
                }
              >
                <div className={
                  m.role === 'user'
                    ? 'inline-block bg-cyan-500/20 text-cyan-100 px-3 py-2 rounded-lg max-w-[80%]'
                    : 'inline-block bg-white/5 text-gray-200 px-3 py-2 rounded-lg max-w-[80%]'
                }>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-cyan-400 text-xs animate-pulse">
                AI swarm thinking...
              </div>
            )}
          </div>
          
          {/* Input */}
          <div className="px-4 py-3 border-t border-white/10 flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !e.shiftKey && send()}
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-cyan-500/50"
              placeholder="Ask about XRPL..."
              disabled={loading}
            />
            <button
              onClick={send}
              disabled={loading}
              className="px-4 py-2 text-sm bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="rounded-full px-5 py-3 text-sm font-semibold bg-cyan-500 text-black shadow-lg hover:bg-cyan-400 transition-all hover:shadow-cyan-500/50"
        >
          🤖 XRPL Copilot
        </button>
      )}
    </div>
  );
}
```

---

## Root Layout

```tsx
// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { ChatDock } from './components/ChatDock';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UnykornX | XRPL-Native Banking & DEX Infrastructure',
  description: 'Regulated gateway to the XRP Ledger\'s DEX, stablecoins, and real-world assets — backed by institutional nodes, vaults, and proof-of-reserves.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#050814] text-gray-100 min-h-screen`}>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ChatDock />
        </div>
      </body>
    </html>
  );
}
```

---

## Globals CSS

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply antialiased;
  }
  
  h1 {
    @apply text-4xl font-bold tracking-tight;
  }
  
  h2 {
    @apply text-3xl font-semibold tracking-tight;
  }
  
  h3 {
    @apply text-2xl font-semibold;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

---

## API Route: Chat Proxy

```tsx
// app/api/chat/route.ts
import { NextRequest, NextResponse } from 'next/server';

const SWARM_ENDPOINT = process.env.SWARM_ENDPOINT;

export async function POST(req: NextRequest) {
  if (!SWARM_ENDPOINT) {
    return NextResponse.json(
      { reply: 'AI swarm not configured. Please contact support.' },
      { status: 503 }
    );
  }

  try {
    const body = await req.json();

    const res = await fetch(SWARM_ENDPOINT, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'User-Agent': 'UnykornX-Web/1.0',
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error(`Swarm returned ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json({ reply: data.reply || data.message || 'No response from swarm' });
    
  } catch (error) {
    console.error('Chat proxy error:', error);
    return NextResponse.json(
      { reply: 'The AI swarm is temporarily unavailable. Please try again later.' },
      { status: 500 }
    );
  }
}
```

---

## Sample Page: XRPL Infrastructure

```tsx
// app/xrpl-infrastructure/page.tsx
import { Section } from '../components/Section';

async function getReserves() {
  const endpoint = process.env.NEXT_PUBLIC_RESERVES_ENDPOINT;
  if (!endpoint) return [];
  
  try {
    const res = await fetch(endpoint, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to load reserves');
    return res.json();
  } catch (err) {
    console.error('Reserves API error:', err);
    return [];
  }
}

export default async function XrplInfraPage() {
  const reserves = await getReserves();

  return (
    <>
      {/* Hero */}
      <Section className="pt-24 pb-12">
        <h1 className="text-5xl font-bold mb-6 text-balance">
          XRPL Infrastructure Operated Like Banking Core
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl">
          Full-history nodes, private endpoints, permissioned domains, and monitoring — 
          purpose-built for markets, RWAs, and exchanges.
        </p>
      </Section>

      {/* Node Fleet */}
      <Section dark>
        <h2 className="text-3xl font-semibold mb-8">Our Node Fleet</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-white/10 rounded-xl p-6 bg-white/5">
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">Core Nodes</h3>
            <p className="text-gray-400 text-sm">
              Full-history rippled servers for writes, consensus observation, and internal integrity checks.
            </p>
          </div>
          
          <div className="border border-white/10 rounded-xl p-6 bg-white/5">
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">Read Layer (Clio-Like)</h3>
            <p className="text-gray-400 text-sm">
              Read-optimized servers for high-volume queries (books, trades, account_info), 
              so bots and dashboards don't touch core nodes directly.
            </p>
          </div>
          
          <div className="border border-white/10 rounded-xl p-6 bg-white/5">
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">Permissioned Domains</h3>
            <p className="text-gray-400 text-sm">
              XRPL-style environments for controlled KYC/KYB-only trading, restricted RWAs, 
              and rule-bound issuers.
            </p>
          </div>
        </div>
      </Section>

      {/* Reserve Lines */}
      <Section>
        <h2 className="text-3xl font-semibold mb-8">Reserve Lines & Backing</h2>
        <p className="text-gray-400 mb-8 max-w-3xl">
          All reserve lines are off-ledger, documented, and mapped into vaults on our XRPL backbone. 
          Below is a read-only view of the current registry.
        </p>
        
        {reserves.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {reserves.map((r: any) => (
              <div
                key={r.id}
                className="border border-white/10 rounded-xl p-4 bg-white/5"
              >
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                  {r.type}
                </div>
                <div className="text-lg font-semibold mb-2">{r.id}</div>
                <div className="text-sm text-gray-300 mb-1">
                  Face: {r.faceValue?.toLocaleString()} {r.currency}
                </div>
                <div className="text-xs text-gray-400">
                  Status: <span className="text-cyan-400">{r.status}</span> • Usage: {r.usage}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-gray-500 text-sm">
            Reserve data currently unavailable. Check back shortly.
          </div>
        )}
      </Section>
    </>
  );
}
```

---

These templates give you the complete UI foundation for the Amplify site. Copy them into your GitHub repo after Amplify creates it, then push to deploy.