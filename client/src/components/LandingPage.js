import LandingPageNav from "./partials/LandingPageNav";
import HeroContent from "./partials/HeroContent";
import Promotions from "./partials/Promotions";

const LandingPage = () => {
    return (
        <main className='background-image-container '>
            <Promotions />
            <section className='landingPageHero'>
                <LandingPageNav />
                <HeroContent />
            </section>
        </main>
    );
};

export default LandingPage;
