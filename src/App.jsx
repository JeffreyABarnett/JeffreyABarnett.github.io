import './App.css';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Extras from './components/Extras';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="container">
          <Summary />
          <Skills />
          <Experience />
          <Education />
          <Extras />
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Jeffrey Barnett. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
