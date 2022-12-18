const Withdraw = () => {
    return ( 
        <div className="p-5">
            <h1 className="text-[#28743A] text-[1.5rem] font-medium">Withdraw</h1>
            <p className="text-[.8rem]">Making a withdrawal is free and easy. <br/>
            Just enter these details then tap withdraw</p>

            <form className="my-7 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-[#383535] text-[.8rem]">Your Mobile Number</label>
                    <input type="text" className="rounded p-[.5rem] bg-[#EEEEEE] px-2"/>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-[#383535] text-[.8rem]">Amount</label>
                    <input type="text" className="border rounded p-[.5rem] px-2"/>
                    <p className="text-[#929292] text-[.7rem]">Min. ₦1000, Max ₦200,000</p>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-[#383535] text-[.8rem]">Bank Name</label>
                    <select type="text" className="border rounded p-[.5rem] px-2">
                        <option value="">Access Bank</option>
                        <option value="">Aella Money</option>
                        <option value="">Afeco MFB</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-[#383535] text-[.8rem]">Account Number</label>
                    <input type="text" className="border rounded p-[.5rem] px-2"/>
                </div>

                <button className="bg-[#BBFF4B] text-[#28743A] p-2 rounded-full">Withdraw</button>
            </form>

        </div>
     );
}
 
export default Withdraw;