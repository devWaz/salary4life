import ArrowUpRight from "../assests/ArrowUpRight.svg";
import { Link } from "react-router-dom";
import avatar from "../assests/avatar.jpg";
import Carousel from "nuka-carousel"

const Testimonial = ({testimony, name, location}) => {
    <div className="red p-5">
        <p>{testimony}</p>
        <div className="">
            {/* <img src="" alt="" /> */}
            <div className="">
                <h2>{name}</h2>
                <p>{location}</p>
            </div>
        </div>
    </div>
}

const Testimonials = () => {
    return ( 
        <div className="p-2 m-4 bg-[#FAFAF4] py-10">
            <h3 className="text-[#28743A] text-[.8rem] font-light tracking-widest">CHANGING LIVES</h3>
            <p className="text-[#797979] text-[1.3rem] my-3">Salary for life games are touching lives and changing stories.</p>
            <a href="" className="text-[#28743A] flex gap-1">View all Testimonials here
                <img src={ArrowUpRight} alt="" />
            </a>
            <Carousel className=" p-1 mt-5 flex gap-3">
                <div className="p-5 bg-white rounded-lg w-[80vw] mr-5">
                    <p className="mt-5 text-[#797979]">"Winning salary for life gave me opportunity to get enough money to run my business"</p>
                    <div className="mt-16 flex gap-3">
                        <img src={avatar} className="h-[2.5rem]" alt="" />
                        <div className="text-[#797979]">
                            <h2 className="text-[.8rem]">Funmi Kariola</h2>
                            <p className="text-[.7rem]">Ogun state</p>
                        </div>
                    </div>
                </div>
                {/* <div className="p-5 bg-white rounded-lg w-[80vw] mr-5">
                    <p>"Winning salary for life gave me opportunity to get enough money to run my business"</p>
                    <div className="">
                        <img src="" alt="" />
                        <div className="">
                            <h2>Funmi Kariola</h2>
                            <p>Ogun state</p>
                        </div>
                    </div>
                </div>
                <div className="p-5 bg-white rounded-lg w-[80vw]">
                    <p>"Winning salary for life gave me opportunity to get enough money to run my business"</p>
                    <div className="">
                        <img src="" alt="" />
                        <div className="">
                            <h2>Funmi Kariola</h2>
                            <p>Ogun state</p>
                        </div>
                    </div>
                </div> */}
            </Carousel>
        </div>
     );
}
 
export default Testimonials;