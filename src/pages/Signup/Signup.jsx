
import { Link } from 'react-router-dom';
import formImg from '../../assets/images/login/login.svg';
import './Signup.css';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Signup = () => {

    const {createUser} = useContext(AuthContext);

    // sign up new user account
    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);

        // sign up
        createUser(email, password)
        .then((currentUser) => {
            console.log(currentUser?.user);
        })
        .catch((error) => {
            console.log(error?.message);
        })
    };

    return (
        <div className="hero min-h-screen flex justify-center items-center py-10 ">
            <div className="hero-content flex flex-col-reverse md:flex-row gap-20 md:gap-14 lg:gap-28 px-0">
                <div className="text-center lg:text-left">
                    <img src={formImg} alt="" />
                </div>
                <div className="sign_up_form card shrink-0 w-full sm:max-w-1/2 md:max-w-sm shadow-xl bg-base-100 py-10 rounded-lg">
                    <h2 className=' sign_up_style font-semibold text-2xl lg:text-3xl text-center w-[130px] mx-auto'>Sign up</h2>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-black">Name</span>
                        </label>
                        <input type="name" name='name' placeholder="Your name" className=" rounded-md outline-none focus:outline-none input font-normal input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-black">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Your email" className=" rounded-md outline-none focus:outline-none input font-normal input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-black">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Your password" className=" rounded-md outline-none focus:outline-none font-normal input input-bordered" required />
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
                        <p className='mt-6 text-black'>Already have an account? <Link to="/signin"><span className='text-[#FF3811] hover:text-blue-600 font-bold'>Sign in</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;