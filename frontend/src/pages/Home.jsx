import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeBlog from '../components/HomeBlog'
import NewProducts from '../components/NewProducts'
import Slides from '../components/Slides'


const Home = () => {
  return (
    <div className='wrapper'>
        <header className='header'>
            <Header/>
        </header>
        <main className='main'>
            <Slides/>
            <HomeBlog/>
            <NewProducts/>
        </main>
        <footer className='footer'>
            <Footer/>
        </footer>
    </div>
  )
}

export default Home