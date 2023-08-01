import React from 'react'
import { Link } from 'react-router-dom'

const MyOrderDetail = ({ item }) => {
    return (
        <Link to={`/products/${item._id}`}>
                <div className='cart_total'>
                    <img className='product_img' src={item.image} alt={item.title} />
                    <div className='info_item_cart'>
                        <span className='product_category'>HÃNG: {item.category}</span>
                        <h3 className='product_title'>TÊN: {item.title}</h3>
                        <span className='product_size'>Size: {item.size}</span>
                        <span className='product_price'>Giá: {(item.price)}đ</span>
                    </div>
                </div>

            </Link>

        // <div className='product_group'>
        //         <Link to={`/products/${item._id}`}>
        //             <div className='product_body'>
        //                 <img className='product_img' src={item.image} alt={item.title} />
        //             </div>
        //             <div className='product_footer'>
        //                 <div className='product_divTop'>
        //                     <span className='product_category'>{item.category}</span>
        //                     <h3 className='product_title'>{item.title}</h3>
        //                     <span className='product_size'>Size: {item.size}</span>
        //                     <span className='product_price'>{item.price}đ</span>
        //                 </div>
        //             </div>
        //         </Link>


        //     </div>
    )
}

export default MyOrderDetail