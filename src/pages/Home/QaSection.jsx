
import icon1 from '../../assets/icons/logo1.png';
import icon2 from '../../assets/icons/logo2.png';
import icon3 from '../../assets/icons/logo3.png';

const QaSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-5 bg-[#151515] md:py-20 rounded-lg my-20 px-5 py-10 md:px-0 md:p-0">
            <div className='flex justify-start md:justify-center  items-center gap-5 mb-10 md:mb-0'>
                <div className='flex justify-center items-center'>
                    <img className='w-10 h-10' src={icon1} alt="" />
                </div>
                <div>
                    <span className='text-white text-[13px] lg:text-sm'>We are open monday - friday</span>
                    <p className='text-white text-xl md:text-base lg:text-2xl font-bold'>7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className='flex justify-start md:justify-center  items-center gap-5 mb-10 md:mb-0'>
                <div className='flex justify-center items-center'>
                    <img className='w-10 h-10' src={icon2} alt="" />
                </div>
                <div>
                    <span className='text-white text-[13px] lg:text-sm'>Have a question?</span>
                    <p className='text-white text-xl md:text-base lg:text-2xl font-bold'>+2546 251 2658</p>
                </div>
            </div>
            <div className='flex justify-start md:justify-center  items-center gap-5 mb-10 md:mb-0'>
                <div className='flex justify-center items-center'>
                    <img className='w-10 h-10' src={icon3} alt="" />
                </div>
                <div>
                    <span className='text-white text-[13px] lg:text-sm'>Need a repair? our address</span>
                    <p className='text-white text-xl md:text-base lg:text-2xl font-bold'>Liza Street, New York</p>
                </div>
            </div>
        </div>
    );
};

export default QaSection;