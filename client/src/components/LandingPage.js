import LandingPageNav from "./partials/LandingPageNav";
import HeroContent from "./partials/HeroContent";

const LandingPage = () => {
    return (
        <main>
            <section className='background-image-container '>
                <section className='landingPageHero'>
                    <LandingPageNav />
                    <HeroContent />
                </section>
            </section>
        </main>
    );
};

export default LandingPage;
