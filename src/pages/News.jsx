import img1 from "../assets/img/post-3.jpg.webp";
import img2 from "../assets/img/post-4.jpg.webp";
import img3 from "../assets/img/post-5.jpg.webp";
import img4 from "../assets/img/post-6.jpg.webp";
import img5 from "../assets/img/post-1.jpg.webp";
import img6 from "../assets/img/post-2.jpg.webp";
const News = ()=>{
    return(
<div className="container mt-20">
    <div className="flex gap-3 mb-3"><p>Home</p>
    <p>/</p>
    <p>javascript</p></div>
<h1 className="text-4xl font-semibold">JavaSCript</h1>
<div className="grid grid-cols-3 gap-5 mt-20" >
    <div className="col-span-2">
        <div className="flex flex-col gap-5">
        <div className="relative">
            
            <img src={img5} alt="" className="w-[750px] "/>
        
          <div className="absolute bottom-3 p-3 text-white">
            <div className="flex gap-5">
              <button className="bg-orange-500 text-white px-5">
                WEb Design
              </button>
              <p className="mt-3">March 27 , 2018</p>
            </div>
            <h3 className="text-2xl font-semibold">
             JavaScript Prototype Vs Class
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-2">
            <div className="flex flex-col gap-5 w-[390px]">
              <img src={img5} alt="" className="w-[360px] h-[216px]" />
              <div className="flex gap-5">
                <button className="bg-blue-500 text-white px-5">Css</button>
                <p className="mt-3">March 27 , 2018</p>
              </div>
              <h3 className="text-1xl font-semibold">CSS Float: A Tutorial</h3>
            </div>
            <div className="flex flex-col gap-5 w-[390px]">
              <img src={img6} alt="" className="w-[360px] h-[216px]" />
              <div className="flex gap-5">
                <button className="bg-green-500 text-white px-5">
                  WEb Design
                </button>
                <p className="mt-3">March 27 , 2018</p>
              </div>
              <h3 className="text-4m font-semibold">
                Tell-A-Tool: Guide To Web Design And Development Toolsy
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-10">
          <div className="flex gap-5">
            <img src={img2} alt="" className="w-[300px]"/>
            <div>
              <div className="flex gap-5">
                <button className="bg-orange-500 text-white px-5">
                  JavaScript
                </button>
                <p className="mt-3">March 27 , 2018</p>
              </div>
              <h3 className="text-4m font-semibold">
                Chrome Extension Protects Against JavaScript-Based CPU
                Side-Channel Attacks
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi omnis rerum ipsum voluptatibus tempore perferendis!
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <img src={img4} alt="" className="w-[300px]" />
            <div>
              {" "}
              <div className="flex gap-5">
                <button className="bg-orange-500 text-white px-5">
                  JavaScript
                </button>
                <p className="mt-3">March 27 , 2018</p>
              </div>
              <h3 className="text-4m font-semibold">
                Why Node.js Is The Coolest Kid On The Backend Development Block!
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi omnis rerum ipsum voluptatibus tempore perferendis!
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <img src={img5} alt="" className="w-[300px]" />
            <div>
              <div className="flex gap-5">
                <button className="bg-blue-500 text-white px-5">Css</button>
                <p className="mt-3">March 27 , 2018</p>
              </div>
              <h3 className="text-4m font-semibold">CSS Float: A Tutorial</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi omnis rerum ipsum voluptatibus tempore perferendis!
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <img src={img6} alt="" className="w-[300px]" />
            <div>
              <div className="flex gap-5">
                <button className="bg-green-500 text-white px-5">
                  WEb Design
                </button>
                <p className="mt-3">March 27 , 2018</p>
              </div>
              <h3 className="text-4m font-semibold">
                Tell-A-Tool: Guide To Web Design And Development Toolsy
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi omnis rerum ipsum voluptatibus tempore perferendis!
              </p>
            </div>
          </div>
        </div>
        <div className="text-center"><button className="bg-black text-white px-3">LOAD MORE</button></div>
        </div>
    </div>
    <div className="mt-10">
    <div> <h1 className="text-2xl font-semibold">More Read</h1>
       <div className=" flex flex-col gap-10 mt-10">
       <div className="flex gap-3 ">
            <img src={img2} alt=""  className="w-[90px] h-[90px]"/>
            <p className="text-4m font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, a.</p>
        </div>
        <div className="flex gap-3 ">
            <img src={img3} alt=""  className="w-[90px] h-[90px]"/>
            <p className="text-4m font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, a.</p>
        </div>
        <div className="flex gap-3 ">
            <img src={img4} alt=""  className="w-[90px] h-[90px]"/>
            <p className="text-4m font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, a.</p>
        </div>
        <div className="flex gap-3 mb-10">
            <img src={img5} alt=""  className="w-[90px] h-[90px]"/>
            <p className="text-4m font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, a.</p>
        </div>
       </div>
       </div>
       <div class="aside-widget flex flex-col gap-5">
            <div class="section-title">
              <h2 className="text-2xl font-semibold">Catagories</h2>
            </div>
            <div class="category-widget">
              <ul className="flex flex-col gap-5">
                <li className="flex justify-between">
                  <p>Web Design</p>
                  <span className="bg-green-500 text-white w-[40px]  text-center p-2">
                    340
                  </span>
                </li>
                <li className="flex justify-between">
                  <p>JavaScript</p>
                  <span className="bg-orange-500 text-white text-center p-2">
                    74
                  </span>
                </li>
                <li className="flex justify-between">
                  <p>JQuery</p>
                  <span className="bg-blue-500 text-white text-center p-2">
                    41
                  </span>
                </li>
                <li className="flex justify-between">
                  <p>CSS</p>
                  <span className="bg-purple-500 text-white text-center p-2">
                    35
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 mt-2">
            <div className="flex gap-2">
                <button className="bg-black text-white p-2">Chrome</button>
                <button className="bg-black text-white p-2">Css</button>
                <button className="bg-black text-white p-2">Tutorial</button>
                <button className="bg-black text-white p-2">Backend</button>
            </div>
            <div className="flex gap-2">
                <button className="bg-black text-white p-2">JQuery</button>
                <button className="bg-black text-white p-2">Design</button>
                <button className="bg-black text-white p-2">Development</button>
                
            </div>
            <div className="flex gap-2">
                <button className="bg-black text-white p-2">JavaScript</button>
                <button className="bg-black text-white p-2">Website</button>
             
                
            </div>
          </div>
          </div>
          <div className="mt-10 flex flex-col gap-10">
            <h1 className="text-3xl font-semibold">Archive</h1>
            <div className="flex flex-col gap-5 ">
                <p>Jan 2018</p>
                <p>Feb 20118</p>
                <p>Mar 2018</p>
            </div>
          </div>
    </div>
</div>
</div>
    )
}
export default News;