import Link from "next/link";

export default function RWAEngine() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
      <nav className="border-b border-amber-500/20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">
              Unykorn X
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold text-white mb-6">RWA Engine</h1>
        <p className="text-xl text-gray-300 mb-12">
          Tokenize real-world assets: gold, water rights, mines, T-bills, and revenue-generating contracts.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-amber-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-amber-400 mb-4">🏆 Supported Asset Classes</h2>
            <ul className="space-y-3 text-gray-300">
              <li><strong>Precious Metals:</strong> Gold, silver, platinum (physical or vault-backed)</li>
              <li><strong>Natural Resources:</strong> Water rights, mining claims, timber rights</li>
              <li><strong>Securities:</strong> T-bills, bonds, structured notes</li>
              <li><strong>Real Estate:</strong> Commercial properties, hotel contracts, land parcels</li>
              <li><strong>Revenue Streams:</strong> Royalties, licenses, franchise fees</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-amber-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-amber-400 mb-4">📊 Tokenization Process</h2>
            <ol className="space-y-3 text-gray-300 list-decimal list-inside">
              <li>Asset owner submits documentation and valuation</li>
              <li>AI RWA agent verifies authenticity and legal ownership</li>
              <li>Third-party appraisal confirms fair market value</li>
              <li>Vault NFT created on XRPL with metadata link (IPFS)</li>
              <li>Credit line established based on asset LTV ratio</li>
            </ol>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-amber-500/20 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-6">Loan-to-Value (LTV) Framework</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Each asset class has a maximum LTV ratio determined by liquidity, volatility, and legal enforceability:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 bg-amber-900/20 border border-amber-500/30 rounded">
                <h3 className="text-lg font-semibold text-amber-400 mb-2">Conservative</h3>
                <ul className="text-sm space-y-1">
                  <li>Gold: 75% LTV</li>
                  <li>T-Bills: 85% LTV</li>
                  <li>Prime Real Estate: 70% LTV</li>
                </ul>
              </div>
              <div className="p-4 bg-amber-900/20 border border-amber-500/30 rounded">
                <h3 className="text-lg font-semibold text-amber-400 mb-2">Moderate</h3>
                <ul className="text-sm space-y-1">
                  <li>Water Rights: 60% LTV</li>
                  <li>Mining Claims: 50% LTV</li>
                  <li>Royalty Streams: 55% LTV</li>
                </ul>
              </div>
              <div className="p-4 bg-amber-900/20 border border-amber-500/30 rounded">
                <h3 className="text-lg font-semibold text-amber-400 mb-2">Aggressive</h3>
                <ul className="text-sm space-y-1">
                  <li>Exotic Assets: 40% LTV</li>
                  <li>Unproven Royalties: 35% LTV</li>
                  <li>Frontier Markets: 45% LTV</li>
                </ul>
              </div>
            </div>
            <p className="mt-4">
              <strong className="text-amber-400">Dynamic LTV Adjustment:</strong> AI RWA agent monitors market conditions
              and adjusts LTV ratios monthly. Users receive alerts if their vault approaches margin call thresholds.
            </p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-amber-500/20 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-6">Vault NFT Structure</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Each tokenized asset is represented as a <strong className="text-amber-400">Vault NFT</strong> on the XRPL.
              The NFT contains:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Asset Metadata:</strong> Type, description, location, ownership documents (IPFS link)</li>
              <li><strong>Valuation Data:</strong> Appraisal date, appraised value, last sale price</li>
              <li><strong>Credit Line:</strong> Max borrowing capacity, current utilization, interest rate</li>
              <li><strong>Custodian Info:</strong> Physical custodian (if applicable), insurance policy</li>
              <li><strong>Legal Framework:</strong> Governing law, dispute resolution mechanism</li>
            </ul>
            <div className="mt-6 p-4 bg-amber-900/20 border border-amber-500/30 rounded">
              <p className="text-sm font-mono">
                <strong>Example NFT ID:</strong> <code className="text-amber-400">000813E...A2C5B</code><br/>
                <strong>Asset:</strong> 100 oz Gold Bars (Perth Mint)<br/>
                <strong>Appraised Value:</strong> $190,000 | <strong>LTV:</strong> 75% | <strong>Credit Line:</strong> $142,500<br/>
                <strong>IPFS:</strong> <code className="text-amber-400">ipfs://Qm...</code>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-amber-500/20 rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-white mb-6">Revenue Distribution</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              For income-generating assets (e.g., hotel contracts, royalties), cashflows are automatically distributed:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Direct Deposit:</strong> Revenue flows into vault owner's wallet as stablecoins</li>
              <li><strong>Loan Servicing:</strong> If vault has an outstanding loan, interest is auto-deducted</li>
              <li><strong>Platform Fee:</strong> 2-5% service fee on revenue streams</li>
              <li><strong>Yield Distribution:</strong> Can be set to auto-compound or monthly payout</li>
            </ul>
            <p className="mt-4">
              <strong className="text-amber-400">Smart Contracts:</strong> Payment rails built on XRPL Payment Channels
              for instant, low-fee distributions.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-amber-400 hover:text-amber-300 underline">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
