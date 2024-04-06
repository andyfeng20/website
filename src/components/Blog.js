import React from 'react';
import blog4 from './imgs/_63946243-f65a-421b-8d30-0d8f65bcf91b.jpeg';
import blog3 from './imgs/1__tu98-IYQzEo_qUYTq7IqA.webp';
import blog2 from './imgs/1_Ozjp3l0bycN7_LjpB7ue_w.webp';

const Blog = () => {
    return (
        <section id="blog" className="text-gray-400 lg:ml-20 lg:pr-40 ml-8 pr-8">
            <div className="container mx-auto lg:px-12 lg:pt-16 lg:pb-16">
                <ol className="group/list">
                    <li id="medium4" class="group relative rounded min-h-4 hover:bg-gray-800 hover:!opacity-100 group-hover/list:opacity-50 text-white hover:text-sky-500">
                        <a href="https://medium.com/@afeng20/theses-questions-and-predictions-d0a39a6cfdec" target="_blank" rel="noreferrer">
                            <div class="p-6 flex">
                                <div class="w-1/4 text-left h-full italic text-gray-400">
                                    <img src={blog4} alt="Blog4" className="w-36 h-auto" />
                                </div>
                                <div class="w-3/4 text-left h-full">
                                    <h3 class="font-semibold">Theses, Questions, and Predictions 🔗</h3>
                                    <h4 class="pt-1 font-medium text-gray-400">04/06/2024</h4>
                                    <p class="pt-2 text-gray-400">Summarizing my thoughts from the last post.</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li id="medium3" class="group relative rounded min-h-4 hover:bg-gray-800 hover:!opacity-100 group-hover/list:opacity-50 text-white hover:text-sky-500">
                        <a href="https://medium.com/@afeng20/artificial-intelligence-a-business-perspective-dfd0ecc763dc" target="_blank" rel="noreferrer">
                            <div class="p-6 flex">
                                <div class="w-1/4 text-left h-full italic text-gray-400">
                                    <img src={blog3} alt="Blog3" className="w-36 h-auto" />
                                </div>
                                <div class="w-3/4 text-left h-full">
                                    <h3 class="font-semibold">Artificial Intelligence: A Business Perspective 🔗</h3>
                                    <h4 class="pt-1 font-medium text-gray-400">04/05/2024</h4>
                                    <p class="pt-2 text-gray-400">In this post, I explore the different areas that drive value to AI businesses and how companies of 
                                    different sizes can differentiate to drive success in the long term.</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li id="medium2" class="group relative rounded min-h-4 hover:bg-gray-800 hover:!opacity-100 group-hover/list:opacity-50 text-white hover:text-sky-500">
                        <a href="https://medium.com/@afeng20/an-introduction-to-artificial-intelligence-f413ca9e1645" target="_blank" rel="noreferrer">
                            <div class="p-6 flex">
                                <div class="w-1/4 text-left h-full italic text-gray-400">
                                    <img src={blog2} alt="Blog2" className="w-36 h-auto" />
                                </div>
                                <div class="w-3/4 text-left h-full">
                                    <h3 class="font-semibold">An Introduction to Artificial Intelligence 🔗</h3>
                                    <h4 class="pt-1 font-medium text-gray-400">03/21/2024</h4>
                                    <p class="pt-2 text-gray-400">Demystifying common buzzwords</p>
                                </div>
                            </div>
                        </a>
                    </li>
                </ol>
                <div class="font-semibold text-white hover:text-sky-500 pt-6 ml-4 text-left">
                <a href="https://medium.com/@afeng20" >View All Blog Posts 🔗</a>
                </div>
            </div>
        </section>
    );
};

export default Blog;