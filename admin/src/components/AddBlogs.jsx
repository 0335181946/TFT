import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';


const AddBlogs = ({setOpenEdit}) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  const addBlogHandler = async (e) =>{
      e.preventDefault();

      try{
        const {data} = await axios.post('/api/blogs/add',{
          title,
          description
        });

        toast.success('them blog thanh cong!');
        setTitle('');
        setDescription('');

      }catch(err){
        toast.error('them blog that bai');
      }
  }


  return (
    <div className='addb_container'>
      <form className='addb_form' onSubmit={addBlogHandler}>
        <h5 className='popup_title'>ADD BLOG</h5>
        <div className='form_group'>
          <label htmlFor="title">title</label>
          <input required type="text" onChange={(e) => setTitle(e.target.value)} value={title} id='title' />
        </div>

        <div className='form_group'>
          <label htmlFor="description">description</label>
          <textarea  id="description" cols="30" rows="10" onChange={(e) => setDescription(e.target.value)} value={description} spellCheck={false}  ></textarea>
          
        </div>


        <div className='popup_btn'>
          <button type='submit'>THEM BLOG</button>
        </div>

      </form>
    </div>
  )
}

export default AddBlogs