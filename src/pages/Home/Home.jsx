import AboutUs from "./AboutUs";
import CoreFeatures from "./CoreFeatures";
import HeroSlider from "./HeroSlider";
import PopularProduct from "./PopularProduct";
import QaSection from "./QaSection";
import Service from "./Service";
import Team from "./Team";


const Home = () => {
    return (
        <div>
            <HeroSlider />
            <AboutUs />
            <Service />
            <QaSection />
            <PopularProduct />
            <Team />
            <CoreFeatures />
        </div>
    );
};

export default Home;