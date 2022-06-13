import React from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
// import Banner from './Header/Banner'

function Header() {
    const navigate = useNavigate();
    const CartItem = useSelector((state) => state.CartReducer);
    console.log('count',CartItem)

    function handleLagout() {
        localStorage.clear();
         alert('User Lagout Successfully');
         navigate('/login');
    }

    return (
        <>
            <Navbar bg="white" varient="white" className='shadow-sm padding-50'>
                <Navbar.Brand >NavBrand</Navbar.Brand>
                <Nav className='nav-bar-wrapper'>
                    <li>
                        <Link className="nav-link" to='/home' CartItem={CartItem}>Home</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to='/product'>Product</Link>
                    </li>

                    <Nav className='ml-auto'>
                        <NavDropdown title='Asha' >
                            <NavDropdown.Item>
                                <Link className="nav-link" to='/profile'>User Profile</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={handleLagout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <div className='cart'>
                            <Link to='/cart' className="nav-link">
                                <i className='fa fa-shopping-cart icon-circle'></i>
                                <span className='cart-list-style'>{CartItem.length === 0 ? "" : CartItem.length}</span>
                            </Link>
                        </div>
                    </Nav>

                </Nav>

            </Navbar>
        </>
    );
};

export default Header;
