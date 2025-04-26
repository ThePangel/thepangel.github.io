import React from 'react'
import './App.css';
import Footer from './components/Footer.jsx'
import NavBar from './components/NavBar.jsx';
import { Typewriter } from 'react-simple-typewriter';

function App() {
  return (

    <div className="App">
      <div class="fixed w-screen" style={{ zIndex: 9999 }}>
        <NavBar />
      </div>

      <header className="App-header bg-[url('/assets/images/moon.png')] bg-cover bg-center bg-no-repeat">

        <h1 id="home" className="absolute font-mono md:text-[2rem] text-[1.5rem] md:max-w-[90vw] max-w-[80vw] inline-block top-40 left-12 p-4 bg-[rgba(0,0,0,0.2)] backdrop-blur-sm rounded-xl text-left">
          <span>Hi, I’m </span>
          <span style={{ color: 'rgba(90, 0, 187, 0.89)' }}>
            <Typewriter
              words={['ThePangel', 'Ángel Fuentes Fernández']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={5000}
            />
          </span>
          <br></br>
          <span>I like to <span style={{ color: 'rgba(0, 78, 187, 0.89)' }}>
            <Typewriter
              words={['Code', 'Build', 'Design', 'Engineer', 'Invent', 'Animate', 'Model', 'Fix', 'Create', 'Help', 'Compete', 'Learn']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span> </span>
        </h1>


      </header>
      <Footer />

    </div>
  );
}

export default App;
