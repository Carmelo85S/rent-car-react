import HeroHome from "../components/home/HeroHome";
import HowToBook from "../components/home/HowToBook";
import Review from "../components/home/Review";
import Services from "../components/home/Services";

const Home = () => {
    return(
        <div>
            <HeroHome />
            <HowToBook />
            <Review />
            <Services />
        </div>
    )
}

export default Home;