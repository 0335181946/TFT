import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NewProduct from './NewProduct'

const NewProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const resultProduct = await axios.get('/api/products/all');
            setProducts(resultProduct.data);
        }

        fetchData();
    }, []);

    return (
        <div className='productS_container'>
            <div className='productS_row'>
                <h2 className='productS_title'>NEW PRODUCTS</h2>
            </div>
            <div className='productS_row'>
                {
                    products.length === 0 ? (
                        <h3 className='no_data'>NO PRODUCT</h3>
                    ) : (
                        <div className='productS_groups'>
                            {
                                products.slice(-8).map((product) => (
                                    <NewProduct key={product._id} product={product} />
                                ))
                            }
                        </div>

                    )
                }
               
            </div>
        </div>
    )
}

export default NewProducts
