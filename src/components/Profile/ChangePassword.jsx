import Footer from "../Footer";

const ChangePassword = () => {
    return (
        <>
            <div className="p-5">
            <h1 className="text-[#28743A] text-[1.5rem] font-medium">Change Password</h1>
            <p>Fill the form below to reset your password</p>
                <form action="" className="py-7 flex flex-col gap-8 mb-10">
                    <div className='flex flex-col'>
                        <label className="text-[.9rem]">Current Password</label>
                        <input className='rounded-lg mt-2 p-2 border focus:border-green-500 focus:outline-none' type="password"/>
                    </div>
                    <div className='flex flex-col'>
                        <label className="text-[.9rem]">New Password</label>
                        <input className='rounded-lg mt-2 p-2 border focus:border-green-500 focus:outline-none' type="password"/>
                    </div>
                    <div className='flex flex-col'>
                        <label className="text-[.9rem]">Confirm Password</label>
                        <input className='rounded-lg mt-2 p-2 border focus:border-green-500 focus:outline-none' type="password" />
                    </div>
                    
                    <button className="bg-[#BBFF4B] text-[#28743A] p-2 rounded-full">Reset Password</button>
                </form>
            </div>
            
        </> 
     );
}
 
export default ChangePassword;