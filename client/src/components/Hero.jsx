import nike from "/images/image.png";

export default function Hero() {
    return (
        <div className="relative mt-15 md:mt-30 pb-10 md:pb-60 flex justify-center overflow-hidden">
            <div className="flex justify-between w-full">

                <div className="absolute inset-0 text-center z-0 mix-blend-multiply mt-15 md:mt-15">
                    <div className="text-6xl sm:text-7xl md:text-8xl lg:text-[130px] font-bold opacity-70 tracking-wide text-black pb-3">
                        <p>SNEAKERS</p>
                    </div>
                    <br />
                    <div className="text-6xl sm:text-7xl md:text-8xl lg:text-[130px] font-bold opacity-50 tracking-wide text-transparent pb-3"
                        style={{ WebkitTextStroke: '1px black', strokeWidth: '2px' }}>
                        <p>SNEAKERS</p>
                    </div>
                    <br />
                    <div className="text-6xl sm:text-7xl md:text-8xl lg:text-[130px] font-bold opacity-15 tracking-wide text-transparent pb-3"
                        style={{ WebkitTextStroke: '1px black', strokeWidth: '2px' }}>
                        <p>SNEAKERS</p>

                    </div>
                </div>

                <img
                    src={nike}
                    alt="sneaker"
                    className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl scale-85 md:scale-106 mx-auto"
                />

            </div>
        </div>
    );
}