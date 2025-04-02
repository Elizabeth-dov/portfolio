import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Education from './pages/Education';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Nawigacja */}
        <nav className="p-4 bg-gradient-to-r from-gray-900 to-gray-700 shadow-md">
          <div className="space-x-4 flex flex-wrap justify-center md:space-x-6">
            <NavLink to="/" className="nav-link text-white text-lg md:text-xl">Strona główna</NavLink>
            <NavLink to="/about" className="nav-link text-white text-lg md:text-xl">O mnie</NavLink>
            <NavLink to="/education" className="nav-link text-white text-lg md:text-xl">Wykształcenie</NavLink>
            <NavLink to="/experience" className="nav-link text-white text-lg md:text-xl">Doświadczenie</NavLink>
            <NavLink to="/contact" className="nav-link text-white text-lg md:text-xl">Kontakt</NavLink>
          </div>
        </nav>
        
        {/* Główna zawartość */}
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="p-4 bg-gray-900 text-white text-center mt-8">
          <p>© 2025 Yelyzaveta Dovhaliuk. Wszystkie prawa zastrzeżone.</p>
          <p>
            <a href="https://www.linkedin.com/in/twojprofil" className="text-blue-400">LinkedIn</a> | 
            <a href="https://github.com/twojprofil" className="text-blue-400 ml-2">GitHub</a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
