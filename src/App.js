import React from 'react'
import './App.css';
import Footer from './components/Footer.jsx'
import NavBar from './components/NavBar.jsx';
import { Typewriter } from 'react-simple-typewriter';

function App() {
  return (

    <div className="App">
      <div style={{ position: 'fixed', zIndex: 9999 }}>
        <NavBar />
      </div>

      <header className="App-header">
        
        <h1 id="home" style={{ position: 'absolute',
            top: '10rem',
            left: '3rem', 
            padding: '1rem',
            
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '12px',
            fontSize: '2rem',
            fontFamily: 'monospace',
            maxWidth: '90vw',
            textAlign: 'left'}}>
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
          words={['Code', 'Build', 'Design', 'Engineer', 'Invent', 'Fix', 'Create']}
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
