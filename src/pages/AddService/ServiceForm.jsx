
const ServiceForm = () => {
    return (
        <div className="mt-20 mb-14 md:bg-[#F3F3F3] rounded-lg flex justify-center items-center py-20">
            {/* service form */}
            <div className="sign_up_form card shrink-0 w-full sm:max-w-1/2 md:max-w-[85%] shadow md:shadow-xl bg-base-100 py-10 rounded-lg">
                <form className="card-body">
                    <div className="form-control">
                    <input type="text" name='service' placeholder="Service Name" className=" w-full rounded-md outline-none focus:outline-none input font-normal input-bordered" required />
                    </div>

                    <div className="form-control">
                    <input type="text" name='price' placeholder="Service Price" className=" w-full rounded-md outline-none focus:outline-none input font-normal input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn sign_up_btn rounded-md">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ServiceForm;