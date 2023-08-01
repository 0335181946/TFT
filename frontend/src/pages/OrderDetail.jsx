import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer'
import MyOrder from '../components/MyOrder';

const OrderDetail = () => {
  return (
    <div className='wrapper'>
        <header className='header'>
            <Header/>
        </header>
        <main className='main'>
            <MyOrder/>
        </main>
        <footer className='footer'>
            <Footer/>
        </footer>
    </div>
  )
}

export default OrderDetail