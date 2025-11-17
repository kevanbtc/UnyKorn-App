import Link from "next/link";

export default function XRPLInfrastructure() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <nav className="border-b border-blue-500/20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600">
              Unykorn X
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold text-white mb-6">XRPL Infrastructure</h1>
        <p className="text-xl text-gray-300 mb-12">
          Enterprise-grade XRP Ledger node fleet with full validation, treasury management, and API services.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">🌐 Core Validation Nodes</h2>
            <ul className="space-y-3 text-gray-300">
              <li><strong className="text-blue-400">unykornx-core-1:</strong> Primary validator with full history</li>
              <li><strong className="text-blue-400">unykornx-core-2:</strong> Redundant validator for high availability</li>
              <li><strong>Ports:</strong> 51235 (peer), 6006 (WebSocket), 5005 (JSON-RPC)</li>
              <li><strong>Purpose:</strong> Transaction validation, consensus participation, ledger storage</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">💰 Treasury Node</h2>
            <ul className="space-y-3 text-gray-300">
              <li><strong className="text-blue-400">unykornx-treasury-1:</strong> Dedicated treasury operations</li>
              <li><strong>Security:</strong> Private, air-gapped from public network</li>
              <li><strong>Purpose:</strong> Stablecoin issuance, reserve management, multi-sig operations</li>
              <li><strong>Integration:</strong> AI swarm treasury agents, RWA vault management</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">🔌 Member API Node</h2>
            <ul className="space-y-3 text-gray-300">
              <li><strong className="text-blue-400">unykornx-member-api-1:</strong> Customer-facing API services</li>
              <li><strong>Ports:</strong> 443 (HTTPS), 6007 (WSS secure)</li>
              <li><strong>Purpose:</strong> Account queries, transaction submission, payment streaming</li>
              <li><strong>Load:</strong> Handles all customer wallet interactions and DEX queries</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">📊 Analytics Node</h2>
            <ul className="space-y-3 text-gray-300">
              <li><strong className="text-blue-400">unykornx-analytics-1:</strong> Data extraction and analysis</li>
              <li><strong>Database:</strong> PostgreSQL with full ledger indexing</li>
              <li><strong>Purpose:</strong> Historical analysis, compliance reporting, AI training data</li>
              <li><strong>Integration:</strong> Feeds AI market agent, risk models, compliance agent</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-white mb-6">Architecture Overview</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Our XRPL infrastructure is designed for enterprise-grade reliability and security. The multi-node
              architecture ensures zero downtime during maintenance and provides redundancy for mission-critical operations.
            </p>
            <p>
              <strong className="text-blue-400">Security Layers:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Firewall rules limiting external access</li>
              <li>VPN-only access for treasury operations</li>
              <li>Multi-signature wallets for high-value transactions</li>
              <li>Rate limiting and DDoS protection on public APIs</li>
              <li>Encrypted connections (TLS 1.3) for all client communications</li>
            </ul>
            <p className="mt-4">
              <strong className="text-blue-400">Monitoring & Uptime:</strong> 24/7 automated monitoring with Prometheus/Grafana,
              alerting via PagerDuty. Target uptime: 99.99% for core nodes.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-400 hover:text-blue-300 underline">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
