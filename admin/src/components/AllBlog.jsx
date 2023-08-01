import React, { useState } from 'react';
import ViewBlog from './ViewBlog';
import {toast} from 'react-toastify';
import axios from 'axios';
import EditBlog from './EditBlog';


const AllBlog = ({ blog }) => {

  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);


  const handlerDeleteBlog = async(e) =>{
      e.preventDefault();
    try{
      const {data}  = await axios.delete(`/api/blogs/delete/${blog._id}`)
      if(data){
        toast.success('xoa blog thanh cong!');
      }

    }catch(err){
      toast.error('blog not delete');
    }

  }


  return (
    <>
      <div className='all_group' key={blog._id}>
        <div className='all_left'>
          <h3 className='all_subtitle'>{blog.title}</h3>
        </div>

        <div className='all_right'>
          <i class="fas fa-eye" onClick={() => setOpenView(true)}></i>
          <i class="fas fa-edit" onClick={() => setOpenEdit(true)}></i>
          <i class="fas fa-trash-alt" onClick={handlerDeleteBlog}></i>
        </div>
      </div>
      {openView && <ViewBlog blog={blog} setOpenView={setOpenView} />}
      {openEdit && <EditBlog blog={blog} setOpenEdit={setOpenEdit} />}
    </>

  )
}

export default AllBlog