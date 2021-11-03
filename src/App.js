
//Components
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
import Section from './components/Section/Section';

function App() {
  return (
    <>
      <Menu />
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Section />
        <Main/>
      </div>
    </>
  );
}

export default App;
