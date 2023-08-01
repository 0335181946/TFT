import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import bcrypt from 'bcryptjs';

const ChangePassword = () => {

  const navigate = useNavigate();

  const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

  const userOldPass = userInfo.password;

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [rNewPassword, setRNewPassword] = useState('');


  const updateHandler = async (e) => {
    e.preventDefault();

    async function compareIt(oldPassword){
      const validPassword = await bcrypt.compare(oldPassword, userOldPass);

      if (validPassword !== true) {
        toast.error('the old password is not correct');
        return;
      }

      if(newPassword === rNewPassword) {
        try {

            const {data} = await axios.put('/api/users/update', {
                _id: userInfo._id,
                newPassword
            });

            localStorage.removeItem('userInfo', JSON.stringify(data));
            toast.success('Password updated successfully!');
            navigate('/login');

        } catch(error) {
            toast.error('Password not updated!');
        }
    } else {
        toast.error('Password doesn`t match!');
      }

    }
    compareIt(oldPassword);
  }

  return (
    <div className='sign_container changeP_containe3'>
      <div className='sign_row3'>
        <div className='sign_form'>

          <form onSubmit={updateHandler}>
            <h2 className='sign_title'>ĐỔI MẬT KHẨU</h2>

            <div className='sign_form1'>
              <label htmlFor="o_password" className='sign_label'>Old Password</label>
              <input type="password" onChange={(e) => setOldPassword(e.target.value)} id="o_password" className='sign_input' required />
            </div>
            <div className='sign_form1'>
              <label htmlFor="password" className='sign_label'>new Password</label>
              <input type="password" onChange={(e) => setNewPassword(e.target.value)} id="password" className='sign_input' required />
            </div>
            <div className='sign_form1'>
              <label htmlFor="r_password" className='sign_label'>confirm Password</label>
              <input type="password" onChange={(e) => setRNewPassword(e.target.value)} id="r_password" className='sign_input' required />
            </div>
            <div className='sign_btn'>
              <button className='sign_btn_login'>UPDATE PASSWORD</button>
            </div>



          </form>

        </div>
      </div>
    </div>
  )
}

export default ChangePassword