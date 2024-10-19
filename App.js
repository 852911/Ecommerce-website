import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from React Router
import Navbar from './ccomponents/Navbar';
import AboutUs from './ccomponents/AboutUs';
import Footer from './ccomponents/Footer';
import Home from './ccomponents/Home';
import Services from './ccomponents/Services';
import Contact from './ccomponents/Contact';

function App() {
  return (
    <Router> {/* Wrap the application in Router */}
      <div>
        <Navbar/>
        <Routes> {/* Define routes for each component */}
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/about" element={<AboutUs />} /> {/* About Us page */}
          <Route path="/services" element={<Services />} /> {/* Services page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
