import InfoBoxCard from "../components/titleBlogPost/TitleBoxCard";

const NewsPageDetails = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-2 gap-5">
          <InfoBoxCard title="hello world" tag="Testing" />
          <InfoBoxCard title="hello world" tag="Testing" />
        </div>
      </div>
    </section>
  );
};
export default NewsPageDetails;
