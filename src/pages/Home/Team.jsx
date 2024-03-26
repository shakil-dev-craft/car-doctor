import TitleUtility from "../../utility/TitleUtility";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// image
import team1 from '../../assets/images/team/1.jpg';

const Team = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: false
    };

    return (
        <div className=" my-10 md:mt-20">
            <div className="text-center">
                <TitleUtility title="Meet Our Team" subtitle="Team" description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />
            </div>

            {/* team slide */}
            <div className="slider-container">
                <Slider {...settings}>
                        <div className="px-3">
                            <div className="border p-5 border-[#E8E8E8] rounded-lg space-y-5">
                                <div className="bg-[#F3F3F3] rounded-lg">
                                    <img className="rounded-lg md:h-[200px] lg:h-[210px] w-40 md:w-32 py-10 md:py-5 lg:py-10 mx-auto" src={team1} alt="" />
                                </div>
                                <div className="flex flex-col justify-between items-center space-y-3">
                                    <h2 className="text-[#444444] text-xl md:text-base lg:text-2xl font-bold">Car Engine Plug</h2>
                                    <p className=" text-[#FF3811] font-semibold text-lg ">$<span>20.00</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="px-3">
                            <div className="border p-5 border-[#E8E8E8] rounded-lg space-y-5">
                                <div className="bg-[#F3F3F3] rounded-lg">
                                    <img className="rounded-lg md:h-[200px] lg:h-[210px] w-40 md:w-32 py-10 md:py-5 lg:py-10 mx-auto" src={team1} alt="" />
                                </div>
                                <div className="flex flex-col justify-between items-center space-y-3">
                                    <h2 className="text-[#444444] text-xl md:text-base lg:text-2xl font-bold">Car Engine Plug</h2>
                                    <p className=" text-[#FF3811] font-semibold text-lg ">$<span>20.00</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="px-3">
                            <div className="border p-5 border-[#E8E8E8] rounded-lg space-y-5">
                                <div className="bg-[#F3F3F3] rounded-lg">
                                    <img className="rounded-lg md:h-[200px] lg:h-[210px] w-40 md:w-32 py-10 md:py-5 lg:py-10 mx-auto" src={team1} alt="" />
                                </div>
                                <div className="flex flex-col justify-between items-center space-y-3">
                                    <h2 className="text-[#444444] text-xl md:text-base lg:text-2xl font-bold">Car Engine Plug</h2>
                                    <p className=" text-[#FF3811] font-semibold text-lg ">$<span>20.00</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="px-3">
                            <div className="border p-5 border-[#E8E8E8] rounded-lg space-y-5">
                                <div className="bg-[#F3F3F3] rounded-lg">
                                    <img className="rounded-lg md:h-[200px] lg:h-[210px] w-40 md:w-32 py-10 md:py-5 lg:py-10 mx-auto" src={team1} alt="" />
                                </div>
                                <div className="flex flex-col justify-between items-center space-y-3">
                                    <h2 className="text-[#444444] text-xl md:text-base lg:text-2xl font-bold">Car Engine Plug</h2>
                                    <p className=" text-[#FF3811] font-semibold text-lg ">$<span>20.00</span></p>
                                </div>
                            </div>
                        </div>
                </Slider>
            </div>
        </div>
    );
};

export default Team;