import AboutUs from "./AboutUs";
import CoreFeatures from "./CoreFeatures";
import HeroSlider from "./HeroSlider";
import PopularProduct from "./PopularProduct";
import QaSection from "./QaSection";
import Service from "./Service";
import Team from "./Team";
import Testimonial from "./Testimonial";


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
            <Testimonial />
        </div>
    );
};

export default Home;