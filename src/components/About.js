import React from 'react';

const About = () => {
    return (
        <section id="about" className="text-gray-400 lg:ml-28 lg:pr-40 lg:pt-24 lg:pb-16">
            <div className="container mx-auto px-12">
                <div className="text-left">
                    <p class="mt-12 mb-6">
                        Starting college, I was unsure what I wanted to do with my future career. After stumbling around a bit looking at software engineering and investment banking, I discovered startups and venture capital through{' '}
                        <a href='#books' className="text-white hover:text-sky-500 ease-in-out">The Power Law</a>.
                    </p>    
                    <p class="mb-6">
                        Since then, I've been fascinated by the idea of creating and investing in companies that can change the world. I've had the opportunity to study software companies at a{' '}
                        <a href='#hedge fund' className="text-white hover:text-sky-500 ease-in-out">hedge fund</a>,
                        learn about startups at a{' '}
                        <a href='#OneValley' className="text-white hover:text-sky-500 ease-in-out">corporate venture capital fund</a>,
                        invest in early-stage companies at a{' '}
                        <a href='#ZESF' className="text-white hover:text-sky-500 ease-in-out">student-run venture capital fund</a>,
                        understand the broader venture ecosystem at a{' '}
                        <a href='#StepStone' className="text-white hover:text-sky-500 ease-in-out">fund-of-funds</a>,
                        and help scale a{' '}
                        <a href='#Shade' className="text-white hover:text-sky-500 ease-in-out">venture-backed startup</a>.
                    </p>
                    <p>
                        I'm always trying to learn more about innovative technologies and the companies that are building them. My focus recently has been on artificial intelligence, augmented reality, and virtual reality because I see these technologies as the next major platform shifts that will change the world.
                        I will try to share what I'm learning on my{' '}
                        <a href='https://medium.com/@afeng20' target='_blank' rel="noreferrer" className="text-white hover:text-sky-500">blog</a>. I'm always looking to learn more, so please reach out if you'd like to chat!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;