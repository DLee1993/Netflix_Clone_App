import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Promotions = () => {
    return (
        <div className='promo_banner'>
            <button>NEW!</button>
            <p>
                Plans now start at <span>£4.99</span>.
            </p>
            <Link to='/signup'>
                Learn More <IoIosArrowForward />
            </Link>
        </div>
    );
};

export default Promotions;
