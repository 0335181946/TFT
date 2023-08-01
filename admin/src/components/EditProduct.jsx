import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const EditProduct = ({ product, setOpenEditProduct }) => {

  const [title, setTitle] = useState(product.title);
  const [category, setCategory] = useState(product.category);
  const [subcategory, setSubcategory] = useState(product.subcategory);
  const [description, setDescription] = useState(product.description);
  const [sizes, setSizes] = useState(product.sizes);
  const [price, setPrice] = useState(product.price);
  const [image, setImage] = useState(product.image);
  const [imageOne, setImageOne] = useState(product.imageOne);

  const editProductHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.put('/api/products/update', {

        _id: product._id,
        title,
        category,
        subcategory,
        description,
        sizes,
        price,
        image,
        imageOne

      });
      toast.success('cap nhat product thanh cong');
      setOpenEditProduct(false);

    } catch (err) {
      toast.error('update failed, vui long thu lai');
    }
  }

  const handleChangeSize = (e, i) => {
    e.preventDefault();

    const clonedSizes = [...sizes];
    clonedSizes[`${i}`] = {value: e.target.value, key: i};
    setSizes(clonedSizes);
  };

  return (
    <div className='popup_container edit_product'>
      <form onSubmit={editProductHandler}>
        <h5 className='popup_title'>EDIT PRODUCT {product.title}</h5>
        <div className='close_form' onClick={() => setOpenEditProduct(false)}>X</div>
        <div className='popup_groups1 '>

          <div className='popup_left'>

            <div className='form_group'>
              <label htmlFor="title">title</label>
              <input required type="text" onChange={(e) => setTitle(e.target.value)} value={title} id='title' />
            </div>

            <div className='form_group'>
              <label htmlFor="category">category</label>
              <input required type="text" onChange={(e) => setCategory(e.target.value)} value={category} id='category' />
            </div>

            <div className='form_group'>
              <label htmlFor="subcategory">subcategory</label>
              <input required type="text" onChange={(e) => setSubcategory(e.target.value)} value={subcategory} id='subcategory' />
            </div>

            <div className='form_group'>
              <label htmlFor="description">description</label>
              <textarea id="description" cols="30" rows="10" onChange={(e) => setDescription(e.target.value)} spellCheck={false} value={description} ></textarea>
            </div>

          </div>

          <div className='popup_mid'>

            <div className='form_group'>
              <label htmlFor="price">price</label>
              <input required type="text" onChange={(e) => setPrice(e.target.value)} value={price} id='price'/>
            </div>

            <div className='form_group'>
              <label htmlFor="size">size</label>
              {product.sizes?.map((item, i) => (
               <input id="size" key={item.i} type='text' name='sizes' onChange={(e) => handleChangeSize(e, i, item.i)} value={sizes[`${i}`]?.value || ''}  />
              ))}
            </div>

          </div>

          <div className='popup_right'>

            <div className='form_group'>
              <label htmlFor="image">Image</label>
              <input type="text" required  onChange={(e) => setImage(e.target.value)} value={image} id='image' />
            </div>

            <div className='form_group'>
              <label htmlFor="imageOne">ImageOne</label>
              <input type="text" required  onChange={(e) => setImageOne(e.target.value)} value={imageOne} id='imageOne' />
            </div>

          </div>
        </div>
        <div className='popup_btn'>
          <button type='submit'>UPDATE</button>
        </div>

      </form>
    </div>
  )
}

export default EditProduct