import Header from '../src/components/Header';
import About from '../src/components/pages/About';
import Carrossel from './components/pages/Carrossel';
import Contact from '../src/components/pages/Contact';
import Work from '../src/components/pages/Work';
import Footer from './components/Footer';

const App = ({ toggleTheme, isDarkMode }) => {
  return (
    <div>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

      <section id="about">
      <About isDarkMode={isDarkMode} />
      </section>
      <Carrossel isDarkMode={isDarkMode}/>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default App;