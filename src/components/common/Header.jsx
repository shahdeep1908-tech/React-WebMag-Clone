import {Link, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import SearchBarBoxCard from "../SearchBarBoxCard";
import {useState} from "react";
import SlideBarMenu from "../slideBarMenu/SlideBarMenu";

const Header = () => {
    const [showSearch, setShowSearch] = useState(false)
    const [slideBar, setSlideBar] = useState(false);
    return (
        <>
            <div className="border-b">
                <div className="container mx-auto">
                    <nav className="flex justify-between items-center xl:p-0 p-5 pl-0">
                        <div className="flex items-center pr-6">
                            <img
                                className="object-contain"
                                src="https://preview.colorlib.com/theme/webmag/img/logo.png"
                                alt="WebMag Logo"
                            />
                        </div>
                        <div className="flex w-full justify-between items-center">
                            <div className="flex h-full divide-x border-l border-r hidden xl:flex">
                                <Link to="/" className="p-5">News</Link>
                                <Link to="/" className="p-5">Popular</Link>
                                <Link to="/" className="p-5 border-b-4 border-b-green-500">Web
                                    Design</Link>
                                <Link to="/"
                                      className="p-5 border-b-4 border-b-orange-500">JavaScript</Link>
                                <Link to="/" className="p-5 border-b-4 border-b-blue-500">Css</Link>
                                <Link to="/"
                                      className="p-5 border-b-4 border-b-purple-500">Jquery</Link>
                            </div>
                            {showSearch && (<SearchBarBoxCard/>)}
                        </div>
                        <div className="flex gap-2 md:gap-10">
                            <button onClick={() => {
                                setSlideBar(!slideBar);
                            }}><FontAwesomeIcon icon={faBars}/></button>
                            <button onClick={() => {
                                setShowSearch(!showSearch);
                            }}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                        </div>
                    </nav>
                </div>
            </div>
            {slideBar && (<SlideBarMenu setSlideBar={setSlideBar}/>)}
        </>
    );
};
export default Header;
