
import { Link } from 'react-router-dom';
import formImg from '../../assets/images/login/login.svg';
import './Signup.css';

const Signup = () => {

    return (
        <div className="hero min-h-screen flex justify-center items-center py-10 ">
            <div className="hero-content flex-col sm:flex-row md:gap-14 lg:gap-24 px-0">
                <div className="text-center lg:text-left">
                    <img src={formImg} alt="" />
                </div>
                <div className="sign_up_form card shrink-0 w-full sm:max-w-1/2 md:max-w-sm shadow-xl bg-base-100 py-10 mt-10 sm:mt-0 rounded-lg">
                    <h2 className=' sign_up_style font-semibold text-2xl lg:text-3xl text-center w-[130px] mx-auto'>Sign up</h2>
                    <form className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-black">Name</span>
                        </label>
                        <input type="name" placeholder="Your name" className=" rounded-md outline-none focus:outline-none input font-light input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-black">Email</span>
                        </label>
                        <input type="email" placeholder="Your email" className=" rounded-md outline-none focus:outline-none input font-light input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-black">Password</span>
                        </label>
                        <input type="password" placeholder="Your password" className=" rounded-md outline-none focus:outline-none font-light input input-bordered" required />
                        <label className="">
                            <a href="#" className="text-xs text-black hover:text-[#FF3811] font-semibold">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn sign_up_btn rounded-md">Sign up</button>
                        </div>
                    </form>
                    {/* social login or signup */}
                    <div className='text-center'>
                        <h2 className='text-black font-medium mb-4'>Or Sign up with</h2>
                        <div className='flex justify-center items-center gap-4'>
                            <Link>
                                <i className=' custom_icon_css bg-[#F5F5F8] text-2xl w-10 h-10 flex justify-center items-center rounded-full bx bxl-google'></i>
                            </Link>
                            <Link>
                                <i className=' custom_icon_css bg-[#F5F5F8] text-2xl w-10 h-10 flex justify-center items-center rounded-full bx bxl-github' ></i>
                            </Link>
                        </div>
                        <p className='mt-6 text-black'>Already have an account? <Link><span className='text-[#FF3811] hover:text-blue-600 font-bold'>Sign in</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;