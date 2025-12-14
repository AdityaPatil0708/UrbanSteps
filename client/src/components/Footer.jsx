import { Instagram, MessageCircle, Twitter} from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
    const [highlight, setHighlight] = useState(false);

    useEffect(() => {
        const handleHighlight = () => {
            setHighlight(true);
            setTimeout(() => setHighlight(false), 1000);
        };

        window.addEventListener('highlightSupport', handleHighlight);
        return () => window.removeEventListener('highlightSupport', handleHighlight);
    }, []);

    return (
        <footer 
            id="footer" 
            className="flex flex-col md:flex-row justify-around text-black p-6 md:p-8 lg:pl-40 lg:pr-40 gap-8 md:gap-6"
        >
            <div className="text-center md:text-left">
                <p className="mb-2 md:mb-1 font-medium text-base md:text-sm">Useful Links -</p>
                <ul className="text-sm md:text-xs text-gray-400 space-y-1">
                    <li className="hover:text-gray-950 transform duration-500">
                        <a href="#">About</a>
                    </li>
                    <li className="hover:text-gray-950 transform duration-500">
                        <a href="#">Shop</a>
                    </li>
                    <li className="hover:text-gray-950 transform duration-500">
                        <a href="#">Terms and Conditions</a>
                    </li>
                    <li className="hover:text-gray-950 transform duration-500">
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li className="hover:text-gray-950 transform duration-500">
                        <a href="#">Returns and Refunds</a>
                    </li>
                </ul>
            </div>

            <div className="text-center md:text-left">
                <p className="mb-3 md:mb-2 font-medium text-base md:text-sm">Socials</p>
                <div className="flex gap-4 md:gap-3 text-gray-400 justify-center md:justify-start">
                    <a href="#" className="hover:scale-110 transition-transform">
                        <Instagram className="hover:text-gray-950 transform duration-500" size={24}/>
                    </a>
                    <a href="#" className="hover:scale-110 transition-transform">
                        <MessageCircle className="hover:text-gray-950 transform duration-500" size={24}/>
                    </a>
                    <a href="#" className="hover:scale-110 transition-transform">
                        <Twitter className="hover:text-gray-950 transform duration-500" size={24}/>
                    </a>
                </div>
            </div>

            <div 
                id="support-section"
                className={`text-center md:text-left transition-all duration-500 ${
                    highlight ? 'bg-gray-100 p-4 -m-4 rounded-lg' : ''
                }`}
            >
                <p className="mb-2 md:mb-1 font-medium text-base md:text-sm">Contact Us / Support</p>
                <ul className="text-sm md:text-xs text-gray-400 space-y-1">
                    <li className="hover:text-gray-950 transform duration-500">
                        <a href="#" className="break-all">Email: adityapatilap0724@gmail.com</a>
                    </li>
                    <li className="hover:text-gray-950 transform duration-500">
                        <a href="#">Phone: 8698659661</a>
                    </li>
                    <li className="hover:text-gray-950 transform duration-500">
                        <a href="#">Whatsapp: 8698659661</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}