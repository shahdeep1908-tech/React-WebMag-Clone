import img2 from "../../assets/img/post-4.jpg.webp";

const SideTitleBoxCard = ({
                              blogImage,
                              tag,
                              title,
                              sub_title,
                              badgeBackgroundColor
                          }) => {
    return (
        <div className="flex sm:flex-col lg:flex-row gap-10">
            <img src={blogImage} alt="" className="sm:w-full lg:w-[300px]"/>
            <div>
                <div className="flex gap-10">
                    <button className={`bg-${badgeBackgroundColor}-500 text-white px-5`}>
                        {tag}
                    </button>
                    <p className="text-center">March 27 , 2018</p>
                </div>
                <h3 className="text-2xl font-semibold mb-5 mt-3">
                    {title}
                </h3>
                <p>
                    {sub_title}
                </p>
            </div>
        </div>
    )
}

export default SideTitleBoxCard;