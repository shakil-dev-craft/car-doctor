import TitleUtility from "../../utility/TitleUtility";

// service images
import service1 from '../../assets/images/services/1.jpg';
import service2 from '../../assets/images/services/2.jpg';
import service3 from '../../assets/images/services/3.jpg';
import service4 from '../../assets/images/services/4.jpg';
import service5 from '../../assets/images/services/5.jpg';
import service6 from '../../assets/images/services/6.jpg';
import { Link } from "react-router-dom";

const Service = () => {
    return (
        <div className=" my-10 md:my-20 lg:mt-36 lg:mb-20">
            {/* title and subtitle */}
            <div className="text-center">
                <TitleUtility title="Our Service Area" subtitle="Service" description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />
            </div>
            {/* product case */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-5 lg:gap-6 mt-10">
                <div className="border p-5 border-[#E8E8E8] rounded-lg space-y-5">
                    <div>
                        <img className="rounded-lg md:h-[150px] lg:h-[210px] w-full object-fit" src={service1} alt="" />
                    </div>
                    <div className="space-y-3">
                        <h2 className="text-[#444444] text-xl md:text-base lg:text-2xl font-bold">Electrical System</h2>
                        <div className="flex justify-between items-center">
                            <p className=" text-[#FF3811] font-bold text-lg ">Price : $<span>20.00</span></p>
                            <i className=' text-[#FF3811] font-bold text-lg bx bx-right-arrow-alt'></i>
                        </div>
                    </div>
                </div>
                <div className="border p-5 border-[#E8E8E8] rounded-lg space-y-5">
                    <div>
                        <img className="rounded-lg md:h-[150px] lg:h-[210px] w-full object-fit" src={service2} alt="" />
                    </div>
                    <div className="space-y-3">
                        <h2 className="text-[#444444] text-xl md:text-base lg:text-2xl font-bold">Engine Diagnostics</h2>
                        <div className="flex justify-between items-center">
                            <p className=" text-[#FF3811] font-bold text-lg ">Price : $<span>20.00</span></p>
                            <i className=' text-[#FF3811] font-bold text-lg bx bx-right-arrow-alt'></i>
                        </div>
                    </div>
                </div>
                <div className="border p-5 border-[#E8E8E8] rounded-lg space-y-5">
                    <div>
                        <img className="rounded-lg md:h-[150px] lg:h-[210px] w-full object-fit" src={service3} alt="" />
                    </div>
                    <div className="space-y-3">
                        <h2 className="text-[#444444] text-xl md:text-base lg:text-2xl font-bold">Auto Car Repair</h2>
                        <div className="flex justify-between items-center">
                            <p className=" text-[#FF3811] font-bold text-lg ">Price : $<span>20.00</span></p>
                            <i className=' text-[#FF3811] font-bold text-lg bx bx-right-arrow-alt'></i>
                        </div>
                    </div>
                </div>
                <div className="border p-5 border-[#E8E8E8] rounded-lg space-y-5">
                    <div>
                        <img className="rounded-lg md:h-[150px] lg:h-[210px] w-full object-fit" src={service4} alt="" />
                    </div>
                    <div className="space-y-3">
                        <h2 className="text-[#444444] text-xl md:text-base lg:text-2xl font-bold">Electrical System</h2>
                        <div className="flex justify-between items-center">
                            <p className=" text-[#FF3811] font-bold text-lg ">Price : $<span>20.00</span></p>
                            <i className=' text-[#FF3811] font-bold text-lg bx bx-right-arrow-alt'></i>
                        </div>
                    </div>
                </div>
                <div className="border p-5 border-[#E8E8E8] rounded-lg space-y-5">
                    <div>
                        <img className="rounded-lg md:h-[150px] lg:h-[210px] w-full object-fit" src={service5} alt="" />
                    </div>
                    <div className="space-y-3">
                        <h2 className="text-[#444444] text-xl md:text-base lg:text-2xl font-bold">Electrical System</h2>
                        <div className="flex justify-between items-center">
                            <p className=" text-[#FF3811] font-bold text-lg ">Price : $<span>20.00</span></p>
                            <i className=' text-[#FF3811] font-bold text-lg bx bx-right-arrow-alt'></i>
                        </div>
                    </div>
                </div>
                <div className="border p-5 border-[#E8E8E8] rounded-lg space-y-5">
                    <div>
                        <img className="rounded-lg md:h-[150px] lg:h-[210px] w-full object-fit" src={service6} alt="" />
                    </div>
                    <div className="space-y-3">
                        <h2 className="text-[#444444] text-xl md:text-base lg:text-2xl font-bold">Electrical System</h2>
                        <div className="flex justify-between items-center">
                            <p className=" text-[#FF3811] font-bold text-lg ">Price : $<span>20.00</span></p>
                            <i className=' text-[#FF3811] font-bold text-lg bx bx-right-arrow-alt'></i>
                        </div>
                    </div>
                </div>
            </div>
            {/* more btn */}
            <div className="flex justify-center mt-10">
                <Link to="/">
                    <button className="text-sm md:text-base font-semibold transition-all bg-transparent text-[#FF3811] border hover:border-black border-[#FF3811] py-2 lg:py-3 hover:bg-black hover:text-white px-4 md:px-5 lg:px-6 rounded-md">More Services</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;