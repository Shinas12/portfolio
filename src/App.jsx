import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="min-h-screen bg-dark-900">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Experience />
                <Education />
                <Skills />
                <Languages />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
