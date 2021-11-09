import React from 'react';

//Router
import { Routes, Route } from 'react-router-dom';

//Components
import Menu from './components/Menu/Menu';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import Connecter from './Pages/Connecter';
import Compte from './Pages/Compte';
import Footer from './components/Footer/Footer';
import CopyRight from './components/CopyRight/CopyRight';
const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contacts" element={<Contacts />} />
        <Route exact path="/connecter" element={<Connecter />} />
        <Route exact path="/s'inscrire" element={<Compte />} />
      </Routes>
      <Footer />
      <CopyRight />
    </>
  );
};

export default App;
