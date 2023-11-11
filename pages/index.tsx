import { Hero } from '../components/Hero/Hero';
import { EventsPeak } from '../components/Events/EventsPeak';
import { Footer } from '../components/Footer/Footer';
import { useEffect, useRef, useState } from 'react';
import { Articles } from '@/components/Articles/Articles';
import { Timeline } from '@/components/Timeline/Timeline';
import { Button, Text } from '@mantine/core';

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

  const HeroProps = {
    title: (
      <>
        KFUPM{' '}
        <Text component="span" inherit variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
          IEEE
        </Text>{' '}
        Student Branch
      </>
    ),
    description: 'Creating opportunities for engineering students',
    CTA: (className: string) => (
      <Button
        variant="gradient"
        gradient={{ from: 'blue', to: 'cyan' }}
        size="xl"
        className={className}
        mt={40}
        component="a"
        href="/events"
      >
        Check out our events
      </Button>
    ),
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <Hero {...HeroProps} />
        <div
          className="bottom-component-wrapper"
          style={{
            transform: `translateY(${translateY}px)`,
            marginBottom: '-50rem',
            width: '100%',
            zIndex: 1,
          }}
          ref={bottomComponentRef}
        >
          <EventsPeak />
          <Articles />
          <Timeline />
        </div>
      </div>
      <Footer />
    </div>
  );
}
