import { Link } from "react-router-dom";

const LandingPageNav = () => {
    return (
        <nav className='landingPageNav'>
            <section className='clone_acknowledgement'>
                <img src={require("../../assets/netflix-symbol.png")} alt='netflix symbol' />
                <p>clone</p>
            </section>
            <Link to='/login' className='loginBtn'>
                Sign In
            </Link>
        </nav>
    );
};

export default LandingPageNav;
