import React, { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';
import WhatsApp from "./components/Whatsapp/WhatsApp";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);



  return (
    <>
    <Router>
      {done ? (
        <>
          <Header />
          <Home />
          <Footer />
          <WhatsApp />
        </>
      ) : (
        <Loader />
      )}
    </Router>
    </>
  );
}


export default App;
