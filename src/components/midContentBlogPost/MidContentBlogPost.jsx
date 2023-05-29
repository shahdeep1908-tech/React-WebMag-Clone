import TitleBoxCard from "../titleBlogPost/TitleBoxCard";
import RecentBoxCard from "../recentBlogPost/RecentBoxCard";
import MostReadBoxCard from "./MostReadBoxCard";

const midContentBlogPost = () => {
    return (
        <div className="container mt-10">
            <div className="grid lg:grid-cols-3 gap-10">
                <div className="col-span-2">
                    <div className="flex flex-col gap-5">
                        <TitleBoxCard
                            title="Tell-A-Tool: Guide To Web Design And Development Toolsy"
                            tag="Web Design"
                            badgeBackgroundColor="bg-green-500"
                            blogImage="https://preview.colorlib.com/theme/webmag/img/post-2.jpg"
                        />
                        <div className="grid lg:grid-cols-2 gap-5">
                            <RecentBoxCard
                                title="Pagedraw UI Builder Turns Your Website Design Mockup Into Code."
                                blogImage="https://preview.colorlib.com/theme/webmag/img/post-1.jpg"
                                badgeBackgroundColor="bg-green-500"
                                tag="Web Design"
                                date="March 27 , 2018"/>
                            <RecentBoxCard
                                title="Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks"
                                blogImage="https://preview.colorlib.com/theme/webmag/img/post-2.jpg"
                                badgeBackgroundColor="bg-orange-500"
                                tag="JavaScript"
                                date="March 27 , 2018"/>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-5">
                            <RecentBoxCard
                                title="Ask HN: Does Anybody Still Use JQuery?"
                                blogImage="https://preview.colorlib.com/theme/webmag/img/post-4.jpg"
                                badgeBackgroundColor="bg-purple-500"
                                tag="JQuery"
                                date="March 27 , 2018"
                            />
                            <RecentBoxCard
                                title="Why Node.js Is The Coolest Kid On The Backend Development Block!"
                                blogImage="https://preview.colorlib.com/theme/webmag/img/post-5.jpg"
                                badgeBackgroundColor="bg-orange-500"
                                tag="JavaScript"
                                date="March 27 , 2018"
                            />
                        </div>
                        <div className="grid lg:grid-cols-2 gap-5">
                            <RecentBoxCard
                                title="CSS Float: A Tutorial"
                                blogImage="https://preview.colorlib.com/theme/webmag/img/post-3.jpg"
                                badgeBackgroundColor="bg-blue-500"
                                tag="Css"
                                date="March 27 , 2018"
                            />
                            <RecentBoxCard
                                title="Tell-A-Tool: Guide To Web Design And Development Toolsy"
                                blogImage="https://preview.colorlib.com/theme/webmag/img/post-4.jpg"
                                badgeBackgroundColor="bg-green-500"
                                tag="Web Design"
                                date="March 27 , 2018"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div><h1 className="text-4xl font-semibold">Most Read</h1>
                        <div className=" flex flex-col gap-10 mt-10">
                            <MostReadBoxCard
                                title="Tell-A-Tool: Guide To Web Design And Development Tools"
                                blogImage="https://preview.colorlib.com/theme/webmag/img/widget-1.jpg"
                            />
                            <MostReadBoxCard
                                title="Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically"
                                blogImage="https://preview.colorlib.com/theme/webmag/img/widget-2.jpg"
                            />
                            <MostReadBoxCard
                                title="Why Node.js Is The Coolest Kid On The Backend Development Block!"
                                blogImage="https://preview.colorlib.com/theme/webmag/img/widget-3.jpg"
                            />
                            <MostReadBoxCard
                                title="Tell-A-Tool: Guide To Web Design And Development Tools"
                                blogImage="https://preview.colorlib.com/theme/webmag/img/widget-4.jpg"
                            />
                        </div>
                    </div>
                    <h1 className="text-4xl font-semibold mt-10">Featured Posts</h1>
                    <div className="flex flex-col gap-10 mt-10">
                        <TitleBoxCard
                            title="Tell-A-Tool: Guide To Web Design And Development Toolsy"
                            blogImage="https://preview.colorlib.com/theme/webmag/img/post-2.jpg"
                            tag="Web Design"
                            badgeBackgroundColor="bg-green-500"
                        />
                        <TitleBoxCard
                            title="Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks"
                            blogImage="https://preview.colorlib.com/theme/webmag/img/post-1.jpg"
                            tag="JavaScript"
                            badgeBackgroundColor="bg-orange-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default midContentBlogPost;
