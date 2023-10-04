import { Welcome } from '../components/Welcome/Welcome';
// import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Header } from '../components/Header/Header';
import { Hero } from '../components/Hero/Hero';
import { Events } from '../components/Events/Events';
import { Footer } from '../components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Events />
      {/* <Welcome /> */}
      {/* <ColorSchemeToggle /> */}
      <Footer />
    </>
  );
}
