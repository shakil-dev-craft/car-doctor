
const CheckOutForm = () => {
    return (
        <div className="mt-24 mb-20 bg-[#F3F3F3] rounded-lg flex justify-center items-center lg:py-14">
            {/* service form */}
            <div className=" bg-transparent sign_up_form card shrink-0 w-full lg:max-w-[90%] bg-base-100 rounded-lg">
                <form className="card-body px-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-3 md:mb-4">
                        <div className="form-control">
                        <input type="text" name='service' placeholder="Service Name" className=" w-full rounded-md outline-none focus:outline-none input font-normal focus:border-transparent" required />
                        </div>

                        <div className="form-control">
                        <input type="text" name='price' placeholder="Service Price" className=" w-full rounded-md outline-none focus:outline-none input font-normal focus:border-transparent" required />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-3 md:mb-4">
                        <div className="form-control">
                        <input type="text" name='text_here' placeholder="Text here" className=" w-full rounded-md input font-normal focus:outline-none focus:border-transparent" required />
                        </div>

                        <div className="form-control"> 
                        <input type="text" name='service_type' placeholder="Service Type" className=" w-full rounded-md input font-normal focus:outline-none focus:border-transparent" required />
                        </div>
                    </div>

                    <div className="form-control mt-6">
                    <button className="btn sign_up_btn rounded-md">Order Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOutForm;