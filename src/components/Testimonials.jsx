import ArrowUpRight from "../assests/ArrowUpRight.svg";
// import { Link } from "react-router-dom";
import avatar from "../assests/avatar.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


// const Testimonial = ({testimony, name, location}) => {
//     <div className="red p-5">
//         <p className="">{testimony}</p>
//         <div className="">
//             {/* <img src="" alt="" /> */}
//             <div className="">
//                 <h2 className="">{name}</h2>
//                 <p className="">{location}</p>
//             </div>
//         </div>
//     </div>
// }

const Testimonials = () => {
    return ( 
        <div className="p-2 m-4 bg-[#FAFAF4] py-10">
            <h3 className="text-[#28743A] text-[.8rem] font-light tracking-widest">CHANGING LIVES</h3>
            <p className="text-[#797979] text-[1.3rem] my-3">Salary for life games are touching lives and changing stories.</p>
            <a href="/" className="text-[#28743A] flex gap-1">View all Testimonials here
                <img src={ArrowUpRight} alt="" />
            </a>

                <Swiper 
                spaceBetween={0}
                onSlideChange={() => console.log('slide change')}
                className="p-1 mt-5 flex gap-3">
                    {/* slide */}
                    <SwiperSlide className="">
                    <div className="p-5 bg-white rounded-lg w-[100%]">
                        <p className="mt-5 text-[#797979]">"Winning salary for life gave me opportunity to get enough money to run my business"</p>
                        <div className="mt-16 flex gap-3">
                            <img src={avatar} className="h-[2.5rem]" alt="" />
                            <div className="text-[#797979]">
                                <h2 className="text-[.8rem]">Funmi Kariola</h2>
                                <p className="text-[.7rem]">Ogun state</p>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    {/* slide */}
                    <SwiperSlide>
                    <div className="p-5 bg-white rounded-lg w-[100%] mr-5">
                        <p className="mt-5 text-[#797979]">"Winning salary for life gave me opportunity to get enough money to run my business"</p>
                        <div className="mt-16 flex gap-3">
                            <img src={avatar} className="h-[2.5rem]" alt="" />
                            <div className="text-[#797979]">
                                <h2 className="text-[.8rem]">Funmi Kariola</h2>
                                <p className="text-[.7rem]">Ogun state</p>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                </Swiper>

        </div>
     );
}
 
export default Testimonials;