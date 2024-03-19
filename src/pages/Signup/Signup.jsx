
import formImg from '../../assets/images/login/login.svg';
import './Signup.css';

const Signup = () => {

    return (
        <div className="hero min-h-screen flex justify-center items-center py-10 md:py-0">
            <div className="hero-content flex-col sm:flex-row md:gap-14 lg:gap-24 px-0">
                <div className="text-center lg:text-left">
                    <img src={formImg} alt="" />
                </div>
                <div className=" sign_up_form card shrink-0 w-full sm:max-w-1/2 md:max-w-sm shadow-xl bg-base-100 py-10">
                    <h2 className=' sign_up_style font-semibold text-2xl lg:text-3xl text-center w-[130px] mx-auto'>Sign up</h2>
                    <form className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-black">Name</span>
                        </label>
                        <input type="name" placeholder="Your name" className=" outline-none focus:outline-none input font-light input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-black">Email</span>
                        </label>
                        <input type="email" placeholder="Your email" className=" outline-none focus:outline-none input font-light input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-black">Password</span>
                        </label>
                        <input type="password" placeholder="Your password" className=" outline-none focus:outline-none font-light input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn sign_up_btn">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;