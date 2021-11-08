//Components
import Main from '../components/Main/Main';
import Section from '../components/Section/Section';
import Enseignement from '../components/Enseignement/Enseignement.jsx';
import Decouverte from '../components/Decouverte/Decouverte';
import Videos from '../components/Videos/Videos';
import Temoignages from '../components/Temoignages/Temoignages';
import Contact from '../components/Contact/Contact';
import Container from '../utility/Container/Container';

function Home() {
  return (
    <Container>
      <Section />
      <Main />
      <Enseignement />
      <Decouverte />
      <Videos />
      <Temoignages />
      <Contact />
    </Container>
  );
}

export default Home;
