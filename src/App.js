//Components
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
import Section from './components/Section/Section';
import Enseignement from './components/Enseignement/Enseignement.jsx';
import Decouverte from './components/Decouverte/Decouverte';
import Videos from './components/Videos/Videos';
import Temoignages from './components/Temoignages/Temoignages';

function App() {
  return (
    <>
      <Menu />
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Section />
        <Main />
        <Enseignement />
        <Decouverte />
        <Videos />
        <Temoignages />
      </div>
    </>
  );
}

export default App;
