import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify';
import MyOrderDetail from './MyOrderDetail'

const MyOrder = () => {

    const [order, setOrder] = useState([]);

    const location = useLocation();
    const id = location.pathname.split("/")[2];

    useEffect(() => {

        const fetchData = async () => {
            try {
                const { data } = await axios.get(`/api/orders/find/${id}`);
                setOrder(data);
                console.log(data);

            } catch (err) {
                toast.error('order not found');
            }
        }
        fetchData();
    }, [id]);

    return (
        <div className='myOrder_container'>

            <div className='myOrder_row myorderTop'>
                <h2 className='bill_title'>Order ID: {id}</h2>
                <h2><Link className='go_back' to='/account'>GO BACK</Link></h2>
            </div>

            <div className='myOrder_row myorder'>
                <div className='my_col'>
                    <div className='my_groups'>
                        <div className='bill_groups'>
                            <div className='wish_groups'>
                                {
                                    order.orderItems?.map((item) => (
                                        <MyOrderDetail key={item._id} item={item} />
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <div className='my_col'>
                    <div className='bill_total'>
                        <div className='bill_group'>
                            <span>Name</span>
                            <span>{order.name}</span>
                        </div>
                        <div className='bill_group'>
                            <span>Email</span>
                            <span>{order.email}</span>
                        </div>
                        <div className='bill_group'>
                            <span>Address</span>
                            <span>{order.address}</span>
                        </div>
                        <div className='bill_group'>
                            <span>Phone</span>
                            <span>{order.phone}</span>
                        </div>
                        <div className='bill_group mf'>
                            <span>is Delivered</span>
                            <span>{order.isDelivered === true ? ('da giao hang') : ('chua giao hang')}</span>
                        </div>
                        <div className='bill_group'>
                            <span>is Paid</span>
                            <span>{order.isPaid === true ? ('da thanh toan') : ('chua thanh toan')}</span>
                        </div>

                        <div className='bill_group mf'>
                            <span>Subtotal</span>
                            <span>${order.subTotal}</span>
                        </div>
                        <div className='bill_group'>
                            <span>cod</span>
                            <span>${order.cod}</span>
                        </div>
                        <div className='bill_group'>
                            <span>total</span>
                            <span>${order.total}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyOrder