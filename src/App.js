//Components
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
import Section from './components/Section/Section';
import Enseignement from './components/Enseignement/Enseignement.jsx';
import Decouverte from './components/Decouverte/Decouverte';

function App() {
  return (
    <>
      <Menu />
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Section />
        <Main />
        <Enseignement />
        <Decouverte />
      </div>
    </>
  );
}

export default App;
