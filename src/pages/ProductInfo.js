import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CitizenJewery from '../images/citizen-jewery.png';
import MidoSilverGold from '../images/mido-silvergold.png';
import RadoGold from '../images/rado-gold.png';
import TitanLaga from '../images/titan-raga.png';
import Bulova from '../images/bulova.png';
import Bellisma from '../images/tissot-bellisma.webp';
import RobhayesGold from '../images/robhayes-gold.png';
import WristologyGold from '../images/wristrogy-gold.png';
import BensonPinkGold from '../images/benson-pinkgold.png';
import MidoSilverGold2 from '../images/mido-silvergold2.png';
import TissotFramingo from '../images/tissot-framingo.webp';
import JordTuesday from '../images/jord-tuesday.png';
import '../styles/ProductInfo.css';
import ProductModal from './ProductModal';
import { addProduct } from '../actions';

function ProductInfo() {

  const dispatch = useDispatch();

  const [isModalToggle, setIsModalToggle] = useState(false);

  const IsModalToggle = () => {
    setIsModalToggle(prev => !prev);
    console.log('yay')
  };

  return (
  <div>
  <ProductModal isModalToggle={isModalToggle} IsModalToggle={IsModalToggle}/>

    <div className="new-arrivals">
    <h1>New Arrivals</h1>

    <div className="wrap_new-arrivals">

      <div className="watch">

        <div className="image">
          <img src={CitizenJewery} alt="watch" className="citizen-jewery"/>
        </div>
        
        <div className="details">
          <div className="company">
            <h4>Citizen</h4>
          </div>
          <div className="name">
            <p>Eco-Drive Silhouette Crystal Rose <br/>Goldtone Stainless Steel Bracelet Watch</p>
          </div>
          <div className="price">CA$<span>450.00</span></div>
        </div>

        <div class="button">
          <button className="addToCart" onClick={() => {IsModalToggle(); dispatch(addProduct);}}>Add To Cart</button>
          <button className="buyNow">Buy Now</button>
        </div>

      </div>

      <div className="watch">

        <div className="image">
          <img src={MidoSilverGold} alt="watch" className="mido-silvergold"/>
        </div>
        
        <div className="details">
          <div className="company">
            <h4>MIDO</h4>
          </div>
          <div className="name">
            <p>BARONCELLI LADY DAY</p>
          </div>
          <div className="price">CA$<span>1350.00</span></div>
        </div>

        <div className="button">
          <button className="addToCart" onClick={IsModalToggle}>Add To Cart</button>
          <button className="buyNow">Buy Now</button>
        </div>
      </div>

      <div className="watch">

        <div className="image">
          <img src={RadoGold} alt="watch" className="rado-gold"/>
        </div>
        
        <div className="details">
          <div className="company">
            <h4>RADO</h4>
          </div>
          <div className="name">
            <p>Coupole Classic Automatic Power Reserve</p>
          </div>
          <div className="price">CA$<span>2505.00</span></div>
        </div>

        <div className="button">
          <button className="addToCart" onClick={IsModalToggle}>Add To Cart</button>
          <button className="buyNow">Buy Now</button>
        </div>
      </div>

      <div className="watch">
        <div className="image">
          <img src={TitanLaga} alt="watch" className="titan"/>
        </div>

        <div className="details">
          <div className="company">
            <h4>TITAN RAGA</h4>
          </div>
          <div className="name">
            <p>Titan Ladies Watch</p>
          </div>
          <div className="price">CA$<span>1099.00</span></div>
        </div>

        <div class="button">
          <button className="addToCart" onClick={IsModalToggle}>Add To Cart</button>
          <button className="buyNow">Buy Now</button>
        </div>
      </div>

      <div className="watch">
        <div className="image">
          <img src={Bulova} alt="watch" className="bulova"/>
        </div>

        <div className="details">
          <div className="company">
            <h4>BULOVA</h4>
          </div>
          <div className="name">
            <p>Bulova Classic</p>
          </div>
          <div className="price">CA$<span>180.00</span></div>
        </div>

        <div className="button">
          <button className="addToCart" onClick={IsModalToggle}>Add To Cart</button>
          <button className="buyNow">Buy Now</button>
        </div>
      </div>

      <div className="watch">
        <div className="image">
          <img src={Bellisma} alt="watch" className="bellisma"/>
        </div>

        <div className="details">
          <div className="company">
            <h4>TISSOT</h4>
          </div>
          <div className="name">
            <p>TISSOT BELLISSIMA SMALL LADY</p>
          </div>
          <div className="price">CA$<span>595.00</span></div>
        </div>

        <div className="button">
          <button className="addToCart" onClick={IsModalToggle}>Add To Cart</button>
          <button className="buyNow">Buy Now</button>
        </div>
      </div>

    </div>

  </div>

  <div className="best-collections">
    <h1>Best Collections</h1>

    <div className="wrap_best-collections">

      <div className="watch">

        <div className="image">
          <img src={RobhayesGold} alt="watch" className="robhayes-gold"/>
        </div>
        
        <div className="details">
          <div className="company">
            <h4>ROB HAYES</h4>
          </div>
          <div className="name">
            <p>ROSE GOLD/WHITE BERKELEY 38</p>
          </div>
          <div className="price">CA$<span>1995.00</span></div>
        </div>

        <div className="button">
          <button className="addToCart" onClick={IsModalToggle}>Add To Cart</button>
          <button className="buyNow">Buy Now</button>
        </div>

      </div>

      <div className="watch">

        <div className="image">
          <img src={WristologyGold} alt="watch" className="wristrogy-gold"/>
        </div>
        
        <div className="details">
          <div className="company">
            <h4>WRISTOLOGY</h4>
          </div>
          <div className="name">
            <p>Crystal Rose Gold Boyfriend Ladies <br/>Stainless Steel Metal Mesh Strap Band</p>
          </div>
          <div className="price">CA$<span>39.99</span></div>
        </div>

        <div className="button">
          <button className="addToCart" onClick={IsModalToggle}>Add To Cart</button>
          <button className="buyNow">Buy Now</button>
        </div>
      </div>

      <div className="watch">

        <div className="image">
          <img src={BensonPinkGold} alt="watch" className="benson-pinkgold"/>
        </div>
        
        <div className="details">
          <div className="company">
            <h4>BENSON</h4>
          </div>
          <div className="name">
            <p>CARDINAL PINK ROSE</p>
          </div>
          <div className="price">CA$<span>189.00</span></div>
        </div>

        <div class="button">
          <button className="addToCart" onClick={IsModalToggle}>Add To Cart</button>
          <button className="buyNow">Buy Now</button>
        </div>
      </div>

      <div className="watch">
        <div className="image">
          <img src={MidoSilverGold2} alt="watch" className="mido-silvergold2"/>
        </div>
        
        <div className="details">
          <div className="company">
            <h4>MIDO</h4>
          </div>
          <div className="name">
            <p>BARONCELLI SIGNATURE</p>
          </div>
          <div className="price">CA$<span>1875.00</span></div>
        </div>

        <div className="button">
          <button className="addToCart" onClick={IsModalToggle}>Add To Cart</button>
          <button className="buyNow">Buy Now</button>
        </div>
      </div>

      <div className="watch">
        <div className="image">
          <img src={TissotFramingo} alt="watch" className="framingo"/>
        </div>

        <div className="details">
          <div className="company">
            <h4>TISSOT</h4>
          </div>
          <div className="name">
            <p>TISSOT FLAMINGO</p>
          </div>
          <div className="price">CA$<span>450.00</span></div>
        </div>

        <div className="button">
          <button className="addToCart" onClick={IsModalToggle}>Add To Cart</button>
          <button className="buyNow">Buy Now</button>
        </div>
      </div>

      <div className="watch">
        <div className="image">
          <img src={JordTuesday} alt="watch" className="jord"/>
        </div>

        <div className="details">
          <div className="company">
            <h4>JORD</h4>
          </div>
          <div className="name">
            <p>TIGER'S EYE & OLIVE WOOD</p>
          </div>
          <div className="price">CA$<span>252.00</span></div>
        </div>

        <div className="button">
          <button className="addToCart" onClick={IsModalToggle}>Add To Cart</button>
          <button className="buyNow">Buy Now</button>
        </div>
      </div>
    </div>
    </div>

  </div>
  )
}

export default ProductInfo
