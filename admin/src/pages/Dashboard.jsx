import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Dashboard = () => {

    const [users, setUsers] = useState(0);
    const [blogs, setBlogs] = useState(0);
    const [products, setProducts] = useState(0);
    const [sum, setSum] = useState(0);

    useEffect(() => {
        const fetchData = async () => {

            const resultUsers = await axios.get('/api/users/countUsers');
            setUsers(resultUsers.data);
            console.log(resultUsers)

            const resultBlogs = await axios.get('/api/blogs/countBlogs');
            setBlogs(resultBlogs.data);

            const resultProducts = await axios.get('/api/products/countProducts');
            setProducts(resultProducts.data);

            const resultOrders = await axios.get('/api/orders/countSumTotal');
            const resultDataOrders = resultOrders.data;

            const totalSum = resultDataOrders[0].total;
            setSum(totalSum);

        }
        fetchData();
    }, []);



    return (
        <div className='dashboard_container'>
            <div className='dashboard_row'>
                <div className='dashboard_groups'>
                    <div className='dashboard_group'>
                        <div className='dash_group_body'>
                            <span className='dash_title'>${sum}</span>
                        </div>
                        <div className='dash_group_footer'>
                            <span className='dash_subtitle'>Total earning</span>
                        </div>
                    </div>

                    <div className='dashboard_group'>
                        <div className='dash_group_body'>
                            <span className='dash_title'>{products?.count}</span>
                        </div>
                        <div className='dash_group_footer'>
                            <span className='dash_subtitle'>product</span>
                        </div>
                    </div>

                    <div className='dashboard_group'>
                        <div className='dash_group_body'>
                            <span className='dash_title'>{users?.count}</span>
                        </div>
                        <div className='dash_group_footer'>
                            <span className='dash_subtitle'>user</span>
                        </div>
                    </div>

                    <div className='dashboard_group'>
                        <div className='dash_group_body'>
                            <span className='dash_title'>{blogs?.count}</span>
                        </div>
                        <div className='dash_group_footer'>
                            <span className='dash_subtitle'>post</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard