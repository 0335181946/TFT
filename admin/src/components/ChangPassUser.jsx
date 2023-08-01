import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const ChangPassUser = ({ user, setOpenChangePassUser }) => {

  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const editPassHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPass) {
      toast.error('password do not match!');
      return;
    } else {
      try {
        const { data } = await axios.put('/api/users/update', {

          _id: user._id,
          password,
        });
        toast.success('thay doi mat khau thanh cong');
        setOpenChangePassUser(false);

      } catch (err) {
        toast.error('doi mat khau that bai!');
      }
    }
  }


  return (
    <div className='popup_container'>
      <form onSubmit={editPassHandler}>
        <h5 className='popup_title'>CHANGE PASS USER - {user.username}</h5>
        <div className='close_form' onClick={() => setOpenChangePassUser(false)}>X</div>
        <div className='form_group'>
          <label htmlFor="password">NEW PASSWORD</label>
          <input required type="password" onChange={(e) => setPassword(e.target.value)} value={password} id='pass' />
        </div>

        <div className='form_group'>
          <label htmlFor="confirmpass">CONFIRM PASSWORD</label>
          <input required type="password" onChange={(e) => setConfirmPass(e.target.value)} value={confirmPass} id='confirmpass' />
        </div>


        <div className='popup_btn'>
          <button type='submit'>CHANGE PASS</button>
        </div>

      </form>
    </div>
  )
}

export default ChangPassUser