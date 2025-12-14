import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {Eye, EyeOff} from "lucide-react";

export default function Signup() {
    const location = useLocation();
    const navigate = useNavigate();
    const email = location.state?.email;
    const [showPassword, setShowPassword] = useState(false);
    
    useEffect(() => {
        if (!email) {
            navigate("/");
        }
    }, [email, navigate]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle account creation logic here
    };
    
    return (
        <div className="flex justify-center mt-10 sm:mt-30 px-4">
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <p className="text-lg sm:text-2xl mt-6 sm:mt-10">Be a part of <strong>UrbanSteps!</strong></p>
                <p className="text-xs sm:text-sm mt-4 sm:mt-5">We've sent you a code to <br /><span className="text-gray-500">{email}</span></p>
                <input type="text" placeholder="Code*" required className="mt-6 sm:mt-8 p-3 sm:p-4 rounded-lg border border-gray-400 w-full text-sm outline-none" />
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <input type="text" placeholder="First Name*" required className="mt-4 sm:mt-5 p-3 sm:p-4 rounded-lg border border-gray-400 w-full sm:w-1/2 text-sm outline-none" />
                    <input type="text" placeholder="Surname*" required className="mt-0 sm:mt-5 p-3 sm:p-4 rounded-lg border border-gray-400 w-full sm:w-1/2 text-sm outline-none" />
                </div>
                <div className="relative mt-4 sm:mt-5">
                    <input 
                        type={showPassword ? "text" : "password"} 
                        placeholder="Password*" 
                        required 
                        className="p-3 sm:p-4 pr-10 rounded-lg border border-gray-400 w-full text-sm outline-none" 
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                        {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                        ) : (
                            <Eye className="w-5 h-5" />
                        )}
                    </button>
                </div>
                <div className="flex items-center gap-3 mt-6 sm:mt-10 text-xs sm:text-sm">
                    <input
                        type="checkbox"
                        className="w-4 h-4 accent-black shrink-0"
                        required
                    />
                    <span>I agree to the <a href="#" className="underline underline-offset-2">Terms and Conditions</a></span>
                </div>
                <div className="text-left">
                    <button
                        onClick={() => navigate("/")}
                        type="submit"
                        className="mt-6 sm:mt-8 p-3 text-xs rounded-full text-white bg-gray-950 w-32 sm:w-30 hover:bg-gray-500 hover:cursor-pointer">
                        Create Account
                    </button>
                </div>
            </form>
        </div>
    )
}