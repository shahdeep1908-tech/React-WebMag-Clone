import TitleBoxCard from "./TitleBoxCard";
const TitlePost = () => {
  return (
    <div className="container mt-5">
      <div className="grid lg:grid-cols-2 gap-10">
        <TitleBoxCard
          title="Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks"
          tag="JAVASCRIPT"
          badgeBackgroundColor="bg-orange-500"
          blogImage="https://preview.colorlib.com/theme/webmag/img/post-1.jpg"
        />
        <TitleBoxCard
          title="Ask HN: Does Anybody Still Use JQuery?"
          tag="JQUERY"
          badgeBackgroundColor="bg-purple-500"
          blogImage="https://preview.colorlib.com/theme/webmag/img/post-2.jpg"
        />
      </div>
    </div>
  );
};
export default TitlePost;
