import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="Welcome" description="Landing Page">
      <main className="landing-main">
        <h1 className="landing-title">Docusaurus Template</h1>
        <div className="landing-card-grid">
          <Link className="landing-card" to="/about">
            <h2>About</h2>
            <p>Description goes here.</p>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
