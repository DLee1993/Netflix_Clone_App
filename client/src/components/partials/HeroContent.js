import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const HeroContent = () => {
    const [registerValue, setRegisterValue] = useState("johnDoe@example.com");

    const registerUser = (e) => {
        console.log("submitted");
    };

    return (
        <section className='hero_content'>
            <h1>Unlimited films, TV programmes and more.</h1>
            <p className='supHeading'>Watch anywhere. Cancel at any time.</p>
            <p className='subHeading'>
                Ready to watch? Enter your email to create or restart your membership.
            </p>
            <section className='membership_fields'>
                <label htmlFor='membership_register' placeholder='email' />
                <input
                    className='register_input'
                    type='email'
                    name='membership_register'
                    autoComplete='email'
                    max-length='50'
                    value={registerValue}
                    readOnly
                    placeholder='Email Address'
                />
                <button onClick={registerUser} className='register_button'>
                    Get Started <IoIosArrowForward />
                </button>
            </section>
            <sub>Please use the provided email address to simulate registering as a user</sub>
        </section>
    );
};

export default HeroContent;
