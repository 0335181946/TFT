import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import ChangPassUser from './ChangPassUser';
import EditUser from './EditUser';
import ViewUser from './ViewUser';

const AllUser = ({user}) => {

    const [openViewUser, setOpenViewUser] = useState(false);
    const [openEditUser, setOpenEditUser] = useState(false);
    const [openChangePassUser, setOpenChangePassUser] = useState(false);


    const handlerDeleteUser = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.delete(`/api/users/delete/${user._id}`)
            if (data) {
                toast.success('xoa user thanh cong!');
            }

        } catch (err) {
            toast.error('delete user that bai');
        }
    }

    return (
        <>
            <div className='all_group' key={user._id}>
                <div className='all_left'>
                    <h3 className='all_subtitle'>{user.username}</h3>
                </div>

                <div className='all_right'>
                    <i class="fas fa-eye" onClick={() => setOpenViewUser(true)}></i>
                    <i class="fas fa-edit" onClick={() => setOpenEditUser(true)}></i>
                    <i class="fas fa-key" onClick={() => setOpenChangePassUser(true)}></i>
                    <i class="fas fa-trash-alt" onClick={handlerDeleteUser}></i>
                </div>
            </div>
            {openViewUser && <ViewUser user={user} setOpenViewUser={setOpenViewUser}/> }
            {openEditUser && <EditUser  user={user} setOpenEditUser={setOpenEditUser}/>}
            {openChangePassUser && <ChangPassUser  user={user} setOpenChangePassUser={setOpenChangePassUser}/>}
        </>
    )
}

export default AllUser