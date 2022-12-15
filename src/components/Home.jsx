import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import FAQs from "./FAQs";
import Testimonials from "./Testimonials";
import Marqueee from "./Marquee";


const Home = () => {
    return ( 
        <div>
            <Navbar/>
            <Marqueee/>
            <HeroSection/>
            <Testimonials/>
            <FAQs/>
            <Footer/>
        </div>
     );
}
 
export default Home;