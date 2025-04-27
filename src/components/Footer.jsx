import React, { useEffect } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Footer() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://webring.hackclub.com/embed.min.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);


    return (
        <div>
            <footer style={{ backgroundColor: '#1B1E1F' }} className="h-20 flex justify-center items-center">

                <div
                    className="flex justify-center items-center absolute left-2  transform gap-2 order-1"
                    id="webring-wrapper" >
                    <a href="https://webring.hackclub.com/" id="previousBtn" className="webring-anchor" title="Previous">‹</a>
                    <a href="https://webring.hackclub.com/" className="webring-logo" title="Hack Club Webring" alt="Hack Club Webring"></a>
                    <a href="https://webring.hackclub.com/" id="nextBtn" className="webring-anchor" title="Next">›</a>

                </div>


                <a
                    className="inline-flex flex-row items-center justify-center self-center no-underline order-2  "
                    href="https://github.com/thepangel"

                >
                    <p className="text-white order-0 xl:text-lg text-xs">
                        "Code on GitHub!!"
                    </p>
                    <GitHubIcon sx={{ color: '#ffffff', fontSize: 45 }} className="order-1 p-2" />


                </a>
                <div
                    className="absolute md:left-[87%] left-[70%] inline-block order-3 xl:text-xs text-[.75rem] p-4"
                >
                    <span
                        className="text-white hidden md:inline-block"
                    >
                        char *ThePangel = Ángel.Fuentes.Fernández();<br></br>
                        printf("By %s \n", ThePangel)
                    </span>
                    <span
                        className="text-white md:hidden inline-block"
                    >
                        By ThePangel :D 🤘
                    </span>
                </div>
            </footer>


        </div>
    );
}
