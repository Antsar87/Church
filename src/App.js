import React from 'react';

//Router
import { Routes, Route } from 'react-router-dom';

//Components
import Menu from './components/Menu/Menu';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import CopyRight from './components/CopyRight/CopyRight';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
      <CopyRight />
    </>
  );
};

export default App;
