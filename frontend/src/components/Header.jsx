import React, { useContext } from 'react';
import "../App.css";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Store } from '../Store';


const Header = () => {

  const navigate = useNavigate();

  const { state } = useContext(Store);
  const { cart, wish } = state;

  const cartItemsLength = cart.cartItems.reduce((a, c) => a + c.quantity, 0);


  const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    toast.success('you have success log out!');
    navigate('/login');
  }

  return (
    <div className='header_container'>
      <div className="h_row">
        <div className="h_col">
          <div className='h_logo'>
            <Link to="/" className='logo'><img src="https://bcassetcdn.com/social/53qwh2v4q7/preview.png" alt="" /></Link>
          </div>
          <div className='h_menu'>
            <ul className='menu_item'>
              <li><Link to="/" className='menu_link'>HOME</Link></li>
              <li><Link to="/shop" className='menu_link'>PRODUCT</Link></li>
              <li><Link to="/blogs" className='menu_link'>NEWS</Link></li>
              <li><Link to="/" className='menu_link'>ABOUT</Link></li>
              
              {userInfo && (
               <li><Link to="/orders" className='menu_link'>ORDERS</Link></li>
              )}
              {userInfo && (
                <li><Link to="/account" className='menu_link'>ĐỔI MẬT KHẨU</Link></li>
              )}

            </ul>
          </div>
        </div>

        <div className="h_col ">
          <div className="h_anotherMenu">
            <ul className='menu_item_2'>
              {userInfo ? (
                <>
                  <li>
                    <span className='menu_link_2'>
                      <div className='menu_div'>
                        <i class="fas fa-user-circle"></i>
                      </div>
                      <span onClick={logoutHandler}>LOGOUT</span>
                    </span>
                  </li>
                  <li><Link to="/wish" className='menu_link_2'>
                    <div className='menu_div'>
                      <i class="fas fa-heart"></i>
                      <span className='menu-badge'>{wish.wishItems.length}</span>
                    </div>
                    <span>Wishlist</span>
                  </Link>
                  </li>

                  <li>
                    <Link to="/cart" className='menu_link_2'>
                      <div className='menu_div'>
                        <i class="fas fa-shopping-bag"></i>
                        {cartItemsLength ? (<span className='menu-badge'>{cartItemsLength}</span>) : (<span className='menu-badge'>0</span>)}
                      </div>
                      <span>Cart</span>
                    </Link>
                  </li>
                </>

              ) : (
                <li><Link to="/login" className='menu_link_2'>
                  <div className='menu_div'>
                    <i class="fas fa-user-circle"></i>
                  </div>
                  <span>LOGIN</span>
                </Link>
                </li>
              )}

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
