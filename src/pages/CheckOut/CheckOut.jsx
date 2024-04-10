import MiniBanner from "../../components/MiniBanner/MiniBanner";
import CheckOutForm from "./CheckOutForm";

const CheckOut = () => {
    return (
        <div>
            <MiniBanner title="Check Out" subName="Home/Checkout" />
            <CheckOutForm />
        </div>
    );
};

export default CheckOut;