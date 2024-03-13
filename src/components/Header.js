import React, { useEffect, useState } from 'react';

const Header = () => {
    const [activeSection, setActiveSection] = useState('top');

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('about');
            const experiencesSection = document.getElementById('experiences');
            const projectsSection = document.getElementById('projects');
            const recommendationsSection = document.getElementById('recommendations');
            const scrollPosition = window.scrollY;

            if (
                scrollPosition < aboutSection.offsetTop
                || (scrollPosition >= recommendationsSection.offsetTop + recommendationsSection.offsetHeight)
            ) {
                setActiveSection('top');
            } else if (scrollPosition >= aboutSection.offsetTop && scrollPosition < experiencesSection.offsetTop) {
                setActiveSection('about');
            } else if (scrollPosition >= experiencesSection.offsetTop && scrollPosition < projectsSection.offsetTop) {
                setActiveSection('experiences');
            } else if (scrollPosition >= projectsSection.offsetTop && scrollPosition < recommendationsSection.offsetTop) {
                setActiveSection('projects');
            } else {
                setActiveSection('recommendations');
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <header className="text-gray-400 p-8">
            <div className="container ml-8 pl-18 lg:ml-32 lg:pl-18">
                <div className="text-left">
                    <h1 id='top' className="text-gray-50 text-6xl font-bold mb-8">
                        <a href='#top'>Andy Feng</a>
                    </h1>
                    <h2 className="text-xl mb-4">BBA and BSE Student
                        <a href='https://www.umich.edu/' target="_blank" rel="noreferrer" className="text-white hover:text-sky-500"> @UMich</a>
                    </h2>
                    <p className="text-base">Thinking about how Artificial Intelligence, AR/VR, and other emerging technologies will change the world.
                        Read my thoughts on my{' '}
                        <a href='https://medium.com/@afeng20' target='_blank' rel="noreferrer" className="text-white hover:text-sky-500">blog</a>.
                    </p>
                </div>
            </div>
            <div>
                <ol className="text-left ml-8 pt-8 lg:ml-32 lg:pt-16 font-medium text-xl">
                    <li className={`pb-4 ${activeSection === 'about' ? 'text-white font-bold' : 'text-gray-400'}`}>
                        <a href='#about' className="ease-in-out">About</a>
                    </li>
                    <li className={`pb-4 ${activeSection === 'experiences' ? 'text-white font-bold' : 'text-gray-400'}`}>
                        <a href='#experiences' className="ease-in-out">Experiences</a>
                    </li>
                    <li className={`pb-4 ${activeSection === 'projects' ? 'text-white font-bold' : 'text-gray-400'}`}>
                        <a href='#projects' className="ease-in-out">Projects</a>
                    </li>
                    <li className={`pb-4 ${activeSection === 'recommendations' ? 'text-white font-bold' : 'text-gray-400'}`}>
                        <a href='#recommendations' className="ease-in-out">Recommendations</a>
                    </li>
                </ol>
            </div>
            <div className="lg:h-dvh pl-8 pt-8 lg:pt-72 lg:pl-32">
                <ul className="flex items-center">
                    <li className="mr-10">
                        <a className="block hover:text-sky-500" href='https://www.linkedin.com/in/andyfeng24/' target='_blank' rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="h-16 w-16 fill-current"><path d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM17 20v19h-6V20h6zm-6-5.53c0-1.4 1.2-2.47 3-2.47s2.93 1.07 3 2.47c0 1.4-1.12 2.53-3 2.53-1.8 0-3-1.13-3-2.53zM39 39h-6V29c0-2-1-4-3.5-4.04h-.08C27 24.96 26 27.02 26 29v10h-6V20h6v2.56S27.93 20 31.81 20c3.97 0 7.19 2.73 7.19 8.26V39z" />
                            </svg>
                        </a>
                    </li>
                    <li className="mr-10">
                        <a className="block hover:text-sky-500" href='https://twitter.com/andyfeng2024' target='_blank' rel="noreferrer">
                            <svg className="h-14 w-14 fill-current" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 462.799"><path fill-rule="nonzero" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z" />
                            </svg>
                        </a>
                    </li>
                    <li className='mr-10'>
                        <a className="block hover:text-sky-500" href='https://medium.com/@afeng20' target='_blank' rel="noreferrer">
                            <svg className="h-14 w-14 fill-current" viewBox="0 -55 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M72.2 0c39.877 0 72.2 32.549 72.2 72.696 0 40.148-32.326 72.694-72.2 72.694-39.872 0-72.2-32.546-72.2-72.694C0 32.55 32.325 0 72.2 0Zm115.3 4.258c19.938 0 36.101 30.638 36.101 68.438h.003c0 37.791-16.163 68.438-36.1 68.438-19.939 0-36.101-30.647-36.101-68.438 0-37.79 16.16-68.438 36.098-68.438Zm55.803 7.129c7.011 0 12.697 27.449 12.697 61.31 0 33.85-5.684 61.31-12.697 61.31-7.013 0-12.694-27.452-12.694-61.31 0-33.859 5.684-61.31 12.694-61.31Z" /></svg>
                        </a>
                    </li>
                    <li className='mr-10'>
                        <a className="block hover:text-sky-500" href='https://github.com/andyfeng20' target='_blank' rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-14 w-14 fill-current"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                        </a>
                    </li>
                   
                </ul>
            </div>
        </header>
    );
};

export default Header;
