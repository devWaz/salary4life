import { Link } from "react-router-dom";


const ForgetPasswordForm = () => {
    return ( 
        <div className='flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray- p-6 px-2'>
            <h2 className='text-[#28743A] text-[1.6713rem] my-2 font-medium'>Forgot Password</h2>
            <p className="py-2">Lost your password? <br></br> No worries. Please enter your mobile number. You will receive an OTP to reset your password</p>
            <div className='flex flex-col py-4'>
                <label>Mobile Number</label>
                <input className='rounded-lg mt-2 p-2 border-2 focus:border-green-500 focus:outline-none' type="text" placeholder="+234"/>
            </div>
            <button className='w-full my-5 py-2 bg-[#BBFF4B] shadow-lg shadow-black-500/50 hover:shadow-teal-500/40 text-[#28743A] font-normal rounded-full'><Link to="/OTP">Continue</Link></button>
        </form>
    </div>
     );
};
 
export default ForgetPasswordForm;