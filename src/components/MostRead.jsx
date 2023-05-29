import img2 from "../assets/img/post-4.jpg.webp";

import img4 from "../assets/img/post-6.jpg.webp";
import img5 from "../assets/img/post-1.jpg.webp";
import img6 from "../assets/img/post-2.jpg.webp";
import SideTitleBoxCard from "./sideTitleBlogPost/SideTitleBoxCard";

const MostRead = () => {
    return (
        <div className="container mt-10">
            <div className="grid grid-cols-1">
                <h1 className="text-3xl font-semibold mb-10">Most Read</h1>
            </div>
            <div className="grid lg:grid-cols-3 gap-10">
                <div className="col-span-2">
                    <div className="flex flex-col gap-10 mb-20">
                        <SideTitleBoxCard
                            blogImage="https://preview.colorlib.com/theme/webmag/img/post-4.jpg"
                            tag="JavaScript"
                            badgeBackgroundColor="orange"
                            title="Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks"
                            sub_title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi omnis rerum ipsum voluptatibus tempore perferendis!"
                        />
                        <SideTitleBoxCard
                            blogImage="https://preview.colorlib.com/theme/webmag/img/post-6.jpg"
                            tag="JavaScript"
                            badgeBackgroundColor="orange"
                            title="Why Node.js Is The Coolest Kid On The Backend Development Block!"
                            sub_title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi omnis rerum ipsum voluptatibus tempore perferendis!"
                        />
                        <SideTitleBoxCard
                            blogImage="https://preview.colorlib.com/theme/webmag/img/post-1.jpg"
                            tag="Css"
                            badgeBackgroundColor="blue"
                            title="CSS Float: A Tutorial"
                            sub_title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi omnis rerum ipsum voluptatibus tempore perferendis!"
                        />
                        <SideTitleBoxCard
                            blogImage="https://preview.colorlib.com/theme/webmag/img/post-2.jpg"
                            tag="Web Design"
                            badgeBackgroundColor="purple"
                            title="Tell-A-Tool: Guide To Web Design And Development Toolsy"
                            sub_title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi omnis rerum ipsum voluptatibus tempore perferendis!"
                        />
                        <div className="text-center">
                            <button className="bg-black text-white px-10 py-2">Load More</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col gap-5">
                        <div className="section-title">
                            <h2 className="text-2xl font-semibold">Catagories</h2>
                        </div>
                        <div className="category-widget">
                            <ul className="flex flex-col gap-2">
                                <li className="flex justify-between border-b-2 py-2">
                                    <p>Web Design</p>
                                    <span className="bg-green-500 text-white text-center p-1"><button>340</button></span>
                                </li>
                                <li className="flex justify-between border-b-2 py-2">
                                    <p>JavaScript</p>
                                    <span className="bg-orange-500 text-white text-center p-1"><button>74</button></span>
                                </li>
                                <li className="flex justify-between border-b-2 py-2">
                                    <p>JQuery</p>
                                    <span className="bg-blue-500 text-white text-center p-1"><button>41</button></span>
                                </li>
                                <li className="flex justify-between border-b-2 py-2">
                                    <p>CSS</p>
                                    <span className="bg-purple-500 text-white text-center p-1"><button>35</button></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-2">
                        <div className="flex gap-2">
                            <button className="bg-black text-white p-2">Chrome</button>
                            <button className="bg-black text-white p-2">Css</button>
                            <button className="bg-black text-white p-2">Tutorial</button>
                            <button className="bg-black text-white p-2">Backend</button>
                        </div>
                        <div className="flex gap-2">
                            <button className="bg-black text-white p-2">JQuery</button>
                            <button className="bg-black text-white p-2">Design</button>
                            <button className="bg-black text-white p-2">Development</button>

                        </div>
                        <div className="flex gap-2">
                            <button className="bg-black text-white p-2">JavaScript</button>
                            <button className="bg-black text-white p-2">Website</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MostRead;
