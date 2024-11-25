import HeroHome from "../components/home/HeroHome";
import HowToBook from "../components/home/HowToBook";
import Review from "../components/home/Review";
import Services from "../components/home/Services";
import Rental from "../components/home/Rental";
import FormMain from "../components/FormMain";

const Home = () => {
    return(
        <div>
            <HeroHome />
            <HowToBook />
            <Review />
            <Services />
            <Rental />
            <FormMain />
        </div>
    )
}

export default Home;