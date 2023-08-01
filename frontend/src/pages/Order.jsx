import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer'
import MyOrders from '../components/MyOrders';

const OrderDetail = () => {
  return (
    <div className='wrapper'>
        <header className='header'>
            <Header/>
        </header>
        <main className='main'>
            <MyOrders/>
        </main>
        <footer className='footer'>
            <Footer/>
        </footer>
    </div>
  )
}

export default OrderDetail