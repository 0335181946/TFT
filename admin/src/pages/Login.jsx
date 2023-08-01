import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {

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

            if(data.isAdmin === true){
                localStorage.setItem('adminInfo', JSON.stringify(data));
                toast.success('login ADMIN success');
                navigate('/');
            }else{
                toast.error("invalid email or password");
            }

        } catch (err) {
            toast.error("invalid email or password");
        }
    }

    useEffect(() => {
        if (localStorage.getItem('adminInfo')) {
            localStorage.getItem('adminInfo');
            navigate('/');
        }
    }, [navigate]);


    return (
        <div className='login_container'>
            <div className='login_row'>
                <h3 className='login_title'>Login for Admin panel</h3>
                <form onSubmit={loginHandler}>
                    <div className='login_groups'>
                        <div className='login_group'>
                            <label htmlFor="email">Admin Email</label>
                            <input type="text" onChange={(e) => setEmail(e.target.value)} id='email' required />
                        </div>
                        <div className='login_group'>
                            <label htmlFor="password">Admin password</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} id='password' required />
                        </div>
                        <div className='login_group'>
                            <button className='login_btn'>LOGIN</button>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Login