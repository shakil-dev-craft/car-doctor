import TitleUtility from "../../utility/TitleUtility";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SingleService from "../../components/SingleService/SingleService";

const Service = () => {

    // use states
    const [service, setService] = useState([]);

    // load data feaching
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setService(data))
    }, []);

    // console.log(service);

    return (
        <div className=" my-10 md:my-20 lg:mt-36 lg:mb-20">
            {/* title and subtitle */}
            <div className="text-center">
                <TitleUtility title="Our Service Area" subtitle="Service" description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />
            </div>
            {/* product case */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6 mt-10">
                {
                    service.map((service, idx) => <SingleService key={idx} service={service} />)
                }
            </div>
            {/* more btn */}
            <div className="flex justify-center mt-10">
                <Link to="/">
                    <button className="text-sm md:text-base font-semibold transition-all bg-transparent text-[#FF3811] border hover:border-black border-[#FF3811] py-2 lg:py-3 hover:bg-black hover:text-white px-4 md:px-5 lg:px-6 rounded-md">More Services</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;