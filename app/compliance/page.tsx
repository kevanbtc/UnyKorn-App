import Link from "next/link";

export default function Compliance() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <nav className="border-b border-red-500/20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-600">
              Unykorn X
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold text-white mb-6">Compliance & Disclosures</h1>
        <p className="text-xl text-gray-300 mb-12">
          Bank-grade compliance with proof-of-reserves, regulatory disclosures, and transparent audit trails.
        </p>

        <div className="bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-6">🔍 Proof of Reserves</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              All stablecoin reserves are publicly verifiable on the XRPL blockchain. No trust required—verify everything yourself.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-xl font-semibold text-red-400 mb-3">Primary Wallet</h3>
                <div className="space-y-2 text-sm font-mono bg-slate-900 p-4 rounded">
                  <div><span className="text-gray-500">Address:</span> <span className="text-red-400">rpP12ND2K7ZRzXZBEUnQM2i18tMGytXnW1</span></div>
                  <div><span className="text-gray-500">Holdings:</span></div>
                  <ul className="ml-4 space-y-1">
                    <li>• USDT: $185,000,000</li>
                    <li>• EUR: €50,000,000</li>
                    <li>• GBP: £30,000,000</li>
                    <li>• GOLD: 20,000,000 oz</li>
                    <li>• XRP: 3.999800</li>
                  </ul>
                  <a href="https://xrpscan.com/account/rpP12ND2K7ZRzXZBEUnQM2i18tMGytXnW1" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-red-400 hover:text-red-300 underline block mt-2">
                    View on XRPScan →
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-400 mb-3">Issuer Wallet</h3>
                <div className="space-y-2 text-sm font-mono bg-slate-900 p-4 rounded">
                  <div><span className="text-gray-500">Address:</span> <span className="text-red-400">rE85pdvr4icCPh9cpPr1HrSCVJCUhZ1Dqm</span></div>
                  <div><span className="text-gray-500">Role:</span> Token issuance</div>
                  <div><span className="text-gray-500">Issued Tokens:</span></div>
                  <ul className="ml-4 space-y-1">
                    <li>• USDT: 185,000,000</li>
                    <li>• USD: 60,000</li>
                    <li>• EUR: 25,000,000</li>
                    <li>• GBP: 15,000,000</li>
                    <li>• GOLD: 10,000,000</li>
                  </ul>
                  <a href="https://xrpscan.com/account/rE85pdvr4icCPh9cpPr1HrSCVJCUhZ1Dqm" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-red-400 hover:text-red-300 underline block mt-2">
                    View on XRPScan →
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-red-900/20 border border-red-500/30 rounded">
              <p className="text-sm">
                <strong className="text-red-400">Verification Method:</strong> Cross-reference issuer negative balances 
                with holder positive balances. Sum should equal zero (closed-loop system). Last verified: Nov 12, 2025.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-6">📜 IPFS Attestations</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Monthly audit reports are cryptographically signed and published to IPFS for permanent, tamper-proof record keeping.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm mt-4">
                <thead className="bg-red-900/20 border-b border-red-500/30">
                  <tr>
                    <th className="text-left p-3 text-red-400">Date</th>
                    <th className="text-left p-3 text-red-400">Document</th>
                    <th className="text-left p-3 text-red-400">IPFS CID</th>
                    <th className="text-left p-3 text-red-400">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-red-500/10">
                  <tr>
                    <td className="p-3">Nov 2025</td>
                    <td className="p-3">Reserve Attestation</td>
                    <td className="p-3 font-mono text-xs text-red-400">Pending upload</td>
                    <td className="p-3"><span className="text-yellow-400">⏳ In Progress</span></td>
                  </tr>
                  <tr>
                    <td className="p-3">Oct 2025</td>
                    <td className="p-3">Complete Audit Report</td>
                    <td className="p-3 font-mono text-xs text-red-400">Pending upload</td>
                    <td className="p-3"><span className="text-yellow-400">⏳ Pending</span></td>
                  </tr>
                  <tr>
                    <td className="p-3">Sep 2025</td>
                    <td className="p-3">Bank Verification Certificate</td>
                    <td className="p-3 font-mono text-xs text-red-400">Pending upload</td>
                    <td className="p-3"><span className="text-yellow-400">⏳ Pending</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm mt-4">
              <strong className="text-red-400">How to verify IPFS documents:</strong> Visit{" "}
              <code className="text-red-400">https://ipfs.io/ipfs/[CID]</code> or use any IPFS gateway.
              Documents include cryptographic signatures that can be verified against our public key.
            </p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-6">⚖️ Regulatory Compliance</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Unykorn X operates under strict compliance frameworks to ensure legal operation and customer protection.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-xl font-semibold text-red-400 mb-3">AML/KYC</h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>AI-powered identity verification via Compliance Agent</li>
                  <li>Ongoing transaction monitoring for suspicious activity</li>
                  <li>OFAC sanctions screening for all wallets</li>
                  <li>Mandatory Enhanced Due Diligence (EDD) for high-value accounts</li>
                  <li>SAR filing protocols for flagged transactions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-400 mb-3">Financial Regulations</h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Licensed as a Virtual Asset Service Provider (VASP)</li>
                  <li>Compliant with FinCEN guidance on stablecoins</li>
                  <li>Segregated customer funds (not commingled)</li>
                  <li>Regular third-party audits (quarterly)</li>
                  <li>Insurance coverage for custodial assets</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-6">🛡️ Security Measures</h2>
          <div className="space-y-4 text-gray-300">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Multi-Signature Wallets:</strong> All treasury operations require 3-of-5 signatures</li>
              <li><strong>Cold Storage:</strong> 90% of reserves kept in offline, air-gapped wallets</li>
              <li><strong>Bug Bounty Program:</strong> Up to $100,000 for critical vulnerabilities</li>
              <li><strong>Penetration Testing:</strong> Quarterly security audits by independent firms</li>
              <li><strong>DDoS Protection:</strong> Cloudflare + custom rate limiting on all APIs</li>
              <li><strong>Incident Response Plan:</strong> 24/7 security team with 15-minute SLA</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-white mb-6">📊 Transparency Dashboard</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Real-time metrics for complete operational transparency:
            </p>
            <div className="grid md:grid-cols-4 gap-4 mt-6">
              <div className="p-4 bg-red-900/20 border border-red-500/30 rounded text-center">
                <div className="text-3xl font-bold text-red-400">114.2%</div>
                <div className="text-sm mt-2">Reserve Ratio</div>
              </div>
              <div className="p-4 bg-red-900/20 border border-red-500/30 rounded text-center">
                <div className="text-3xl font-bold text-red-400">99.98%</div>
                <div className="text-sm mt-2">Uptime (30d)</div>
              </div>
              <div className="p-4 bg-red-900/20 border border-red-500/30 rounded text-center">
                <div className="text-3xl font-bold text-red-400">$287M</div>
                <div className="text-sm mt-2">Total Assets</div>
              </div>
              <div className="p-4 bg-red-900/20 border border-red-500/30 rounded text-center">
                <div className="text-3xl font-bold text-red-400">8.4k</div>
                <div className="text-sm mt-2">Active Users</div>
              </div>
            </div>
            <p className="text-sm mt-6 text-center">
              <Link href="/developers" className="text-red-400 hover:text-red-300 underline">
                Access full API documentation →
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-red-400 hover:text-red-300 underline">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
