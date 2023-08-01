import React from 'react';
import { NavLink} from 'react-router-dom';

const SideBar = () => {
    return (
        <div className='side_container'>
            <div className='side_row'>
                <div className='side_group'>
                    <NavLink to='/' activeclassname="active"> <i class="fas fa-tachometer-alt"></i> DASHBOARD</NavLink>
                </div>

                <div className='side_group'>
                    <NavLink to='/products' activeclassname="active"><i class="fab fa-product-hunt"></i> PRODUCT</NavLink>
                </div>

                <div className='side_group'>
                    <NavLink to='/users' activeclassname="active"><i class="far fa-user"></i> USER</NavLink>
                </div>

                <div className='side_group'>
                    <NavLink to='/posts' activeclassname="active"> <i class="fas fa-paste"></i> Blogs</NavLink>
                </div>
            </div>
        </div>
    )
}

export default SideBar