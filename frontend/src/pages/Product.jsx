import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductDetails from '../components/ProductDetails'

const Product = () => {
  return (
    <div className='wrapper'>
        <div className='header'>
            <Header/>
        </div>
        <div>
            <ProductDetails/>
        </div>
        <div className='footer'>
            <Footer/>
        </div>
    </div>
  )
}

export default Product