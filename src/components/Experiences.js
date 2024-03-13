import React from 'react';

const Experiences = () => {
    return (
        <section id="experiences" className="text-gray-400 lg:ml-20 lg:pr-40 ml-8 pr-8">
            <div className="container mx-auto lg:px-12 lg:pt-16 lg:pb-16">
                <ol className="group/list">

                    <li id="Shade" class="group relative rounded min-h-4 hover:bg-gray-800 hover:!opacity-100 group-hover/list:opacity-50 text-white hover:text-sky-500">
                        <a href="https://www.shade.inc/" target="_blank" rel="noreferrer">
                            <div class="p-6 flex">
                                <div class="w-1/4 text-left h-full italic text-gray-400">
                                    <p>2023-present</p>
                                </div>
                                <div class="w-3/4 text-left h-full">
                                    <h3 class="font-semibold">Business Strategy Manager - Shade 🔗</h3>
                                    <h4 class="pt-1 font-medium text-gray-400">Machine learning seed startup with $5.8M in funding</h4>
                                    <p class="pt-2 text-gray-400">Sourced and analyzed venture funds for the seed fundraising round and created the pitch deck that 
                                    led to the $4.5M investment at a $18M post-money valuation by General Catalyst, SignalFire, and Bling Capital. Developed the GTM 
                                    strategy by analyzing the sales pipeline and identifying customer pain points; created sales deck.</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li id='ZESF' class="group relative rounded min-h-4 hover:bg-gray-800 hover:!opacity-100 group-hover/list:opacity-50 text-white hover:text-sky-500">
                        <a href="https://zli.umich.edu/zell-early-stage-fund/" target="_blank" rel="noreferrer">
                            <div class="p-6 flex">
                                <div class="w-1/4 text-left h-full italic text-gray-400">
                                    <p>2022-present</p>
                                </div>
                                <div class="w-3/4 text-left h-full">
                                    <h3 class="font-semibold">Investor - Zell Early-Stage Fund 🔗</h3>
                                    <h4 class="pt-1 font-medium text-gray-400">Undergraduate-run VC investment fund investing UM Endowment</h4>
                                    <p class="pt-2 text-gray-400">Sourced over 50% of deals in the past year that made it into the diligence pipeline through cold outreach, partnerships
                                        with VCs, startup events, and personal network, helping to increase overall deals analyzed by 100%.
                                        Established the external division, initiating and managing partnerships with 10+ VCs for co-investment opportunities
                                        Made informed investment decisions by conducting due diligence on potential deals by analyzing the underlying
                                        business model, competitive advantage, core product offering, market size, and industry structure.</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li id='StepStone' class="group relative rounded min-h-4 hover:bg-gray-800 hover:!opacity-100 group-hover/list:opacity-50 text-white hover:text-sky-500">
                        <a href="https://www.stepstonegroup.com/" target="_blank" rel="noreferrer">
                            <div class="p-6 flex">
                                <div class="w-1/4 text-left h-full italic text-gray-400">
                                    <p>Summer 2023</p>
                                </div>
                                <div class="w-3/4 text-left h-full">
                                    <h3 class="font-semibold">Venture Capital Summer Analyst - StepStone Group 🔗</h3>
                                    <h4 class="pt-1 font-medium text-gray-400">Global private markets firm with $138B AUM</h4>
                                    <p class="pt-2 text-gray-400">Created a market map of 20+ gaming firms as potential investment targets; initiated coverage of gaming sector VC firm.
                                        Pitched Roboflow, a low-code computer vision development platform, to partners for its infrastructure business model,
                                        broad integration with existing tools and available datasets, and pre-trained models available for immediate use.
                                        Conducted due diligence on secondaries, direct investments, and funds to make informed investment decisions.</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li id='hedge fund' class="group relative rounded min-h-4 hover:bg-gray-800 hover:!opacity-100 group-hover/list:opacity-50 text-white hover:text-sky-500">
                        <a href="https://www.springs-capital.com/" target="_blank" rel="noreferrer">
                            <div class="p-6 flex">
                                <div class="w-1/4 text-left h-full italic text-gray-400">
                                    <p>Summer 2022</p>
                                </div>
                                <div class="w-3/4 text-left h-full">
                                    <h3 class="font-semibold">TMT Investment Summer Analyst - Springs Capital 🔗</h3>
                                    <h4 class="pt-1 font-medium text-gray-400">Hedge fund with $15B AUM</h4>
                                    <p class="pt-2 text-gray-400">Pitched Palo Alto Networks (PANW) for best-in-class security platform and CrowdStrike (CRWD) for best-of-breed
                                        cloud-native endpoint security, both outperforming S&P 500 by 111.7% and 100.5% over a 20-month period.
                                        Initiated coverage on several technology companies within the enterprise software industry, conducted and participated
                                        in 10+ meetings with industry experts, and presented weekly updates and industry reviews to investment managers.</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li id='OneValley' class="group relative rounded min-h-4 hover:bg-gray-800 hover:!opacity-100 group-hover/list:opacity-50 text-white hover:text-sky-500">
                        <a href="https://www.theonevalley.com/ventures" target="_blank" rel="noreferrer">
                            <div class="p-6 flex">
                                <div class="w-1/4 text-left h-full italic text-gray-400">
                                    <p>Summer 2022</p>
                                </div>
                                <div class="w-3/4 text-left h-full">
                                    <h3 class="font-semibold">Venture & Product Intern - OneValley Ventures 🔗</h3>
                                    <h4 class="pt-1 font-medium text-gray-400">Tech-focused VC firm using a data-driven process, pre-seed to Series A</h4>
                                    <p class="pt-2 text-gray-400">Automated sourcing process by creating a dynamic database that continuously collects information from OneValley
                                        platform, VC connect, pitch night applications, etc., leading to increased efficiency for the ventures team's workflow.
                                        Evaluated and wrote reports on pre-seed/seed companies, focused on market opportunities and competitive landscape.</p>
                                </div>
                            </div>
                        </a>
                    </li>
                </ol>
            </div>
        </section>
    );
};

export default Experiences;
