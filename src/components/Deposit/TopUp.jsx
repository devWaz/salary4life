import { Link } from "react-router-dom";

const TopUp = () => {
    return ( 
        <div className="p-5 h-screen">
                <h1 className="text-[#28743A] text-[1.5rem] font-medium">Bank Transfer</h1>
                <p className="text-[.8rem]">Send money to the account below</p>

                <form action="" className="flex flex-col gap-5 mt-10">
                    <input type="text" placeholder="Enter the Amount" className="h-[1rem] p-4 w-[100%] rounded border border-slate-300"/>

                    <div>
                        <p className="text-[#797979] text-[.8rem] ">Bank Name</p>
                        <span className="text-[.9rem]">Access Bank</span>
                    </div>
                    <div>
                        <p className="text-[#797979] text-[.8rem] ">Account Number</p>
                        <span className="text-[.9rem]">0765423453</span>
                    </div>
                    <button className="bg-[#BBFF4B] w-[100%] text-[#28743A] p-2 rounded-full mt-10">Top Up Now</button>
                </form>
                <div className="text-center my-4">
                    <Link to="/deposit" className="m-auto text-[#797979] text-[.8rem] mt-5">Try another payment method</Link>
                </div>
        </div>
     );
}
 
export default TopUp;