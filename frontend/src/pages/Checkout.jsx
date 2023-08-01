import React, { useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Checkout = ({setOpen,cartItems, subTotal, cod, total}) => {
  const navigate = useNavigate();

  const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
  const userId = userInfo._id;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const orderProductHandler = async (e) => {
    e.preventDefault();  // ngan form khong gui di
    try{
      const {data} = await axios.post('/api/orders/',{
        orderItems: cartItems,
        name: name,
        email: email,
        address: address,
        phone: phone,
        subTotal: subTotal,
        cod: cod,
        total: total,
        userId: userId,

      });

      if(data){
        localStorage.removeItem('cartItems');
        setOpen(false);
        toast.success('ban dat hang thanh cong');
        navigate('/orders');
      }

    }catch(err){
      toast.error('dat hang that bai!');
    }
  }



  return (
    <div className='check_container'>
      <form onSubmit={orderProductHandler}>
        <h5 className='check_title'>YOU WILL PAY AFTER DELIVERRY</h5>
        <div className='close_form' onClick={() => setOpen(false)}>X</div>
        <div className='form_group'>
          <label htmlFor="name">Name</label>
          <input required type="text" onChange={(e) => setName(e.target.value)} id='name' />
        </div>

        <div className='form_group'>
          <label htmlFor="email">Email</label>
          <input required type="text"  onChange={(e) => setEmail(e.target.value)} id='email'  />
        </div>

        <div className='form_group'>
          <label htmlFor="address">Address</label>
          <input required type="text"  onChange={(e) => setAddress(e.target.value)} id='address' />
        </div>

        <div className='form_group'>
          <label htmlFor="phone">Phone</label>
          <input required type="text"  onChange={(e) => setPhone(e.target.value)} id='phone'  />
        </div>

        <div className='check_btn'>
          <button type='submit'>ORDER <i class="fas fa-truck-moving"></i></button>
        </div>

      </form>
    </div>
  )
}

export default Checkout