import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from 'react';
import nikeHero1 from "/images/nikeHero1.png"
import nikeHero2 from "/images/nikeHero2.jpg"
import nikelogo from "/images/nikelogo.png"
import pumalogo from "/images/pumalogo.png"
import adidaslogo from "/images/adidaslogo.jpg"

import nike1 from "/images/nike1.png"
import nike2 from "/images/nike2.png"
import nike3 from "/images/nike3.png"
import nike4 from "/images/nike4.png"
import nike5 from "/images/nike5.png"
import nike6 from "/images/nike6.png"
import nike7 from "/images/nike7.png"

import adidas1 from "/images/adidas1.png";
import adidas2 from "/images/adidas2.png";
import adidas3 from "/images/adidas3.png";
import adidas4 from "/images/adidas4new.png";
import adidas5 from "/images/adidas5.png";
import adidas6 from "/images/adidas6.png";
import adidas7 from "/images/adidas7.png";

import puma1 from "/images/puma1.png"
import puma2 from "/images/puma8.png"
import puma3 from "/images/puma3.png"
import puma4 from "/images/puma4.png"
import puma5 from "/images/puma5.png"
import puma6 from "/images/puma6.png"
import puma7 from "/images/puma7.png"

export default function ShoesMen() {

    const nikeScrollRef = useRef(null);
    const pumaScrollRef = useRef(null);
    const adidasScrollRef = useRef(null);

    const scroll = (ref, direction) => {
        if (ref.current) {
            const scrollAmount = 500; 
            const newPosition = direction === 'left' 
                ? ref.current.scrollLeft - scrollAmount 
                : ref.current.scrollLeft + scrollAmount;
            
            ref.current.scrollTo({
                left: newPosition,
                behavior: 'smooth'
            });
        }
    };

    const brands = [
        {
            name: "Nike",
            logo: nikelogo,
            logoClass: "h-6 w-9 md:h-8 md:w-12",
            scrollRef: nikeScrollRef,
            products: [
                { img: nike1, name: "Kobe Air Force One's", subtitle: "Men's Shoes", price: "14,999" },
                { img: nike2, name: "Nike Air Force 1 '07 LV8", subtitle: "Men's Shoes", price: "14,999" },
                { img: nike3, name: "Nike Air Force 1 '07 LV8", subtitle: "Men's Shoes", price: "13,999" },
                { img: nike4, name: "Dunk Low ", subtitle: "Men's Shoes", price: "11,999" },
                { img: nike5, name: "Nike Field General 'Blue Suede'", subtitle: "Men's Shoes", price: "12,999" },
                { img: nike6, name: "Nike Dunk Low Retro Limited", subtitle: "Men's Shoes", price: "11,999" },
                { img: nike7, name: "Nike P-6000 Suede", subtitle: "Men's Shoes", price: "9,999" }
            ]
        },
        {
            name: "Puma",
            logo: pumalogo,
            logoClass: "h-8 w-8 md:h-10 md:w-10",
            scrollRef: pumaScrollRef,
            products: [
                { img: puma1, name: "Puma Suede Classic", subtitle: "Men's Shoes", price: "6,999" },
                { img: puma2, name: "Puma Palermo", subtitle: "Men's Shoes", price: "5,999" },
                { img: puma3, name: "Puma RS-X", subtitle: "Men's Shoes", price: "8,999" },
                { img: puma4, name: "Puma Palermo", subtitle: "Men's Shoes", price: "10,999" },
                { img: puma5, name: "Puma Palermo", subtitle: "Men's Shoes", price: "7,499" },
                { img: puma6, name: "Puma Mayze", subtitle: "Men's Shoes", price: "8,499" },
                { img: puma7, name: "Puma Palermo", subtitle: "Men's Shoes", price: "9,499" }
            ]
        },
        {
            name: "Adidas",
            logo: adidaslogo,
            logoClass: "h-7 w-9 md:h-9 md:w-11",
            scrollRef: adidasScrollRef,
            products: [
                { img: adidas1, name: "Adidas Sambas", subtitle: "Men's Shoes", price: "10,999" },
                { img: adidas7, name: "Adidas Stan Smith", subtitle: "Men's Shoes", price: "7,999" },
                { img: adidas3, name: "Adidas Sambas", subtitle: "Men's Shoes", price: "9,499" },
                { img: adidas6, name: "Adidas Sambas", subtitle: "Men's Shoes", price: "13,999" },
                { img: adidas4, name: "Adidas Sambas", subtitle: "Men's Shoes", price: "11,499" },
                { img: adidas5, name: "Adidas Superstar", subtitle: "Men's Shoes", price: "8,999" },
                { img: adidas2, name: "Adidas Sambas", subtitle: "Men's Shoes", price: "16,999" },
            ]
        }
    ];

    return (
        <div className="mt-16 md:mt-35 border-b pb-8">

            <div className="md:hidden mb-10">
                <img
                    src={nikeHero1}
                    alt="Nike Hero 1"
                    className="w-full h-70 sm:h-80 object-cover"
                />
            </div>


            <div className="hidden md:flex justify-center mb-30">
                <img
                    src={nikeHero1}
                    alt="Nike Hero 1"
                    className="h-150 object-cover"
                />
                <img
                    src={nikeHero2}
                    alt="Nike Hero 2"
                    className="h-150 object-cover"
                />
            </div>

            {/* Brand Sections */}
            {brands.map((brand, brandIndex) => (
                <div key={brandIndex} className="mb-12 md:mb-15">

                    <div className="px-4 md:px-0 mb-4 md:mb-2">
                        <div className="font-semibold text-xl md:text-2xl tracking-wider md:ml-35 md:mr-35 md:p-2 flex justify-between items-center">
                            <img
                                src={brand.logo}
                                alt={`${brand.name} logo`}
                                className={brand.logoClass}
                            />
                            <div className="flex gap-2">
                                <button 
                                    onClick={() => scroll(brand.scrollRef, 'left')}
                                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-all"
                                    aria-label="Scroll left"
                                >
                                    <ChevronLeft size={20} className="md:w-6 md:h-6" />
                                </button>
                                <button 
                                    onClick={() => scroll(brand.scrollRef, 'right')}
                                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-all"
                                    aria-label="Scroll right"
                                >
                                    <ChevronRight size={20} className="md:w-6 md:h-6" />
                                </button>
                            </div>
                        </div>
                    </div>


                    <div 
                        ref={brand.scrollRef}
                        className="flex gap-3 md:gap-2 overflow-x-auto px-4 md:px-0 md:ml-35 md:mr-35 scrollbar-hide"
                    >
                        {brand.products.map((product, index) => (
                            <div
                                key={index}
                                className="shrink-0 w-44 sm:w-52 md:w-73"
                            >
                                <a
                                    href="#"
                                    className="block hover:opacity-90 transition-opacity"
                                >
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        loading="lazy"
                                        className="w-full h-48 sm:h-60 md:h-80 object-cover mb-2 rounded-lg md:rounded-none"
                                    />
                                    <div className="text-xs sm:text-sm px-1 md:px-2">
                                        <div className="hover:underline hover:underline-offset-3">
                                            <p className="font-medium truncate">{product.name}</p>
                                            <p className="text-gray-600 text-xs">{product.subtitle}</p>
                                            <p className="mt-1">₹{product.price}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}