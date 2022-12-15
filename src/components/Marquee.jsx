import Marquee from "react-fast-marquee";

const Marqueee = () => {
    return ( 
        <Marquee style={{backgroundColor: "#38483F" , color: "#FFFFFF" , padding: "1rem" , display: "flex" , gap: "2rem"}} gradient={false}>
            <span className="mx-2"> Wale from Ikorodu just won NGN 30,000 </span> 
            <span className="mx-2"> Chioma from Abia just won NGN 30,000 </span> 
            <span className="mx-2"> Aminu from Kaduna just won NGN 30,000 </span>
            <span className="mx-2"> Wale from Ikorodu just won NGN 30,000 </span> 
            <span className="mx-2"> Chioma from Abia just won NGN 30,000 </span> 
            <span> Aminu from Kaduna just won NGN 30,000 </span>
        </Marquee>
     );
}
 
export default Marqueee;