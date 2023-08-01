import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ViewProduct from './ViewProduct';
import EditProduct from './EditProduct';

const AllProduct = ({ product }) => {

    const [openViewProduct, setOpenViewProduct] = useState(false);
    const [openEditProduct, setOpenEditProduct] = useState(false);


    const handlerDeleteProduct = async (e) => {
        e.preventDefault();
        try {



            const { data } = await axios.delete(`/api/products/delete/${product._id}`)
            if (data) {
                toast.success('xoa product thanh cong!');
            }

        } catch (err) {
            toast.error('product not delete');
        }

    }


    return (
        <>
            <div className='all_group' key={product._id}>
                <div className='all_left'>
                    <h3 className='all_subtitle'>{product.title}</h3>
                </div>

                <div className='all_right'>
                    <i class="fas fa-eye" onClick={() => setOpenViewProduct(true)}></i>
                    <i class="fas fa-edit" onClick={() => setOpenEditProduct(true)}></i>
                    <i class="fas fa-trash-alt" onClick={handlerDeleteProduct}></i>
                </div>
            </div>
            {openViewProduct && <ViewProduct product={product} setOpenViewProduct={setOpenViewProduct} />}
            {openEditProduct && <EditProduct product={product} setOpenEditProduct={setOpenEditProduct} />}
        </>
    )
}

export default AllProduct