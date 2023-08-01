import React from 'react';
import { Link } from 'react-router-dom'

const ShopProduct = ({ product }) => {
    return (
        <div className='product_group'>
            <img className='product_img' src={product.image} alt={product.title} />
            <div className='product_body'>

                <span className='product_category'>hãng: {product.category}</span>
                <span className='product_subcategory'>sân: {product.subcategory}</span>
                <h4 className='product_title'>TÊN: {product.title}</h4>
                <span className='product_price'>GIÁ:  {(product.price)}đ</span>
                <button className='icon_view'>
                    <Link to={`/products/${product._id}`}>
                        XEM CHI TIẾT
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default ShopProduct