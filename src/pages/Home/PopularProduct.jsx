import TitleUtility from "../../utility/TitleUtility";
import ReactStars from "react-rating-stars-component";

// popular images
import product1 from '../../assets/images/products/1.png';
import product2 from '../../assets/images/products/2.png';
import product3 from '../../assets/images/products/3.png';
import product4 from '../../assets/images/products/4.png';
import product5 from '../../assets/images/products/5.png';
import product6 from '../../assets/images/products/6.png';
import { Link } from "react-router-dom";

const starStyle = {
    size: 25,
    value: 5,
    edit: false,
    activeColor: "#FF912C",
};

const PopularProduct = () => {
    return (
        <div className="my-10">
            <div className="text-center">
                <TitleUtility subtitle="Popular Products" title="Browse Our Products" description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />
            </div>
            {/* popular products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-5 lg:gap-6 mt-10">
                <div className="border p-5 border-[#E8E8E8] rounded-lg space-y-5">
                    <div className="bg-[#F3F3F3] rounded-lg">
                        <img className="rounded-lg md:h-[200px] lg:h-[210px] w-40 md:w-32 py-10 md:py-5 lg:py-10 mx-auto" src={product1} alt="" />
                    </div>
                    <div className="flex flex-col justify-between items-center space-y-3">
                        <ReactStars {...starStyle} />
                        <h2 className="text-[#444444] text-xl md:text-base lg:text-2xl font-bold">Car Engine Plug</h2>
                        <p className=" text-[#FF3811] font-semibold text-lg ">$<span>20.00</span></p>
                    </div>
                </div>
                <div className="border p-5 border-[#E8E8E8] rounded-lg space-y-5">
                    <div className="bg-[#F3F3F3] rounded-lg">
                        <img className="rounded-lg md:h-[200px] lg:h-[210px] w-40 md:w-32 py-10 md:py-5 lg:py-10 mx-auto" src={product2} alt="" />
                    </div>
                    <div className="flex flex-col justify-between items-center space-y-3">
                        <ReactStars {...starStyle} />
                        <h2 className="text-[#444444] text-xl md:text-base lg:text-2xl font-bold">Car Air Filter</h2>
                        <p className=" text-[#FF3811] font-semibold text-lg ">$<span>20.00</span></p>
                    </div>
                </div>
                <div className="border p-5 border-[#E8E8E8] rounded-lg space-y-5">
                    <div className="bg-[#F3F3F3] rounded-lg">
                        <img className="rounded-lg md:h-[200px] lg:h-[210px] w-40 md:w-32 py-10 md:py-5 lg:py-10 mx-auto" src={product3} alt="" />
                    </div>
                    <div className="flex flex-col justify-between items-center space-y-3">
                        <ReactStars {...starStyle} />
                        <h2 className="text-[#444444] text-xl md:text-base lg:text-2xl font-bold">Cools Led Light</h2>
                        <p className=" text-[#FF3811] font-semibold text-lg ">$<span>20.00</span></p>
                    </div>
                </div>
                <div className="border p-5 border-[#E8E8E8] rounded-lg space-y-5">
                    <div className="bg-[#F3F3F3] rounded-lg">
                        <img className="rounded-lg md:h-[200px] lg:h-[210px] w-40 md:w-32 py-10 md:py-5 lg:py-10 mx-auto" src={product4} alt="" />
                    </div>
                    <div className="flex flex-col justify-between items-center space-y-3">
                        <ReactStars {...starStyle} />
                        <h2 className="text-[#444444] text-xl md:text-base lg:text-2xl font-bold">Cools Led Light</h2>
                        <p className=" text-[#FF3811] font-semibold text-lg ">$<span>20.00</span></p>
                    </div>
                </div>
                <div className="border p-5 border-[#E8E8E8] rounded-lg space-y-5">
                    <div className="bg-[#F3F3F3] rounded-lg">
                        <img className="rounded-lg md:h-[200px] lg:h-[210px] w-40 md:w-32 py-10 md:py-5 lg:py-10 mx-auto" src={product5} alt="" />
                    </div>
                    <div className="flex flex-col justify-between items-center space-y-3">
                        <ReactStars {...starStyle} />
                        <h2 className="text-[#444444] text-xl md:text-base lg:text-2xl font-bold">Cools Led Light</h2>
                        <p className=" text-[#FF3811] font-semibold text-lg ">$<span>20.00</span></p>
                    </div>
                </div>
                <div className="border p-5 border-[#E8E8E8] rounded-lg space-y-5">
                    <div className="bg-[#F3F3F3] rounded-lg">
                        <img className="rounded-lg md:h-[200px] lg:h-[210px] w-40 md:w-32 py-10 md:py-5 lg:py-10 mx-auto" src={product6} alt="" />
                    </div>
                    <div className="flex flex-col justify-between items-center space-y-3">
                        <ReactStars {...starStyle} />
                        <h2 className="text-[#444444] text-xl md:text-base lg:text-2xl font-bold">Cools Led Light</h2>
                        <p className=" text-[#FF3811] font-semibold text-lg ">$<span>20.00</span></p>
                    </div>
                </div>
            </div>
            {/* more btn */}
            <div className="flex justify-center mt-10">
                <Link to="/">
                    <button className="text-sm md:text-base font-semibold transition-all bg-transparent text-[#FF3811] border hover:border-black border-[#FF3811] py-2 lg:py-3 hover:bg-black hover:text-white px-4 md:px-5 lg:px-6 rounded-md">More Products</button>
                </Link>
            </div>
        </div>
    );
};

export default PopularProduct;