import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Verification } from "../../features/auth/Verification";
import { IoIosArrowForward } from "react-icons/io";
import img from "../../assets/themovieDatabase2.svg";

const HeroContent = () => {
    const [registerUser, setRegisterUser] = useState("");

    const onInputChanged = (e) => setRegisterUser(e.target.value);

    const registerNewUser = (e) => {
        if (registerUser) {
            Verification(registerUser);
            setRegisterUser("");
        } else {
            setRegisterUser("");
        }
    };

    return (
        <section className='hero_content'>
            <h1>Unlimited films, TV programmes and more.</h1>
            <p className='supHeading'>Watch anywhere. Cancel at any time.</p>
            <p className='subHeading'>
                Ready to watch? Enter your email to create or restart your membership.
            </p>
            <section className='membership_fields'>
                <div className='input_container'>
                    <label htmlFor='membership_register' placeholder='email'>
                        Email Address
                    </label>
                    <input
                        className='register_input'
                        type='email'
                        name='membership_register'
                        autoComplete='email'
                        max-length='50'
                        value={registerUser}
                        onChange={onInputChanged}
                        required
                    />
                    <span className='visual_input_label' aria-hidden='true'>
                        Email Address
                    </span>
                </div>
                <button className='register_button' onClick={registerNewUser}>
                    Get Started <IoIosArrowForward />
                </button>
            </section>
            <span className='attribution'>
                powered by
                <img src={img} alt='' />
            </span>
        </section>
    );
};

export default HeroContent;
