import RecentBoxCard from "./RecentBoxCard";

const RecentPost = () => {
    return (
        <div className="container mt-5">
            <div>
                <h1 className="text-3xl font-semibold">
                    Recent Posts
                </h1>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
                <RecentBoxCard
                    title="Pagedraw UI Builder Turns Your Website Design Mockup Into CodeAutomatically"
                    blogImage="https://preview.colorlib.com/theme/webmag/img/post-3.jpg"
                    badgeBackgroundColor="bg-green-500"
                    tag="Web Design"
                    date="March 27 , 2018"/>

                <RecentBoxCard
                    title="Chrome Extension Protects Against JavaScript-Based CPU
                        Side-Channel Attacks"
                    blogImage="https://preview.colorlib.com/theme/webmag/img/post-4.jpg"
                    badgeBackgroundColor="bg-orange-500"
                    tag="JavaScript"
                    date="March 27 , 2018"/>

                <RecentBoxCard
                    title="Ask HN: Does Anybody Still Use JQuery?"
                    blogImage="https://preview.colorlib.com/theme/webmag/img/post-5.jpg"
                    badgeBackgroundColor="bg-purple-500"
                    tag="JQuery"
                    date="March 27 , 2018"/>

            </div>
            <div className="grid lg:grid-cols-3 mt-10 gap-8">
                <RecentBoxCard
                    title="Why Node.js Is The Coolest Kid On The Backend Development Block!"
                    blogImage="https://preview.colorlib.com/theme/webmag/img/post-6.jpg"
                    badgeBackgroundColor="bg-orange-500"
                    tag="JavaScript"
                    date="March 27 , 2018"/>
                <RecentBoxCard
                    title="CSS Float: A Tutorial"
                    blogImage="https://preview.colorlib.com/theme/webmag/img/post-1.jpg"
                    badgeBackgroundColor="bg-blue-500"
                    tag="Css"
                    date="March 27 , 2018"/>
                <RecentBoxCard
                    title="Tell-A-Tool: Guide To Web Design And Development Toolsy"
                    blogImage="https://preview.colorlib.com/theme/webmag/img/post-2.jpg"
                    badgeBackgroundColor="bg-green-500"
                    tag="Web Design"
                    date="March 27 , 2018"/>

            </div>
        </div>
    )
}

export default RecentPost;