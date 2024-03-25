import AboutUs from "./AboutUs";
import HeroSlider from "./HeroSlider";
import PopularProduct from "./PopularProduct";
import QaSection from "./QaSection";
import Service from "./Service";


const Home = () => {
    return (
        <div>
            <HeroSlider />
            <AboutUs />
            <Service />
            <QaSection />
            <PopularProduct />
        </div>
    );
};

export default Home;