import React from 'react'
import BlogList from '../components/BlogList'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Blog = () => {
    return (
        <div className='wrapper'>
            <header className='header'>
                <Header />
            </header>
            <main className='main'>
                <BlogList />
            </main>
            <footer className='footer'>
                <Footer />
            </footer>
        </div>
    )
}

export default Blog