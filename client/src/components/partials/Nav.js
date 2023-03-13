import { Link } from "react-router-dom";
import netflixSymbol from "../../assets/netflix-symbol.png";

const LandingPageNav = () => {
    return (
        <nav className='landingPageNav'>
            <Link to='/'>
                <img src={netflixSymbol} alt='netflix symbol' />
            </Link>
            <Link to='/login' className='loginBtn'>
                Sign In
            </Link>
        </nav>
    );
};

export default LandingPageNav;
