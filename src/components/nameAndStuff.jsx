import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function NameAndStuff() {
    return (
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
              <span className="text-blue-700/90 drop-shadow-[0_0_10px_rgba(0,78,187,0.8)] z-10">
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
              <br></br>
              <a href="https://github.com/thepangel"><GitHubIcon className="text-inherit drop-shadow-[0_0_8px_rgba(256,256,256,0.89)]" /> </a>
              <a href="https://x.com/ThePangel_"><TwitterIcon className="text-inherit drop-shadow-[0_0_8px_rgba(256,256,256,0.89)]"/> </a>
              <a href="https://www.instagram.com/thepangel/"><InstagramIcon className="text-inherit drop-shadow-[0_0_8px_rgba(256,256,256,0.89)]"/></a>
              </h1>
            
    )
}