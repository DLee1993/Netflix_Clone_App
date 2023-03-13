import LandingPageNav from "./partials/Nav";
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
