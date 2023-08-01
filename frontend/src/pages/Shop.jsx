import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ShopMain from '../components/ShopMain'

const Shop = () => {
  return (
    <div className='wrapper'>
        <header className='header'>
            <Header/>
        </header>
        <main className='main'>
            <ShopMain/>
        </main>
        <footer className='footer'>
            <Footer/>
        </footer>
    </div>
  )
}

export default Shop