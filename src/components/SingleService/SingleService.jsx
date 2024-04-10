import PropTypes from 'prop-types';

const SingleService = ({service}) => {
    console.log(service);

    return (
        <div>
            <div className=" p-4 border md:p-5 border-[#E8E8E8] rounded-lg space-y-5">
                <div>
                    <img className="rounded-lg md:h-[150px] lg:h-[210px] w-full object-fit" src={service?.img} alt="" />
                </div>
                <div className="space-y-3">
                    <h2 className="text-[#444444] text-xl md:text-base lg:text-2xl font-bold">{service?.title}</h2>
                    <div className="flex justify-between items-center">
                        <p className=" text-[#FF3811] font-bold text-lg ">Price : $<span>{service?.price}</span></p>
                        <i className=' text-[#FF3811] font-bold text-lg bx bx-right-arrow-alt'></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

SingleService.propTypes = {
    service: PropTypes.any,
};

export default SingleService;