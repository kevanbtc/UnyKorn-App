'use client';

import React, { useState } from 'react';
import './amplify-style.css';

export default function AmplifyControlPage() {
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);

  const copyCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    alert(`Copied: ${cmd}`);
  };

  return (
    <div className="amplify-root">
      {/* Top Navigation Bar */}
      <header className="amplify-topbar">
        <div className="amplify-topbar-left">
          <div className="amplify-logo">AWS Amplify</div>
          <button className="amplify-nav-btn amplify-nav-active">All apps</button>
          <button className="amplify-nav-btn">Create new app</button>
        </div>
        <div className="amplify-topbar-right">
          <a href="https://docs.amplify.aws" target="_blank" rel="noreferrer" className="amplify-nav-link">
            Documentation
          </a>
          <a href="https://aws.amazon.com/support" target="_blank" rel="noreferrer" className="amplify-nav-link">
            Support
          </a>
          <button className="amplify-user-btn">👤</button>
        </div>
      </header>

      <div className="amplify-container">
        {/* Left Sidebar - Steps */}
        <aside className="amplify-sidebar">
          <div className="amplify-step amplify-step-active">
            <span className="amplify-step-num">1</span>
            <span className="amplify-step-label">Choose source code provider</span>
          </div>
          <div className="amplify-step-connector"></div>
          <div className="amplify-step">
            <span className="amplify-step-num">2</span>
            <span className="amplify-step-label">Add repository and branch</span>
          </div>
          <div className="amplify-step-connector"></div>
          <div className="amplify-step">
            <span className="amplify-step-num">3</span>
            <span className="amplify-step-label">App settings</span>
          </div>
          <div className="amplify-step-connector"></div>
          <div className="amplify-step">
            <span className="amplify-step-num">4</span>
            <span className="amplify-step-label">Review</span>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="amplify-main-content">
          <h1 className="amplify-heading-xl">Start building with Amplify</h1>
          <p className="amplify-text-muted">
            Amplify provides a fully-managed web hosting experience and backend building service to build fullstack apps.
          </p>
          <p className="amplify-text-small">
            If you need a starter project, check out the{' '}
            <a href="https://docs.amplify.aws" target="_blank" rel="noreferrer">
              documentation
            </a>{' '}
            for framework-specific examples.
          </p>

          {/* Deploy Your App Card */}
          <div className="amplify-card">
            <h2 className="amplify-heading-lg">Deploy your app</h2>
            <p className="amplify-card-text">
              To deploy an app from a Git provider, select one of the options below:
            </p>

            <div className="amplify-provider-grid">
              <button
                className={`amplify-provider-btn ${selectedProvider === 'github' ? 'selected' : ''}`}
                onClick={() => setSelectedProvider('github')}
              >
                <span className="amplify-provider-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </span>
                GitHub
              </button>

              <button
                className={`amplify-provider-btn ${selectedProvider === 'gitlab' ? 'selected' : ''}`}
                onClick={() => setSelectedProvider('gitlab')}
              >
                <span className="amplify-provider-icon">🦊</span>
                GitLab
              </button>

              <button
                className={`amplify-provider-btn ${selectedProvider === 'bitbucket' ? 'selected' : ''}`}
                onClick={() => setSelectedProvider('bitbucket')}
              >
                <span className="amplify-provider-icon">🪣</span>
                Bitbucket
              </button>

              <button
                className={`amplify-provider-btn ${selectedProvider === 'codecommit' ? 'selected' : ''}`}
                onClick={() => setSelectedProvider('codecommit')}
              >
                <span className="amplify-provider-icon">☁️</span>
                AWS CodeCommit
              </button>
            </div>

            <p className="amplify-info-text">
              <span className="amplify-info-icon">ℹ️</span>
              Amplify requires read-only access to your repository.
            </p>

            <div className="amplify-divider">
              <span className="amplify-divider-line"></span>
              <span className="amplify-divider-text">OR</span>
              <span className="amplify-divider-line"></span>
            </div>

            <button className="amplify-btn-secondary">
              Deploy without Git provider
            </button>
            <p className="amplify-text-small-muted">
              Manually upload an app from Amazon S3 or a ZIP file.
            </p>
          </div>

          {/* Start with Template Card */}
          <div className="amplify-card">
            <h2 className="amplify-heading-lg">Start with a template</h2>
            <p className="amplify-card-text">
              Select a template to create a repository in your GitHub account. Then return to this page and select
              GitHub above to proceed.
            </p>

            <div className="amplify-template-grid">
              <a
                href="https://github.com/aws-amplify/amplify-hosting-nextjs-template"
                target="_blank"
                rel="noreferrer"
                className="amplify-template-card"
              >
                <div className="amplify-template-icon">⚛️</div>
                <div className="amplify-template-title">Next.js (App router)</div>
                <div className="amplify-template-desc">SSR/SSG with React App Router</div>
              </a>

              <a
                href="https://github.com/aws-amplify/amplify-vue-template"
                target="_blank"
                rel="noreferrer"
                className="amplify-template-card"
              >
                <div className="amplify-template-icon">🔷</div>
                <div className="amplify-template-title">Vue</div>
                <div className="amplify-template-desc">SPA with Vue and Amplify</div>
              </a>

              <a
                href="https://github.com/aws-amplify/amplify-angular-template"
                target="_blank"
                rel="noreferrer"
                className="amplify-template-card"
              >
                <div className="amplify-template-icon">🅰️</div>
                <div className="amplify-template-title">Angular</div>
                <div className="amplify-template-desc">Angular app with Amplify</div>
              </a>

              <a
                href="https://github.com/aws-amplify/amplify-vite-template"
                target="_blank"
                rel="noreferrer"
                className="amplify-template-card"
              >
                <div className="amplify-template-icon">⚡</div>
                <div className="amplify-template-title">Vite</div>
                <div className="amplify-template-desc">Lightning-fast dev starter</div>
              </a>
            </div>
          </div>

          {/* Gen 1 Notice */}
          <div className="amplify-notice">
            Looking to build an app with our Gen 1 tools (Amplify Studio/Amplify CLI)?{' '}
            <a href="https://docs.amplify.aws/cli/" target="_blank" rel="noreferrer">
              Create an app with Gen 1
            </a>
          </div>

          {/* Developer Quick Actions */}
          <div className="amplify-card amplify-card-accent">
            <h2 className="amplify-heading-lg">🚀 Developer Quick Actions</h2>
            <p className="amplify-card-text">One-click copy commands for faster development:</p>

            <div className="amplify-quick-grid">
              <button className="amplify-quick-btn" onClick={() => copyCommand('npx create-next-app@latest my-app')}>
                <span className="amplify-quick-icon">📦</span>
                <span className="amplify-quick-label">Create Next.js</span>
              </button>

              <button className="amplify-quick-btn" onClick={() => copyCommand('npm create vite@latest my-app')}>
                <span className="amplify-quick-icon">⚡</span>
                <span className="amplify-quick-label">Create Vite App</span>
              </button>

              <button className="amplify-quick-btn" onClick={() => copyCommand('amplify init')}>
                <span className="amplify-quick-icon">🎯</span>
                <span className="amplify-quick-label">amplify init</span>
              </button>

              <button className="amplify-quick-btn" onClick={() => copyCommand('amplify add auth')}>
                <span className="amplify-quick-icon">🔐</span>
                <span className="amplify-quick-label">Add Auth</span>
              </button>

              <button className="amplify-quick-btn" onClick={() => copyCommand('amplify add api')}>
                <span className="amplify-quick-icon">🔌</span>
                <span className="amplify-quick-label">Add API</span>
              </button>

              <button className="amplify-quick-btn" onClick={() => copyCommand('amplify publish')}>
                <span className="amplify-quick-icon">🚀</span>
                <span className="amplify-quick-label">Publish</span>
              </button>

              <button className="amplify-quick-btn" onClick={() => copyCommand('aws s3 sync build/ s3://bucket')}>
                <span className="amplify-quick-icon">☁️</span>
                <span className="amplify-quick-label">Deploy to S3</span>
              </button>

              <button className="amplify-quick-btn" onClick={() => copyCommand('sudo systemctl restart nginx')}>
                <span className="amplify-quick-icon">🔄</span>
                <span className="amplify-quick-label">Restart Nginx</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
