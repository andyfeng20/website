import React from 'react';
import power_law from './imgs/71WYvJXAW1L._AC_UF1000,1000_QL80_.jpg';
import metaverse from './imgs/91ktfa+F-TL._SL1500_.jpg';
import one_up from './imgs/71r7Z9e6TdL._AC_UF1000,1000_QL80_.jpg';
import steve_jobs from './imgs/71sVQDj0SCL._AC_UF1000,1000_QL80_.jpg';
import acquired from './imgs/channels4_profile.jpg';
import invest from './imgs/ab6765630000ba8a545c4b82d87b74a1614e82cf.jpeg'
import no_priors from './imgs/1200x1200bb.jpg';
import bg2 from './imgs/channels4_profile (1).jpg';
import lex from './imgs/unnamed.png';
import all_in from './imgs/ab6765630000ba8af94737f72ecf4c4ff9f4f041.jpeg';
import gamecraft from './imgs/ab6765630000ba8af662927adc2c9d6505e05b51.jpeg';

const Recommendations = () => {
    return (
        <section id="recommendations" className="text-white ml-24 pr-40 pt-16 pb-24">
            <div className="container mx-auto px-12">
                <div className="text-left">
                    <h2 id='books' className="text-lg font-semibold mb-6">Books</h2>
                    <div className="flex overflow-x-auto pb-12 scroll-behavior-smooth">
                        <div className="flex-shrink-0 mr-16">
                            <a href='https://www.amazon.com/Power-Law-Venture-Capital-Making/dp/052555999X' target='_blank' rel="noreferrer">
                                <img src={power_law} alt="Book 1" className="w-48 h-auto" />
                            </a>
                        </div>
                        <div className="flex-shrink-0 mr-16">
                            <a href='https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033' target='_blank' rel="noreferrer">
                                <img src={metaverse} alt="Book 2" className="w-48 h-auto" />
                            </a>
                        </div>
                        <div className="flex-shrink-0 mr-16">
                            <a href='https://www.amazon.com/One-Up-Creativity-Competition-Business/dp/0231197527' target='_blank' rel="noreferrer">
                                <img src={one_up} alt="Book 2" className="w-48 h-auto" />
                            </a>
                        </div>
                        <div className="flex-shrink-0 mr-16">
                            <a href='https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1451648537' target='_blank' rel="noreferrer">
                                <img src={steve_jobs} alt="Book 2" className="w-48 h-auto" />
                            </a>
                        </div>
                    </div>
                    <h2 className="text-lg font-semibold mb-6">Podcasts</h2>
                    <div className="flex overflow-x-auto pb-12 scroll-behavior-smooth">
                        <div className="flex-shrink-0 mr-16">
                            <a href='https://www.acquired.fm/' target='_blank' rel="noreferrer">
                                <img src={acquired} alt="Book 1" className="w-48 h-auto" />
                            </a>
                        </div>
                        <div className="flex-shrink-0 mr-16">
                            <a href='https://www.joincolossus.com/episodes?prod-episode-release-desc%5BrefinementList%5D%5BpodcastName%5D%5B0%5D=Invest%20Like%20the%20Best' target='_blank' rel="noreferrer">
                                <img src={invest} alt="Book 1" className="w-48 h-auto" />
                            </a>
                        </div>
                        <div className="flex-shrink-0 mr-16">
                            <a href='https://linktr.ee/nopriors' target='_blank' rel="noreferrer">
                                <img src={no_priors} alt="Book 1" className="w-48 h-auto" />
                            </a>
                        </div>
                        <div className="flex-shrink-0 mr-16">
                            <a href='https://linktr.ee/bg2pod' target='_blank' rel="noreferrer">
                                <img src={bg2} alt="Book 1" className="w-48 h-auto" />
                            </a>
                        </div>
                        <div className="flex-shrink-0 mr-16">
                            <a href='https://lexfridman.com/podcast' target='_blank' rel="noreferrer">
                                <img src={lex} alt="Book 1" className="w-48 h-auto" />
                            </a>
                        </div>
                        <div className="flex-shrink-0 mr-16">
                            <a href='https://www.allinpodcast.co/' target='_blank' rel="noreferrer">
                                <img src={all_in} alt="Book 1" className="w-48 h-auto" />
                            </a>
                        </div>
                        <div className="flex-shrink-0 mr-16">
                            <a href='https://gamecraftpod.com/' target='_blank' rel="noreferrer">
                                <img src={gamecraft} alt="Book 1" className="w-48 h-auto" />
                            </a>
                        </div>
                    </div>
                    <p className="mt-6 mb-4 text-gray-400">
                        and a <i>lot</i> of lectures, research paper, etc.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Recommendations;
