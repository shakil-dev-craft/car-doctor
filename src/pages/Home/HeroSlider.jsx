import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// slide img
import img1 from '../../assets/images/banner/1.jpg';
// import img2 from '../../assets/images/banner/2.jpg';
// import img3 from '../../assets/images/banner/3.jpg';
// import img4 from '../../assets/images/banner/4.jpg';
// import img5 from '../../assets/images/banner/5.jpg';
// import img6 from '../../assets/images/banner/6.jpg';

const HeroSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider className='my-10' {...settings}>
            <div className='relative'>
                <img className='max-h-[600px] w-full object-fill object-top rounded-lg' src={img1} alt="" />
                <div className=' pb-5 md:pb-0 px-5 md:px-14 lg:px-16 xl:px-24 flex flex-col justify-end md:justify-center text-white bg-gradient-to-r from-[#151515] to-transparent absolute top-0 left-0 w-full h-full rounded-lg'>
                  <div className=' space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6 w-full sm:w-3/5 lg:w-2/5'>
                    <h1 className=' text-lg sm:text-3xl md:text-5xl xl:text-6xl font-semibold lg:font-bold'>Affordable Price For Car Servicing</h1>
                    <p className='text-sm'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex gap-4'>
                    <button className=" px-6 text-white hover:bg-transparent hover:border-white bg-[#FF3811] border-[#FF3811] rounded-md btn transition">Discover More</button>
                    <button className=" px-6 text-white hover:bg-[#FF3811] hover:border-[#FF3811] bg-transparent border-white rounded-md btn transition">Discover More</button>
                    </div>
                  </div>
                </div>
            </div>
            <div>
                <h3>Slide 2</h3>
            </div>
            <div>
                <h3>Slide 3</h3>
            </div>
        </Slider>
    );
}

export default HeroSlider;
