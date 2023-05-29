const SlideBarMenu = ({setSlideBar}) => {
    return (
        <div className="h-screen top-[70px] p-5 w-[300px] bg-orange-500 right-0 fixed mt-5">
            <div className="text-right text-white text-[30px] font-bold">
                <button onClick={() => {
                    setSlideBar(false);
                }}>X
                </button>
            </div>
            <div>
                <ul>
                    <li>WebMag</li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default SlideBarMenu;