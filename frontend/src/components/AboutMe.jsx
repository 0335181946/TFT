import React from 'react'

const AboutMe = () => {

  const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

  console.log(userInfo);
  return (
    <div className='am_container'>
      <div className='am_row'>
        <h2 className='sign_title'>ABOUT ME</h2>
      </div>

      <div className='am_row'>
        <div className='am_left'>
          <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="" />
        </div>
        <div className='am_right'>
          <h3 className='am_fullName'>name: {userInfo.username}</h3>
          <h3 className='am_email'>email: {userInfo.email}</h3>
        </div>
      </div>
    </div>
  )
}

export default AboutMe