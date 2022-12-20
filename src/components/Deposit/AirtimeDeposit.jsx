import { Link } from "react-router-dom";

const AirtimeDeposit = () => {
    return ( 
        <div className="p-5">
                <h1 className="text-[#28743A] text-[1.5rem] font-medium">Airtime Deposit</h1>
                <p className="text-[.8rem]">Enter the amount you want to deposit</p>

                <form action="" className="py-7 flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-[#383535] text-[.8rem]">Your Mobile Number</label>
                        <input type="text" className="rounded p-[.5rem] bg-[#EEEEEE] px-2 border-none"/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <input type="text" className="border rounded p-[.5rem] px-2" placeholder="Enter the Amount"/>
                    </div>

                    <button className="bg-[#BBFF4B] text-[#28743A] p-2 rounded-full">Top Up Now</button>
                    <Link to="/deposit" className="text-center text-[#797979] text-[.8rem]">Try another payment method</Link>
                </form>
        </div>
     );
}
 
export default AirtimeDeposit;