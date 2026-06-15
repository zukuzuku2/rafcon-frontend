import Navbar from '@/components/Common/Navbar';
import Footer from '@/components/Common/Footer';
import Home from '@/views/Home';
import About from '@/views/About';
import Services from '@/views/Services';
import Portfolio from '@/views/Portfolio';
import Contact from '@/views/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
