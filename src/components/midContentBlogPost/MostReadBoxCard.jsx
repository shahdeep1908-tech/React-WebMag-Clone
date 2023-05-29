import img2 from "../../assets/img/post-4.jpg.webp";

const MostReadBoxCard = ({
                             blogImage,
                             title
                         }) => {
    return (
        <div className="flex gap-3 ">
            <img src={blogImage} alt="" className="w-[90px] h-[90px]"/>
            <p className="text-4m font-semibold">{title}</p>
        </div>
    )
}

export default MostReadBoxCard;