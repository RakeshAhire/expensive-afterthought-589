import { Link } from "react-router-dom";
import './Navbar.css'
// import Home from "./Home";
function Navbar() {
    return (
        <div class='navbar'>
            <div class='logo'>
                <Link to='/'> <img style={{ width: '100px' }} src="https://logos-download.com/wp-content/uploads/2021/01/Nykaa_Logo.png" alt="logo" />
                </Link>
            </div>
            <Link style={{textDecoration: 'none' }} to='/category'>
                <ul class='ulist'>
                    <li>Categories</li>
                    <li>Brands</li>
                    <li>Luxe</li>
                    <li>Nykaa fashion</li>
                    <li>Beauty advice</li>
                </ul>
            </Link>
            <div class='search_icon'>
                <img src="https://img.icons8.com/ios/50/000000/search--v1.png" alt="logo" />
                <input id="second4_1" placeholder="Serch on Nykaa" />
            </div>
            <div class='user'>
                <img src="https://img.icons8.com/windows/32/000000/guest-male--v1.png" alt="logo" />
                <div>
                    <p>Login</p>
                    <p id="user_name"></p>
                </div>
                <img src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-bag-fashion-royyan-wijaya-detailed-outline-royyan-wijaya-2.png" alt="logo" />
            </div>

        </div>

    )
}
export default Navbar;