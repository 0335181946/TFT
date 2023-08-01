import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Signin = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('/api/users/login', {
        email,
        password
      });

      localStorage.setItem('userInfo', JSON.stringify(data));
      toast.success('login success');
      navigate('/');

    } catch (err) {
      toast.error("invalid email or password");
    }
  }

  useEffect(() =>{
    if(localStorage.getItem('userInfo')){
      localStorage.getItem('userInfo');
      navigate('/');
    }
  }, [navigate]);



  return (
    <div className='sign_container'>
      <div className='sign_row'>
        <div className='sign_form'>

          <form onSubmit={loginHandler}>
            <h2 className='sign_title'>ĐĂNG NHẬP</h2>
            <div className='sign_form1'>
              <label htmlFor="email" className='sign_label'>Email</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} id="email" className='sign_input' required />
            </div>
            <div className='sign_form1'>
              <label htmlFor="password" className='sign_label'>Password</label>
              <input type="password" onChange={(e) => setPassword(e.target.value)} id="password" className='sign_input' required />
            </div>
            <div className='sign_btn'>
              <button className='sign_btn_login'>ĐĂNG NHẬP</button>
            </div>

            <div className='signOther1'>
              <Link to="">- - HOẶC CHỌN - -</Link>
            </div>

            <div className='signOther'>
              <Link to="/register">ĐĂNG KÝ TÀI KHOẢN</Link>
            </div>
            <div className='signOther'>
              <Link to="/">TRỞ LẠI TRANG CHỦ</Link>
            </div>

          </form>

        </div>
      </div>
    </div>
  )
}

export default Signin
