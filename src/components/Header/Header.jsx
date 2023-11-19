import './header.css';
import SiteLogo from "../../images/logo.svg";
import BurgerButton from "../../images/BurgerButton.svg";



function Header() {
return(
<header className='header'>
    <div className='container-header'>
        <div className='header-wrapper'>
            <a className='header-logo' href="./index.html">
                <img src={SiteLogo} alt="site logo" />
            </a>
            <ul className='header-nav'>
                <li className='header-item'><a className='header-link' href="#">Marketplace</a></li>
                <li className='header-item'><a className='header-link' href="#">Rankings</a></li>
                <li className='header-item'><a className='header-link' href="#">Connect a wallet</a></li>
                <li className='header-item'><a className='header-link header-btn' href="#">Sign Up</a></li>
            </ul>
            <button className="burger-button">
                <img className='burger-button-line' src={BurgerButton} alt="brg" />
            </button>
        </div>
    </div>
</header>
)
}

export default Header