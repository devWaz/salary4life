import arrowTo from "../../assests/arrowTo.svg";
import { Link } from "react-router-dom";
import Footer from "../Footer";


const Links = ({link , details}) => {
    return(
        <Link to={link} className="flex bg-[#EEEEEE] justify-between p-4 rounded-xl my-4">
            <p className="text-[.8rem] font-semibold">{details}</p>
            <img src={arrowTo} alt="" />
        </Link>
    )
}

const Deposit = () => {
    return ( 
        <>
            <div className="p-5">
                <h1 className="text-[#28743A] text-[1.5rem] font-medium">Deposit</h1>
                <p className="text-[.8rem]">Please select a payment method</p>

                <div className="my-7">
                <Links link="/airtime_deposit" details="Airtime Deposit"/>
                <Links link="/card_deposit" details="Card"/>
                <Links link="/" details="Bank Transfer"/>
                <Links link="/" details="USSD Payment"/>
                </div>

                <div className="pb-10">
                    <h5>Note</h5>
                    <div className="text-[#797979] flex flex-col gap-2 mt-3 text-[.8rem]">
                        <p>
                        1. Minimum deposit amount is NGN 100.00 - you can deposit at least NGN 100.00 in one transaction.
                        </p>
                        <p>
                        2. We do not share your payment information. It is used for transaction verification only.
                        </p>
                        <p>
                        3.  If you have any issues, please contact customer service. Using too many cards or bank accounts for deposits may cause the deposit to be blocked and your account restricted.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
     );
}
 
export default Deposit;