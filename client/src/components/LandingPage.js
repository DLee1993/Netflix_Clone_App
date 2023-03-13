import LandingPageNav from "./partials/Nav";
import HeroContent from "./partials/HeroContent";
import { WatchDevices, WatchEverywhere, Profiles, Download } from "./partials/Cards";

const LandingPage = () => {
    return (
        <main>
            <section className='background-image-container '>
                <section className='landingPageHero'>
                    <LandingPageNav />
                    <HeroContent />
                </section>
            </section>
            <section className='story_card_container'>
                <WatchDevices />
                <WatchEverywhere />
                <Profiles />
                <Download />
            </section>
        </main>
    );
};

export default LandingPage;
