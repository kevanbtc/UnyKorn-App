import Link from "next/link";

export default function AISwarm() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="border-b border-purple-500/20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Unykorn X
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold text-white mb-6">AI Swarm Intelligence</h1>
        <p className="text-xl text-gray-300 mb-12">
          Multi-agent AI system for risk management, compliance, treasury operations, and market analysis.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
            <div className="text-4xl mb-3">🛡️</div>
            <h3 className="text-xl font-semibold text-purple-400 mb-2">Risk Agent</h3>
            <p className="text-gray-400 text-sm mb-3">Monitors portfolio risk, LTV ratios, and market volatility</p>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• Real-time risk scoring</li>
              <li>• Margin call predictions</li>
              <li>• Diversification analysis</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
            <div className="text-4xl mb-3">⚖️</div>
            <h3 className="text-xl font-semibold text-purple-400 mb-2">Compliance Agent</h3>
            <p className="text-gray-400 text-sm mb-3">AML/KYC verification, regulatory reporting, sanctions screening</p>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• Automated KYC checks</li>
              <li>• Transaction monitoring</li>
              <li>• Regulatory alerts</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="text-xl font-semibold text-purple-400 mb-2">Treasury Agent</h3>
            <p className="text-gray-400 text-sm mb-3">Reserve management, issuance approvals, liquidity optimization</p>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• Reserve ratio monitoring</li>
              <li>• Auto-rebalancing</li>
              <li>• Yield optimization</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-xl font-semibold text-purple-400 mb-2">Market Agent</h3>
            <p className="text-gray-400 text-sm mb-3">Price feeds, DEX analytics, arbitrage detection</p>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• Multi-source price aggregation</li>
              <li>• Liquidity depth analysis</li>
              <li>• Arbitrage opportunities</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
            <div className="text-4xl mb-3">🏦</div>
            <h3 className="text-xl font-semibold text-purple-400 mb-2">RWA Agent</h3>
            <p className="text-gray-400 text-sm mb-3">Asset valuation, LTV adjustments, custody verification</p>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• Automated appraisals</li>
              <li>• Document verification</li>
              <li>• Custody tracking</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
            <div className="text-4xl mb-3">⚙️</div>
            <h3 className="text-xl font-semibold text-purple-400 mb-2">Operations Agent</h3>
            <p className="text-gray-400 text-sm mb-3">System health, node monitoring, incident response</p>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• 24/7 infrastructure monitoring</li>
              <li>• Auto-scaling decisions</li>
              <li>• Anomaly detection</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-6">Agent Architecture</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              The AI swarm operates as a <strong className="text-purple-400">multi-agent system</strong> where each agent
              specializes in a specific domain but can collaborate and share insights.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">Data Sources</h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>XRPL node queries (real-time ledger data)</li>
                  <li>Analytics DB (historical patterns)</li>
                  <li>External price feeds (CoinGecko, CoinMarketCap)</li>
                  <li>IPFS documents (audit reports, attestations)</li>
                  <li>Treasury reserves.json (collateral status)</li>
                  <li>Monitoring stack (Prometheus/Grafana metrics)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">Decision Framework</h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>Autonomous:</strong> Low-risk actions (data collection, alerts)</li>
                  <li><strong>Semi-Autonomous:</strong> Medium-risk (LTV adjustments, fee changes)</li>
                  <li><strong>Human-in-Loop:</strong> High-risk (large issuances, asset liquidations)</li>
                  <li><strong>Emergency Override:</strong> Human can always override AI decisions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-6">Example: Stablecoin Issuance Flow</h2>
          <div className="space-y-3 text-gray-300">
            <div className="flex items-start space-x-3">
              <span className="text-purple-400 font-bold">1.</span>
              <p><strong>User Request:</strong> Customer requests 100,000 USDT issuance</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-purple-400 font-bold">2.</span>
              <p><strong>Compliance Agent:</strong> Verifies KYC status, checks sanctions lists, reviews transaction history → ✅ PASS</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-purple-400 font-bold">3.</span>
              <p><strong>Treasury Agent:</strong> Confirms sufficient reserves (110% collateral required) → ✅ $110,000 available</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-purple-400 font-bold">4.</span>
              <p><strong>Risk Agent:</strong> Evaluates customer credit score, portfolio concentration → ✅ Low risk profile</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-purple-400 font-bold">5.</span>
              <p><strong>Operations Agent:</strong> Checks treasury node availability → ✅ Online and synced</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-purple-400 font-bold">6.</span>
              <p><strong>Treasury Agent:</strong> Initiates XRPL transaction, issues 100,000 USDT to customer wallet → ✅ COMPLETE</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-purple-400 font-bold">7.</span>
              <p><strong>Compliance Agent:</strong> Logs transaction for audit trail, updates reserves.json on IPFS</p>
            </div>
            <p className="mt-4 text-sm text-purple-400">
              <strong>Total Time:</strong> 2.3 seconds | <strong>Human Involvement:</strong> Zero (fully automated)
            </p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-white mb-6">Safety & Transparency</h2>
          <div className="space-y-4 text-gray-300">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Explainable AI:</strong> Every decision includes a reasoning trace viewable by users</li>
              <li><strong>Audit Logs:</strong> All agent actions logged immutably on XRPL memo fields or IPFS</li>
              <li><strong>Rate Limits:</strong> Agents cannot execute more than X high-value transactions per hour</li>
              <li><strong>Multi-Agent Consensus:</strong> Critical decisions require agreement from 2+ agents</li>
              <li><strong>Human Oversight:</strong> Daily review dashboard for operations team</li>
              <li><strong>Kill Switch:</strong> Instant disable for any agent if anomalies detected</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-purple-400 hover:text-purple-300 underline">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
