
import { Link } from "react-router-dom";
import addServiceImg from "../../assets/images/checkout/checkout.png";
import bgImg from "../../assets/images/error/Vector.png";

const AddService = () => {
    return (
        <div className="relative overflow-hidden h-[200px] md:h-[250px] lg:h-[375px] rounded-lg my-10">
            <img className="w-full object-cover min-h-full rounded-lg" src={addServiceImg} alt="" />
            <div className="flex items-center absolute top-0 bottom-0 w-full bg-gradient-to-r from-[#151515] to-transparent">
                <h1 className="text-white md:text-4xl lg:text-[45px] font-bold md:ml-20 lg:ml-24">Add New Service</h1>
                <div className="absolute bottom-0 left-0 w-full">
                    <div style={{ backgroundImage: `url(${bgImg})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center', }} className="bg-no-repeat mx-auto py-2 lg:py-3 text-white text-center">
                        <li className="list-none font-semibold">
                            <Link to="/">
                                Home/Service
                            </Link>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;