import { Footer } from '@/components/Footer/Footer';
import { Hero } from '../components/Hero/Hero';
import { Text } from '@mantine/core';
import { Events } from '@/components/Events/Events';

export default function EventsPage() {
  const HeroProps = {
    title: (
      <>
        All the events of the{' '}
        <Text component="span" inherit variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
          IEEE Student Branch
        </Text>{' '}
      </>
    ),
  };

  return (
    <div>
      <Hero {...HeroProps} />
      <Events />
      <Footer />
    </div>
  );
}
