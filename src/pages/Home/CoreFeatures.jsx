import TitleUtility from "../../utility/TitleUtility";
import './CoreFeatures.css';

const CoreFeatures = () => {
    return (
        <div className=" mb-20 mt-20 sm:mt-28">
            <div className="text-center">
                <TitleUtility title="Why Choose Us" subtitle="Core Features" description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />
            </div>

            <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 lg:gap-6 mt-14">
                <div className="box_hover rounded-lg font-semibold border text-center p-4 md:px-5 py-12 md:py-16 lg:py-10">
                    <i className='  text-3xl md:text-4xl lg:text-5xl bx bxs-user-detail'></i>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">Expert Team</p>
                </div>
                <div className="box_hover rounded-lg font-semibold border text-center p-4 md:px-5 py-12 md:py-16 lg:py-10">
                    <i className='  text-3xl md:text-4xl lg:text-5xl bx bx-stopwatch'></i>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">Timely Delivery</p>
                </div>
                <div className="box_hover rounded-lg font-semibold border text-center p-4 md:px-5 py-12 md:py-16 lg:py-10">
                    <i className='  text-3xl md:text-4xl lg:text-5xl bx bx-support'></i>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">24/7 Support</p>
                </div>
                <div className="box_hover rounded-lg font-semibold border text-center p-4 md:px-5 py-12 md:py-16 lg:py-10">
                    <i className='  text-3xl md:text-4xl lg:text-5xl bx bxs-paint'></i>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">Best Equipment</p>
                </div>
                <div className="box_hover rounded-lg font-semibold border text-center p-4 md:px-5 py-12 md:py-16 lg:py-10">
                    <i className='  text-3xl md:text-4xl lg:text-5xl bx bx-shield-plus'></i>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">100% Guranty</p>
                </div>
                <div className="box_hover rounded-lg font-semibold border text-center p-4 md:px-5 py-12 md:py-16 lg:py-10">
                    <i className='  text-3xl md:text-4xl lg:text-5xl bx bx-like'></i>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">Safely Dalivery</p>
                </div>
            </div>
        </div>
    );
};

export default CoreFeatures;