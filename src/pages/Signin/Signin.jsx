
import { Link } from 'react-router-dom';
import formImg from '../../assets/images/login/login.svg';
import './Signin.css';

const Signin = () => {

    return (
        <div className="hero min-h-screen flex justify-center items-center py-10 ">
            <div className="hero-content flex flex-col-reverse md:flex-row gap-20 md:gap-14 lg:gap-28 px-0">
                <div className="text-center lg:text-left">
                    <img src={formImg} alt="" />
                </div>
                <div className="sign_up_form card shrink-0 w-full sm:max-w-1/2 md:max-w-sm shadow-xl bg-base-100 py-10 rounded-lg">
                    <h2 className=' sign_up_style font-semibold text-2xl lg:text-3xl text-center w-[130px] mx-auto'>Sign in</h2>
                    <form className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-black">Email</span>
                        </label>
                        <input type="email" placeholder="Your email" className=" rounded-md outline-none focus:outline-none input font-normal input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-black">Password</span>
                        </label>
                        <input type="password" placeholder="Your password" className=" rounded-md outline-none focus:outline-none font-normal input input-bordered" required />
                        <label className="">
                            <a href="#" className="text-xs text-black hover:text-[#FF3811] font-semibold">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn sign_up_btn rounded-md">Sign in</button>
                        </div>
                    </form>
                    {/* social login orin */}
                    <div className='text-center'>
                        <h2 className='text-black font-medium mb-4'>Or Sign in with</h2>
                        <div className='flex justify-center items-center gap-4'>
                            <Link>
                                <i className=' custom_icon_css bg-[#F5F5F8] text-2xl w-10 h-10 flex justify-center items-center rounded-full bx bxl-google'></i>
                            </Link>
                            <Link>
                                <i className=' custom_icon_css bg-[#F5F5F8] text-2xl w-10 h-10 flex justify-center items-center rounded-full bx bxl-github' ></i>
                            </Link>
                        </div>
                        <p className='mt-6 text-black'>Ready to get started? <Link to="/signup"><span className='text-[#FF3811] hover:text-blue-600 font-bold'>Sign up</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;