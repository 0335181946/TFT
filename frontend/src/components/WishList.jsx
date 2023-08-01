import React, { useContext } from 'react'
import { Store } from '../Store';
import WishListItem from './WishListItem';
import { toast } from 'react-toastify';

const WishList = () => {

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { wish: { wishItems } } = state;

    const removeItemHandler = (item) => {
        ctxDispatch({
            type: 'REMOVE_FROM_WISH',
            payload: item,
        });
        toast.success('xoa khoi ds yeu thich thanh cong');
    }

    return (
        <div className='wish_container'>
            <div className='wish_row'>
                <h2 className='wish_title'>WISH LIST</h2>
            </div>
            <div className='wish_row'>
                {
                    wishItems.length === 0 ? (
                        <h3 className='wish_no_product'>no product at wish!</h3>
                    ) : (
                        <div className='wish_groups'>
                            {
                                wishItems.map((item) => (
                                    <WishListItem key={item._id} item={item} removeItemHandler={removeItemHandler} />
                                ))
                            }

                        </div>
                    )
                }

            </div>
        </div >
    )
}

export default WishList