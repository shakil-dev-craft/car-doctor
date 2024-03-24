import AboutUs from "./AboutUs";
import HeroSlider from "./HeroSlider";
import QaSection from "./QaSection";
import Service from "./Service";


const Home = () => {
    return (
        <div>
            <HeroSlider />
            <AboutUs />
            <Service />
            <QaSection />
        </div>
    );
};

export default Home;