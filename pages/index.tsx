import { Hero } from '../components/Hero/Hero';
import { Events } from '../components/Events/Events';
import { Footer } from '../components/Footer/Footer';
import { useEffect, useRef, useState } from 'react';
import { Articles } from '@/components/Articles/Articles';
import { Timeline } from '@/components/Timeline/Timeline';

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const bottomComponentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const translateY = -scrollY;
  return (
    <div style={{ overflow: 'hidden' }}>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <Hero />
        <div
          className="bottom-component-wrapper"
          style={{
            transform: `translateY(${translateY}px)`,
            marginBottom: '-100vh',
            width: '100%',
            zIndex: 1,
          }}
          ref={bottomComponentRef}
        >
          <Events />
          <Articles />
          <Timeline />
        </div>
      </div>
      <Footer />
    </div>
  );
}
