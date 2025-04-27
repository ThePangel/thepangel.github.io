import React from 'react'
import './App.css';
import Footer from './components/Footer.jsx'
import NavBar from './components/NavBar.jsx';
import MoonAndEarth from './components/moonAndEarth.jsx'
import NameAndStuff from './components/nameAndStuff.jsx';
import { useParallax } from 'react-scroll-parallax';

function App() {
  return (

    <div className="App">
      <div className="fixed w-screen" style={{ zIndex: 9999 }}>
        <NavBar />
      </div>

      <header className="App-header">
        <main>
          <section id="Home" className="relative h-screen w-screen bg-fixed bg-[url('/assets/images/moon.png')] bg-cover bg-center bg-no-repeat">
            <NameAndStuff />
            <div className="z-0 xl:-translate-x-[5rem] md:-translate-x-[40rem] translate-y-[10rem] ">
              <MoonAndEarth />
            </div>
            <h1 className="xl:pt-45 pt-85 xl:pr-20 pl-12 xl:text-right text-left xl:text-6xl text-2xl font-mono text-white drop-shadow-[0_0_8px_rgba(256,256,256,0.89)]">"The only way to do great work <br></br> is to love what you do." <br></br> — Steve Jobs</h1>
            <img className="transform-flat p-4 pl-12 xl:w-lg w-xs" src="assets/images/logo.png" />        
            </section>

        </main>

      </header>
      <Footer />

    </div>
  );
}

export default App;
