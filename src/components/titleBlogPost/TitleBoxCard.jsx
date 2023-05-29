import {Link} from "react-router-dom";

const TitleBoxCard = ({
                         tag,
                         badgeBackgroundColor = "bg-orange-500",
                         title,
                         blogImage
                     }) => {
    return (
        <div className="relative">
            <div>
                <img className="w-full" src={blogImage} alt=""/>
            </div>
            <div className="absolute bottom-1 p-3 text-white">
                <div className="flex gap-5 ">
                    <Link to="/" className={`${badgeBackgroundColor} px-3 py-2`}>
                        {tag}
                    </Link>
                    <p className="mt-3">March 27 , 2018</p>
                </div>
                {title && <h3 className="text-xl font-semibold my-3">{title}</h3>}
            </div>
        </div>
    );
};

export default TitleBoxCard;
