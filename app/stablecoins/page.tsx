import Link from "next/link";

export default function Stablecoins() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <nav className="border-b border-green-500/20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              Unykorn X
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold text-white mb-6">Stablecoins & IOUs</h1>
        <p className="text-xl text-gray-300 mb-12">
          Multi-currency stablecoin issuance with over-collateralized reserves and cryptographic proof-of-reserves.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-green-400 mb-2">USDT</h3>
            <p className="text-3xl font-semibold text-white mb-2">$185M</p>
            <p className="text-gray-400">Primary stablecoin for USD operations</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-green-400 mb-2">EUR</h3>
            <p className="text-3xl font-semibold text-white mb-2">€50M</p>
            <p className="text-gray-400">European market stablecoin</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-green-400 mb-2">GBP</h3>
            <p className="text-3xl font-semibold text-white mb-2">£30M</p>
            <p className="text-gray-400">British pound stablecoin</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-green-400 mb-2">GOLD</h3>
            <p className="text-3xl font-semibold text-white mb-2">20M oz</p>
            <p className="text-gray-400">Gold-backed tokens</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-green-400 mb-2">USD</h3>
            <p className="text-3xl font-semibold text-white mb-2">$60K</p>
            <p className="text-gray-400">Small denomination USD</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-green-400 mb-2">DONK</h3>
            <p className="text-3xl font-semibold text-white mb-2">2M</p>
            <p className="text-gray-400">Platform utility token</p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-6">Issuance Model</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              All stablecoins are issued as <strong className="text-green-400">XRPL IOUs</strong> (trust lines) from our
              dedicated issuer wallet. Each token is backed by reserves held in our treasury wallet.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-3">Issuance Process</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>User requests stablecoin (e.g., 1000 USDT)</li>
                  <li>AI compliance agent verifies user eligibility</li>
                  <li>User deposits collateral (fiat, crypto, or RWA)</li>
                  <li>Treasury node creates trustline and issues tokens</li>
                  <li>Tokens appear in user wallet instantly</li>
                </ol>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-3">Redemption Process</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>User sends stablecoins back to issuer</li>
                  <li>AI treasury agent validates transaction</li>
                  <li>Tokens are burned (removed from circulation)</li>
                  <li>Collateral released to user (fiat/crypto/asset)</li>
                  <li>Settlement within 24 hours</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-white mb-6">Proof of Reserves</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Our stablecoins maintain <strong className="text-green-400">110% over-collateralization</strong> at all times.
              Reserves are verifiable on-chain and audited monthly.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>On-Chain Verification:</strong> All issuer and treasury wallets are public on XRPScan</li>
              <li><strong>IPFS Attestations:</strong> Monthly reserve reports published to IPFS with cryptographic signatures</li>
              <li><strong>AI Monitoring:</strong> Treasury agent continuously monitors reserve ratios and alerts on deviations</li>
              <li><strong>Bank Custodians:</strong> Fiat reserves held with regulated banks (statements available on request)</li>
              <li><strong>Real-Time Dashboard:</strong> Public dashboard showing live collateralization ratios</li>
            </ul>
            <div className="mt-6 p-4 bg-green-900/20 border border-green-500/30 rounded">
              <p className="text-sm">
                <strong>Current Collateralization:</strong> 114.2% | <strong>Last Audit:</strong> Nov 10, 2025 | 
                <strong className="ml-2">IPFS:</strong> <code className="text-green-400">Qm...</code>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-green-400 hover:text-green-300 underline">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
