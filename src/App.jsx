import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Prices from './components/Prices';
import Services from './components/Services';

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Prices />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
