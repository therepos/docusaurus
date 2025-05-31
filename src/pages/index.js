import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import UpdatesMarkdown from '@site/src/data/updates.md';

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      offset: 100,
      duration: 800,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <Layout>
      {/* First Section */}
      <section className="section-1">
        <div className="container-1">
          <div className="landing-card-grid">
            <Card title="Home" link="/about" description="Description of site." />
            <Card title="Blog" link="/blog" description="Description of site." />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="section-2">
        <div className="container-2">
          <div className="card-updates" data-aos="zoom-in">
            <UpdatesMarkdown />
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Card({ title, link, description }) {
  return (
    <div className="landing-card" data-aos="fade-up">
      <h3><Link to={link}>{title}</Link></h3>
      <p>{description}</p>
    </div>
  );
}
