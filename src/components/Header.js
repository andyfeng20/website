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

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <header className="text-gray-400 p-8">
            <div className="container ml-8 pr-16 lg:ml-32 lg:pr-24">
                <div className="text-left">
                    <h1 id='top' className="text-gray-50 text-6xl font-bold mb-8">
                        <a href='#top'>Andy Feng</a>
                    </h1>
                    <h2 className="text-xl mb-4">BBA and BSE Student
                        <a href='https://www.umich.edu/' target="_blank" rel="noreferrer" className="text-white hover:text-sky-500"> @UMich</a>
                    </h2>
                    <p className="text-base">Thinking about how Artificial Intelligence, AR/VR, and other emerging technologies will change the world.
                        Read my thoughts on my{' '}
                        <a href='https://substack.com/@andyfeng' target='_blank' rel="noreferrer" className="text-white hover:text-sky-500">blog</a>.
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
                    <li>
                        <a className="block hover:text-sky-500" href='https://substack.com/@andyfeng' target='_blank' rel="noreferrer">
                            <svg className="h-14 w-14 fill-current" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 448 511.471"><path d="M0 0h448v62.804H0V0zm0 229.083h448v282.388L223.954 385.808 0 511.471V229.083zm0-114.542h448v62.804H0v-62.804z" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
