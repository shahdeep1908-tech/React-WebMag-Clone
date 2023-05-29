import img1 from "../assets/img/post-3.jpg.webp"
import img2 from "../assets/img/post-4.jpg.webp"
import img3 from "../assets/img/post-5.jpg.webp"
import RecentBoxCard from "./recentBlogPost/RecentBoxCard";

const FeaturedBlogPost = () => {
    return (
        <div className="bg-[#fbfbfd] mt-10 border-2 border-[#eceef2]">
            <div className="container">
                <div className="grid grid-cols-1 text-center">
                    <h1 className="text-3xl font-semibold text-center my-5">Featured Posts</h1></div>
                <div className="grid lg:grid-cols-3 gap-5 my-5">
                    <RecentBoxCard
                        badgeBackgroundColor="bg-green-500"
                        title="Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically"
                        blogImage="https://preview.colorlib.com/theme/webmag/img/post-4.jpg"
                        date="March 27 , 2018"
                        tag="Web Design"
                    />
                    <RecentBoxCard
                        badgeBackgroundColor="bg-orange-500"
                        title="Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks"
                        blogImage="https://preview.colorlib.com/theme/webmag/img/post-5.jpg"
                        date="March 27 , 2018"
                        tag="JavaScript"
                    />
                    <RecentBoxCard
                        badgeBackgroundColor="bg-purple-500"
                        title="Ask HN: Does Anybody Still Use JQuery?"
                        blogImage="https://preview.colorlib.com/theme/webmag/img/post-3.jpg"
                        date="March 27 , 2018"
                        tag="JQuery"
                    />
                </div>
            </div>
        </div>
    )
}
export default FeaturedBlogPost;