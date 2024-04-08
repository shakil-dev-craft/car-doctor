
import MiniBanner from "../../components/MiniBanner/MiniBanner";
import ServiceForm from "./ServiceForm";

const AddService = () => {
    return (
        <div>
            <MiniBanner title="Add New Service" subName="Home/Service" />
            <ServiceForm />
        </div>
    );
};

export default AddService;