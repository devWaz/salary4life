import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import FAQs from "./FAQs";
import Testimonials from "./Testimonials";
import Marqueee from "./Marquee";
import Games from "./Games";


const Home = () => {
    return ( 
        <div>
            {/* <Navbar/> */}
            <Marqueee/>
            <HeroSection/>
            <Games/>
            <Testimonials/>
            <FAQs/>
            <Footer/>
        </div>
     );
}
 
export default Home;