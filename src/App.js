import React from 'react';

//Router
import { Routes, Route } from 'react-router-dom';

//Components
import Menu from './components/Menu/Menu';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import Connecter from './Pages/Connecter';
import Compte from './Pages/Compte';
import Enseignement from './Pages/Enseignement';
import Predication from './Pages/Predication/Predication';
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
        <Route exact path="/enseignement" element={<Enseignement />} />
        <Route exact path="/predication" element={<Predication />} />
      </Routes>
      <Footer />
      <CopyRight />
    </>
  );
};

export default App;
