import React from "react";
import Header from '../Navbar';
import { ImCross } from "react-icons/im";
import GooglePayButton from '@google-pay/button-react';
import {addToCarthadler,decreaseQty} from '../redux/actions/CartActions';
import { useDispatch,useSelector} from "react-redux";


const Cart = () => {
  const CartItem = useSelector((state) => state.CartReducer);
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <section className='cart-items'>
        <div className='container d_flex'>
          <div className='cart-details'>
            {CartItem.length === 0 &&
              <h1 className='no-items product'>No Items are add in Cart</h1>}
            {CartItem.map((item) => {
              const productQty = item.price * item.qty

              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.thumbnail} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.title}</h3>
                    <h6>{item.description}</h6>
                    <h4>
                      ${item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart'>
                        <ImCross />
                        {/* <i className='fa fa-cross'></i> */}
                      </button>
                    </div>
                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => dispatch(addToCarthadler(item))}>
                        <i className='fa fa-plus'></i>
                      </button>
                      <button className='desCart' onClick={() => dispatch(decreaseQty(item))}>
                        <i className='fa fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h4>Total Price :</h4>
              <h3>${totalPrice}.00</h3>
            </div>
            <GooglePayButton
              environment="TEST"
              paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                  {
                    type: 'CARD',
                    parameters: {
                      allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                      allowedCardNetworks: ['MASTERCARD', 'VISA'],
                    },
                    tokenizationSpecification: {
                      type: 'PAYMENT_GATEWAY',
                      parameters: {
                        gateway: 'example',
                        gatewayMerchantId: 'exampleGatewayMerchantId',
                      },
                    },
                  },
                ],
                merchantInfo: {
                  merchantId: '12345678901234567890',
                  merchantName: 'Demo Merchant',
                },
                transactionInfo: {
                  totalPriceStatus: 'FINAL',
                  totalPriceLabel: 'Total',
                  totalPrice: '100.00',
                  currencyCode: 'USD',
                  countryCode: 'US',
                },
              }}
              onLoadPaymentData={paymentRequest => {
                console.log('load payment data', paymentRequest);
              }}
            />
          </div>
        </div>
      </section>

    </>
  )
}

export default Cart
