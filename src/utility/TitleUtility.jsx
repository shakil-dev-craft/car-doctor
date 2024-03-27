import PropTypes from 'prop-types';

const TitleUtility = ({title, subtitle, description}) => {

    // console.log(description);

    return (
        <div className="space-y-5">
            <p className='text-5 font-bold text-[#FF3811]'>{subtitle}</p>
            <h2 className=' text-3xl md:text-4xl lg:text-[45px] font-bold leading-none'>{title}</h2>
            {
                description ? <p className=' md:leading-normal lg:leading-relaxed sm:w-[85%] md:w-[60%] lg:w-[46%] mx-auto text-[13px] sm:text-sm lg:text-sm capitalize  text-[#737373]'>{description}</p> : ''
            }
        </div>
    );
};

TitleUtility.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
};

export default TitleUtility;