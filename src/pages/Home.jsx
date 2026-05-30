import Hero from '../components/Hero';
import About from '../components/About';
import Rooms from '../components/Rooms';
// import Experiences from '../components/Experiences';
import MapPage from './Map';
import Gallery from '../components/Gallery';
// import SeasonalHighlight from '../components/SeasonalHighlight';
// import Testimonials from '../components/Testimonials';
import Booking from '../components/Booking';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Rooms />
            {/* <Experiences /> */}
            <MapPage />
            <Gallery />
            {/* <SeasonalHighlight /> */}
            {/* <Testimonials /> */}
            <Booking />
        </>
    );
};

export default Home;
