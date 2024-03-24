import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';
import { Link } from 'react-router-dom';


const AboutUs = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row md:flex-none md:gap-12 lg:gap-24 my-24">
            <div className="relative md:w-[45%] lg:w-[50%]">
                <img className=' max-w-[90%] md:max-w-[100%] lg:max-w-[90%] md:min-h-[90%] lg:min-h-[95%] rounded-md object-fill' src={person} alt="" />
                <img className=' absolute md:-right-6 lg:right-0 -bottom-10 md:-bottom-4 lg:-bottom-10 border-8 border-white rounded-md shadow-lg right-0 max-w-[50%]' src={parts} alt="" />
            </div>
            <div className='space-y-5 xl:pr-[200px] md:w-[55%] lg:w-[50%] mb-10 md:mb-0'>
                <p className='text-5 font-bold text-[#FF3811]'>About Us</p>
                <h2 className=' text-3xl md:text-4xl lg:text-[45px] font-bold leading-none'>We are qualified & of experience in this field</h2>
                <div className='space-y-5'>
                    <p className=' text-sm capitalize  text-[#737373]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable.</p>
                    <p className=' text-sm capitalize  text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable.</p>
                </div>
                <div>
                    <Link to="/">
                      <button className=" text-sm md:text-base font-semibold transition-all bg-[#FF3811] text-white py-2 lg:py-3 hover:bg-black hover:text-white px-4 md:px-5 lg:px-6 rounded-md">Get More Info</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;