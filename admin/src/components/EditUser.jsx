import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const EditUser = ({ user, setOpenViewUser, setOpenEditUser, setOpenChangePassUser }) => {

    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);

    const editUserHandler = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.put('/api/users/update', {

                _id: user._id,
                username,
                email,

            });
            toast.success('cap nhat user thanh cong');
            setOpenEditUser(false);

        } catch (err) {
            toast.error('update failed, vui long thu lai');
        }
    }

    return (
        <div className='popup_container'>
            <form onSubmit={editUserHandler}>
                <h5 className='popup_title'>EDIT USER - {user.username}</h5>
                <div className='close_form' onClick={() => setOpenEditUser(false)}>X</div>
                <div className='form_group'>
                    <label htmlFor="username">Username</label>
                    <input required type="text" onChange={(e) => setUsername(e.target.value)} value={username} id='username' />
                </div>

                <div className='form_group'>
                    <label htmlFor="email">Email</label>
                    <input required type="text" onChange={(e) => setEmail(e.target.value)} value={email} id='email' />

                </div>
                <div className='popup_btn'>
                    <button type='submit'>UPDATE</button>
                </div>

            </form>
        </div>
    )
}

export default EditUser