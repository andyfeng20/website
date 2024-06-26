import React, { useEffect } from 'react'; 
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Blog from './components/Blog';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Recommendations from './components/Recommendations';
import Spotlight from './components/Spotlight';

// Design referenced from https://brittanychiang.com/

function App() {

  useEffect(() => {
    document.title = "Andy Feng";
  }, []); 
  return (
    <div className="App lg:min-h-screen flex items-center justify-center bg-gray-900 text-slate-400">
      <body 
        class="lg:min-h-screen w-full"> 
        <Spotlight />
        <html class="scroll-behavior-smooth">
          <div class="lg:flex lg:justify-between">
            <div class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-2/5 lg:flex-col lg:justify-between lg:py-24 mx-auto">
            {/* <div class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-2/5 lg:flex-col lg:justify-between lg:py-24 mx-auto fixed left-0 top-0 bottom-0"> */}
              <Header />
            </div>
            <div class=" lg:w-3/5 overflow-y-auto lg:pb-32">
              <About />
              <Blog />
              <Experiences />
              <Projects />
              <Recommendations />
              <p class="text-left text-sm text-gray-400 lg:pl-36 pl-8 lg:pb-0 pb-16">Coded in {''}
                <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer" class="text-white hover:text-sky-500">VSCode</a>. Built with {''}
                <a href="https://react.dev/" target="_blank" rel="noreferrer" class="text-white hover:text-sky-500">React</a> and {''}
                <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" class="text-white hover:text-sky-500">Tailwind CSS</a>.</p>
            </div>
          </div>
        </html>
      </body>
    </div>
  );
}


export default App;