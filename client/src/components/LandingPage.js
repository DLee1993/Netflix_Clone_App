import LandingPageNav from "./partials/LandingPageNav";
import HeroContent from "./partials/HeroContent";
import Promotions from "./partials/Promotions";
import { WatchDevices, StreamDevices, Profiles, Downloads } from "./partials/Cards";

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
            <section className='story-cards membership_benefits'>
                <WatchDevices />
                <StreamDevices />
                <Profiles />
                <Downloads />
            </section>
        </main>
    );
};

export default LandingPage;
