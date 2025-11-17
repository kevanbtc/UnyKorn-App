import Link from "next/link";

export default function Developers() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      <nav className="border-b border-teal-500/20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-600">
              Unykorn X
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold text-white mb-6">Developer Documentation</h1>
        <p className="text-xl text-gray-300 mb-12">
          Build on Unykorn X with comprehensive APIs, SDKs, and integration guides.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-teal-500/20 rounded-lg p-6 hover:bg-white/10 transition-all">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="text-xl font-semibold text-teal-400 mb-2">API Reference</h3>
            <p className="text-gray-400 text-sm mb-4">Complete REST API documentation with examples and SDKs</p>
            <a href="#api" className="text-teal-400 hover:text-teal-300 underline text-sm">View Documentation →</a>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-teal-500/20 rounded-lg p-6 hover:bg-white/10 transition-all">
            <div className="text-4xl mb-3">🔌</div>
            <h3 className="text-xl font-semibold text-teal-400 mb-2">WebSocket Feeds</h3>
            <p className="text-gray-400 text-sm mb-4">Real-time price updates, transaction notifications, and ledger streams</p>
            <a href="#websocket" className="text-teal-400 hover:text-teal-300 underline text-sm">View Documentation →</a>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-teal-500/20 rounded-lg p-6 hover:bg-white/10 transition-all">
            <div className="text-4xl mb-3">⚙️</div>
            <h3 className="text-xl font-semibold text-teal-400 mb-2">SDKs</h3>
            <p className="text-gray-400 text-sm mb-4">JavaScript, Python, Go, and Rust client libraries</p>
            <a href="#sdks" className="text-teal-400 hover:text-teal-300 underline text-sm">View Documentation →</a>
          </div>
        </div>

        <div id="api" className="bg-white/5 backdrop-blur-sm border border-teal-500/20 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-6">REST API</h2>
          <p className="text-gray-300 mb-6">
            Base URL: <code className="text-teal-400 bg-slate-900 px-2 py-1 rounded">https://api.unykornx.com/v1</code>
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-teal-400 mb-3">Authentication</h3>
              <div className="bg-slate-900 p-4 rounded font-mono text-sm overflow-x-auto">
                <div className="text-gray-500"># Include API key in Authorization header</div>
                <div className="text-gray-300">curl -H "Authorization: Bearer YOUR_API_KEY" \</div>
                <div className="text-gray-300 ml-4">https://api.unykornx.com/v1/account</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-teal-400 mb-3">Get Account Balance</h3>
              <div className="bg-slate-900 p-4 rounded font-mono text-sm overflow-x-auto">
                <div className="text-gray-500"># GET /v1/account/:address</div>
                <div className="text-gray-300">curl https://api.unykornx.com/v1/account/rAddress...</div>
                <div className="text-gray-500 mt-3"># Response</div>
                <div className="text-gray-300">{"{"}</div>
                <div className="text-gray-300">  "address": "rAddress...",</div>
                <div className="text-gray-300">  "xrp_balance": "3.999800",</div>
                <div className="text-gray-300">  "balances": [</div>
                <div className="text-gray-300">    {"{"} "currency": "USDT", "value": "185000000", "issuer": "rE85..." {"}"},</div>
                <div className="text-gray-300">    {"{"} "currency": "EUR", "value": "50000000", "issuer": "rE85..." {"}"}</div>
                <div className="text-gray-300">  ]</div>
                <div className="text-gray-300">{"}"}</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-teal-400 mb-3">Get Exchange Quote</h3>
              <div className="bg-slate-900 p-4 rounded font-mono text-sm overflow-x-auto">
                <div className="text-gray-500"># GET /v1/quote?from=USDT&to=XRP&amount=1000</div>
                <div className="text-gray-300">curl "https://api.unykornx.com/v1/quote?from=USDT&to=XRP&amount=1000"</div>
                <div className="text-gray-500 mt-3"># Response</div>
                <div className="text-gray-300">{"{"}</div>
                <div className="text-gray-300">  "from": "USDT",</div>
                <div className="text-gray-300">  "to": "XRP",</div>
                <div className="text-gray-300">  "amount_in": "1000",</div>
                <div className="text-gray-300">  "amount_out": "3846.15",</div>
                <div className="text-gray-300">  "rate": "0.2600",</div>
                <div className="text-gray-300">  "slippage": "0.12%",</div>
                <div className="text-gray-300">  "valid_until": "2025-11-17T12:35:00Z"</div>
                <div className="text-gray-300">{"}"}</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-teal-400 mb-3">Execute Swap</h3>
              <div className="bg-slate-900 p-4 rounded font-mono text-sm overflow-x-auto">
                <div className="text-gray-500"># POST /v1/swap</div>
                <div className="text-gray-300">curl -X POST https://api.unykornx.com/v1/swap \</div>
                <div className="text-gray-300 ml-4">-H "Content-Type: application/json" \</div>
                <div className="text-gray-300 ml-4">-d '{"{"}"from": "USDT", "to": "XRP", "amount": "1000", "wallet": "rAddress...", "signature": "..."{"}"}'</div>
                <div className="text-gray-500 mt-3"># Response</div>
                <div className="text-gray-300">{"{"}</div>
                <div className="text-gray-300">  "transaction_hash": "ABC123...",</div>
                <div className="text-gray-300">  "status": "success",</div>
                <div className="text-gray-300">  "amount_out": "3846.15"</div>
                <div className="text-gray-300">{"}"}</div>
              </div>
            </div>
          </div>
        </div>

        <div id="websocket" className="bg-white/5 backdrop-blur-sm border border-teal-500/20 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-6">WebSocket Feeds</h2>
          <p className="text-gray-300 mb-6">
            WebSocket URL: <code className="text-teal-400 bg-slate-900 px-2 py-1 rounded">wss://ws.unykornx.com/v1</code>
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-teal-400 mb-3">Subscribe to Price Updates</h3>
              <div className="bg-slate-900 p-4 rounded font-mono text-sm overflow-x-auto">
                <div className="text-gray-500">// JavaScript example</div>
                <div className="text-gray-300">const ws = new WebSocket('wss://ws.unykornx.com/v1');</div>
                <div className="text-gray-300 mt-2">ws.onopen = () =&gt; {"{"}</div>
                <div className="text-gray-300 ml-4">ws.send(JSON.stringify({"{"}</div>
                <div className="text-gray-300 ml-8">"type": "subscribe",</div>
                <div className="text-gray-300 ml-8">"channel": "prices",</div>
                <div className="text-gray-300 ml-8">"pairs": ["USDT/XRP", "GOLD/USDT"]</div>
                <div className="text-gray-300 ml-4">{"}"}));</div>
                <div className="text-gray-300">{"}"};</div>
                <div className="text-gray-300 mt-2">ws.onmessage = (event) =&gt; {"{"}</div>
                <div className="text-gray-300 ml-4">const data = JSON.parse(event.data);</div>
                <div className="text-gray-300 ml-4">console.log(data); // {"{"} pair: "USDT/XRP", price: "0.2600", ... {"}"}</div>
                <div className="text-gray-300">{"}"};</div>
              </div>
            </div>
          </div>
        </div>

        <div id="sdks" className="bg-white/5 backdrop-blur-sm border border-teal-500/20 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-6">SDKs & Libraries</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-teal-400 mb-3">JavaScript/TypeScript</h3>
              <div className="bg-slate-900 p-4 rounded font-mono text-sm">
                <div className="text-gray-500"># Install</div>
                <div className="text-gray-300">npm install @unykornx/sdk</div>
                <div className="text-gray-500 mt-3"># Usage</div>
                <div className="text-gray-300">import {"{"} UnykornX {"}"} from '@unykornx/sdk';</div>
                <div className="text-gray-300 mt-2">const client = new UnykornX({"{"} apiKey: 'YOUR_KEY' {"}"});</div>
                <div className="text-gray-300">const balance = await client.getBalance('rAddress...');</div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-teal-400 mb-3">Python</h3>
              <div className="bg-slate-900 p-4 rounded font-mono text-sm">
                <div className="text-gray-500"># Install</div>
                <div className="text-gray-300">pip install unykornx</div>
                <div className="text-gray-500 mt-3"># Usage</div>
                <div className="text-gray-300">from unykornx import UnykornX</div>
                <div className="text-gray-300 mt-2">client = UnykornX(api_key='YOUR_KEY')</div>
                <div className="text-gray-300">balance = client.get_balance('rAddress...')</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-teal-500/20 rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-white mb-6">Architecture Documentation</h2>
          <p className="text-gray-300 mb-6">
            For detailed system architecture, node topology, and integration guides, see our comprehensive documentation:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>• <Link href="/xrpl-infra" className="text-teal-400 hover:text-teal-300 underline">XRPL Infrastructure Overview</Link></li>
            <li>• <Link href="/stablecoins" className="text-teal-400 hover:text-teal-300 underline">Stablecoin Issuance & Reserves</Link></li>
            <li>• <Link href="/rwa-engine" className="text-teal-400 hover:text-teal-300 underline">RWA Tokenization Engine</Link></li>
            <li>• <Link href="/ai-swarm" className="text-teal-400 hover:text-teal-300 underline">AI Swarm Agent Architecture</Link></li>
            <li>• <Link href="/dex-exchange" className="text-teal-400 hover:text-teal-300 underline">DEX & AMM Integration</Link></li>
            <li>• <Link href="/compliance" className="text-teal-400 hover:text-teal-300 underline">Compliance & Proof of Reserves</Link></li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-teal-400 hover:text-teal-300 underline">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
