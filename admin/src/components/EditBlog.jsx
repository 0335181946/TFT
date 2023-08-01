import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios'

const EditBlog = ({blog, setOpenEdit}) => {

    const [title, setTitle] = useState(blog.title);
    const [description, setDescription] = useState(blog.description);

    const editBlogHandler = async(e)=>{
        e.preventDefault();

        try{
            const {data} = await axios.put('/api/blogs/update',{

                _id: blog._id,
                title,
                description,
                
            });
            toast.success('cap nhat blog thanh cong');
            setOpenEdit(false);

        }catch(err){
           toast.error('update failed, vui long thu lai');
        }
    }


  return (
    <div className='popup_container'>
      <form onSubmit={editBlogHandler}>
        <h5 className='popup_title'>EDIT BLOG</h5>
        <div className='close_form' onClick={() => setOpenEdit(false)}>X</div>
        <div className='form_group'>
          <label htmlFor="title">title</label>
          <input required type="text" onChange={(e) => setTitle(e.target.value)} value={title} id='title' />
        </div>

        <div className='form_group'>
          <label htmlFor="description">description</label>
          <textarea  id="description" cols="30" rows="10" onChange={(e) => setDescription(e.target.value)} spellCheck={false} value={description} ></textarea>
          
        </div>


        <div className='popup_btn'>
          <button type='submit'>UPDATE</button>
        </div>

      </form>
    </div>
  )
}

export default EditBlog