import React from 'react';
import Header from './Navbar';
import Footer from './Header/Footer';
import Banner from './Header/Banner';

export default function Home({ CartItem }) {
  return (

    <>
      <Header CartItem={CartItem}/>
      <Banner />
      <section className='padding-50 margin-top-50'>
        <h1>Welcome to Home Page</h1>
      </section>
      <Footer />

    </>
  )
}