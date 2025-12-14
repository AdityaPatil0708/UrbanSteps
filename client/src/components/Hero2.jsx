
import bestselling from "/images/bestselling.png";
import nike1 from "/images/jordan1.webp";
import nike2 from "/images/jordan2.webp";
import adidas1 from "/images/adidas1.webp";
import puma1 from "/images/puma2.webp";

import puma2 from "/images/jordan3.webp";
import nike3 from "/images/jordan4.webp";
import nike4 from "/images/jordan5.webp";
import adidas2 from "/images/jordan6.png";

import puma4 from "/images/yeezy.png";
import nike7 from "/images/adidas4.png";
import nike8 from "/images/adidas3new.png";
import adidas4 from "/images/yeezy2.png";


export default function Hero2() {
    const products = [
        [
            { img: nike1, name: "Air Jordan 1 Retro Low", subtitle: "OG 'Mocha'", price: "14,999" },
            { img: adidas1, name: "Adidas Sambas", subtitle: "OG 'White Black Gum'", price: "10,999" },
            { img: puma1, name: "Puma Palermo Unisex", subtitle: "Sneakers Ivory", price: "6,999" },
            { img: nike2, name: "Jordan 1 Low bred", subtitle: "Toe 2.0", price: "14,999" }
        ],
        [
            { img: puma2, name: "Travis Scott x Jordan 1", subtitle: "'Velvet Brown'", price: "42,999" },
            { img: nike3, name: "Dunk Low Medium", subtitle: "Curry", price: "13,999" },
            { img: nike4, name: "Dunk Low Lottery Pack", subtitle: "Malachite", price: "11,999" },
            { img: adidas2, name: "Dunk Low Union Argon", subtitle: "Passport Pack", price: "27,999" }
        ],
        [
            { img: puma4, name: "Adidas Yeezy 350 V2", subtitle: "Carbon Beluga", price: "16,999" },
            { img: nike7, name: "Adidas Sambas OG", subtitle: "White Green", price: "8,499" },
            { img: adidas4, name: "Adidas Yeezy 350", subtitle: "Natural", price: "17,999" },
            { img: nike8, name: "Adidas Sambas OG", subtitle: "Collegiate Green", price: "14,999" }
        ]
    ];

    return (
        <div id="image_description" className="border-b border-gray-700 mt-10 pb-10 px-4">
            <div className="box-border flex justify-center mb-8">
                <img
                    src={bestselling}
                    alt="Best Selling"
                    className="w-full max-w-2xl h-auto"
                />
            </div>

            {products.map((row, rowIndex) => (
                <div key={rowIndex} className="mt-8 md:pl-45 md:pr-45 ">
                    <ul className="grid grid-cols-2 gap-1 md:grid-cols-4">
                        {row.map((product, index) => (
                            <li key={index} className="">
                                <a href="" className="">
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className="w-full h-50 object-cover -scale-x-100 mb-2" />
                                </a>
                                <a href="#" className="md:ml-2 md:text-xs text-center md:text-left ">
                                    {product.name}<br />
                                    {product.subtitle}<br />
                                    <span className="">From Rs. {product.price}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <br />
            <br />
        </div>
    );
}
