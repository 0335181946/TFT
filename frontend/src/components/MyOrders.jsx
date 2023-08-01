import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyOrders = () => {

    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
    const userId = userInfo._id;

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const resultOrder = await axios.get(`/api/orders/mine/${userId}`);
            setOrders(resultOrder.data);
        }
        fetchData();
    }, []);


    return (
        <div className='mo_container'>
            <div className='mo_row'>
                <h2 className='sign_title'>LỊCH SỬ ĐƠN HÀNG CỦA BẠN</h2>
            </div>
            <div className='mo_row'>
                {
                    orders.length === 0 ? (
                        <h3 className='cart_no_product'>no order!</h3>
                    ) : (
                        <div className='myOrder_groups'>
                            {
                                orders.map((item) => (
                                    <div className='mo_group' key={item._id}>
                                        <h4>Order ID: {item._id}</h4>
                                        <Link to={`/orders/${item._id}`} className='mo_link'> <i class="fas fa-eye"></i> </Link>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
               
            </div>
        </div>
    )
}

export default MyOrders