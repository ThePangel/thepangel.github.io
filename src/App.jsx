import React from 'react'
import './App.css';
import Footer from './components/Footer.jsx'
import NavBar from './components/NavBar.jsx';
import { Typewriter } from 'react-simple-typewriter';
import MoonAndEarth from './components/moonAndEarth.jsx'
import * as THREE from 'three'

function App() {
  return (

    <div className="App">
      <div class="fixed w-screen" style={{ zIndex: 9999 }}>
        <NavBar />
      </div>

      <header className="App-header">
        <main>
          <section id="Home" className="relative h-screen w-screen bg-[url('/assets/images/moon.png')] bg-cover bg-center bg-no-repeat">
            <h1 id="home" className="absolute font-mono md:text-[2rem] text-[1.5rem] md:max-w-[90vw] max-w-[80vw] inline-block top-40 left-12 p-4 bg-[rgba(0,0,0,0.2)] backdrop-blur-sm rounded-xl text-left order-1 z-10">
              <span className="text-white drop-shadow-[0_0_8px_rgba(256,256,256,0.89)] z-10">Hi, I’m </span>
              <span className="text-purple-700/90 drop-shadow-[0_0_8px_rgba(90,0,187,0.89)] z-10">
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
              <br />
              <span className="text-white drop-shadow-[0_0_8px_rgba(256,256,256,0.89)] z-10">I like to </span>
              <span className="text-blue-700/90 drop-shadow-[0_0_4px_rgba(0,78,187,0.7)] drop-shadow-[0_0_10px_rgba(0,78,187,0.8)] z-10">
                <Typewriter
                  words={['Code', 'Build', 'Design', 'Engineer', 'Invent', 'Animate', 'Model', 'Fix', 'Create', 'Help', 'Compete', 'Learn']}
                  loop={true}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <div className="z-0">
              <MoonAndEarth />
            </div>

          </section>

        </main>

      </header>
      <Footer />

    </div>
  );
}

export default App;
