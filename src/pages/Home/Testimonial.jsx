import TitleUtility from "../../utility/TitleUtility";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// img
import testimonial1 from '../../assets/images/testimonial/testimonial1.png';
import testimonial2 from '../../assets/images/testimonial/testimonial2.png';

const starStyle = {
    size: 25,
    value: 5,
    edit: false,
    activeColor: "#FF912C",
};

const Testimonial = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: false,
        autoplay: true,
        responsive: [
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
        <div>
            <div className="text-center mb-10">
                <TitleUtility title="What Customer Says" subtitle="Testimonial" description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />
            </div>

            {/* testimonial slide */}
            <div className="slider-container my-10">
                <Slider {...settings}>
                        <div className="sm:p-5">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-5">
                                    <div className="flex items-center">
                                        <img className="w-[60px] h-[60px] rounded-full" src={testimonial1} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-lg md:text-xl lg:text-2xl text-[#444444]">Awlad Hossain</h2>
                                        <p>Businessman</p>
                                    </div>
                                </div>
                                <div>
                                    <i className=' text-5xl text-[#ff391156] bx bxs-quote-right' ></i>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className=" text-sm text-start lg:text-base text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable.</p>
                            </div>
                            <div className="mt-2">
                                <ReactStars {...starStyle} />
                            </div>
                        </div>
                        <div className="sm:p-5">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-5">
                                    <div className="flex items-center">
                                        <img className="w-[60px] h-[60px] rounded-full" src={testimonial2} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-lg md:text-xl lg:text-2xl text-[#444444]">Awlad Hossain</h2>
                                        <p>Businessman</p>
                                    </div>
                                </div>
                                <div>
                                    <i className=' text-5xl text-[#ff391156] bx bxs-quote-right' ></i>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className=" text-sm text-start lg:text-base text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable.</p>
                            </div>
                            <div className="mt-2">
                                <ReactStars {...starStyle} />
                            </div>
                        </div>
                        <div className="sm:p-5">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-5">
                                    <div className="flex items-center">
                                        <img className="w-[60px] h-[60px] rounded-full" src={testimonial1} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-lg md:text-xl lg:text-2xl text-[#444444]">Awlad Hossain</h2>
                                        <p>Businessman</p>
                                    </div>
                                </div>
                                <div>
                                    <i className=' text-5xl text-[#ff391156] bx bxs-quote-right' ></i>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className=" text-sm text-start lg:text-base text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable.</p>
                            </div>
                            <div className="mt-2">
                                <ReactStars {...starStyle} />
                            </div>
                        </div>
                        <div className="sm:p-5">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-5">
                                    <div className="flex items-center">
                                        <img className="w-[60px] h-[60px] rounded-full" src={testimonial2} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-lg md:text-xl lg:text-2xl text-[#444444]">Awlad Hossain</h2>
                                        <p>Businessman</p>
                                    </div>
                                </div>
                                <div>
                                    <i className=' text-5xl text-[#ff391156] bx bxs-quote-right' ></i>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className=" text-sm text-start lg:text-base text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable.</p>
                            </div>
                            <div className="mt-2">
                                <ReactStars {...starStyle} />
                            </div>
                        </div>
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;