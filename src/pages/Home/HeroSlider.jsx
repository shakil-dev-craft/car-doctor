import { Link } from 'react-router-dom';

// slick connect
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroSlider.css';

// slide img
import img1 from '../../assets/images/banner/1.jpg';
import img2 from '../../assets/images/banner/2.jpg';
import img3 from '../../assets/images/banner/3.jpg';
import img4 from '../../assets/images/banner/4.jpg';
import img5 from '../../assets/images/banner/5.jpg';
import img6 from '../../assets/images/banner/6.jpg';

const HeroSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      slidesToScroll: 1,
    };

    return (
        <Slider className='my-10' {...settings}>
            <div className='relative rounded-lg overflow-hidden'>
                <img className='rounded-lg max-h-[600px] w-full object-fill object-top' src={img1} alt="" />
                <div className='rounded-lg pb-5 sm:pb-16 md:pb-20 xl:pb-0 px-5 md:px-14 lg:px-16 xl:px-24 flex flex-col justify-end xl:justify-center text-white bg-gradient-to-r from-[#151515] to-transparent absolute top-0 left-0 w-full h-full'>
                  <div className=' rounded-lg space-y-3 md:space-y-4 lg:space-y-6 xl:space-y-7 w-full sm:w-[58%] md:w-[60%] lg:w-[43%] xl:w-[40%]'>
                    <h1 className=' mb-1 sm:mb-0 text-lg sm:text-3xl md:text-5xl lg:text-6xl font-semibold lg:font-bold'>Affordable Price For Car Servicing</h1>
                    <p className=' mb-1 sm:mb-0 text-sm md:text-base lg:text-[17px] font-light'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex gap-4 mt-2 md:mt-0'>
                    <Link to="/">
                      <button className=" text-sm md:text-base font-semibold transition-all bg-[#FF3811] text-white py-2 hover:bg-transparent hover:text-white px-4 md:px-5 lg:px-8 rounded-md border border-[#FF3811] hover:border-white">Discover More</button>
                    </Link>
                    <Link to="/">
                      <button className=" text-sm md:text-base font-semibold transition-all hover:bg-[#FF3811] text-white py-2  hover:text-white px-4 md:px-5 lg:px-8 rounded-md border border-white hover:border-[#FF3811] bg-transparent">Latest Project</button>
                    </Link>
                    </div>
                  </div>
                </div>
            </div>
            <div className='relative rounded-lg overflow-hidden '>
                <img className='rounded-lg max-h-[600px] w-full object-fill object-top ' src={img2} alt="" />
                <div className='rounded-lg pb-5 sm:pb-16 md:pb-20 xl:pb-0 px-5 md:px-14 lg:px-16 xl:px-24 flex flex-col justify-end xl:justify-center text-white bg-gradient-to-r from-[#151515] to-transparent absolute top-0 left-0 w-full h-full '>
                  <div className='  rounded-lg space-y-3 md:space-y-4 lg:space-y-6 xl:space-y-7 w-full sm:w-[58%] md:w-[60%] lg:w-[43%] xl:w-[40%]'>
                    <h1 className=' mb-1 sm:mb-0 text-lg sm:text-3xl md:text-5xl lg:text-6xl font-semibold lg:font-bold'>Affordable Price For Car Servicing</h1>
                    <p className=' mb-1 sm:mb-0 text-sm md:text-base lg:text-[17px] font-light'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex gap-4 mt-2 md:mt-0'>
                    <Link to="/">
                      <button className=" text-sm md:text-base font-semibold transition-all bg-[#FF3811] text-white py-2 hover:bg-transparent hover:text-white px-4 md:px-5 lg:px-8 rounded-md border border-[#FF3811] hover:border-white">Discover More</button>
                    </Link>
                    <Link to="/">
                      <button className=" text-sm md:text-base font-semibold transition-all hover:bg-[#FF3811] text-white py-2  hover:text-white px-4 md:px-5 lg:px-8 rounded-md border border-white hover:border-[#FF3811] bg-transparent">Latest Project</button>
                    </Link>
                    </div>
                  </div>
                </div>
            </div>
            <div className='relative rounded-lg overflow-hidden '>
                <img className='rounded-lg max-h-[600px] w-full object-fill object-top ' src={img3} alt="" />
                <div className='rounded-lg pb-5 sm:pb-16 md:pb-20 xl:pb-0 px-5 md:px-14 lg:px-16 xl:px-24 flex flex-col justify-end xl:justify-center text-white bg-gradient-to-r from-[#151515] to-transparent absolute top-0 left-0 w-full h-full '>
                  <div className=' rounded-lg space-y-3 md:space-y-4 lg:space-y-6 xl:space-y-7 w-full sm:w-[58%] md:w-[60%] lg:w-[43%] xl:w-[40%]'>
                    <h1 className=' mb-1 sm:mb-0 text-lg sm:text-3xl md:text-5xl lg:text-6xl font-semibold lg:font-bold'>Affordable Price For Car Servicing</h1>
                    <p className=' mb-1 sm:mb-0 text-sm md:text-base lg:text-[17px] font-light'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex gap-4 mt-2 md:mt-0'>
                    <Link to="/">
                      <button className=" text-sm md:text-base font-semibold transition-all bg-[#FF3811] text-white py-2 hover:bg-transparent hover:text-white px-4 md:px-5 lg:px-8 rounded-md border border-[#FF3811] hover:border-white">Discover More</button>
                    </Link>
                    <Link to="/">
                      <button className=" text-sm md:text-base font-semibold transition-all hover:bg-[#FF3811] text-white py-2  hover:text-white px-4 md:px-5 lg:px-8 rounded-md border border-white hover:border-[#FF3811] bg-transparent">Latest Project</button>
                    </Link>
                    </div>
                  </div>
                </div>
            </div>
            <div className='relative rounded-lg overflow-hidden '>
                <img className='rounded-lg max-h-[600px] w-full object-fill object-top ' src={img4} alt="" />
                <div className='rounded-lg pb-5 sm:pb-16 md:pb-20 xl:pb-0 px-5 md:px-14 lg:px-16 xl:px-24 flex flex-col justify-end xl:justify-center text-white bg-gradient-to-r from-[#151515] to-transparent absolute top-0 left-0 w-full h-full '>
                  <div className=' rounded-lg space-y-3 md:space-y-4 lg:space-y-6 xl:space-y-7 w-full sm:w-[58%] md:w-[60%] lg:w-[43%] xl:w-[40%]'>
                    <h1 className=' mb-1 sm:mb-0 text-lg sm:text-3xl md:text-5xl lg:text-6xl font-semibold lg:font-bold'>Affordable Price For Car Servicing</h1>
                    <p className=' mb-1 sm:mb-0 text-sm md:text-base lg:text-[17px] font-light'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex gap-4 mt-2 md:mt-0'>
                    <Link to="/">
                      <button className=" text-sm md:text-base font-semibold transition-all bg-[#FF3811] text-white py-2 hover:bg-transparent hover:text-white px-4 md:px-5 lg:px-8 rounded-md border border-[#FF3811] hover:border-white">Discover More</button>
                    </Link>
                    <Link to="/">
                      <button className=" text-sm md:text-base font-semibold transition-all hover:bg-[#FF3811] text-white py-2  hover:text-white px-4 md:px-5 lg:px-8 rounded-md border border-white hover:border-[#FF3811] bg-transparent">Latest Project</button>
                    </Link>
                    </div>
                  </div>
                </div>
            </div>
            <div className='relative rounded-lg overflow-hidden '>
                <img className='rounded-lg max-h-[600px] w-full object-fill object-top ' src={img5} alt="" />
                <div className='rounded-lg pb-5 sm:pb-16 md:pb-20 xl:pb-0 px-5 md:px-14 lg:px-16 xl:px-24 flex flex-col justify-end xl:justify-center text-white bg-gradient-to-r from-[#151515] to-transparent absolute top-0 left-0 w-full h-full '>
                  <div className=' rounded-lg space-y-3 md:space-y-4 lg:space-y-6 xl:space-y-7 w-full sm:w-[58%] md:w-[60%] lg:w-[43%] xl:w-[40%]'>
                    <h1 className=' mb-1 sm:mb-0 text-lg sm:text-3xl md:text-5xl lg:text-6xl font-semibold lg:font-bold'>Affordable Price For Car Servicing</h1>
                    <p className=' mb-1 sm:mb-0 text-sm md:text-base lg:text-[17px] font-light'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex gap-4 mt-2 md:mt-0'>
                    <Link to="/">
                      <button className=" text-sm md:text-base font-semibold transition-all bg-[#FF3811] text-white py-2 hover:bg-transparent hover:text-white px-4 md:px-5 lg:px-8 rounded-md border border-[#FF3811] hover:border-white">Discover More</button>
                    </Link>
                    <Link to="/">
                      <button className=" text-sm md:text-base font-semibold transition-all hover:bg-[#FF3811] text-white py-2  hover:text-white px-4 md:px-5 lg:px-8 rounded-md border border-white hover:border-[#FF3811] bg-transparent">Latest Project</button>
                    </Link>
                    </div>
                  </div>
                </div>
            </div>
            <div className='relative rounded-lg overflow-hidden '>
                <img className='rounded-lg max-h-[600px] w-full object-fill object-top ' src={img6} alt="" />
                <div className='rounded-lg pb-5 sm:pb-16 md:pb-20 xl:pb-0 px-5 md:px-14 lg:px-16 xl:px-24 flex flex-col justify-end xl:justify-center text-white bg-gradient-to-r from-[#151515] to-transparent absolute top-0 left-0 w-full h-full '>
                  <div className=' rounded-lg space-y-3 md:space-y-4 lg:space-y-6 xl:space-y-7 w-full sm:w-[58%] md:w-[60%] lg:w-[43%] xl:w-[40%]'>
                    <h1 className=' mb-1 sm:mb-0 text-lg sm:text-3xl md:text-5xl lg:text-6xl font-semibold lg:font-bold'>Affordable Price For Car Servicing</h1>
                    <p className=' mb-1 sm:mb-0 text-sm md:text-base lg:text-[17px] font-light'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex gap-4 mt-2 md:mt-0'>
                    <Link to="/">
                      <button className=" text-sm md:text-base font-semibold transition-all bg-[#FF3811] text-white py-2 hover:bg-transparent hover:text-white px-4 md:px-5 lg:px-8 rounded-md border border-[#FF3811] hover:border-white">Discover More</button>
                    </Link>
                    <Link to="/">
                      <button className=" text-sm md:text-base font-semibold transition-all hover:bg-[#FF3811] text-white py-2  hover:text-white px-4 md:px-5 lg:px-8 rounded-md border border-white hover:border-[#FF3811] bg-transparent">Latest Project</button>
                    </Link>
                    </div>
                  </div>
                </div>
            </div>
        </Slider>
    );
}

export default HeroSlider;
