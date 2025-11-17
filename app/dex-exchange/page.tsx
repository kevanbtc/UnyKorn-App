import Link from "next/link";

export default function DEXExchange() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <nav className="border-b border-indigo-500/20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-600">
              Unykorn X
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold text-white mb-6">DEX & AMM Exchange</h1>
        <p className="text-xl text-gray-300 mb-12">
          Decentralized exchange with automated market makers and liquidity pool management built on XRPL.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-indigo-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-indigo-400 mb-4">🔄 Trading Pairs</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-indigo-900/20 rounded">
                <span className="text-white font-semibold">USDT/XRP</span>
                <span className="text-indigo-400">$24.5M Liquidity</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-indigo-900/20 rounded">
                <span className="text-white font-semibold">EUR/XRP</span>
                <span className="text-indigo-400">€8.2M Liquidity</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-indigo-900/20 rounded">
                <span className="text-white font-semibold">GBP/XRP</span>
                <span className="text-indigo-400">£5.1M Liquidity</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-indigo-900/20 rounded">
                <span className="text-white font-semibold">GOLD/USDT</span>
                <span className="text-indigo-400">$12M Liquidity</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-indigo-900/20 rounded">
                <span className="text-white font-semibold">GOLD/XRP</span>
                <span className="text-indigo-400">$6.8M Liquidity</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-indigo-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-indigo-400 mb-4">💧 Liquidity Pools</h2>
            <div className="space-y-4 text-gray-300 text-sm">
              <p>
                Our AMM pools use the <strong className="text-indigo-400">constant product formula (x * y = k)</strong> 
                to enable trustless, automated trading 24/7.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Total Value Locked (TVL):</span>
                  <span className="text-indigo-400 font-semibold">$56.6M</span>
                </div>
                <div className="flex justify-between">
                  <span>24h Trading Volume:</span>
                  <span className="text-indigo-400 font-semibold">$3.2M</span>
                </div>
                <div className="flex justify-between">
                  <span>Active LPs:</span>
                  <span className="text-indigo-400 font-semibold">847</span>
                </div>
                <div className="flex justify-between">
                  <span>Avg Fee (0.3%):</span>
                  <span className="text-indigo-400 font-semibold">$9,600/day</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-indigo-500/20 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-6">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-4">For Traders</h3>
              <ol className="space-y-3 text-gray-300 list-decimal list-inside">
                <li>Connect your XRPL wallet to Unykorn X</li>
                <li>Select trading pair (e.g., USDT → XRP)</li>
                <li>Enter amount and view quoted exchange rate</li>
                <li>Confirm transaction (instant execution)</li>
                <li>Tokens swapped directly in your wallet</li>
              </ol>
              <div className="mt-4 p-3 bg-indigo-900/20 border border-indigo-500/30 rounded text-sm text-gray-400">
                <strong className="text-indigo-400">No Order Books:</strong> AMM provides instant liquidity at all times.
                Slippage is predictable and shown upfront.
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-4">For Liquidity Providers</h3>
              <ol className="space-y-3 text-gray-300 list-decimal list-inside">
                <li>Choose a pool to provide liquidity (e.g., USDT/XRP)</li>
                <li>Deposit equal value of both assets</li>
                <li>Receive LP tokens representing your share</li>
                <li>Earn 0.3% of all trades in that pool</li>
                <li>Withdraw anytime (redeem LP tokens for assets + fees)</li>
              </ol>
              <div className="mt-4 p-3 bg-indigo-900/20 border border-indigo-500/30 rounded text-sm text-gray-400">
                <strong className="text-indigo-400">Passive Income:</strong> Earn trading fees 24/7. APY ranges from 
                12-35% depending on pool volume.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-indigo-500/20 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-6">DEX Integration</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Our DEX is built directly on the <strong className="text-indigo-400">XRPL Decentralized Exchange (DEX)</strong>,
              augmented with our own AMM pools for improved liquidity.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 bg-indigo-900/20 border border-indigo-500/30 rounded">
                <h3 className="text-lg font-semibold text-indigo-400 mb-2">Order Matching</h3>
                <p className="text-sm">
                  Trades execute against the best available price: either AMM pool or open orders on XRPL DEX.
                </p>
              </div>
              <div className="p-4 bg-indigo-900/20 border border-indigo-500/30 rounded">
                <h3 className="text-lg font-semibold text-indigo-400 mb-2">Path Finding</h3>
                <p className="text-sm">
                  XRPL automatically finds optimal multi-hop paths. Example: GBP → USDT → XRP for best rate.
                </p>
              </div>
              <div className="p-4 bg-indigo-900/20 border border-indigo-500/30 rounded">
                <h3 className="text-lg font-semibold text-indigo-400 mb-2">Low Fees</h3>
                <p className="text-sm">
                  XRPL transaction fee: ~0.00001 XRP (~$0.000026). Trading fee: 0.3% to LPs. No gas wars!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-indigo-500/20 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-6">Arbitrage & Market Efficiency</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Our <strong className="text-indigo-400">AI Market Agent</strong> continuously monitors prices across
              centralized exchanges (Binance, Kraken, Coinbase) and keeps our AMM pools competitive.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Price Deviation Alerts:</strong> If AMM price diverges &gt;2% from external markets, AI flags for rebalancing</li>
              <li><strong>Arbitrage Opportunities:</strong> Market agent can execute cross-exchange arbitrage to profit from inefficiencies</li>
              <li><strong>Dynamic Fee Adjustment:</strong> During high volatility, trading fees may increase to 0.5% to protect LPs from impermanent loss</li>
              <li><strong>MEV Protection:</strong> XRPL's consensus model prevents front-running and sandwich attacks</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-indigo-500/20 rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-white mb-6">API Access</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Developers can integrate Unykorn X DEX into their applications via our REST API and WebSocket feeds:
            </p>
            <div className="bg-slate-900 p-4 rounded mt-4 font-mono text-sm text-gray-300 overflow-x-auto">
              <div className="text-gray-500"># Get current exchange rate</div>
              <div>GET https://api.unykornx.com/v1/quote?from=USDT&to=XRP&amount=1000</div>
              <div className="mt-2 text-gray-500"># Execute swap</div>
              <div>POST https://api.unykornx.com/v1/swap</div>
              <div className="text-gray-500">{"{"}</div>
              <div>  "from": "USDT", "to": "XRP", "amount": "1000",</div>
              <div>  "wallet": "rAddress...", "signature": "..."</div>
              <div className="text-gray-500">{"}"}</div>
            </div>
            <p className="mt-4 text-sm">
              <strong className="text-indigo-400">Rate Limits:</strong> 100 requests/min for quotes, 10 swaps/min per wallet.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-indigo-400 hover:text-indigo-300 underline">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
