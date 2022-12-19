import { Link } from "react-router-dom";

const USSDdeposit = () => {
    return ( 
        <div className="p-5">
                <h1 className="text-[#28743A] text-[1.5rem] font-medium">USSD Deposit</h1>
                <p className="text-[.8rem]">Input the amount you want to deposit</p>

                <form action="" className="py-7 flex flex-col gap-8">

                    <div className="flex flex-col gap-2">
                        <input type="text" className="border rounded p-[.5rem] px-2" placeholder="Enter the Amount"/>
                    </div>

                    <button className="bg-[#BBFF4B] text-[#28743A] p-2 rounded-full">Top Up Now</button>
                    <Link to="/deposit" className="text-center text-[#797979] text-[.8rem]">Try another payment method</Link>
                </form>

                <div className="my-10 px-5">
                    <h4 className="text-center font-semibold pb-4">Payment Steps</h4>
                    <div className="flex gap-2 text-[#797979] text-[.8rem] pb-5">
                        <p className="w-[4rem]">Step 1</p>
                        <p>Enter the amount below and click the 'Deposit' button</p>
                    </div>
                    <div className="flex gap-2 text-[#797979] text-[.8rem] pb-5">
                        <p className=" w-[3rem]">Step 2</p>
                        <p>Dial the displayed code on your phone</p>
                    </div>
                    <div className="flex gap-2 text-[#797979] text-[.8rem] pb-5">
                        <p className=" w-[6rem]">Step 3</p>
                        <p>If the transaction is approved by your bank, your account will be credited instantly</p>
                    </div>
                </div>
        </div>
     );
}
 
export default USSDdeposit;