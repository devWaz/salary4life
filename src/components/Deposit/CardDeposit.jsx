import card from "../../assests/card.svg"
import expiry from "../../assests/expiry.svg"
import cvv from "../../assests/cvv.svg"
import more from "../../assests/more.svg"
import { Link } from "react-router-dom"

const CardDeposit = () => {
    return ( 
        <div className="p-5">
            <h1 className="text-[#28743A] text-[1.5rem] font-medium">Card Deposit</h1>
            <p className="text-[.8rem]">Enter your card details</p>

            <form className="flex flex-col">
                <div className="border p-2 rounded flex px-4 my-7 gap-3">
                    <img src={card} alt="" />
                    <input type="text" className="w-[20rem] border-none p-0" placeholder="Card Number"/>
                </div>
                <div className="flex justify-between">
                    <div className="border p-2 rounded flex px-4 gap-3 w-[50%]">
                        <img src={expiry} alt="" />
                        <input type="text" className="w-[100%] " placeholder="Expiry"/>
                    </div> 
                    <div className="border p-2 rounded flex px-4 gap-3 w-[35%]">
                        <img src={cvv} alt="" />
                        <input type="text" className="w-[100%]" placeholder="CVV"/>
                    </div>
                    <img src={more} alt="" />
                </div>

                <div className="my-7">
                    <p className="text-right my-2 text-[#797979] text-[.8rem]">Balance (NGN)<span>0.00</span></p>
                    <div className="border p-2 rounded flex px-4 gap-3 items-center">
                        <input type="text" className="w-[80%] border-none p-0" placeholder="Amount (NGN)"/>
                        <p className="text-[.6rem] text-[#797979]">min N100</p>
                    </div>
                </div>
                
                <button className="bg-[#BBFF4B] text-[#28743A] p-2 rounded-full">Top Up Now</button>
                <Link to="/deposit" className="text-center text-[#797979] text-[.8rem] mt-5">Try another payment method</Link>
            </form>

            <div className="py-16">
                    <h5 className="text-center font-semibold">Note</h5>
                    <div className="text-[#797979] flex flex-col gap-4 mt-4 text-[.8rem]">
                        <p>
                        1. Minimum deposit amount is NGN 100.00 - you can deposit at least NGN 100.00 in one transaction.
                        </p>
                        <p>
                        2. If you have any issues, please contact customer service. Using too many cards or bank accounts for deposits may cause the deposit to be blocked and your account restricted.
                        </p>
                    </div>
                </div>
        </div>
     );
}
 
export default CardDeposit;