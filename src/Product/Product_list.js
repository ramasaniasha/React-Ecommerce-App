import React, { useEffect, useState } from 'react';
import Footer from '../Header/Footer';
import Header from '../Navbar';
import axios from '../Api/axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { GetallProducts } from '../redux/actions/CartActions'

export default function Productlist() {
    // const [products, setProducts] = useState([]);
    const [search, setsearch] = useState("");
    const products = useSelector((state) => state.ProductReducer.products);
    const dispatch = useDispatch();
    // console.log(products)
    useEffect(() => {
        getAllProducts();
    },[search]);
    function handleSearch(e) {
        setsearch(e.target.value);
    }
    const getAllProducts = () => {
        dispatch(GetallProducts(search));
      
    }
    return (
        <>
            <Header/>
            <h1 className="text-center padding-top-bottom-50">Product Listing</h1>

            <div>
                <input type='text' className='input-search' value={search}
                    placeholder='Search for products, brands and more'
                    onChange={handleSearch} />
                <button className='fa fa-search search-icon btn btn-primary'
                    style={{ fontSize: '20px', }}></button>
            </div>
            <div className='container'>
                <ul className="flex-container">
                    {products.map(content => (
                        <li key={content.id} style={{ backgroundColor: '#fbf9f99c', }}>
                            <div className="product-image">
                                <Link to={`/product/${content.id}`}>
                                    <img src={content.thumbnail} />
                                </Link>
                            </div>
                            <div className="product-imformation">
                                <h4>{content.brand}</h4>
                                <div className="specification">
                                    <span>{content.description}</span>

                                </div>
                                <span className='product-price'>${content.price}</span>
                                {/* <span>  %{content.discountPercentage}</span> */}
                            </div>
                            <Link to={`/product/${content.id}`}>
                                <button className='btn btn-primary' style={{
                                    marginBottom: '16px', marginLeft: '17px',
                                    marginTop: '16px',
                                }}>Buy Now</button>
                            </Link>
                        </li>

                    ))
                    }

                </ul>
            </div>
            <Footer />
        </>
    )
}