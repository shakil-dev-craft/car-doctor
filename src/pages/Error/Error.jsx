import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavbarSecond/NavbarSecond";

// error img
import errorImg from "../../assets/images/error/error.png";

const Error = () => {
    const location = useLocation();
    console.log(location.pathname);
    const isSignupOrSignin = location?.pathname === 'signup' || location?.pathname === 'signin';
    const isSmallDevice = window.innerWidth <= 768;   

    return (
        <div>
            <Navbar />
            <div className={`overflow-hidden min-h-[calc(100vh-423px)] max-w-7xl mx-auto py-5 ${isSmallDevice && isSignupOrSignin ? 'px-0' : 'px-4 md:px-5 xl:px-0'}`}>
                <div className="flex justify-center items-center mx-auto py-10">
                    <img src={errorImg} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Error;