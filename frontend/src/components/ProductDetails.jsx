import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import {toast} from 'react-toastify';


const ProductDetails = () => {

    const navigate =useNavigate();

    const {state, dispatch: ctxDispatch} = useContext(Store);
    const {cart, wish} = state;

    const [selectImg, setSelectedImg] = useState('');

    const [product, setProduct] = useState([]);
    const [size, setSize] = useState('');

    const location = useLocation();
    const id = location.pathname.split("/")[2];

    useEffect(() => {
        const fetchData = async () => {
            const resultProduct = await axios.get(`/api/products/find/${id}`);
            console.log(resultProduct.data);
            setProduct(resultProduct.data);
        }

        fetchData();
    }, [id]);


    //add to cart
    const addToCartHandler = async () =>{
        const existsItem = cart.cartItems.find((x) => x._id === product._id);
        const quantity = existsItem ? existsItem.quantity + 1 : 1;

        ctxDispatch({
            type: 'ADD_TO_CART',
            payload: {...product, quantity, size},
        });
        toast.success('them vao gio hang thanh cong');
        navigate('/cart')  
    }
    //add to wish
    const addToWishHandler = async () =>{
        const existsItem = wish.wishItems.find((x) => x._id === product._id);
        const quantity = existsItem ? existsItem.quantity : 1;

        if(existsItem){
            toast.error(' da them san pham vao ds yeu thich truoc do!');
            return;
        }

        ctxDispatch({
            type: 'ADD_TO_WISH',
            payload: {...product, quantity},
        });
        toast.success('them DS yeu thich thanh cong');
        navigate('/wish')  
    }


    return (
        <div className='pd_container'>
            <div className='pd_row'>
                <div className='pd_col'>
                    <div className='pd_imageDiv'>
                        <div className='pd_top'>
                            <img src={selectImg || product.image} className='pd_imgMain' alt={product.title} />
                        </div>
                        <div className='pd_bottom'>
                            <img src={product.image} className='pd_imgBot' onClick={() => setSelectedImg(`${product.image}`)} alt="" />
                            <img src={product.imageOne} className='pd_imgBot' onClick={() => setSelectedImg(`${product.imageOne}`)} alt="" />
                            <img src="https://product.hstatic.net/200000278317/product/giay-da-banh-nike-street-gato-dc8466-437-xanh-hoang-gia-3_452aa51f74044c7e82ac0b80bdbcf373_master.jpg" className='pd_imgBot' onClick={() => setSelectedImg('https://product.hstatic.net/200000278317/product/giay-da-banh-nike-street-gato-dc8466-437-xanh-hoang-gia-3_452aa51f74044c7e82ac0b80bdbcf373_master.jpg')} alt="" />
                        </div>
                    </div>
                </div>
                <div className='pd_col'>
                    <div className='pd_groups'>

                        <div className='pd_group'>
                            <h3 className='pd_title'>Tên: {product.title}</h3>
                        </div>

                        <div className='pd_group'>
                            <span className='pd_category'>BRAND: {product.category}</span>
                            <span className='pd_subcategory'> SÂN: {product.subcategory}</span>
                        </div>

                        <div className='pd_group'>
                            <p className='pd_desc'>{product.description}</p>
                        </div>
                        <div className='pd_group'>
                            <p className='pd_quantity'>Số lượng kho: <span className='pd_quantityNumber'>1</span></p>
                        </div>


                        <div className='pd_group'>
                            <div className='pd_otherAction'>
                                <div className='pd_size'>
                                    <h4 className='pd_sizeTitle'>Size:</h4>
                                    <div className='pd_sizeDiv'>
                                        {
                                            product.sizes?.map((size) => (
                                                <>
                                                    <input type="radio" onChange={(e) => setSize(e.target.value)} key={size._id} id={size.value} name="size" value={size.value} required/>
                                                    <label htmlFor={size.value}>{size.value}</label>
                                                </>
                                            ))
                                        }                                  
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='pd_group'>
                            <p className='pd_price'>Giá: {(product.price)} vnd</p>
                        </div>

                        <div className='pd_group'>
                            <div className='pd_buttons'>
                                <button className='pd_wish' onClick={addToWishHandler}>THÊM VÀO YÊU THÍCH</button>
                                <button className='pd_cart'  onClick={addToCartHandler}>THÊM VÀO GIỎ HÀNG</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails