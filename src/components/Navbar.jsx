import menuIcon from "../assests/DotsThreeCircleVertical.svg";
import userIcon from "../assests/UserCircleGear.svg";
import logo from "../assests/whiteLogo.svg";

const Navbar = () => {
    return ( 
        <>
            <div className="flex items-center py-3 px-5 justify-between">
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
                <img src={logo} alt="" />
                <div className="flex gap-2">
                    <a href="" className="text-[#BBFF4B] border-2 border-lemon p-1 rounded-full px-3">Log in</a>
                    <a href="" className="bg-[#BBFF4B] text-[#28743A] p-1 rounded-full px-3">Join Now</a>
                </div>
            </header>
        </>
     );
}
 
export default Navbar;