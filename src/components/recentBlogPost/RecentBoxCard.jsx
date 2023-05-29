import img1 from "../../assets/img/post-3.jpg.webp";

const RecentBoxCard = ({
                           tag,
                           badgeBackgroundColor = "bg-orange-500",
                           title,
                           blogImage,
                           date
                       }) => {
    return (
        <div className="flex flex-col gap-5">
            <img src={blogImage} alt="" className="w-full"/>
            <div className="flex gap-5">
                <button className={`${badgeBackgroundColor} text-white px-5`}>{tag}</button>
                <p className="mt-3">{date}</p>
            </div>
            <h3 className="text-1xl font-semibold">{title}</h3>
        </div>
    )
}

export default RecentBoxCard;