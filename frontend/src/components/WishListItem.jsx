import React from 'react';
import { Link } from 'react-router-dom';

const WishListItem = ({ item, removeItemHandler }) => {

    return (
        <div className='product_group wish_pro'>
            <img className='product_img' src={item.image} alt={item.title} />
            <div className='product_body'>

                <span className='product_category'>hãng: {item.category}</span>
                <span className='product_subcategory'>sân: {item.subcategory}</span>
                <h4 className='product_title'>TÊN: {item.title}</h4>
                <span className='product_price'>GIÁ:  {(item.price)}đ</span>
                <button className='icon_view'>
                    <Link to={`/products/${item._id}`}>
                        XEM CHI TIẾT
                    </Link>
                </button>
                <button className='wish_button2' onClick={() => removeItemHandler(item)}>
                    <span className='wish_span2'>DELETE</span>
                </button>
            </div>
        </div>

    )
}

export default WishListItem