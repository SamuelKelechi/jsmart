import React, { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';
import WhatsApp from "./components/Whatsapp/WhatsApp";
import Home from './components/Home/Home';


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
      {done ? (
        <div className="App">
          <Home />
          <WhatsApp />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}


export default App;
