import React, { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';
import WhatsApp from "./components/Whatsapp/WhatsApp";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Events from './components/Events/Events';
import Menu from './components/Menu/Menu';
import ScrollToTop from './ScrollToTop';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';


function App() {
  const [done, setDone] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);


  return (
    <>
    <Router>
      <ScrollToTop>
      {done ? (
        <>
          <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/events' element={<Events />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/gallery' element={<Gallery />} />
          </Routes>
          <Footer />
          <WhatsApp />
        </>
      ) : (
        <Loader />
      )}
      </ScrollToTop>
    </Router>
    </>
  );
}


export default App;
