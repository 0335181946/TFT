import React from 'react'

const ViewBlog = ({ setOpenView, blog }) => {
  return (
    <div className='popup_container'>
      <div className='popup_row'>
        <div className='popup_groups'>
          <h2 className='popup_title'>{blog.title}</h2>
          <div className='close_form' onClick={() => setOpenView(false)}>X</div>
          <div className='popup_group view'>
                  <label htmlFor="title">Description:</label>
                  <p className='description'> {blog.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewBlog