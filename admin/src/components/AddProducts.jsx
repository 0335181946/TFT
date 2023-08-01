import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const AddProducts = () => {

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [sizes, setSizes] = useState([{ value: '', key: '' }]);
  const [image, setImage] = useState('');
  const [imageOne, setImageOne] = useState('');


  const handleChangeSize = (e, i) => {
    e.preventDefault();
    const newSizeValues = [...sizes];
    newSizeValues[`${i}`] = {value: e.target.value, key: i};
    setSizes(newSizeValues);
  }

  const addSizeFields = () => {
    setSizes([...sizes, {value: '', key: ''}]);
  }

  const removeSizeFields = (i) => {
    const newSizeValues = [...sizes];
    newSizeValues.splice(i,1);
    setSizes(newSizeValues);
  }

  const addProductHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('/api/products/add', {
        title,
        category,
        subcategory,
        description,
        price,
        sizes,
        image,
        imageOne
      });

      toast.success('them product thanh cong!');
      setTitle('');
      setCategory('');
      setSubcategory('');
      setDescription('');
      setPrice('');
      setSizes([{value: '', key: ''}]);
      setImage('');
      setImageOne('');

    } catch (err) {
      toast.error('them product that bai');
    }
  }



  return (
    <div className=''>
      <form onSubmit={addProductHandler}>
        <h2 className='add_title'>ADD PRODUCT</h2>
        <div className='add_groups '>

          <div className='add_left'>

            <div className='form_group'>
              <label htmlFor="title">title</label>
              <input required type="text" id='title' onChange={(e) => setTitle(e.target.value)} value={title} />
            </div>

            <div className='form_group'>
              <label htmlFor="category">category</label>
              <input required type="text" id='category' onChange={(e) => setCategory(e.target.value)} value={category} />
            </div>

            <div className='form_group'>
              <label htmlFor="subcategory">subcategory</label>
              <input required type="text" id='subcategory' onChange={(e) => setSubcategory(e.target.value)} value={subcategory} />
            </div>

            <div className='form_group'>
              <label htmlFor="description">description</label>
              <textarea id="description" cols="30" rows="10" spellCheck={false} required onChange={(e) => setDescription(e.target.value)} value={description}   ></textarea>
            </div>

          </div>

          <div className='popup_mid'>

            <div className='form_group'>
              <label htmlFor="price">price</label>
              <input required type="text" id='price' onChange={(e) => setPrice(e.target.value)} value={price} />
            </div>

            <div className='form_group'>
              <div className='form_group_values'>
                <label htmlFor="size">SIZES</label>
                {sizes.map((element, i) => (
                  <div className='d_flexAdd' key={i}>
                    <input type='text' name='sizes' id="size" value={sizes[`${i}`]?.value || ''} onChange={e => handleChangeSize(e, i)} />
                    {
                      i ? <button type='button' className='btn_remove' onClick={() => removeSizeFields(i)}>REMOVE</button> : null
                    }
                  </div>
                ))}
              </div>
              <div className='form_groupAdd'>
                <button type='button' className='btn_add' onClick={() => addSizeFields()}>ADD FIELD</button>
              </div>


            </div>

          </div>

          <div className='add_right'>

            <div className='form_group'>
              <label htmlFor="image">Image</label>
              <input type="text" required onChange={(e) => setImage(e.target.value)} id='image' />
            </div>

            <div className='form_group'>
              <label htmlFor="imageOne">ImageOne</label>
              <input type="text" required onChange={(e) => setImageOne(e.target.value)} id='imageOne' />
            </div>

          </div>
        </div>
        <div className='add_btn'>
          <button type='submit'>ADD PRODUCT</button>
        </div>

      </form>
    </div>
  )
}

export default AddProducts