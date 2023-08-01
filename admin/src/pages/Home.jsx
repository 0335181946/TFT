import React from 'react';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Products from './Products';
import Users from './Users';
import Posts from './Posts';
import Login from './Login';

const Home = () => {


  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
      <div className='home_container'>
        <div className='home_row'>
          <TopBar />
        </div>
        <div className='home_row'>
          <div className='home_col'>
            <SideBar />
          </div>
          <div className='home_col'>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/products' element={<Products />} />
              <Route path='/users' element={<Users />} />
              <Route path='/posts' element={<Posts />} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default Home