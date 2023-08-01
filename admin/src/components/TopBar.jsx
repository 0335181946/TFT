import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const TopBar = () => {

    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem('adminInfo');
        toast.success('you have success log out ADMIN!');
        navigate('/login');
    }

    useEffect(() => {
        if (!localStorage.getItem('adminInfo')) {
            localStorage.getItem('adminInfo');
            navigate('/login');
        }
    }, [navigate]);

    return (
        <>
            <div className='home_tcol'>
                <h2 className='home_logo'>Admin</h2>
            </div>
            <div className='home_tcol'>
                <span onClick={logoutHandler} className='home_logout'>Logout  <i class="fas fa-sign-out-alt"></i> </span>
            </div>
        </>
    )
}

export default TopBar