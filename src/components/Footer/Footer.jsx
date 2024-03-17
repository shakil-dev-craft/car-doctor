import { Link } from "react-router-dom";
import logo from '../../assets/icons/footer_logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-[#151515]">
            <div className='max-w-7xl mx-auto text-white grid sm:grid-cols-5 gap-5 py-20 px-4 md:px-5 xl:px-0'>
                <div className="sm:col-span-2 space-y-5">
                    <Link to="/">
                        <img className="w-16" src={logo} alt="Logo" />
                    </Link>
                    <p className="text-sm md:text-base md:max-w-[55%] font-light ">Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial.</p>
                    <div className="flex items-center gap-5">
                    <i className=' text-lg hover:text-[#FF3811] hover:transition-all bx bxl-google' ></i>
                    <i className=' text-lg hover:text-[#FF3811] hover:transition-all bx bxl-twitter' ></i>
                    <i className=' text-lg hover:text-[#FF3811] hover:transition-all bx bxl-instagram' ></i>
                    <i className=' text-lg hover:text-[#FF3811] hover:transition-all bx bxl-linkedin' ></i>
                    </div>
                </div>
                <div className=" footer_about_title space-y-6">
                    <h2 className="  custom_style_h2 text-lg font-semibold">About</h2>
                    <div className="footer_about">
                        <Link to="/"><li className=" hover:text-blue-600 transition-all font-light list-none text-sm md:text-base mb-3">Home</li></Link>
                        <Link to="/services"><li className=" hover:text-blue-600 transition-all font-light list-none text-sm md:text-base mb-3">Service</li></Link>
                        <Link to="/contact"><li className=" hover:text-blue-600 transition-all font-light list-none text-sm md:text-base">Contact</li></Link>
                    </div>
                </div>
                <div className=" footer_about_title space-y-6">
                    <h2 className="  custom_style_h2 text-lg font-semibold">Company</h2>
                    <div className="footer_about">
                        <Link to="/"><li className=" hover:text-blue-600 transition-all font-light list-none text-sm md:text-base mb-3">Why Car Doctor</li></Link>
                        <Link to="/about"><li className=" hover:text-blue-600 transition-all font-light list-none text-sm md:text-base mb-3">About</li></Link>
                    </div>
                </div>
                <div className=" footer_about_title space-y-6">
                    <h2 className="  custom_style_h2 text-lg font-semibold">About</h2>
                    <div className="footer_about">
                        <Link to="/"><li className=" hover:text-blue-600 transition-all font-light list-none text-sm md:text-base mb-3">Suport Center</li></Link>
                        <Link to="/"><li className=" hover:text-blue-600 transition-all font-light list-none text-sm md:text-base mb-3">Feedback</li></Link>
                        <Link to="/"><li className=" hover:text-blue-600 transition-all font-light list-none text-sm md:text-base">Accesbility</li></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;