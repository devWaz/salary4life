import { Link } from "react-router-dom";


const BankTransfer = () => {
    return ( 
        <div className="p-5">
                <h1 className="text-[#28743A] text-[1.5rem] font-medium">Bank Transfer</h1>
                <p className="text-[.8rem]">Send money to the account below</p>

                <form action="" className="my-7 flex flex-col">
                    <div className="border p-2 rounded flex px-4 gap-3 items-center">
                        <input type="text" className="w-[80%] border-none p-0" placeholder="Enter the Amount"/>
                        <p className="text-[.6rem] text-[#797979]">min N100</p>
                    </div>

                <Link to="/top_up" className=""><button className="bg-[#BBFF4B] w-[100%] text-[#28743A] p-2 rounded-full mt-10">Top Up Now</button></Link>
                <Link to="/deposit" className="text-center text-[#797979] text-[.8rem] mt-5">Try another payment method</Link>
                </form>

                <div className="my-16 px-5">
                    <h4 className="text-center font-semibold pb-4">Payment Steps</h4>
                    <div className="flex gap-2 text-[#797979] text-[.8rem] pb-5">
                        <p className="w-[65px]">Step 1</p>
                        <p>Enter the amount you want to deposit and click the 'Top Up Now' button</p>
                    </div>
                    <div className="flex gap-2 text-[#797979] text-[.8rem] pb-5">
                        <p className=" w-[65px]">Step 2</p>
                        <p>You wll be give a temporary account (expires after 30 mins)</p>
                    </div>
                    <div className="flex gap-2 text-[#797979] text-[.8rem] pb-5">
                        <p className=" w-[65px]">Step 3</p>
                        <p>Transfer money to the account from your bank or via USSD</p>
                    </div>
                </div>
        </div>
     );
}
 
export default BankTransfer;