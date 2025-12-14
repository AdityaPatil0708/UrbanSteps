import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    
    const handleContinue = (e) => {
        e.preventDefault();
        if (email.trim()) {
            navigate("/signup", { state: { email } });
        } else {
            alert("Please enter your email address");
        }
    };
    
    return (
        <div className="mt-10 sm:mt-30 flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <h1 className="text-2xl sm:text-5xl font-bold text-gray-950">US.</h1>
                <form onSubmit={handleContinue}>
                    <p className="mt-5 text-lg sm:text-xl">Enter your email to join us or <br />sign in</p>
                    <input 
                        type="email" 
                        placeholder="Email*" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-6 sm:mt-8 p-3 rounded-lg border border-gray-400 w-full text-sm outline-none" 
                    />    
                    
                    <p className="text-xs sm:text-sm mt-6 sm:mt-8">By continuing, you agree to our <a href="#" className="underline underline-offset-2">Terms and Conditions</a> and <a href="#" className="underline underline-offset-2">Privacy Policy</a></p>
                    <div className="">
                        <button 
                            type="submit"
                            className="mt-10 sm:mt-8 p-3 text-s rounded-full text-white bg-gray-950 w-24 sm:w-25 hover:bg-gray-500 hover:cursor-pointer">
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}