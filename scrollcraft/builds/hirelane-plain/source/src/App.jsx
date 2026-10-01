import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Steps from './components/Steps.jsx';
import Traps from './components/Traps.jsx';
import Results from './components/Results.jsx';
import Stories from './components/Stories.jsx';
import Toolkit from './components/Toolkit.jsx';
import Compare from './components/Compare.jsx';
import Pricing from './components/Pricing.jsx';
import Founder from './components/Founder.jsx';
import Faq from './components/Faq.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Steps />
        <Traps />
        <Results />
        <Stories />
        <Toolkit />
        <Compare />
        <Pricing />
        <Founder />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
