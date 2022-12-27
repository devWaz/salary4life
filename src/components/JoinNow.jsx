import Footer from "./Footer";

const Join = () => {
    return (
        <>
            <div className="p-5">
            <h1 className="text-[#28743A] text-[1.5rem] font-medium">Join Now</h1>

                <form action="" className="py-7 flex flex-col gap-8 mb-10">
                    <div className='flex flex-col'>
                        <label className="text-[.9rem]">First Name</label>
                        <input className='rounded-lg mt-2 p-2 border focus:border-green-500 focus:outline-none' type="text" placeholder="Enter your first name"/>
                    </div>
                    <div className='flex flex-col'>
                        <label className="text-[.9rem]">Last Name</label>
                        <input className='rounded-lg mt-2 p-2 border focus:border-green-500 focus:outline-none' type="text" placeholder="Enter your last name"/>
                    </div>
                    <div className='flex flex-col'>
                        <label className="text-[.9rem]">Mobile Number</label>
                        <input className='rounded-lg mt-2 p-2 border focus:border-green-500 focus:outline-none' type="text" placeholder="+234"/>
                    </div>
                    <div className='flex flex-col'>
                        <label className="text-[.9rem]">Email Address</label>
                        <input className='rounded-lg mt-2 p-2 border focus:border-green-500 focus:outline-none' type="email" placeholder="Enter your email address"/>
                    </div>
                    <div className='flex flex-col'>
                        <label className="text-[.9rem]">Password</label>
                        <input className='p-2 rounded-lg border mt-2 focus:border-green-500 focus:outline-none' type="password" placeholder="Kindly enter your password" />
                        <p className="text-[#797979] text-[.7rem] mt-1">*Minimum 4 Characters</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <input type="checkbox" name="" id="" className="p-3 text-[#28743A] focus:border-green-500 focus:outline-none"/>
                        <p className="text-[#797979] text-[.8rem]">By creating an account, you accept the <a href="/" className="text-[#28743A] underline font-medium">Terms and Conditions</a></p>
                    </div>
                    
                    <button className="bg-[#BBFF4B] text-[#28743A] p-2 rounded-full">Join Now</button>
                </form>

            </div>
            <Footer/>
        </> 
     );
}
 
export default Join;