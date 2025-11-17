import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="border-b border-purple-500/20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Unykorn X
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/xrpl-infra" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Infrastructure
                </Link>
                <Link href="/stablecoins" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Stablecoins
                </Link>
                <Link href="/rwa-engine" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  RWA Engine
                </Link>
                <Link href="/ai-swarm" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  AI Swarm
                </Link>
                <Link href="/dex-exchange" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  DEX
                </Link>
                <Link href="/compliance" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Compliance
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            XRPL-Native Banking
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Powered by AI
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Next-generation banking infrastructure built on XRP Ledger with AI swarm intelligence, 
            real-world asset tokenization, and decentralized exchange capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <FeatureCard
            title="XRPL Infrastructure"
            description="Enterprise-grade node fleet with full validation, treasury management, and API services"
            href="/xrpl-infra"
            icon="🏗️"
          />
          <FeatureCard
            title="Stablecoins & IOUs"
            description="Multi-currency stablecoin issuance with over-collateralized reserves and proof-of-reserves"
            href="/stablecoins"
            icon="💵"
          />
          <FeatureCard
            title="RWA Engine"
            description="Tokenize real-world assets: gold, water rights, mines, T-bills, and revenue-generating contracts"
            href="/rwa-engine"
            icon="🏦"
          />
          <FeatureCard
            title="AI Swarm"
            description="Multi-agent AI system for risk management, compliance, treasury operations, and market analysis"
            href="/ai-swarm"
            icon="🤖"
          />
          <FeatureCard
            title="DEX & AMM"
            description="Decentralized exchange with automated market makers and liquidity pool management"
            href="/dex-exchange"
            icon="📈"
          />
          <FeatureCard
            title="Compliance"
            description="Bank-grade compliance with proof-of-reserves, regulatory disclosures, and audit trails"
            href="/compliance"
            icon="🛡️"
          />
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/developers"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            Developer Documentation
          </Link>
        </div>
      </main>

      <footer className="border-t border-purple-500/20 bg-black/20 backdrop-blur-sm mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-400">
            © 2025 Unykorn X. Built on XRP Ledger.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ title, description, href, icon }: { title: string; description: string; href: string; icon: string }) {
  return (
    <Link href={href} className="block">
      <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:bg-white/10 transition-all hover:border-purple-500/40">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </Link>
  );
}
