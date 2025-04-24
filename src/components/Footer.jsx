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
            <footer style={{ position: 'relative', height: '80px', backgroundColor: '#1B1E1F' }}>

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


                <a
                    style={{
                        display: 'inline-flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        textDecoration: 'none',
                    }}
                    href="https://github.com/thepangel"
                    
                >
                    
                    <GitHubIcon fontSize="large" style={{ padding: '1rem', color: '#ffffff', order: 2 }} />
                    



                    <p style={{ color: '#ffffff', order: 1 }} >
                        "Code on GitHub!!"
                    </p>
                </a>
                <div
                    style={{
                        position: 'absolute',
                        left: '90%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '323px',

                    }}
                >
                    <p

                        style={{ display: 'inline-block', color: '#ffffff' }}
                    >
                        char *ThePangel = Ángel.Fuentes.Fernández();<br></br>
                        printf("By %s \n", ThePangel)
                    </p>
                </div>
            </footer>


        </div>
    );
}
