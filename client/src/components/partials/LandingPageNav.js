import { Link } from "react-router-dom";

const LandingPageNav = () => {
    return (
        <nav className="landingPageNav">
            <img src={require("../../assets/netflix-symbol.png")} alt='netflix symbol' />
            <Link to='/login' className='loginBtn'>
                Sign In
            </Link>
        </nav>
    );
};

export default LandingPageNav;
