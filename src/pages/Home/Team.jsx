import TitleUtility from "../../utility/TitleUtility";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// image
import team1 from '../../assets/images/team/1.jpg';
import team2 from '../../assets/images/team/2.jpg';
import team3 from '../../assets/images/team/3.jpg';

const Team = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                autoplay: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                autoplay: true
              }
            }
        ]
    };

    return (
        <div className=" my-10 md:my-20">
            <div className="text-center">
                <TitleUtility title="Meet Our Team" subtitle="Team" description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />
            </div>

            {/* team slide */}
            <div className="slider-container mt-10">
                <Slider {...settings}>
                        <div className=" px-2 lg:px-3">
                            <div className="border p-5 border-[#E8E8E8] rounded-lg space-y-5">
                                <div className="bg-[#F3F3F3] rounded-lg">
                                    <img className="rounded-lg h-full w-full object-cover mx-auto" src={team1} alt="" />
                                </div>
                                <div className="flex flex-col justify-between items-center space-y-1">
                                    <h2 className="text-[#444444] text-xl md:text-base lg:text-2xl font-bold">Car Engine Plug</h2>
                                    <p className=" text-[#737373] text-sm font-bold">Engine Expert</p>
                                </div>
                                <div className="flex items-center justify-center gap-5">
                                    <i className=' text-lg hover:text-[#FF3811] hover:transition-all bx bxl-facebook' ></i>
                                    <i className=' text-lg hover:text-[#FF3811] hover:transition-all bx bxl-twitter' ></i>
                                    <i className=' text-lg hover:text-[#FF3811] hover:transition-all bx bxl-linkedin' ></i>
                                    <i className=' text-lg hover:text-[#FF3811] hover:transition-all bx bxl-instagram' ></i>
                                </div>
                            </div>
                        </div>
                        <div className=" px-2 lg:px-3">
                            <div className="border p-5 border-[#E8E8E8] rounded-lg space-y-5">
                                <div className="bg-[#F3F3F3] rounded-lg">
                                    <img className="rounded-lg h-full w-full object-cover mx-auto" src={team2} alt="" />
                                </div>
                                <div className="flex flex-col justify-between items-center space-y-1">
                                    <h2 className="text-[#444444] text-xl md:text-base lg:text-2xl font-bold">Car Engine Plug</h2>
                                    <p className=" text-[#737373] text-sm font-bold">Engine Expert</p>
                                </div>
                                <div className="flex items-center justify-center gap-5">
                                    <i className=' text-lg hover:text-[#FF3811] hover:transition-all bx bxl-facebook' ></i>
                                    <i className=' text-lg hover:text-[#FF3811] hover:transition-all bx bxl-twitter' ></i>
                                    <i className=' text-lg hover:text-[#FF3811] hover:transition-all bx bxl-linkedin' ></i>
                                    <i className=' text-lg hover:text-[#FF3811] hover:transition-all bx bxl-instagram' ></i>
                                </div>
                            </div>
                        </div>
                        <div className=" px-2 lg:px-3">
                            <div className="border p-5 border-[#E8E8E8] rounded-lg space-y-5">
                                <div className="bg-[#F3F3F3] rounded-lg">
                                    <img className="rounded-lg h-full w-full object-cover mx-auto" src={team3} alt="" />
                                </div>
                                <div className="flex flex-col justify-between items-center space-y-1">
                                    <h2 className="text-[#444444] text-xl md:text-base lg:text-2xl font-bold">Car Engine Plug</h2>
                                    <p className=" text-[#737373] text-sm font-bold">Engine Expert</p>
                                </div>
                                <div className="flex items-center justify-center gap-5">
                                    <i className=' text-lg hover:text-[#FF3811] hover:transition-all bx bxl-facebook' ></i>
                                    <i className=' text-lg hover:text-[#FF3811] hover:transition-all bx bxl-twitter' ></i>
                                    <i className=' text-lg hover:text-[#FF3811] hover:transition-all bx bxl-linkedin' ></i>
                                    <i className=' text-lg hover:text-[#FF3811] hover:transition-all bx bxl-instagram' ></i>
                                </div>
                            </div>
                        </div>
                </Slider>
            </div>
        </div>
    );
};

export default Team;