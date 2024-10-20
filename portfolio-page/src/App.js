import './App.css';
import Header from './Header.js';
import Introduction from './Introduction.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Internships from './Internships.js';
import Contact from './Contact.js';

function App() {
  return (
    <div className="App">
      <Header />
      <hr></hr>
      <Introduction />
      <hr></hr>
      <Skills />
      <hr></hr>
      <Projects/>
      <hr></hr>
      <Internships/>
      <hr></hr>
      <Contact/>
    </div>
  );
}

export default App;