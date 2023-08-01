import React from 'react'

const ViewProduct = ({ product, setOpenViewProduct }) => {
  return (
    <div className='popup_container viewproduct'>
      <div className='popup_row'>
        <div className='popup_groups'>
          <h2 className='popup_title'>{product.title}</h2>
          <div className='close_form' onClick={() => setOpenViewProduct(false)}>X</div>
          <div className='popup_group view'>

            <label htmlFor="title">Category:</label>
            <p className='description'> {product.category}</p>

            <label htmlFor="title">Subcategory:</label>
            <p className='description'> {product.subcategory}</p>

            <label htmlFor="title">Description:</label>
            <p className='description'> {product.description}</p>

            <label htmlFor="title">Price:</label>
            <p className='description'> {product.price}</p>

            <label htmlFor="title">Size:</label>
            <div className='popup_image'>
              {product.sizes?.map((item) => (
                <span className='item'>{item.value}</span>
              ))}
            </div>

            <label htmlFor="title">Image:</label>
            <div className='popup_image'>
              <img src={product.image}  alt={product.title}/>
              <img src={product.imageOne}  alt={product.title} />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewProduct