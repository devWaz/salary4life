import facebook from "../assests/facebook.svg"
import instagram from "../assests/instagram.svg"
import twitter from "../assests/twitt.svg"
import logo from "../assests/whiteLogo.svg"

const Footer = () => {
    return ( 
        <footer className="p-5 bg-[#000000] flex flex-col justify-center pb-7">
            <div className="flex mt-5 gap-8 justify-center">
                <a href="">
                    <img src={instagram} alt="" />
                </a>
                <a href="">
                    <img src={twitter} alt="" />
                </a>
                <a href="">
                    <img src={facebook} alt="" />
                </a>
            </div>

            <ul className="text-white my-10 px-7 flex flex-wrap gap-5 text-[.9rem] justify-center">
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About Us</a>
                </li>
                <li>
                    <a href="">Contact Us</a>
                </li>
                <li>
                    <a href="">Support</a>
                </li>
                <li>
                    <a href="">Rules</a>
                </li>
                <li>
                    <a href="">Privacy Policy</a>
                </li>
            </ul>

            <div className="flex flex-col justify-center text-white gap-5 ">
                <img src={logo} alt="" className="w-[9rem] m-auto"/>
                <p className="text-[.7rem] m-auto">Salary4Life is offering licensed sports betting.</p>
            </div>
        </footer>
     );
}
 
export default Footer;