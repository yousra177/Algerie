import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cloth from './about/Cloth';
import Musique from './about/Musique';
import Food from './about/Food';
import { ContactProvider } from './ContactContext/ContactContext';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <ContactProvider>

          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cloth" element={<Cloth />} />
            <Route path="/musq" element={<Musique />} />
            <Route path="/food" element={<Food />} />
          </Routes>
          
          </ContactProvider>
          <Footer/>

        </BrowserRouter>
    </div>
  );
}

export default App;
