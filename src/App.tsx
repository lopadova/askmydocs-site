import Nav from './components/Nav.tsx';
import Hero from './components/Hero.tsx';
import WhatItIs from './components/WhatItIs.tsx';
import Moats from './components/Moats.tsx';
import Showcase from './components/Showcase.tsx';
import Connectors from './components/Connectors.tsx';
import Mcp from './components/Mcp.tsx';
import Architecture from './components/Architecture.tsx';
import OpenSource from './components/OpenSource.tsx';
import FinalCta from './components/FinalCta.tsx';
import Footer from './components/Footer.tsx';

export default function App() {
  return (
    <div
      style={{
        background: 'var(--bg-base)',
        color: 'var(--text-mid)',
        fontFamily: 'var(--font-sans)',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      <Nav />
      <main>
        <Hero />
        <WhatItIs />
        <Moats />
        <Showcase />
        <Connectors />
        <Mcp />
        <Architecture />
        <OpenSource />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
