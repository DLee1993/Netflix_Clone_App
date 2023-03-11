import LandingPageNav from "./partials/LandingPageNav";
import HeroContent from "./partials/HeroContent";
import Promotions from "./partials/Promotions";
import DownloadAnimation from "./partials/DownloadAnimation";

const LandingPage = () => {
    return (
        <main>
            <section className='background-image-container '>
                <Promotions />
                <section className='landingPageHero'>
                    <LandingPageNav />
                    <HeroContent />
                </section>
            </section>
        </main>
    );
};

export default LandingPage;
