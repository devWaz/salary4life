import menuIcon from "../assests/DotsThreeCircleVertical.svg";
import userIcon from "../assests/UserCircleGear.svg";
import logo from "../assests/whiteLogo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [menuState , setMenuState] = useState(false)
    return (
        <div className="sticky top-0 z-10">
            <div className="flex items-center py-3 px-5 justify-between bg-[#FFFFFF]">
                <div className="flex items-center gap-1" onClick={() => setMenuState(true)}>
                    <p className="text-[#28743A]">Menu</p>
                    <img src={menuIcon} alt="Menu Icon" className="w-5"/>
                </div>
                <Link to="/profile" className="flex items-center gap-1">
                    <p className="text-[#28743A]">My account</p>
                    <img src={userIcon} alt="User Icon" className="w-5"/>
                </Link>
            </div>
            {/* <ul className="absolute z-10 p-5 rounded bg-white text-center flex flex-col gap-5">
                <Link><li className="p-2 px-10">Home</li></Link>
                <Link><li className="p-2 px-10">Deposit</li></Link>
                <Link><li className="p-2 px-10">Gaming History</li></Link>
                <Link><li className="p-2 px-10">View Winning</li></Link>
                <Link><li className="p-2 px-10">Withdrawal</li></Link>
                <Link><li className="p-2 px-10">Settings</li></Link>
            </ul> */}

            <header className="flex p-5 bg-[#28743A] justify-between">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
                <div className="flex gap-2">
                    <Link to="/login" className="text-[#BBFF4B] border-2 border-lemon p-1 rounded-full px-3">Log in</Link>
                    <Link to="/join" className="bg-[#BBFF4B] text-[#28743A] p-1 rounded-full px-3">Join Now</Link>
                </div>
            </header>
        </div>
     );
}
 
export default Navbar;