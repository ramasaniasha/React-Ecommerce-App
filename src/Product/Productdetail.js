import React from 'react';
import axios from '../Api/axios';
import Header from '../Navbar';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {addToCarthadler} from '../redux/actions/CartActions'
import { useDispatch } from 'react-redux';

export default function Productdetail() {

  const [Product, setProduct] = useState([])
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  

  let { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3008/products/${id}`)
      .then(response => {
        setProduct(response.data)
        setImages(response.data.images)
      })

  },[])
  
  return (
    <>
      <Header/>
      <div className="container padding-top-bottom-50">
        <div className="card">
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                <img src={Product.thumbnail} alt="shoe image" />

              </div>
            </div>
            <div className="img-select">
              <div className="img-item">
                <a href="#" data-id="1">
                  <img src={images[0]} alt="shoe image" />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="2">
                  <img src={images[1]} />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="3">
                  <img src={images[2]} alt="shoe image" />
                </a>
              </div>
            </div>
          </div>
          <div className="product-content">
            <h2 className="product-title">{Product.title}</h2>
            <a href="#" className="product-link">{Product.brand}</a>

            <div className="product-price">
              <span className="new-price">Price: <span>${Product.price}</span></span>
              <span className="new-price">  Discount: <span>({Product.discountPercentage}%)</span></span>
            </div>

            <div className="product-detail">
              <h6>{Product.description}</h6>

              <ul>
                {/* <li>Color: <span>Black</span></li> */}
                <li>Available: <span>in stock</span></li>
                <li>Category: <span>{Product.category}</span></li>
                {/* <li>Shipping Area: <span>All over the world</span></li> */}
                <li>Shipping Fee: <span>Free</span></li>
              </ul>
            </div>

            <div className="purchase-info">
              {/* <input type="number" min="0" value="1" /> */}
              <button type="button" onClick={() => dispatch(addToCarthadler(Product))} className="btn">
                Add to Cart <i className="fa fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}
