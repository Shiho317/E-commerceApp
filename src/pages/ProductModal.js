import React from 'react';
import { useDispatch } from 'react-redux';
import CitizenJewery from '../images/citizen-jewery.png';
import '../styles/ProductModal.css';
import { addProduct } from '../actions';

function ProductModal({isModalToggle, IsModalToggle}) {

  const dispatch = useDispatch();

  return (
  <div>
  {isModalToggle ? (
      <div id="overlay">
    <div class="modal-cart">
      <div class="close-modal" onClick={IsModalToggle}>&times;</div>
      <div class="your-cart">Your Cart</div>

      <div class="inside-cart">
        <div class="modal-image">
          <img src={CitizenJewery} alt="watch-cart" class="modal-watch-image"/>
        </div>

        <div class="details-cart">
          <div class="watch-company">Citizen</div>
          
          <div class="watch-name">
            <p>Eco-Drive Silhouette Crystal Rose<br/> Goldtone Stainless Steel Bracelet Watch</p>
          </div>
          
          <div class="watch-price">CA$<span class="price-value">450.00</span></div>

          <div class="quantity">
            <h3>quantity</h3>
            <select name="quantity" id="watch-quantity">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div class="total">
            <h3>Total</h3>
            <span>CA$ <span class="total-price">450.00</span> +tax</span>
          </div>
          <div class="button-total">
            <button class="lookMore-total" onClick={IsModalToggle}>Look More</button>
            <button class="buyNow-total" onClick={() => {dispatch(addProduct())}}>Buy Now</button>
          </div>

        </div>
      </div>
      
    </div>
  </div>
  ) : (
    <div></div>
  )}

  </div>
  )
}

export default ProductModal
