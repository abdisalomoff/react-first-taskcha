import "./hero.css";
import HeroCardImg from '../../images/hero-card-img.jpg';
import HeroAvatar from '../../images/avatar.svg';

function Hero() {
return(
<section className="hero">
    <div className="container">
        <div className="hero-wrapper">
            <div className="hero-hedline">
                <h1 className="hero-title">Discover digital art & Collect NFTs</h1>

                <p className="hero-text">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from
                    more than 20k NFT artists.</p>

                <a className="hero-btn" href="#">Get Started</a>

                <ul className="hero-additional-info">
                    <li className="hero-item">
                        <p className="hero-number">240k+</p>
                        <p className="hero-info">Total Sale</p>
                    </li>
                    <li className="hero-item">
                        <p className="hero-number">100k+</p>
                        <p className="hero-info">Auctions</p>
                    </li>
                    <li className="hero-item">
                        <p className="hero-number">240k+</p>
                        <p className="hero-info">Artists</p>
                    </li>
                </ul>
            </div>
            <div className="hero-card">
                <img className="hero-card-img" src={HeroCardImg} alt="card-img" />
                <div className="hero-card-body">
                    <h2 className="hero-card-title">Space Walking</h2>
                    <div>
                        <img src={HeroAvatar} alt="Avatar" />
                        <p>Animakid</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
)
}

export default Hero;