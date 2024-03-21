
import loader from '../../assets/icons/loader.gif';

const Spinner = () => {

    return (
        <div className="flex justify-center items-center min-h-[calc(90vh-423px)]">
            <img className='fixed' src={loader} alt="loader" />
        </div>
    );
};

export default Spinner;