import "./collection.css";
import CollectionImg11 from '../../images/collection-card-1-1.jpg';
import CollectionImg12 from '../../images/collection-card-1-2.jpg';
import CollectionImg13 from '../../images/collection-card-1-3.jpg';
import CollectionImg14 from '../../images/collection-card-1-4.jpg';

import CollectionImg21 from '../../images/collection-card-2-1.png';
import CollectionImg22 from '../../images/collection-card-2-2.jpg';
import CollectionImg23 from '../../images/collection-card-2-3.jpg';
import CollectionImg24 from '../../images/collection-card-2-4.jpg';

import CollectionImg31 from '../../images/collection-card-3-1.jpg';
import CollectionImg32 from '../../images/collection-card-3-2.jpg';
import CollectionImg33 from '../../images/collection-card-3-3.jpg';
import CollectionImg34 from '../../images/collection-card-3-4.jpg';

function Collection() {
return(
<section className="collection">
    <div className="container">
        <div className="collection-wrapper">
            <h2 className="collection-title">Trending Collection</h2>
            <p className="collection-text">Checkout our weekly updated trending collection.</p>
             <ul className="collection-list">
                <li className="collection-item">
                    <img className="collection-img" src={CollectionImg11} alt="collection image" />
                    <div className="collection-imglist">
                        <img src={CollectionImg12} alt="collection image" />
                        <img src={CollectionImg13} alt="collection image" />
                        <div>1025+</div>
                    </div>
                    <h3 className="collection-">Space Walking</h3>
                    <div>
                        <img src={CollectionImg14} alt="Avatar" />
                        <p>Animakid</p>
                    </div>
                </li>

                <li className="collection-item">
                    <img className="collection-img" src={CollectionImg21} alt="collection image" />
                    <div className="collection-imglist">
                        <img src={CollectionImg22} alt="collection image" />
                        <img src={CollectionImg23} alt="collection image" />
                        <div>1405+</div>
                    </div>
                    <h3 className="collection-">Magic Mushrooms</h3>
                    <div>
                        <img src={CollectionImg24} alt="Avatar" />
                        <p>Shroomie</p>
                    </div>
                </li>

                <li className="collection-item collection-item-3">
                    <img className="collection-img" src={CollectionImg31} alt="collection image" />
                    <div className="collection-imglist">
                        <img src={CollectionImg32} alt="collection image" />
                        <img src={CollectionImg33} alt="collection image" />
                        <div>1079+</div>
                    </div>
                    <h3 className="collection-">Disco Machines</h3>
                    <div>
                        <img src={CollectionImg34} alt="Avatar" />
                        <p>BeKind2Robots</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</section>
)
}


export default Collection;