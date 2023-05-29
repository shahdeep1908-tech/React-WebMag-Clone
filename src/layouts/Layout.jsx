import RecentPost from "../components/recentBlogPost/Recentpost";
import MostRead from "../components/MostRead";
import FeaturePost from "../components/FeaturedBlogPost";
import JQuary from "../components/midContentBlogPost/MidContentBlogPost";
import TitlePost from "../components/titleBlogPost/Content";


const Layout = () => {
    return (
        <>
            <TitlePost/>

            <RecentPost/>
            <JQuary/>

            <FeaturePost/>
            <MostRead/>
        </>
    );
};
export default Layout;
