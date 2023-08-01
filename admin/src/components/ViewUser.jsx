import React from 'react'

const ViewUser = ({user, setOpenViewUser}) => {

  return (
    <div className='popup_container'>
      <div className='popup_row'>
        <div className='popup_groups'>
          <h2 className='popup_title'>{user.username}</h2>
          <div className='close_form' onClick={() => setOpenViewUser(false)}>X</div>
          <div className='popup_group view'>
                  <label htmlFor="title">Email:</label>
                  <p className='description'> {user.email}</p>
                  <label htmlFor="title">Name:</label>
                  <p className='description'> {user.username}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewUser