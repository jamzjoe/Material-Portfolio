
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Form from './components/Contacts/Form';
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'
import OverView from './components/OverView/OverView';

function App() {
  return (
    <div className="App">
      <AboutMe />
      <OverView />
      <Skills />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
