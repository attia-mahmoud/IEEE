import { Footer } from '@/components/Footer/Footer';
import { Hero } from '../components/Hero/Hero';
import { Members } from '@/components/Members/Members';
import { Text } from '@mantine/core';

export default function MembersPage() {
  const HeroProps = {
    title: (
      <>
        The Minds Behind the{' '}
        <Text component="span" inherit variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
          IEEE Student Branch
        </Text>{' '}
      </>
    ),
  };

  return (
    <div>
      <Hero {...HeroProps} />
      <Members />
      <Footer />
    </div>
  );
}
