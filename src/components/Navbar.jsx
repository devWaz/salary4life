import menuIcon from "../assests/DotsThreeCircleVertical.svg";
import userIcon from "../assests/UserCircleGear.svg";
import logo from "../assests/whiteLogo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="sticky top-0 z-10">
            <div className="flex items-center py-3 px-5 justify-between bg-[#FFFFFF]">
                <div className="flex items-center gap-1">
                    <p className="text-[#28743A]">Menu</p>
                    <img src={menuIcon} alt="Menu Icon" className="w-5"/>
                </div>
                <div className="flex items-center gap-1">
                    <p className="text-[#28743A]">My account</p>
                    <img src={userIcon} alt="User Icon" className="w-5"/>
                </div>
            </div>

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