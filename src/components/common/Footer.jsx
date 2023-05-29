import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <>
            <div className="container">
                <div className="grid grid-cols-12 mt-10 gap-10 mb-20">
                    <div className="flex lg:col-span-5 col-span-12 justify-between">
                        <div className="flex flex-col gap-3">
                            <img src="https://preview.colorlib.com/theme/webmag/img/logo.png" alt="WebMag Logo"
                                 className="w-[100px]"/>
                            <div className="flex gap-5 text-[#a7b3c6] mt-5">
                                <p>Privacy Policy</p>
                                <p>Advertisement</p>

                            </div>
                            <p className="text-[18px] text-ellipsis">&copy; copyright &copy;2023 All rights resorved |
                                This template emade
                                with &hearts; you Colorlib</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 lg:col-span-4 col-span-12">
                        <div className="flex flex-col gap-3 lg:col-span-6 col-span-12">
                            <h3 className="text-xl font-semibold">About Us</h3>
                            <p className="text-[#a7b3c6] mt-5">About Us</p>
                            <p className="text-[#a7b3c6]">Join Us</p>
                            <p className="text-[#a7b3c6]">Contacts</p>
                        </div>
                        <div className="flex flex-col gap-3 lg:col-span-6 lg:mt-0 col-span-12 mt-10">
                            <h3 className="text-xl font-semibold">Categories</h3>
                            <p className="text-[#a7b3c6] mt-5">Web Design</p>
                            <p className="text-[#a7b3c6]">JavaScript</p>
                            <p className="text-[#a7b3c6]">Css</p>
                            <p className="text-[#a7b3c6]">JQuary</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 lg:col-span-3 col-span-12"><h3 className="text-xl font-semibold">Join Our
                        Newsletter</h3>
                        {/*<input type="text" className="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50 mt-5" placeholder="Enter Your Email"/>*/}
                        <form className="flex mt-5 border-2 pr-3">
                            <input
                                className="rounded w-full py-2 px-3 border-0" type="text"
                                placeholder="Enter your email"/>
                            <button><span><FontAwesomeIcon icon={faPaperPlane}/></span></button>
                        </form>
                        <div className="flex gap-5">
                            <span><i className="bi bi-facebook"></i></span>
                            <span><i className="bi bi-twitter"></i></span>
                            <span><i className="bi bi-google"></i></span>
                            <span><i className="bi bi-pinterest"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Footer;
