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
            <footer style={{ position: 'relative', height: '80px', backgroundColor: '#f9f9f9' }}>

                <div id="webring-wrapper" style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                }}>
                    <a href="https://webring.hackclub.com/" id="previousBtn" class="webring-anchor" title="Previous">‹</a>
                    <a href="https://webring.hackclub.com/" class="webring-logo" title="Hack Club Webring" alt="Hack Club Webring"></a>
                    <a href="https://webring.hackclub.com/" id="nextBtn" class="webring-anchor" title="Next">›</a>
                   
                </div>


                <div
                    style={{
                        position: 'absolute',
                        left: '56%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <a style={{ color: 'inherit' }}
                        href="https://github.com/thepangel">
                        <GitHubIcon fontSize="large" style={{ padding: '1rem' }} />
                    </a>


                </div>
                <div
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <a
                        href="https://github.com/thepangel"
                        style={{ color: 'inherit' }}
                    >
                        "Code on GitHub!!"
                    </a>
                </div>
                <div
                    style={{
                        position: 'absolute',
                        left: '90%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '323px',

                    }}
                >
                    <a

                        style={{ width: '323px', color: 'inherit' }}
                    >
                        char *ThePangel = Ángel.Fuentes.Fernández();<br></br>
                        printf("By %s \n", ThePangel)
                    </a>
                </div>
            </footer>


        </div>
    );
}
