import React from 'react'
import './App.css';
import Footer from './components/Footer.jsx'
import NavBar from './components/NavBar.jsx';
import MoonAndEarth from './components/moonAndEarth.jsx'
import NameAndStuff from './components/nameAndStuff.jsx';

function App() {
  return (

    <div className="App">
      <div className="fixed w-screen" style={{ zIndex: 9999 }}>
        <NavBar />
      </div>

      <header className="App-header">
        <main>
          <section id="Home" className="relative h-screen w-screen bg-[url('/assets/images/moon.png')] bg-cover bg-center bg-no-repeat">
            <NameAndStuff />
            <div className="z-0 xl:-translate-x-[80rem] md:-translate-x-[40rem] translate-y-[10rem] ">
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
