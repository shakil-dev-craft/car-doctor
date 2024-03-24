import PropTypes from 'prop-types';

const TitleUtility = ({title, subtitle}) => {

    console.log(typeof title);

    return (
        <div className="space-y-5">
            <p className='text-5 font-bold text-[#FF3811]'>{subtitle}</p>
            <h2 className=' text-3xl md:text-4xl lg:text-[45px] font-bold leading-none'>{title}</h2>
        </div>
    );
};

TitleUtility.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

export default TitleUtility;