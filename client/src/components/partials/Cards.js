import home from "../../assets/home.jpg";
import mobile from "../../assets/mobile.jpg";
import multiDevice from "../../assets/multiDevice.jpg";
import profiles from "../../assets/profiles.jpg";
import DownloadAnimation from "./DownloadAnimation";

export const WatchDevices = () => {
    return (
        <section className='story_card'>
            <section className='story_card_text'>
                <h1>Enjoy on your TV.</h1>
                <p>
                    Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and
                    more.
                </p>
            </section>
            <section className='story_card_image'>
                <img src={home} alt='netflix on the tv' className='watchAnywhere_img' />
            </section>
        </section>
    );
};

export const WatchEverywhere = () => {
    return (
        <section className='story_card'>
            <section className='story_card_image'>
                <img
                    src={multiDevice}
                    alt='netflix on phone, tablet and desktop'
                    className='streamAnywhere_img'
                />
            </section>
            <section className='story_card_text'>
                <h1>Watch everywhere.</h1>
                <p>
                    Stream unlimited films and TV programmes on your phone, tablet, laptop and TV
                    without paying more.
                </p>
            </section>
        </section>
    );
};

export const Profiles = () => {
    return (
        <section className='story_card'>
            <section className='story_card_text'>
                <h1>Create profiles for children.</h1>
                <p>
                    Send children on adventures with their favourite characters in a space made just
                    for them - free with your membership.
                </p>
            </section>
            <section className='story_card_image'>
                <img src={profiles} alt='profiles for kids' className='profiles_img' />
            </section>
        </section>
    );
};

export const Download = () => {
    return (
        <section className='story_card'>
            <section className='story_card_image download_animation_container'>
                <img src={mobile} alt='netflix on mobile phone' className='download_img' />
                <div className='download_Animation'>
                    <p>
                        Stranger Things
                        <span>Downloading...</span>
                    </p>
                    <DownloadAnimation />
                </div>
            </section>
            <section className='story_card_text'>
                <h1>Download your programmes to watch offline.</h1>
                <p>Only available on advert-free plans.</p>
            </section>
        </section>
    );
};
